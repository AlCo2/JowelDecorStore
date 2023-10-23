<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    
    public function addProduct(Request $request){
        Product::create($request->validate([
            'title' => ['required', 'max:50'],
            'Q' => ['required'],
            'price' => ['required'],
        ]));
    }
}
