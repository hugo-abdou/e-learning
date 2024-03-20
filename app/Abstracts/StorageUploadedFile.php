<?php

namespace App\Abstracts;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class StorageUploadedFile extends UploadedFile
{
    protected $storagePath;

    public function __construct($path)
    {
        $this->storagePath = storage_path('app/' . $path);

        $mimeType =  Storage::mimeType($path);

        // Pass the parameters to the parent constructor
        parent::__construct($this->storagePath, basename($path), $mimeType);
    }

    static function createFromPath(string $path)
    {
        return new static($path);
    }
}
