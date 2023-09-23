<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <link rel="icon" href="{{ asset('favicon.ico') }}" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vuexy - Vuejs Admin Dashboard Template</title>
    <link rel="stylesheet" type="text/css" href="{{ asset('loader.css') }}" />
    {{-- {{ Vite::useBuildDirectory('build-client')->withEntryPoints(['ts/main.ts']) }} --}}
    @vite(['resources/ts/main.ts'])
</head>

<body>
    <div id="app">
        <div id="loading-bg">
            <div class="loading-logo">
                <!-- SVG Logo -->

                <img src="/worldwide.png" width="86">
            </div>
            <div class=" loading">
                <div class="effect-1 effects"></div>
                <div class="effect-2 effects"></div>
                <div class="effect-3 effects"></div>
            </div>
        </div>
    </div>

    <script>
        window.laravel = {
            appname: "{{ config('app.name') }}"
        }
        const loaderColor = localStorage.getItem(`${window.laravel.appname}-initial-loader-bg`) || '#FFFFFF'
        const primaryColor = localStorage.getItem(`${window.laravel.appname}-initial-loader-color`) || '#f39e2d'

        if (loaderColor)
            document.documentElement.style.setProperty('--initial-loader-bg', loaderColor)

        if (primaryColor)
            document.documentElement.style.setProperty('--initial-loader-color', primaryColor)
    </script>
</body>

</html>
