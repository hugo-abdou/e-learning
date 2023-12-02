<?php

namespace App\Services;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class Resumable
{
    public $debug = false;

    public $tempFolder = 'tmp';

    public $uploadFolder = 'test/files/uploads';

    // for testing
    public $deleteTmpFolder = true;

    protected Request $request;

    protected $response;

    protected $params;

    protected $chunkFile;

    protected $log;

    protected $filename;

    protected $filepath;

    protected $extension;

    protected $originalFilename;

    protected $isUploadComplete = false;

    const WITHOUT_EXTENSION = true;

    public function __construct(Request $request)
    {
        $this->request = $request;

        $this->preProcess();
    }

    // sets original filename and extension, blah blah
    public function preProcess()
    {
        if (!empty($this->resumableParams())) {
            if (!empty($this->request->file())) {
                $this->extension = $this->findExtension($this->resumableParam('filename'));
                $this->originalFilename = $this->resumableParam('filename');
            }
        }
    }

    public function resumableParams()
    {
        return $this->request->all();
    }

    public function process()
    {
        if (!empty($this->resumableParams())) {
            if (!empty($this->request->file())) {
                return $this->handleChunk();
            } else {
                return $this->handleTestChunk();
            }
        }
    }

    /**
     * Get isUploadComplete
     *
     * @return boolean
     */
    public function isUploadComplete()
    {
        return $this->isUploadComplete;
    }

    /**
     * Set final filename.
     *
     * @param string Final filename
     */
    public function setFilename($filename)
    {
        $this->filename = $filename;

        return $this;
    }

    /**
     * Get final filename.
     *
     * @return string Final filename
     */
    public function getFilename()
    {
        return $this->filename;
    }

    /**
     * Get final filename.
     *
     * @return string Final filename
     */
    public function getOriginalFilename($withoutExtension = false)
    {
        if ($withoutExtension === static::WITHOUT_EXTENSION) {
            return $this->removeExtension($this->originalFilename);
        } else {
            return $this->originalFilename;
        }
    }

    /**
     * Get final filepath.
     *
     * @return string Final filename
     */
    public function getFilepath()
    {
        return $this->filepath;
    }

    /**
     * Get final extension.
     *
     * @return string Final extension name
     */
    public function getExtension()
    {
        return $this->extension;
    }

    /**
     * Makes sure the original extension never gets overridden by user-defined filename.
     *
     * @param string User-defined filename
     * @param string Original filename
     * @return string Filename that always has an extension from the original file
     */
    private function createSafeFilename($filename, $originalFilename)
    {
        $filename = $this->removeExtension($filename);
        $extension = $this->findExtension($originalFilename);

        return sprintf('%s.%s', $filename, $extension);
    }

    public function handleTestChunk()
    {
        $identifier = $this->resumableParam('identifier');
        $filename = $this->resumableParam('filename');
        $chunkNumber = $this->resumableParam('chunkNumber');
        if (!$this->isChunkUploaded($identifier, $filename, $chunkNumber)) {
            return Response::HTTP_NOT_FOUND;
        } else {
            return Response::HTTP_OK;
        }
    }

    public function handleChunk()
    {
        $file = $this->request->file('file');
        $identifier = $this->resumableParam('identifier');
        $filename = $this->resumableParam('filename');
        $chunkNumber = $this->resumableParam('chunkNumber');
        $chunkSize = $this->resumableParam('chunkSize');
        $totalSize = $this->resumableParam('totalSize');

        if (!$this->isChunkUploaded($identifier, $filename, $chunkNumber)) {
            $chunkFile = $this->tmpChunkDir($identifier) . DIRECTORY_SEPARATOR . $this->tmpChunkFilename($filename, $chunkNumber);
            $this->moveUploadedFile($file, $chunkFile);
        }

        if ($this->isFileUploadComplete($filename, $identifier, $chunkSize, $totalSize)) {
            $this->isUploadComplete = true;
            $this->createFileAndDeleteTmp($identifier, $filename);
            return Response::HTTP_CREATED;
        }

        return Response::HTTP_OK;
    }

