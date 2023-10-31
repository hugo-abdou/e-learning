<?php

namespace App\Http\Controllers\Api;

use App\Enums\MediaResolutions;
use App\Enums\MediaStatus;
use App\Http\Controllers\Controller;
use App\Http\Resources\MediaResource;
use App\Jobs\ProcessImageMediaJob;
use App\Jobs\ProcessVideoMediaJob;
use App\Models\Media;
use App\Services\Resumable;
use Illuminate\Http\Request;
use Illuminate\Http\File as HttpFile;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class ResumableUploadController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // $tmpPath    = sys_get_temp_dir() . DIRECTORY_SEPARATOR . env('APP_NAME', 'laravel');
        $tmpPath    = 'tmp';
        if (!Storage::directoryExists($tmpPath)) {
            File::makeDirectory($tmpPath, $mode = 0777, true, true);
        }

        $resumable = new Resumable($request);

        $resumable->tempFolder = $tmpPath;
        $resumable->uploadFolder = $tmpPath;

        $result =  $resumable->process();

        switch ($result) {
            case Response::HTTP_OK:
                return response("Ok", Response::HTTP_OK);
            case  Response::HTTP_CREATED:
                $media = $this->completedResponce($tmpPath . DIRECTORY_SEPARATOR . $resumable->getOriginalFilename());
                $this->prosseceMedia($media);
                return response()->json(MediaResource::make(Media::find($media->id)), Response::HTTP_CREATED);
            case Response::HTTP_NOT_FOUND:
                return response(['message' => 'Chunk not found'], 204);
            default:
                return response(['message' => 'An error occurred'], 404);
        }
    }

    private function completedResponce(string $uploadPath): Media
    {
        $file = new HttpFile(storage_path('app/'  . DIRECTORY_SEPARATOR . $uploadPath));
        $directionPath = 'media/' . auth()->id() . "/" . uniqid() . "_" . time();
        $path = Storage::disk('public')->putFileAs($directionPath, $file, "original." . $file->getExtension());
        $media = Media::create([
            'name' => pathinfo($file->getFilename(), PATHINFO_FILENAME),
            'mime_type' => $file->getMimeType(),
            'size' => $file->getSize(),
            'size_total' => $file->getSize(),
            'disk' => 'public',
            'path' => $path,
            'status' => MediaStatus::Pending->value,
            'data->width' => "1080",
            'data->height' => "720",
            'conversions' => []
        ]);
        if (file_exists($uploadPath)) unlink($uploadPath);
        return $media;
    }

    private function prosseceMedia(Media $media): void
    {
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
    }
}
