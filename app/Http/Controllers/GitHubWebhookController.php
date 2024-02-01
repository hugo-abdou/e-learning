<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Process\Process;

class GitHubWebhookController extends Controller
{
    public function handle(Request $request)
    {
        $githubPayload = $request->getContent();
        $githubHash = $request->header('X-Hub-Signature');
        $localToken = config('app.deploy_secret');
        $localHash = 'sha1=' . hash_hmac('sha1', $githubPayload, $localToken, false);
        if (hash_equals($githubHash, $localHash)) {
            $root_path = base_path();
            $process = (new Process(['./deploy.sh']))->set_include_path($root_path);
            $process->run(function ($type, $buffer) {
                Log::info($buffer);
            });
        }
    }
}
