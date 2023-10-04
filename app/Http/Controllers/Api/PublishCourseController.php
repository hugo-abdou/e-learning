<?php

namespace App\Http\Controllers\Api;

use App\Enums\CourseStatus;
use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;

class PublishCourseController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Course $course)
    {
        $course->update(['status' => CourseStatus::Published->value]);
        return response()->json(['message' => 'Course published successfully']);
    }
}
