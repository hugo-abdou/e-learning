<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = ['chat_id', 'message', 'time', 'sender_id', 'is_sent', 'is_delivered', 'is_seen'];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'time' => 'datetime',
            'is_sent' => 'boolean',
            'is_delivered' => 'boolean',
            'is_seen' => 'boolean',
        ];
    }

    public function chat()
    {
        return $this->belongsTo(Chat::class);
    }
}
