<?php

namespace App\Providers;

use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\ServiceProvider;

class BroadcastServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // TODO: fix authontication problem on broadcasting now i'm using just a small fix wich is a custom function in AuthController_authenticate_broadcaster
        Broadcast::routes(['middleware' => ['api', 'auth:sanctum'], 'prefix' => 'api']);
    }
}
