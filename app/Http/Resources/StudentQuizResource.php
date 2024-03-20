<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Http\Resources\Json\JsonResource;

class StudentQuizResource extends JsonResource
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
            'title' => Str::title($this->title),
            'slug' => $this->slug,
            'description' => $this->description,
            'duration' => $this->duration,
            'status' => $this->status,
            "progress" => $this->studentAttempt?->progress_percent ?? 0
        ];
    }
}
