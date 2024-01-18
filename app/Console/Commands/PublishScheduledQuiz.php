<?php

namespace App\Console\Commands;

use App\Enums\CourseStatus;
use App\Enums\QuizStatus;
use App\Models\Course;
use App\Models\Quiz;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class PublishScheduledQuiz extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'quiz:publish';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Publish scheduled quiz';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Publish quiz scheduled started');
        Quiz::whereDate('schedule_at', '<=', now())
            ->where('status', QuizStatus::Scheduled)->each(function ($quiz) {
                try {
                    $quiz->publish();
                    $this->info("Quiz $quiz->id Published successfully");
                } catch (\Throwable $th) {
                    $quiz->error($th);
                    $this->error($th->getMessage());
                }
            });
        $this->info("Publishe scheduled Quizzes finished");
    }
}
