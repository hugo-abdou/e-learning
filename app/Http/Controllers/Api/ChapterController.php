<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ChapterRequest;
use App\Http\Resources\ChapterResource;
use App\Models\Chapter;
use Illuminate\Http\Request;

class ChapterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(ChapterRequest $request)
    {
        $course = auth()->user()->courses()->findOrFail($request->validated('course_id'));

        $chapter = $course->chapters()->create([
            'title' => $request->validated('title'),
            'order' => $request->validated('order'),
        ]);

        $chapter->attachments()->sync($request->validated('attachments'));
        return ChapterResource::make($chapter);
    }

    /**
     * Display the specified resource.
     */
    public function show(Chapter $chapter)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(ChapterRequest $request, $chapter)
    {
        $chapter = Chapter::updateOrCreate(['id' => $chapter], [
            'course_id' => $request->validated('course_id'),
            'title' => $request->validated('title'),
            'order' => $request->validated('order'),
        ]);

        $chapter->attachments()->sync($request->validated('attachments'));


        return ChapterResource::make($chapter);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chapter $chapter)
    {
        $chapter->delete();
        return response()->noContent();
    }
}
