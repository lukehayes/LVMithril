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
        $items = [
            'Write unit tests using Pest.',
            'Write application code.',
            'Brew Coffee.',
            'Drink Coffee.',
            'Read about C++ rule of five.'
        ];

        for($i = 0; $i <= 5 - 1; $i++)
        {
            DB::table('todo_items')->insert([
                'name' => $items[$i],
                'description' => "Description $i",
                'completed' => false
            ]);
        }
    }
}
