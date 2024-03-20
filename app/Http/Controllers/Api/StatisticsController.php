<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Facades\App\Services\StatisticsService;
use Illuminate\Http\Request;

class StatisticsController extends Controller
{
    public function __invoke(Request $request, $type)
    {
        return match ($type) {
            "total-users-card" => StatisticsService::getTotalUsersCard($request),
            "paid-users-card" => StatisticsService::getPaidUsersCard($request),
            default => abort(404),
        };
    }
}
