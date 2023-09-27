<?php

/**
 * Alloy Journeys migration
 * php version 8.1.*.
 *
 * @category Migration
 *
 * @author   PS QPTI <ps-qpti@processmaker.com>
 *
 * @see      https://processmaker.com
 */

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Alloy Journeys migration class.
 *
 * @category Migration
 *
 * @author   PS QPTI <ps-qpti@processmaker.com>
 *
 * @see      https://processmaker.com
 */
class CreateAlloyJourneys extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('alloy_journeys', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('description')->nullable();
            $table->json('configuration');
            $table->enum('status', ['ACTIVE', 'INACTIVE'])->default('INACTIVE');
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
        Schema::dropIfExists('alloy_journeys');
    }
}
