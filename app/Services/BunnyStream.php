<?php

namespace App\Services;

use GuzzleHttp\Client;

class BunnyStream
{
    protected Client $client;

    public function __construct()
    {

        $this->client = new Client([
            'base_uri' => config('services.bunnycdn.base_url'),
            'headers' => [
                'AccessKey' => config('services.bunnycdn.streem_key'),
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
