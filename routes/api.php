<?php

Route::group(
    [
        'prefix' => 'alloy',
        'middleware' => ['auth:api', 'bindings'],
        'namespace' => '\ProcessMaker\Package\Alloy\Http\Controllers\Api',
        'as' => 'package-alloy.',
    ],
    function () {
        Route::get('/journeys', 'JourneysController@fetch')->name('journeys.fetch');
    }
);
