<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravel\Jetstream\Jetstream;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {
        $validated =  Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => $this->passwordRules(),
            'terms' => Jetstream::hasTermsAndPrivacyPolicyFeature() ? ['accepted', 'required'] : '',
            'avatar' => ['nullable', 'file', 'mimes:jpg,jpeg,png'],
        ])->validate();

        $adminId = auth()->user()->isAdmin() || auth()->user()->isSupperAdmin() ? auth()->id() : auth()->user()->admin_id;
        $user = User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
            "admin_id" => $adminId
        ]);
        if (isset($input['avatar'])) {
            $user->updateProfilePhoto($validated['avatar']);
        }
        $user->syncRoles(json_decode($input['roles']));
        return $user;
    }
}
