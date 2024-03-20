<?php

namespace App\Http\Controllers\Api;

use App\Enums\QuizStatus;
use App\Enums\StudentAttemptStatus;
use App\Filters\Search;
use App\Filters\Sort;
use App\Http\Controllers\Controller;
use App\Http\Requests\QuizRequest;
use App\Http\Resources\QuestionResource;
use App\Http\Resources\QuizResource;
use App\Http\Resources\StudentQuestionResource;
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
        DB::beginTransaction();
        $quiz->update([
            "title" => $request->validated("title"),
            "slug" => $request->validated("slug"),
            "description" => $request->validated("description"),
            "duration" => $request->validated("duration"),
        ]);
        // delete questions that are not in the request
        $quiz->questions()->whereNotIn('id', collect($request->validated('questions', []))->pluck('id')->toArray())->delete();
        // update or create questions
        collect($request->validated('questions', []))->each(function ($question) use ($quiz) {
            $updatedQuestion = $quiz->questions()->find($question['id']);
            $data = [
                "allow_custom_answer" => $question['allow_custom_answer'],
                "show_answer_after_response" => $question['show_answer_after_response'],
                "question" => $question['question'],
                "answer" => $question['answer'],
            ];
            if ($updatedQuestion) {
                $updatedQuestion->update($data);
            } else {
                $updatedQuestion =  $quiz->questions()->create($data);
            }
            // delete answers that are not in the request
            $updatedQuestion->answers()->whereNotIn('id', collect($question['options'])->pluck('id')->toArray())->delete();
            // update or create answers
            collect($question['options'])->each(function ($option) use ($updatedQuestion) {
                $updatedOption = $updatedQuestion->answers()->find($option['id']);
                $data = [
                    "option" => $option['option'],
                    "is_correct" => $option['is_correct'],
                    "points" => $option['points'],
                ];
                if ($updatedOption) {
                    $updatedOption->update($data);
                } else {
                    $updatedQuestion->answers()->create($data);
                }
            });
        });
        // todo: fix saving problem when you save a record it take a big id
        DB::commit();
        return QuizResource::make($quiz)->resolve();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Quiz $quiz)
    {
        $quiz->delete();
        return response()->json(['message' => 'Quiz deleted successfully']);
    }

    function questions($quiz)
    {
        if (auth()->user()->isStudent()) {
            return StudentQuestionResource::collection(Question::with(['answers', 'studentAnswer'])->where('quiz_id', $quiz)->get());
        }
        return QuestionResource::collection(Question::with('answers')->where('quiz_id', $quiz)->get());
    }
    /**
     * Remove the specified resource from storage.
     */
    public function store_answers(Question $question, Request $request)
    {
        $data = $request->validate([
            "answers" => "required|array",
            "custom_answer" => "nullable|string",
        ]);

        $answer = $question->answers()->where('is_correct', true)->whereIn('id', $data['answers'])->first();
        $is_correct = boolval($answer);

        DB::beginTransaction();
        auth()->user()->questionAttempts()->firstOrCreate(
            ["question_id" => $question->id],
            [
                "is_custom_answer" => $question->allow_custom_answer,
                "custom_answer" => $data['custom_answer'],
                "is_correct" => $is_correct,
                "status" => $data['custom_answer'] && $question->allow_custom_answer
                    ? StudentAttemptStatus::DRAFT->value
                    : ($is_correct ? StudentAttemptStatus::CORRECT->value : StudentAttemptStatus::INCORRECT->value),
                "answers" => json_encode($data['answers']),
            ]
        );

        $quizAttempts = auth()->user()->quizAttempts()->updateOrCreate(
            ["quiz_id" => $question->quiz->id]
        );
        $quizAttempts->update([
            "status" => 0,
            "score" => $quizAttempts->score + ($is_correct ? $answer->points : 0),
            "progress_percent" => $quizAttempts->progress_percent + 100 / $question->quiz->questions()->count()
        ]);
        DB::commit();
        return response()->json(['message' => 'Answer saved successfully']);
    }
}
