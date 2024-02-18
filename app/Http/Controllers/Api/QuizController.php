<?php

namespace App\Http\Controllers\Api;

use App\Enums\QuizStatus;
use App\Filters\Search;
use App\Filters\Sort;
use App\Http\Controllers\Controller;
use App\Http\Requests\QuizRequest;
use App\Http\Resources\QuizResource;
use App\Models\Question;
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
        return QuizResource::collection($quizzes->paginate($request->get('itemsPerPage', auth()->user()->quizzes()->count())));
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
                "slug" => $request->validated("slug"),
                "description" => $request->validated("description"),
                "duration" => $request->validated("duration"),
                'status' => QuizStatus::Draft->value
            ]);
        collect($request->validated('questions', []))->each(function ($question) use ($quiz) {
            $createdQuestion = $quiz->questions()->create([
                "allow_custom_answer" => $question['allow_custom_answer'],
                "show_answer_after_response" => $question['show_answer_after_response'],
                "question" => $question['question'],
                "answer" => $question['answer'],
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
    public function show($quiz, Request $request)
    {
        return QuizResource::make(Quiz::with($request->get('with', []))->findOrFail($quiz))->resolve();
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
    /**
     * Remove the specified resource from storage.
     */
    public function store_store(Question $question, Request $request)
    {
        $data = $request->validate([
            "answers" => "required|array",
            "custom_answer" => "nullable|string",
        ]);

        $answer = $question->answers()->where('is_correct', true)->whereIn('id', $data['answers'])->first();
        $is_correct = boolval($answer);

        DB::beginTransaction();
        $questionAttempt = auth()->user()->questionAttempts()->firstOrCreate(
            ["question_id" => $question->id],
            [
                "is_custom_answer" => $question->allow_custom_answer,
                "custom_answer" => $data['custom_answer'],
                "is_correct" => $is_correct,
                "status" => $data['custom_answer'] && $question->allow_custom_answer ? 0 : 1,
            ]
        );
        if ($is_correct) {
            $quizAttempts = auth()->user()->quizAttempts()->updateOrCreate(
                ["quiz_id" => $question->quiz->id]
            );
            $quizAttempts->update([
                "status" => 0,
                "score" => $quizAttempts->score + $answer->points,
            ]);
        }
        DB::commit();
        return response()->json(['message' => 'Quiz deleted successfully']);
    }
}
