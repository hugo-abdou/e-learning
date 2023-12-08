<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class BunnyVideoManager
{
    protected $client;

    public function __construct()
    {
        $this->client = Http::withHeaders([
            'accessKey' => env('VITE_BUNNY_KEY'),
            "accept" => "application/json"
        ])->baseUrl('https://video.bunnycdn.com');
    }


    public function getVideo(string $libraryId, string $videoId)
    {
        $response = $this->client->get("/library/{$libraryId}/videos/{$videoId}");
        return $response->json();
    }
}
