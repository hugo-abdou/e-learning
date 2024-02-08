<?php

namespace App\Http\Controllers;

use App\Services\BunnyStream;
use Illuminate\Http\Request;

class VideoEmbedController extends Controller
{
    public function __invoke(Request $request, $library, $uuid, BunnyStream $bunnyStream)
    {
        $res = $bunnyStream->getVideo($library, $uuid);
        if ($res->StatusCode !== 200)  abort($res->StatusCode);
        return view('player', ['video' => $res]);
    }
}
