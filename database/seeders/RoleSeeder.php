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
        Role::create(['guard_name' => 'sanctum', 'name' => 'instructor']);
        Role::create(['guard_name' => 'sanctum', 'name' => 'student']);
        Role::create(['guard_name' => 'sanctum', 'name' => 'admin']);

        /////////////////////////
        Permission::create(['guard_name' => 'sanctum', 'name' => 'read_User']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'create_User']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'update_User']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'delete_User']);

        Permission::create(['guard_name' => 'sanctum', 'name' => 'read_Role']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'create_Role']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'update_Role']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'delete_Role']);

        Permission::create(['guard_name' => 'sanctum', 'name' => 'read_Course']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'create_Course']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'update_Course']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'delete_Course']);

        Permission::create(['guard_name' => 'sanctum', 'name' => 'read_Storage']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'create_Storage']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'update_Storage']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'delete_Storage']);


        $supperAdmin->syncPermissions(Permission::all());
    }
}
