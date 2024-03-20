<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        $data = [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            "avatar" => $this->profile_photo_url,
            "roles" => $this->getRoleNames(),
            'created_at' => $this->created_at,
            "status" => $this->status
        ];

        if ($this->hasRole('student')) {
            $data['completed_courses'] = $this->ingagedCourses->filter(fn ($item) => $item->pivot->progress == 100)->count();
            $data['in_progress_courses'] = $this->ingagedCourses->filter(fn ($item) => $item->pivot->progress < 100)->count();
        }

        return $data;
    }
}
