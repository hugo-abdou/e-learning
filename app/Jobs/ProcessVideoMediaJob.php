<?php

namespace App\Jobs;

use App\Enums\MediaStatus;
use App\Models\Media;
use App\Services\BunnyStream;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Str;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;

class ProcessVideoMediaJob implements ShouldQueue
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
        $media = Media::where('id', $this->mediaId)->first();
        if (!$media) {
            $this->fail("Media Not Found : " . $this->mediaId);
            return;
        }

        if (Str::before($media->mime_type, '/') !== 'video') throw new \Exception("Media is not a video");
        $media->update(['status' => MediaStatus::Processing->value]);
        $data = [];

        try {
            $filePath = storage_path('app/tmp/' . $media->path);
            if (!file_exists($filePath)) throw new \Exception("File not found");

            $bunnyStream = new BunnyStream();
            $presignedRes = $bunnyStream->presignedUpload($this->config['library'], $media->name);
            if ($presignedRes->StatusCode !== 200)  throw new \Exception($presignedRes->message);

            $uploadres = $bunnyStream->upload($this->config['library'], $presignedRes->guid, file_get_contents($filePath));
            if ($uploadres->StatusCode !== 200)  throw new \Exception($uploadres->message);

            $videoRes = $bunnyStream->getVideo($this->config['library'], $presignedRes->guid);
            if ($videoRes->StatusCode !== 200)  throw new \Exception($videoRes->message);

            $data['uuid'] = $this->config['library'] . '-' . $videoRes->guid;
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
    }
}
