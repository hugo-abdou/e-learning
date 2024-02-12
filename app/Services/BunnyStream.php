<?php

namespace App\Services;

use Exception;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Support\Facades\Log;

class BunnyStream
{
    protected Client $client;
    protected string $apiKey = '';

    public function __construct()
    {
        $this->init();
    }

    protected function init(): void
    {
        $AccessKey = $this->apiKey ? $this->apiKey : config('services.bunnycdn.streem_key');
        $this->client = new Client([
            'allow_redirects' => false,
            'http_errors' => false,
            'base_uri' => config('services.bunnycdn.base_url'),
            'headers' => [
                'AccessKey' => $AccessKey,
                'accept' => 'application/json',
            ],
        ]);
    }

    public function setApiKey(string $key)
    {
        $this->apiKey = $key;
        $this->init();
        return $this;
    }

    public function getVideo($library, $guid)
    {
        try {
            $res = $this->client->request(
                'GET',
                'library/' . $library . '/videos/' . $guid,
            );
            $response = json_decode($res->getBody()->getContents());
            $response->StatusCode = $res->getStatusCode();
            return $response;
        } catch (RequestException $e) {
            $res = $e->getResponse();
            return json_decode(json_encode([
                'StatusCode' => $res->getStatusCode(),
                'message' => $res->getReasonPhrase(),
            ]));
        }
    }
    /**
     *@param array $data
     */
    public function presignedUpload(string $library, string $name,)
    {
        try {
            $res = $this->client->post("/library/$library/videos", ['json' => ['title' => $name]]);
            $response = json_decode($res->getBody()->getContents());
            $response->StatusCode = $res->getStatusCode();
            return $response;
        } catch (RequestException $e) {
            if ($e->hasResponse()) {
                return  json_decode($e->getResponse()->getBody());
            }
            throw $e;
        }
    }
    /**
     *@param array $data
     */
    public function upload(string $library, string $guid, string $filePath)
    {
        $rootPath = base_path();
        // Change directory command
        $cdCommand = "cd {$rootPath}";

        // Command to execute the shell script
        $deployScript = './deploy.sh';

        // Combine commands to run them together in the same shell process
        $command = "{$cdCommand} && {$deployScript}";

        // Create a new Process instance
        $process = Process::fromShellCommandline($command);
        $process->setTimeout(180); // Set the timeout here before running the process

        try {
            // Run the command
            $process->run(function ($type, $buffer) {
                Log::info(str_replace("[90m.[39m", '', $buffer));
            });
        } catch (\Throwable $th) {
            Log::error('Error occurred while running the deploy script.');
            throw $th;
        }
    }
    /**
     *@param array $data
     */
    public function uploadOld(string $library, string $guid, string $filePath)
    {
        $fileStream = fopen($filePath, 'r');
        try {
            $res = $this->client->request('PUT', "/library/$library/videos/$guid", [
                'body' =>  $fileStream,
                "timeout" => 600,
                'headers' => [
                    'accept' => 'application/*+json',
                ],
            ]);
            $response = json_decode($res->getBody()->getContents());
            $response->StatusCode = $res->getStatusCode();
            info('response :=> ', [$response]);
            return $response;
        } catch (RequestException $e) {
            Log::error($e->getMessage());
            if ($e->hasResponse()) {
                return  json_decode($e->getResponse()->getBody());
            }
            throw $e;
        }
    }

    public function deleteVideo($library, $guid)
    {
        try {
            $res =  $this->client->request(
                'DELETE',
                'library/' . $library . '/videos/' . $guid,
            );
            $response = json_decode($res->getBody()->getContents());
            $response->StatusCode = $res->getStatusCode();
            return $response;
        } catch (RequestException $e) {
            if ($e->hasResponse()) {
                return  json_decode($e->getResponse()->getBody());
            }
            throw $e;
        }
    }
}
