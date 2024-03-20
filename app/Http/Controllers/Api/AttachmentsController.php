<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AttachmentResource;
use App\Http\Resources\StudentAttachmentResource;
use App\Models\Attachment;
use App\Models\Chapter;
use App\Models\Quiz;
use App\Models\UserAttachmentProgress;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class AttachmentsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($resource, $id)
    {
        //
    }
    /**
     * Display the specified resource.
     */
    public function show($resource, $resourceId, $id)
    {
        if (
            $resource === 'chapters' &&
            ($chapter = Chapter::findOrFail($resourceId)) &&
            ($attachment = $chapter->attachment_resources()->find($id))
        ) {
            return StudentAttachmentResource::make($attachment);
        }
        if (
            $resource === 'quizzes' &&
            ($quiz = Quiz::findOrFail($resourceId)) &&
            ($attachment = $quiz->attachment_resources()->find($id))
        ) {
            return StudentAttachmentResource::make($attachment);
        }
        return response()->json(['message' => 'Not found'], Response::HTTP_NOT_FOUND);
    }

    public function progress(Attachment $attachment, Request $request)
    {
        $data = $request->validate([
            'progress' => 'required|integer'
        ]);



        if ($progress = $attachment->progress) {
            $progress->update([
                'progress_percent' => $data['progress']
            ]);
        } else {
            $progresses = [];
            $attachment->chapter->course->chapters->map(function ($chp) use (&$progresses, $attachment, $data) {
                return $chp->attachment_resources->map(function ($at) use ($chp, &$progresses, $attachment, $data) {
                    $progresses[] =  [
                        'user_id' => auth()->id(),
                        "attachment_id" => $at->id,
                        'progress_percent' => $at->resource_id === $attachment->chapter->id && $at->id === $attachment->id ? $data['progress'] :  0,
                        "course_id" => $chp->course_id,
                        "created_at" => now(),
                        "updated_at" => now(),
                    ];
                });
            });
            UserAttachmentProgress::insert($progresses);
        }

        $progressQuery = $attachment->chapter->course->attachmentsProgress()->where('user_id', auth()->id());
        $attachment->chapter->course->progress()->updateOrCreate([
            'user_id' => auth()->id(),
        ], [
            'progress' => $progressQuery->sum('progress_percent') / $progressQuery->count()
        ]);
        return response()->json([
            'message' => 'Progress updated successfully'
        ], Response::HTTP_OK);
    }
}
