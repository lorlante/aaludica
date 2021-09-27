<?php

namespace Database\Seeders;

use \Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class ProvinceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('provinces')->truncate();
        DB::table('provinces')->insert(['name' => 'Buenos Aires', 'zone' => 2]);
        DB::table('provinces')->insert(['name' => 'Catamarca', 'zone' => 3]);
        DB::table('provinces')->insert(['name' => 'Chaco', 'zone' => 3]);
        DB::table('provinces')->insert(['name' => 'Chubut', 'zone' => 4]);
        DB::table('provinces')->insert(['name' => 'Córdoba', 'zone' => 2]);
        DB::table('provinces')->insert(['name' => 'Corrientes', 'zone' => 3]);
        DB::table('provinces')->insert(['name' => 'Entre Ríos', 'zone' => 2]);
        DB::table('provinces')->insert(['name' => 'Formosa', 'zone' => 3]);
        DB::table('provinces')->insert(['name' => 'Jujuy', 'zone' => 4]);
        DB::table('provinces')->insert(['name' => 'La Pampa', 'zone' => 2]);
        DB::table('provinces')->insert(['name' => 'La Rioja', 'zone' => 3]);
        DB::table('provinces')->insert(['name' => 'Mendoza', 'zone' => 3]);
        DB::table('provinces')->insert(['name' => 'Neuquén', 'zone' => 3]);
        DB::table('provinces')->insert(['name' => 'Río Negro', 'zone' => 3]);
        DB::table('provinces')->insert(['name' => 'Salta', 'zone' => 4]);
        DB::table('provinces')->insert(['name' => 'San Juan', 'zone' => 3]);
        DB::table('provinces')->insert(['name' => 'San Luis', 'zone' => 3]);
        DB::table('provinces')->insert(['name' => 'Santa Cruz', 'zone' => 4]);
        DB::table('provinces')->insert(['name' => 'Santa Fe', 'zone' => 2]);
        DB::table('provinces')->insert(['name' => 'Santiago del Estero', 'zone' => 3]);
        DB::table('provinces')->insert(['name' => 'Tierra del Fuego', 'zone' => 4]);
        DB::table('provinces')->insert(['name' => 'Tucumán', 'zone' => 3]);
    }
}
