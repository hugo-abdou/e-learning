<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class RoleRequest extends FormRequest
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
        $type = $this->get('type', 'role');

        if ($type == 'plan') return [
            'type' => 'required',
            'name' => ['required', 'max:255', $this->method() === 'POST'
                ? 'unique:roles,name'
                : Rule::unique('roles')->ignore($this->role->id)],
            'email_subject' =>  'required|string|max:255',
            'email_content' =>  'required|array',
        ];
        if ($type == 'role') return [
            'type' => 'required',
            'name' => ['required', 'max:255', $this->method() === 'POST'
                ? 'unique:roles,name'
                : Rule::unique('roles')->ignore($this->role->id)],
            'permissions' => 'nullable|array'
        ];
    }
}
