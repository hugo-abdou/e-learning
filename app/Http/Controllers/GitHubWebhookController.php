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
            // Change directory command
            $cdCommand = "cd {$root_path}";

            // Command to execute the shell script
            $deployScript = './deploy.sh';

            // Combine commands to run them together in the same shell process
            $command = "{$cdCommand} && {$deployScript}";

            // Create a new Process instance
            $process = Process::fromShellCommandline($command);

            // Run the process
            $message = '';
            $process->run(function ($type, $buffer) use (&$message) {
                $message .= $buffer;
            });
            Log::info(str_replace("[90m.[39m", '', $message));
            // Check if the process was successful
            if (!$process->isSuccessful()) {
                Log::error('Error occurred while running the deploy script.');
                Log::error($process->getErrorOutput());
            }
        }
    }
}
