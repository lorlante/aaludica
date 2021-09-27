<?php

namespace Database\Seeders;

use \Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class ShippingCostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('shipping_costs')->truncate();
        DB::table('shipping_costs')->insert(['service' => 'CA', 'from' => '0', 'to' => '0.5', 'cost_zone_1' => '378.37', 'cost_zone_2' => '413.09', 'cost_zone_3' => '413.96', 'cost_zone_4' => '415.83']);
        DB::table('shipping_costs')->insert(['service' => 'CA', 'from' => '0.5', 'to' => '1', 'cost_zone_1' => '445.65', 'cost_zone_2' => '482.09', 'cost_zone_3' => '483.85', 'cost_zone_4' => '487.62']);
        DB::table('shipping_costs')->insert(['service' => 'CA', 'from' => '1', 'to' => '2', 'cost_zone_1' => '448.22', 'cost_zone_2' => '496.24', 'cost_zone_3' => '499.79', 'cost_zone_4' => '528.43']);
        DB::table('shipping_costs')->insert(['service' => 'CA', 'from' => '2', 'to' => '3', 'cost_zone_1' => '450.73', 'cost_zone_2' => '524.39', 'cost_zone_3' => '544.75', 'cost_zone_4' => '581.23']);
        DB::table('shipping_costs')->insert(['service' => 'CA', 'from' => '3', 'to' => '5', 'cost_zone_1' => '455.84', 'cost_zone_2' => '621.6', 'cost_zone_3' => '641.65', 'cost_zone_4' => '707.91']);
        DB::table('shipping_costs')->insert(['service' => 'CA', 'from' => '5', 'to' => '10', 'cost_zone_1' => '502.02', 'cost_zone_2' => '703.29', 'cost_zone_3' => '776.49', 'cost_zone_4' => '904.54']);
        DB::table('shipping_costs')->insert(['service' => 'CA', 'from' => '10', 'to' => '15', 'cost_zone_1' => '649.61', 'cost_zone_2' => '952.28', 'cost_zone_3' => '990.33', 'cost_zone_4' => '1217.73']);
        DB::table('shipping_costs')->insert(['service' => 'CA', 'from' => '15', 'to' => '20', 'cost_zone_1' => '672.21', 'cost_zone_2' => '1130.84', 'cost_zone_3' => '1258.86', 'cost_zone_4' => '1550.18']);
        DB::table('shipping_costs')->insert(['service' => 'CA', 'from' => '20', 'to' => '25', 'cost_zone_1' => '713.87', 'cost_zone_2' => '1343.82', 'cost_zone_3' => '1505.23', 'cost_zone_4' => '1873.93']);
    }
}
