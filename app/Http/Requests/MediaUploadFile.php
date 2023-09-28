<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;
use App\MediaConversions\MediaImageResizeConversion;
use App\MediaConversions\MediaVideoResizeConversion;
use App\MediaConversions\MediaVideoThumbConversion;
use App\Models\Media;
use App\Support\MediaUploader;
use Illuminate\Http\UploadedFile;

class MediaUploadFile extends FormRequest
{
    public function rules(): array
    {
        if ($this->has('isUrl')) {
            return [
                'type' => 'required|string',
                'url' => 'required|string',
                'meta.name' => 'required|string',
            ];
        }

        $mimes = collect(Media::$types)->map(function ($mime) {
            return Str::after($mime, '/');
        })->implode(',');

        $maxFileSize = 1024 * 1024 * 200; // 200MB

        return [
            'file' => ['required', 'file', "mimes:$mimes", "max:$maxFileSize"],
        ];
    }


    public function handle()
    {
        if ($this->has('isUrl')) {
            return [
                'name' => $this->validated('meta.name'),
                'mime_type' => $this->validated('type'),
                'size' => 0,
                'size_total' => 0,
                'disk' => 'remote',
                'path' => $this->validated('url'),
                'conversions' => [
                    ["engine" => "ImageResize", "path" => $this->validated('url') . '&w=150', "disk" => "remote", "name" => "sm"],
                    ["engine" => "ImageResize", "path" => $this->validated('url') . '&w=430', "disk" => "remote", "name" => "thumb"],
                    ["engine" => "ImageResize", "path" => $this->validated('url') . '&w=2000', "disk" => "remote", "name" => "large"],
                ]
            ];
        }

        return $this->handleFile($this->file('file'));
    }

    protected function handleFile(UploadedFile $file): Media
    {
        $now = now()->timestamp;
        $fileType = Media::checkFileType($file->getMimeType());
        $disk = $fileType === 'video' ? 'uploads' : 'public';

        return MediaUploader::fromFile($file)
            ->disk($disk)
            ->path("media/" . $now)
            ->conversions([
                MediaImageResizeConversion::name('sm')->width(150),
                MediaImageResizeConversion::name('thumb')->width(430),
                MediaImageResizeConversion::name('large')->width(2000),
                MediaVideoThumbConversion::name('thumb')->atSecond(5),
                MediaVideoResizeConversion::name('low')->setKiloBitrate(500),
            ])
            ->uploadAndInsert();
    }
}
