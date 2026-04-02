<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;

class ProductController extends Controller
{
    public function allProducts()
    {
        $products = Product::with('category')->get();
        return response()->json([
            'status'=>true,
            'message'=>"Products Avaible!",
            'products'=>$products
        ]);
    }
}
