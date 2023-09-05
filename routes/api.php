<?php

Route::group(['middleware' => ['auth:api', 'bindings']], function () {
    Route::get('admin/package-alloy/fetch', [PackageAlloyController::class, 'fetch'])->name('package.skeleton.fetch');
    Route::apiResource('admin/package-alloy', PackageAlloyController::class);
});
