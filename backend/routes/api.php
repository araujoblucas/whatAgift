<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::apiResource('/', 'GiftController');
Route::apiResource('/user', 'UserController');
Route::apiResource('/gift', 'GiftController');
Route::post('/user/login', 'LoginController@login');
Route::post('/user/update', 'UserController@update');
