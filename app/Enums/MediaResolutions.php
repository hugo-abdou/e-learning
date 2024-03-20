<?php

namespace App\Enums;

enum MediaResolutions: string
{
    case RESOLUTION_240P =  '240p';
    case RESOLUTION_360P =  '360p';
    case RESOLUTION_480P =  '480p';
    case RESOLUTION_720P =  '720p';
    case RESOLUTION_1080P =  '1080p';
    case RESOLUTION_1440P =  '1440p';
    case RESOLUTION_2160P =  '2160p';

    static function values()
    {
        return collect(self::cases())->map(fn ($value) => $value->value)->toArray();
    }
}
