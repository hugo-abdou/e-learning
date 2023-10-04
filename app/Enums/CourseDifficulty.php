<?php

namespace App\Enums;

enum CourseDifficulty: string
{
    case Beginner = "beginner";
    case Intermediate = "intermediate";
    case Advanced = "advanced";

    static function values()
    {
        return [
            self::Beginner->value,
            self::Intermediate->value,
            self::Advanced->value
        ];
    }
}
