<?php

namespace App\Http\Controllers\Api;

use App\Filters\Search;
use App\Http\Controllers\Controller;
use App\Http\Resources\CategoriesResource;
use App\Http\Resources\CategoriesWithPathsResource;
use App\Models\Category;
use Illuminate\Database\UniqueConstraintViolationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Pipeline;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Category::query();

        if (auth()->user()->isSupperAdmin()) {
        } elseif (auth()->user()->isAdmin()) {
            $query = $query->whereIn('user_id',  auth()->user()->users->filter(fn ($user) => !$user->isStudent())->pluck('id')->merge(auth()->id()));
        } else {
            $query = $query->whereIn('user_id',  [auth()->id(), auth()->user()->student->id]);
        }

        $records = Pipeline::send($query->whereNull('parent_id'))
            ->through([
                new Search(['name', 'type', 'children.name', 'children.type']),
            ])->thenReturn()->get();
        // use the categoriesResource to return all categories
        return CategoriesResource::collection($records);
    }
    /**
     * Display a listing of the resource.
     */
    public function categoriesWithPaths()
    {


        $query = Category::query();

        if (auth()->user()->isSupperAdmin()) {
        } elseif (auth()->user()->isAdmin()) {
            $query = $query->whereIn('user_id',  auth()->user()->users->filter(fn ($user) => !$user->isStudent())->pluck('id')->merge(auth()->id()));
        } else {
            $query = $query->whereIn('user_id',  [auth()->id(), auth()->user()->student->id]);
        }

        $records = Pipeline::send($query)
            ->through([
                new Search(['name', 'type', 'children.name', 'children.type']),
            ])->thenReturn()->get();
        // use the categoriesResource to return all categories
        return CategoriesWithPathsResource::collection($records);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'type' => 'required',
            'parent_id' => 'nullable'
        ]);
        if ($data['parent_id'] === 0) $data['parent_id'] = null;
        try {
            $category =  auth()->user()->categories()->create($data);
        } catch (UniqueConstraintViolationException $th) {
            return response()->json([
                'message' => 'Child already exists in this category',
                'errors' => ['name' => ['Child already exists in this category']],
            ], 422);
        }
        return new CategoriesResource($category);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        $data = $request->validate([
            'name' => 'required',
            'type' => 'required',
        ]);
        try {
            $category->update($data);
        } catch (UniqueConstraintViolationException $th) {
            return response()->json([
                'message' => 'Child already exists in this category',
                'errors' => ['name' => ['Child already exists in this category']],
            ], 422);
        }
        return new CategoriesResource($category);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return response()->json(['message' => 'Category deleted successfully'], 200);
    }
}
