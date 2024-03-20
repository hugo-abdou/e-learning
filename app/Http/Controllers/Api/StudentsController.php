<?php

namespace App\Http\Controllers\Api;

use App\Enums\StudentAttemptStatus;
use App\Http\Controllers\Controller;
use App\Http\Resources\QuestionAttemptRecourse;
use App\Http\Resources\StudentChapterResource;
use App\Http\Resources\UserResource;
use App\Models\Course;
use App\Models\UserQuestionAttempt;
use Illuminate\Http\Request;

class StudentsController extends Controller
{
    public function attemptes(Request $request)
    {
        $query = UserQuestionAttempt::with(['user', 'question'])
            ->whereRelation('user', 'name', 'like', '%' . $request->search . '%')
            ->where('is_custom_answer', 1)
            ->whereNotNull('custom_answer')
            ->where('status', StudentAttemptStatus::DRAFT->value);
        $index = 0;
        $result = $query->get()->groupBy('user_id')->mapWithKeys(function ($item, $key) use (&$index) {
            $index++;
            return [$index - 1 => array_merge(UserResource::make($item->first()?->user)->resolve(), [
                'attempts' => QuestionAttemptRecourse::collection($item)->resolve()
            ])];
        });
        return [
            'data' => $result,
        ];
    }

    public function chapters(Request $request)
    {
        $chapters = Course::where('slug', $request->get('course_id'))->firstOrFail()
            ->chapters()->orderBy('order')->with([
                'attachment_resources',
                'attachment_resources.progress' => fn ($q) => $q->where('user_id', auth()->id()),
                'attachment_resources.media'
            ])->get();

        return StudentChapterResource::collection($chapters);
    }

    public function validateAttemptes(Request $request, UserQuestionAttempt $attempt)
    {
        $data = $request->validate([
            'is_correct' => 'required|boolean',
        ]);
        // get the anwser that has the bigest point
        $answer = $attempt->question->answers->sortByDesc('point')->first();
        $attempt->update([
            'is_correct' => $data['is_correct'],
            'answers' => $data['is_correct'] ? json_encode([$answer->id])  : null,
            'status' => $data['is_correct'] ? StudentAttemptStatus::CORRECT->value : StudentAttemptStatus::INCORRECT->value
        ]);
    }
}
