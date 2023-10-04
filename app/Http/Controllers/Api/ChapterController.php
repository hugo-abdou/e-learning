<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ChapterRequest;
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
            'is_main' => $request->validated('is_main'),
        ]);

        if ($request->validated('video')) {
            $chapter->media()->syncWithPivotValues([$request->validated('video')], ['type' => 'video']);
        }
        if ($request->validated('documents')) {
            $chapter->media()->syncWithPivotValues($request->validated('documents'), ['type' => 'document']);
        }
        return $chapter;
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
    public function update(Request $request, Chapter $chapter)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chapter $chapter)
    {
        //
    }
}
