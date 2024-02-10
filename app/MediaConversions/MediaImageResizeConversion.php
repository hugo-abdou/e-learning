<?php

namespace App\MediaConversions;

use App\Abstracts\MediaConversion;
use App\Support\MediaConversionData;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class MediaImageResizeConversion extends MediaConversion
{
    protected float|null $width;
    protected float|null $height = null;
    protected float $size = 0;

    public function getEngineName(): string
    {
        return get_class($this);
    }

    public function canPerform(): bool
    {
        return $this->isImage();
    }

    public function getPath(): string
    {
        return $this->getFilePathWithSuffix();
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

    public function getSize(): float
    {
        return $this->size;
    }

    public function handle(): MediaConversionData|null
    {
        $image = Image::make(storage_path('app/' . $this->getFromDisk() . '/' . $this->getFilepath()));
        $convert = $image->resize($this->width, $this->height, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        })->encode();

        Storage::disk($this->getToDisk())->put($this->getPath(), $convert->getEncoded());

        return MediaConversionData::conversion($this);
    }
}
