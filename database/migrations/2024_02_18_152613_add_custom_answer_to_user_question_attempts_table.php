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
        Schema::table('user_question_attempts', function (Blueprint $table) {
            $table->text('custom_answer')->nullable();
            $table->boolean('is_custom_answer')->default(false);
            $table->smallInteger('status')->default(0);
        });
        Schema::table('user_quiz_attempts', function (Blueprint $table) {
            $table->smallInteger('status')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('user_question_attempts', function (Blueprint $table) {
            $table->dropColumn('custom_answer');
            $table->dropColumn('is_custom_answer');
            $table->dropColumn('status');
        });
        Schema::table('user_quiz_attempts', function (Blueprint $table) {
            $table->dropColumn('status');
        });
    }
};
