<?php

namespace App\Http\Controllers\Api;

use App\Actions\Fortify\CreateNewUser;
use App\Actions\Fortify\UpdateUserPassword;
use App\Actions\Fortify\UpdateUserProfileInformation;
use App\Filters\Sort;
use App\Http\Resources\AuthResource;
use App\Http\Resources\UserResource;
use App\Models\User;
use Closure;
use Illuminate\Contracts\Auth\StatefulGuard;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Pipeline;
use Illuminate\Validation\ValidationException;

use Laravel\Fortify\Actions\ConfirmPassword;
use Laravel\Jetstream\Contracts\DeletesUsers;

class UsersController extends Controller
{


    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index(Request $request)
    {
        $isSuperAdmin = true;

        $query = $isSuperAdmin  ? User::query() : auth()->user()->users();

        if ($request->has('brand')) {
            $query->where('whitelabel_id', $request->brand);
        }

        $records = Pipeline::send($query)->through([
            Sort::class,
            function ($query, Closure $next) {
                if (!request()->role || request()->role == 'all') return $next($query);
                return $query->role(request()->get('role'), 'sanctum');
            },
            function ($query, Closure $next) {
                if (!request()->q) return $next($query);
                return $query->where('name', 'like', '%' . request()->q . '%')
                    ->orWhere('email', 'like', '%' . request()->q . '%')
                    ->orWhere('id', 'like', '%' . request()->q . '%');
            }
        ])
            ->thenReturn()
            ->paginate($request->get('itemsPerPage', 10));

        return UserResource::collection($records);
    }



    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request, CreateNewUser $user_service)
    {
        $user = $user_service->create($request->all());
        $isAdmin = true;
        $user->update([
            'whitelabel_id' => $request->get('brand', null),
            'admin_id' =>  $isAdmin && $request->has('brand', null) ? null :  auth()->id()
        ]);
        return response()->json(['message' => 'User created successfully', "data" => $user]);
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($user)
    {
        $isSuperAdmin = true;
        if ($isSuperAdmin && $user = User::findOrFail($user)) return AuthResource::make($user);
        if ($user = auth()->user()->users()->findOrFail($user)) return AuthResource::make($user);
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit(Request $request, User $user, UpdateUserProfileInformation $user_service)
    {

        $user_service->update($user, $request->all());
        return response()->json(['message' => 'User Updated successfully']);
    }
    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function password(Request $request, User $user, UpdateUserPassword $user_service)
    {
        $user_service->update($user, $request->all());
        return response()->json(['message' => 'User Password Updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(['message' => 'User deleted successfully']);
    }
    /**
     * Delete the current user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Illuminate\Contracts\Auth\StatefulGuard  $guard
     * @return \Illuminate\Http\Response
     */
    public function destroyAccount(Request $request, User $user, StatefulGuard $guard)
    {
        $confirmed = app(ConfirmPassword::class)(
            $guard,
            $request->user(),
            $request->password
        );

        if (!$confirmed) throw ValidationException::withMessages(['password' => __('The password is incorrect.')]);

        app(DeletesUsers::class)->delete($user);

        return response()->json(['message' => 'Account deleted successfully']);
    }
}
