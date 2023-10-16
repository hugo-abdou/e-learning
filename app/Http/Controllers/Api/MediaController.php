<?php

namespace App\Http\Controllers\Api;

use App\Abstracts\StorageUploadedFile;
use App\Enums\MediaResolutions;
use App\Enums\MediaStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\MediaUploadFile;
use App\Http\Resources\MediaResource;
use App\Jobs\ProcessImageMediaJob;
use App\Jobs\ProcessVideoMediaJob;
use App\MediaConversions\MediaImageResizeConversion;
use App\MediaConversions\MediaVideoThumbConversion;
use App\Models\Media;
use App\Services\VideoProcesseurService;
use App\Support\MediaUploader;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Process;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

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

    function destroy(Media $media)
    {
        $media->delete();
        return response()->json(['message' => 'Media deleted successfully']);
    }
}
