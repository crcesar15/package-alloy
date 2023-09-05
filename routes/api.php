<?php

Route::group(
    [
        'middleware' => ['auth:api', 'bindings'],
        'prefix' => 'api',
        'as' => 'api.',
        'namespace' => 'ProcessMaker\Package\Alloy\Http\Controllers\Api',
    ],
    function () {
        Route::get('admin/package-alloy/fetch', 'PackageAlloyController@fetch')->name('package.alloy.fetch');
    }
);
