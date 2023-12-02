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
use App\Support\MediaUploader;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;


class MediaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Media::query()->orderByDesc('created_at');

        if ($types = $request->get('types')) {
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

        if ($type === 'application') {
            $media->update([
                'status' => MediaStatus::Completed->value,
                'conversions' => [
                    'engine' => 'pdf',
                    'path' => '/assets/pdf-placeholder.png',
                    'disk' => 'public',
                    'size' => $media->size,
                    'name' => 'thumb',
                ]
            ]);
        }

        // process Image and extract thumbnails and large images
        ProcessImageMediaJob::dispatchIf(
            $type === 'image',
            $media->id,
            ["thumb" => 500, "large" => 800],
            ['disk' => 'public', 'path' => 'media/' . auth()->id()]
        );

        // convert  Video to HLS format and extract thumbnails and qualities [360,720,1080]
        ProcessVideoMediaJob::dispatchIf(
            $type === 'video',
            $media->id,
            [MediaResolutions::RESOLUTION_240P->value, MediaResolutions::RESOLUTION_720P->value],
            ['disk' => 'public', 'path' => 'media/' . auth()->id()]
        );

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
        return new MediaResource(Media::create($data));
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
}