    /**
     * Create the final file from chunks
     */
    private function createFileAndDeleteTmp($identifier, $filename)
    {
        $tmpChunkDir = $this->tmpChunkDir($identifier);
        $chunkFiles = Storage::files($tmpChunkDir);

        // if the user has set a custom filename
        if (null !== $this->filename) {
            $finalFilename = $this->createSafeFilename($this->filename, $filename);
        } else {
            $finalFilename = $filename;
        }

        // replace filename reference by the final file
        $this->filepath = $this->uploadFolder . DIRECTORY_SEPARATOR . $finalFilename;
        $this->extension = $this->findExtension($this->filepath);

        if ($this->createFileFromChunks($chunkFiles, $this->filepath) && $this->deleteTmpFolder) {
            Storage::deleteDirectory($tmpChunkDir);
            $this->isUploadComplete = true;
        }
    }

    private function resumableParam($shortName)
    {
        $resumableParams = $this->resumableParams();
        if (!isset($resumableParams['resumable' . ucfirst($shortName)])) {
            return null;
        }
        return $resumableParams['resumable' . ucfirst($shortName)];
    }

    public function isFileUploadComplete($filename, $identifier, $chunkSize, $totalSize)
    {
        if ($chunkSize <= 0) {
            return false;
        }
        $numOfChunks = intval($totalSize / $chunkSize) + ($totalSize % $chunkSize == 0 ? 0 : 1);
        for ($i = 1; $i < $numOfChunks; $i++) {
            if (!$this->isChunkUploaded($identifier, $filename, $i)) {
                return false;
            }
        }
        return true;
    }

    public function isChunkUploaded($identifier, $filename, $chunkNumber)
    {
        $chunkFile = $this->tmpChunkDir($identifier) . DIRECTORY_SEPARATOR . $this->tmpChunkFilename($filename, $chunkNumber);
        return Storage::exists($chunkFile);
    }

    public function tmpChunkDir($identifier)
    {
        $tmpChunkDir = $this->tempFolder . DIRECTORY_SEPARATOR . $identifier;
        if (!Storage::exists($tmpChunkDir)) {
            Storage::makeDirectory($tmpChunkDir);
        }
        return $tmpChunkDir;
    }

    public function tmpChunkFilename($filename, $chunkNumber)
    {
        return $filename . '.part' . $chunkNumber;
    }

    public function createFileFromChunks($chunkFiles, $destFile)
    {
        $this->log('Beginning of create files from chunks');

        $destFileContents = '';
        foreach ($chunkFiles as $chunkFile) {
            $chunkFileContents = Storage::get($chunkFile);
            $destFileContents .= $chunkFileContents;

            $this->log('Append ', ['chunk file' => $chunkFile]);
        }

        $fileInfo = pathinfo($destFile, PATHINFO_ALL);
        $this->originalFilename = uniqid(time()) . '.' . $fileInfo['extension'];
        $path = $fileInfo['dirname'] . DIRECTORY_SEPARATOR . $this->originalFilename;

        Storage::put($path, $destFileContents);

        $this->log('End of create files from chunks');
        return Storage::exists($path);
    }

    public function moveUploadedFile($file, $destFile)
    {
        if ($file->isValid()) {
            $file->storeAs(dirname($destFile), basename($destFile));
            return true;
        }
        return false;
    }

    public function setRequest($request)
    {
        $this->request = $request;
    }

    public function setResponse($response)
    {
        $this->response = $response;
    }

    private function log($msg, $ctx = array())
    {
        if ($this->debug) {
            // Log your message here using Laravel's logging system
            // Example: \Log::info($msg, $ctx);
        }
    }

    private function findExtension($filename)
    {
        $parts = explode('.', basename($filename));

        return end($parts);
    }

    private function removeExtension($filename)
    {
        $parts = explode('.', basename($filename));
        $ext = end($parts); // get extension

        // remove extension from filename if any
        return str_replace(sprintf('.%s', $ext), '', $filename);
    }
}
