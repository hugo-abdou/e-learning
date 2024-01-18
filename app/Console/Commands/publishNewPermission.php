<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Permission\Models\Permission;

class publishNewPermission extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:new-permission {resource}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'New permission resource';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $resource = $this->argument('resource');

        Permission::create(['guard_name' => 'sanctum', 'name' => "read_$resource"]);
        Permission::create(['guard_name' => 'sanctum', 'name' => "create_$resource"]);
        Permission::create(['guard_name' => 'sanctum', 'name' => "update_$resource"]);
        Permission::create(['guard_name' => 'sanctum', 'name' => "delete_$resource"]);

        $this->info("permissions for $resource created");
    }
}
