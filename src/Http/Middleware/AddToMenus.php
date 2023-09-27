<?php

/**
 * Package Middleware
 * php version 8.1.*.
 *
 * @category Middleware
 *
 * @author   PS QPTI <ps-qpti@processmaker.com>
 *
 * @see      https://processmaker.com
 */

namespace ProcessMaker\Package\Alloy\Http\Middleware;

use Closure;
use Lavary\Menu\Facade as Menu;

/**
 * Handles the Package Menus.
 *
 * @category Middleware
 *
 * @author   PS QPTI <ps-qpti@processmaker.com>
 *
 * @see      https://processmaker.com
 */
class AddToMenus
{
    /**
     * Handles the Package Menus.
     *
     * @param Request $request Laravel Request object
     * @param Closure $next
     *
     * @return void
     */
    public function handle($request, Closure $next)
    {
        // Add a option in the admin menu to point to our page
        $menu = Menu::get('sidebar_admin')->first();

        // Add our menu item to the top nav
        $menu->add('Alloy', [
            'route' => 'package-alloy.index',
            'icon' => 'fa-cog',
        ]);

        return $next($request);
    }
}
