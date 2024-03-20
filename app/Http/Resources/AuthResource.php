<?php

namespace App\Http\Resources;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class AuthResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id" =>  $this->id,
            "name" => $this->name,
            "email" => $this->email,
            "verified" => !!$this->email_verified_at,
            "avatar" => $this->ProfilePhotoUrl,
            "roles" => $this->getRoleNames(),
            "status" => $this->status,
            // "planFeatures" => $this->plan_features,
            "permissions" => $this->getPermissionsViaRoles()->pluck('name'),
            "avaliableRoles" => $this->availableRoles(auth()->user()),
        ];
    }

    private function availableRoles(User $user)
    {
        $roles = collect([]);
        if ($user->isSupperAdmin()) {
            $roles = Role::all()->pluck('name');
        } elseif ($user->isAdmin()) {
            $roles = Role::with(['users'])->where('user_id', $user->id)->orWhere('name', 'student')->get()->pluck('name');
        } elseif ($user->admin) {
            $roles = $this->availableRoles($user->admin);
        }

        $roles =  $roles->filter(function ($value) use ($user) {
            return $user->can("read_$value") || $user->can("update_$value") || $user->can("delete_$value") || $user->can("create_$value") || false;
        });

        return $roles;
    }
}
