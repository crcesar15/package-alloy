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
use ProcessMaker\Package\Alloy\Models\AlloyJourney;

/**
 * Handles the Esign Services Model.
 *
 * @category Models
 *
 * @author   PS QPTI <ps-qpti@processmaker.com>
 *
 * @see      https://processmaker.com
 */
class AlloySession extends Model
{
    protected $table = 'alloy_sessions';

    protected $fillable = [
        'request_id', 'journey_id', 'payload', 'properties', 'status',
    ];

    protected $casts = [
        'payload' => 'json',
        'properties' => 'json',
    ];

    public function journey()
    {
        return $this->belongsTo(AlloyJourney::class, 'journey_id');
    }
}
