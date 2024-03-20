<?php

namespace App\Services;


use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;

class StatisticsService
{

    public function getPaidUsersCard($params)
    {
        $role = Arr::get($params, 'role', 'student');
        return [
            "title" => "Paid {$role}s",  "value" => $this->remember('paid-users-count-' . $role, fn () => User::role($role)->count()), "change" => 10,
            "desc" => "Last Week Analytics", "icon" => "tabler-users",
            "iconColor" => "primary"
        ];
    }
    public function getTotalUsersCard($params)
    {
        $role = Arr::get($params, 'role', 'student');
        $percentageGrowth = $this->usersGrowthPercentage($role);
        return [
            "value" => $this->remember('total-users-count-' . $role, fn () => User::role($role)->count()),
            "change" => $percentageGrowth,
            "title" => "Total {$role}s", "desc" => "Last Week Analytics", "icon" => "tabler-users", "iconColor" => "primary"
        ];
    }


    private function usersGrowthPercentage($role, $feild = 'created_at')
    {
        return $this->remember('users-growth-percentage-' . $role, function () use ($role, $feild) {
            $percentageGrowth = 0;
            $startOfWeek = Carbon::now()->startOfWeek()->toDateString();
            $endOfWeek = Carbon::now()->endOfWeek()->toDateString();
            $startOfLastWeek = Carbon::now()->startOfWeek()->subWeek()->toDateString();
            $endOfLastWeek = Carbon::now()->endOfWeek()->subWeek()->toDateString();
            $usersAddedThisWeek = User::role($role)->whereBetween($feild, [$startOfWeek, $endOfWeek])->count();
            $usersAddedLastWeek = User::role($role)->whereBetween($feild, [$startOfLastWeek, $endOfLastWeek])->count();
            if ($usersAddedLastWeek > 0) {
                $percentageGrowth = (($usersAddedThisWeek - $usersAddedLastWeek) / $usersAddedLastWeek) * 100;
            } else {
                $percentageGrowth = ($usersAddedThisWeek > 0) ? 100 : 0; // Prevent division by zero
            }
            return $percentageGrowth;
        });
    }

    private function remember($key, \Closure $callback)
    {
        return Cache::remember(
            key: $key,
            ttl: 60 * 60,
            callback: $callback
        );
    }
}
