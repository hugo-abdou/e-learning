<?php

use App\Http\Controllers\Api\ApiTokenController;
use App\Http\Controllers\Api\SessionsController;
use App\Http\Controllers\Api\UsersController;
use App\Http\Resources\AuthResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Jetstream\Jetstream;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware(['auth:sanctum'])->get('/auth', fn (Request $request) => AuthResource::make($request->user())->resolve());
Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::put('/user/{user}/update', [UsersController::class, 'edit']);
    Route::put('/user/{user}/password', [UsersController::class, 'password']);
    Route::get('/user/{user}/other-browser-sessions', SessionsController::class);
    Route::delete('/user/{user}/other-browser-sessions', [SessionsController::class, 'destroy']);
    if (Jetstream::hasAccountDeletionFeatures()) Route::delete('/user/{user}/destroy', [UsersController::class, 'destroyAccount']);
    if (Jetstream::hasApiFeatures()) {
        Route::get('/user/api-tokens', [ApiTokenController::class, 'index'])->name('api-tokens.index');
        Route::post('/user/api-tokens', [ApiTokenController::class, 'store'])->name('api-tokens.store');
        Route::put('/user/api-tokens/{token}', [ApiTokenController::class, 'update'])->name('api-tokens.update');
        Route::delete('/user/api-tokens/{token}', [ApiTokenController::class, 'destroy'])->name('api-tokens.destroy');
    }
    Route::get('users', [UsersController::class, 'index']);
    Route::post('users', [UsersController::class, 'store']);
    Route::get('users/{user}', [UsersController::class, 'show']);
    Route::delete('users/{user}', [UsersController::class, 'destroy']);
});
