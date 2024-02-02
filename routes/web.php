<?php

use App\Http\Controllers\Api\MediaController;
use App\Http\Controllers\GitHubWebhookController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('deploy', [GitHubWebhookController::class, 'handle']);
Route::post('/bunny_webhook', [MediaController::class, 'bunny_webhook'])->name('bunny_webhook');
Route::get('{any?}', fn () => view('application'))->where('any', '^(?!api|storage|build\/).*');
