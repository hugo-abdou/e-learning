<?php

namespace App\Http\Controllers\Api;

use App\Actions\Fortify\CreateNewUser;
use App\Actions\Fortify\UpdateUserPassword;
use App\Actions\Fortify\UpdateUserProfileInformation;
use App\Enums\UserStatusEnum;
use App\Events\UserUpdatedEvent;
use App\Filters\Search;
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
use Illuminate\Validation\Rule;
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
        $query = User::with(['ingagedCourses' => fn ($q) => $q->select(['user_id'])])->whereNot('id', auth()->id());
        if (auth()->user()->isSupperAdmin()) {
        } elseif (auth()->user()->isAdmin()) {
            $query = $query->where('admin_id',  auth()->id());
        } else {
            $query = $query->where('admin_id',  auth()->user()->admin->id);
        }

        $records = Pipeline::send($query)->through([
            Sort::class,
            new Search(['name', 'email']),
            function ($query, Closure $next) {
                if (!request()->role || request()->role == 'all') return $next($query->role(auth()->user()->availableRoles));
                return $query->role(request()->role);
            },
        ])
            ->thenReturn();
        return UserResource::collection($records->paginate($request->get('itemsPerPage', $query->count())));
    }



    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request, CreateNewUser $user_service)
    {
        $user = $user_service->create($request->all());
        return response()->json(['message' => 'User created successfully', "data" => $user]);
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($user)
    {
        $isSupperAdmin = auth()->user()->isSupperAdmin();
        if ($isSupperAdmin && $user = User::findOrFail($user)) return AuthResource::make($user);
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
     * Show the form for editing status of the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function status(Request $request)
    {
        $request->validate([
            'status' => ['required', Rule::in(UserStatusEnum::values())]
        ]);
        auth()->user()->update(['status' => $request->status]);
        return AuthResource::make(auth()->user());
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

        // app(DeletesUsers::class)->delete($user);
        $user->delete();

        return response()->json(['message' => 'Account deleted successfully']);
    }
}
