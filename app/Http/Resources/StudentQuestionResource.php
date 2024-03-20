<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StudentQuestionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request): array
    {
        $student_answer = $this->student_answer();
        $data = [
            'id' => $this->id,
            'question' => json_decode($this->question),
            'options' => $student_answer !== null ? AnswerResource::collection($this->whenLoaded('answers')) : StudentAnswerResource::collection($this->whenLoaded('answers')),
            'answer' =>  json_decode($this->answer),
            'allow_custom_answer' => boolval($this->allow_custom_answer),
            'show_answer_after_response' => boolval($this->show_answer_after_response),
            "student_answer" => $student_answer,
        ];
        return $data;
    }

    function student_answer()
    {
        if ($this->whenLoaded('studentAnswer') == null) return null;
        $answer = $this->whenLoaded('studentAnswer');
        return [
            "answers" => $answer->answers,
            "custom_answer" => $answer->custom_answer,
            "is_correct" => $answer->is_correct,
            "status" => $answer->status
        ];
    }
}
