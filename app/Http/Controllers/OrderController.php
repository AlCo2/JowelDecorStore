<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Order;
use App\Models\Order_created;

class OrderController extends Controller
{
    public function makeOrder(Request $request){
        $user_id = $request->input("user_id");
        $product_id = $request->input("product_id");
        $product_price = $request->input("product_price");
        if(Order::where("user_id", $user_id)->exists()){
            $order = Order::where("user_id", $user_id)->first();
            if(Order_created::where("order_id", $order->id)->where("product_id", $product_id)->exists()){
                $newOrder = Order_created::where("order_id", $order->id)->where("product_id", $product_id)->first();
                $newOrder->Q = $newOrder->Q+1;
                $newOrder->price = $product_price * $newOrder->Q;
                return $newOrder->save();
                
            }else{
                $newOrder = new Order_created();
                $newOrder->order_id = $order->id;
                $newOrder->product_id = $product_id;
                $newOrder->Q = 1;
                $newOrder->price = $product_price;
                $newOrder->save();
                return "done making first order";
            }

        }else{
            $order = new Order();
            $order->user_id = $user_id;
            $order->order_finished = FALSE;
            $order->save();
            $order = Order::where("user_id", $user_id)->first();
            $newOrder = new Order_created();
            $newOrder->order_id = $order->id;
            $newOrder->product_id = $product_id;
            $newOrder->Q = 1;
            $newOrder->price = $product_price;
            $newOrder->save();
            return "done making first order";
        }

    }
}
