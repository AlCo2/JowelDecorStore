<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    
    public function add_category(Request $request){
        $category_name = $request->input('name');
        $category = new Category();
        $category->name = $category_name;
        $category->save();
    }
    public function delete_category($id){
        $category = Category::find($id);
        $category->delete();
    }
}
