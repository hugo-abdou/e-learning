<?php

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;



if (!function_exists('generate_file_name')) {
    function generate_file_name(String $ext)
    {
        if (!$ext) throw new Exception('Extension is required');
        $name = Str::random(40);
        if (!Storage::disk('public')->exists("$name.$ext")) return "$name.$ext";
        generate_file_name($ext);
    }
}
