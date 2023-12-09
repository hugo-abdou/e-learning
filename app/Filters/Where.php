<?php

namespace App\Filters;

use Closure;

class Where
{
    public function handle($query, Closure $next)
    {
        if ($where = request('where', null)) {
            collect($where)->map(function ($item) use ($query) {
                $query->where(...$item);
            });
        }
        return $next($query);
    }
}
