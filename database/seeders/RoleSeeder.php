<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $supperAdmin =   Role::create(['guard_name' => 'sanctum', 'name' => 'super_admin']);

        Role::create(['guard_name' => 'sanctum', 'name' => 'admin']);

        /////////////////////////
        $show_user = Permission::create(['guard_name' => 'sanctum', 'name' => 'show_user']);
        $create_user = Permission::create(['guard_name' => 'sanctum', 'name' => 'create_user']);
        $update_user = Permission::create(['guard_name' => 'sanctum', 'name' => 'update_user']);
        $delete_user = Permission::create(['guard_name' => 'sanctum', 'name' => 'delete_user']);

        $show_role = Permission::create(['guard_name' => 'sanctum', 'name' => 'show_role']);
        $create_role = Permission::create(['guard_name' => 'sanctum', 'name' => 'create_role']);
        $update_role = Permission::create(['guard_name' => 'sanctum', 'name' => 'update_role']);
        $delete_role = Permission::create(['guard_name' => 'sanctum', 'name' => 'delete_role']);


        $supperAdmin->syncPermissions([
            "show_user",
            "create_user",
            "update_user",
            "delete_user",
            "show_role",
            "create_role",
            "update_role",
            "delete_role",
        ]);
    }
}
