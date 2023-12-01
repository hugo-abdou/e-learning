<?php

namespace App\MediaConversions;

use App\Abstracts\MediaConversion;
use App\Support\MediaConversionData;
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

        $image = Image::make($this->filesystem($this->getFromDisk())->url($this->getFilepath()));

        $convert = $image->resize($this->width, $this->height, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        })->encode();



        $this->filesystem()->put($this->getPath(), $convert->getEncoded(), disk());
        $this->size = $image->getSize();

        return MediaConversionData::conversion($this);
    }
}
