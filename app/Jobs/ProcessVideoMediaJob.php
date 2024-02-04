<?php

namespace App\Jobs;

use App\Enums\MediaStatus;
use App\Services\BunnyStream;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Str;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;

class ProcessVideoMediaJob
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     * @param int $mediaId
     * @param array $config[disk, path]
     */
    public function __construct(public int $mediaId, public $config = [])
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

            try {
                $filePath = storage_path('app/tmp/' . $media->path);
                if (!file_exists($filePath)) throw new \Exception("File not found");

                $bunnyStream = new BunnyStream();
                $res = $bunnyStream->presignedUpload(config('services.bunnycdn.library'), $media->name);
                $bunnyStream->upload(
                    config('services.bunnycdn.library'),
                    $res['guid'],
                    file_get_contents($filePath)
                );
                $video = $bunnyStream->getVideo(
                    config('services.bunnycdn.library'),
                    $res['guid']
                );
                $data['data->width'] = 1080;
                $data['data->height'] = 720;
                $data['data->duration'] = 0;
                Storage::disk('tmp')->delete($media->path);
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
