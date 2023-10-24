<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ChapterRequest extends FormRequest
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
        $rules = [
            "course_id" => 'nullable|integer',
            "attachments.*" => 'nullable|array',
            "attachments.*.watermark" => 'nullable|string',
            "attachments.*.visibility" => 'nullable|string',
            "attachments.*.download" => 'nullable|boolean',
            "attachments.*.type" => 'nullable|string',
            "attachments.*.name" => 'nullable|string',
            "video" =>  'nullable|integer',
            "title" => 'required|string',
            "order" => 'required|integer',
        ];
        if ($this->method() == 'POST') {
            $rules['course_id'] = 'required|integer';
        }
        return $rules;
    }
}
