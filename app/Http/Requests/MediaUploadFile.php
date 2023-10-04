<?php

namespace App\Http\Requests;

use App\Enums\MediaStatus;
use App\MediaConversions\MediaImageResizeConversion;
use Illuminate\Foundation\Http\FormRequest;
use App\Models\Media;
use App\Support\MediaUploader;
use Illuminate\Support\Str;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class MediaUploadFile extends FormRequest
{
    public function rules(): array
    {
        // if ($this->has('isUrl')) {
        //     return [
        //         'type' => 'required|string',
        //         'url' => 'required|string',
        //         'meta.name' => 'required|string',
        //     ];
        // }
        $mimes = collect(Media::$types)->map(fn ($mime) => Str::after($mime, '/'))->implode(',');
        $maxFileSize = 1024 * 1024 * 200; // 200MB
        return [
            'file' => ['required', 'file', "mimes:$mimes", "max:$maxFileSize"],
        ];
    }


    public function handleOld()
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

    public function handle()
    {
        $file = $this->validated('file');
        $uniqueFileFolder = Str::random(20) . '_' . uniqid();
        $path = Storage::disk('public')->putFileAs("media/" . auth()->id() . "/$uniqueFileFolder", $file, 'original.' . $file->getClientOriginalExtension());
        return Media::create([
            'name' => pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME),
            'mime_type' => $file->getMimeType(),
            'size' => $file->getSize(),
            'size_total' => 0,
            'disk' => 'public',
            'path' => $path,
            'status' => MediaStatus::Pending->value,
            'conversions' => []
        ]);
    }

    protected function handleFile(UploadedFile $file): Media
    {
        return MediaUploader::fromFile($file)
            ->disk('public')
            ->path("media/" . auth()->id())
            ->conversions([
                MediaImageResizeConversion::name('thumb')->width(430),
                MediaImageResizeConversion::name('large')->width(2000),
            ])
            ->uploadAndInsert();
    }
}
