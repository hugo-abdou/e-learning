<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Analytic;
use App\Services\AnalyticService;
use Illuminate\Http\Request;

class AnalyticController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
    }

    /**
     * Display the specified resource.
     */
    public function show($type, Request $request)
    {
        return match ($type) {
            "storage" => AnalyticService::getStorage($request),
            default => throw new \Exception("Invalid Analytic Type : $type")
        };
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Analytic $analytic)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Analytic $analytic)
    {
        //
    }
}
