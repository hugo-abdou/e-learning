<?php

namespace App\Http\Controllers\Api;

use App\Enums\QuizStatus;
use App\Http\Controllers\Controller;
use App\Models\Quiz;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class PublishQuizController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Quiz $quiz)
    {
        $status = $request->validate([
            'status' => ['required', Rule::in(QuizStatus::values())]
        ])['status'];

        if ($status == QuizStatus::Scheduled) throw new \Exception('Quiz can\'t be scheduled from this action');

        $quiz->update(['status' => $status]);
        return response()->json(['message' => 'Quiz published successfully']);
    }
}
