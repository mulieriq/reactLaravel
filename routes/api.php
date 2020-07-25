<?php

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

Route::get('category', 'CategoryContorller@index');
Route::post('category/store', 'CategoryContorller@store');
Route::delete('category/delete/{id}', 'CategoryContorller@destroy');
Route::get('category/edit/{id}', 'CategoryContorller@edit');
Route::put('category/update/{id}', 'CategoryContorller@update');
