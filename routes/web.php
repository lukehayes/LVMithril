<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/app', function () {
    return view('app');
});


Route::resource('todos', \App\Http\Controllers\TodoController::class);

