<?php

namespace App\MediaConversions;

use App\Abstracts\MediaConversion;
use App\Services\VideoProcesseurService;
use App\Support\MediaConversionData;
use BaconQrCode\Renderer\Path\Path;
use Illuminate\Support\Facades\Storage;

class MediaVideoHlsConversion extends MediaConversion
{
    protected float $kiloBitrate = 500;
    protected $resolution = null;
    protected float $size = 0;

    public function getEngineName(): string
    {
        return get_class($this);
    }

    public function canPerform(): bool
    {
        return $this->isVideo();
    }

    public function getPath(): string
    {
        return $this->getFilePathWithSuffix('m3u8');
    }

    public function setResolution($resolution): static
    {
        $this->resolution = $resolution;
        return $this;
    }
    public function getSize(): float
    {
        return $this->size;
    }

    public function handle(): MediaConversionData|null
    {
        $resolution = config("video_processeur.resolutions.$this->name");

        if (!$resolution) throw new \Exception("Resolution not found");

        $path_to_save = $this->getPath();
        VideoProcesseurService::create()
            ->setResolution($resolution)
            ->fromPath(storage_path('app/public/' . $this->getFilepath()))
            ->to(storage_path('app/public'))->convert($path_to_save);
        $size = VideoProcesseurService::create()
            ->fromPath(storage_path('app/public/' . $path_to_save))
            ->getHlsSize();
        $this->size = $size;

        $masterPath =  pathinfo($path_to_save, PATHINFO_DIRNAME) . '/master.m3u8';
        if (!Storage::disk('public')->fileExists($masterPath)) Storage::disk('public')->put($masterPath, '#EXTM3U');
        $conversionPath = pathinfo($path_to_save, PATHINFO_BASENAME);
        $width = $resolution['resolution'][0];
        $height = $resolution['resolution'][1];
        $bandwidth = $width * $height * 0.8;
        $output =  "#EXT-X-STREAM-INF:BANDWIDTH=$bandwidth,RESOLUTION=$width" . 'x' . "$height\n$conversionPath";
        Storage::disk('public')->append($masterPath, $output);

        return MediaConversionData::conversion($this);
    }
}
