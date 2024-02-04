<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */
    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
        'scheme' => 'https',
    ],
    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],
    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],
    "bunnycdn" => [
         "storage_zone" => env("BUNNY_STORAGE_ZONE", null),
        "streem_key" => env("BUNNY_STREEM_API_KEY", null),
        "storage_key" => env("BUNNY_STORAGE_API_KEY", null),
        "base_url" => env("BUNNY_BASE_URL", 'https://video.bunnycdn.com'),
        "pull_zone" => env("BUNNY_PULL_ZONE", null),
        "pull_zone_url" => env("BUNNY_PULL_ZONE_URL", null),
        'region' => env('BUNNYCDN_REGION', \App\Support\BunnyCDNRegion::DEFAULT),
        'library' => env('BUNNY_LIBRARY_ID', null)
    ]
];
