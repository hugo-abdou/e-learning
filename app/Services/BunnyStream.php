<?php

namespace App\Services;

use GuzzleHttp\Client;

class BunnyStream
{
    protected string $accessKey;
    protected $client;
    protected $base_url;
    protected $pull_zone;
    protected $client_secret;

    public function __construct()
    {
        $this->accessKey = config('services.bunnycdn.streem_key');
        $this->pull_zone = config('services.bunnycdn.pull_zone');
        $this->base_url = config('services.bunnycdn.base_url');

        $this->client = new Client([
            'base_uri' => $this->base_url,
            'headers' => [
                'AccessKey' => $this->accessKey,
                'accept' => 'application/json',
            ],
        ]);
    }

    public function getVideo($library, $guid)
    {
        $response = $this->client->request(
            'GET',
            'library/' . $library . '/videos/' . $guid,
        );
        if ($response->getStatusCode() === 200) {
            return json_decode($response->getBody()->getContents(), true);
        }
    }
    /**
     *@param array $data
     *@return \Illuminate\Http\Client\Response
     */
    public function presignedUpload(string $library, string $name,)
    {
        $response = $this->client->post("/library/$library/videos", ['json' => ['title' => $name]]);
        if ($response->getStatusCode() === 200) {
            return json_decode($response->getBody()->getContents(), true);
        }
    }
    /**
     *@param array $data
     *@return \Illuminate\Http\Client\Response
     */
    public function upload(string $library, string $guid, string $attachment)
    {

        $response = $this->client->put("/library/$library/videos/$guid", [
            'body' => $attachment,
            'headers' => [
                'Content-Type' => 'application/octet-stream',
            ]
        ]);
        if ($response->getStatusCode() === 200) {
            return json_decode($response->getBody()->getContents(), true);
        }
    }

    public function deleteVideo($library, $guid)
    {
        $response = $this->client->request(
            'DELETE',
            'library/' . $library . '/videos/' . $guid,
        );
        if ($response->getStatusCode() === 200) {
            return json_decode($response->getBody()->getContents(), true);
        }
    }
}
