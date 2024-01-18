<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\OpenAiService;
use Illuminate\Http\Client\RequestException;
use Symfony\Component\Console\Input\InputOption;
use Illuminate\Support\Facades\File;

class BladeToVueConverterCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:blade-to-vue';

    /**
     * The console command description.
     *
     * @var string
     */
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
        // If converting all Blade.php files
        $this->convertSingleBladeFile();
    }

    private function convertSingleBladeFile(): void
    {
        $bladeFile = $this->getBladeFileOption();

        if (!$bladeFile) {
            return;
        }

        $this->convertBladeToVue($bladeFile);
    }

    protected function getBladeFilePath(string $bladeFile): string
    {
        // Get the full path of the Blade.php file
        return resource_path("views/{$bladeFile}");
    }

    private function getBladeFiles(): array
    {
        $bladePath = resource_path('views');
        $bladeFiles = glob("{$bladePath}/*.blade.php");

        return array_map(
            fn ($bladeFile) => pathinfo($bladeFile, PATHINFO_FILENAME),
            $bladeFiles
        );
    }

    private function getBladeFileOption(): string
    {
        $bladeFile = $this->option('file');

        if (!$bladeFile) {
            $bladeFile = $this->ask('Please provide the Blade.php file');
        }

        return $bladeFile;
    }

    protected function convertBladeToVue(string $bladeFile): void
    {
        $bladeFilePath = $this->getBladeFilePath($bladeFile);
        try {
            $context = 'You are tasked with converting a Blade.php file to a Vue.js version. The goal is to maintain existing functionalities while taking advantage of Vue.js features. The application may involve dynamic data rendering, user interactions, and potentially client-side routing. Break down the conversion process into tasks, keeping in mind the principles of reactivity, component-based architecture, and smooth integration of Vue Router if needed.';

            $prompt = "Convert the given Blade.php file to a Vue.js version while preserving the existing functionalities.";
            $prompt .= " Break down the conversion process into tasks, ensuring a smooth transition from Blade directives to Vue.js syntax.";
            $prompt .= " Pay special attention to reactivity, componentization, and the seamless integration of Vue Router if navigation is involved. >>> ";

            if (!file_exists($bladeFilePath)) {
                throw new \Exception("Blade.php file not found for '{$bladeFile}'");
            }

            // Read the content of the Blade.php file
            $bladeContent = file_get_contents($bladeFilePath);

            $prompt .= $bladeContent . "pls give me only the code for the vue file";

            // Fetch AI-generated content
            $vueContent = $this->executeAiService($context, $prompt, $bladeFilePath);

            $this->info("Blade.php file converted to Vue.js successfully. Vue file saved at: {$vueContent}");

            // Save the Vue content to a new file
            // $vueFileName = pathinfo($bladeFilePath, PATHINFO_FILENAME) . '.vue';
            // $vueFilePath = resource_path("views/vue/{$vueFileName}"); // Adjust the path as needed
            // File::put($vueFilePath, $vueContent);

            // $this->info("Blade.php file converted to Vue.js successfully. Vue file saved at: {$vueFilePath}");
        } catch (RequestException $e) {
            $this->error('Error fetching AI-generated content: ' . $e->getMessage());
        }


        // TODO: Implement logic to convert Blade.php content to Vue.js syntax

        $this->info("\nConversion completed for Blade.php file '{$bladeFile}'");
    }


    private function executeAiService(string $context, string $prompt): string
    {
        // TODO: Implement logic to call the AI service
        $vueContent = $this->openAi->execute($context, $prompt, 12000);

        // For now, return the Blade content as a placeholder
        return $vueContent;
    }
}
