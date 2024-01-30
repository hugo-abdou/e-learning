<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class QuizResource extends JsonResource
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
            'title' => $this->title,
            'description' => $this->description,
            'duration' => $this->duration,
            'status' => $this->status,
            'schedule_at' => $this->schedule_at,
            'close_at' => $this->close_at,
            // 'attachments' =>  AttachmentResource::collection($this->whenLoaded('attachments')),
            'created_at' => $this->created_at->diffForHumans(),
        ];
    }
}
