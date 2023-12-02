<?php

namespace App\Storage;

use Illuminate\Http\File;
use League\Flysystem\Filesystem;
use PlatformCommunity\Flysystem\BunnyCDN\BunnyCDNAdapter;
use PlatformCommunity\Flysystem\BunnyCDN\BunnyCDNClient;

class BunnyStorage implements StorageInterface
{
    /**
     * @var Filesystem
     */
    private $filesystem;

    /**
     * BunnyStorage constructor.
     */
    public function __construct()
    {
        $adapter = new BunnyCDNAdapter(
            new BunnyCDNClient(
                config('filesystems.disks.bunnycdn.storage_zone'),
                config('filesystems.disks.bunnycdn.api_key'),
                config('filesystems.disks.bunnycdn.region'),
            ),
            'skillsup.b-cdn.net'
        );
        // $adapter->setPathPrefix('https://storage.bunnycdn.com');

        $this->filesystem = new Filesystem($adapter);
    }

    public function __call($key, $data)
    {
        return $this->filesystem->$key(...$data);
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
        $this->filesystem->write($key, $data);
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
        $this->filesystem->write("$directionPath/$fileName", $file->getContent());
        return ltrim("$directionPath/$fileName", '/');
    }

    /**
     * Retrieve data from the Bunny Storage.
     *
     * @param string $key
     * @return mixed
     */
    public function get($key)
    {
        return $this->filesystem->read($key);
    }

    /**
     * Delete a file from the Bunny Storage.
     *
     * @param string $key
     * @return void
     */
    public function delete($key)
    {
        $this->filesystem->delete($key);
    }
    /**
     * Delete a Directory from the Bunny Storage.
     *
     * @param string $key
     * @return void
     */
    public function deleteDirectory($key)
    {
        $this->filesystem->deleteDirectory($key);
    }

    /**
     * Get information about a file in the Bunny Storage.
     *
     * @param string $key
     * @return array|false
     */
    public function fileInfo($key)
    {
        return $this->filesystem->getMetadata($key);
    }
    /**
     * Get information about a file in the Bunny Storage.
     *
     * @param string $key
     * @return string
     */
    public function url($key)
    {
        return ltrim("https://skillsup.b-cdn.net/$key", '/');
    }
}
