<?php

use Illuminate\Support\Facades\Route;
use App\Models\TodoItem;


Route::view('/', 'app');

Route::get('/api/todos', function () {
    return TodoItem::all();
});

