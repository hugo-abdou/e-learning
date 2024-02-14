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
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class ProcessVideoMediaJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    // set timeout to 10 minutes
    public $timeout = 600;

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

            // Storage::disk('bunnycdn')->put("/library/{$this->config['library']}/videos/$presignedRes->guid", file_get_contents($filePath));
            $uploadres = $bunnyStream->upload($this->config['library'], $presignedRes->guid, $filePath);
            if ($uploadres->StatusCode !== 200)  throw new \Exception($uploadres->message);

            $videoRes = $bunnyStream->getVideo($this->config['library'], $presignedRes->guid);
            if ($videoRes->StatusCode !== 200)  throw new \Exception($videoRes->message);
            $media->update([
                'uuid' =>  $this->config['library'] . '-' . $videoRes->guid,
                'disk' => 'bunnycdn',
                "data->duration" => 0,
                "data->width" => 1080,
                "data->height" => 720,
                "status" => MediaStatus::Processing->value,
            ]);
            Log::info("bunnycdn upload Success : " . $media->id);
            Storage::disk('tmp')->delete($media->path);
        } catch (\Throwable $th) {
            $media->update([
                'disk' => 'bunnycdn',
                "data->duration" => 0,
                "data->width" => 1080,
                "data->height" => 720,
                "data->error" => $th->getMessage(),
                "status" => MediaStatus::Error->value,
            ]);
            Log::error('bunnycdn upload Error : ' . $media->id . ' - ' . $th->getMessage());
            $media->update($data);
            throw $th;
        }
    }
}
