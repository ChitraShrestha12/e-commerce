<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;

class SaveProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => ['required', 'string'],
            "price" => ['required', 'numeric'],
            "slug" => ['required', 'string'],
            "description" => ['required', 'string'],
            'product_img_path' => ['required'],
            'category_id' => ['required']
        ];
    }
    protected function failedValidation(Validator $validator)
    {
        return response()->json([
            "status" => false,
            "message" => "Validation failed",
            "errors" => $validator->errors()
        ], 422);
    }
}
