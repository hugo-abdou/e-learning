<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CourseResource extends JsonResource
{
    public static $wrap = null;

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $data = [
            "id" => $this->id,
            "title" => $this->title,
            "description" => $this->description,
            "author" => $this->author->only(["id", "name", 'profile_photo_url']),
            // "prerequisite_id" =>  $this->prerequisite_id,
            "status" => $this->status,
            "thumbnail" =>  $this->thumbnail_url,
            "duration" => $this->duration,
            "difficulty" => $this->difficulty,
            "schedule_at" => $this->schedule_at,
        ];

        if ($additional = json_decode($request->get('additional', "[]"))) {
            if (isset($additional->chaptersCount)) {
                $data["chaptersCount"] = $this->chapters()->count();
            }
            if (isset($additional->chapters)) {
                $data["chapters"] = ChapterResource::collection($this->whenLoaded("chapters"));
            }
            if (isset($additional->hasMedia) && $chapters = $this->whenLoaded("chapters")) {
                $data["media"] = $chapters->reduce(function ($carry, $chapter) {
                    return $carry->merge($chapter->media->map(fn ($m) => $m->getThumbUrl()));
                }, collect([]));
            }
        }
        return $data;
    }
}
