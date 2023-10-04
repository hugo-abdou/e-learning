<?php

namespace App\Http\Controllers\Api;

use App\Enums\CourseStatus;
use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;

class ScheduleCourseController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Course $course)
    {
        $course->update(['status' => CourseStatus::Scheduled->value]);
        return response()->json(['message' => 'Course scheduled successfully']);
    }
}
