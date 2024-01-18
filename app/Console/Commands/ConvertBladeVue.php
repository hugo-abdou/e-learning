<?php

namespace App\Console\Commands;

use App\Services\OpenAiService;
use Illuminate\Console\Command;
use Illuminate\Http\Client\RequestException;
use Illuminate\Support\Facades\File;
use Symfony\Component\Console\Input\InputOption;

class ConvertBladeVue extends Command
{
    protected $signature = 'convert:blade-to-vue file';
    protected $description = 'Convert Blade.php file to Vue.js version';

    public function __construct(private readonly OpenAiService $openAi)
    {
        parent::__construct();
    }
    protected function configure(): void
    {
        $this->addOption('file', 'f', InputOption::VALUE_REQUIRED, 'The Blade.php file to convert');
    }
    public function handle(): void
    {
        $bladeFile = $this->getBladeFileOption();

        $this->info("\nPre-Prompt:");

        $this->line("Before diving into the conversion, ensure you have a clear understanding of the existing Blade.php file, its functionalities, and any specific user requirements for the Vue.js version.");
        $this->line("Identify areas that can be modularized into components, and plan the transition to Vue.js directives.");
        $this->line("Consider optimizing performance and thoroughly test the Vue.js application to deliver a seamless user experience.");

        $proceed = $this->confirm('Do you want to proceed with the conversion?');

        if (!$proceed) {
            $this->info('Conversion aborted.');
            return;
        }

        try {
            $context = $this->ask('Enter any additional context or information about the project');

            $prompt = "Convert the given Blade.php file to a Vue.js version while preserving the existing functionalities.";
            $prompt .= " Break down the conversion process into tasks, ensuring a smooth transition from Blade directives to Vue.js syntax.";
            $prompt .= " Pay special attention to reactivity, componentization, and the seamless integration of Vue Router if navigation is involved. >>>";

            // Fetch AI-generated content
            $vueContent = $this->executeAiService($context, $prompt, $bladeFile);

            $this->info($vueContent);

            // Save the Vue content to a new file
            // $vueFileName = pathinfo($bladeFile, PATHINFO_FILENAME) . '.vue';
            // $vueFilePath = resource_path("views/vue/{$vueFileName}"); // Adjust the path as needed
            // File::put($vueFilePath, $vueContent);

            // $this->info("Blade.php file converted to Vue.js successfully. Vue file saved at: {$vueFilePath}");
        } catch (RequestException $e) {
            $this->error('Error fetching AI-generated content: ' . $e->getMessage());
        }
    }

    private function executeAiService(string $context, string $prompt, string $bladeFile): string
    {
        $bladeFilePath = $this->getBladeFilePath($bladeFile);

        if (!file_exists($bladeFilePath)) {
            $this->error("Error: Blade.php file not found for '{$bladeFile}'");
            return '';
        }

        // Read the content of the Blade.php file
        $bladeContent = file_get_contents($bladeFilePath);


        // TODO: Implement logic to call your AI service

        $prompt .= $bladeContent . ' pls give me only the code for the vue file';

        // dd($prompt);

        $vueContent = $this->openAi->execute($context, $prompt, 12000);

        // For now, return the Blade content as a placeholder
        return $vueContent;
    }

    private function getBladeFileOption(): string
    {
        $bladeFile = $this->option('file');

        if (!$bladeFile) {
            $bladeFile = $this->ask('Please provide the Blade.php file');
        }

        return $bladeFile;
    }

    protected function getBladeFilePath(string $bladeFile): string
    {
        // Get the full path of the Blade.php file
        return resource_path("views/{$bladeFile}");
    }
}
