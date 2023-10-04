<?php

namespace App\MediaConversions;

use App\Abstracts\MediaConversion;
use App\Services\VideoProcesseurService;
use App\Support\MediaConversionData;

class MediaVideoThumbConversion extends MediaConversion
{
    protected float $atSecond = 0;
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
        return $this->getFilePathWithSuffix('jpg');
    }
    public function getSize(): float
    {
        return $this->size;
    }

    public function atSecond(float $value = 0): static
    {
        $this->atSecond = $value;

        return $this;
    }

    public function handle(): MediaConversionData|null
    {
        $thumbFilepath = $this->getPath();
        VideoProcesseurService::create()
            ->fromPath(storage_path('app/public/' . $this->getFilepath()))
            ->to(storage_path('app/public'))
            ->generateThumbnail($thumbFilepath, $this->atSecond);
        $sizeInBytes = filesize(storage_path('app/public/') . $thumbFilepath);

        $this->size = $sizeInBytes;

        return MediaConversionData::conversion($this);
    }
}
