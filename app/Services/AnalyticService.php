<?php

namespace App\Services;

use App\Models\Analytic;
use App\Models\Media;
use Illuminate\Http\Request;

class  AnalyticService
{
    static function getStorage(Request $request)
    {
        // $owner = auth()->user()->isAgent() ? auth()->user()->admin : auth()->user();
        $mediaQuery = Media::query();
        $used_storage = Media::sum('size_total');

        $data = [
            'used_storage' => $used_storage,
            'max_storage' => disk_free_space("."),
            'states' =>  $mediaQuery->get()->groupBy('mime_type')->map(function ($item) {
                $icon = getMediaIcon($item->first()->mime_type);
                $name = explode('.', $item->first()->path);
                $name = end($name);
                return ['value' => ['icon' => $icon, 'count' => $item->count(), 'name' =>  $name]];
            })->pluck('value')
        ];
        return response()->json(['message' => '', 'data' => $data]);
    }
}
