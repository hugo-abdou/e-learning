<?php

namespace App\Http\Controllers\Api;

use App\Enums\CourseStatus;
use App\Http\Controllers\Controller;
use App\Models\Course;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ScheduleCourseController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Course $course)
    {
        $course->update([
            'status' => CourseStatus::Scheduled->value,
            'schedule_at' => Carbon::make($request->date)->toDateTimeString(),
        ]);
        return response()->json(['message' => 'Course scheduled successfully']);
    }
}
