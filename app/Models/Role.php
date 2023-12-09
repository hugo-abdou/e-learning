<?php

namespace App\Models;


class Role extends \Spatie\Permission\Models\Role
{
    protected $casts = [
        'data' => 'array'
    ];
}
