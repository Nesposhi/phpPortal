<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class SuperAdminSeeder extends Seeder
{
    /**
     * Seed the Nesposhi super admin account.
     */
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'nesposhi@nesposhi.test'],
            [
                'name' => 'nesposhi',
                'password' => Hash::make('password'),
                'role' => 'super_admin',
                'email_verified_at' => now(),
            ],
        );
    }
}
