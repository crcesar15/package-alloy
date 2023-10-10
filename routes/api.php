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
        Route::get('/journeys/{id}', 'JourneysController@show')->name('journeys.show');
        Route::post('/journeys', 'JourneysController@store')->name('journeys.store');
        Route::put('/journeys/{id}', 'JourneysController@update')->name('journeys.update');
        Route::delete('/journeys/{id}', 'JourneysController@destroy')->name('journeys.destroy');

        Route::get('/sessions', 'SessionsController@fetch')->name('sessions.fetch');
        Route::get('/sessions/{id}', 'SessionsController@show')->name('sessions.show');
        Route::post('/sessions', 'SessionsController@store')->name('sessions.store');
        Route::put('/sessions/{id}', 'SessionsController@update')->name('sessions.update');
        Route::delete('/sessions/{id}', 'SessionsController@destroy')->name('sessions.destroy');
    }
);
