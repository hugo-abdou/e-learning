<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'moikinge3@gmail.com',
        ]);
        // Execute the SQL file
        $sqlFile = database_path('/seeders/seeder-migration.sql');
        $sql = file_get_contents($sqlFile);
        DB::unprepared($sql);

        // You can continue seeding other data if needed

        $this->call([
            // RoleSeeder::class
        ]);
    }
}
