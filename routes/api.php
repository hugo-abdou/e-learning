<?php

use App\Http\Controllers\Api\AttachmentsController;
use App\Http\Controllers\Api\CategoriesController;
use App\Http\Controllers\Api\ChapterController;
use App\Http\Controllers\Api\ChatController;
use App\Http\Controllers\Api\CoursesController;
use App\Http\Controllers\Api\MediaController;
use App\Http\Controllers\Api\MediaRetryController;
use App\Http\Controllers\Api\PublishCourseController;
use App\Http\Controllers\Api\PublishQuizController;
use App\Http\Controllers\Api\QuizController;
use App\Http\Controllers\Api\ResumableUploadController;
use App\Http\Controllers\Api\RoleController;
use App\Http\Controllers\Api\ScheduleCourseController;
use App\Http\Controllers\Api\ScheduleQuizController;
use App\Http\Controllers\Api\StatisticsController;
use App\Http\Controllers\Api\StudentsController;
use App\Http\Controllers\Api\UpdateCategoriesOrderController;
use App\Http\Controllers\Api\UsersController;
use App\Http\Controllers\AuthController;
use App\Http\Resources\AuthResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


Route::middleware(['auth:sanctum'])->group(function () {

    // Route::any('/broadcasting/auth', [AuthController::class, 'authenticate_broadcaster']);

    Route::get('media/upload', ResumableUploadController::class);
    Route::post('media/upload', ResumableUploadController::class);
    Route::get('/auth', fn (Request $request) => AuthResource::make($request->user())->resolve());
    Route::put('/auth/status', [UsersController::class, 'status']);
    Route::get('users', [UsersController::class, 'index']);
    Route::get('users/{user}', [UsersController::class, 'show']);
    Route::put('/users/{user}/update', [UsersController::class, 'edit']);
    Route::put('/users/{user}/password', [UsersController::class, 'password']);
    Route::post('users', [UsersController::class, 'store']);
    Route::delete('users/{user}', [UsersController::class, 'destroy']);
    Route::delete('/user/{user}/destroy', [UsersController::class, 'destroyAccount']);
    // Route::get('/user/{user}/other-browser-sessions', SessionsController::class);
    // Route::delete('/user/{user}/other-browser-sessions', [SessionsController::class, 'destroy']);

    // Route::get('/prof/statistics/cards', [App\Http\Controllers\Api\StatisticsController::class, 'prof_statistic_cards']);

    Route::get('roles', [RoleController::class, 'roles']);
    Route::post('roles', [RoleController::class, 'store']);
    Route::put('roles/{role}', [RoleController::class, 'update']);
    Route::delete('roles/{role}', [RoleController::class, 'destroy']);
    Route::get('permissions', [RoleController::class, 'permissions']);

    Route::get('categories', [CategoriesController::class, 'index']);
    Route::get('categories-paths', [CategoriesController::class, 'categoriesWithPaths']);
    Route::post('categories', [CategoriesController::class, 'store']);
    Route::put('categories/order', UpdateCategoriesOrderController::class);
    Route::put('categories/{category}', [CategoriesController::class, 'update']);
    Route::delete('categories/{category}', [CategoriesController::class, 'destroy']);

    Route::prefix('chat')->group(function () {
        Route::get('/chats-and-contacts', [ChatController::class, 'chatsAndContacts']);
        Route::get('/chats/{contact}', [ChatController::class, 'chats']);
        Route::post('/chats/{contact}', [ChatController::class, 'storeMsg']);
        Route::post('/chats/{chat}/clear', [ChatController::class, 'clearChat']);
    });


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
    ////////////////////////////////////////////////////////////////////////////////
    Route::put('/chapters/reorder', [ChapterController::class, 'reorder']);
    Route::apiResource('chapters', ChapterController::class);
    ////////////////////////////////////////////////////////////////////////////////
    Route::apiResource('quizzes', QuizController::class);
    Route::get('/quizzes/{quiz}/questions', [QuizController::class, 'questions']);
    Route::patch('quizzes/{quiz}/publish', PublishQuizController::class);
    Route::patch('quizzes/{quiz}/schedule', ScheduleQuizController::class);
    Route::post('questions/{question}/answer', [QuizController::class, 'store_answers']);

    /////////////////////////////////////////////////////////////////////////////////////////////////////
    Route::apiResource('courses', CoursesController::class, ['exept' => ['show']]);
    Route::get('courses/{course:slug}', [CoursesController::class, 'show']);
    Route::patch('courses/{course}/publish', PublishCourseController::class);
    Route::patch('courses/{course}/schedule', ScheduleCourseController::class);
    Route::get('courses/{course:slug}/quizzes', [CoursesController::class, 'quizzes']);
    Route::post('courses/{course}/quizzes', [CoursesController::class, 'attach_quizzes']);
    Route::delete('courses/{course}/quizzes', [CoursesController::class, 'detach_quizzes']);
    ////////////////////////////////////////////////////////////////////////////////
    Route::get('/statistics/{type}', StatisticsController::class);
    ////////////////////////////////////////////////////////////////////////////////
    Route::patch('/attachments/{attachment}/progress', [AttachmentsController::class, 'progress']);
    Route::get('{resource}/{resourceId}/attachments', [AttachmentsController::class, 'index']);
    Route::get('{resource}/{resourceId}/attachments/{attachment}', [AttachmentsController::class, 'show']);
    ////////////////////////////////////////////////////////////////////////////////
    Route::prefix('students')->group(function () {
        Route::get('/attempts', [StudentsController::class, 'attemptes']);
        Route::get('/chapters', [StudentsController::class, 'chapters']);
        Route::post('/attempts/{attempt}/validate', [StudentsController::class, 'validateAttemptes']);
    });
});

Route::get('{any?}', function () {
    abort(404);
})->where('any', '.*');
