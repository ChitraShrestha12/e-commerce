<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::with('category')->get();
        return response()->json([
            "status" => true,
            "message" => "All Products",
            "products"=>$products
        ],200);        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $productValidate = Validator::make($request->all(),[
            "name" => ['required'],
            "price" => ['required'],
            "slug" => ['required'],
            "description" => ['required'],
            'product_img_path' => ['required'],
            'category_id' => ['required']
        ]);
        if($productValidate->fails()){
           return response()->json([
            "status" => false,
            "message" => "Validation was failed!",
            "errors" => $productValidate->errors()
           ]) ;
        }
        $product = Product::create([
            "name" => $request->name,
            "price" => $request->price,
            "slug" => $request->slug,
            "description" => $request->description,
            "product_img_path" => $request->product_img_path,
            "category_id" => $request->category_id
        ]);
        return response()->json([
            "status"=>true,
            "message"=>"Successfully create product item.",
            "product"=>$product
        ],201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
