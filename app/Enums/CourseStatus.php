<?php

namespace App\Enums;

enum CourseStatus: string
{
    case Draft = 'draft';
    case Scheduled = 'scheduled';
    case Published = 'published';
    case Error = 'error';
}
