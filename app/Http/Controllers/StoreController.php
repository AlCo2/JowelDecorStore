<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;

class StoreController extends Controller
{
    public function index(){
        $data = Product::all();
        return Inertia::render('Store',compact("data"));
    }
    
    public function getProduct($id){
        $product = Product::find($id);
        if($product)
            $categories = $product->categories;
            return Inertia::render('Product', compact('product', 'categories'));
        return "Not found";
    }
}
