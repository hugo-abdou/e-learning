<?php

namespace Database\Seeders;

use App\Models\User;
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
        $supperAdmin =   Role::create(['guard_name' => 'sanctum', 'name' => 'supper-admin']);
        Role::create(['guard_name' => 'sanctum', 'name' => 'student']);
        Role::create(['guard_name' => 'sanctum', 'name' => 'admin']);
        // /////////////////////////
        Permission::create(['guard_name' => 'sanctum', 'name' => 'read_supper-admin']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'create_supper-admin']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'update_supper-admin']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'delete_supper-admin']);
        // /////////////////////////
        Permission::create(['guard_name' => 'sanctum', 'name' => 'read_admin']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'create_admin']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'update_admin']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'delete_admin']);
        // /////////////////////////
        Permission::create(['guard_name' => 'sanctum', 'name' => 'read_student']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'create_student']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'update_student']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'delete_student']);
        // /////////////////////////
        Permission::create(['guard_name' => 'sanctum', 'name' => 'read_role']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'create_role']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'update_role']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'delete_role']);
        // /////////////////////////
        Permission::create(['guard_name' => 'sanctum', 'name' => 'read_course']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'create_course']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'update_course']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'delete_course']);
        // /////////////////////////
        Permission::create(['guard_name' => 'sanctum', 'name' => 'read_storage']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'create_storage']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'update_storage']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'delete_storage']);
        // /////////////////////////
        Permission::create(['guard_name' => 'sanctum', 'name' => 'read_category']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'create_category']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'update_category']);
        Permission::create(['guard_name' => 'sanctum', 'name' => 'delete_category']);
        // /////////////////////////
        $supperAdmin->syncPermissions(Permission::all());
        User::find(1)->assignRole($supperAdmin);
    }
}
