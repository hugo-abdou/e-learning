<?php

namespace App\Http\Controllers\Api;

use App\Enums\MediaStatus;
use App\Http\Controllers\Controller;
use App\Http\Resources\MediaResource;
use App\Jobs\ProcessImageMediaJob;
use App\Models\Media;
use App\Services\BunnyStream;
use Illuminate\Support\Str;

class MediaRetryController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Media $media, BunnyStream $bunnyVideoManager)
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
                $video = $bunnyVideoManager->getVideo($library, $videoId);
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
            }
        }
        // wee query the media agan becose inside the imageJob i update the media table but the changes dos not effect on $media object so i get new data from db 
        return new MediaResource(Media::find($media->id));
    }
}
