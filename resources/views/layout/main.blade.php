<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <link rel="icon" href="{{ asset('favicon.ico') }}" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{ config('app.name') }}</title>
    <link rel="stylesheet" type="text/css" href="{{ asset('loader.css') }}" />
    @yield('css')
    @yield('head-scripts')
</head>

<body>
    @yield('content')

    @yield('scripts')
</body>

</html>
