<?php

namespace App\Enums;

enum StudentAttemptStatus: int
{

    case DRAFT = 0;
    case CORRECT = 1;
    case INCORRECT = 2;

    static function values()
    {
        return collect(self::cases())->map(fn ($value) => $value->value)->toArray();
    }
}
