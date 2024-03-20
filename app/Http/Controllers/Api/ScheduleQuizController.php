<?php

namespace App\Http\Controllers\Api;

use App\Enums\QuizStatus;
use App\Http\Controllers\Controller;
use App\Models\Quiz;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ScheduleQuizController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Quiz $quiz)
    {
        $quiz->update([
            'status' => QuizStatus::Scheduled->value,
            'schedule_at' => Carbon::make($request->date)->toDateTimeString(),
        ]);
        return response()->json(['message' => 'Quiz scheduled successfully']);
    }
}
