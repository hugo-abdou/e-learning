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

        $name = basename($path);

        // Pass the parameters to the parent constructor
        parent::__construct($this->storagePath, basename($path), $mimeType);
    }

    // Add more methods as needed to mimic the UploadedFile class
}
