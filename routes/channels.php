<?php

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('App.Models.User.{id}', function (User $user, int $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('App.Online.Users', fn (User $user) => ["id" => $user->id, "name" => $user->name, "avatar" => $user->profile_photo_url, "status" => $user->status]);

Broadcast::channel('chat.{chat_id}', fn (User $user, int $chat_id) =>  $user->chats()->where('id', $chat_id)->exists());
