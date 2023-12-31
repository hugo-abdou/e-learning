<?php

namespace App\Models;

use App\Facades\Storage;
use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Database\Eloquent\Model;
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
        'conversions' => 'array',
        'data' => 'array',
    ];

    public function getFullPath(): string
    {
        return $this->filesystem($this->disk)->path($this->path);
    }

    public function getUrl(): string
    {
        if ($this->disk === 'remote') return $this->path;
        return $this->filesystem($this->disk)->url($this->path);
    }

    public function getMasterUrl(): ?string
    {
        return $this->getConversionUrl('master');
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
            if ($conversion['disk'] === 'remote')  return $conversion['path'];
            return $this->filesystem($conversion['disk'])->url($conversion['path']);
        }
        return null;
    }

    public function getConversionFullPath(string $name): ?string
    {
        if ($conversion = $this->getConversion($name)) {
            return $this->filesystem($conversion['disk'])->path($conversion['path']);
        }
        return null;
    }

    public function filesystem(string $disk = '')
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
        // Convert MIME type to lowercase for case-insensitive comparison
        $mime = strtolower($mime);

        // Define MIME type to extension mappings
        $extensions = [
            'image' => [
                'jpeg' => ['image/jpeg', 'image/pjpeg'],
                'png' => ['image/png'],
                'gif' => ['image/gif'],
            ],
            'video' => [
                'mp4' => ['video/mp4'],
                'avi' => ['video/avi'],
                'webm' => ['video/webm'],
                'wmv' => ['video/x-ms-wmv'],
                'mov' => ['video/quicktime', 'video/x-matroska'],
            ],
            'application' => [
                'pdf' => ['application/pdf'],
            ],
        ];

        // Search for the MIME type in the configuration
        foreach ($extensions as $category => $types) {
            foreach ($types as $extension => $mimeTypes) {
                if (in_array($mime, $mimeTypes, true)) {
                    return $extension;
                }
            }
        }

        // If no match is found
        return null;
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
