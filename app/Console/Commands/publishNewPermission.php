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
    protected $description = 'add new permission resource';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $resource = $this->argument('resource');

        Permission::create(['guard_name' => 'api', 'name' => "read_$resource"]);
        Permission::create(['guard_name' => 'api', 'name' => "create_$resource"]);
        Permission::create(['guard_name' => 'api', 'name' => "update_$resource"]);
        Permission::create(['guard_name' => 'api', 'name' => "delete_$resource"]);
        Permission::create(['guard_name' => 'api', 'name' => "manage_$resource"]);

        $this->info("permissions for $resource created");
    }
}
