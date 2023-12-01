<?php

namespace App\Storage;

use Illuminate\Support\Facades\Storage as LaravelStorage;

class Storage
{
    private $storage;

    private $disk;

    public function disk($disk)
    {
        $this->disk = $disk;

        switch ($this->disk) {
            case 'bunnycdn':
                $this->storage = new BunnyStorage();
                break;

            default:
                $this->storage = LaravelStorage::disk($this->disk);
                break;
        }

        return $this;
    }
    public function __construct()
    {
        $this->disk(disk());
    }

    public function __call($key, $data)
    {
        return $this->storage->$key(...$data);
    }
}
