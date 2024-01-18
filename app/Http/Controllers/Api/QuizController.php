<?php

namespace App\Http\Controllers\Api;

use App\Enums\QuizStatus;
use App\Filters\Search;
use App\Filters\Sort;
use App\Http\Controllers\Controller;
use App\Http\Requests\QuizRequest;
use App\Http\Resources\QuizResource;
use App\Models\Quiz;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Pipeline;

class QuizController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $quizzes = Pipeline::send(
            auth()->user()->quizzes()
        )->through([
            Sort::class,
            // new Search(['title', 'status', 'description'])
        ])->thenReturn()->orderBy('created_at', 'asc')
            ->paginate($request->get('itemsPerPage', 10));
        return QuizResource::collection($quizzes);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(QuizRequest $request)
    {
        $course = auth()->user()->quizzes()
            ->create([
                "title" => $request->validated("title"),
                "description" => $request->validated("description"),
                "duration" => $request->validated("duration"),
                'status' => QuizStatus::Draft->value
            ]);
        $course->attachments()->sync($request->validated('attachments', []));
        return QuizResource::make($course);
    }

    /**
     * Display the specified resource.
     */
    public function show($quiz)
    {
        return QuizResource::make(Quiz::with(['chapters', 'chapters.attachments'])->findOrFail($quiz));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(QuizRequest $request, Quiz $quiz)
    {
        $quiz->update($request->validated());
        return response()->json(['message' => 'quiz updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Quiz $quiz)
    {
        $quiz->delete();
        return response()->json(['message' => 'Quiz deleted successfully']);
    }
}
