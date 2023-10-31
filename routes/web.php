<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\StoreController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\CategoryController;
use App\Http\Middleware\CheckAdmin;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/store', [StoreController::class, 'index']);
Route::get('/store/{id}', [StoreController::class, 'getProduct']);


Route::get('/cart', [CheckoutController::class, 'index'])->middleware("auth");

Route::get('/about-us', function(){
    return Inertia::render('About-us');
});

Route::get('/dashboard', [Controller::class, 'dashboard'])->middleware(["auth",CheckAdmin::class]);


Route::post('/createorder', [OrderController::class, 'makeOrder'])->middleware("auth");
Route::post('/deleteproduct', [OrderController::class, 'deleteProduct'])->middleware("auth");
Route::get('/api/getordercreated', [OrderController::class, 'getHowManyOrder'])->middleware('auth');

Route::post("/api/addproduct", [ProductController::class, 'addProduct'])->middleware(['auth', CheckAdmin::class]);
Route::post("/api/deleteproduct/{id}", [ProductController::class, 'deleteProduct'])->middleware(['auth', CheckAdmin::class]);

Route::post("/api/addcategory", [CategoryController::class, 'add_category'])->middleware(['auth', CheckAdmin::class]);
Route::post("/api/deletecategory/{id}", [CategoryController::class, 'delete_category'])->middleware(['auth', CheckAdmin::class]);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
