<?php

namespace App\Support;

use App\Abstracts\StorageUploadedFile;
use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Http\UploadedFile;
use App\Models\Media;
use App\Contracts\MediaConversion;
use Illuminate\Support\Facades\Storage;

class MediaUploader
{
    protected UploadedFile $file;
    protected string $disk;
    protected string $path = '';
    protected array $conversions;

    public function __construct(UploadedFile $file)
    {
        $this->setFile($file);
        $this->disk('public');
    }

    public static function fromFile(UploadedFile $file): static
    {
        return new static($file);
    }
    public static function fromPath(string $path): static
    {
        return new static(StorageUploadedFile::createFromPath($path));
    }

    public function setFile(UploadedFile $file): static
    {
        $this->file = $file;

        return $this;
    }

    public function disk(string $name): static
    {
        $this->disk = $name;

        return $this;
    }

    public function path(string $path): static
    {
        $this->path = $path;

        return $this;
    }

    public function conversions(array $array): static
    {
        $this->conversions = $array;

        return $this;
    }

    public function upload(): array
    {
        $path = $this->file->getFileInfo();
        if (!$path)  throw new \Exception("The file was not uploaded. Check your $this->disk driver configuration.");
        $fileSize = $this->file->getSize();
        $conversions = $this->performConversions($path);
        Storage::disk($this->disk)->put(
            $this->path . '/' . $this->file->getClientOriginalName(),
            $this->file->getContent()
        );
        $totalSize = collect($conversions)->sum('size');
        return [
            'size_total' => $fileSize + $totalSize,
            'conversions' => $conversions
        ];
    }

    public function uploadAndInsert()
    {
        return Media::create($this->upload());
    }

    protected function performConversions(string $filepath): array
    {
        if (empty($this->conversions)) return [];
        return collect($this->conversions)->map(function ($conversion) use ($filepath) {
            if (!$conversion instanceof MediaConversion) {
                throw new \Exception('The conversion must be an instance of MediaConversion');
            }
            $perform = $conversion->filepath($filepath)
                ->fromDisk('tmp')
                ->toDisk($this->disk)
                ->perform();
            if (!$perform) return null;
            return $perform->get();
        })->filter()->values()->toArray();
    }

    protected function filesystem(): Filesystem
    {
        return Storage::disk($this->disk);
    }
}
