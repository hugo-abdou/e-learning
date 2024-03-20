<?php

namespace App\Http\Controllers\Api;

use App\Enums\CourseStatus;
use App\Filters\Search;
use App\Filters\Sort;
use App\Http\Controllers\Controller;
use App\Http\Requests\CourseRequest;
use App\Http\Resources\CourseResource;
use App\Http\Resources\QuizResource;
use App\Http\Resources\StudentQuizResource;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Pipeline;

class CoursesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Course::query()->withCount('students')->with(["categories"]);

        if (auth()->user()->isSupperAdmin()) {
        } elseif (auth()->user()->isStudent()) {
            $query = $query->with(['progress' => fn ($q) => $q->where('user_id', auth()->id())]);
        } elseif (auth()->user()->isAdmin()) {
            $query = $query->whereIn('author_id',  auth()->user()->users->filter(fn ($user) => !$user->isStudent())->pluck('id')->merge(auth()->id()));
        } else {
            $query = $query->where('author_id',  auth()->id());
        }
        $courses = Pipeline::send($query)->through([
            Sort::class,
            new Search(['title', 'status', 'difficulty', 'description', 'categories.name']),
        ])->thenReturn();
        return CourseResource::collection($courses->paginate($request->get('itemsPerPage', Course::count())));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CourseRequest $request)
    {
        $course = auth()->user()->courses()->create([
            'title' => $request->validated('title'),
            'description' => $request->validated('description'),
            'difficulty' => $request->validated('difficulty'),
            'thumbnail' => $request->validated('thumbnail'),
            'slug' => $request->validated('title'),
            'status' => CourseStatus::Draft->value
        ]);
        $course->categories()->attach($request->validated('categories'));
        return CourseResource::make($course);
    }

    /**
     * Display the specified resource.
     */
    public function show($course, Request $request)
    {
        $query = Course::query()
            ->withCount('students')
            ->with([
                'chapters', 'chapters.attachments', 'quizzes', 'quizzes.questions', 'quizzes.questions.answers', 'categories',
                'progress' => fn ($q) => $q->where('user_id', auth()->id())
            ])
            ->where('slug', $course);
        return CourseResource::make($query->firstOrFail())->additional(json_decode($request->get('additional', "[]"), true))->resolve();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CourseRequest $request, Course $course)
    {
        $course->update([
            'title' => $request->validated('title'),
            'description' => $request->validated('description'),
            'difficulty' => $request->validated('difficulty'),
            'thumbnail' => $request->validated('thumbnail'),
            'slug' => $request->validated('title'),
        ]);
        $course->categories()->sync($request->validated('categories'));
        return response()->json([
            "data" => new CourseResource($course),
            'message' => 'Course updated successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        $course->delete();
        return response()->json(['message' => 'Course deleted successfully']);
    }
    /**
     * get quizzes related specified course.
     */
    public function quizzes(Course $course)
    {
        $quizzes =  Pipeline::send($course->quizzes()->with(['studentAttempt']))->through([
            new Search(['title', 'description']),
            Sort::class,
        ])->thenReturn();
        if (auth()->user()->isStudent()) {
            return StudentQuizResource::collection($quizzes->paginate(request()->get('itemsPerPage', $quizzes->count())));
        }
        return QuizResource::collection($quizzes->paginate(request()->get('itemsPerPage', $quizzes->count())));
    }
    /**
     * attach quizzes to the specified course.
     */
    public function attach_quizzes(Course $course)
    {
        $data = request()->validate([
            'quizzes' => 'required|array',
        ]);
        $course->quizzes()->sync($data['quizzes']);
        return response()->json(['message' => 'Quizzes attached successfully']);
    }
    /**
     * attach quizzes to the specified course.
     */
    public function detach_quizzes(Course $course)
    {
        $data = request()->validate([
            'quizzes' => 'required|array',
        ]);
        $course->quizzes()->detach($data['quizzes']);
        return response()->json(['message' => 'Quizzes detached successfully']);
    }
}
