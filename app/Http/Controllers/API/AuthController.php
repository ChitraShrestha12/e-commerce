<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    public function signUp(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "full_name" => ['required'],
            "email" => ['required', 'email', 'unique:users,email'],
            "password" => ['required', Password::min(6)->mixedCase()->letters()->numbers()->symbols(), 'confirmed'],
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }
        try {
            $user = User::create([
                "full_name" => $request->full_name,
                "email" => $request->email,
                "password" => $request->password,
            ]);
            return response()->json([
                'success' => true,
                'message' => 'User registered successfully',
                'user' => $user
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'User registration failed',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    public function login(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                "email" => ['required', 'email'],
                "password" => ['required'],
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Validation failed',
                    'errors' => $validator->errors()
                ], 422);
            }

            $credentials = $request->only('email', 'password');
            if (Auth::attempt($credentials)) {
                $user = Auth::user();
                $token = $user->createToken('api_token')->plainTextToken;
                return response()->json([
                    'success' => true,
                    'message' => 'Login successful',
                    'user' => $user,
                    'token' => $token,
                    'token_type' => 'bearer'
                ], 200);
            }

            return response()->json([
                'success' => false,
                'message' => 'Invalid email or password'
            ], 401);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    public function logout(Request $request)
    {
        try {
            $user = $request->user();
            $user->tokens()->delete();
            return response()->json([
                'status' => true,
                'message' => "Successfully logout!",
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
