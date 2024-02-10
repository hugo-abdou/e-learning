<?php

namespace App\Filters;

use Closure;

class Search
{
    public function __construct(private $fields = [])
    {
    }
    public function handle($query, Closure $next)
    {
        if (!request()->has('search')) return $next($query);
        if ($search = request()->get('search')) {
            $query->where(function ($query) use ($search) {
                foreach ($this->fields as $field) {
                    if (strpos($field, '.') !== false) {
                        $relation = explode('.', $field)[0];
                        $field = explode('.', $field)[1];
                        $query->orWhereHas($relation, function ($query) use ($field, $search) {
                            $query->where($field, 'like', "%$search%");
                        });
                    } else {
                        $query->orWhere($field, 'like', "%$search%");
                    }
                }
            });
        }
        return $next($query);
    }
}
