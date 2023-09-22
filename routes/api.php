<?php

use App\Http\Controllers\Api\ModelController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\MediaController;
use App\Http\Resources\AuthResource;
use App\Services\ModelsService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
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

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', fn (Request $request) => AuthResource::make($request->user())->resolve());
});
