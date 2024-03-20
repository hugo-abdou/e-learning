<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ContactWithChatResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request): array
    {
        $contact =  UserResource::make($this->whenLoaded('users')->first())->resolve();
        return array_merge(['chat' => ChatResource::make($this)], $contact);
    }
}
