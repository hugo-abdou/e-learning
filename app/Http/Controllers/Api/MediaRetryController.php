<?php

namespace App\Http\Controllers\Api;

use App\Enums\MediaResolutions;
use App\Enums\MediaStatus;
use App\Http\Controllers\Controller;
use App\Http\Resources\MediaResource;
use App\Jobs\ProcessImageMediaJob;
use App\Jobs\ProcessVideoMediaJob;
use App\Models\Media;
use App\Services\BunnyVideoManager;
use Illuminate\Support\Str;

class MediaRetryController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Media $media, BunnyVideoManager $bunnyVideoManager)
    {
        $type = Str::before($media->mime_type, '/');
        $media->update(['status' => MediaStatus::Pending->value]);

        // process Image and extract thumbnails and large images
        ProcessImageMediaJob::dispatchIf($type === 'image', $media->id, ["thumb" => 500, "large" => 800], ['disk' => 'public', 'path' => 'media/' . auth()->id()]);

        // convert  Video to HLS format and extract thumbnails and qualities [360,720,1080]
        if ($type === 'video') {
            if ($media->disk === 'bunnycdn') {
                $library = explode('-', $media->uuid)[0];
                $videoId = str_replace("{$library}-", '', $media->uuid);
                $videoData = $bunnyVideoManager->getVideo($library, $videoId);
                if (!$videoData) return response()->json(['message' => "Error Video $videoId Not Found On library: $library"], 405);
                $path = "https://" . env("VITE_PULL_ZONE") . ".b-cdn.net/" . $videoData['guid'] . "/play_480p.mp4";
                $themb = "https://" . env("VITE_PULL_ZONE") . ".b-cdn.net/" . $videoData['guid'] . "/thumbnail.jpg";
                $low = "https://" . env("VITE_PULL_ZONE") . ".b-cdn.net/" . $videoData['guid'] . "/playlist.m3u8";
                $media->update([
                    'disk' => 'remote',
                    "name" => $videoData['title'],
                    "data->duration" => $videoData['length'] / 60,
                    "data->width" => $videoData['width'] / 60,
                    "data->height" => $videoData['height'] / 60,
                    "status" => $videoData['status'],
                    "path" => $path,
                    "conversions" => [
                        ["engine" => "ImageResize", "path" => $themb, "disk" => 'remote', "name" => "thumb"],
                        ["engine" => "VideoResize", "path" => $low, "disk" => 'remote', "name" => "master"],
                    ]
                ]);
            }
        }
        // ProcessVideoMediaJob::dispatchIf($type === 'video', $media->id, [MediaResolutions::RESOLUTION_240P->value], ['disk' => 'public', 'path' => 'media/' . auth()->id()]);

        // wee query the media agan becose inside the imageJob i update the media table but the changes dos not effect on $media object so i get new data from db 
        return new MediaResource(Media::find($media->id));
    }
}
