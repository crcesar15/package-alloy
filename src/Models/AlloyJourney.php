<?php

/**
 * Service Model
 * php version 7.4.*.
 *
 * @category Models
 *
 * @author   PS QPTI <ps-qpti@processmaker.com>
 *
 * @see      https://processmaker.com
 */

namespace ProcessMaker\Package\Alloy\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Handles the Esign Services Model.
 *
 * @category Models
 *
 * @author   PS QPTI <ps-qpti@processmaker.com>
 *
 * @see      https://processmaker.com
 */
class AlloyJourney extends Model
{
    protected $table = 'alloy_journeys';

    protected $fillable = [
        'name', 'description', 'configuration', 'status',
    ];

    protected $casts = [
        'configuration' => 'json',
    ];
}
