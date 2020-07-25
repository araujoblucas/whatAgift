<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;



class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'id' => 1,
            'name' => 'Lucas',
            'email' => 'lucas@gmail.com',
            'image' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzH5-_7fc6Kree_ZXBxiKGG3pEiiqaOHfQaw&usqp=CAU',
            'password' => hash::make('123456'),
        ]);
        DB::table('users')->insert([
            'id' => 2,
            'name' => 'Luiza',
            'email' => 'luiza@gmail.com',
            'image' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQavtjnRHztqbGTMW92klT5x5SuxDkWCwgOJQ&usqp=CAU',
            'password' => hash::make('123456'),
        ]);
    }
}
