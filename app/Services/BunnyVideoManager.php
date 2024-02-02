<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class BunnyVideoManager
{
    protected $client;

    public function __construct()
    {
        $this->client = Http::withHeaders([
            'accessKey' => env('VITE_BUNNY_API_KEY'),
            "accept" => "application/json"
        ])->baseUrl('https://video.bunnycdn.com');
    }

    /**
     *@param string $libraryId
     *@param string $videoId
     *@return \Illuminate\Http\Client\Response
     */
    public function getVideo(string $libraryId, string $videoId)
    {
        return $this->client->get("/library/{$libraryId}/videos/{$videoId}");
    }
}
