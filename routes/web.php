<?php

Route::group(['middleware' => ['auth']], function () {
    Route::get('admin/package-alloy', [PackageAlloyController::class, 'index'])->name('package.skeleton.index');
    Route::get('package-alloy', [PackageAlloyController::class, 'index'])->name('package.skeleton.tab.index');
});
