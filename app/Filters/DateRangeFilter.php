<?php

namespace App\Filters;

use Closure;
use Illuminate\Database\Eloquent\Builder;

class DateRangeFilter
{
    /**
     * Apply the date range filter to the given query.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  string|null  $startDate
     * @param  string|null  $endDate
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function handle($request, Closure $next)
    {
        $pattern = '/(\d{4}-\d{2}-\d{2}) to (\d{4}-\d{2}-\d{2})/';
        // Use preg_match to find the matches and store them in $matches array
        if (request('date_range') && preg_match($pattern, request('date_range'), $matches)) {
            $startDate = $matches[1]; // Start date will be in index 1 of $matches array
            $endDate = $matches[2];   // End date will be in index 2 of $matches array
            if ($startDate && $endDate) {
                $next($request)->whereBetween('created_at', [$startDate, $endDate]);
            } elseif ($startDate) {
                $next($request)->where('created_at', '>=', $startDate);
            } elseif ($endDate) {
                $next($request)->where('created_at', '<=', $endDate);
            }
        }
        return $next($request);
    }
}
