<?php

namespace App\Providers;

use App\Storage\Storage as MyStorage;
use Illuminate\Filesystem\FilesystemAdapter;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\ServiceProvider;
use League\Flysystem\Filesystem;
use PlatformCommunity\Flysystem\BunnyCDN\BunnyCDNAdapter;
use PlatformCommunity\Flysystem\BunnyCDN\BunnyCDNClient;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind('storage', function () {
            return new MyStorage();
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {

        Storage::extend('bunnycdn', function ($app, $config) {
            $adapter = new BunnyCDNAdapter(
                new BunnyCDNClient(
                    $config['storage_zone'],
                    $config['api_key'],
                    $config['region']
                ),
                'https://storage.bunnycdn.com'
            );

            return new FilesystemAdapter(
                new Filesystem($adapter, $config),
                $adapter,
                $config
            );
        });
    }
}
