<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Order_created;
use App\Models\Order;
use App\Models\Product;

class CheckoutController extends Controller
{
    public function index(){
        $user_id = auth()->user()->id;
        $products = [];
        $order = Order::where("user_id", $user_id)->first();
        if($order){
            $data = Order_created::where('order_id', $order->id)->get();    
            foreach($data as $order){
                $product_in_db = Product::where('id', $order->product_id)->first();
                $product = [
                    "id"=>$product_in_db->id,
                    "title" => $product_in_db->title,
                    "image" => $product_in_db->image,
                    "Q" => $order->Q,
                    "price" => $order->price,
                ];
                $products[] = $product;
            }
        }
        
        return Inertia::render("Checkout", compact("products"));
    }
}
