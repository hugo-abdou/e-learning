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
use Closure;
use Illuminate\Support\Facades\Pipeline;
use Illuminate\Support\Arr;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function roles(Request $request)
    {
        $query = Role::query();
        $records = Pipeline::send($query->with(['users']))->through([])->thenReturn()->get();


        return PlanResource::collection($records);
    }
    /**
     * Display a listing of the resource.
     */
    public function permissions(Request $request)
    {
        return PermissionResource::collection(Permission::paginate($request->get('itemsPerPage', 100)));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RoleRequest $request)
    {
        $role = Role::create([
            'name' =>  $request->validated('name'),
            'type' => $request->validated('type'),
            'data' => Arr::except($request->validated(), ['type', 'name', 'permissions'])
        ]);
        if ($permissions = $request->validated('permissions')) {
            $role->syncPermissions($permissions);
        }
        return response()->json(["message" => "Role created successfully"]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(RoleRequest $request, Role $role)
    {
        $role->update([
            'name' =>  $request->validated('name'),
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
    public function destroy(string $id)
    {
        //
    }
}
