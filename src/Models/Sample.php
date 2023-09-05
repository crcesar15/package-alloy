<?php

namespace ProcessMaker\Package\PackageAlloy\Models;

use ProcessMaker\Models\ProcessMakerModel;

class Sample extends ProcessMakerModel
{
    protected $table = 'sample_skeleton';

    protected $fillable = [
        'id', 'name', 'status',
    ];
}
