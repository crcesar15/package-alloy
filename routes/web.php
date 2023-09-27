<?php

Route::group(
    [
        'middleware' => ['auth'],
    ],
    function () {
        Route::get('admin/alloy', 'AlloyController@index')->name('package-alloy.index');
    }
);
