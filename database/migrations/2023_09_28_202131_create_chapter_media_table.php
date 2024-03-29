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
        Schema::create('resource_media', function (Blueprint $table) {
            $table->id();
            $table->integer('resource_id');
            $table->foreignId('attachment_id')->constrained('media')->cascadeOnDelete();
            $table->string('resource_type');
            $table->string('type');
            $table->string('name')->nullable();
            $table->string('watermark')->nullable();
            $table->json('visibility')->nullable();
            $table->boolean('download')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chapter_media');
    }
};
