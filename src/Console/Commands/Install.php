<?php

namespace ProcessMaker\Package\Alloy\Console\Commands;

use Artisan;
use ProcessMaker\Console\PackageInstallCommand;

class Install extends PackageInstallCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'package-alloy:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install Package Alloy Package';

    /**
     * Publish assets
     * @return void
     */
    public function publishAssets()
    {
        $this->info('Publishing assets');
        Artisan::call('vendor:publish', [
            '--tag' => 'package-alloy',
            '--force' => true,
        ]);
    }

    public function preinstall()
    {
        $this->publishAssets();

        $this->info('Adding database tables');
        $this->installMigrations(
            [
                __DIR__ . '/../../../database/migrations',
            ]
        );
    }

    public function install()
    {
    }

    public function postinstall()
    {
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        parent::handle();
        $this->info('Package Alloy has been installed');
    }

    /**
     * Install migrations.
     *
     * @param array $pluginMigrationsPaths Array of migration files
     */
    private function installMigrations(array $pluginMigrationsPaths)
    {
        $migrator = app('migrator');
        $migrator->run($pluginMigrationsPaths);
    }
}
