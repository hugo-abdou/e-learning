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
use Illuminate\Support\Facades\Log;
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
            ->chapters()->orderBy('order')->with(['attachments'])
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
        $lastOrder =  Chapter::where('course_id', $course->id)->orderBy('order', 'desc')->first()?->order ?? 0;
        try {
            DB::beginTransaction();
            $chapter = $course->chapters()->create([
                'title' => $request->validated('title'),
                'order' => $lastOrder + 1,
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
    public function update(ChapterRequest $request, Chapter $chapter)
    {
        try {
            DB::beginTransaction();
            $chapter->update(['title' => $request->validated('title')]);
            $chapter->attachments()->sync($request->validated('attachments'));
            DB::commit();
            return ChapterResource::make($chapter);
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
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
    /**
     * reorder the specified resources.
     */
    public function reorder(Request $request)
    {
        $data = $request->validate([
            'chapters' => 'required|array',
        ]);
        $ids = [];
        $query = "UPDATE chapters SET `order` = CASE id";
        foreach ($data['chapters'] as $chaptre) {
            $ids[] = $chaptre['id'];
            $query .= " WHEN {$chaptre['id']} THEN {$chaptre['order']}";
        }
        $query .= " END WHERE id IN (" . implode(',', $ids) . ")";
        DB::update($query);
        return response()->json(['message' => 'Chapters sorted successfully']);
    }
}
