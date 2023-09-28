<?php

namespace App\Http\Controllers\Api;

use App\Abstracts\StorageUploadedFile;
use App\Http\Controllers\Controller;
use App\Http\Requests\MediaUploadFile;
use App\Http\Resources\MediaResource;
use App\MediaConversions\MediaImageResizeConversion;
use App\MediaConversions\MediaVideoThumbConversion;
use App\Models\Media;
use App\Support\MediaUploader;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

class MediaController extends Controller
{
    public function search(Request $request)
    {
        $records = Media::latest('created_at')
            ->whereIn('mime_type', explode(',', $request->get('mediaType')))
            ->simplePaginate(10);

        return MediaResource::collection($records);
    }
    public function upload(MediaUploadFile $upload): MediaResource
    {
        // return new MediaResource($upload->handle());
        return new MediaResource(Media::first());
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
    ////////////////////////////////////////////////////////////////////////
    public function uploadChunk(Request $request)
    {
        $request->validate(['videoChunk' => 'required|file', 'id' => 'required|string']);
        $chunk = $request->file('videoChunk');
        $chunkName = $request->id . '.bin';
        $path = $chunk->storeAs('video_chunks', $chunkName);

        return response()->json(['message' => 'Chunk uploaded successfully', 'path' => $path]);
    }
    public function mergeVideo(Request $request)
    {
        $data = $request->validate([
            'chunks_folder' => 'required|string',
            'video_name' => 'required|string'
        ]);

        $outputVideoPath = storage_path('app/video_chunks/' . $data['video_name']); // Change this to your output video path
        $chunks = Storage::files('/video_chunks/' . $data['chunks_folder']); // Change this to match your storage disk

        // Sort the chunks by name to ensure they are in the correct order
        sort($chunks);

        // Create a new video file
        $outputFile = fopen($outputVideoPath, 'wb');

        // Iterate through the chunks and append them to the output file
        foreach ($chunks as $chunk) {
            $chunkContents = Storage::get($chunk);
            fwrite($outputFile, $chunkContents);
        }

        fclose($outputFile);
        $file = new StorageUploadedFile('video_chunks/' . $data['video_name']);
        $media = new MediaResource($this->handleFile($file));

        // Clean up the temporary chunks
        Storage::deleteDirectory('/video_chunks/' . $data['chunks_folder']);
        Storage::delete('video_chunks/' . $data['video_name']);

        return response()->json(['media' =>  $media]);
    }
    protected function handleFile(UploadedFile $file): Media
    {
        $now = now()->timestamp;
        $fileType = Media::checkFileType($file->getMimeType());
        $disk = $fileType === 'video' ? 'uploads' : 'public';

        return MediaUploader::fromFile($file)
            ->disk($disk)
            ->path("media/" . $now)
            ->conversions([
                MediaImageResizeConversion::name('sm')->width(150),
                MediaImageResizeConversion::name('thumb')->width(430),
                MediaImageResizeConversion::name('large')->width(2000),
                MediaVideoThumbConversion::name('thumb')->atSecond(5),
                // MediaVideoResizeConversion::name('low')->setKiloBitrate(500),
            ])
            ->uploadAndInsert();
    }

    public function bunny_webhook(Request $request)
    {

        $data = $request->validate([
            "VideoLibraryId" => 'required|integer',
            "VideoGuid" => 'required|string',
            "Status" => 'required|integer',
        ]);

        if ($media = Media::where('uuid', $data['VideoLibraryId'] . '-' . $data['VideoGuid'])->first()) {
            $url = env('VITE_BUNNY_BASE_URL') . '/library/' . $data['VideoLibraryId'] . '/videos/' . $data['VideoGuid'];

            $response = Http::withHeaders([
                'accessKey' => env('VITE_BUNNY_KEY'),
                "accept" => "application/json"
            ])->get($url);

            $path = "https://" . env("VITE_PULL_ZONE") . ".b-cdn.net/" . $data['VideoGuid'] . "/play_480p.mp4";
            $themb = "https://" . env("VITE_PULL_ZONE") . ".b-cdn.net/" . $data['VideoGuid'] . "/thumbnail.jpg";
            $low = "https://" . env("VITE_PULL_ZONE") . ".b-cdn.net/" . $data['VideoGuid'] . "/playlist.m3u8";
            $media->update([
                "name" => $response->json('title'),
                "duration" => $response->json('length') / 60,
                "status" => $response->json('status'),
                "path" => $path,
                "conversions" => [
                    ["engine" => "ImageResize", "path" => $themb, "disk" => "bunny", "name" => "thumb"],
                    ["engine" => "VideoResize", "path" => $low, "disk" => "bunny", "name" => "low"],
                ]
            ]);
        }
        return response('ok');
    }
}
