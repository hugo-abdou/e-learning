<?php

namespace App\Http\Controllers\Api;

use App\Enums\CourseStatus;
use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class PublishCourseController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Course $course)
    {
        $status = $request->validate([
            'status' => ['required', Rule::in(CourseStatus::values())]
        ])['status'];

        if ($status == CourseStatus::Scheduled) throw new \Exception('Course can\'t be scheduled from this action');

        $course->update(['status' => $status]);
        return response()->json(['message' => 'Course published successfully']);
    }
}
