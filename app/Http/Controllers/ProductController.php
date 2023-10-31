<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\File;

class ProductController extends Controller
{
    
    public function addProduct(Request $request){
        $request->validate([
            'title' => ['required', 'max:50'],
            'Q' => ['required'],
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            'price' => ['required'],
        ]);
        if($request->hasFile('image')){
            $image = $request->file('image');
            $imageName = time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('images'), $imageName);
            $product = new Product();
            $product->title  = $request->input('title');
            $product->Q  = $request->input('Q');
            $product->price  = $request->input('price');
            $product->image  = $imageName;
            $product->save();
        }
    }

    public function updateProduct($request){
        $id = $request->input("id");
        $product = Product::find($id);
    }

    public function deleteProduct($id){
        $product = Product::find($id);
        File::delete(public_path('images/' . $product->image));
        $product->delete();
    }
}
