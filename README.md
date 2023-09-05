# Processmaker Package Alloy
This package provides the necessary base code to start the developing a package in ProcessMaker 4.

## Development
If you need to create a new ProcessMaker package run the following commands:

```
git clone https://github.com/ProcessMaker/package-alloy.git
cd package-alloy
php rename-project.php package-alloy
composer install
npm install
npm run dev
```

## Installation
* Use `composer require processmaker/package-alloy` to install the package.
* Use `php artisan package-alloy:install` to install generate the dependencies.

## Navigation and testing
* Navigate to administration tab in your ProcessMaker 4
* Select `Skeleton Package` from the administrative sidebar

## Uninstall
* Use `php artisan package-alloy:uninstall` to uninstall the package
* Use `composer remove processmaker/package-alloy` to remove the package completely
