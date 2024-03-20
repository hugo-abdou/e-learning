<?php

namespace App\Http\Resources;


use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\MissingValue;

class CourseResource extends JsonResource
{
    public static $wrap = null;

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request): array
    {
        $data = [
            "id" => $this->id,
            'title' => Str::title($this->title),
            "slug" => $this->slug,
            "description" => $this->description,
            "author" => $this->author->only(["id", "name", 'profile_photo_url']),
            "status" => $this->status,
            "thumbnail" =>  $this->thumbnail_url,
            "duration" => $this->duration,
            "difficulty" => $this->difficulty,
            "schedule_at" => $this->schedule_at,
            "categories" => CategoriesWithPathsResource::collection($this->whenLoaded('categories')),
            "progress" => $this->getProgress(),
            "studentsCount" => $this->students_count ?? 0,
        ];

        if ($this->additional) {
            if (isset($this->additional['chaptersCount'])) {
                $data["chaptersCount"] = $this->chapters->count();
            }
            if (isset($this->additional['quizzes'])) {
                $data["quizzes"] = QuizResource::collection($this->whenLoaded("quizzes"));
            }
            if (isset($this->additional['chapters'])) {
                $data["chapters"] = ChapterResource::collection($this->whenLoaded("chapters"));
            }
            if (isset($this->additional['hasMedia']) && $chapters = $this->whenLoaded("chapters")) {
                $data["media"] = $chapters->reduce(function ($carry, $chapter) {
                    return $carry->merge($chapter->media->map(fn ($m) => $m->getThumbUrl()));
                }, collect([]));
            }
        }
        return $data;
    }

    private function getProgress()
    {
        if ($this->whenLoaded("progress") instanceof MissingValue) return 0;
        return $this->whenLoaded("progress")?->first()->progress ?? 0;
    }
}
