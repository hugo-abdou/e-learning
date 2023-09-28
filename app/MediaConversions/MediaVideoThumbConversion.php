<?php

namespace App\MediaConversions;

use App\Abstracts\MediaConversion;
use App\Support\MediaConversionData;
use FFMpeg\Format\Video\X264;
use Illuminate\Support\Facades\Storage;
use ProtoneMedia\LaravelFFMpeg\Exporters\HLSVideoFilters;
use ProtoneMedia\LaravelFFMpeg\Support\FFMpeg;

class MediaVideoThumbConversion extends MediaConversion
{
    protected float $atSecond = 0;

    public function getEngineName(): string
    {
        return 'VideoThumb';
    }

    public function canPerform(): bool
    {
        return $this->isVideo();
    }

    public function getPath(): string
    {
        return $this->getFilePathWithSuffix('jpg');
    }

    public function atSecond(float $value = 0): static
    {
        $this->atSecond = $value;

        return $this;
    }

    public function handle(): MediaConversionData|null
    {
        $thumbFilepath = $this->getFilePathWithSuffix('jpg');

        FFMpeg::fromDisk('uploads')
            ->open($this->getFilepath())
            ->getFrameFromSeconds($this->atSecond)
            ->export()
            ->toDisk('public')
            ->save($thumbFilepath);

        $this->toDisk('public');
        return MediaConversionData::conversion($this);
    }
    public function handleOld(): MediaConversionData|null
    {
        // Create & copy to temporary directory
        // $temporaryDirectory = MediaTemporaryDirectory::create();

        // $file = $temporaryDirectory->path($this->getFilepath());
        // $thumbFilepath = $this->getFilePathWithSuffix('jpg', $file);

        // MediaFilesystem::copyFromDisk($this->getFilepath(), $this->getFromDisk(), $file);

        // Convert
        // $ffmpeg = FFMpeg::create([
        //     'ffmpeg.binaries' => config('mixpost.ffmpeg_path'),
        //     'ffprobe.binaries' => config('mixpost.ffprobe_path'),
        // ]);

        // $video = $ffmpeg->open($file);
        // $duration = $ffmpeg->getFFProbe()->format($file)->get('duration');
        // $seconds = $duration <= $this->atSecond ? 0 : $this->atSecond;

        // $frame = $video->frame(TimeCode::fromSeconds($seconds));
        // $frame->save($thumbFilepath);

        // Copy
        // MediaFilesystem::copyToDisk($this->getToDisk(), $this->getPath(), $thumbFilepath);
        // Delete temporary directory
        // $temporaryDirectory->delete();

        return MediaConversionData::conversion($this);
    }
}
