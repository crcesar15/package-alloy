<?php

/**
 * Alloy Web Controller
 * php version 8.1.*.
 *
 * @category ApiControllers
 *
 * @author   PS QPTI <ps-qpti@processmaker.com>
 *
 * @see      https://processmaker.com
 */

namespace ProcessMaker\Package\Alloy\Http\Controllers;

use ProcessMaker\Http\Controllers\Controller;

/**
 * Handles the Alloy web routes
 * php version 8.1.*.
 *
 * @category Controllers
 *
 * @author   PS QPTI <ps-qpti@processmaker.com>
 *
 * @see      https://processmaker.com
 */
class AlloyController extends Controller
{
    /**
     * Return main view.
     *
     * @return @void
     */
    public function index()
    {
        return view('package-alloy::index');
    }
}
