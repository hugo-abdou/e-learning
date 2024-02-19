<?php

namespace App\Jobs;

use App\Enums\MediaStatus;
use App\Models\Media;
use App\Services\BunnyStream;
use Exception;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class GetVideoFromBunnyJob
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(public $libraryId, public $guid)
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {

        $media = Media::where('uuid', $this->libraryId . '-' . $this->guid)->first();
        if (!$media) {
            throw new Exception("Bunny CDN Video Not Found : " . $this->libraryId . '-' . $this->guid);
        }
        try {
            Log::info('Bunny CDN Video start Prossesing : ', [$this->libraryId . '-' . $this->guid]);
            $bunnyVideoManager = new BunnyStream();
            $res = $bunnyVideoManager->getVideo($this->libraryId, $this->guid);
            if ($res->StatusCode !== 200)  throw new \Exception($res->message);
            $guid = $this->guid;
            $pull_zone = config('services.bunnycdn.pull_zone');
            $path = "https://$pull_zone.b-cdn.net/$guid/play_480p.mp4";
            $themb = "https://$pull_zone.b-cdn.net/$guid/thumbnail.jpg";
            $preview = "https://$pull_zone.b-cdn.net/$guid/preview.webp";
            $low = "https://$pull_zone.b-cdn.net/$guid/playlist.m3u8";
            $media->update([
                'disk' => 'bunnycdn',
                "name" => $res->title,
                "data->duration" => $res->length,
                "data->width" => $res->width,
                "data->height" => $res->height,
                // "status" => $res->status,
                "path" => $path,
                "conversions" => [
                    ["engine" => "ImageResize", "path" => $themb, "disk" => 'bunnycdn', "name" => "thumb"],
                    ["engine" => "ImageResize", "path" => $preview, "disk" => 'bunnycdn', "name" => "preview"],
                    ["engine" => "VideoResize", "path" => $low, "disk" => 'bunnycdn', "name" => "low"],
                ]
            ]);
            Log::info("Bunny CDN Video Status Changed : ", [$this->libraryId . '-' . $this->guid]);
        } catch (\Throwable $th) {
            $media->update(['status' => MediaStatus::Error->value, 'data->error' => $th->getMessage()]);
            Log::error("Bunny CDN Video Error", [$th->getMessage()]);
            throw $th;
        }
    }
}
