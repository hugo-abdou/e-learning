<?php

use App\Http\Controllers\Api\AnalyticController;
use App\Http\Controllers\Api\ApiTokenController;
use App\Http\Controllers\Api\ChapterController;
use App\Http\Controllers\Api\CoursesController;
use App\Http\Controllers\Api\MediaController;
use App\Http\Controllers\Api\MediaRetryController;
use App\Http\Controllers\Api\PublishCourseController;
use App\Http\Controllers\Api\ResumableUploadController;
use App\Http\Controllers\Api\RoleController;
use App\Http\Controllers\Api\ScheduleCourseController;
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

Route::post('/media/bunny_webhook', [MediaController::class, 'bunny_webhook'])->name('bunny_webhook');
Route::get('media/upload', ResumableUploadController::class);
Route::post('media/upload', ResumableUploadController::class);
Route::middleware(['auth:sanctum'])->get('/auth', fn (Request $request) => AuthResource::make($request->user())->resolve());
Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::put('/user/{user}/update', [UsersController::class, 'edit']);
    Route::put('/user/{user}/password', [UsersController::class, 'password']);
    Route::get('/user/{user}/other-browser-sessions', SessionsController::class);
    Route::delete('/user/{user}/other-browser-sessions', [SessionsController::class, 'destroy']);
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    Route::name('media.')->prefix('media')->group(function () {
        Route::get('/', [MediaController::class, 'index'])->name('list');
        Route::get('/search', [MediaController::class, 'search'])->name('fetch');
        // Route::post('/upload', [MediaController::class, 'upload'])->name('upload');
        Route::post('/store', [MediaController::class, 'store'])->name('store');
        Route::get('/{media}', [MediaController::class, 'show'])->name('show');
        Route::delete('/{media}', [MediaController::class, 'destroy'])->name('destroy');
        Route::post('/{media}/retry', MediaRetryController::class)->name('retry');
    });
    Route::post('/upload_chunk',  [MediaController::class, 'uploadChunk'])->name('upload_chunk');
    Route::post('/merge_video',  [MediaController::class, 'mergeVideo'])->name('merge_video');
    /////////////////////////////////////////////////////////////////////////////////////////////////////
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
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    Route::apiResource('courses', CoursesController::class);
    Route::patch('courses/{course}/publish', PublishCourseController::class);
    Route::patch('courses/{course}/schedule', ScheduleCourseController::class);
    Route::apiResource('chapters', ChapterController::class);
    Route::apiResource('analytics', AnalyticController::class);
    ////////////////////////////////////////////////////////////////////////////////
});

Route::prefix('admin')->middleware(['auth:sanctum'])->group(function () {
    Route::get('roles', [RoleController::class, 'roles']);
    Route::post('roles', [RoleController::class, 'store']);
    Route::put('roles/{role}', [RoleController::class, 'update']);
    Route::get('permissions', [RoleController::class, 'permissions']);
});
