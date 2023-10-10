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
        Route::get('/journeys/{id}', 'JourneysController@show')->name('journeys.fetch');
        Route::post('/journeys', 'JourneysController@store')->name('journeys.store');
        Route::put('/journeys/{id}', 'JourneysController@update')->name('journeys.update');
        Route::delete('/journeys/{id}', 'JourneysController@destroy')->name('journeys.destroy');
    }
);
