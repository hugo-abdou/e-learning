<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\MissingValue;

class ChatResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request): array
    {
        $messages = $this->whenLoaded('messages') instanceof MissingValue  ? [] :  MessageResource::collection($this->whenLoaded('messages'));
        $lastMessage = $this->whenLoaded('lastMessage') instanceof MissingValue  ? null :  MessageResource::make($this->whenLoaded('lastMessage'));
        return [
            'id' => $this->id,
            'unseenMsgs' => $this->unseen_msgs,
            "messages" => $messages,
            'lastMessage' =>  $lastMessage
        ];
    }
}
