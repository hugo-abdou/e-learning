<?php

namespace App\Filters;

use Closure;

class Sort
{
    public function handle($request, Closure $next)
    {
        if (!request()->has('sortBy')) return $next($request);
        $sortField = request()->input('sortBy.0.key', 'created_at');
        $sortDirection = request()->input('sortBy.0.order', 'desc');

        return $next($request)->orderBy($sortField, $sortDirection);
    }
}
