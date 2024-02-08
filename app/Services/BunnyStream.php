<?php

namespace App\Services;

use GuzzleHttp\Client;
use Guzzle\Http\Exception\ClientErrorResponseException;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Http\JsonResponse;
use Throwable;

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
    public function upload(string $library, string $guid, string $attachment)
    {
        try {
            $res = $this->client->put("/library/$library/videos/$guid", [
                'body' => $attachment,
                'headers' => [
                    'Content-Type' => 'application/octet-stream',
                ]
            ]);
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
