<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MessageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'senderId' => $this->sender_id,
            "time" => $this->created_at,
            "message" => $this->message,
            'feedback' => [
                "isSent" => $this->is_sent,
                "isDelivered" => $this->is_delivered,
                "isSeen" => $this->is_seen,
            ]
        ];
    }
}
