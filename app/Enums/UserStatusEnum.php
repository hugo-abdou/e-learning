<?php

namespace App\Enums;

use Illuminate\Support\Str;

enum UserStatusEnum: int
{
    case OFFLINE = 0;
    case ONLINE = 1;
    case AWAY = 2;
    case DO_NOT_DISTURB = 3;

    static function values()
    {
        return collect(self::cases())->map(fn ($value) => $value->value)->toArray();
    }

    public static function labels()
    {
        return collect(self::cases())->map(fn ($value, $key) => Str::of($value->name)->replace('_', ' ')->lower())->toArray();
    }
}
