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
            "slug" => "required|string",
            "description" => "required|string",
            "duration" => "required|integer",
            // Questions validation rules
            "questions" => "required|array",
            "questions.*.allow_custom_answer" => "required|boolean",
            "questions.*.show_answer_after_response" => "required|boolean",
            "questions.*.question" => "required|string",
            "questions.*.answer" => "required|string",
            // options validation rules
            "questions.*.options" => "required|array",
            "questions.*.options.*.option" => "required|string",
            "questions.*.options.*.points" => "required|integer",
            "questions.*.options.*.is_correct" => "required|boolean",
            // Questions attachments rules
            "attachments.*" => 'nullable|array',
            "attachments.*.type" => 'nullable|string',
            "attachments.*.name" => 'nullable|string',
            "attachments.*.slug" => 'nullable|string',
        ];
    }
}
