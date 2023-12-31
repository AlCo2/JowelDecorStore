<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\User;
use App\Models\Category;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function dashboard(){
        $users = User::all();
        $products = Product::all();
        $categories = Category::all();
        return Inertia::render("Dashboard", compact('users', 'products', 'categories'));
    }
}
