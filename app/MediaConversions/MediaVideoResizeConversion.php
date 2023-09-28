<?php

namespace App\MediaConversions;

use App\Abstracts\MediaConversion;
use App\Support\MediaConversionData;
use FFMpeg\Format\Video\X264;
use Illuminate\Support\Facades\Storage;
use ProtoneMedia\LaravelFFMpeg\Exporters\HLSVideoFilters;
use ProtoneMedia\LaravelFFMpeg\Support\FFMpeg;

class MediaVideoResizeConversion extends MediaConversion
{
    protected float|null $width = null;
    protected float $kiloBitrate = 500;
    protected float|null $height = null;

    public function getEngineName(): string
    {
        return 'VideoResize';
    }

    public function canPerform(): bool
    {
        return $this->isVideo();
    }

    public function getPath(): string
    {
        return $this->getFilePathWithSuffix('m3u8');
    }

    public function setKiloBitrate(float $value = null): static
    {
        $this->kiloBitrate = $value;
        return $this;
    }
    public function width(float|null $value = null): static
    {
        $this->width = $value;
        return $this;
    }

    public function height(float|null $value = null): static
    {
        $this->height = $value;
        return $this;
    }

    public function handle(): MediaConversionData|null
    {
        $path_to_save = $this->getFilePathWithSuffix('m3u8');
        $highFormat = (new X264('aac'))->setKiloBitrate(1000);
        FFMpeg::fromDisk('uploads')
            ->open($this->getFilepath())
            ->exportForHLS()
            ->addFormat((new X264('aac'))->setKiloBitrate($this->kiloBitrate), function (HLSVideoFilters $filters) {
                // if ($this->width) {
                //     $filters->resize($this->width, $this->height);
                // }
            })
            ->addFormat($highFormat)
            ->toDisk('public')
            ->save($path_to_save);

        Storage::move('uploads/' . $this->getFilepath(), 'public/' . $this->getFilepath());
        $this->toDisk('public');
        return MediaConversionData::conversion($this);
    }
}
