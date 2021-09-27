<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product_categories')->truncate();
        DB::table('product_categories')->insert(['name' => 'Historia']);
        DB::table('product_categories')->insert(['name' => 'Arte']);
        DB::table('product_categories')->insert(['name' => 'Infantiles']);
        DB::table('product_categories')->insert(['name' => 'Ciencia']);
        DB::table('product_categories')->insert(['name' => 'Cooperativos']);
        DB::table('product_categories')->insert(['name' => 'Catequesis']);
        DB::table('product_categories')->insert(['name' => 'Literatura']);
    }
}
