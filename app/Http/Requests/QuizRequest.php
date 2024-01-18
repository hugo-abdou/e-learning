<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class QuizRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            "title" => "required|string",
            "description" => "required|string",
            "duration" => "required|integer",
            "attachments.*" => 'nullable|array',
            "attachments.*.type" => 'nullable|string',
            "attachments.*.name" => 'nullable|string',
        ];
    }
}
