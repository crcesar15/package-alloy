<?php

namespace ProcessMaker\Package\Alloy;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use ProcessMaker\Package\Alloy\Http\Middleware\AddToMenus;
use ProcessMaker\Package\Packages\Events\PackageEvent;
use ProcessMaker\Traits\PluginServiceProviderTrait;

class PackageServiceProvider extends ServiceProvider
{
    use PluginServiceProviderTrait;

    const name = 'package-alloy';

    const version = '1.0.0-BETA1';

    // Assign the default namespace for our controllers
    protected $namespace = '\ProcessMaker\Package\Alloy\Http\Controllers';

    /**
     * If your plugin will provide any services, you can register them here.
     * See: https://laravel.com/docs/5.6/providers#the-register-method
     */
    public function register()
    {
        // Nothing is registered at this time
    }

    /**
     * After all service provider's register methods have been called, your boot method
     * will be called. You can perform any initialization code that is dependent on
     * other service providers at this time.  We've included some example behavior
     * to get you started.
     *
     * See: https://laravel.com/docs/5.6/providers#the-boot-method
     */
    public function boot()
    {
        //Register commands
        $this->commands([
            Console\Commands\Install::class,
            Console\Commands\Uninstall::class,
        ]);

        // Route web
        Route::middleware('web')
            ->namespace($this->namespace)
            ->group(__DIR__ . '/../routes/web.php');

        // Route api
        Route::middleware('api')
            ->namespace($this->namespace)
            ->prefix('api/1.0')
            ->group(__DIR__ . '/../routes/api.php');

        Route::pushMiddlewareToGroup('web', AddToMenus::class);

        // load migrations
        $this->loadMigrationsFrom(__DIR__ . '/../database/migrations');

        $this->loadViewsFrom(__DIR__ . '/../resources/views/', 'package-alloy');

        $this->publishes([
            __DIR__ . '/../public' => public_path('vendor/processmaker/packages/package-alloy'),
        ], 'package-alloy');

        $this->completePluginBoot();
    }
}
