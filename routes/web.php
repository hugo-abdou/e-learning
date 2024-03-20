<?php

use App\Http\Controllers\Api\MediaController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GitHubWebhookController;
use App\Http\Controllers\VideoEmbedController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
// Route::get('/', fn () => view('home'));

Route::post('deploy', [GitHubWebhookController::class, 'handle']);
Route::post('/bunny_webhook', [MediaController::class, 'bunny_webhook'])->name('bunny_webhook');

Route::get('/embed/{library}/{uuid}', VideoEmbedController::class);
Route::get('{any?}', fn () => view('application'))->where('any', '^(?!api|storage|build\/).*');
