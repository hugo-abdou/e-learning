<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Jobs\DeployRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;

class GitHubWebhookController extends Controller
{
    public function handle(Request $request)
    {
        $githubPayload = $request->getContent();
        $githubHash = $request->header('X-Hub-Signature');
        $localToken = Config::get('app.deploy_secret');
        $localHash = 'sha1=' . hash_hmac('sha1', $githubPayload, $localToken, false);

        if (hash_equals($githubHash, $localHash)) {
            DeployRepository::dispatch();
        }
        return response()->json(['status' => 'ok']);
    }
}
