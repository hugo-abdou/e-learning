<?php

namespace App\Console\Commands;

use App\Enums\CourseStatus;
use App\Enums\QuizStatus;
use App\Models\Course;
use App\Models\Quiz;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class CloseQuiz extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'quiz:close';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Close scheduled quizzes';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Close quiz scheduled started');
        Quiz::whereDate('close_at', '<=', now())
            ->where('status', QuizStatus::Published)->each(function ($quiz) {
                try {
                    $quiz->close();
                    $this->info("Quiz $quiz->id Closed successfully");
                    throw new \Exception("Quiz $quiz->id Closed successfully");
                } catch (\Throwable $th) {
                    $quiz->error($th);
                    $this->error($th->getMessage());
                }
            });
        $this->info("quizzes Close scheduled finished");
    }
}
