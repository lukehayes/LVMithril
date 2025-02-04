<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TodoItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        for($i = 0; $i <= 5; $i++)
        {
            DB::table('todo_items')->insert([
                'name' => "Todo Item $i",
                'description' => "I am the description number: $i",
                'completed' => random_int(0,1)
            ]);
        }
    }
}
