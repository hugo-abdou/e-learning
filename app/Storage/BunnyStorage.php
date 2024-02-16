<?php

namespace App\Storage;

use Illuminate\Http\File;

class BunnyStorage implements StorageInterface
{

    public function __construct($test, $hugo)
    {
        dd($test, $hugo);
    }

    public function __call($key, $data)
    {
        // return $this->filesystem->$key(...$data);
    }

    /**
     * Put data into the Bunny Storage.
     *
     * @param string $key
     * @param mixed $data
     * @return void
     */
    public function put($key, $data)
    {
        // $this->filesystem->write($key, $data);
    }
    /**
     * Put data into the Bunny Storage.
     *
     * @param string $key
     * @param File $data
     * @return void
     */
    public function putFileAs($directionPath, File $file, $fileName)
    {
        // $this->filesystem->write("$directionPath/$fileName", $file->getContent());
        // return ltrim("$directionPath/$fileName", '/');
    }

    /**
     * Retrieve data from the Bunny Storage.
     *
     * @param string $key
     * @return mixed
     */
    public function get($key)
    {
        // return $this->filesystem->read($key);
    }

    /**
     * Delete a file from the Bunny Storage.
     *
     * @param string $key
     * @return void
     */
    public function delete($key)
    {
        // $this->filesystem->delete($key);
    }
    /**
     * Delete a Directory from the Bunny Storage.
     *
     * @param string $key
     * @return void
     */
    public function deleteDirectory($key)
    {
        // $this->filesystem->deleteDirectory($key);
    }

    /**
     * Get information about a file in the Bunny Storage.
     *
     * @param string $key
     * @return array|false
     */
    public function fileInfo($key)
    {
        // return $this->filesystem->getMetadata($key);
    }
    /**
     * Get information about a file in the Bunny Storage.
     *
     * @param string $key
     * @return string
     */
    public function url($key)
    {
        // return ltrim(config('services.bunnycdn.pull_zone_url') . "/$key", '/');
    }
}
