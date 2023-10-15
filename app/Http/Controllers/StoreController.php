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
    
}
