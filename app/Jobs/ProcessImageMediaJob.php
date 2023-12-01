<?php

namespace App\Jobs;

use App\Enums\MediaStatus;
use App\Facades\Storage;
use App\MediaConversions\MediaImageResizeConversion;
use App\Models\Media;
use App\Support\MediaUploader;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Str;

use Intervention\Image\Facades\Image;

class ProcessImageMediaJob
{
    use Dispatchable, InteractsWithQueue, SerializesModels;

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
            if (Str::before($media->mime_type, '/') !== 'image') throw new \Exception("Media is not a image");
            $media->update(['status' => MediaStatus::Processing->value]);
            $data = [];
            $conversions = collect($this->resolutions)->map(function ($width, $name) {
                return  MediaImageResizeConversion::name($name)->width($width);
            })->toArray();
            try {
                $data = (new MediaUploader())->disk($this->config['disk'])
                    ->path($this->config['path'])
                    ->conversions($conversions)->upload();

                // $image = Image::make(Storage::disk($this->config['disk'])->url($media->path));
                // $data['status'] = MediaStatus::Completed->value;
                // $data['data->width'] = $image->getWidth();
                // $data['data->height'] = $image->getHeight();
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
