<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('provinces', 'App\Http\Controllers\ProvinceController@index');
Route::get('products', 'App\Http\Controllers\ProductController@index');
Route::get('categories', 'App\Http\Controllers\ProductCategoryController@index');
Route::get('shipping_costs', 'App\Http\Controllers\ShippingCostController@calculateCost');
Route::post('purchase_order', 'App\Http\Controllers\PurchaseOrder@store');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
