<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        $user = User::where('email', $request->email)->first();
        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages(['email' => ['The provided credentials are incorrect.']]);
        }
        $token = $user->createToken($request->ip())->plainTextToken;
        return response()->json(['token' => $token]);
    }

    public function logout(Request $request)
    {

        // Revoke the token that was used to authenticate the current request...
        if (method_exists(auth()->user()->currentAccessToken(), 'delete')) {
            auth()->user()->currentAccessToken()->delete();
            return response()->json(['message' => 'Logged out successfully']);
        }

        auth()->guard('web')->logout();

        return response()->json(['message' => 'Logged out successfully']);
    }
}
