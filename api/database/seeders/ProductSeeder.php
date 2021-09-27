<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->truncate();
        DB::table('products')->insert([
            'name' => 'Sucesos Argentinos Vol 1: "Gobiernos y Conflictos"',
            'price' => '600',
            'short_description' => 'Sucesos Argentinos es un juego de cartas donde se pone a prueba el conocimiento de historia argentina de los jugadores organizando una cadena de sucesos.',
            'stat_players' => '2-4 jugadores',
            'stat_age' => '10+ años',
            'stat_time' =>  '15-20 min.',
            'main_photo' => 'sa_vol1.png',
            'weight' => '0.137'

        ]);
        DB::table('products')->insert([
            'name' => 'Sucesos Argentinos Vol 2: "Economía y Sociedad"',
            'price' => '600',
            'short_description' => 'Sucesos Argentinos es un juego de cartas donde se pone a prueba el conocimiento de historia argentina de los jugadores organizando una cadena de sucesos.',
            'stat_players' => '2-4 jugadores',
            'stat_age' => '10+ años',
            'stat_time' =>  '15-20 min.',
            'main_photo' => 'sa_vol2.png',
            'weight' => '0.137'
        ]);
        DB::table('products')->insert([
            'name' => 'Sucesos Argentinos Vol 3: "Ciencia y Cultura"',
            'price' => '600',
            'short_description' => 'Sucesos Argentinos es un juego de cartas donde se pone a prueba el conocimiento de historia argentina de los jugadores organizando una cadena de sucesos.',
            'is_new' => 'Y',
            'stat_players' => '2-4 jugadores',
            'stat_age' => '10+ años',
            'stat_time' =>  '15-20 min.',
            'main_photo' => 'sa_vol3.png',
            'weight' => '0.137'
        ]);
        DB::table('products')->insert([
            'name' => 'Ars Domino',
            'price' => '600',
            'is_last_units' => 'Y',
            'main_photo' => 'ars_domino.png'
        ]);
        DB::table('products')->insert([
            'name' => 'Nom Noms',
            'price' => '600',
            'main_photo' => 'nom_noms.png'
        ]);
        DB::table('products')->insert([
            'name' => 'Combo Sucesos Argentinos Volúmenes 1, 2 y 3',
            'price' => '600',
            'is_combo' => 'Y',
            'main_photo' => 'sa_combo123.png'
        ]);
    }
}
