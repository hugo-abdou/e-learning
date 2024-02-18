<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class QuestionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'question' => json_decode($this->question),
            'options' => AnswerResource::collection($this->whenLoaded('answers')),
            'answer' =>  json_decode($this->answer),
            'allow_custom_answer' => $this->allow_custom_answer,
            'show_answer_after_response' => $this->show_answer_after_response,
        ];
    }
}
