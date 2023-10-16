<?php

namespace App\Enums;

enum MediaStatus: string
{
    case Pending = '0';
    case Processing = '1';
    case Completed = '2';
    case Error = '3';
}
