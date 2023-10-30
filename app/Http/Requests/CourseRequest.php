<?php

namespace App\Http\Requests;

use App\Enums\CourseDifficulty;
use App\Enums\CourseStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CourseRequest extends FormRequest
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
            "difficulty" => [Rule::in(CourseDifficulty::values())],
            "prerequisite_id" => 'nullable|exists:courses,id',
            "thumbnail" => 'nullable|string'
        ];
    }
}
