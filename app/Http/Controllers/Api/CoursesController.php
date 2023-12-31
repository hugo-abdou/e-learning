<?php

namespace App\Http\Controllers\Api;

use App\Enums\CourseStatus;
use App\Filters\Search;
use App\Filters\Sort;
use App\Http\Controllers\Controller;
use App\Http\Requests\CourseRequest;
use App\Http\Resources\CourseResource;
use App\Models\Course;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Pipeline;

class CoursesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $courses = Pipeline::send(
            auth()->user()->courses()->with([
                'chapters' => function ($query) {
                    $query->select('id', 'course_id');
                },
                'chapters.attachments'
            ])
        )->through([
            Sort::class,
            new Search(['title', 'status', 'difficulty', 'description',])
        ])->thenReturn()
            ->paginate($request->get('itemsPerPage', 10));
        return CourseResource::collection($courses);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CourseRequest $request)
    {
        $course = auth()->user()->courses()->create([...$request->validated(), 'status' => CourseStatus::Draft->value]);
        return CourseResource::make($course);
    }

    /**
     * Display the specified resource.
     */
    public function show($course)
    {
        return CourseResource::make(Course::with(['chapters', 'chapters.attachments'])->findOrFail($course));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CourseRequest $request, Course $course)
    {
        $course->update($request->validated());
        return response()->json(['message' => 'Course updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        $course->delete();
        return response()->json(['message' => 'Course deleted successfully']);
    }
}
