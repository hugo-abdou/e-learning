<?php

use App\Http\Controllers\Api\ApiTokenController;
use App\Http\Controllers\Api\SessionsController;
use Illuminate\Support\Facades\Route;
use Laravel\Jetstream\Http\Controllers\Inertia\CurrentUserController;
use Laravel\Jetstream\Http\Controllers\Inertia\OtherBrowserSessionsController;
use Laravel\Jetstream\Http\Controllers\Inertia\ProfilePhotoController;
use Laravel\Jetstream\Jetstream;

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/user/other-browser-sessions', SessionsController::class);
    Route::delete('/user/other-browser-sessions', [OtherBrowserSessionsController::class, 'destroy'])->name('other-browser-sessions.destroy');
    Route::delete('/user/profile-photo', [ProfilePhotoController::class, 'destroy'])->name('current-user-photo.destroy');
    if (Jetstream::hasAccountDeletionFeatures()) {
        Route::delete('/user', [CurrentUserController::class, 'destroy'])->name('current-user.destroy');
    }
    if (Jetstream::hasApiFeatures()) {
        Route::get('/user/api-tokens', [ApiTokenController::class, 'index'])->name('api-tokens.index');
        Route::post('/user/api-tokens', [ApiTokenController::class, 'store'])->name('api-tokens.store');
        Route::put('/user/api-tokens/{token}', [ApiTokenController::class, 'update'])->name('api-tokens.update');
        Route::delete('/user/api-tokens/{token}', [ApiTokenController::class, 'destroy'])->name('api-tokens.destroy');
    }
});
