<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Create chats table
        Schema::create('chats', function (Blueprint $table) {
            $table->id();
            $table->integer('unseen_msgs')->default(0);
            $table->timestamps();
        });

        Schema::create('chat_user', function (Blueprint $table) {
            $table->foreignId('chat_id');
            $table->foreignId('user_id');
        });

        // Create messages table (related to chats)
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('chat_id')->constrained('chats')->cascadeOnDelete();
            $table->text('message');
            $table->timestamp('time');
            $table->foreignId('sender_id')->constrained('users')->cascadeOnDelete();
            $table->boolean('is_sent')->default(1);
            $table->boolean('is_delivered')->default(0);
            $table->boolean('is_seen')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chats');
        Schema::dropIfExists('chats_users');
        Schema::dropIfExists('messages');
    }
};
