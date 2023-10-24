<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class  extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->foreignId('author_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('prerequisite_id')->nullable()->constrained('courses')->onDelete('cascade');
            $table->enum('status', ['draft', 'private', 'published', 'scheduled', 'error', 'closed'])->default('draft');
            $table->string('thumbnail')->nullable();
            $table->integer('duration')->default(0);
            $table->enum('difficulty', ['beginner', 'intermediate', 'advanced'])->default('beginner');
            $table->json('data')->nullable();
            $table->timestamp('schedule_at')->nullable();
            $table->timestamp('close_at')->nullable();
            $table->timestamps();
        });
        Schema::create('chapters', function (Blueprint $table) {
            $table->id();
            $table->foreignId('course_id')->constrained('courses')->onDelete('cascade');
            $table->string('title');
            $table->integer('order')->default(0);
            $table->timestamps();
        });
        Schema::create('user_course_progress', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('chapter_id')->constrained('chapters')->onDelete('cascade');
            $table->integer('progress_percent')->default(0);
        });
        Schema::create('course_reviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('course_id')->constrained('courses')->onDelete('cascade');
            $table->text('review');
            $table->integer('rating')->unsigned();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('course_reviews');
        Schema::dropIfExists('user_course_progress');
        Schema::dropIfExists('chapters');
        Schema::dropIfExists('courses');
    }
};
