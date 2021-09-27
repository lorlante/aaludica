<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('main_photo')->default('blank.png');
            $table->double('price')->default(0);
            $table->char('is_', 1)->default('N');
            $table->char('is_new', 1)->default('N');
            $table->char('is_last_units', 1)->default('N');
            $table->char('is_combo', 1)->default('N');
            $table->char('is_active', 1)->default('Y');
            $table->string('short_description')->default("");
            $table->text('long_description')->default("");
            $table->string('stat_players')->default("");
            $table->string('stat_age')->default("");
            $table->string('stat_time')->default("");
            $table->double('weight')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
