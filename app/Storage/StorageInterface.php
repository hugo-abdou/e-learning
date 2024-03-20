<?php

namespace App\Storage;


interface StorageInterface
{
    public function put($key, $data);
    public function get($key);
    public function delete($key);
    public function deleteDirectory($key);
    public function fileInfo($key);
}
