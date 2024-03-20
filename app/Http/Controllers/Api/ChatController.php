<?php

namespace App\Http\Controllers\Api;

use App\Events\ChatMessageCreatedEvent;
use App\Http\Controllers\Controller;
use App\Http\Resources\ChatResource;
use App\Http\Resources\ContactWithChatResource;
use App\Http\Resources\MessageResource;
use App\Http\Resources\UserResource;
use App\Models\Chat;
use App\Models\Message;
use App\Models\User;
use App\Notifications\NewMessageNotification;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function chatsAndContacts(Request $request)
    {
        $chatsContacts = auth()->user()->chats()->with(['lastMessage', 'users' => fn ($q) => $q->where('id', '!=', auth()->id())])
            ->whereHas('messages')
            ->whereHas('users', function ($query) use ($request) {
                if ($request->has('search')) $query->where('name', 'like', '%' . $request->get('search') . '%');
            })
            ->take(10)->get();
        Message::whereIn('chat_id', $chatsContacts->pluck('id'))->where('sender_id', auth()->id())->where('is_delivered', 0)->update(['is_delivered' => 1]);
        $chatContactsIds = $chatsContacts->reduce(function ($prev, $current) {
            return array_merge($prev, $current->users->pluck('id')->toArray());
        }, [auth()->id()]);
        $contacts = User::whereNotIn('id', $chatContactsIds)->where(function ($query) use ($request) {
            if ($request->has('search')) $query->where('name', 'like', '%' . $request->get('search') . '%');
        })->take(10)->get();
        // dd($chatsContacts);
        return [
            "chatsContacts" => ContactWithChatResource::collection($chatsContacts)->resolve(),
            "contacts" => UserResource::collection($contacts)->resolve(),
            "profileUser" => UserResource::make(auth()->user())->resolve(),
        ];
    }

    public function chats(User $contact)
    {
        // TODO: add pagination and limit to 10
        $chat = auth()->user()->chats()->with(['messages' => function ($q) {
            // $q->orderBy('created_at', 'desc');
        }, 'lastMessage'])
            ->whereHas('users', fn ($q) =>  $q->where('id', $contact->id))->first();
        if ($chat) {
            $chat->update(['unseen_msgs' => 0]);
            $chat->messages()->where('sender_id', auth()->id())->where('is_seen', 0)->update(['is_seen' => 1]);
        };
        return [
            "chat" => $chat ? ChatResource::make($chat)->resolve() : null,
            "contact" => UserResource::make($contact)->resolve(),
        ];
    }

    public function storeMsg(Request $request, User $contact)
    {
        $chat = auth()->user()->chats()->whereHas('users', fn ($q) =>  $q->where('id', $contact->id))->first();
        if ($chat) {
            $message = $chat->messages()->create(["message" => $request->message, "time" => now(), 'sender_id' => auth()->user()->id, 'is_sent' => true]);

            $contact->notify(new NewMessageNotification([
                "message" => MessageResource::make($message)->resolve(),
                "contact" => UserResource::make(auth()->user())->resolve(),
                "chat" => ChatResource::make($chat)->resolve(),
            ]));
            return [
                "message" => MessageResource::make($message)->resolve(),
            ];
        }
        $chat = auth()->user()->chats()->create([]);
        $chat->users()->attach($contact->id);
        $message = $chat->messages()->create(["message" => $request->message, "time" => now(), 'sender_id' => auth()->user()->id, 'is_sent' => true]);

        $contact->notify(new NewMessageNotification([
            "message" => MessageResource::make($message)->resolve(),
            "contact" => UserResource::make(auth()->user())->resolve(),
            "chat" => ChatResource::make($chat)->resolve(),
        ]));
        return [
            "chat" => ChatResource::make($chat)->resolve(),
            "message" => MessageResource::make($message)->resolve(),
        ];
    }

    public function clearChat(Chat $chat)
    {
        $chat->messages()->delete();
        return [
            "chat" => ChatResource::make($chat)->resolve(),
        ];
    }
}
