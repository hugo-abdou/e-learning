<?php

namespace App\Http\Controllers\Api;

use App\Filters\Where;
use App\Http\Controllers\Controller;
use App\Http\Requests\RoleRequest;
use App\Http\Resources\PermissionResource;
use App\Http\Resources\PlanResource;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use App\Models\Role;
use Illuminate\Support\Facades\Pipeline;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function roles(Request $request)
    {
        if (auth()->user()->isSupperAdmin()) {
            return PlanResource::collection(Role::with(['users'])->paginate($request->get('itemsPerPage', Role::count())));
        }
        return PlanResource::collection(Role::with(['users'])->where('user_id', auth()->id())->orWhere('name', 'student')->get());
    }
    /**
     * Display a listing of the resource.
     */
    public function permissions(Request $request)
    {
        if (auth()->user()->isSupperAdmin()) {
            return PermissionResource::collection(Permission::paginate($request->get('itemsPerPage', Permission::count())));
        }
        return PermissionResource::collection(auth()->user()->getPermissionsViaRoles());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RoleRequest $request)
    {
        // take the name and make it like a slug then make it lowercase
        /**
         * Generate a slug from the name, by trimming any underscores or dashes,
         * removing any non-alphanumeric characters, replacing spaces with underscores
         * and making it lowercase.
         */
        $name = Str::of($request->validated('name'))
            ->trim('_-')
            ->replaceMatches('/[^a-z0-9\s]+/', '')
            ->replace(' ', '_')->slug('-')->lower();


        if (Role::where('name', $name)->exists()) {
            return response()->json(["errors" => ["name" => ["The name has already been taken."]]], 422);
        }
        $role = Role::create([
            "user_id" => auth()->user()->isSupperAdmin() ? auth()->id() : auth()->id(),
            'name' => $name,
            'type' => $request->validated('type'),
            'data' => Arr::except($request->validated(), ['type', 'name', 'permissions'])
        ]);

        $newPermissions = collect(["read_", "create_", "update_", "delete_"])->map(fn ($prefix) => $prefix . $name);

        Permission::insert(
            $newPermissions->map(fn ($name) => ['name' => $name, 'guard_name' => 'sanctum', "created_at" => now(), "updated_at" => now()])->toArray()
        );
        auth()->user()->roles->map->givePermissionTo($newPermissions->toArray());

        if ($permissions = $request->validated('permissions')) {
            $role->givePermissionTo($permissions);
        }
        return response()->json(["message" => "Role created successfully"]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(RoleRequest $request, Role $role)
    {
        $name = Str::of($request->validated('name'))
            ->trim('_')
            ->replaceMatches('/[^a-z0-9\s]+/', ' ')
            ->replace(' ', '_')->slug('-')->lower();


        if (Role::whereNot('id', $role->id)->where('name', $name)->exists()) {
            return response()->json(["errors" => ["name" => ["The name has already been taken."]]], 422);
        }

        Permission::where('name', 'like', '%_' . $role->name)->get()->each(function ($permission) use ($role, $name) {
            $oldName = $permission->name;
            $permission->name = str_replace($role->name, $name, $oldName);
            $permission->save();
        });
        $role->update([
            'name' =>  $name,
            'data' => Arr::except($request->validated(), ['type', 'name', 'permissions'])
        ]);
        if ($permissions = $request->validated('permissions')) {
            $role->syncPermissions($permissions);
        }
        return response()->json(["message" => "Role updated successfully"]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role)
    {
        Permission::where('name', 'like', '%_' . $role->name)->delete();
        $role->delete();
        return response()->json(["message" => "Role deleted successfully"]);
    }
}
