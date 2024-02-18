<?php

namespace App\Http\Controllers\Api;

use App\Enums\CourseStatus;
use App\Filters\Search;
use App\Filters\Sort;
use App\Http\Controllers\Controller;
use App\Http\Requests\ChapterRequest;
use App\Http\Resources\ChapterResource;
use App\Models\Chapter;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Pipeline;

class ChapterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $chapters = auth()->user()
            ->courses()->where('slug', $request->get('course_id'))->firstOrFail()
            ->chapters()->with(['attachments'])
            ->paginate($request->get('itemsPerPage', auth()->user()
                ->courses()->count()));
        return ChapterResource::collection($chapters);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(ChapterRequest $request)
    {
        $course = auth()->user()->courses()->findOrFail($request->validated('course_id'));
        try {
            DB::beginTransaction();
            $chapter = $course->chapters()->create([
                'title' => $request->validated('title'),
                'order' => $request->validated('order'),
            ]);
            $chapter->attachments()->sync($request->validated('attachments'));
            DB::commit();
            return ChapterResource::make($chapter);
        } catch (\Throwable $th) {
            $course->update(['status' => CourseStatus::Error]);
            return response()->json(['message' => 'Something went wrong'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
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
        try {
            DB::beginTransaction();
            $chapter = Chapter::updateOrCreate(['id' => $chapter], [
                'course_id' => $request->validated('course_id'),
                'title' => $request->validated('title'),
                'order' => $request->validated('order'),
            ]);
            $chapter->attachments()->sync($request->validated('attachments'));
            DB::commit();
            return ChapterResource::make($chapter);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Something went wrong'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
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
