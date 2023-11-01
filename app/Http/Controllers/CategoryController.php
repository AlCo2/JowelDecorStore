<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Product;

class CategoryController extends Controller
{
    
    public function add_category(Request $request){
        $category_name = $request->input('name');
        $category = new Category();
        $category->name = $category_name;
        $category->save();
    }
    public function get_product_category($id){
        $product = Product::find($id);
        $categories = $product->categories;
        return $categories;
    }
    public function set_category(Request $request){
        $product_id = $request->input('id');
        $data = $request->input('data');
        $id_list = [];
        foreach($data as $category){
            $id_list[] = $category['id'];
        }
        $product = Product::find($product_id);
        $product->categories()->sync($id_list);
    }
    public function delete_category($id){
        $category = Category::find($id);
        $category->delete();
    }
}
