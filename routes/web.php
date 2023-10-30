<?php

use App\Services\VideoProcesseurService;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Process;

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


Route::get('{any?}', function () {
    return view('application');
})->where('any', '^(?!api|storage|build\/).*');
