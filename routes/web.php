<?php

use App\Facades\Storage;
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


Route::get('{any?}', function () {

    // return  Storage::disk('bunnycdn')->url('/media/11/65674dd10866c_1701268945/original.png');
    // dd();
    return view('application');
})->where('any', '^(?!api|storage|build\/).*');
