<?php

namespace App\Filters;

use Closure;
use Illuminate\Support\Str;

class Sort
{
    public function handle($query, Closure $next)
    {
        $sort = json_decode(request('sortBy', '{}'));
        $key = 'created_at';
        $order = 'desc';
        if (isset($sort->key)) {
            $key = $sort->key;
            $order = $sort->order;
        };
        $query->orderBy($key, Str::upper($order));
        return $next($query);
    }
}
