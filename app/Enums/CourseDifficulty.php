<?php

namespace App\Enums;

enum CourseDifficulty: string
{
    case Beginner = "beginner";
    case Intermediate = "intermediate";
    case Advanced = "advanced";

    static function values()
    {
        return collect(self::cases())->map(fn ($value) => $value->value)->toArray();
    }
}
