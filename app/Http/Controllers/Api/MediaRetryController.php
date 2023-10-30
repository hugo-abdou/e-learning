<?php

namespace App\Http\Controllers\Api;

use App\Enums\MediaResolutions;
use App\Enums\MediaStatus;
use App\Http\Controllers\Controller;
use App\Http\Resources\MediaResource;
use App\Jobs\ProcessImageMediaJob;
use App\Jobs\ProcessVideoMediaJob;
use App\Models\Media;
use Illuminate\Support\Str;

class MediaRetryController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Media $media)
    {
        $type = Str::before($media->mime_type, '/');
        $media->update(['status' => MediaStatus::Pending->value]);

        // process Image and extract thumbnails and large images
        ProcessImageMediaJob::dispatchIf($type === 'image', $media->id, ["thumb" => 500, "large" => 800], ['disk' => 'public', 'path' => 'media/' . auth()->id()]);

        // convert  Video to HLS format and extract thumbnails and qualities [360,720,1080]
        ProcessVideoMediaJob::dispatchIf($type === 'video', $media->id, [MediaResolutions::RESOLUTION_240P->value], ['disk' => 'public', 'path' => 'media/' . auth()->id()]);

        // wee query the media agan becose inside the imageJob i update the media table but the changes dos not effect on $media object so i get new data from db 
        return new MediaResource(Media::find($media->id));
    }
}
