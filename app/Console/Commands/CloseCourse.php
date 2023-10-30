<?php

namespace App\Console\Commands;

use App\Enums\CourseStatus;
use App\Models\Course;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class CloseCourse extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'course:close';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Close course scheduled';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Close course scheduled started');
        Course::whereDate('close_at', '<=', now())
            ->where('status', CourseStatus::Published)->each(function ($course) {
                try {
                    // $course->close();
                    // $this->info("Course $course->id Closed successfully");
                    throw new \Exception("Course $course->id Closed successfully");
                } catch (\Throwable $th) {
                    $course->error($th);
                    $this->error($th->getMessage());
                }
            });
        $this->info("Courses Close scheduled finished");
    }
}
