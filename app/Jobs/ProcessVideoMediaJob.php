<?php

namespace App\Jobs;

use App\Enums\MediaStatus;
use App\MediaConversions\MediaVideoHlsConversion;
use App\MediaConversions\MediaVideoThumbConversion;
use App\Services\VideoProcesseurService;
use App\Support\MediaUploader;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Str;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;

class ProcessVideoMediaJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     * @param int $mediaId
     * @param array $resolutions
     * @param array $config[disk, path]
     */
    public function __construct(public int $mediaId, public $resolutions = [], public $config = [])
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        if ($media = \App\Models\Media::findOrFail($this->mediaId)) {
            if (Str::before($media->mime_type, '/') !== 'video') throw new \Exception("Media is not a video");
            $media->update(['status' => MediaStatus::Processing->value]);
            $data = [];
            $conversions = collect($this->resolutions)->map(function ($resolution) {
                return MediaVideoHlsConversion::name($resolution);
            })->toArray();
            try {
                $data = MediaUploader::fromPath($media->path)
                    ->disk($this->config['disk'] ?? 'public')
                    ->path($this->config['path'] ?? 'media')
                    ->conversions([
                        MediaVideoThumbConversion::name('thumb')->atSecond(2),
                        ...$conversions
                    ])->upload();
                $meta = VideoProcesseurService::create()->fromPath(storage_path('app/public/' . $media->path))->generateMeta();
                $data['data->width'] = $meta->get('width');
                $data['data->height'] = $meta->get('height');
                $data['data->duration'] = $meta->get('duration');
                $data['status'] = MediaStatus::Completed->value;
            } catch (\Throwable $th) {
                $data['data->error'] =  $th->getMessage();
                $data['data->width'] = "1080";
                $data['data->height'] = "720";
                $data['status'] = MediaStatus::Error->value;
            }
            $media->update($data);
            $this->delete();
            return;
        }
    }
}
