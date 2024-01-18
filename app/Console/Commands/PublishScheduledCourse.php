<?php

namespace App\Console\Commands;

use App\Enums\CourseStatus;
use App\Models\Course;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class PublishScheduledCourse extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'course:publish';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Publish scheduled course';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Publish course scheduled started');
        Course::whereDate('schedule_at', '<=', now())
            ->where('status', CourseStatus::Scheduled)->each(function ($course) {
                try {
                    $course->publish();
                    $this->info("Course $course->id Published successfully");
                } catch (\Throwable $th) {
                    $course->error($th);
                    $this->error($th->getMessage());
                }
            });
        $this->info("Publishe scheduled Courses finished");
    }
}
