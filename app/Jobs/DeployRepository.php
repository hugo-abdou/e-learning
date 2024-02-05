<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Symfony\Component\Process\Process;
use Illuminate\Support\Facades\Log;

class DeployRepository implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $githubPayload;

    public function __construct($githubPayload)
    {
        $this->githubPayload = $githubPayload;
    }

    public function handle()
    {
        $rootPath = base_path();
        // Change directory command
        $cdCommand = "cd {$rootPath}";

        // Command to execute the shell script
        $deployScript = './deploy.sh';

        // Combine commands to run them together in the same shell process
        $command = "{$cdCommand} && {$deployScript}";

        // Create a new Process instance
        $process = Process::fromShellCommandline($command);

        try {
            // Run the command
            $process->run(function ($type, $buffer) {
                Log::info(str_replace("[90m.[39m", '', $buffer));
            });
        } catch (\Throwable $th) {
            Log::error('Error occurred while running the deploy script.');
            Log::error($th->getMessage());
        }
    }
}
