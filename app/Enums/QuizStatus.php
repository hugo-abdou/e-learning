<?php

namespace App\Enums;

enum QuizStatus: string
{
    case Draft = 'draft';
    case Private = 'private';
    case Scheduled = 'scheduled';
    case Published = 'published';
    case Closed = 'closed';
    case Error = 'error';


    static function values()
    {
        return collect(self::cases())->map(fn ($value) => $value->value)->toArray();
    }
}
