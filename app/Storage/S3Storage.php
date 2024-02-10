<?php

namespace App\Storage;


class S3Storage implements StorageInterface
{

    public function delete($path)
    {
        // delete file implementation
    }

    public function deleteDirectory($directory)
    {
        // delete directory implementation 
    }

    public function fileInfo($path)
    {
        // get file info implementation
    }


    public function put($key, $data)
    {
        // Implement S3-specific storage logic here
        // Example: AWS SDK S3 put operation
        // aws-sdk-s3-code
    }

    public function get($key)
    {
        // Implement S3-specific retrieval logic here
        // Example: AWS SDK S3 get operation
        // aws-sdk-s3-code
    }
}
