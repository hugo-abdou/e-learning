<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Database\UniqueConstraintViolationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UpdateCategoriesOrderController extends Controller
{
    public function __invoke(Request $request)
    {
        $data = $request->validate([
            'parents' => 'required|array',
        ]);
        // collect all children in one array

        DB::beginTransaction();
        try {
            $data['children'] = [];
            foreach ($data['parents'] as $parent => $children) {
                $data['children'] = array_merge($data['children'], $children);
            }
            foreach ($data['parents'] as $category => $children) {
                if (!in_array($category, $data['children'])) {
                    Category::where('id', $category)->update(['parent_id' => null]);
                }
                Category::whereIn('id', $children)->update(['parent_id' => $category]);
            }
            DB::commit();
        } catch (UniqueConstraintViolationException $th) {
            DB::rollBack();
            return response()->json([
                'message' => 'Child already exists in this category',
                'errors' => ['name' => ['Child already exists in this category']],
            ], 422);
        }
        return response()->noContent();
    }
}
