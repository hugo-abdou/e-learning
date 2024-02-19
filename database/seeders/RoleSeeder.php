<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use PhpParser\Node\Stmt\Use_;
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
        $supperAdmin =   Role::create(['guard_name' => 'api', 'name' => 'super_admin']);
        Role::create(['guard_name' => 'api', 'name' => 'instructor']);
        Role::create(['guard_name' => 'api', 'name' => 'student']);
        Role::create(['guard_name' => 'api', 'name' => 'admin']);

        /////////////////////////
        Permission::create(['guard_name' => 'api', 'name' => 'read_User']);
        Permission::create(['guard_name' => 'api', 'name' => 'create_User']);
        Permission::create(['guard_name' => 'api', 'name' => 'update_User']);
        Permission::create(['guard_name' => 'api', 'name' => 'delete_User']);

        Permission::create(['guard_name' => 'api', 'name' => 'read_Role']);
        Permission::create(['guard_name' => 'api', 'name' => 'create_Role']);
        Permission::create(['guard_name' => 'api', 'name' => 'update_Role']);
        Permission::create(['guard_name' => 'api', 'name' => 'delete_Role']);

        Permission::create(['guard_name' => 'api', 'name' => 'read_Course']);
        Permission::create(['guard_name' => 'api', 'name' => 'create_Course']);
        Permission::create(['guard_name' => 'api', 'name' => 'update_Course']);
        Permission::create(['guard_name' => 'api', 'name' => 'delete_Course']);

        Permission::create(['guard_name' => 'api', 'name' => 'read_Storage']);
        Permission::create(['guard_name' => 'api', 'name' => 'create_Storage']);
        Permission::create(['guard_name' => 'api', 'name' => 'update_Storage']);
        Permission::create(['guard_name' => 'api', 'name' => 'delete_Storage']);


        $supperAdmin->syncPermissions(Permission::all());
        User::find(1)->assignRole($supperAdmin);
    }
}
