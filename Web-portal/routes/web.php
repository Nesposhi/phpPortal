<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('viewer/{category}', [DashboardController::class, 'viewerCategory'])
        ->middleware('role:viewer')
        ->whereIn('category', ['clothes', 'cosmetics', 'electronics'])
        ->name('viewer.category');

    Route::middleware('role:super_admin,admin')->group(function () {
        Route::get('product', [ProductController::class, 'index'])->name('product');
        Route::post('products', [ProductController::class, 'store'])->name('products.store');
    });

    Route::middleware('role:super_admin')->group(function () {
        Route::inertia('userCreate', 'userCreate')->name('userCreate');
        Route::inertia('users', 'users')->name('users');

        // User management resource routes
        Route::resource('users', UserController::class);
    });
});

require __DIR__.'/settings.php';
