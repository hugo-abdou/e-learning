<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AttachmentResource;
use App\Models\Chapter;
use App\Models\Quiz;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

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
            ($attachment = $chapter->attachments()->where('attachment_id', $id)->firstOrFail())
        ) {
            return AttachmentResource::make($attachment);
        }
        if (
            $resource === 'quizzes' &&
            ($quiz = Quiz::findOrFail($resourceId)) &&
            ($attachment = $quiz->attachments()->where('attachment_id', $id)->firstOrFail())
        ) {
            return AttachmentResource::make($attachment);
        }
        return response()->json(['message' => 'Not found'], Response::HTTP_NOT_FOUND);
    }
}
