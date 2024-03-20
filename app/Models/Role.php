<?php

namespace App\Models;


class Role extends \Spatie\Permission\Models\Role
{
    protected $casts = [
        'data' => 'array'
    ];
    protected $guarded = [];

    public function admin()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
