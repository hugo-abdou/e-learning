<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Sanctum\PersonalAccessToken as SanctumPersonalAccessToken;

class PersonalAccessToken extends SanctumPersonalAccessToken
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'token',
        'abilities',
        'expires_at',
        'user_agent',
    ];

    public static function boot()
    {
        parent::boot();
        static::creating(function ($token) {
            $token->user_agent = request()->userAgent();
            $token->expires_at = now()->addDays(15);
        });
    }
}
