<?php

namespace App\Http\Controllers\Api;

use App\Enums\MediaResolutions;
use App\Enums\MediaStatus;
use App\Facades\Storage;
use App\Http\Controllers\Controller;
use App\Http\Requests\MediaUploadFile;
use App\Http\Resources\MediaResource;
use App\Jobs\ProcessImageMediaJob;
use App\Jobs\ProcessVideoMediaJob;
use App\MediaConversions\MediaImageResizeConversion;
use App\Models\Media;
use App\Services\BunnyStream;
use App\Support\MediaUploader;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;


class MediaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Media::query()->orderByDesc('created_at');

        // dd($request->all());

        if ($types = json_decode($request->get('types', '[]'))) {
            foreach ($types as $type) {
                $type = rtrim($type, '*') . '%';
                $query->orWhere('mime_type', 'like', $type);
            }
        }
        if ($request->has('search')) {
            $query->where('name', 'like', '%' . $request->get('search') . '%');
        }
        return MediaResource::collection($query->paginate($request->get('itemsPerPage', 10)));
    }
    public function search(Request $request)
    {
        $records = Media::latest('created_at')
            ->whereIn('mime_type', explode(',', $request->get('mediaType')))
            ->simplePaginate(10);

        return MediaResource::collection($records);
    }
    public function upload(MediaUploadFile $upload): MediaResource
    {
        $media = $upload->handle();
        $type = Str::before($media->mime_type, '/');

        // if ($type === 'application') {
        //     $media->update([
        //         'status' => MediaStatus::Completed->value,
        //         'conversions' => [
        //             'engine' => 'pdf',
        //             'path' => '/assets/pdf-placeholder.png',
        //             'disk' => 'public',
        //             'size' => $media->size,
        //             'name' => 'thumb',
        //         ]
        //     ]);
        // }

        // process Image and extract thumbnails and large images
        ProcessImageMediaJob::dispatchIf(
            $type === 'image',
            $media->id,
            ["thumb" => 500, "large" => 800],
            ['disk' => 'public', 'path' => 'media/' . auth()->id()]
        );

        // convert  Video to HLS format and extract thumbnails and qualities [360,720,1080]
        // ProcessVideoMediaJob::dispatchIf(
        //     $type === 'video',
        //     $media->id,
        //     [MediaResolutions::RESOLUTION_240P->value, MediaResolutions::RESOLUTION_720P->value],
        //     ['disk' => 'public', 'path' => 'media/' . auth()->id()]
        // );

        // wee query the media agan becose inside the imageJob i update the media table but the changes dos not effect on $media object so i get new data from db 
        return new MediaResource(Media::find($media->id));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'uuid' => 'required|string',
            'status' => 'required|integer',
            'name' => 'required|string',
            'mime_type' => 'required|string',
            'size' => 'required|integer',
            'size_total' => 'required|integer',
            'disk' => 'required|string',
            'path' => 'required|string',
            'conversions' => 'required|array',
        ]);

        return new MediaResource(Media::create(array_merge($data, [
            'data->width' => "1080",
            'data->height' => "720",
        ])));
    }

    public function show(Media $media)
    {
        return new MediaResource($media);
    }

    function destroy(Media $media)
    {
        foreach ($media->conversions as $conversion) {
            if ($conversion['disk'] !== 'remote') {
                Storage::disk($conversion['disk'])->delete($conversion['path']);
            }
        }
        Storage::disk($media->disk)->delete($media->path);
        $media->delete();
        return response()->json(['message' => 'Media deleted successfully']);
    }

    public function bunny_webhook(Request $request, BunnyStream $bunnyVideoManager)
    {
        $data = $request->validate([
            "VideoLibraryId" => 'required|integer',
            "VideoGuid" => 'required|string',
            "Status" => 'required|integer',
        ]);

        if ($media = Media::where('uuid', $data['VideoLibraryId'] . '-' . $data['VideoGuid'])->first()) {
            try {
                $video = $bunnyVideoManager->getVideo($data['VideoLibraryId'], $data['VideoGuid']);
                $guid = $video['guid'];
                $pull_zone = config('services.bunnycdn.pull_zone');
                $path = "https://$pull_zone.b-cdn.net/$guid/play_480p.mp4";
                $themb = "https://$pull_zone.b-cdn.net/$guid/preview.webp";
                $low = "https://$pull_zone.b-cdn.net/$guid/playlist.m3u8";
                $media->update([
                    'disk' => 'remote',
                    "name" => $video['title'],
                    "data->duration" => $video['length'] / 60,
                    "data->width" => $video['width'] / 60,
                    "data->height" => $video['height'] / 60,
                    "status" => $video['status'],
                    "path" => $path,
                    "conversions" => [
                        ["engine" => "ImageResize", "path" => $themb, "disk" => 'remote', "name" => "thumb"],
                        ["engine" => "VideoResize", "path" => $low, "disk" => 'remote', "name" => "low"],
                    ]
                ]);
                return response('ok');
            } catch (\Throwable $th) {
                $media->update(['status' => MediaStatus::Error->value, 'data->error' => $th->getMessage()]);
                return response('error', 500);
            }
        }
        return response('video not found', 404);
    }
}
