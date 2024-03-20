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

if (!function_exists('get_file_name')) {
    function get_file_name(String $path)
    {
        $extension = pathinfo($path, PATHINFO_EXTENSION);
        return str_replace('.' . $extension, '', $path);
    }
}
if (!function_exists('getMediaIcon')) {
    function getMediaIcon($mimeType, $size = 540)
    {
        $iconUrl = "";

        switch ($mimeType) {
            case 'image/gif':
            case 'image/png':
            case 'image/jpeg':
                $iconUrl = "https://img.icons8.com/?id=1lTMwCpaZU8T&size=$size";
                break;
            case 'video/mp4':
            case 'video/mpeg':
            case 'video/quicktime':
                $iconUrl = "https://img.icons8.com/?id=1FE2HGszFS4w&size=$size";
                break;
            case 'audio/mpeg':
            case 'audio/ogg':
            case 'audio/wav':
                $iconUrl = "https://img.icons8.com/?id=O42fBxIp3wbU&size=$size";
                break;
            case 'application/octet-stream':
                $iconUrl = "https://img.icons8.com/?id=Gb7VEgIx8KIg&size=$size";
                break;
            default:
                $iconUrl = "https://img.icons8.com/?id=1lTMwCpaZU8T&size=$size";
                break;
        }

        return $iconUrl;
    }
}
if (!function_exists('disk')) {
    function disk($defualt = 'public')
    {
        return env('STORAGE_DRIVER', $defualt);
    }
}

if (!function_exists('encrypt')) {
    function encrypt($data): string
    {
        return openssl_encrypt($data, 'AES-128-CBC', env('VITE_SECRET_KEY'), 0, env('VITE_SECRET_KEY'));
    }
}
if (!function_exists('decrypt')) {
    function decrypt($encryptedData): string
    {
        return openssl_decrypt($encryptedData, 'AES-128-CBC', env('VITE_SECRET_KEY'));
    }
}
