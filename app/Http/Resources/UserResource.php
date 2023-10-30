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
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            "avatar" => $this->profile_photo_url,
            "role" => ['user'],
            "whitelabel" => $this->whitelabel_id,
            'created_at' => $this->created_at,
        ];
    }
}
