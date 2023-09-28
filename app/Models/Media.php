<?php

namespace App\Models;

use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Media extends Model
{
    protected $guarded  = [];

    public static $types = [
        'image/jpg',
        'image/jpeg',
        'image/gif',
        'image/png',
        'video/mp4',
        'video/quicktime',
        'video/webm',
        'application/pdf',
    ];

    protected $casts = [
        'conversions' => 'array'
    ];

    public function getFullPath(): string
    {
        return $this->filesystem()->path($this->path);
    }

    public function getUrl(): string
    {
        if ($this->disk === 'remote' || $this->disk === 'bunny') {
            return $this->path;
        }
        return $this->filesystem()->url($this->path);
    }

    public function getSmUrl(): ?string
    {
        return $this->getConversionUrl('sm');
    }
    public function getLowUrl(): ?string
    {
        return $this->getConversionUrl('low');
    }
    public function getThumbUrl(): ?string
    {
        return $this->getConversionUrl('thumb');
    }

    public function getLargeFullPath(): ?string
    {
        return $this->getConversionFullPath('large');
    }

    public function getConversion(string $name): ?array
    {
        return collect($this->conversions)->where('name', $name)->first();
    }

    public function getConversionUrl(string $name): ?string
    {
        if ($conversion = $this->getConversion($name)) {
            if ($conversion['disk'] === 'remote' || $this->disk === 'bunny') {
                return $conversion['path'];
            }
            return $this->filesystem($conversion['disk'])->url($conversion['path']);
        }
        if (self::checkFileType($this->mime_type) === 'video') return url('https://vz-d0a25974-5f6.b-cdn.net/f2fe4185-d392-4ef7-820c-f93ecccd7d89/playlist.m3u8');
        if (self::checkFileType($this->mime_type)) return url('/assets/images/pdf-1.png');
        return null;
    }

    public function getConversionFullPath(string $name): ?string
    {
        if ($conversion = $this->getConversion($name)) {
            return $this->filesystem($conversion['disk'])->path($conversion['path']);
        }

        return null;
    }

    public function filesystem(string $disk = ''): Filesystem
    {
        return Storage::disk($disk ?: $this->disk);
    }

    public function isImage(): bool
    {
        return Str::before('/', $this->mime_type) === 'image';
    }

    public function isVideo(): bool
    {
        return Str::contains($this->mime_type, 'video');
    }

    public static function getExtensionFromMime($mime)
    {
        $extensions = [
            'image/jpeg' => 'jpg',
            'image/png' => 'png',
            'image/gif' => 'gif',
            'video/mp4' => 'mp4',
            'video/avi' => 'avi',
            'video/webm' => 'webm',
            'video/x-ms-wmv' => 'wmv',
            'video/quicktime' => 'mov',
            'application/pdf' => 'pdf',
        ];
        return isset($extensions[$mime]) ? $extensions[$mime] : null;
    }

    public static function checkFileType($mime)
    {
        if (in_array(self::getExtensionFromMime($mime), ['jpg', 'jpeg', 'png', 'gif'])) {
            return 'image';
        } elseif (in_array(self::getExtensionFromMime($mime), ['mp4', 'avi', 'wmv', 'mov'])) {
            return 'video';
        } elseif (in_array(self::getExtensionFromMime($mime), ['pdf'])) {
            return 'pdf';
        } else {
            return 'unknown';
        }
    }
}