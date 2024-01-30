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
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Pipeline;

class QuizController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $quizzes =  Pipeline::send(auth()->user()->quizzes())->through([
            new Search(['title', 'status', 'description']),
            Sort::class,
        ])->thenReturn();
        return QuizResource::collection($quizzes->paginate($request->get('itemsPerPage', 10)));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(QuizRequest $request)
    {
        DB::beginTransaction();
        $quiz = auth()->user()->quizzes()
            ->create([
                "title" => $request->validated("title"),
                "description" => $request->validated("description"),
                "duration" => $request->validated("duration"),
                'status' => QuizStatus::Draft->value
            ]);
        collect($request->validated('questions', []))->each(function ($question) use ($quiz) {
            $createdQuestion = $quiz->questions()->create([
                "allow_custom_answer" => $question['allow_custom_answer'],
                "question" => $question['question'],
            ]);
            collect($question['options'])->each(function ($option) use ($createdQuestion) {
                $createdQuestion->answers()->create([
                    "option" => $option['option'],
                    "is_correct" => $option['is_correct'],
                    "points" => $option['points'],
                ]);
            });
        });
        $quiz->attachments()->sync($request->validated('attachments', []));
        DB::commit();
        return QuizResource::make($quiz);
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
