<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <link rel="icon" href="{{ asset('favicon.ico') }}" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{ config('app.name') }}</title>
    @vite(['resources/ts/main.ts'])
    <link rel="stylesheet" type="text/css" href="{{ asset('loader.css') }}" />
</head>

<body
    data-page="{{ json_encode([
        'appName' => config('app.name'),
        'appUrl' => config('app.url'),
        'appLogo' => asset(env('APP_LOGO')),
        'appLogoDark' => asset(env('APP_LOGO_DARK')),
        'csrfToken' => csrf_token(),
    ]) }}">
    <div id="app">
        <div id="loading-bg">
            <div class="loading-logo">
                <img height="100" src="{{ asset(env('APP_LOGO')) }}" alt="{{ config('app.name') }}" />
            </div>
            <div class=" loading">
                <div class="effect-1 effects"></div>
                <div class="effect-2 effects"></div>
                <div class="effect-3 effects"></div>
            </div>
        </div>
    </div>

    <script>
        const loaderColor = localStorage.getItem('{{ config('app.name') }}-initial-loader-bg') || '#FFFFFF'
        const primaryColor = localStorage.getItem('{{ config('app.name') }}-initial-loader-color') || '#7367F0'

        if (loaderColor)
            document.documentElement.style.setProperty('--initial-loader-bg', loaderColor)

        if (primaryColor)
            document.documentElement.style.setProperty('--initial-loader-color', primaryColor)
    </script>
</body>

</html>
