<!DOCTYPE html>
<html lang="en" style="--initial-loader-bg: #2F3349; --initial-loader-color: #7367F0;" dir="ltr">

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
    ]) }}"

data-new-gr-c-s-check-loaded="14.1155.0" data-gr-ext-installed="" class="skin--default"
    data-gr-ext-disabled="forever">
    <div id="app" data-v-app="">
        <div class="v-locale-provider v-locale--is-ltr">
            <div class="v-application v-theme--dark v-layout v-layout--full-height v-locale--is-ltr"
                style="--v-global-theme-primary: 115,103,240;">
                <div class="v-application__wrap"><!----><!----><!---->
                    <div class="layout-wrapper layout-blank">
                        <div class="landing-page-wrapper">
                            <nav class="v-navigation-drawer v-navigation-drawer--left v-theme--dark"
                                data-v-17380668=""
                                style="left: 0px; z-index: 1006; transform: translateX(-110%); position: fixed; height: calc(100% + 0px); top: 0px; bottom: 0px; width: 275px;">
                                <!----><!---->
                                <div class="v-navigation-drawer__content">
                                    <div data-v-17380668="" class="d-flex flex-column gap-y-4 pa-4"><a
                                            data-v-17380668="" aria-current="page" href="/#home"
                                            class="router-link-active router-link-exact-active nav-link font-weight-medium active-link">Home</a><a
                                            data-v-17380668="" aria-current="page" href="/#features"
                                            class="router-link-active router-link-exact-active nav-link font-weight-medium">Features</a><a
                                            data-v-17380668="" aria-current="page" href="/#team"
                                            class="router-link-active router-link-exact-active nav-link font-weight-medium">Team</a><a
                                            data-v-17380668="" aria-current="page" href="/#faq"
                                            class="router-link-active router-link-exact-active nav-link font-weight-medium">FAQ</a><a
                                            data-v-17380668="" aria-current="page" href="/#contact-us"
                                            class="router-link-active router-link-exact-active nav-link font-weight-medium">Contact
                                            us</a>
                                        <div data-v-17380668="" class="font-weight-medium cursor-pointer"></div><a
                                            data-v-17380668="" aria-current="page" href="/"
                                            class="router-link-active router-link-exact-active font-weight-medium nav-link"
                                            target="_blank"> Admin </a>
                                    </div><svg data-v-17380668="" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" role="button" tag="i"
                                        class="v-icon notranslate v-theme--dark v-icon--clickable iconify iconify--tabler"
                                        id="navigation-drawer-close-btn" width="1em" height="1em"
                                        viewBox="0 0 24 24" style="font-size: 20px; height: 20px; width: 20px;">
                                        <path fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"></path>
                                    </svg>
                                </div><!---->
                            </nav><!---->
                            <div data-v-17380668="" class="front-page-navbar">
                                <header data-v-17380668=""
                                    class="v-toolbar v-toolbar--density-default v-theme--dark v-locale--is-ltr v-app-bar app-bar-dark elevation-0 navbar-blur"
                                    style="background-color: rgba(var(--v-theme-background)); color: rgb(0, 0, 0); caret-color: rgb(0, 0, 0); top: 0px; z-index: 1004; transform: translateY(0%); position: fixed; left: 0px; width: calc(100% + 0px);">
                                    <!---->
                                    <div class="v-toolbar__content" style="height: 64px;"><!----><!----><button
                                            data-v-17380668="" type="button"
                                            class="v-btn v-btn--icon v-theme--dark text-default v-btn--density-comfortable v-btn--size-default v-btn--variant-text ms-n3 me-2 d-inline-block d-md-none"
                                            id="vertical-nav-toggle-btn"><span class="v-btn__overlay"></span><span
                                                class="v-btn__underlay"></span><!----><span class="v-btn__content"
                                                data-no-activator=""><svg data-v-17380668=""
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                                                    role="img" tag="i"
                                                    class="v-icon notranslate v-theme--dark iconify iconify--tabler"
                                                    width="1em" height="1em" viewBox="0 0 24 24"
                                                    style="font-size: 26px; height: 26px; width: 26px; color: rgba(var(--v-theme-on-surface)); caret-color: rgba(var(--v-theme-on-surface));">
                                                    <path fill="none" stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2"
                                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                                </svg></span><!----><!----></button>
                                        <div data-v-17380668="" class="d-flex align-center">
                                            <div data-v-17380668="" class="v-toolbar-title me-6 v-app-bar-title">
                                                <div class="v-toolbar-title__placeholder"><!----><a data-v-17380668=""
                                                        aria-current="page" href="/"
                                                        class="router-link-active router-link-exact-active d-flex gap-x-4 d-none">
                                                        <div data-v-17380668="" class="d-flex gap-x-3 align-center">
                                                            <div data-v-17380668=""
                                                                style="line-height: 0; width: 7rem; color: rgb(var(--v-global-theme-primary));">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    xmlns:svgjs="http://svgjs.dev/svgjs"
                                                                    viewBox="0 0 1500 458">
                                                                    <g
                                                                        transform="matrix(1,0,0,1,-0.9090909090911055,0.1295368107894035)">
                                                                        <svg viewBox="0 0 396 121"
                                                                            data-background-color="primary"
                                                                            preserveAspectRatio="xMidYMid meet"
                                                                            height="458" width="1500"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            xmlns:xlink="http://www.w3.org/1999/xlink">
                                                                            <g id="tight-bounds"
                                                                                transform="matrix(1,0,0,1,0.24000000000003752,-0.03422260721728776)">
                                                                                <svg viewBox="0 0 395.5199999999999 121.06844521443459"
                                                                                    height="121.06844521443459"
                                                                                    width="395.5199999999999">
                                                                                    <g><svg viewBox="0 0 602.4847466267115 184.42023548621697"
                                                                                            height="121.06844521443459"
                                                                                            width="395.5199999999999">
                                                                                            <g
                                                                                                transform="matrix(1,0,0,1,204.98714662671156,7.814136993577591)">
                                                                                                <svg viewBox="0 0 397.4975999999999 168.79196149906178"
                                                                                                    height="168.79196149906178"
                                                                                                    width="397.4975999999999">
                                                                                                    <g
                                                                                                        id="textblocktransform">
                                                                                                        <svg viewBox="0 0 397.4975999999999 168.79196149906178"
                                                                                                            height="168.79196149906178"
                                                                                                            width="397.4975999999999"
                                                                                                            id="textblock">
                                                                                                            <g>
                                                                                                                <rect
                                                                                                                    width="397.4975999999999"
                                                                                                                    height="7.925357448203832"
                                                                                                                    x="0"
                                                                                                                    y="97.21890803409534"
                                                                                                                    fill="#f4f3f0"
                                                                                                                    opacity="1"
                                                                                                                    stroke-width="0"
                                                                                                                    stroke="transparent"
                                                                                                                    fill-opacity="1"
                                                                                                                    class="rect-qz-0"
                                                                                                                    data-fill-palette-color="primary"
                                                                                                                    rx="1%"
                                                                                                                    id="qz-0"
                                                                                                                    data-palette-color="#f4f3f0">
                                                                                                                </rect>
                                                                                                            </g>
                                                                                                            <g
                                                                                                                transform="matrix(1,0,0,1,0.9887999999999693,0)">
                                                                                                                <svg viewBox="0 0 395.52 87.88275397207511"
                                                                                                                    height="87.88275397207511"
                                                                                                                    width="395.52">
                                                                                                                    <g
                                                                                                                        transform="matrix(1,0,0,1,0,0)">
                                                                                                                        <svg width="395.52"
                                                                                                                            viewBox="1.6 -36.3 207.68 46.15"
                                                                                                                            height="87.88275397207511"
                                                                                                                            data-palette-color="#f4f3f0">
                                                                                                                            <path
                                                                                                                                d="M15.55-27Q20.85-27 24.53-24.93 28.2-22.85 28.2-18.5L28.2-18.5 18.95-18.5Q18.95-19.95 17.65-20.55L17.65-20.55Q16.75-21.05 15.4-21.05L15.4-21.05Q11.8-21.05 11.8-19.35L11.8-19.35Q11.8-18.4 13.05-18 14.3-17.6 17.15-17.15L17.15-17.15Q20.65-16.65 23-15.98 25.35-15.3 27.1-13.58 28.85-11.85 28.85-8.75L28.85-8.75Q28.85-3.7 25.08-1.55 21.3 0.6 15.2 0.6L15.2 0.6Q11.7 0.6 8.6-0.38 5.5-1.35 3.55-3.4 1.6-5.45 1.6-8.6L1.6-8.6 10.85-8.6 10.85-8.4Q10.9-6.7 12.28-6.03 13.65-5.35 15.2-5.35L15.2-5.35Q19.35-5.35 19.35-7.3L19.35-7.3Q19.35-8.3 18.05-8.75 16.75-9.2 13.8-9.7L13.8-9.7Q10.25-10.3 7.98-11 5.7-11.7 4-13.38 2.3-15.05 2.3-18.05L2.3-18.05Q2.3-22.9 5.98-24.95 9.65-27 15.55-27L15.55-27ZM43.5-16.3L51.95-26.4 63.55-26.4 53.8-15.75 63.8 0 52.5 0 46.95-9.05 43.5-5.7 43.5 0 33.55 0 33.55-36.3 43.5-36.3 43.5-16.3ZM77.2-29.5L67.25-29.5 67.25-36.25 77.2-36.25 77.2-29.5ZM77.2 0L67.25 0 67.25-26.4 77.2-26.4 77.2 0ZM93.84 0L83.89 0 83.89-36.25 93.84-36.25 93.84 0ZM110.49 0L100.54 0 100.54-36.25 110.49-36.25 110.49 0ZM129.39-27Q134.69-27 138.36-24.93 142.04-22.85 142.04-18.5L142.04-18.5 132.79-18.5Q132.79-19.95 131.49-20.55L131.49-20.55Q130.59-21.05 129.24-21.05L129.24-21.05Q125.64-21.05 125.64-19.35L125.64-19.35Q125.64-18.4 126.89-18 128.14-17.6 130.99-17.15L130.99-17.15Q134.49-16.65 136.84-15.98 139.19-15.3 140.94-13.58 142.69-11.85 142.69-8.75L142.69-8.75Q142.69-3.7 138.91-1.55 135.14 0.6 129.04 0.6L129.04 0.6Q125.54 0.6 122.44-0.38 119.34-1.35 117.39-3.4 115.44-5.45 115.44-8.6L115.44-8.6 124.69-8.6 124.69-8.4Q124.74-6.7 126.11-6.03 127.49-5.35 129.04-5.35L129.04-5.35Q133.19-5.35 133.19-7.3L133.19-7.3Q133.19-8.3 131.89-8.75 130.59-9.2 127.64-9.7L127.64-9.7Q124.09-10.3 121.81-11 119.54-11.7 117.84-13.38 116.14-15.05 116.14-18.05L116.14-18.05Q116.14-22.9 119.81-24.95 123.49-27 129.39-27L129.39-27ZM174.69 0L166.54 0 165.89-4Q164.34-1.85 161.81-0.63 159.29 0.6 156.49 0.6L156.49 0.6Q151.89 0.6 149.59-1.95 147.29-4.5 147.29-9.3L147.29-9.3 147.29-26.4 157.24-26.4 157.24-10.5Q157.24-8.8 158.11-7.78 158.99-6.75 160.59-6.75L160.59-6.75Q162.44-6.75 163.59-7.95 164.74-9.15 164.74-10.9L164.74-10.9 164.74-26.4 174.69-26.4 174.69 0ZM198.13-27Q203.48-27 206.38-23.5 209.28-20 209.28-13.15L209.28-13.15Q209.28-6.35 206.38-2.88 203.48 0.6 198.13 0.6L198.13 0.6Q193.53 0.6 190.73-2.4L190.73-2.4 190.73 9.85 180.78 9.85 180.78-26.4 188.88-26.4 189.73-22.65Q192.63-27 198.13-27L198.13-27ZM195.03-19.65Q192.83-19.65 191.73-18.1 190.63-16.55 190.63-14.05L190.63-14.05 190.63-12.4Q190.63-9.9 191.73-8.33 192.83-6.75 195.03-6.75L195.03-6.75Q199.33-6.75 199.33-11.9L199.33-11.9 199.33-14.55Q199.33-19.65 195.03-19.65L195.03-19.65Z"
                                                                                                                                opacity="1"
                                                                                                                                transform="matrix(1,0,0,1,0,0)"
                                                                                                                                fill="#f4f3f0"
                                                                                                                                class="wordmark-text-0"
                                                                                                                                data-fill-palette-color="primary"
                                                                                                                                id="text-0">
                                                                                                                            </path>
                                                                                                                        </svg>
                                                                                                                    </g>
                                                                                                                </svg>
                                                                                                            </g>
                                                                                                            <g
                                                                                                                transform="matrix(1,0,0,1,0,114.48041954431937)">
                                                                                                                <svg viewBox="0 0 395.52 54.31154195474242"
                                                                                                                    height="54.31154195474242"
                                                                                                                    width="395.52">
                                                                                                                    <g
                                                                                                                        transform="matrix(1,0,0,1,0,0)">
                                                                                                                        <svg width="395.52"
                                                                                                                            viewBox="3.8499999999999996 -27 200.26499998 27.5"
                                                                                                                            height="54.31154195474242"
                                                                                                                            data-palette-color="#f4f3f0">
                                                                                                                            <path
                                                                                                                                d="M4.55 0L4.55 0Q3.85 0 3.85-0.65L3.85-0.65 3.85-25.85Q3.85-26.5 4.4-26.5L4.4-26.5 7.4-26.5Q7.9-26.5 7.9-25.95L7.9-25.95 7.9-23.05Q7.9-22.8 8.03-22.75 8.15-22.7 8.4-22.9L8.4-22.9Q10-24.2 11.38-25.13 12.75-26.05 14.18-26.53 15.6-27 17.25-27L17.25-27Q20.2-27 21.98-25.65 23.75-24.3 24.35-22.6L24.35-22.6Q24.45-22.4 24.65-22.45 24.85-22.5 25.05-22.7L25.05-22.7Q26.65-24.05 28.08-25 29.5-25.95 30.98-26.48 32.45-27 34.1-27L34.1-27Q37.75-27 39.75-24.93 41.75-22.85 41.75-19.35L41.75-19.35 41.75-0.8Q41.75 0 41 0L41 0 38.2 0Q37.85 0 37.7-0.18 37.55-0.35 37.55-0.65L37.55-0.65 37.55-18.5Q37.55-20.95 36.38-22.33 35.2-23.7 32.7-23.7L32.7-23.7Q31.25-23.7 29.93-23.15 28.6-22.6 27.53-21.8 26.45-21 25.6-20.3L25.6-20.3Q25.2-19.95 25.05-19.63 24.9-19.3 24.9-18.8L24.9-18.8 24.9-0.8Q24.9 0 24.15 0L24.15 0 21.35 0Q21.05 0 20.88-0.18 20.7-0.35 20.7-0.65L20.7-0.65 20.7-18.5Q20.7-20.95 19.55-22.33 18.4-23.7 15.9-23.7L15.9-23.7Q13.8-23.7 12.05-22.7 10.3-21.7 8.05-19.65L8.05-19.65 8.05-0.75Q8.05 0 7.3 0L7.3 0 4.55 0ZM78.74-3.2L78.74-3.2Q76.89-1.4 74.72-0.45 72.54 0.5 69.84 0.5L69.84 0.5Q65.94 0.5 63.72-1.5 61.49-3.5 61.49-6.75L61.49-6.75Q61.49-9.4 62.99-11.33 64.49-13.25 67.44-14.38 70.39-15.5 74.69-15.75L74.69-15.75 78.59-16.05Q78.89-16.1 79.14-16.25 79.39-16.4 79.39-16.8L79.39-16.8 79.39-18.15Q79.39-20.85 77.72-22.43 76.04-24 73.19-24L73.19-24Q70.99-24 69.22-23 67.44-22 66.04-20L66.04-20Q65.84-19.75 65.72-19.68 65.59-19.6 65.29-19.7L65.29-19.7 62.59-20.6Q62.44-20.7 62.37-20.85 62.29-21 62.49-21.4L62.49-21.4Q63.99-24 66.72-25.5 69.44-27 73.39-27L73.39-27Q76.74-27 78.97-25.98 81.19-24.95 82.32-23.03 83.44-21.1 83.44-18.45L83.44-18.45 83.44-0.75Q83.44-0.3 83.29-0.15 83.14 0 82.79 0L82.79 0 80.24 0Q79.89 0 79.74-0.23 79.59-0.45 79.54-0.8L79.54-0.8 79.49-3.1Q79.34-3.8 78.74-3.2L78.74-3.2ZM79.39-12.7L79.39-12.7Q79.39-13.55 78.69-13.5L78.69-13.5 75.39-13.2Q73.09-13.1 71.29-12.63 69.49-12.15 68.24-11.4 66.99-10.65 66.34-9.63 65.69-8.6 65.69-7.25L65.69-7.25Q65.69-5.05 67.22-3.83 68.74-2.6 71.34-2.6L71.34-2.6Q72.94-2.6 74.42-3.18 75.89-3.75 76.99-4.65L76.99-4.65Q78.14-5.6 78.77-6.6 79.39-7.6 79.39-8.55L79.39-8.55 79.39-12.7ZM105.94 0L105.94 0Q105.59 0 105.41-0.18 105.24-0.35 105.24-0.65L105.24-0.65 105.24-25.85Q105.24-26.5 105.79-26.5L105.79-26.5 108.69-26.5Q109.24-26.5 109.24-25.95L109.24-25.95 109.24-22.7Q109.24-22.4 109.39-22.35 109.54-22.3 109.79-22.55L109.79-22.55Q111.09-24.1 112.36-25.08 113.64-26.05 114.94-26.53 116.24-27 117.54-27L117.54-27Q119.29-27 119.29-26.35L119.29-26.35 119.29-23.35Q119.29-22.85 118.84-22.95L118.84-22.95Q118.39-23 117.81-23.05 117.24-23.1 116.59-23.1L116.59-23.1Q115.49-23.1 114.24-22.63 112.99-22.15 111.91-21.3 110.84-20.45 110.14-19.4 109.44-18.35 109.44-17.3L109.44-17.3 109.44-0.75Q109.44 0 108.69 0L108.69 0 105.94 0ZM149.18 0.5L149.18 0.5Q145.43 0.5 142.55-1.23 139.68-2.95 138.1-6.03 136.53-9.1 136.53-13.1L136.53-13.1Q136.53-17.25 138.15-20.38 139.78-23.5 142.63-25.25 145.48-27 149.23-27L149.23-27Q153.03-27 155.85-25.23 158.68-23.45 160.25-20.33 161.83-17.2 161.83-13.15L161.83-13.15Q161.83-9.15 160.23-6.08 158.63-3 155.8-1.25 152.98 0.5 149.18 0.5L149.18 0.5ZM149.28-2.65L149.28-2.65Q151.88-2.65 153.73-3.93 155.58-5.2 156.55-7.58 157.53-9.95 157.53-13.25L157.53-13.25Q157.53-16.55 156.53-18.93 155.53-21.3 153.68-22.6 151.83-23.9 149.23-23.9L149.23-23.9Q146.68-23.9 144.78-22.6 142.88-21.3 141.85-18.93 140.83-16.55 140.83-13.25L140.83-13.25Q140.83-10 141.85-7.6 142.88-5.2 144.78-3.93 146.68-2.65 149.28-2.65L149.28-2.65ZM193.37-27L193.37-27Q195.97-27 197.95-26.18 199.92-25.35 201.35-23.93 202.77-22.5 203.72-20.8L203.72-20.8Q204.02-20.2 203.47-20.05L203.47-20.05 200.72-19.4Q200.37-19.25 200.07-19.7L200.07-19.7Q199.07-21.15 198.1-22.05 197.12-22.95 196.02-23.43 194.92-23.9 193.62-23.9L193.62-23.9Q191.07-23.9 189.15-22.63 187.22-21.35 186.17-18.95 185.12-16.55 185.12-13.25L185.12-13.25Q185.12-9.9 186.2-7.5 187.27-5.1 189.2-3.85 191.12-2.6 193.72-2.6L193.72-2.6Q196.12-2.6 197.87-3.8 199.62-5 201.07-7.3L201.07-7.3Q201.22-7.55 201.35-7.58 201.47-7.6 201.72-7.5L201.72-7.5 203.87-6.7Q204.22-6.55 204.07-6.05L204.07-6.05Q203.32-4.75 202.32-3.55 201.32-2.35 200-1.45 198.67-0.55 197.02-0.03 195.37 0.5 193.37 0.5L193.37 0.5Q189.67 0.5 186.85-1.23 184.02-2.95 182.42-6.03 180.82-9.1 180.82-13.15L180.82-13.15Q180.82-17.25 182.45-20.35 184.07-23.45 186.9-25.23 189.72-27 193.37-27L193.37-27Z"
                                                                                                                                opacity="1"
                                                                                                                                transform="matrix(1,0,0,1,0,0)"
                                                                                                                                fill="#f4f3f0"
                                                                                                                                class="slogan-text-1"
                                                                                                                                data-fill-palette-color="secondary"
                                                                                                                                id="text-1">
                                                                                                                            </path>
                                                                                                                        </svg>
                                                                                                                    </g>
                                                                                                                </svg>
                                                                                                            </g>
                                                                                                        </svg></g>
                                                                                                </svg></g>
                                                                                            <g><svg viewBox="0 0 184.24013759999997 184.42023548621697"
                                                                                                    height="184.42023548621697"
                                                                                                    width="184.24013759999997">
                                                                                                    <g><svg xmlns="http://www.w3.org/2000/svg"
                                                                                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                            version="1.1"
                                                                                                            x="0" y="0"
                                                                                                            viewBox="0 0 63.9375 64"
                                                                                                            enable-background="new 0 0 64 64"
                                                                                                            xml:space="preserve"
                                                                                                            height="184.42023548621697"
                                                                                                            width="184.24013759999997"
                                                                                                            class="icon-icon-0"
                                                                                                            data-fill-palette-color="accent"
                                                                                                            id="icon-0">
                                                                                                            <g fill="#2092ec"
                                                                                                                data-fill-palette-color="accent">
                                                                                                                <path
                                                                                                                    d="M48.2 14.6c-0.8-1.4-1.8-2.6-2.9-3.8-0.4-0.4-1-0.4-1.4 0-0.4 0.4-0.4 1 0 1.4 1 1 1.9 2.1 2.6 3.4 0.4 0.5 0.8 0.6 1.4 0.4C48.3 15.7 48.5 15.1 48.2 14.6z"
                                                                                                                    fill="#2092ec"
                                                                                                                    data-fill-palette-color="accent">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M20.1 36c-0.9-0.9-1.6-1.8-2.3-2.8-0.3-0.5-0.9-0.6-1.4-0.3-0.5 0.3-0.6 0.9-0.3 1.4 0.7 1.1 1.6 2.2 2.5 3.1 0.5 0.4 1 0.4 1.4 0C20.5 37 20.5 36.4 20.1 36z"
                                                                                                                    fill="#2092ec"
                                                                                                                    data-fill-palette-color="accent">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M50 18.6c-0.2-0.5-0.7-0.8-1.2-0.7-0.5 0.2-0.8 0.7-0.7 1.2 1.8 6 0.2 12.4-4.2 16.8-0.4 0.4-0.4 1 0 1.4 0.4 0.4 0.9 0.4 1.4 0C50.2 32.5 52 25.3 50 18.6z"
                                                                                                                    fill="#2092ec"
                                                                                                                    data-fill-palette-color="accent">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M20.1 12.2c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0c-5 5-6.8 12.2-4.6 19 0.1 0.4 0.5 0.7 1 0.7 0.1 0 0.2 0 0.3 0 0.5-0.2 0.8-0.7 0.7-1.3C14.1 23.2 15.7 16.7 20.1 12.2z"
                                                                                                                    fill="#2092ec"
                                                                                                                    data-fill-palette-color="accent">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M59.5 53.3c0-3.4 1.5-6.7 4.1-8.9 0.3-0.3 0.4-0.7 0.3-1.1-0.1-0.4-0.5-0.7-0.9-0.7H47.4c5.3-4.4 8.7-11.1 8.7-18.6C56.1 10.8 45.3 0 32 0 18.7 0 7.9 10.8 7.9 24.1c0 7.5 3.4 14.1 8.7 18.6h-6C4.8 42.7 0 47.5 0 53.3S4.8 64 10.6 64H63c0.4 0 0.8-0.3 0.9-0.7 0.1-0.4 0-0.8-0.3-1.1C61 60 59.5 56.8 59.5 53.3zM9.9 24.1C9.9 11.9 19.8 2 32 2s22.1 9.9 22.1 22.1c0 7.8-4 14.6-10.1 18.6H20C13.9 38.7 9.9 31.9 9.9 24.1zM10.6 62C5.9 62 2 58.1 2 53.3s3.9-8.7 8.6-8.7h50c-2 2.4-3.1 5.5-3.1 8.7 0 3.2 1.1 6.2 3.1 8.7H10.6z"
                                                                                                                    fill="#2092ec"
                                                                                                                    data-fill-palette-color="accent">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M32 30.9c3.8 0 6.8-3.1 6.8-6.8s-3.1-6.8-6.8-6.8-6.8 3.1-6.8 6.8S28.2 30.9 32 30.9zM32 19.3c2.6 0 4.8 2.2 4.8 4.8 0 2.6-2.2 4.8-4.8 4.8-2.6 0-4.8-2.2-4.8-4.8C27.2 21.5 29.4 19.3 32 19.3z"
                                                                                                                    fill="#2092ec"
                                                                                                                    data-fill-palette-color="accent">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M17.3 55.8h-2.5c-0.6 0-1 0.4-1 1s0.4 1 1 1h2.5c0.6 0 1-0.4 1-1S17.8 55.8 17.3 55.8z"
                                                                                                                    fill="#2092ec"
                                                                                                                    data-fill-palette-color="accent">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M48.9 55.8H21.7c-0.6 0-1 0.4-1 1s0.4 1 1 1h27.2c0.6 0 1-0.4 1-1S49.5 55.8 48.9 55.8z"
                                                                                                                    fill="#2092ec"
                                                                                                                    data-fill-palette-color="accent">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M48.9 48.9H14.8c-0.6 0-1 0.4-1 1s0.4 1 1 1h34.1c0.6 0 1-0.4 1-1S49.5 48.9 48.9 48.9z"
                                                                                                                    fill="#2092ec"
                                                                                                                    data-fill-palette-color="accent">
                                                                                                                </path>
                                                                                                            </g>
                                                                                                        </svg></g>
                                                                                                </svg></g>
                                                                                        </svg></g>
                                                                                    <defs></defs>
                                                                                </svg>
                                                                                <rect width="395.5199999999999"
                                                                                    height="121.06844521443459"
                                                                                    fill="none" stroke="none"
                                                                                    visibility="hidden"></rect>
                                                                            </g>
                                                                        </svg></g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                            </div>
                                            <div data-v-17380668="" class="text-base align-center d-none d-md-flex"><a
                                                    data-v-17380668="" aria-current="page" href="/#home"
                                                    class="router-link-active router-link-exact-active nav-link font-weight-medium py-2 px-2 px-lg-4 active-link">Home</a><a
                                                    data-v-17380668="" aria-current="page" href="/#features"
                                                    class="router-link-active router-link-exact-active nav-link font-weight-medium py-2 px-2 px-lg-4">Features</a><a
                                                    data-v-17380668="" aria-current="page" href="/#team"
                                                    class="router-link-active router-link-exact-active nav-link font-weight-medium py-2 px-2 px-lg-4">Team</a><a
                                                    data-v-17380668="" aria-current="page" href="/#pricing-plan"
                                                    class="router-link-active router-link-exact-active nav-link font-weight-medium py-2 px-2 px-lg-4">Pricing
                                                    Plan</a><a data-v-17380668="" aria-current="page" href="/#faq"
                                                    class="router-link-active router-link-exact-active nav-link font-weight-medium py-2 px-2 px-lg-4">FAQ</a><a
                                                    data-v-17380668="" aria-current="page" href="/#contact-us"
                                                    class="router-link-active router-link-exact-active nav-link font-weight-medium py-2 px-2 px-lg-4">Contact
                                                    us</a></div>
                                        </div>
                                        <div data-v-17380668="" class="v-spacer"></div>
                                        <div data-v-17380668="" class="d-flex gap-x-4"><a data-v-17380668=""
                                                href="/dashboard"
                                                class="nav-link font-weight-medium px-2 px-lg-4 py-2"> Dashboard
                                            </a><button data-v-17380668="" type="button"
                                                class="v-btn v-btn--icon v-theme--dark text-default v-btn--density-comfortable v-btn--size-default v-btn--variant-text"
                                                aria-describedby="v-tooltip-5"><span
                                                    class="v-btn__overlay"></span><span
                                                    class="v-btn__underlay"></span><!----><span class="v-btn__content"
                                                    data-no-activator=""><svg xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                                                        role="img" tag="i"
                                                        class="v-icon notranslate v-theme--dark iconify iconify--tabler"
                                                        width="1em" height="1em" viewBox="0 0 24 24"
                                                        style="font-size: 26px; height: 26px; width: 26px; color: rgba(var(--v-theme-on-surface)); caret-color: rgba(var(--v-theme-on-surface));">
                                                        <path fill="none" stroke="currentColor"
                                                            stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z">
                                                        </path>
                                                    </svg><!----></span><!----><!----></button></div><!---->
                                    </div><!---->
                                </header>
                            </div>
                            <div data-v-5f2759f5="" id="home" style="background: rgb(var(--v-theme-surface));">
                                <div data-v-5f2759f5="" id="landingHero">
                                    <div data-v-5f2759f5="" class="landing-hero landing-hero-dark-bg">
                                        <div data-v-5f2759f5="" class="v-container v-locale--is-ltr">
                                            <div data-v-5f2759f5="" class="hero-text-box text-center px-6">
                                                <h1 data-v-5f2759f5=""
                                                    class="text-h4 text-sm-h1 text-primary hero-title font-weight-bold text-wrap mb-4">
                                                    One dashboard to manage all your business </h1>
                                                <h5 data-v-5f2759f5="" class="mb-6 text-h5">Production-ready &amp;
                                                    easy to use Admin Template for Reliability and Customizability.</h5>
                                                <div data-v-5f2759f5="" class="position-relative">
                                                    <h6 data-v-5f2759f5=""
                                                        class="position-absolute hero-btn-item d-md-flex d-none text-h6">
                                                        Join Community <div data-v-5f2759f5=""
                                                            class="v-responsive v-img flip-in-rtl"
                                                            style="height: 42px; width: 60px;">
                                                            <div class="v-responsive__sizer"
                                                                style="padding-bottom: 70%;"></div><img
                                                                class="v-img__img v-img__img--contain"
                                                                src="/build/assets/Join-community-arrow-f679c2fc.png"
                                                                style=""><!----><!----><!----><!----><!---->
                                                        </div>
                                                    </h6><a data-v-5f2759f5="" aria-current="page"
                                                        href="/#pricing-plan"
                                                        class="router-link-active router-link-exact-active"><button
                                                            data-v-5f2759f5="" type="button"
                                                            class="v-btn v-btn--elevated v-theme--dark bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"
                                                            style="height: 48px;"><span
                                                                class="v-btn__overlay"></span><span
                                                                class="v-btn__underlay"></span><!----><span
                                                                class="v-btn__content" data-no-activator=""> Get early
                                                                Access </span><!----><!----></button></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-v-5f2759f5="" class="v-container v-locale--is-ltr">
                                    <div data-v-5f2759f5="" class="position-relative">
                                        <div data-v-5f2759f5="" class="blank-section"></div>
                                        <div data-v-5f2759f5="" class="hero-animation-img position-absolute"><a
                                                data-v-5f2759f5="" aria-current="page" href="/"
                                                class="router-link-active router-link-exact-active" target="_blank">
                                                <div data-v-5f2759f5="" class="hero-dashboard-img position-relative"
                                                    style="transform: perspective(1200px) rotateX(2.59deg) rotateY(-10.64deg) scale3d(1, 1, 1);">
                                                    <img data-v-5f2759f5=""
                                                        src="/build/assets/hero-dashboard-dark-824966e2.png"
                                                        alt="Hero Dashboard" class="animation-img"><img
                                                        data-v-5f2759f5=""
                                                        src="/build/assets/hero-elements-dark-49c64b4f.png"
                                                        alt="hero elements"
                                                        class="hero-elements-img animation-img position-absolute"
                                                        style="transform: translateZ(1rem);"></div>
                                            </a></div>
                                    </div>
                                </div>
                            </div>
                            <div style="background-color: rgb(var(--v-theme-surface));">
                                <div data-v-a95593d4="" class="v-container v-locale--is-ltr" id="features">
                                    <div data-v-a95593d4="" class="feature-cards">
                                        <div data-v-a95593d4=""
                                            class="headers d-flex justify-center flex-column align-center mb-15"><span
                                                data-v-a95593d4=""
                                                class="v-chip v-chip--label v-theme--dark text-primary v-chip--density-default v-chip--size-small v-chip--variant-tonal mb-4"
                                                draggable="false"><!----><span
                                                    class="v-chip__underlay"></span><!----><!---->
                                                <div class="v-chip__content"> Useful Features </div><!----><!---->
                                            </span>
                                            <div data-v-a95593d4=""
                                                class="d-flex align-center text-h3 mb-1 flex-wrap justify-center">
                                                <div data-v-a95593d4="">
                                                    <div data-v-a95593d4="" class="position-relative me-2">
                                                        <h3 data-v-a95593d4="" class="section-title">Everything you
                                                            need</h3>
                                                    </div> to start your next project
                                                </div>
                                            </div>
                                            <p data-v-a95593d4="" class="mb-0"> Not just a set of tools, the package
                                                includes ready-to-deploy conceptual application. </p>
                                        </div>
                                        <div data-v-a95593d4="" class="v-row">
                                            <div data-v-a95593d4="" class="v-col-sm-6 v-col-md-4 v-col-12">
                                                <div data-v-a95593d4=""
                                                    class="d-flex flex-column align-center justify-center gap-4 mx-auto">
                                                    <svg data-v-a95593d4="" xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                                                        role="img" tag="i"
                                                        class="v-icon notranslate v-theme--dark text-primary"
                                                        width="1em" height="1em" viewBox="0 0 16 16"
                                                        style="font-size: 64px; height: 64px; width: 64px;"></svg>
                                                    <h5 data-v-a95593d4="" class="text-h5">Quality Code</h5>
                                                    <p data-v-a95593d4="" class="text-center"
                                                        style="max-inline-size: 310px;">Code structure that all
                                                        developers will easily understand and fall in love with.</p>
                                                </div>
                                            </div>
                                            <div data-v-a95593d4="" class="v-col-sm-6 v-col-md-4 v-col-12">
                                                <div data-v-a95593d4=""
                                                    class="d-flex flex-column align-center justify-center gap-4 mx-auto">
                                                    <svg data-v-a95593d4="" xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                                                        role="img" tag="i"
                                                        class="v-icon notranslate v-theme--dark text-primary"
                                                        width="1em" height="1em" viewBox="0 0 16 16"
                                                        style="font-size: 64px; height: 64px; width: 64px;"></svg>
                                                    <h5 data-v-a95593d4="" class="text-h5">Continuous Updates</h5>
                                                    <p data-v-a95593d4="" class="text-center"
                                                        style="max-inline-size: 310px;">Free updates for the next 12
                                                        months, including new demos and features.</p>
                                                </div>
                                            </div>
                                            <div data-v-a95593d4="" class="v-col-sm-6 v-col-md-4 v-col-12">
                                                <div data-v-a95593d4=""
                                                    class="d-flex flex-column align-center justify-center gap-4 mx-auto">
                                                    <svg data-v-a95593d4="" xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                                                        role="img" tag="i"
                                                        class="v-icon notranslate v-theme--dark text-primary"
                                                        width="1em" height="1em" viewBox="0 0 16 16"
                                                        style="font-size: 64px; height: 64px; width: 64px;"></svg>
                                                    <h5 data-v-a95593d4="" class="text-h5">Starter Kit</h5>
                                                    <p data-v-a95593d4="" class="text-center"
                                                        style="max-inline-size: 310px;">Start your project quickly
                                                        without having to remove unnecessary features.</p>
                                                </div>
                                            </div>
                                            <div data-v-a95593d4="" class="v-col-sm-6 v-col-md-4 v-col-12">
                                                <div data-v-a95593d4=""
                                                    class="d-flex flex-column align-center justify-center gap-4 mx-auto">
                                                    <svg data-v-a95593d4="" xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                                                        role="img" tag="i"
                                                        class="v-icon notranslate v-theme--dark text-primary"
                                                        width="1em" height="1em" viewBox="0 0 16 16"
                                                        style="font-size: 64px; height: 64px; width: 64px;"></svg>
                                                    <h5 data-v-a95593d4="" class="text-h5">API Ready</h5>
                                                    <p data-v-a95593d4="" class="text-center"
                                                        style="max-inline-size: 310px;">Just change the endpoint and
                                                        see your own data loaded within seconds.</p>
                                                </div>
                                            </div>
                                            <div data-v-a95593d4="" class="v-col-sm-6 v-col-md-4 v-col-12">
                                                <div data-v-a95593d4=""
                                                    class="d-flex flex-column align-center justify-center gap-4 mx-auto">
                                                    <svg data-v-a95593d4="" xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                                                        role="img" tag="i"
                                                        class="v-icon notranslate v-theme--dark text-primary"
                                                        width="1em" height="1em" viewBox="0 0 16 16"
                                                        style="font-size: 64px; height: 64px; width: 64px;"></svg>
                                                    <h5 data-v-a95593d4="" class="text-h5">Excellent Support</h5>
                                                    <p data-v-a95593d4="" class="text-center"
                                                        style="max-inline-size: 310px;">An easy-to-follow doc with lots
                                                        of references and code examples.</p>
                                                </div>
                                            </div>
                                            <div data-v-a95593d4="" class="v-col-sm-6 v-col-md-4 v-col-12">
                                                <div data-v-a95593d4=""
                                                    class="d-flex flex-column align-center justify-center gap-4 mx-auto">
                                                    <svg data-v-a95593d4="" xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                                                        role="img" tag="i"
                                                        class="v-icon notranslate v-theme--dark text-primary"
                                                        width="1em" height="1em" viewBox="0 0 16 16"
                                                        style="font-size: 64px; height: 64px; width: 64px;"></svg>
                                                    <h5 data-v-a95593d4="" class="text-h5">Well Documented</h5>
                                                    <p data-v-a95593d4="" class="text-center"
                                                        style="max-inline-size: 310px;">An easy-to-follow doc with lots
                                                        of references and code examples.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="background-color: rgb(var(--v-theme-surface));">
                                <div data-v-2b801d02="" id="customer-review" class="position-relative">
                                    <div data-v-2b801d02="" class="v-container v-locale--is-ltr">
                                        <div data-v-2b801d02="" class="customer-reviews">
                                            <div data-v-2b801d02="" class="v-row">
                                                <div data-v-2b801d02="" class="v-col-md-4 v-col-12">
                                                    <div data-v-2b801d02=""
                                                        class="headers d-flex justify-center flex-column align-start h-100"
                                                        style="max-inline-size: 275px;"><span data-v-2b801d02=""
                                                            class="v-chip v-chip--label v-theme--dark text-primary v-chip--density-default v-chip--size-small v-chip--variant-tonal mb-4"
                                                            draggable="false"><!----><span
                                                                class="v-chip__underlay"></span><!----><!---->
                                                            <div class="v-chip__content"> REAL CUSTOMERS REVIEWS </div>
                                                            <!----><!---->
                                                        </span>
                                                        <div data-v-2b801d02="" class="text-h3">
                                                            <div data-v-2b801d02="" class="position-relative me-2">
                                                                <h3 data-v-2b801d02="" class="section-title mb-1">What
                                                                    people say</h3>
                                                            </div>
                                                        </div>
                                                        <p data-v-2b801d02="" class="mb-12"> See what our customers
                                                            have to say about their experience. </p>
                                                        <div data-v-2b801d02="" class="position-relative"><button
                                                                data-v-2b801d02="" type="button"
                                                                class="v-btn v-btn--icon v-theme--dark text-primary v-btn--density-comfortable v-btn--size-default v-btn--variant-tonal reviews-button-prev rounded me-4"><span
                                                                    class="v-btn__overlay"></span><span
                                                                    class="v-btn__underlay"></span><!----><span
                                                                    class="v-btn__content" data-no-activator=""><svg
                                                                        data-v-2b801d02=""
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        aria-hidden="true" role="img"
                                                                        tag="i"
                                                                        class="v-icon notranslate v-theme--dark iconify iconify--tabler"
                                                                        width="1em" height="1em"
                                                                        viewBox="0 0 24 24"
                                                                        style="font-size: 22px; height: 22px; width: 22px;">
                                                                        <path fill="none" stroke="currentColor"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="2"
                                                                            d="m15 6l-6 6l6 6"></path>
                                                                    </svg></span><!----><!----></button><button
                                                                data-v-2b801d02="" type="button"
                                                                class="v-btn v-btn--icon v-theme--dark text-primary v-btn--density-comfortable v-btn--size-default v-btn--variant-tonal reviews-button-next rounded"><span
                                                                    class="v-btn__overlay"></span><span
                                                                    class="v-btn__underlay"></span><!----><span
                                                                    class="v-btn__content" data-no-activator=""><svg
                                                                        data-v-2b801d02=""
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        aria-hidden="true" role="img"
                                                                        tag="i"
                                                                        class="v-icon notranslate v-theme--dark iconify iconify--tabler"
                                                                        width="1em" height="1em"
                                                                        viewBox="0 0 24 24"
                                                                        style="font-size: 22px; height: 22px; width: 22px;">
                                                                        <path fill="none" stroke="currentColor"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="2"
                                                                            d="m9 6l6 6l-6 6"></path>
                                                                    </svg></span><!----><!----></button></div>
                                                    </div>
                                                </div>
                                                <div data-v-2b801d02="" class="v-col-md-8 v-col-12">
                                                    <div data-v-2b801d02="" class="swiper-reviews-carousel py-4">
                                                        <swiper-container data-v-2b801d02="" slides-per-view="1"
                                                            space-between="5" autoplay-delay="3000"
                                                            autoplay-disable-on-interaction="false"
                                                            events-prefix="swiper-"><swiper-slide data-v-2b801d02=""
                                                                style="width: 243.667px; margin-right: 20px;"
                                                                role="group" aria-label="7 / 10"
                                                                data-swiper-slide-index="6" class="">
                                                                <div data-v-2b801d02=""
                                                                    class="v-card v-theme--dark v-card--density-default v-card--variant-elevated d-flex h-100 align-stretch">
                                                                    <!---->
                                                                    <div class="v-card__loader">
                                                                        <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                                            role="progressbar" aria-hidden="true"
                                                                            aria-valuemin="0" aria-valuemax="100"
                                                                            style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                            <!---->
                                                                            <div class="v-progress-linear__background bg-primary"
                                                                                style="width: 100%;"></div>
                                                                            <div
                                                                                class="v-progress-linear__indeterminate">
                                                                                <div
                                                                                    class="v-progress-linear__indeterminate long bg-primary">
                                                                                </div>
                                                                                <div
                                                                                    class="v-progress-linear__indeterminate short bg-primary">
                                                                                </div>
                                                                            </div><!---->
                                                                        </div>
                                                                    </div><!----><!---->
                                                                    <div data-v-2b801d02=""
                                                                        class="v-card-text pa-6 d-flex flex-column justify-space-between align-start">
                                                                        <img data-v-2b801d02=""
                                                                            src="/build/assets/logo-2-420b7640.png"
                                                                            class="mb-3"
                                                                            style="block-size: 1.375rem;">
                                                                        <p data-v-2b801d02=""
                                                                            class="text-body-1 text-high-emphasis">
                                                                            Materio is awesome, and I particularly enjoy
                                                                            knowing that if I get stuck on something.
                                                                        </p>
                                                                        <div data-v-2b801d02=""
                                                                            class="v-rating v-rating--readonly v-theme--dark mb-3">
                                                                            <label for="v-rating-47-0"
                                                                                class=""><span
                                                                                    class="v-rating__hidden">Rating 0
                                                                                    of 5</span><!----></label><input
                                                                                class="v-rating__hidden"
                                                                                name="v-rating-47" id="v-rating-47-0"
                                                                                type="radio" tabindex="-1"
                                                                                readonly="" value="0">
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-47-1"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            1 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 1 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-47"
                                                                                        id="v-rating-47-1"
                                                                                        type="radio" tabindex="-1"
                                                                                        readonly="" value="1">
                                                                                </div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-47-2"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            2 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 2 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-47"
                                                                                        id="v-rating-47-2"
                                                                                        type="radio" tabindex="-1"
                                                                                        readonly="" value="2">
                                                                                </div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-47-3"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            3 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 3 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-47"
                                                                                        id="v-rating-47-3"
                                                                                        type="radio" tabindex="-1"
                                                                                        readonly="" value="3">
                                                                                </div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-47-4"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            4 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 4 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-47"
                                                                                        id="v-rating-47-4"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="4"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-47-5"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            5 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 5 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-47"
                                                                                        id="v-rating-47-5"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="5"></div><!---->
                                                                            </div>
                                                                        </div>
                                                                        <div data-v-2b801d02=""
                                                                            class="d-flex align-center gap-x-3">
                                                                            <div data-v-2b801d02=""
                                                                                class="v-avatar v-theme--dark v-avatar--density-default v-avatar--variant-flat"
                                                                                style="width: 32px; height: 32px;">
                                                                                <div class="v-responsive v-img v-img--booting"
                                                                                    aria-label="">
                                                                                    <div class="v-responsive__sizer">
                                                                                    </div>
                                                                                    <!----><!----><!----><!----><!----><!---->
                                                                                </div><!----><span
                                                                                    class="v-avatar__underlay"></span>
                                                                            </div>
                                                                            <div data-v-2b801d02="">
                                                                                <div data-v-2b801d02=""
                                                                                    class="text-body-1 text-high-emphasis font-weight-medium">
                                                                                    Tommy haffman</div>
                                                                                <div data-v-2b801d02=""
                                                                                    class="text-body-2 text-disabled">
                                                                                    Founder of Levis</div>
                                                                            </div>
                                                                        </div>
                                                                    </div><!----><!----><span
                                                                        class="v-card__underlay"></span>
                                                                </div>
                                                            </swiper-slide><swiper-slide data-v-2b801d02=""
                                                                style="width: 243.667px; margin-right: 20px;"
                                                                role="group" aria-label="8 / 10"
                                                                data-swiper-slide-index="7" class="">
                                                                <div data-v-2b801d02=""
                                                                    class="v-card v-theme--dark v-card--density-default v-card--variant-elevated d-flex h-100 align-stretch">
                                                                    <!---->
                                                                    <div class="v-card__loader">
                                                                        <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                                            role="progressbar" aria-hidden="true"
                                                                            aria-valuemin="0" aria-valuemax="100"
                                                                            style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                            <!---->
                                                                            <div class="v-progress-linear__background bg-primary"
                                                                                style="width: 100%;"></div>
                                                                            <div
                                                                                class="v-progress-linear__indeterminate">
                                                                                <div
                                                                                    class="v-progress-linear__indeterminate long bg-primary">
                                                                                </div>
                                                                                <div
                                                                                    class="v-progress-linear__indeterminate short bg-primary">
                                                                                </div>
                                                                            </div><!---->
                                                                        </div>
                                                                    </div><!----><!---->
                                                                    <div data-v-2b801d02=""
                                                                        class="v-card-text pa-6 d-flex flex-column justify-space-between align-start">
                                                                        <img data-v-2b801d02=""
                                                                            src="/build/assets/logo-3-1cfd7ca2.png"
                                                                            class="mb-3"
                                                                            style="block-size: 1.375rem;">
                                                                        <p data-v-2b801d02=""
                                                                            class="text-body-1 text-high-emphasis">
                                                                            This template is superior in so many ways.
                                                                            The code, the design, the regular updates,
                                                                            the support.. It's the whole package.
                                                                            Excellent Work.</p>
                                                                        <div data-v-2b801d02=""
                                                                            class="v-rating v-rating--readonly v-theme--dark mb-3">
                                                                            <label for="v-rating-53-0"
                                                                                class=""><span
                                                                                    class="v-rating__hidden">Rating 0
                                                                                    of 5</span><!----></label><input
                                                                                class="v-rating__hidden"
                                                                                name="v-rating-53"
                                                                                id="v-rating-53-0" type="radio"
                                                                                tabindex="-1" readonly=""
                                                                                value="0">
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-53-1"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            1 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 1 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-53"
                                                                                        id="v-rating-53-1"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="1"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-53-2"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            2 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 2 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-53"
                                                                                        id="v-rating-53-2"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="2"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-53-3"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            3 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 3 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-53"
                                                                                        id="v-rating-53-3"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="3"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-53-4"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            4 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 4 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-53"
                                                                                        id="v-rating-53-4"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="4"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-53-5"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            5 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 5 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-53"
                                                                                        id="v-rating-53-5"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="5"></div><!---->
                                                                            </div>
                                                                        </div>
                                                                        <div data-v-2b801d02=""
                                                                            class="d-flex align-center gap-x-3">
                                                                            <div data-v-2b801d02=""
                                                                                class="v-avatar v-theme--dark v-avatar--density-default v-avatar--variant-flat"
                                                                                style="width: 32px; height: 32px;">
                                                                                <div class="v-responsive v-img v-img--booting"
                                                                                    aria-label="">
                                                                                    <div class="v-responsive__sizer">
                                                                                    </div>
                                                                                    <!----><!----><!----><!----><!----><!---->
                                                                                </div><!----><span
                                                                                    class="v-avatar__underlay"></span>
                                                                            </div>
                                                                            <div data-v-2b801d02="">
                                                                                <div data-v-2b801d02=""
                                                                                    class="text-body-1 text-high-emphasis font-weight-medium">
                                                                                    Eugenia Moore</div>
                                                                                <div data-v-2b801d02=""
                                                                                    class="text-body-2 text-disabled">
                                                                                    CTO of Airbnb</div>
                                                                            </div>
                                                                        </div>
                                                                    </div><!----><!----><span
                                                                        class="v-card__underlay"></span>
                                                                </div>
                                                            </swiper-slide><swiper-slide data-v-2b801d02=""
                                                                style="width: 243.667px; margin-right: 20px;"
                                                                role="group" aria-label="9 / 10"
                                                                data-swiper-slide-index="8" class="">
                                                                <div data-v-2b801d02=""
                                                                    class="v-card v-theme--dark v-card--density-default v-card--variant-elevated d-flex h-100 align-stretch">
                                                                    <!---->
                                                                    <div class="v-card__loader">
                                                                        <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                                            role="progressbar" aria-hidden="true"
                                                                            aria-valuemin="0" aria-valuemax="100"
                                                                            style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                            <!---->
                                                                            <div class="v-progress-linear__background bg-primary"
                                                                                style="width: 100%;"></div>
                                                                            <div
                                                                                class="v-progress-linear__indeterminate">
                                                                                <div
                                                                                    class="v-progress-linear__indeterminate long bg-primary">
                                                                                </div>
                                                                                <div
                                                                                    class="v-progress-linear__indeterminate short bg-primary">
                                                                                </div>
                                                                            </div><!---->
                                                                        </div>
                                                                    </div><!----><!---->
                                                                    <div data-v-2b801d02=""
                                                                        class="v-card-text pa-6 d-flex flex-column justify-space-between align-start">
                                                                        <img data-v-2b801d02=""
                                                                            src="/build/assets/logo-4-c35f4932.png"
                                                                            class="mb-3"
                                                                            style="block-size: 1.375rem;">
                                                                        <p data-v-2b801d02=""
                                                                            class="text-body-1 text-high-emphasis">All
                                                                            the requirements for developers have been
                                                                            taken into consideration, so I'm able to
                                                                            build any interface I want.</p>
                                                                        <div data-v-2b801d02=""
                                                                            class="v-rating v-rating--readonly v-theme--dark mb-3">
                                                                            <label for="v-rating-59-0"
                                                                                class=""><span
                                                                                    class="v-rating__hidden">Rating 0
                                                                                    of 5</span><!----></label><input
                                                                                class="v-rating__hidden"
                                                                                name="v-rating-59"
                                                                                id="v-rating-59-0" type="radio"
                                                                                tabindex="-1" readonly=""
                                                                                value="0">
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-59-1"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            1 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 1 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-59"
                                                                                        id="v-rating-59-1"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="1"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-59-2"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            2 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 2 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-59"
                                                                                        id="v-rating-59-2"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="2"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-59-3"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            3 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 3 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-59"
                                                                                        id="v-rating-59-3"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="3"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-59-4"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            4 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 4 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-59"
                                                                                        id="v-rating-59-4"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="4"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-59-5"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            5 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 5 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-59"
                                                                                        id="v-rating-59-5"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="5"></div><!---->
                                                                            </div>
                                                                        </div>
                                                                        <div data-v-2b801d02=""
                                                                            class="d-flex align-center gap-x-3">
                                                                            <div data-v-2b801d02=""
                                                                                class="v-avatar v-theme--dark v-avatar--density-default v-avatar--variant-flat"
                                                                                style="width: 32px; height: 32px;">
                                                                                <div class="v-responsive v-img v-img--booting"
                                                                                    aria-label="">
                                                                                    <div class="v-responsive__sizer">
                                                                                    </div>
                                                                                    <!----><!----><!----><!----><!----><!---->
                                                                                </div><!----><span
                                                                                    class="v-avatar__underlay"></span>
                                                                            </div>
                                                                            <div data-v-2b801d02="">
                                                                                <div data-v-2b801d02=""
                                                                                    class="text-body-1 text-high-emphasis font-weight-medium">
                                                                                    Sara Smith</div>
                                                                                <div data-v-2b801d02=""
                                                                                    class="text-body-2 text-disabled">
                                                                                    Founder of Continental</div>
                                                                            </div>
                                                                        </div>
                                                                    </div><!----><!----><span
                                                                        class="v-card__underlay"></span>
                                                                </div>
                                                            </swiper-slide><swiper-slide data-v-2b801d02=""
                                                                role="group" aria-label="10 / 10"
                                                                data-swiper-slide-index="9"
                                                                style="width: 243.667px; margin-right: 20px;"
                                                                class="">
                                                                <div data-v-2b801d02=""
                                                                    class="v-card v-theme--dark v-card--density-default v-card--variant-elevated d-flex h-100 align-stretch">
                                                                    <!---->
                                                                    <div class="v-card__loader">
                                                                        <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                                            role="progressbar" aria-hidden="true"
                                                                            aria-valuemin="0" aria-valuemax="100"
                                                                            style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                            <!---->
                                                                            <div class="v-progress-linear__background bg-primary"
                                                                                style="width: 100%;"></div>
                                                                            <div
                                                                                class="v-progress-linear__indeterminate">
                                                                                <div
                                                                                    class="v-progress-linear__indeterminate long bg-primary">
                                                                                </div>
                                                                                <div
                                                                                    class="v-progress-linear__indeterminate short bg-primary">
                                                                                </div>
                                                                            </div><!---->
                                                                        </div>
                                                                    </div><!----><!---->
                                                                    <div data-v-2b801d02=""
                                                                        class="v-card-text pa-6 d-flex flex-column justify-space-between align-start">
                                                                        <img data-v-2b801d02=""
                                                                            src="/build/assets/logo-2-420b7640.png"
                                                                            class="mb-3"
                                                                            style="block-size: 1.375rem;">
                                                                        <p data-v-2b801d02=""
                                                                            class="text-body-1 text-high-emphasis">
                                                                            This template is really clean &amp; well
                                                                            documented. The docs are really easy to
                                                                            understand and it's always easy to find a
                                                                            screenshot from their website.</p>
                                                                        <div data-v-2b801d02=""
                                                                            class="v-rating v-rating--readonly v-theme--dark mb-3">
                                                                            <label for="v-rating-65-0"
                                                                                class=""><span
                                                                                    class="v-rating__hidden">Rating 0
                                                                                    of 5</span><!----></label><input
                                                                                class="v-rating__hidden"
                                                                                name="v-rating-65"
                                                                                id="v-rating-65-0" type="radio"
                                                                                tabindex="-1" readonly=""
                                                                                value="0">
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-65-1"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            1 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 1 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-65"
                                                                                        id="v-rating-65-1"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="1"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-65-2"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            2 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 2 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-65"
                                                                                        id="v-rating-65-2"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="2"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-65-3"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            3 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 3 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-65"
                                                                                        id="v-rating-65-3"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="3"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-65-4"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            4 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 4 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-65"
                                                                                        id="v-rating-65-4"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="4"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-65-5"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            5 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 5 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-65"
                                                                                        id="v-rating-65-5"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="5"></div><!---->
                                                                            </div>
                                                                        </div>
                                                                        <div data-v-2b801d02=""
                                                                            class="d-flex align-center gap-x-3">
                                                                            <div data-v-2b801d02=""
                                                                                class="v-avatar v-theme--dark v-avatar--density-default v-avatar--variant-flat"
                                                                                style="width: 32px; height: 32px;">
                                                                                <div class="v-responsive v-img v-img--booting"
                                                                                    aria-label="">
                                                                                    <div class="v-responsive__sizer">
                                                                                    </div>
                                                                                    <!----><!----><!----><!----><!----><!---->
                                                                                </div><!----><span
                                                                                    class="v-avatar__underlay"></span>
                                                                            </div>
                                                                            <div data-v-2b801d02="">
                                                                                <div data-v-2b801d02=""
                                                                                    class="text-body-1 text-high-emphasis font-weight-medium">
                                                                                    Curtis Fletcher</div>
                                                                                <div data-v-2b801d02=""
                                                                                    class="text-body-2 text-disabled">
                                                                                    Design Lead at Dribbble</div>
                                                                            </div>
                                                                        </div>
                                                                    </div><!----><!----><span
                                                                        class="v-card__underlay"></span>
                                                                </div>
                                                            </swiper-slide><swiper-slide data-v-2b801d02=""
                                                                style="width: 243.667px; margin-right: 20px;"
                                                                role="group" aria-label="1 / 10"
                                                                class="swiper-slide-prev"
                                                                data-swiper-slide-index="0">
                                                                <div data-v-2b801d02=""
                                                                    class="v-card v-theme--dark v-card--density-default v-card--variant-elevated d-flex h-100 align-stretch">
                                                                    <!---->
                                                                    <div class="v-card__loader">
                                                                        <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                                            role="progressbar" aria-hidden="true"
                                                                            aria-valuemin="0" aria-valuemax="100"
                                                                            style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                            <!---->
                                                                            <div class="v-progress-linear__background bg-primary"
                                                                                style="width: 100%;"></div>
                                                                            <div
                                                                                class="v-progress-linear__indeterminate">
                                                                                <div
                                                                                    class="v-progress-linear__indeterminate long bg-primary">
                                                                                </div>
                                                                                <div
                                                                                    class="v-progress-linear__indeterminate short bg-primary">
                                                                                </div>
                                                                            </div><!---->
                                                                        </div>
                                                                    </div><!----><!---->
                                                                    <div data-v-2b801d02=""
                                                                        class="v-card-text pa-6 d-flex flex-column justify-space-between align-start">
                                                                        <img data-v-2b801d02=""
                                                                            src="/build/assets/logo-1-866d6fdb.png"
                                                                            class="mb-3"
                                                                            style="block-size: 1.375rem;">
                                                                        <p data-v-2b801d02=""
                                                                            class="text-body-1 text-high-emphasis">
                                                                            I've never used a theme as versatile and
                                                                            flexible as Vuexy. It's my go to for
                                                                            building dashboard sites on almost any
                                                                            project.</p>
                                                                        <div data-v-2b801d02=""
                                                                            class="v-rating v-rating--readonly v-theme--dark mb-3">
                                                                            <label for="v-rating-11-0"
                                                                                class=""><span
                                                                                    class="v-rating__hidden">Rating 0
                                                                                    of 5</span><!----></label><input
                                                                                class="v-rating__hidden"
                                                                                name="v-rating-11"
                                                                                id="v-rating-11-0" type="radio"
                                                                                tabindex="-1" readonly=""
                                                                                value="0">
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-11-1"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            1 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 1 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-11"
                                                                                        id="v-rating-11-1"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="1"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-11-2"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            2 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 2 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-11"
                                                                                        id="v-rating-11-2"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="2"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-11-3"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            3 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 3 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-11"
                                                                                        id="v-rating-11-3"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="3"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-11-4"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            4 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 4 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-11"
                                                                                        id="v-rating-11-4"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="4"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-11-5"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            5 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 5 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-11"
                                                                                        id="v-rating-11-5"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="5"></div><!---->
                                                                            </div>
                                                                        </div>
                                                                        <div data-v-2b801d02=""
                                                                            class="d-flex align-center gap-x-3">
                                                                            <div data-v-2b801d02=""
                                                                                class="v-avatar v-theme--dark v-avatar--density-default v-avatar--variant-flat"
                                                                                style="width: 32px; height: 32px;">
                                                                                <div class="v-responsive v-img v-img--booting"
                                                                                    aria-label="">
                                                                                    <div class="v-responsive__sizer">
                                                                                    </div>
                                                                                    <!----><!----><!----><!----><!----><!---->
                                                                                </div><!----><span
                                                                                    class="v-avatar__underlay"></span>
                                                                            </div>
                                                                            <div data-v-2b801d02="">
                                                                                <div data-v-2b801d02=""
                                                                                    class="text-body-1 text-high-emphasis font-weight-medium">
                                                                                    Eugenia Moore</div>
                                                                                <div data-v-2b801d02=""
                                                                                    class="text-body-2 text-disabled">
                                                                                    Founder of Hubspot</div>
                                                                            </div>
                                                                        </div>
                                                                    </div><!----><!----><span
                                                                        class="v-card__underlay"></span>
                                                                </div>
                                                            </swiper-slide><swiper-slide data-v-2b801d02=""
                                                                style="width: 243.667px; margin-right: 20px;"
                                                                role="group" aria-label="2 / 10"
                                                                class="swiper-slide-active"
                                                                data-swiper-slide-index="1">
                                                                <div data-v-2b801d02=""
                                                                    class="v-card v-theme--dark v-card--density-default v-card--variant-elevated d-flex h-100 align-stretch">
                                                                    <!---->
                                                                    <div class="v-card__loader">
                                                                        <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                                            role="progressbar" aria-hidden="true"
                                                                            aria-valuemin="0" aria-valuemax="100"
                                                                            style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                            <!---->
                                                                            <div class="v-progress-linear__background bg-primary"
                                                                                style="width: 100%;"></div>
                                                                            <div
                                                                                class="v-progress-linear__indeterminate">
                                                                                <div
                                                                                    class="v-progress-linear__indeterminate long bg-primary">
                                                                                </div>
                                                                                <div
                                                                                    class="v-progress-linear__indeterminate short bg-primary">
                                                                                </div>
                                                                            </div><!---->
                                                                        </div>
                                                                    </div><!----><!---->
                                                                    <div data-v-2b801d02=""
                                                                        class="v-card-text pa-6 d-flex flex-column justify-space-between align-start">
                                                                        <img data-v-2b801d02=""
                                                                            src="/build/assets/logo-2-420b7640.png"
                                                                            class="mb-3"
                                                                            style="block-size: 1.375rem;">
                                                                        <p data-v-2b801d02=""
                                                                            class="text-body-1 text-high-emphasis">
                                                                            This template is really clean &amp; well
                                                                            documented. The docs are really easy to
                                                                            understand and it's always easy to find a
                                                                            screenshot from their website.</p>
                                                                        <div data-v-2b801d02=""
                                                                            class="v-rating v-rating--readonly v-theme--dark mb-3">
                                                                            <label for="v-rating-17-0"
                                                                                class=""><span
                                                                                    class="v-rating__hidden">Rating 0
                                                                                    of 5</span><!----></label><input
                                                                                class="v-rating__hidden"
                                                                                name="v-rating-17"
                                                                                id="v-rating-17-0" type="radio"
                                                                                tabindex="-1" readonly=""
                                                                                value="0">
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-17-1"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            1 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 1 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-17"
                                                                                        id="v-rating-17-1"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="1"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-17-2"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            2 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 2 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-17"
                                                                                        id="v-rating-17-2"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="2"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-17-3"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            3 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 3 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-17"
                                                                                        id="v-rating-17-3"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="3"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-17-4"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            4 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 4 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-17"
                                                                                        id="v-rating-17-4"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="4"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-17-5"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            5 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 5 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-17"
                                                                                        id="v-rating-17-5"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="5"></div><!---->
                                                                            </div>
                                                                        </div>
                                                                        <div data-v-2b801d02=""
                                                                            class="d-flex align-center gap-x-3">
                                                                            <div data-v-2b801d02=""
                                                                                class="v-avatar v-theme--dark v-avatar--density-default v-avatar--variant-flat"
                                                                                style="width: 32px; height: 32px;">
                                                                                <div class="v-responsive v-img v-img--booting"
                                                                                    aria-label="">
                                                                                    <div class="v-responsive__sizer">
                                                                                    </div>
                                                                                    <!----><!----><!----><!----><!----><!---->
                                                                                </div><!----><span
                                                                                    class="v-avatar__underlay"></span>
                                                                            </div>
                                                                            <div data-v-2b801d02="">
                                                                                <div data-v-2b801d02=""
                                                                                    class="text-body-1 text-high-emphasis font-weight-medium">
                                                                                    Curtis Fletcher</div>
                                                                                <div data-v-2b801d02=""
                                                                                    class="text-body-2 text-disabled">
                                                                                    Design Lead at Dribbble</div>
                                                                            </div>
                                                                        </div>
                                                                    </div><!----><!----><span
                                                                        class="v-card__underlay"></span>
                                                                </div>
                                                            </swiper-slide><swiper-slide data-v-2b801d02=""
                                                                style="width: 243.667px; margin-right: 20px;"
                                                                role="group" aria-label="3 / 10"
                                                                data-swiper-slide-index="2"
                                                                class="swiper-slide-next">
                                                                <div data-v-2b801d02=""
                                                                    class="v-card v-theme--dark v-card--density-default v-card--variant-elevated d-flex h-100 align-stretch">
                                                                    <!---->
                                                                    <div class="v-card__loader">
                                                                        <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                                            role="progressbar" aria-hidden="true"
                                                                            aria-valuemin="0" aria-valuemax="100"
                                                                            style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                            <!---->
                                                                            <div class="v-progress-linear__background bg-primary"
                                                                                style="width: 100%;"></div>
                                                                            <div
                                                                                class="v-progress-linear__indeterminate">
                                                                                <div
                                                                                    class="v-progress-linear__indeterminate long bg-primary">
                                                                                </div>
                                                                                <div
                                                                                    class="v-progress-linear__indeterminate short bg-primary">
                                                                                </div>
                                                                            </div><!---->
                                                                        </div>
                                                                    </div><!----><!---->
                                                                    <div data-v-2b801d02=""
                                                                        class="v-card-text pa-6 d-flex flex-column justify-space-between align-start">
                                                                        <img data-v-2b801d02=""
                                                                            src="/build/assets/logo-3-1cfd7ca2.png"
                                                                            class="mb-3"
                                                                            style="block-size: 1.375rem;">
                                                                        <p data-v-2b801d02=""
                                                                            class="text-body-1 text-high-emphasis">
                                                                            This template is superior in so many ways.
                                                                            The code, the design, the regular updates,
                                                                            the support.. It's the whole package.
                                                                            Excellent Work.</p>
                                                                        <div data-v-2b801d02=""
                                                                            class="v-rating v-rating--readonly v-theme--dark mb-3">
                                                                            <label for="v-rating-23-0"
                                                                                class=""><span
                                                                                    class="v-rating__hidden">Rating 0
                                                                                    of 5</span><!----></label><input
                                                                                class="v-rating__hidden"
                                                                                name="v-rating-23"
                                                                                id="v-rating-23-0" type="radio"
                                                                                tabindex="-1" readonly=""
                                                                                value="0">
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-23-1"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            1 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 1 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-23"
                                                                                        id="v-rating-23-1"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="1"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-23-2"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            2 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 2 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-23"
                                                                                        id="v-rating-23-2"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="2"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-23-3"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            3 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 3 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-23"
                                                                                        id="v-rating-23-3"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="3"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-23-4"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            4 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 4 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-23"
                                                                                        id="v-rating-23-4"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="4"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-23-5"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            5 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 5 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-23"
                                                                                        id="v-rating-23-5"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="5"></div><!---->
                                                                            </div>
                                                                        </div>
                                                                        <div data-v-2b801d02=""
                                                                            class="d-flex align-center gap-x-3">
                                                                            <div data-v-2b801d02=""
                                                                                class="v-avatar v-theme--dark v-avatar--density-default v-avatar--variant-flat"
                                                                                style="width: 32px; height: 32px;">
                                                                                <div class="v-responsive v-img v-img--booting"
                                                                                    aria-label="">
                                                                                    <div class="v-responsive__sizer">
                                                                                    </div>
                                                                                    <!----><!----><!----><!----><!----><!---->
                                                                                </div><!----><span
                                                                                    class="v-avatar__underlay"></span>
                                                                            </div>
                                                                            <div data-v-2b801d02="">
                                                                                <div data-v-2b801d02=""
                                                                                    class="text-body-1 text-high-emphasis font-weight-medium">
                                                                                    Eugenia Moore</div>
                                                                                <div data-v-2b801d02=""
                                                                                    class="text-body-2 text-disabled">
                                                                                    CTO of Airbnb</div>
                                                                            </div>
                                                                        </div>
                                                                    </div><!----><!----><span
                                                                        class="v-card__underlay"></span>
                                                                </div>
                                                            </swiper-slide><swiper-slide data-v-2b801d02=""
                                                                style="width: 243.667px; margin-right: 20px;"
                                                                role="group" aria-label="4 / 10"
                                                                data-swiper-slide-index="3" class="">
                                                                <div data-v-2b801d02=""
                                                                    class="v-card v-theme--dark v-card--density-default v-card--variant-elevated d-flex h-100 align-stretch">
                                                                    <!---->
                                                                    <div class="v-card__loader">
                                                                        <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                                            role="progressbar" aria-hidden="true"
                                                                            aria-valuemin="0" aria-valuemax="100"
                                                                            style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                            <!---->
                                                                            <div class="v-progress-linear__background bg-primary"
                                                                                style="width: 100%;"></div>
                                                                            <div
                                                                                class="v-progress-linear__indeterminate">
                                                                                <div
                                                                                    class="v-progress-linear__indeterminate long bg-primary">
                                                                                </div>
                                                                                <div
                                                                                    class="v-progress-linear__indeterminate short bg-primary">
                                                                                </div>
                                                                            </div><!---->
                                                                        </div>
                                                                    </div><!----><!---->
                                                                    <div data-v-2b801d02=""
                                                                        class="v-card-text pa-6 d-flex flex-column justify-space-between align-start">
                                                                        <img data-v-2b801d02=""
                                                                            src="/build/assets/logo-4-c35f4932.png"
                                                                            class="mb-3"
                                                                            style="block-size: 1.375rem;">
                                                                        <p data-v-2b801d02=""
                                                                            class="text-body-1 text-high-emphasis">All
                                                                            the requirements for developers have been
                                                                            taken into consideration, so I'm able to
                                                                            build any interface I want.</p>
                                                                        <div data-v-2b801d02=""
                                                                            class="v-rating v-rating--readonly v-theme--dark mb-3">
                                                                            <label for="v-rating-29-0"
                                                                                class=""><span
                                                                                    class="v-rating__hidden">Rating 0
                                                                                    of 5</span><!----></label><input
                                                                                class="v-rating__hidden"
                                                                                name="v-rating-29"
                                                                                id="v-rating-29-0" type="radio"
                                                                                tabindex="-1" readonly=""
                                                                                value="0">
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-29-1"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            1 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 1 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-29"
                                                                                        id="v-rating-29-1"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="1"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-29-2"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            2 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 2 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-29"
                                                                                        id="v-rating-29-2"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="2"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-29-3"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            3 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 3 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-29"
                                                                                        id="v-rating-29-3"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="3"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-29-4"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            4 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 4 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-29"
                                                                                        id="v-rating-29-4"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="4"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-29-5"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            5 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 5 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-29"
                                                                                        id="v-rating-29-5"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="5"></div><!---->
                                                                            </div>
                                                                        </div>
                                                                        <div data-v-2b801d02=""
                                                                            class="d-flex align-center gap-x-3">
                                                                            <div data-v-2b801d02=""
                                                                                class="v-avatar v-theme--dark v-avatar--density-default v-avatar--variant-flat"
                                                                                style="width: 32px; height: 32px;">
                                                                                <div class="v-responsive v-img v-img--booting"
                                                                                    aria-label="">
                                                                                    <div class="v-responsive__sizer">
                                                                                    </div>
                                                                                    <!----><!----><!----><!----><!----><!---->
                                                                                </div><!----><span
                                                                                    class="v-avatar__underlay"></span>
                                                                            </div>
                                                                            <div data-v-2b801d02="">
                                                                                <div data-v-2b801d02=""
                                                                                    class="text-body-1 text-high-emphasis font-weight-medium">
                                                                                    Sara Smith</div>
                                                                                <div data-v-2b801d02=""
                                                                                    class="text-body-2 text-disabled">
                                                                                    Founder of Continental</div>
                                                                            </div>
                                                                        </div>
                                                                    </div><!----><!----><span
                                                                        class="v-card__underlay"></span>
                                                                </div>
                                                            </swiper-slide><swiper-slide data-v-2b801d02=""
                                                                style="width: 243.667px; margin-right: 20px;"
                                                                role="group" aria-label="5 / 10"
                                                                data-swiper-slide-index="4" class="">
                                                                <div data-v-2b801d02=""
                                                                    class="v-card v-theme--dark v-card--density-default v-card--variant-elevated d-flex h-100 align-stretch">
                                                                    <!---->
                                                                    <div class="v-card__loader">
                                                                        <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                                            role="progressbar" aria-hidden="true"
                                                                            aria-valuemin="0" aria-valuemax="100"
                                                                            style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                            <!---->
                                                                            <div class="v-progress-linear__background bg-primary"
                                                                                style="width: 100%;"></div>
                                                                            <div
                                                                                class="v-progress-linear__indeterminate">
                                                                                <div
                                                                                    class="v-progress-linear__indeterminate long bg-primary">
                                                                                </div>
                                                                                <div
                                                                                    class="v-progress-linear__indeterminate short bg-primary">
                                                                                </div>
                                                                            </div><!---->
                                                                        </div>
                                                                    </div><!----><!---->
                                                                    <div data-v-2b801d02=""
                                                                        class="v-card-text pa-6 d-flex flex-column justify-space-between align-start">
                                                                        <img data-v-2b801d02=""
                                                                            src="/build/assets/logo-3-1cfd7ca2.png"
                                                                            class="mb-3"
                                                                            style="block-size: 1.375rem;">
                                                                        <p data-v-2b801d02=""
                                                                            class="text-body-1 text-high-emphasis">
                                                                            Materio is awesome, and I particularly enjoy
                                                                            knowing that if I get stuck on something.
                                                                        </p>
                                                                        <div data-v-2b801d02=""
                                                                            class="v-rating v-rating--readonly v-theme--dark mb-3">
                                                                            <label for="v-rating-35-0"
                                                                                class=""><span
                                                                                    class="v-rating__hidden">Rating 0
                                                                                    of 5</span><!----></label><input
                                                                                class="v-rating__hidden"
                                                                                name="v-rating-35"
                                                                                id="v-rating-35-0" type="radio"
                                                                                tabindex="-1" readonly=""
                                                                                value="0">
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-35-1"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            1 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 1 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-35"
                                                                                        id="v-rating-35-1"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="1"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-35-2"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            2 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 2 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-35"
                                                                                        id="v-rating-35-2"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="2"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-35-3"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            3 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 3 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-35"
                                                                                        id="v-rating-35-3"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="3"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-35-4"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            4 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 4 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-35"
                                                                                        id="v-rating-35-4"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="4"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-35-5"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            5 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 5 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-35"
                                                                                        id="v-rating-35-5"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="5"></div><!---->
                                                                            </div>
                                                                        </div>
                                                                        <div data-v-2b801d02=""
                                                                            class="d-flex align-center gap-x-3">
                                                                            <div data-v-2b801d02=""
                                                                                class="v-avatar v-theme--dark v-avatar--density-default v-avatar--variant-flat"
                                                                                style="width: 32px; height: 32px;">
                                                                                <div class="v-responsive v-img v-img--booting"
                                                                                    aria-label="">
                                                                                    <div class="v-responsive__sizer">
                                                                                    </div>
                                                                                    <!----><!----><!----><!----><!----><!---->
                                                                                </div><!----><span
                                                                                    class="v-avatar__underlay"></span>
                                                                            </div>
                                                                            <div data-v-2b801d02="">
                                                                                <div data-v-2b801d02=""
                                                                                    class="text-body-1 text-high-emphasis font-weight-medium">
                                                                                    Tommy haffman</div>
                                                                                <div data-v-2b801d02=""
                                                                                    class="text-body-2 text-disabled">
                                                                                    Founder of Levis</div>
                                                                            </div>
                                                                        </div>
                                                                    </div><!----><!----><span
                                                                        class="v-card__underlay"></span>
                                                                </div>
                                                            </swiper-slide><swiper-slide data-v-2b801d02=""
                                                                style="width: 243.667px; margin-right: 20px;"
                                                                role="group" aria-label="6 / 10"
                                                                data-swiper-slide-index="5" class="">
                                                                <div data-v-2b801d02=""
                                                                    class="v-card v-theme--dark v-card--density-default v-card--variant-elevated d-flex h-100 align-stretch">
                                                                    <!---->
                                                                    <div class="v-card__loader">
                                                                        <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                                            role="progressbar" aria-hidden="true"
                                                                            aria-valuemin="0" aria-valuemax="100"
                                                                            style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                            <!---->
                                                                            <div class="v-progress-linear__background bg-primary"
                                                                                style="width: 100%;"></div>
                                                                            <div
                                                                                class="v-progress-linear__indeterminate">
                                                                                <div
                                                                                    class="v-progress-linear__indeterminate long bg-primary">
                                                                                </div>
                                                                                <div
                                                                                    class="v-progress-linear__indeterminate short bg-primary">
                                                                                </div>
                                                                            </div><!---->
                                                                        </div>
                                                                    </div><!----><!---->
                                                                    <div data-v-2b801d02=""
                                                                        class="v-card-text pa-6 d-flex flex-column justify-space-between align-start">
                                                                        <img data-v-2b801d02=""
                                                                            src="/build/assets/logo-1-866d6fdb.png"
                                                                            class="mb-3"
                                                                            style="block-size: 1.375rem;">
                                                                        <p data-v-2b801d02=""
                                                                            class="text-body-1 text-high-emphasis">
                                                                            I've never used a theme as versatile and
                                                                            flexible as Vuexy. It's my go to for
                                                                            building dashboard sites on almost any
                                                                            project.</p>
                                                                        <div data-v-2b801d02=""
                                                                            class="v-rating v-rating--readonly v-theme--dark mb-3">
                                                                            <label for="v-rating-41-0"
                                                                                class=""><span
                                                                                    class="v-rating__hidden">Rating 0
                                                                                    of 5</span><!----></label><input
                                                                                class="v-rating__hidden"
                                                                                name="v-rating-41"
                                                                                id="v-rating-41-0" type="radio"
                                                                                tabindex="-1" readonly=""
                                                                                value="0">
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-41-1"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            1 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 1 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-41"
                                                                                        id="v-rating-41-1"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="1"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-41-2"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            2 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 2 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-41"
                                                                                        id="v-rating-41-2"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="2"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-41-3"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            3 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 3 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-41"
                                                                                        id="v-rating-41-3"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="3"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-41-4"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            4 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 4 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-41"
                                                                                        id="v-rating-41-4"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="4"></div><!---->
                                                                            </div>
                                                                            <div class="v-rating__wrapper"><!---->
                                                                                <div class="v-rating__item"><label
                                                                                        for="v-rating-41-5"
                                                                                        class=""><span
                                                                                            class="v-rating__hidden">Rating
                                                                                            5 of 5</span><button
                                                                                            type="button"
                                                                                            class="v-btn v-btn--icon v-theme--dark text-warning v-btn--density-compact v-btn--size-default v-btn--variant-plain"
                                                                                            aria-label="Rating 5 of 5"><span
                                                                                                class="v-btn__overlay"></span><span
                                                                                                class="v-btn__underlay"></span><!----><span
                                                                                                class="v-btn__content"
                                                                                                data-no-activator=""><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                    aria-hidden="true"
                                                                                                    role="img"
                                                                                                    tag="i"
                                                                                                    class="v-icon notranslate v-theme--dark v-icon--size-default"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    viewBox="0 0 16 16"></svg></span><!----><!----></button></label><input
                                                                                        class="v-rating__hidden"
                                                                                        name="v-rating-41"
                                                                                        id="v-rating-41-5"
                                                                                        type="radio"
                                                                                        tabindex="-1"
                                                                                        readonly=""
                                                                                        value="5"></div><!---->
                                                                            </div>
                                                                        </div>
                                                                        <div data-v-2b801d02=""
                                                                            class="d-flex align-center gap-x-3">
                                                                            <div data-v-2b801d02=""
                                                                                class="v-avatar v-theme--dark v-avatar--density-default v-avatar--variant-flat"
                                                                                style="width: 32px; height: 32px;">
                                                                                <div class="v-responsive v-img v-img--booting"
                                                                                    aria-label="">
                                                                                    <div class="v-responsive__sizer">
                                                                                    </div>
                                                                                    <!----><!----><!----><!----><!----><!---->
                                                                                </div><!----><span
                                                                                    class="v-avatar__underlay"></span>
                                                                            </div>
                                                                            <div data-v-2b801d02="">
                                                                                <div data-v-2b801d02=""
                                                                                    class="text-body-1 text-high-emphasis font-weight-medium">
                                                                                    Eugenia Moore</div>
                                                                                <div data-v-2b801d02=""
                                                                                    class="text-body-2 text-disabled">
                                                                                    Founder of Hubspot</div>
                                                                            </div>
                                                                        </div>
                                                                    </div><!----><!----><span
                                                                        class="v-card__underlay"></span>
                                                                </div>
                                                            </swiper-slide></swiper-container></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-2b801d02="" class="swiper-brands-carousel mb-4 mt-8">
                                            <swiper-container data-v-2b801d02="" slides-per-view="2"
                                                events-prefix="swiper-"><swiper-slide data-v-2b801d02=""
                                                    style="width: 233.6px;" role="group" aria-label="1 / 5"
                                                    class="swiper-slide-active">
                                                    <div data-v-2b801d02=""
                                                        class="v-responsive v-img v-img--booting"
                                                        style="height: 38px;">
                                                        <div class="v-responsive__sizer"></div>
                                                        <!----><!----><!----><!----><!----><!---->
                                                    </div>
                                                </swiper-slide><swiper-slide data-v-2b801d02=""
                                                    style="width: 233.6px;" role="group" aria-label="2 / 5"
                                                    class="swiper-slide-next">
                                                    <div data-v-2b801d02=""
                                                        class="v-responsive v-img v-img--booting"
                                                        style="height: 38px;">
                                                        <div class="v-responsive__sizer"></div>
                                                        <!----><!----><!----><!----><!----><!---->
                                                    </div>
                                                </swiper-slide><swiper-slide data-v-2b801d02=""
                                                    style="width: 233.6px;" role="group" aria-label="3 / 5">
                                                    <div data-v-2b801d02=""
                                                        class="v-responsive v-img v-img--booting"
                                                        style="height: 38px;">
                                                        <div class="v-responsive__sizer"></div>
                                                        <!----><!----><!----><!----><!----><!---->
                                                    </div>
                                                </swiper-slide><swiper-slide data-v-2b801d02=""
                                                    style="width: 233.6px;" role="group" aria-label="4 / 5">
                                                    <div data-v-2b801d02=""
                                                        class="v-responsive v-img v-img--booting"
                                                        style="height: 38px;">
                                                        <div class="v-responsive__sizer"></div>
                                                        <!----><!----><!----><!----><!----><!---->
                                                    </div>
                                                </swiper-slide><swiper-slide data-v-2b801d02="" role="group"
                                                    aria-label="5 / 5" style="width: 233.6px;">
                                                    <div data-v-2b801d02=""
                                                        class="v-responsive v-img v-img--booting"
                                                        style="height: 38px;">
                                                        <div class="v-responsive__sizer"></div>
                                                        <!----><!----><!----><!----><!----><!---->
                                                    </div>
                                                </swiper-slide></swiper-container></div>
                                    </div>
                                    <hr data-v-2b801d02=""
                                        class="v-divider v-theme--dark w-100 position-absolute swiper-divider"
                                        aria-orientation="horizontal" role="separator">
                                </div>
                            </div>
                            <div style="background-color: rgb(var(--v-theme-surface));">
                                <div data-v-ca109695="" class="v-container v-locale--is-ltr" id="team">
                                    <div data-v-ca109695="" class="our-team">
                                        <div data-v-ca109695=""
                                            class="headers d-flex justify-center flex-column align-center"><span
                                                data-v-ca109695=""
                                                class="v-chip v-chip--label v-theme--dark text-primary v-chip--density-default v-chip--size-small v-chip--variant-tonal mb-4"
                                                draggable="false"><!----><span
                                                    class="v-chip__underlay"></span><!----><!---->
                                                <div class="v-chip__content"> OUR GREAT TEAM </div><!----><!---->
                                            </span>
                                            <div data-v-ca109695=""
                                                class="d-flex align-center text-h3 mb-1 flex-wrap justify-center">
                                                <div data-v-ca109695="" class="position-relative me-2">
                                                    <h3 data-v-ca109695="" class="section-title">Supported</h3>
                                                </div> by Real People
                                            </div>
                                            <p data-v-ca109695="" class="text-center">Who is behind these
                                                great-looking interfaces?</p>
                                        </div>
                                        <div data-v-ca109695="" class="v-row">
                                            <div data-v-ca109695="" class="v-col-sm-6 v-col-lg-3 v-col-12">
                                                <div data-v-ca109695=""
                                                    class="v-card v-card--flat v-theme--dark v-card--density-default v-card--variant-elevated position-relative overflow-visible team-card mb-12"
                                                    style="min-width: 262px;"><!---->
                                                    <div class="v-card__loader">
                                                        <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                            role="progressbar" aria-hidden="true"
                                                            aria-valuemin="0" aria-valuemax="100"
                                                            style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                            <!---->
                                                            <div class="v-progress-linear__background bg-primary"
                                                                style="width: 100%;"></div>
                                                            <div class="v-progress-linear__indeterminate">
                                                                <div
                                                                    class="v-progress-linear__indeterminate long bg-primary">
                                                                </div>
                                                                <div
                                                                    class="v-progress-linear__indeterminate short bg-primary">
                                                                </div>
                                                            </div><!---->
                                                        </div>
                                                    </div><!----><!---->
                                                    <div data-v-ca109695=""
                                                        style="max-height: 185px; min-height: 185px; border-radius: 90px 20px 0px 0px; background-color: rgba(144, 85, 253, 0.16);">
                                                        <div data-v-ca109695=""
                                                            class="v-responsive v-img v-img--booting team-image"
                                                            style="height: 240px;">
                                                            <div class="v-responsive__sizer"></div>
                                                            <!----><!----><!----><!----><!----><!---->
                                                        </div>
                                                    </div>
                                                    <div data-v-ca109695="" class="v-card-text text-center pa-4"
                                                        style="border: 1px solid rgba(144, 85, 253, 0.5); border-block-start: none; border-radius: 0px 0px 6px 6px; box-sizing: border-box;">
                                                        <h5 data-v-ca109695="" class="text-h5">Sophie Gilbert</h5>
                                                        <span data-v-ca109695=""
                                                            class="text-body-1 text-disabled">Project Manager</span>
                                                    </div><!----><!----><span class="v-card__underlay"></span>
                                                </div>
                                            </div>
                                            <div data-v-ca109695="" class="v-col-sm-6 v-col-lg-3 v-col-12">
                                                <div data-v-ca109695=""
                                                    class="v-card v-card--flat v-theme--dark v-card--density-default v-card--variant-elevated position-relative overflow-visible team-card mb-12"
                                                    style="min-width: 262px;"><!---->
                                                    <div class="v-card__loader">
                                                        <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                            role="progressbar" aria-hidden="true"
                                                            aria-valuemin="0" aria-valuemax="100"
                                                            style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                            <!---->
                                                            <div class="v-progress-linear__background bg-primary"
                                                                style="width: 100%;"></div>
                                                            <div class="v-progress-linear__indeterminate">
                                                                <div
                                                                    class="v-progress-linear__indeterminate long bg-primary">
                                                                </div>
                                                                <div
                                                                    class="v-progress-linear__indeterminate short bg-primary">
                                                                </div>
                                                            </div><!---->
                                                        </div>
                                                    </div><!----><!---->
                                                    <div data-v-ca109695=""
                                                        style="max-height: 185px; min-height: 185px; border-radius: 90px 20px 0px 0px; background-color: rgba(22, 177, 255, 0.16);">
                                                        <div data-v-ca109695=""
                                                            class="v-responsive v-img v-img--booting team-image"
                                                            style="height: 240px;">
                                                            <div class="v-responsive__sizer"></div>
                                                            <!----><!----><!----><!----><!----><!---->
                                                        </div>
                                                    </div>
                                                    <div data-v-ca109695="" class="v-card-text text-center pa-4"
                                                        style="border: 1px solid rgba(22, 177, 255, 0.5); border-block-start: none; border-radius: 0px 0px 6px 6px; box-sizing: border-box;">
                                                        <h5 data-v-ca109695="" class="text-h5">Paul Miles</h5><span
                                                            data-v-ca109695="" class="text-body-1 text-disabled">UI
                                                            Designer</span>
                                                    </div><!----><!----><span class="v-card__underlay"></span>
                                                </div>
                                            </div>
                                            <div data-v-ca109695="" class="v-col-sm-6 v-col-lg-3 v-col-12">
                                                <div data-v-ca109695=""
                                                    class="v-card v-card--flat v-theme--dark v-card--density-default v-card--variant-elevated position-relative overflow-visible team-card mb-12"
                                                    style="min-width: 262px;"><!---->
                                                    <div class="v-card__loader">
                                                        <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                            role="progressbar" aria-hidden="true"
                                                            aria-valuemin="0" aria-valuemax="100"
                                                            style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                            <!---->
                                                            <div class="v-progress-linear__background bg-primary"
                                                                style="width: 100%;"></div>
                                                            <div class="v-progress-linear__indeterminate">
                                                                <div
                                                                    class="v-progress-linear__indeterminate long bg-primary">
                                                                </div>
                                                                <div
                                                                    class="v-progress-linear__indeterminate short bg-primary">
                                                                </div>
                                                            </div><!---->
                                                        </div>
                                                    </div><!----><!---->
                                                    <div data-v-ca109695=""
                                                        style="max-height: 185px; min-height: 185px; border-radius: 90px 20px 0px 0px; background-color: rgba(255, 76, 81, 0.16);">
                                                        <div data-v-ca109695=""
                                                            class="v-responsive v-img v-img--booting team-image"
                                                            style="height: 240px;">
                                                            <div class="v-responsive__sizer"></div>
                                                            <!----><!----><!----><!----><!----><!---->
                                                        </div>
                                                    </div>
                                                    <div data-v-ca109695="" class="v-card-text text-center pa-4"
                                                        style="border: 1px solid rgba(255, 76, 81, 0.5); border-block-start: none; border-radius: 0px 0px 6px 6px; box-sizing: border-box;">
                                                        <h5 data-v-ca109695="" class="text-h5">Nannie Ford</h5><span
                                                            data-v-ca109695=""
                                                            class="text-body-1 text-disabled">Development Lead</span>
                                                    </div><!----><!----><span class="v-card__underlay"></span>
                                                </div>
                                            </div>
                                            <div data-v-ca109695="" class="v-col-sm-6 v-col-lg-3 v-col-12">
                                                <div data-v-ca109695=""
                                                    class="v-card v-card--flat v-theme--dark v-card--density-default v-card--variant-elevated position-relative overflow-visible team-card mb-12"
                                                    style="min-width: 262px;"><!---->
                                                    <div class="v-card__loader">
                                                        <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                            role="progressbar" aria-hidden="true"
                                                            aria-valuemin="0" aria-valuemax="100"
                                                            style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                            <!---->
                                                            <div class="v-progress-linear__background bg-primary"
                                                                style="width: 100%;"></div>
                                                            <div class="v-progress-linear__indeterminate">
                                                                <div
                                                                    class="v-progress-linear__indeterminate long bg-primary">
                                                                </div>
                                                                <div
                                                                    class="v-progress-linear__indeterminate short bg-primary">
                                                                </div>
                                                            </div><!---->
                                                        </div>
                                                    </div><!----><!---->
                                                    <div data-v-ca109695=""
                                                        style="max-height: 185px; min-height: 185px; border-radius: 90px 20px 0px 0px; background-color: rgba(86, 202, 0, 0.16);">
                                                        <div data-v-ca109695=""
                                                            class="v-responsive v-img v-img--booting team-image"
                                                            style="height: 240px;">
                                                            <div class="v-responsive__sizer"></div>
                                                            <!----><!----><!----><!----><!----><!---->
                                                        </div>
                                                    </div>
                                                    <div data-v-ca109695="" class="v-card-text text-center pa-4"
                                                        style="border: 1px solid rgba(86, 202, 0, 0.5); border-block-start: none; border-radius: 0px 0px 6px 6px; box-sizing: border-box;">
                                                        <h5 data-v-ca109695="" class="text-h5">Chris Watkins</h5>
                                                        <span data-v-ca109695=""
                                                            class="text-body-1 text-disabled">Marketing Manager</span>
                                                    </div><!----><!----><span class="v-card__underlay"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="background-color: rgb(var(--v-theme-surface));">
                                <div data-v-ce8c2363="" id="pricing-plan">
                                    <div data-v-ce8c2363="" class="v-container v-locale--is-ltr">
                                        <div data-v-ce8c2363="" class="pricing-plans">
                                            <div data-v-ce8c2363=""
                                                class="headers d-flex justify-center flex-column align-center mb-16 flex-wrap">
                                                <span data-v-ce8c2363=""
                                                    class="v-chip v-chip--label v-theme--dark text-primary v-chip--density-default v-chip--size-small v-chip--variant-tonal mb-4"
                                                    draggable="false"><!----><span
                                                        class="v-chip__underlay"></span><!----><!---->
                                                    <div class="v-chip__content"> Pricing Plans </div><!----><!---->
                                                </span>
                                                <div data-v-ce8c2363=""
                                                    class="d-flex align-center text-h3 mb-1 flex-wrap justify-center">
                                                    <div data-v-ce8c2363="" class="position-relative me-2">
                                                        <h3 data-v-ce8c2363="" class="section-title">Tailored design
                                                            plans</h3>
                                                    </div> designed for you
                                                </div>
                                                <div data-v-ce8c2363="" class="text-center">
                                                    <p data-v-ce8c2363="" class="mb-0"> All plans include 40+
                                                        advanced tools and features to boost your product. </p>
                                                    <p data-v-ce8c2363="" class="mb-0">Choose the best plan to fit
                                                        your needs.</p>
                                                </div>
                                            </div>
                                            <div data-v-ce8c2363=""
                                                class="d-flex align-center justify-center mx-auto my-10"><label
                                                    data-v-ce8c2363="" class="v-label me-2 font-weight-medium"
                                                    for="pricing-plan-toggle"><!----> Pay Monthly </label>
                                                <div data-v-ce8c2363="" class="position-relative">
                                                    <div data-v-ce8c2363=""
                                                        class="v-input v-input--horizontal v-input--center-affix v-input--density-default v-locale--is-ltr v-input--dirty v-switch v-switch--inset">
                                                        <!---->
                                                        <div class="v-input__control">
                                                            <div
                                                                class="v-selection-control v-selection-control--dirty v-selection-control--density-default">
                                                                <div
                                                                    class="v-selection-control__wrapper text-primary">
                                                                    <div class="v-switch__track bg-primary"></div>
                                                                    <div class="v-selection-control__input"><input
                                                                            id="pricing-plan-toggle"
                                                                            aria-disabled="false" type="checkbox"
                                                                            aria-describedby="pricing-plan-toggle-messages"
                                                                            value="true">
                                                                        <div class="v-switch__thumb"><!----></div>
                                                                    </div>
                                                                </div><label class="v-label v-label--clickable"
                                                                    for="pricing-plan-toggle"><!---->Pay
                                                                    Annual</label>
                                                            </div>
                                                        </div><!----><!---->
                                                    </div>
                                                    <div data-v-ce8c2363=""
                                                        class="position-absolute pricing-plan-arrow d-md-flex d-none">
                                                        <div data-v-ce8c2363=""
                                                            class="v-responsive v-img v-img--booting flip-in-rtl"
                                                            style="height: 42px; width: 60px;">
                                                            <div class="v-responsive__sizer"></div>
                                                            <!----><!----><!----><!----><!----><!---->
                                                        </div>
                                                        <div data-v-ce8c2363=""
                                                            class="text-no-wrap font-weight-medium">Save 25%</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-ce8c2363="" class="v-row">
                                                <div data-v-ce8c2363="" class="v-col">
                                                    <div data-v-ce8c2363=""
                                                        class="v-card v-theme--dark v-card--density-default v-card--variant-elevated">
                                                        <!---->
                                                        <div class="v-card__loader">
                                                            <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                                role="progressbar" aria-hidden="true"
                                                                aria-valuemin="0" aria-valuemax="100"
                                                                style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                <!---->
                                                                <div class="v-progress-linear__background bg-primary"
                                                                    style="width: 100%;"></div>
                                                                <div class="v-progress-linear__indeterminate">
                                                                    <div
                                                                        class="v-progress-linear__indeterminate long bg-primary">
                                                                    </div>
                                                                    <div
                                                                        class="v-progress-linear__indeterminate short bg-primary">
                                                                    </div>
                                                                </div><!---->
                                                            </div>
                                                        </div><!----><!---->
                                                        <div data-v-ce8c2363="" class="v-card-text pa-8">
                                                            <div data-v-ce8c2363=""
                                                                class="v-responsive v-img v-img--booting mx-auto mb-8"
                                                                style="height: 80px; width: 80px;">
                                                                <div class="v-responsive__sizer"></div>
                                                                <!----><!----><!----><!----><!----><!---->
                                                            </div>
                                                            <h4 data-v-ce8c2363="" class="text-h4 text-center">Basic
                                                            </h4>
                                                            <div data-v-ce8c2363=""
                                                                class="d-flex justify-center mb-8 position-relative">
                                                                <div data-v-ce8c2363="" class="d-flex align-end">
                                                                    <h1 data-v-ce8c2363=""
                                                                        class="text-h1 font-weight-bold"><span
                                                                            data-v-ce8c2363=""
                                                                            class="text-primary">$14</span></h1><span
                                                                        data-v-ce8c2363=""
                                                                        class="text-disabled mb-2">/mo</span>
                                                                </div><span data-v-ce8c2363=""
                                                                    class="annual-price-text position-absolute text-sm text-disabled">USD
                                                                    168/Year</span>
                                                            </div>
                                                            <div data-v-ce8c2363=""
                                                                class="v-list v-theme--dark v-list--density-comfortable v-list--one-line card-list"
                                                                tabindex="0" role="listbox">
                                                                <div data-v-ce8c2363=""
                                                                    class="v-list-item v-theme--dark v-list-item--density-comfortable v-list-item--one-line v-list-item--variant-text">
                                                                    <!----><span class="v-list-item__underlay"></span>
                                                                    <div class="v-list-item__prepend">
                                                                        <div data-v-ce8c2363=""
                                                                            class="v-avatar v-theme--dark text-primary v-avatar--density-default v-avatar--variant-tonal me-3"
                                                                            style="width: 16px; height: 16px;"><svg
                                                                                data-v-ce8c2363=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                aria-hidden="true" role="img"
                                                                                tag="i"
                                                                                class="v-icon notranslate v-theme--dark text-primary iconify iconify--tabler"
                                                                                width="1em" height="1em"
                                                                                viewBox="0 0 24 24"
                                                                                style="font-size: 12px; height: 12px; width: 12px;">
                                                                                <path fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="m5 12l5 5L20 7"></path>
                                                                            </svg><!----><span
                                                                                class="v-avatar__underlay"></span>
                                                                        </div>
                                                                        <div data-v-ce8c2363=""
                                                                            class="text-body-1 font-weight-medium text-high-emphasis">
                                                                            Timeline</div>
                                                                        <div class="v-list-item__spacer"></div>
                                                                    </div>
                                                                    <div class="v-list-item__content"
                                                                        data-no-activator=""><!----><!----><!---->
                                                                    </div><!---->
                                                                </div>
                                                                <div data-v-ce8c2363=""
                                                                    class="v-list-item v-theme--dark v-list-item--density-comfortable v-list-item--one-line v-list-item--variant-text">
                                                                    <!----><span class="v-list-item__underlay"></span>
                                                                    <div class="v-list-item__prepend">
                                                                        <div data-v-ce8c2363=""
                                                                            class="v-avatar v-theme--dark text-primary v-avatar--density-default v-avatar--variant-tonal me-3"
                                                                            style="width: 16px; height: 16px;"><svg
                                                                                data-v-ce8c2363=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                aria-hidden="true" role="img"
                                                                                tag="i"
                                                                                class="v-icon notranslate v-theme--dark text-primary iconify iconify--tabler"
                                                                                width="1em" height="1em"
                                                                                viewBox="0 0 24 24"
                                                                                style="font-size: 12px; height: 12px; width: 12px;">
                                                                                <path fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="m5 12l5 5L20 7"></path>
                                                                            </svg><!----><span
                                                                                class="v-avatar__underlay"></span>
                                                                        </div>
                                                                        <div data-v-ce8c2363=""
                                                                            class="text-body-1 font-weight-medium text-high-emphasis">
                                                                            Basic search</div>
                                                                        <div class="v-list-item__spacer"></div>
                                                                    </div>
                                                                    <div class="v-list-item__content"
                                                                        data-no-activator=""><!----><!----><!---->
                                                                    </div><!---->
                                                                </div>
                                                                <div data-v-ce8c2363=""
                                                                    class="v-list-item v-theme--dark v-list-item--density-comfortable v-list-item--one-line v-list-item--variant-text">
                                                                    <!----><span class="v-list-item__underlay"></span>
                                                                    <div class="v-list-item__prepend">
                                                                        <div data-v-ce8c2363=""
                                                                            class="v-avatar v-theme--dark text-primary v-avatar--density-default v-avatar--variant-tonal me-3"
                                                                            style="width: 16px; height: 16px;"><svg
                                                                                data-v-ce8c2363=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                aria-hidden="true" role="img"
                                                                                tag="i"
                                                                                class="v-icon notranslate v-theme--dark text-primary iconify iconify--tabler"
                                                                                width="1em" height="1em"
                                                                                viewBox="0 0 24 24"
                                                                                style="font-size: 12px; height: 12px; width: 12px;">
                                                                                <path fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="m5 12l5 5L20 7"></path>
                                                                            </svg><!----><span
                                                                                class="v-avatar__underlay"></span>
                                                                        </div>
                                                                        <div data-v-ce8c2363=""
                                                                            class="text-body-1 font-weight-medium text-high-emphasis">
                                                                            Live chat widget</div>
                                                                        <div class="v-list-item__spacer"></div>
                                                                    </div>
                                                                    <div class="v-list-item__content"
                                                                        data-no-activator=""><!----><!----><!---->
                                                                    </div><!---->
                                                                </div>
                                                                <div data-v-ce8c2363=""
                                                                    class="v-list-item v-theme--dark v-list-item--density-comfortable v-list-item--one-line v-list-item--variant-text">
                                                                    <!----><span class="v-list-item__underlay"></span>
                                                                    <div class="v-list-item__prepend">
                                                                        <div data-v-ce8c2363=""
                                                                            class="v-avatar v-theme--dark text-primary v-avatar--density-default v-avatar--variant-tonal me-3"
                                                                            style="width: 16px; height: 16px;"><svg
                                                                                data-v-ce8c2363=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                aria-hidden="true" role="img"
                                                                                tag="i"
                                                                                class="v-icon notranslate v-theme--dark text-primary iconify iconify--tabler"
                                                                                width="1em" height="1em"
                                                                                viewBox="0 0 24 24"
                                                                                style="font-size: 12px; height: 12px; width: 12px;">
                                                                                <path fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="m5 12l5 5L20 7"></path>
                                                                            </svg><!----><span
                                                                                class="v-avatar__underlay"></span>
                                                                        </div>
                                                                        <div data-v-ce8c2363=""
                                                                            class="text-body-1 font-weight-medium text-high-emphasis">
                                                                            Email marketing</div>
                                                                        <div class="v-list-item__spacer"></div>
                                                                    </div>
                                                                    <div class="v-list-item__content"
                                                                        data-no-activator=""><!----><!----><!---->
                                                                    </div><!---->
                                                                </div>
                                                                <div data-v-ce8c2363=""
                                                                    class="v-list-item v-theme--dark v-list-item--density-comfortable v-list-item--one-line v-list-item--variant-text">
                                                                    <!----><span class="v-list-item__underlay"></span>
                                                                    <div class="v-list-item__prepend">
                                                                        <div data-v-ce8c2363=""
                                                                            class="v-avatar v-theme--dark text-primary v-avatar--density-default v-avatar--variant-tonal me-3"
                                                                            style="width: 16px; height: 16px;"><svg
                                                                                data-v-ce8c2363=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                aria-hidden="true" role="img"
                                                                                tag="i"
                                                                                class="v-icon notranslate v-theme--dark text-primary iconify iconify--tabler"
                                                                                width="1em" height="1em"
                                                                                viewBox="0 0 24 24"
                                                                                style="font-size: 12px; height: 12px; width: 12px;">
                                                                                <path fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="m5 12l5 5L20 7"></path>
                                                                            </svg><!----><span
                                                                                class="v-avatar__underlay"></span>
                                                                        </div>
                                                                        <div data-v-ce8c2363=""
                                                                            class="text-body-1 font-weight-medium text-high-emphasis">
                                                                            Custom Forms</div>
                                                                        <div class="v-list-item__spacer"></div>
                                                                    </div>
                                                                    <div class="v-list-item__content"
                                                                        data-no-activator=""><!----><!----><!---->
                                                                    </div><!---->
                                                                </div>
                                                                <div data-v-ce8c2363=""
                                                                    class="v-list-item v-theme--dark v-list-item--density-comfortable v-list-item--one-line v-list-item--variant-text">
                                                                    <!----><span class="v-list-item__underlay"></span>
                                                                    <div class="v-list-item__prepend">
                                                                        <div data-v-ce8c2363=""
                                                                            class="v-avatar v-theme--dark text-primary v-avatar--density-default v-avatar--variant-tonal me-3"
                                                                            style="width: 16px; height: 16px;"><svg
                                                                                data-v-ce8c2363=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                aria-hidden="true" role="img"
                                                                                tag="i"
                                                                                class="v-icon notranslate v-theme--dark text-primary iconify iconify--tabler"
                                                                                width="1em" height="1em"
                                                                                viewBox="0 0 24 24"
                                                                                style="font-size: 12px; height: 12px; width: 12px;">
                                                                                <path fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="m5 12l5 5L20 7"></path>
                                                                            </svg><!----><span
                                                                                class="v-avatar__underlay"></span>
                                                                        </div>
                                                                        <div data-v-ce8c2363=""
                                                                            class="text-body-1 font-weight-medium text-high-emphasis">
                                                                            Traffic analytics</div>
                                                                        <div class="v-list-item__spacer"></div>
                                                                    </div>
                                                                    <div class="v-list-item__content"
                                                                        data-no-activator=""><!----><!----><!---->
                                                                    </div><!---->
                                                                </div>
                                                                <div data-v-ce8c2363=""
                                                                    class="v-list-item v-theme--dark v-list-item--density-comfortable v-list-item--one-line v-list-item--variant-text">
                                                                    <!----><span class="v-list-item__underlay"></span>
                                                                    <div class="v-list-item__prepend">
                                                                        <div data-v-ce8c2363=""
                                                                            class="v-avatar v-theme--dark text-primary v-avatar--density-default v-avatar--variant-tonal me-3"
                                                                            style="width: 16px; height: 16px;"><svg
                                                                                data-v-ce8c2363=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                aria-hidden="true" role="img"
                                                                                tag="i"
                                                                                class="v-icon notranslate v-theme--dark text-primary iconify iconify--tabler"
                                                                                width="1em" height="1em"
                                                                                viewBox="0 0 24 24"
                                                                                style="font-size: 12px; height: 12px; width: 12px;">
                                                                                <path fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="m5 12l5 5L20 7"></path>
                                                                            </svg><!----><span
                                                                                class="v-avatar__underlay"></span>
                                                                        </div>
                                                                        <div data-v-ce8c2363=""
                                                                            class="text-body-1 font-weight-medium text-high-emphasis">
                                                                            Basic Support</div>
                                                                        <div class="v-list-item__spacer"></div>
                                                                    </div>
                                                                    <div class="v-list-item__content"
                                                                        data-no-activator=""><!----><!----><!---->
                                                                    </div><!---->
                                                                </div>
                                                            </div><a data-v-ce8c2363=""
                                                                class="v-btn v-btn--active v-btn--block v-theme--dark text-primary v-btn--density-default v-btn--size-default v-btn--variant-tonal mt-8"
                                                                href="/"><span
                                                                    class="v-btn__overlay"></span><span
                                                                    class="v-btn__underlay"></span><!----><span
                                                                    class="v-btn__content" data-no-activator=""> Get
                                                                    Started </span><!----><!----></a>
                                                        </div><!----><!----><span class="v-card__underlay"></span>
                                                    </div>
                                                </div>
                                                <div data-v-ce8c2363="" class="v-col">
                                                    <div data-v-ce8c2363=""
                                                        class="v-card v-theme--dark v-card--density-default v-card--variant-elevated"
                                                        style="border: 2px solid rgb(var(--v-theme-primary));"><!---->
                                                        <div class="v-card__loader">
                                                            <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                                role="progressbar" aria-hidden="true"
                                                                aria-valuemin="0" aria-valuemax="100"
                                                                style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                <!---->
                                                                <div class="v-progress-linear__background bg-primary"
                                                                    style="width: 100%;"></div>
                                                                <div class="v-progress-linear__indeterminate">
                                                                    <div
                                                                        class="v-progress-linear__indeterminate long bg-primary">
                                                                    </div>
                                                                    <div
                                                                        class="v-progress-linear__indeterminate short bg-primary">
                                                                    </div>
                                                                </div><!---->
                                                            </div>
                                                        </div><!----><!---->
                                                        <div data-v-ce8c2363="" class="v-card-text pa-8">
                                                            <div data-v-ce8c2363=""
                                                                class="v-responsive v-img v-img--booting mx-auto mb-8"
                                                                style="height: 80px; width: 80px;">
                                                                <div class="v-responsive__sizer"></div>
                                                                <!----><!----><!----><!----><!----><!---->
                                                            </div>
                                                            <h4 data-v-ce8c2363="" class="text-h4 text-center">
                                                                Favourite</h4>
                                                            <div data-v-ce8c2363=""
                                                                class="d-flex justify-center mb-8 position-relative">
                                                                <div data-v-ce8c2363="" class="d-flex align-end">
                                                                    <h1 data-v-ce8c2363=""
                                                                        class="text-h1 font-weight-bold"><span
                                                                            data-v-ce8c2363=""
                                                                            class="text-primary">$22</span></h1><span
                                                                        data-v-ce8c2363=""
                                                                        class="text-disabled mb-2">/mo</span>
                                                                </div><span data-v-ce8c2363=""
                                                                    class="annual-price-text position-absolute text-sm text-disabled">USD
                                                                    264/Year</span>
                                                            </div>
                                                            <div data-v-ce8c2363=""
                                                                class="v-list v-theme--dark v-list--density-comfortable v-list--one-line card-list"
                                                                tabindex="0" role="listbox">
                                                                <div data-v-ce8c2363=""
                                                                    class="v-list-item v-theme--dark v-list-item--density-comfortable v-list-item--one-line v-list-item--variant-text">
                                                                    <!----><span class="v-list-item__underlay"></span>
                                                                    <div class="v-list-item__prepend">
                                                                        <div data-v-ce8c2363=""
                                                                            class="v-avatar v-theme--dark bg-primary v-avatar--density-default v-avatar--variant-elevated me-3"
                                                                            style="width: 16px; height: 16px;"><svg
                                                                                data-v-ce8c2363=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                aria-hidden="true" role="img"
                                                                                tag="i"
                                                                                class="v-icon notranslate v-theme--dark text-white iconify iconify--tabler"
                                                                                width="1em" height="1em"
                                                                                viewBox="0 0 24 24"
                                                                                style="font-size: 12px; height: 12px; width: 12px;">
                                                                                <path fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="m5 12l5 5L20 7"></path>
                                                                            </svg><!----><span
                                                                                class="v-avatar__underlay"></span>
                                                                        </div>
                                                                        <div data-v-ce8c2363=""
                                                                            class="text-body-1 font-weight-medium text-high-emphasis">
                                                                            Everything in basic</div>
                                                                        <div class="v-list-item__spacer"></div>
                                                                    </div>
                                                                    <div class="v-list-item__content"
                                                                        data-no-activator=""><!----><!----><!---->
                                                                    </div><!---->
                                                                </div>
                                                                <div data-v-ce8c2363=""
                                                                    class="v-list-item v-theme--dark v-list-item--density-comfortable v-list-item--one-line v-list-item--variant-text">
                                                                    <!----><span class="v-list-item__underlay"></span>
                                                                    <div class="v-list-item__prepend">
                                                                        <div data-v-ce8c2363=""
                                                                            class="v-avatar v-theme--dark bg-primary v-avatar--density-default v-avatar--variant-elevated me-3"
                                                                            style="width: 16px; height: 16px;"><svg
                                                                                data-v-ce8c2363=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                aria-hidden="true" role="img"
                                                                                tag="i"
                                                                                class="v-icon notranslate v-theme--dark text-white iconify iconify--tabler"
                                                                                width="1em" height="1em"
                                                                                viewBox="0 0 24 24"
                                                                                style="font-size: 12px; height: 12px; width: 12px;">
                                                                                <path fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="m5 12l5 5L20 7"></path>
                                                                            </svg><!----><span
                                                                                class="v-avatar__underlay"></span>
                                                                        </div>
                                                                        <div data-v-ce8c2363=""
                                                                            class="text-body-1 font-weight-medium text-high-emphasis">
                                                                            Timeline with database</div>
                                                                        <div class="v-list-item__spacer"></div>
                                                                    </div>
                                                                    <div class="v-list-item__content"
                                                                        data-no-activator=""><!----><!----><!---->
                                                                    </div><!---->
                                                                </div>
                                                                <div data-v-ce8c2363=""
                                                                    class="v-list-item v-theme--dark v-list-item--density-comfortable v-list-item--one-line v-list-item--variant-text">
                                                                    <!----><span class="v-list-item__underlay"></span>
                                                                    <div class="v-list-item__prepend">
                                                                        <div data-v-ce8c2363=""
                                                                            class="v-avatar v-theme--dark bg-primary v-avatar--density-default v-avatar--variant-elevated me-3"
                                                                            style="width: 16px; height: 16px;"><svg
                                                                                data-v-ce8c2363=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                aria-hidden="true" role="img"
                                                                                tag="i"
                                                                                class="v-icon notranslate v-theme--dark text-white iconify iconify--tabler"
                                                                                width="1em" height="1em"
                                                                                viewBox="0 0 24 24"
                                                                                style="font-size: 12px; height: 12px; width: 12px;">
                                                                                <path fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="m5 12l5 5L20 7"></path>
                                                                            </svg><!----><span
                                                                                class="v-avatar__underlay"></span>
                                                                        </div>
                                                                        <div data-v-ce8c2363=""
                                                                            class="text-body-1 font-weight-medium text-high-emphasis">
                                                                            Advanced search</div>
                                                                        <div class="v-list-item__spacer"></div>
                                                                    </div>
                                                                    <div class="v-list-item__content"
                                                                        data-no-activator=""><!----><!----><!---->
                                                                    </div><!---->
                                                                </div>
                                                                <div data-v-ce8c2363=""
                                                                    class="v-list-item v-theme--dark v-list-item--density-comfortable v-list-item--one-line v-list-item--variant-text">
                                                                    <!----><span class="v-list-item__underlay"></span>
                                                                    <div class="v-list-item__prepend">
                                                                        <div data-v-ce8c2363=""
                                                                            class="v-avatar v-theme--dark bg-primary v-avatar--density-default v-avatar--variant-elevated me-3"
                                                                            style="width: 16px; height: 16px;"><svg
                                                                                data-v-ce8c2363=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                aria-hidden="true" role="img"
                                                                                tag="i"
                                                                                class="v-icon notranslate v-theme--dark text-white iconify iconify--tabler"
                                                                                width="1em" height="1em"
                                                                                viewBox="0 0 24 24"
                                                                                style="font-size: 12px; height: 12px; width: 12px;">
                                                                                <path fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="m5 12l5 5L20 7"></path>
                                                                            </svg><!----><span
                                                                                class="v-avatar__underlay"></span>
                                                                        </div>
                                                                        <div data-v-ce8c2363=""
                                                                            class="text-body-1 font-weight-medium text-high-emphasis">
                                                                            Marketing automation</div>
                                                                        <div class="v-list-item__spacer"></div>
                                                                    </div>
                                                                    <div class="v-list-item__content"
                                                                        data-no-activator=""><!----><!----><!---->
                                                                    </div><!---->
                                                                </div>
                                                                <div data-v-ce8c2363=""
                                                                    class="v-list-item v-theme--dark v-list-item--density-comfortable v-list-item--one-line v-list-item--variant-text">
                                                                    <!----><span class="v-list-item__underlay"></span>
                                                                    <div class="v-list-item__prepend">
                                                                        <div data-v-ce8c2363=""
                                                                            class="v-avatar v-theme--dark bg-primary v-avatar--density-default v-avatar--variant-elevated me-3"
                                                                            style="width: 16px; height: 16px;"><svg
                                                                                data-v-ce8c2363=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                aria-hidden="true" role="img"
                                                                                tag="i"
                                                                                class="v-icon notranslate v-theme--dark text-white iconify iconify--tabler"
                                                                                width="1em" height="1em"
                                                                                viewBox="0 0 24 24"
                                                                                style="font-size: 12px; height: 12px; width: 12px;">
                                                                                <path fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="m5 12l5 5L20 7"></path>
                                                                            </svg><!----><span
                                                                                class="v-avatar__underlay"></span>
                                                                        </div>
                                                                        <div data-v-ce8c2363=""
                                                                            class="text-body-1 font-weight-medium text-high-emphasis">
                                                                            Advanced chatbot</div>
                                                                        <div class="v-list-item__spacer"></div>
                                                                    </div>
                                                                    <div class="v-list-item__content"
                                                                        data-no-activator=""><!----><!----><!---->
                                                                    </div><!---->
                                                                </div>
                                                                <div data-v-ce8c2363=""
                                                                    class="v-list-item v-theme--dark v-list-item--density-comfortable v-list-item--one-line v-list-item--variant-text">
                                                                    <!----><span class="v-list-item__underlay"></span>
                                                                    <div class="v-list-item__prepend">
                                                                        <div data-v-ce8c2363=""
                                                                            class="v-avatar v-theme--dark bg-primary v-avatar--density-default v-avatar--variant-elevated me-3"
                                                                            style="width: 16px; height: 16px;"><svg
                                                                                data-v-ce8c2363=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                aria-hidden="true" role="img"
                                                                                tag="i"
                                                                                class="v-icon notranslate v-theme--dark text-white iconify iconify--tabler"
                                                                                width="1em" height="1em"
                                                                                viewBox="0 0 24 24"
                                                                                style="font-size: 12px; height: 12px; width: 12px;">
                                                                                <path fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="m5 12l5 5L20 7"></path>
                                                                            </svg><!----><span
                                                                                class="v-avatar__underlay"></span>
                                                                        </div>
                                                                        <div data-v-ce8c2363=""
                                                                            class="text-body-1 font-weight-medium text-high-emphasis">
                                                                            Campaign management</div>
                                                                        <div class="v-list-item__spacer"></div>
                                                                    </div>
                                                                    <div class="v-list-item__content"
                                                                        data-no-activator=""><!----><!----><!---->
                                                                    </div><!---->
                                                                </div>
                                                                <div data-v-ce8c2363=""
                                                                    class="v-list-item v-theme--dark v-list-item--density-comfortable v-list-item--one-line v-list-item--variant-text">
                                                                    <!----><span class="v-list-item__underlay"></span>
                                                                    <div class="v-list-item__prepend">
                                                                        <div data-v-ce8c2363=""
                                                                            class="v-avatar v-theme--dark bg-primary v-avatar--density-default v-avatar--variant-elevated me-3"
                                                                            style="width: 16px; height: 16px;"><svg
                                                                                data-v-ce8c2363=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                aria-hidden="true" role="img"
                                                                                tag="i"
                                                                                class="v-icon notranslate v-theme--dark text-white iconify iconify--tabler"
                                                                                width="1em" height="1em"
                                                                                viewBox="0 0 24 24"
                                                                                style="font-size: 12px; height: 12px; width: 12px;">
                                                                                <path fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="m5 12l5 5L20 7"></path>
                                                                            </svg><!----><span
                                                                                class="v-avatar__underlay"></span>
                                                                        </div>
                                                                        <div data-v-ce8c2363=""
                                                                            class="text-body-1 font-weight-medium text-high-emphasis">
                                                                            Collaboration tools</div>
                                                                        <div class="v-list-item__spacer"></div>
                                                                    </div>
                                                                    <div class="v-list-item__content"
                                                                        data-no-activator=""><!----><!----><!---->
                                                                    </div><!---->
                                                                </div>
                                                            </div><a data-v-ce8c2363=""
                                                                class="v-btn v-btn--active v-btn--block v-btn--elevated v-theme--dark bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated mt-8"
                                                                href="/"><span
                                                                    class="v-btn__overlay"></span><span
                                                                    class="v-btn__underlay"></span><!----><span
                                                                    class="v-btn__content" data-no-activator=""> Get
                                                                    Started </span><!----><!----></a>
                                                        </div><!----><!----><span class="v-card__underlay"></span>
                                                    </div>
                                                </div>
                                                <div data-v-ce8c2363="" class="v-col">
                                                    <div data-v-ce8c2363=""
                                                        class="v-card v-theme--dark v-card--density-default v-card--variant-elevated">
                                                        <!---->
                                                        <div class="v-card__loader">
                                                            <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                                role="progressbar" aria-hidden="true"
                                                                aria-valuemin="0" aria-valuemax="100"
                                                                style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                <!---->
                                                                <div class="v-progress-linear__background bg-primary"
                                                                    style="width: 100%;"></div>
                                                                <div class="v-progress-linear__indeterminate">
                                                                    <div
                                                                        class="v-progress-linear__indeterminate long bg-primary">
                                                                    </div>
                                                                    <div
                                                                        class="v-progress-linear__indeterminate short bg-primary">
                                                                    </div>
                                                                </div><!---->
                                                            </div>
                                                        </div><!----><!---->
                                                        <div data-v-ce8c2363="" class="v-card-text pa-8">
                                                            <div data-v-ce8c2363=""
                                                                class="v-responsive v-img v-img--booting mx-auto mb-8"
                                                                style="height: 80px; width: 80px;">
                                                                <div class="v-responsive__sizer"></div>
                                                                <!----><!----><!----><!----><!----><!---->
                                                            </div>
                                                            <h4 data-v-ce8c2363="" class="text-h4 text-center">
                                                                Standard</h4>
                                                            <div data-v-ce8c2363=""
                                                                class="d-flex justify-center mb-8 position-relative">
                                                                <div data-v-ce8c2363="" class="d-flex align-end">
                                                                    <h1 data-v-ce8c2363=""
                                                                        class="text-h1 font-weight-bold"><span
                                                                            data-v-ce8c2363=""
                                                                            class="text-primary">$37</span></h1><span
                                                                        data-v-ce8c2363=""
                                                                        class="text-disabled mb-2">/mo</span>
                                                                </div><span data-v-ce8c2363=""
                                                                    class="annual-price-text position-absolute text-sm text-disabled">USD
                                                                    444/Year</span>
                                                            </div>
                                                            <div data-v-ce8c2363=""
                                                                class="v-list v-theme--dark v-list--density-comfortable v-list--one-line card-list"
                                                                tabindex="0" role="listbox">
                                                                <div data-v-ce8c2363=""
                                                                    class="v-list-item v-theme--dark v-list-item--density-comfortable v-list-item--one-line v-list-item--variant-text">
                                                                    <!----><span class="v-list-item__underlay"></span>
                                                                    <div class="v-list-item__prepend">
                                                                        <div data-v-ce8c2363=""
                                                                            class="v-avatar v-theme--dark text-primary v-avatar--density-default v-avatar--variant-tonal me-3"
                                                                            style="width: 16px; height: 16px;"><svg
                                                                                data-v-ce8c2363=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                aria-hidden="true" role="img"
                                                                                tag="i"
                                                                                class="v-icon notranslate v-theme--dark text-primary iconify iconify--tabler"
                                                                                width="1em" height="1em"
                                                                                viewBox="0 0 24 24"
                                                                                style="font-size: 12px; height: 12px; width: 12px;">
                                                                                <path fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="m5 12l5 5L20 7"></path>
                                                                            </svg><!----><span
                                                                                class="v-avatar__underlay"></span>
                                                                        </div>
                                                                        <div data-v-ce8c2363=""
                                                                            class="text-body-1 font-weight-medium text-high-emphasis">
                                                                            Campaign management</div>
                                                                        <div class="v-list-item__spacer"></div>
                                                                    </div>
                                                                    <div class="v-list-item__content"
                                                                        data-no-activator=""><!----><!----><!---->
                                                                    </div><!---->
                                                                </div>
                                                                <div data-v-ce8c2363=""
                                                                    class="v-list-item v-theme--dark v-list-item--density-comfortable v-list-item--one-line v-list-item--variant-text">
                                                                    <!----><span class="v-list-item__underlay"></span>
                                                                    <div class="v-list-item__prepend">
                                                                        <div data-v-ce8c2363=""
                                                                            class="v-avatar v-theme--dark text-primary v-avatar--density-default v-avatar--variant-tonal me-3"
                                                                            style="width: 16px; height: 16px;"><svg
                                                                                data-v-ce8c2363=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                aria-hidden="true" role="img"
                                                                                tag="i"
                                                                                class="v-icon notranslate v-theme--dark text-primary iconify iconify--tabler"
                                                                                width="1em" height="1em"
                                                                                viewBox="0 0 24 24"
                                                                                style="font-size: 12px; height: 12px; width: 12px;">
                                                                                <path fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="m5 12l5 5L20 7"></path>
                                                                            </svg><!----><span
                                                                                class="v-avatar__underlay"></span>
                                                                        </div>
                                                                        <div data-v-ce8c2363=""
                                                                            class="text-body-1 font-weight-medium text-high-emphasis">
                                                                            Timeline with database</div>
                                                                        <div class="v-list-item__spacer"></div>
                                                                    </div>
                                                                    <div class="v-list-item__content"
                                                                        data-no-activator=""><!----><!----><!---->
                                                                    </div><!---->
                                                                </div>
                                                                <div data-v-ce8c2363=""
                                                                    class="v-list-item v-theme--dark v-list-item--density-comfortable v-list-item--one-line v-list-item--variant-text">
                                                                    <!----><span class="v-list-item__underlay"></span>
                                                                    <div class="v-list-item__prepend">
                                                                        <div data-v-ce8c2363=""
                                                                            class="v-avatar v-theme--dark text-primary v-avatar--density-default v-avatar--variant-tonal me-3"
                                                                            style="width: 16px; height: 16px;"><svg
                                                                                data-v-ce8c2363=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                aria-hidden="true" role="img"
                                                                                tag="i"
                                                                                class="v-icon notranslate v-theme--dark text-primary iconify iconify--tabler"
                                                                                width="1em" height="1em"
                                                                                viewBox="0 0 24 24"
                                                                                style="font-size: 12px; height: 12px; width: 12px;">
                                                                                <path fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="m5 12l5 5L20 7"></path>
                                                                            </svg><!----><span
                                                                                class="v-avatar__underlay"></span>
                                                                        </div>
                                                                        <div data-v-ce8c2363=""
                                                                            class="text-body-1 font-weight-medium text-high-emphasis">
                                                                            Fuzzy search</div>
                                                                        <div class="v-list-item__spacer"></div>
                                                                    </div>
                                                                    <div class="v-list-item__content"
                                                                        data-no-activator=""><!----><!----><!---->
                                                                    </div><!---->
                                                                </div>
                                                                <div data-v-ce8c2363=""
                                                                    class="v-list-item v-theme--dark v-list-item--density-comfortable v-list-item--one-line v-list-item--variant-text">
                                                                    <!----><span class="v-list-item__underlay"></span>
                                                                    <div class="v-list-item__prepend">
                                                                        <div data-v-ce8c2363=""
                                                                            class="v-avatar v-theme--dark text-primary v-avatar--density-default v-avatar--variant-tonal me-3"
                                                                            style="width: 16px; height: 16px;"><svg
                                                                                data-v-ce8c2363=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                aria-hidden="true" role="img"
                                                                                tag="i"
                                                                                class="v-icon notranslate v-theme--dark text-primary iconify iconify--tabler"
                                                                                width="1em" height="1em"
                                                                                viewBox="0 0 24 24"
                                                                                style="font-size: 12px; height: 12px; width: 12px;">
                                                                                <path fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="m5 12l5 5L20 7"></path>
                                                                            </svg><!----><span
                                                                                class="v-avatar__underlay"></span>
                                                                        </div>
                                                                        <div data-v-ce8c2363=""
                                                                            class="text-body-1 font-weight-medium text-high-emphasis">
                                                                            A/B testing sanbox</div>
                                                                        <div class="v-list-item__spacer"></div>
                                                                    </div>
                                                                    <div class="v-list-item__content"
                                                                        data-no-activator=""><!----><!----><!---->
                                                                    </div><!---->
                                                                </div>
                                                                <div data-v-ce8c2363=""
                                                                    class="v-list-item v-theme--dark v-list-item--density-comfortable v-list-item--one-line v-list-item--variant-text">
                                                                    <!----><span class="v-list-item__underlay"></span>
                                                                    <div class="v-list-item__prepend">
                                                                        <div data-v-ce8c2363=""
                                                                            class="v-avatar v-theme--dark text-primary v-avatar--density-default v-avatar--variant-tonal me-3"
                                                                            style="width: 16px; height: 16px;"><svg
                                                                                data-v-ce8c2363=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                aria-hidden="true" role="img"
                                                                                tag="i"
                                                                                class="v-icon notranslate v-theme--dark text-primary iconify iconify--tabler"
                                                                                width="1em" height="1em"
                                                                                viewBox="0 0 24 24"
                                                                                style="font-size: 12px; height: 12px; width: 12px;">
                                                                                <path fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="m5 12l5 5L20 7"></path>
                                                                            </svg><!----><span
                                                                                class="v-avatar__underlay"></span>
                                                                        </div>
                                                                        <div data-v-ce8c2363=""
                                                                            class="text-body-1 font-weight-medium text-high-emphasis">
                                                                            Custom permissions</div>
                                                                        <div class="v-list-item__spacer"></div>
                                                                    </div>
                                                                    <div class="v-list-item__content"
                                                                        data-no-activator=""><!----><!----><!---->
                                                                    </div><!---->
                                                                </div>
                                                                <div data-v-ce8c2363=""
                                                                    class="v-list-item v-theme--dark v-list-item--density-comfortable v-list-item--one-line v-list-item--variant-text">
                                                                    <!----><span class="v-list-item__underlay"></span>
                                                                    <div class="v-list-item__prepend">
                                                                        <div data-v-ce8c2363=""
                                                                            class="v-avatar v-theme--dark text-primary v-avatar--density-default v-avatar--variant-tonal me-3"
                                                                            style="width: 16px; height: 16px;"><svg
                                                                                data-v-ce8c2363=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                aria-hidden="true" role="img"
                                                                                tag="i"
                                                                                class="v-icon notranslate v-theme--dark text-primary iconify iconify--tabler"
                                                                                width="1em" height="1em"
                                                                                viewBox="0 0 24 24"
                                                                                style="font-size: 12px; height: 12px; width: 12px;">
                                                                                <path fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="m5 12l5 5L20 7"></path>
                                                                            </svg><!----><span
                                                                                class="v-avatar__underlay"></span>
                                                                        </div>
                                                                        <div data-v-ce8c2363=""
                                                                            class="text-body-1 font-weight-medium text-high-emphasis">
                                                                            Social media automation</div>
                                                                        <div class="v-list-item__spacer"></div>
                                                                    </div>
                                                                    <div class="v-list-item__content"
                                                                        data-no-activator=""><!----><!----><!---->
                                                                    </div><!---->
                                                                </div>
                                                                <div data-v-ce8c2363=""
                                                                    class="v-list-item v-theme--dark v-list-item--density-comfortable v-list-item--one-line v-list-item--variant-text">
                                                                    <!----><span class="v-list-item__underlay"></span>
                                                                    <div class="v-list-item__prepend">
                                                                        <div data-v-ce8c2363=""
                                                                            class="v-avatar v-theme--dark text-primary v-avatar--density-default v-avatar--variant-tonal me-3"
                                                                            style="width: 16px; height: 16px;"><svg
                                                                                data-v-ce8c2363=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                aria-hidden="true" role="img"
                                                                                tag="i"
                                                                                class="v-icon notranslate v-theme--dark text-primary iconify iconify--tabler"
                                                                                width="1em" height="1em"
                                                                                viewBox="0 0 24 24"
                                                                                style="font-size: 12px; height: 12px; width: 12px;">
                                                                                <path fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="m5 12l5 5L20 7"></path>
                                                                            </svg><!----><span
                                                                                class="v-avatar__underlay"></span>
                                                                        </div>
                                                                        <div data-v-ce8c2363=""
                                                                            class="text-body-1 font-weight-medium text-high-emphasis">
                                                                            Sales automation tools</div>
                                                                        <div class="v-list-item__spacer"></div>
                                                                    </div>
                                                                    <div class="v-list-item__content"
                                                                        data-no-activator=""><!----><!----><!---->
                                                                    </div><!---->
                                                                </div>
                                                            </div><a data-v-ce8c2363=""
                                                                class="v-btn v-btn--active v-btn--block v-theme--dark text-primary v-btn--density-default v-btn--size-default v-btn--variant-tonal mt-8"
                                                                href="/"><span
                                                                    class="v-btn__overlay"></span><span
                                                                    class="v-btn__underlay"></span><!----><span
                                                                    class="v-btn__content" data-no-activator=""> Get
                                                                    Started </span><!----><!----></a>
                                                        </div><!----><!----><span class="v-card__underlay"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-v-6306f87b="" style="background-color: rgb(var(--v-theme-surface));">
                                <div data-v-6306f87b="" class="v-container v-locale--is-ltr">
                                    <div data-v-6306f87b="" class="py-12">
                                        <div data-v-6306f87b="" class="v-row">
                                            <div data-v-6306f87b="" class="v-col">
                                                <div data-v-6306f87b=""
                                                    class="v-card v-card--flat v-theme--dark v-card--density-default v-card--variant-elevated"
                                                    style="border: 1px solid rgb(var(--v-theme-primary));"><!---->
                                                    <div class="v-card__loader">
                                                        <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                            role="progressbar" aria-hidden="true"
                                                            aria-valuemin="0" aria-valuemax="100"
                                                            style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                            <!---->
                                                            <div class="v-progress-linear__background bg-primary"
                                                                style="width: 100%;"></div>
                                                            <div class="v-progress-linear__indeterminate">
                                                                <div
                                                                    class="v-progress-linear__indeterminate long bg-primary">
                                                                </div>
                                                                <div
                                                                    class="v-progress-linear__indeterminate short bg-primary">
                                                                </div>
                                                            </div><!---->
                                                        </div>
                                                    </div><!----><!---->
                                                    <div data-v-6306f87b="" class="v-card-text text-center"><svg
                                                            data-v-6306f87b="" xmlns="http://www.w3.org/2000/svg"
                                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                                            aria-hidden="true" role="img" tag="i"
                                                            class="v-icon notranslate v-theme--dark mb-3 iconify iconify--tabler"
                                                            width="1em" height="1em" viewBox="0 0 24 24"
                                                            style="font-size: 64px; height: 64px; width: 64px; color: rgb(var(--v-theme-primary)); caret-color: rgb(var(--v-theme-primary));">
                                                            <path fill="none" stroke="currentColor"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm4 15h10m-8-4v4m6-4v4m-6-8V8m3 4v-1m3 1v-2m-3 2v-1">
                                                            </path>
                                                        </svg>
                                                        <h2 data-v-6306f87b="" class="text-h2 font-weight-bold">
                                                            7.1k+</h2><span data-v-6306f87b=""
                                                            class="text-body-1 font-weight-medium">Support Tickets
                                                            Resolved</span>
                                                    </div><!----><!----><span class="v-card__underlay"></span>
                                                </div>
                                            </div>
                                            <div data-v-6306f87b="" class="v-col">
                                                <div data-v-6306f87b=""
                                                    class="v-card v-card--flat v-theme--dark v-card--density-default v-card--variant-elevated"
                                                    style="border: 1px solid rgb(var(--v-theme-success));"><!---->
                                                    <div class="v-card__loader">
                                                        <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                            role="progressbar" aria-hidden="true"
                                                            aria-valuemin="0" aria-valuemax="100"
                                                            style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                            <!---->
                                                            <div class="v-progress-linear__background bg-primary"
                                                                style="width: 100%;"></div>
                                                            <div class="v-progress-linear__indeterminate">
                                                                <div
                                                                    class="v-progress-linear__indeterminate long bg-primary">
                                                                </div>
                                                                <div
                                                                    class="v-progress-linear__indeterminate short bg-primary">
                                                                </div>
                                                            </div><!---->
                                                        </div>
                                                    </div><!----><!---->
                                                    <div data-v-6306f87b="" class="v-card-text text-center"><svg
                                                            data-v-6306f87b="" xmlns="http://www.w3.org/2000/svg"
                                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                                            aria-hidden="true" role="img" tag="i"
                                                            class="v-icon notranslate v-theme--dark mb-3 iconify iconify--tabler"
                                                            width="1em" height="1em" viewBox="0 0 24 24"
                                                            style="font-size: 64px; height: 64px; width: 64px; color: rgb(var(--v-theme-success)); caret-color: rgb(var(--v-theme-success));">
                                                            <path fill="none" stroke="currentColor"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m1-17.87a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85">
                                                            </path>
                                                        </svg>
                                                        <h2 data-v-6306f87b="" class="text-h2 font-weight-bold">50k+
                                                        </h2><span data-v-6306f87b=""
                                                            class="text-body-1 font-weight-medium">Join creatives
                                                            community</span>
                                                    </div><!----><!----><span class="v-card__underlay"></span>
                                                </div>
                                            </div>
                                            <div data-v-6306f87b="" class="v-col">
                                                <div data-v-6306f87b=""
                                                    class="v-card v-card--flat v-theme--dark v-card--density-default v-card--variant-elevated"
                                                    style="border: 1px solid rgb(var(--v-theme-info));"><!---->
                                                    <div class="v-card__loader">
                                                        <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                            role="progressbar" aria-hidden="true"
                                                            aria-valuemin="0" aria-valuemax="100"
                                                            style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                            <!---->
                                                            <div class="v-progress-linear__background bg-primary"
                                                                style="width: 100%;"></div>
                                                            <div class="v-progress-linear__indeterminate">
                                                                <div
                                                                    class="v-progress-linear__indeterminate long bg-primary">
                                                                </div>
                                                                <div
                                                                    class="v-progress-linear__indeterminate short bg-primary">
                                                                </div>
                                                            </div><!---->
                                                        </div>
                                                    </div><!----><!---->
                                                    <div data-v-6306f87b="" class="v-card-text text-center"><svg
                                                            data-v-6306f87b="" xmlns="http://www.w3.org/2000/svg"
                                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                                            aria-hidden="true" role="img" tag="i"
                                                            class="v-icon notranslate v-theme--dark mb-3 iconify iconify--tabler"
                                                            width="1em" height="1em" viewBox="0 0 24 24"
                                                            style="font-size: 64px; height: 64px; width: 64px; color: rgb(var(--v-theme-info)); caret-color: rgb(var(--v-theme-info));">
                                                            <g fill="none" stroke="currentColor"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2">
                                                                <path d="M6 5h12l3 5l-8.5 9.5a.7.7 0 0 1-1 0L3 10z">
                                                                </path>
                                                                <path d="M10 12L8 9.8l.6-1"></path>
                                                            </g>
                                                        </svg>
                                                        <h2 data-v-6306f87b="" class="text-h2 font-weight-bold">
                                                            4.8/5</h2><span data-v-6306f87b=""
                                                            class="text-body-1 font-weight-medium">Highly Rated
                                                            Products</span>
                                                    </div><!----><!----><span class="v-card__underlay"></span>
                                                </div>
                                            </div>
                                            <div data-v-6306f87b="" class="v-col">
                                                <div data-v-6306f87b=""
                                                    class="v-card v-card--flat v-theme--dark v-card--density-default v-card--variant-elevated"
                                                    style="border: 1px solid rgb(var(--v-theme-warning));"><!---->
                                                    <div class="v-card__loader">
                                                        <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                            role="progressbar" aria-hidden="true"
                                                            aria-valuemin="0" aria-valuemax="100"
                                                            style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                            <!---->
                                                            <div class="v-progress-linear__background bg-primary"
                                                                style="width: 100%;"></div>
                                                            <div class="v-progress-linear__indeterminate">
                                                                <div
                                                                    class="v-progress-linear__indeterminate long bg-primary">
                                                                </div>
                                                                <div
                                                                    class="v-progress-linear__indeterminate short bg-primary">
                                                                </div>
                                                            </div><!---->
                                                        </div>
                                                    </div><!----><!---->
                                                    <div data-v-6306f87b="" class="v-card-text text-center"><svg
                                                            data-v-6306f87b="" xmlns="http://www.w3.org/2000/svg"
                                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                                            aria-hidden="true" role="img" tag="i"
                                                            class="v-icon notranslate v-theme--dark mb-3 iconify iconify--tabler"
                                                            width="1em" height="1em" viewBox="0 0 24 24"
                                                            style="font-size: 64px; height: 64px; width: 64px; color: rgb(var(--v-theme-warning)); caret-color: rgb(var(--v-theme-warning));">
                                                            <g fill="none" stroke="currentColor"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2">
                                                                <path d="m9 11l3 3l8-8"></path>
                                                                <path
                                                                    d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9">
                                                                </path>
                                                            </g>
                                                        </svg>
                                                        <h2 data-v-6306f87b="" class="text-h2 font-weight-bold">100%
                                                        </h2><span data-v-6306f87b=""
                                                            class="text-body-1 font-weight-medium">Money Back
                                                            Guarantee</span>
                                                    </div><!----><!----><span class="v-card__underlay"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="background-color: rgb(var(--v-theme-surface));">
                                <div data-v-3df39ead="" id="faq">
                                    <div data-v-3df39ead="" class="v-container v-locale--is-ltr">
                                        <div data-v-3df39ead="" class="faq-section">
                                            <div data-v-3df39ead=""
                                                class="headers d-flex justify-center flex-column align-center">
                                                <h6 data-v-3df39ead=""
                                                    class="text-base mb-4 font-weight-medium my-auto d-flex gap-x-2">
                                                    <span data-v-3df39ead=""
                                                        class="v-chip v-chip--label v-theme--dark text-primary v-chip--density-default v-chip--size-small v-chip--variant-tonal"
                                                        draggable="false"><!----><span
                                                            class="v-chip__underlay"></span><!----><!---->
                                                        <div class="v-chip__content"> FAQ </div><!----><!---->
                                                    </span></h6>
                                                <div data-v-3df39ead=""
                                                    class="d-flex align-center text-h3 mb-1 flex-wrap justify-center">
                                                    Frequently Asked <div data-v-3df39ead=""
                                                        class="position-relative ms-2">
                                                        <h3 data-v-3df39ead="" class="section-title">questions</h3>
                                                    </div>
                                                </div>
                                                <p data-v-3df39ead="" class="mb-0"> Browse through these FAQs to
                                                    find answers to commonly asked questions. </p>
                                            </div>
                                            <div data-v-3df39ead="" class="v-row">
                                                <div data-v-3df39ead="" class="v-col-md-6 v-col-12">
                                                    <div data-v-3df39ead=""
                                                        class="d-flex align-center justify-center h-100">
                                                        <div data-v-3df39ead=""
                                                            class="v-responsive v-img v-img--booting"
                                                            style="height: 340px;">
                                                            <div class="v-responsive__sizer"></div>
                                                            <!----><!----><!----><!----><!----><!---->
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-v-3df39ead="" class="v-col-md-6 v-col-12">
                                                    <div data-v-3df39ead=""
                                                        class="v-expansion-panels v-theme--dark v-expansion-panels--variant-default py-4">
                                                        <div data-v-3df39ead="" class="v-expansion-panel">
                                                            <div class="v-expansion-panel__shadow"></div>
                                                            <!----><!----><button data-v-3df39ead=""
                                                                class="v-expansion-panel-title" type="button"
                                                                aria-expanded="false"><span
                                                                    class="v-expansion-panel-title__overlay"></span>Do
                                                                you charge for each upgrade?<span
                                                                    class="v-expansion-panel-title__icon"><svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        aria-hidden="true" role="img"
                                                                        tag="i"
                                                                        class="v-icon notranslate v-theme--dark v-icon--size-default iconify iconify--tabler"
                                                                        width="1em" height="1em"
                                                                        viewBox="0 0 24 24">
                                                                        <path fill="none" stroke="currentColor"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="2"
                                                                            d="m9 6l6 6l-6 6"></path>
                                                                    </svg></span></button>
                                                            <div data-v-3df39ead="" class="v-expansion-panel-text"
                                                                style="display: none;"><!----></div>
                                                        </div>
                                                        <div data-v-3df39ead="" class="v-expansion-panel">
                                                            <div class="v-expansion-panel__shadow"></div>
                                                            <!----><!----><button data-v-3df39ead=""
                                                                class="v-expansion-panel-title" type="button"
                                                                aria-expanded="false"><span
                                                                    class="v-expansion-panel-title__overlay"></span>Do
                                                                I need to purchase a license for each website?<span
                                                                    class="v-expansion-panel-title__icon"><svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        aria-hidden="true" role="img"
                                                                        tag="i"
                                                                        class="v-icon notranslate v-theme--dark v-icon--size-default iconify iconify--tabler"
                                                                        width="1em" height="1em"
                                                                        viewBox="0 0 24 24">
                                                                        <path fill="none" stroke="currentColor"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="2"
                                                                            d="m9 6l6 6l-6 6"></path>
                                                                    </svg></span></button>
                                                            <div data-v-3df39ead="" class="v-expansion-panel-text"
                                                                style="display: none;"><!----></div>
                                                        </div>
                                                        <div data-v-3df39ead="" class="v-expansion-panel">
                                                            <div class="v-expansion-panel__shadow"></div>
                                                            <!----><!----><button data-v-3df39ead=""
                                                                class="v-expansion-panel-title" type="button"
                                                                aria-expanded="false"><span
                                                                    class="v-expansion-panel-title__overlay"></span>What
                                                                is regular license?<span
                                                                    class="v-expansion-panel-title__icon"><svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        aria-hidden="true" role="img"
                                                                        tag="i"
                                                                        class="v-icon notranslate v-theme--dark v-icon--size-default iconify iconify--tabler"
                                                                        width="1em" height="1em"
                                                                        viewBox="0 0 24 24">
                                                                        <path fill="none" stroke="currentColor"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="2"
                                                                            d="m9 6l6 6l-6 6"></path>
                                                                    </svg></span></button>
                                                            <div data-v-3df39ead="" class="v-expansion-panel-text"
                                                                style="display: none;"><!----></div>
                                                        </div>
                                                        <div data-v-3df39ead="" class="v-expansion-panel">
                                                            <div class="v-expansion-panel__shadow"></div>
                                                            <!----><!----><button data-v-3df39ead=""
                                                                class="v-expansion-panel-title" type="button"
                                                                aria-expanded="false"><span
                                                                    class="v-expansion-panel-title__overlay"></span>What
                                                                is extended license?<span
                                                                    class="v-expansion-panel-title__icon"><svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        aria-hidden="true" role="img"
                                                                        tag="i"
                                                                        class="v-icon notranslate v-theme--dark v-icon--size-default iconify iconify--tabler"
                                                                        width="1em" height="1em"
                                                                        viewBox="0 0 24 24">
                                                                        <path fill="none" stroke="currentColor"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="2"
                                                                            d="m9 6l6 6l-6 6"></path>
                                                                    </svg></span></button>
                                                            <div data-v-3df39ead="" class="v-expansion-panel-text"
                                                                style="display: none;"><!----></div>
                                                        </div>
                                                        <div data-v-3df39ead="" class="v-expansion-panel">
                                                            <div class="v-expansion-panel__shadow"></div>
                                                            <!----><!----><button data-v-3df39ead=""
                                                                class="v-expansion-panel-title" type="button"
                                                                aria-expanded="false"><span
                                                                    class="v-expansion-panel-title__overlay"></span>Which
                                                                license is applicable for SASS application?<span
                                                                    class="v-expansion-panel-title__icon"><svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        aria-hidden="true" role="img"
                                                                        tag="i"
                                                                        class="v-icon notranslate v-theme--dark v-icon--size-default iconify iconify--tabler"
                                                                        width="1em" height="1em"
                                                                        viewBox="0 0 24 24">
                                                                        <path fill="none" stroke="currentColor"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" stroke-width="2"
                                                                            d="m9 6l6 6l-6 6"></path>
                                                                    </svg></span></button>
                                                            <div data-v-3df39ead="" class="v-expansion-panel-text"
                                                                style="display: none;"><!----></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="landing-cta bg-surface banner-bg-dark">
                                <div class="v-container v-locale--is-ltr">
                                    <div
                                        class="d-flex align-center justify-center justify-md-space-between flex-wrap gap-6 gap-x-10 position-relative pt-10">
                                        <div class="d-flex justify-start align-center">
                                            <div>
                                                <h2 class="text-h2 text-primary font-weight-bold">Ready to Get
                                                    Started?</h2>
                                                <h5 class="text-h5 font-weight-medium mb-8">Start your project with a
                                                    14-day free trial</h5><a
                                                    class="v-btn v-btn--active v-btn--elevated v-theme--dark bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"
                                                    href="/" style="height: 48px;"><span
                                                        class="v-btn__overlay"></span><span
                                                        class="v-btn__underlay"></span><!----><span
                                                        class="v-btn__content" data-no-activator=""> Get Started
                                                    </span><!----><!----></a>
                                            </div>
                                        </div>
                                        <div class="banner-img mb-n5"><img
                                                src="/build/assets/cta-dashboard-b23542a6.png" class="w-100"></div>
                                    </div>
                                </div>
                            </div>
                            <div data-v-45c21fec="" class="v-container v-locale--is-ltr" id="contact-us">
                                <div data-v-45c21fec="" class="contact-us-section">
                                    <div data-v-45c21fec=""
                                        class="headers d-flex justify-center flex-column align-center py-12"><span
                                            data-v-45c21fec=""
                                            class="v-chip v-chip--label v-theme--dark text-primary v-chip--density-default v-chip--size-small v-chip--variant-tonal mb-4"
                                            draggable="false"><!----><span
                                                class="v-chip__underlay"></span><!----><!---->
                                            <div class="v-chip__content"> Contact US </div><!----><!---->
                                        </span>
                                        <div data-v-45c21fec=""
                                            class="d-flex align-center text-h3 mb-1 flex-wrap justify-center">
                                            <div data-v-45c21fec="" class="position-relative me-2">
                                                <h3 data-v-45c21fec="" class="section-title">let's work</h3>
                                            </div> together
                                        </div>
                                        <p data-v-45c21fec="">Any question or remark? just write us a message</p>
                                    </div>
                                    <div data-v-45c21fec="" class="mb-15">
                                        <div data-v-45c21fec="" class="v-row match-height">
                                            <div data-v-45c21fec="" class="v-col-md-4 v-col-12">
                                                <div data-v-45c21fec="" class="contact-card h-100">
                                                    <div data-v-45c21fec=""
                                                        class="v-card v-theme--dark v-card--border v-card--density-default v-card--variant-outlined pa-2"
                                                        style="border-radius: 3.75rem 0.375rem 0.375rem;"><!---->
                                                        <div class="v-card__loader">
                                                            <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                                role="progressbar" aria-hidden="true"
                                                                aria-valuemin="0" aria-valuemax="100"
                                                                style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                <!---->
                                                                <div class="v-progress-linear__background bg-primary"
                                                                    style="width: 100%;"></div>
                                                                <div class="v-progress-linear__indeterminate">
                                                                    <div
                                                                        class="v-progress-linear__indeterminate long bg-primary">
                                                                    </div>
                                                                    <div
                                                                        class="v-progress-linear__indeterminate short bg-primary">
                                                                    </div>
                                                                </div><!---->
                                                            </div>
                                                        </div><!----><!---->
                                                        <div data-v-45c21fec=""
                                                            class="v-responsive v-img v-img--booting"
                                                            style="border-radius: 3.75rem 0.375rem 0.375rem;">
                                                            <div class="v-responsive__sizer"></div>
                                                            <!----><!----><!----><!----><!----><!---->
                                                        </div>
                                                        <div data-v-45c21fec="" class="v-card-text">
                                                            <div data-v-45c21fec=""
                                                                class="d-flex justify-space-between flex-wrap gap-y-4">
                                                                <div data-v-45c21fec=""
                                                                    class="d-flex gap-x-3 align-center">
                                                                    <div data-v-45c21fec="">
                                                                        <div data-v-45c21fec=""
                                                                            class="v-avatar v-theme--dark text-primary v-avatar--density-default v-avatar--variant-tonal rounded-sm"
                                                                            style="width: 36px; height: 36px;"><svg
                                                                                data-v-45c21fec=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                aria-hidden="true" role="img"
                                                                                tag="i"
                                                                                class="v-icon notranslate v-theme--dark iconify iconify--tabler"
                                                                                width="1em" height="1em"
                                                                                viewBox="0 0 24 24"
                                                                                style="font-size: 24px; height: 24px; width: 24px;">
                                                                                <g fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2">
                                                                                    <path
                                                                                        d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z">
                                                                                    </path>
                                                                                    <path d="m3 7l9 6l9-6"></path>
                                                                                </g>
                                                                            </svg><!----><span
                                                                                class="v-avatar__underlay"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div data-v-45c21fec="">
                                                                        <div data-v-45c21fec="">Email</div>
                                                                        <div data-v-45c21fec=""
                                                                            class="font-weight-medium text-high-emphasis">
                                                                            example@gmail.com</div>
                                                                    </div>
                                                                </div>
                                                                <div data-v-45c21fec=""
                                                                    class="d-flex gap-x-3 align-center">
                                                                    <div data-v-45c21fec="">
                                                                        <div data-v-45c21fec=""
                                                                            class="v-avatar v-theme--dark text-success v-avatar--density-default v-avatar--variant-tonal rounded-sm"
                                                                            style="width: 36px; height: 36px;"><svg
                                                                                data-v-45c21fec=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                aria-hidden="true" role="img"
                                                                                tag="i"
                                                                                class="v-icon notranslate v-theme--dark iconify iconify--tabler"
                                                                                width="1em" height="1em"
                                                                                viewBox="0 0 24 24"
                                                                                style="font-size: 24px; height: 24px; width: 24px;">
                                                                                <path fill="none"
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2m10 3a2 2 0 0 1 2 2m-2-6a6 6 0 0 1 6 6">
                                                                                </path>
                                                                            </svg><!----><span
                                                                                class="v-avatar__underlay"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div data-v-45c21fec="">
                                                                        <div data-v-45c21fec="">Phone</div>
                                                                        <div data-v-45c21fec=""
                                                                            class="font-weight-medium text-high-emphasis">
                                                                            +1234 568 963</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div><!----><!----><span class="v-card__underlay"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-45c21fec="" class="v-col-md-8 v-col-12">
                                                <div data-v-45c21fec=""
                                                    class="v-card v-card--flat v-theme--dark v-card--density-default v-card--variant-elevated">
                                                    <!---->
                                                    <div class="v-card__loader">
                                                        <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                            role="progressbar" aria-hidden="true"
                                                            aria-valuemin="0" aria-valuemax="100"
                                                            style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                            <!---->
                                                            <div class="v-progress-linear__background bg-primary"
                                                                style="width: 100%;"></div>
                                                            <div class="v-progress-linear__indeterminate">
                                                                <div
                                                                    class="v-progress-linear__indeterminate long bg-primary">
                                                                </div>
                                                                <div
                                                                    class="v-progress-linear__indeterminate short bg-primary">
                                                                </div>
                                                            </div><!---->
                                                        </div>
                                                    </div><!----><!---->
                                                    <div data-v-45c21fec="" class="v-card-item pb-0"><!---->
                                                        <div class="v-card-item__content"><!----><!---->
                                                            <div data-v-45c21fec=""
                                                                class="v-card-title text-h4 mb-1"> Send a message
                                                            </div>
                                                        </div><!---->
                                                    </div>
                                                    <div data-v-45c21fec="" class="v-card-text">
                                                        <p data-v-45c21fec="" class="mb-6"> If you would like to
                                                            discuss anything related to payment, account, licensing,
                                                            partnerships, or have pre-sales questions, you’re at the
                                                            right place. </p>
                                                        <form data-v-45c21fec="" class="v-form" novalidate="">
                                                            <div data-v-45c21fec="" class="v-row">
                                                                <div data-v-45c21fec="" class="v-col-md-6 v-col-12">
                                                                    <div data-v-45c21fec=""
                                                                        class="app-text-field flex-grow-1"><label
                                                                            class="v-label mb-1 text-body-2 text-high-emphasis"
                                                                            for="app-text-field-Full Name-7044r">Full
                                                                            Name<!----></label>
                                                                        <div
                                                                            class="v-input v-input--horizontal v-input--center-affix v-input--density-compact v-locale--is-ltr v-text-field">
                                                                            <!---->
                                                                            <div class="v-input__control">
                                                                                <div
                                                                                    class="v-field v-field--center-affix v-field--no-label v-field--variant-outlined v-theme--dark v-locale--is-ltr">
                                                                                    <div class="v-field__overlay">
                                                                                    </div>
                                                                                    <div class="v-field__loader">
                                                                                        <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                                                            role="progressbar"
                                                                                            aria-hidden="true"
                                                                                            aria-valuemin="0"
                                                                                            aria-valuemax="100"
                                                                                            style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                                            <!---->
                                                                                            <div class="v-progress-linear__background bg-primary"
                                                                                                style="width: 100%;">
                                                                                            </div>
                                                                                            <div
                                                                                                class="v-progress-linear__indeterminate">
                                                                                                <div
                                                                                                    class="v-progress-linear__indeterminate long bg-primary">
                                                                                                </div>
                                                                                                <div
                                                                                                    class="v-progress-linear__indeterminate short bg-primary">
                                                                                                </div>
                                                                                            </div><!---->
                                                                                        </div>
                                                                                    </div><!---->
                                                                                    <div class="v-field__field"
                                                                                        data-no-activator="">
                                                                                        <!----><label
                                                                                            class="v-label v-field-label"
                                                                                            for="app-text-field-Full Name-7044r"><!----><!----></label><!----><input
                                                                                            placeholder="John Doe"
                                                                                            size="1"
                                                                                            type="text"
                                                                                            id="app-text-field-Full Name-7044r"
                                                                                            aria-describedby="app-text-field-Full Name-7044r-messages"
                                                                                            class="v-field__input"><!---->
                                                                                    </div><!----><!---->
                                                                                    <div class="v-field__outline">
                                                                                        <div
                                                                                            class="v-field__outline__start">
                                                                                        </div><!---->
                                                                                        <div
                                                                                            class="v-field__outline__end">
                                                                                        </div><!---->
                                                                                    </div>
                                                                                </div>
                                                                            </div><!----><!---->
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div data-v-45c21fec="" class="v-col-md-6 v-col-12">
                                                                    <div data-v-45c21fec=""
                                                                        class="app-text-field flex-grow-1"><label
                                                                            class="v-label mb-1 text-body-2 text-high-emphasis"
                                                                            for="app-text-field-Email address-3kjck">Email
                                                                            address<!----></label>
                                                                        <div
                                                                            class="v-input v-input--horizontal v-input--center-affix v-input--density-compact v-locale--is-ltr v-text-field">
                                                                            <!---->
                                                                            <div class="v-input__control">
                                                                                <div
                                                                                    class="v-field v-field--center-affix v-field--no-label v-field--variant-outlined v-theme--dark v-locale--is-ltr">
                                                                                    <div class="v-field__overlay">
                                                                                    </div>
                                                                                    <div class="v-field__loader">
                                                                                        <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                                                            role="progressbar"
                                                                                            aria-hidden="true"
                                                                                            aria-valuemin="0"
                                                                                            aria-valuemax="100"
                                                                                            style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                                            <!---->
                                                                                            <div class="v-progress-linear__background bg-primary"
                                                                                                style="width: 100%;">
                                                                                            </div>
                                                                                            <div
                                                                                                class="v-progress-linear__indeterminate">
                                                                                                <div
                                                                                                    class="v-progress-linear__indeterminate long bg-primary">
                                                                                                </div>
                                                                                                <div
                                                                                                    class="v-progress-linear__indeterminate short bg-primary">
                                                                                                </div>
                                                                                            </div><!---->
                                                                                        </div>
                                                                                    </div><!---->
                                                                                    <div class="v-field__field"
                                                                                        data-no-activator="">
                                                                                        <!----><label
                                                                                            class="v-label v-field-label"
                                                                                            for="app-text-field-Email address-3kjck"><!----><!----></label><!----><input
                                                                                            placeholder="johndoe@gmail.com"
                                                                                            size="1"
                                                                                            type="text"
                                                                                            id="app-text-field-Email address-3kjck"
                                                                                            aria-describedby="app-text-field-Email address-3kjck-messages"
                                                                                            class="v-field__input"><!---->
                                                                                    </div><!----><!---->
                                                                                    <div class="v-field__outline">
                                                                                        <div
                                                                                            class="v-field__outline__start">
                                                                                        </div><!---->
                                                                                        <div
                                                                                            class="v-field__outline__end">
                                                                                        </div><!---->
                                                                                    </div>
                                                                                </div>
                                                                            </div><!----><!---->
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div data-v-45c21fec="" class="v-col v-col-12">
                                                                    <div data-v-45c21fec=""
                                                                        class="app-textarea flex-grow-1"><label
                                                                            class="v-label mb-1 text-body-2 text-high-emphasis"
                                                                            for="app-textarea-Message-psfy9">Message<!----></label>
                                                                        <div
                                                                            class="v-input v-input--horizontal v-input--density-compact v-locale--is-ltr v-textarea v-text-field">
                                                                            <!---->
                                                                            <div class="v-input__control">
                                                                                <div
                                                                                    class="v-field v-field--no-label v-field--variant-outlined v-theme--dark v-locale--is-ltr">
                                                                                    <div class="v-field__overlay">
                                                                                    </div>
                                                                                    <div class="v-field__loader">
                                                                                        <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                                                            role="progressbar"
                                                                                            aria-hidden="true"
                                                                                            aria-valuemin="0"
                                                                                            aria-valuemax="100"
                                                                                            style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                                            <!---->
                                                                                            <div class="v-progress-linear__background bg-primary"
                                                                                                style="width: 100%;">
                                                                                            </div>
                                                                                            <div
                                                                                                class="v-progress-linear__indeterminate">
                                                                                                <div
                                                                                                    class="v-progress-linear__indeterminate long bg-primary">
                                                                                                </div>
                                                                                                <div
                                                                                                    class="v-progress-linear__indeterminate short bg-primary">
                                                                                                </div>
                                                                                            </div><!---->
                                                                                        </div>
                                                                                    </div><!---->
                                                                                    <div class="v-field__field"
                                                                                        data-no-activator="">
                                                                                        <!----><label
                                                                                            class="v-label v-field-label"
                                                                                            for="app-textarea-Message-psfy9"><!----><!----></label><!---->
                                                                                        <textarea class="v-field__input" placeholder="Write a message" rows="5" id="app-textarea-Message-psfy9"
                                                                                            aria-describedby="app-textarea-Message-psfy9-messages"></textarea>
                                                                                        <!----><!---->
                                                                                    </div><!----><!---->
                                                                                    <div class="v-field__outline">
                                                                                        <div
                                                                                            class="v-field__outline__start">
                                                                                        </div><!---->
                                                                                        <div
                                                                                            class="v-field__outline__end">
                                                                                        </div><!---->
                                                                                    </div>
                                                                                </div>
                                                                            </div><!----><!---->
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div data-v-45c21fec="" class="v-col"><button
                                                                        data-v-45c21fec="" type="submit"
                                                                        class="v-btn v-btn--elevated v-theme--dark bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"><span
                                                                            class="v-btn__overlay"></span><span
                                                                            class="v-btn__underlay"></span><!----><span
                                                                            class="v-btn__content"
                                                                            data-no-activator=""> Send Inquiry
                                                                        </span><!----><!----></button></div>
                                                            </div>
                                                        </form>
                                                    </div><!----><!----><span class="v-card__underlay"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-v-bf9cf05e="" class="footer">
                                <div data-v-bf9cf05e="" class="footer-top pt-15"
                                    style="background-image: url(&quot;/build/assets/footer-bg-dark-06b203c0.png&quot;);">
                                    <div data-v-bf9cf05e="" class="v-container v-locale--is-ltr">
                                        <div data-v-bf9cf05e="" class="v-row">
                                            <div data-v-bf9cf05e="" class="v-col-md-5 v-col-12">
                                                <div data-v-bf9cf05e="" class="mb-4 w-75">
                                                    <div data-v-bf9cf05e=""
                                                        class="d-flex align-center gap-x-3 mb-4">
                                                        <div data-v-bf9cf05e=""
                                                            style="line-height: 0; width: 7rem; color: rgb(var(--v-global-theme-primary));">
                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                xmlns:svgjs="http://svgjs.dev/svgjs"
                                                                viewBox="0 0 1500 458">
                                                                <g
                                                                    transform="matrix(1,0,0,1,-0.9090909090911055,0.1295368107894035)">
                                                                    <svg viewBox="0 0 396 121"
                                                                        data-background-color="primary"
                                                                        preserveAspectRatio="xMidYMid meet"
                                                                        height="458" width="1500"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink">
                                                                        <g id="tight-bounds"
                                                                            transform="matrix(1,0,0,1,0.24000000000003752,-0.03422260721728776)">
                                                                            <svg viewBox="0 0 395.5199999999999 121.06844521443459"
                                                                                height="121.06844521443459"
                                                                                width="395.5199999999999">
                                                                                <g><svg viewBox="0 0 602.4847466267115 184.42023548621697"
                                                                                        height="121.06844521443459"
                                                                                        width="395.5199999999999">
                                                                                        <g
                                                                                            transform="matrix(1,0,0,1,204.98714662671156,7.814136993577591)">
                                                                                            <svg viewBox="0 0 397.4975999999999 168.79196149906178"
                                                                                                height="168.79196149906178"
                                                                                                width="397.4975999999999">
                                                                                                <g
                                                                                                    id="textblocktransform">
                                                                                                    <svg viewBox="0 0 397.4975999999999 168.79196149906178"
                                                                                                        height="168.79196149906178"
                                                                                                        width="397.4975999999999"
                                                                                                        id="textblock">
                                                                                                        <g>
                                                                                                            <rect
                                                                                                                width="397.4975999999999"
                                                                                                                height="7.925357448203832"
                                                                                                                x="0"
                                                                                                                y="97.21890803409534"
                                                                                                                fill="#f4f3f0"
                                                                                                                opacity="1"
                                                                                                                stroke-width="0"
                                                                                                                stroke="transparent"
                                                                                                                fill-opacity="1"
                                                                                                                class="rect-qz-0"
                                                                                                                data-fill-palette-color="primary"
                                                                                                                rx="1%"
                                                                                                                id="qz-0"
                                                                                                                data-palette-color="#f4f3f0">
                                                                                                            </rect>
                                                                                                        </g>
                                                                                                        <g
                                                                                                            transform="matrix(1,0,0,1,0.9887999999999693,0)">
                                                                                                            <svg viewBox="0 0 395.52 87.88275397207511"
                                                                                                                height="87.88275397207511"
                                                                                                                width="395.52">
                                                                                                                <g
                                                                                                                    transform="matrix(1,0,0,1,0,0)">
                                                                                                                    <svg width="395.52"
                                                                                                                        viewBox="1.6 -36.3 207.68 46.15"
                                                                                                                        height="87.88275397207511"
                                                                                                                        data-palette-color="#f4f3f0">
                                                                                                                        <path
                                                                                                                            d="M15.55-27Q20.85-27 24.53-24.93 28.2-22.85 28.2-18.5L28.2-18.5 18.95-18.5Q18.95-19.95 17.65-20.55L17.65-20.55Q16.75-21.05 15.4-21.05L15.4-21.05Q11.8-21.05 11.8-19.35L11.8-19.35Q11.8-18.4 13.05-18 14.3-17.6 17.15-17.15L17.15-17.15Q20.65-16.65 23-15.98 25.35-15.3 27.1-13.58 28.85-11.85 28.85-8.75L28.85-8.75Q28.85-3.7 25.08-1.55 21.3 0.6 15.2 0.6L15.2 0.6Q11.7 0.6 8.6-0.38 5.5-1.35 3.55-3.4 1.6-5.45 1.6-8.6L1.6-8.6 10.85-8.6 10.85-8.4Q10.9-6.7 12.28-6.03 13.65-5.35 15.2-5.35L15.2-5.35Q19.35-5.35 19.35-7.3L19.35-7.3Q19.35-8.3 18.05-8.75 16.75-9.2 13.8-9.7L13.8-9.7Q10.25-10.3 7.98-11 5.7-11.7 4-13.38 2.3-15.05 2.3-18.05L2.3-18.05Q2.3-22.9 5.98-24.95 9.65-27 15.55-27L15.55-27ZM43.5-16.3L51.95-26.4 63.55-26.4 53.8-15.75 63.8 0 52.5 0 46.95-9.05 43.5-5.7 43.5 0 33.55 0 33.55-36.3 43.5-36.3 43.5-16.3ZM77.2-29.5L67.25-29.5 67.25-36.25 77.2-36.25 77.2-29.5ZM77.2 0L67.25 0 67.25-26.4 77.2-26.4 77.2 0ZM93.84 0L83.89 0 83.89-36.25 93.84-36.25 93.84 0ZM110.49 0L100.54 0 100.54-36.25 110.49-36.25 110.49 0ZM129.39-27Q134.69-27 138.36-24.93 142.04-22.85 142.04-18.5L142.04-18.5 132.79-18.5Q132.79-19.95 131.49-20.55L131.49-20.55Q130.59-21.05 129.24-21.05L129.24-21.05Q125.64-21.05 125.64-19.35L125.64-19.35Q125.64-18.4 126.89-18 128.14-17.6 130.99-17.15L130.99-17.15Q134.49-16.65 136.84-15.98 139.19-15.3 140.94-13.58 142.69-11.85 142.69-8.75L142.69-8.75Q142.69-3.7 138.91-1.55 135.14 0.6 129.04 0.6L129.04 0.6Q125.54 0.6 122.44-0.38 119.34-1.35 117.39-3.4 115.44-5.45 115.44-8.6L115.44-8.6 124.69-8.6 124.69-8.4Q124.74-6.7 126.11-6.03 127.49-5.35 129.04-5.35L129.04-5.35Q133.19-5.35 133.19-7.3L133.19-7.3Q133.19-8.3 131.89-8.75 130.59-9.2 127.64-9.7L127.64-9.7Q124.09-10.3 121.81-11 119.54-11.7 117.84-13.38 116.14-15.05 116.14-18.05L116.14-18.05Q116.14-22.9 119.81-24.95 123.49-27 129.39-27L129.39-27ZM174.69 0L166.54 0 165.89-4Q164.34-1.85 161.81-0.63 159.29 0.6 156.49 0.6L156.49 0.6Q151.89 0.6 149.59-1.95 147.29-4.5 147.29-9.3L147.29-9.3 147.29-26.4 157.24-26.4 157.24-10.5Q157.24-8.8 158.11-7.78 158.99-6.75 160.59-6.75L160.59-6.75Q162.44-6.75 163.59-7.95 164.74-9.15 164.74-10.9L164.74-10.9 164.74-26.4 174.69-26.4 174.69 0ZM198.13-27Q203.48-27 206.38-23.5 209.28-20 209.28-13.15L209.28-13.15Q209.28-6.35 206.38-2.88 203.48 0.6 198.13 0.6L198.13 0.6Q193.53 0.6 190.73-2.4L190.73-2.4 190.73 9.85 180.78 9.85 180.78-26.4 188.88-26.4 189.73-22.65Q192.63-27 198.13-27L198.13-27ZM195.03-19.65Q192.83-19.65 191.73-18.1 190.63-16.55 190.63-14.05L190.63-14.05 190.63-12.4Q190.63-9.9 191.73-8.33 192.83-6.75 195.03-6.75L195.03-6.75Q199.33-6.75 199.33-11.9L199.33-11.9 199.33-14.55Q199.33-19.65 195.03-19.65L195.03-19.65Z"
                                                                                                                            opacity="1"
                                                                                                                            transform="matrix(1,0,0,1,0,0)"
                                                                                                                            fill="#f4f3f0"
                                                                                                                            class="wordmark-text-0"
                                                                                                                            data-fill-palette-color="primary"
                                                                                                                            id="text-0">
                                                                                                                        </path>
                                                                                                                    </svg>
                                                                                                                </g>
                                                                                                            </svg></g>
                                                                                                        <g
                                                                                                            transform="matrix(1,0,0,1,0,114.48041954431937)">
                                                                                                            <svg viewBox="0 0 395.52 54.31154195474242"
                                                                                                                height="54.31154195474242"
                                                                                                                width="395.52">
                                                                                                                <g
                                                                                                                    transform="matrix(1,0,0,1,0,0)">
                                                                                                                    <svg width="395.52"
                                                                                                                        viewBox="3.8499999999999996 -27 200.26499998 27.5"
                                                                                                                        height="54.31154195474242"
                                                                                                                        data-palette-color="#f4f3f0">
                                                                                                                        <path
                                                                                                                            d="M4.55 0L4.55 0Q3.85 0 3.85-0.65L3.85-0.65 3.85-25.85Q3.85-26.5 4.4-26.5L4.4-26.5 7.4-26.5Q7.9-26.5 7.9-25.95L7.9-25.95 7.9-23.05Q7.9-22.8 8.03-22.75 8.15-22.7 8.4-22.9L8.4-22.9Q10-24.2 11.38-25.13 12.75-26.05 14.18-26.53 15.6-27 17.25-27L17.25-27Q20.2-27 21.98-25.65 23.75-24.3 24.35-22.6L24.35-22.6Q24.45-22.4 24.65-22.45 24.85-22.5 25.05-22.7L25.05-22.7Q26.65-24.05 28.08-25 29.5-25.95 30.98-26.48 32.45-27 34.1-27L34.1-27Q37.75-27 39.75-24.93 41.75-22.85 41.75-19.35L41.75-19.35 41.75-0.8Q41.75 0 41 0L41 0 38.2 0Q37.85 0 37.7-0.18 37.55-0.35 37.55-0.65L37.55-0.65 37.55-18.5Q37.55-20.95 36.38-22.33 35.2-23.7 32.7-23.7L32.7-23.7Q31.25-23.7 29.93-23.15 28.6-22.6 27.53-21.8 26.45-21 25.6-20.3L25.6-20.3Q25.2-19.95 25.05-19.63 24.9-19.3 24.9-18.8L24.9-18.8 24.9-0.8Q24.9 0 24.15 0L24.15 0 21.35 0Q21.05 0 20.88-0.18 20.7-0.35 20.7-0.65L20.7-0.65 20.7-18.5Q20.7-20.95 19.55-22.33 18.4-23.7 15.9-23.7L15.9-23.7Q13.8-23.7 12.05-22.7 10.3-21.7 8.05-19.65L8.05-19.65 8.05-0.75Q8.05 0 7.3 0L7.3 0 4.55 0ZM78.74-3.2L78.74-3.2Q76.89-1.4 74.72-0.45 72.54 0.5 69.84 0.5L69.84 0.5Q65.94 0.5 63.72-1.5 61.49-3.5 61.49-6.75L61.49-6.75Q61.49-9.4 62.99-11.33 64.49-13.25 67.44-14.38 70.39-15.5 74.69-15.75L74.69-15.75 78.59-16.05Q78.89-16.1 79.14-16.25 79.39-16.4 79.39-16.8L79.39-16.8 79.39-18.15Q79.39-20.85 77.72-22.43 76.04-24 73.19-24L73.19-24Q70.99-24 69.22-23 67.44-22 66.04-20L66.04-20Q65.84-19.75 65.72-19.68 65.59-19.6 65.29-19.7L65.29-19.7 62.59-20.6Q62.44-20.7 62.37-20.85 62.29-21 62.49-21.4L62.49-21.4Q63.99-24 66.72-25.5 69.44-27 73.39-27L73.39-27Q76.74-27 78.97-25.98 81.19-24.95 82.32-23.03 83.44-21.1 83.44-18.45L83.44-18.45 83.44-0.75Q83.44-0.3 83.29-0.15 83.14 0 82.79 0L82.79 0 80.24 0Q79.89 0 79.74-0.23 79.59-0.45 79.54-0.8L79.54-0.8 79.49-3.1Q79.34-3.8 78.74-3.2L78.74-3.2ZM79.39-12.7L79.39-12.7Q79.39-13.55 78.69-13.5L78.69-13.5 75.39-13.2Q73.09-13.1 71.29-12.63 69.49-12.15 68.24-11.4 66.99-10.65 66.34-9.63 65.69-8.6 65.69-7.25L65.69-7.25Q65.69-5.05 67.22-3.83 68.74-2.6 71.34-2.6L71.34-2.6Q72.94-2.6 74.42-3.18 75.89-3.75 76.99-4.65L76.99-4.65Q78.14-5.6 78.77-6.6 79.39-7.6 79.39-8.55L79.39-8.55 79.39-12.7ZM105.94 0L105.94 0Q105.59 0 105.41-0.18 105.24-0.35 105.24-0.65L105.24-0.65 105.24-25.85Q105.24-26.5 105.79-26.5L105.79-26.5 108.69-26.5Q109.24-26.5 109.24-25.95L109.24-25.95 109.24-22.7Q109.24-22.4 109.39-22.35 109.54-22.3 109.79-22.55L109.79-22.55Q111.09-24.1 112.36-25.08 113.64-26.05 114.94-26.53 116.24-27 117.54-27L117.54-27Q119.29-27 119.29-26.35L119.29-26.35 119.29-23.35Q119.29-22.85 118.84-22.95L118.84-22.95Q118.39-23 117.81-23.05 117.24-23.1 116.59-23.1L116.59-23.1Q115.49-23.1 114.24-22.63 112.99-22.15 111.91-21.3 110.84-20.45 110.14-19.4 109.44-18.35 109.44-17.3L109.44-17.3 109.44-0.75Q109.44 0 108.69 0L108.69 0 105.94 0ZM149.18 0.5L149.18 0.5Q145.43 0.5 142.55-1.23 139.68-2.95 138.1-6.03 136.53-9.1 136.53-13.1L136.53-13.1Q136.53-17.25 138.15-20.38 139.78-23.5 142.63-25.25 145.48-27 149.23-27L149.23-27Q153.03-27 155.85-25.23 158.68-23.45 160.25-20.33 161.83-17.2 161.83-13.15L161.83-13.15Q161.83-9.15 160.23-6.08 158.63-3 155.8-1.25 152.98 0.5 149.18 0.5L149.18 0.5ZM149.28-2.65L149.28-2.65Q151.88-2.65 153.73-3.93 155.58-5.2 156.55-7.58 157.53-9.95 157.53-13.25L157.53-13.25Q157.53-16.55 156.53-18.93 155.53-21.3 153.68-22.6 151.83-23.9 149.23-23.9L149.23-23.9Q146.68-23.9 144.78-22.6 142.88-21.3 141.85-18.93 140.83-16.55 140.83-13.25L140.83-13.25Q140.83-10 141.85-7.6 142.88-5.2 144.78-3.93 146.68-2.65 149.28-2.65L149.28-2.65ZM193.37-27L193.37-27Q195.97-27 197.95-26.18 199.92-25.35 201.35-23.93 202.77-22.5 203.72-20.8L203.72-20.8Q204.02-20.2 203.47-20.05L203.47-20.05 200.72-19.4Q200.37-19.25 200.07-19.7L200.07-19.7Q199.07-21.15 198.1-22.05 197.12-22.95 196.02-23.43 194.92-23.9 193.62-23.9L193.62-23.9Q191.07-23.9 189.15-22.63 187.22-21.35 186.17-18.95 185.12-16.55 185.12-13.25L185.12-13.25Q185.12-9.9 186.2-7.5 187.27-5.1 189.2-3.85 191.12-2.6 193.72-2.6L193.72-2.6Q196.12-2.6 197.87-3.8 199.62-5 201.07-7.3L201.07-7.3Q201.22-7.55 201.35-7.58 201.47-7.6 201.72-7.5L201.72-7.5 203.87-6.7Q204.22-6.55 204.07-6.05L204.07-6.05Q203.32-4.75 202.32-3.55 201.32-2.35 200-1.45 198.67-0.55 197.02-0.03 195.37 0.5 193.37 0.5L193.37 0.5Q189.67 0.5 186.85-1.23 184.02-2.95 182.42-6.03 180.82-9.1 180.82-13.15L180.82-13.15Q180.82-17.25 182.45-20.35 184.07-23.45 186.9-25.23 189.72-27 193.37-27L193.37-27Z"
                                                                                                                            opacity="1"
                                                                                                                            transform="matrix(1,0,0,1,0,0)"
                                                                                                                            fill="#f4f3f0"
                                                                                                                            class="slogan-text-1"
                                                                                                                            data-fill-palette-color="secondary"
                                                                                                                            id="text-1">
                                                                                                                        </path>
                                                                                                                    </svg>
                                                                                                                </g>
                                                                                                            </svg></g>
                                                                                                    </svg></g>
                                                                                            </svg></g>
                                                                                        <g><svg viewBox="0 0 184.24013759999997 184.42023548621697"
                                                                                                height="184.42023548621697"
                                                                                                width="184.24013759999997">
                                                                                                <g><svg xmlns="http://www.w3.org/2000/svg"
                                                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                                        version="1.1"
                                                                                                        x="0" y="0"
                                                                                                        viewBox="0 0 63.9375 64"
                                                                                                        enable-background="new 0 0 64 64"
                                                                                                        xml:space="preserve"
                                                                                                        height="184.42023548621697"
                                                                                                        width="184.24013759999997"
                                                                                                        class="icon-icon-0"
                                                                                                        data-fill-palette-color="accent"
                                                                                                        id="icon-0">
                                                                                                        <g fill="#2092ec"
                                                                                                            data-fill-palette-color="accent">
                                                                                                            <path
                                                                                                                d="M48.2 14.6c-0.8-1.4-1.8-2.6-2.9-3.8-0.4-0.4-1-0.4-1.4 0-0.4 0.4-0.4 1 0 1.4 1 1 1.9 2.1 2.6 3.4 0.4 0.5 0.8 0.6 1.4 0.4C48.3 15.7 48.5 15.1 48.2 14.6z"
                                                                                                                fill="#2092ec"
                                                                                                                data-fill-palette-color="accent">
                                                                                                            </path>
                                                                                                            <path
                                                                                                                d="M20.1 36c-0.9-0.9-1.6-1.8-2.3-2.8-0.3-0.5-0.9-0.6-1.4-0.3-0.5 0.3-0.6 0.9-0.3 1.4 0.7 1.1 1.6 2.2 2.5 3.1 0.5 0.4 1 0.4 1.4 0C20.5 37 20.5 36.4 20.1 36z"
                                                                                                                fill="#2092ec"
                                                                                                                data-fill-palette-color="accent">
                                                                                                            </path>
                                                                                                            <path
                                                                                                                d="M50 18.6c-0.2-0.5-0.7-0.8-1.2-0.7-0.5 0.2-0.8 0.7-0.7 1.2 1.8 6 0.2 12.4-4.2 16.8-0.4 0.4-0.4 1 0 1.4 0.4 0.4 0.9 0.4 1.4 0C50.2 32.5 52 25.3 50 18.6z"
                                                                                                                fill="#2092ec"
                                                                                                                data-fill-palette-color="accent">
                                                                                                            </path>
                                                                                                            <path
                                                                                                                d="M20.1 12.2c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0c-5 5-6.8 12.2-4.6 19 0.1 0.4 0.5 0.7 1 0.7 0.1 0 0.2 0 0.3 0 0.5-0.2 0.8-0.7 0.7-1.3C14.1 23.2 15.7 16.7 20.1 12.2z"
                                                                                                                fill="#2092ec"
                                                                                                                data-fill-palette-color="accent">
                                                                                                            </path>
                                                                                                            <path
                                                                                                                d="M59.5 53.3c0-3.4 1.5-6.7 4.1-8.9 0.3-0.3 0.4-0.7 0.3-1.1-0.1-0.4-0.5-0.7-0.9-0.7H47.4c5.3-4.4 8.7-11.1 8.7-18.6C56.1 10.8 45.3 0 32 0 18.7 0 7.9 10.8 7.9 24.1c0 7.5 3.4 14.1 8.7 18.6h-6C4.8 42.7 0 47.5 0 53.3S4.8 64 10.6 64H63c0.4 0 0.8-0.3 0.9-0.7 0.1-0.4 0-0.8-0.3-1.1C61 60 59.5 56.8 59.5 53.3zM9.9 24.1C9.9 11.9 19.8 2 32 2s22.1 9.9 22.1 22.1c0 7.8-4 14.6-10.1 18.6H20C13.9 38.7 9.9 31.9 9.9 24.1zM10.6 62C5.9 62 2 58.1 2 53.3s3.9-8.7 8.6-8.7h50c-2 2.4-3.1 5.5-3.1 8.7 0 3.2 1.1 6.2 3.1 8.7H10.6z"
                                                                                                                fill="#2092ec"
                                                                                                                data-fill-palette-color="accent">
                                                                                                            </path>
                                                                                                            <path
                                                                                                                d="M32 30.9c3.8 0 6.8-3.1 6.8-6.8s-3.1-6.8-6.8-6.8-6.8 3.1-6.8 6.8S28.2 30.9 32 30.9zM32 19.3c2.6 0 4.8 2.2 4.8 4.8 0 2.6-2.2 4.8-4.8 4.8-2.6 0-4.8-2.2-4.8-4.8C27.2 21.5 29.4 19.3 32 19.3z"
                                                                                                                fill="#2092ec"
                                                                                                                data-fill-palette-color="accent">
                                                                                                            </path>
                                                                                                            <path
                                                                                                                d="M17.3 55.8h-2.5c-0.6 0-1 0.4-1 1s0.4 1 1 1h2.5c0.6 0 1-0.4 1-1S17.8 55.8 17.3 55.8z"
                                                                                                                fill="#2092ec"
                                                                                                                data-fill-palette-color="accent">
                                                                                                            </path>
                                                                                                            <path
                                                                                                                d="M48.9 55.8H21.7c-0.6 0-1 0.4-1 1s0.4 1 1 1h27.2c0.6 0 1-0.4 1-1S49.5 55.8 48.9 55.8z"
                                                                                                                fill="#2092ec"
                                                                                                                data-fill-palette-color="accent">
                                                                                                            </path>
                                                                                                            <path
                                                                                                                d="M48.9 48.9H14.8c-0.6 0-1 0.4-1 1s0.4 1 1 1h34.1c0.6 0 1-0.4 1-1S49.5 48.9 48.9 48.9z"
                                                                                                                fill="#2092ec"
                                                                                                                data-fill-palette-color="accent">
                                                                                                            </path>
                                                                                                        </g>
                                                                                                    </svg></g>
                                                                                            </svg></g>
                                                                                    </svg></g>
                                                                                <defs></defs>
                                                                            </svg>
                                                                            <rect width="395.5199999999999"
                                                                                height="121.06844521443459"
                                                                                fill="none" stroke="none"
                                                                                visibility="hidden"></rect>
                                                                        </g>
                                                                    </svg></g>
                                                            </svg>
                                                        </div>
                                                        <h3 data-v-bf9cf05e=""
                                                            class="text-h3 text-white text-capitalize">vuexy</h3>
                                                    </div>
                                                    <div data-v-bf9cf05e="" class="mb-8 text-body-1"> Most Powerful
                                                        &amp; Comprehensive 🤩 Vuejs Admin Template with Elegant
                                                        Material Design &amp; Unique Layouts. </div>
                                                    <form data-v-bf9cf05e=""
                                                        class="v-form subscribe-form d-flex align-center"
                                                        novalidate="">
                                                        <div data-v-bf9cf05e="" class="app-text-field flex-grow-1">
                                                            <label class="v-label mb-1 text-body-2 text-high-emphasis"
                                                                for="app-text-field-Subscribe to newsletter-ldxcv">Subscribe
                                                                to newsletter<!----></label>
                                                            <div
                                                                class="v-input v-input--horizontal v-input--center-affix v-input--density-compact v-locale--is-ltr v-text-field">
                                                                <!---->
                                                                <div class="v-input__control">
                                                                    <div
                                                                        class="v-field v-field--center-affix v-field--no-label v-field--variant-outlined v-theme--dark v-locale--is-ltr">
                                                                        <div class="v-field__overlay"></div>
                                                                        <div class="v-field__loader">
                                                                            <div class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--dark v-locale--is-ltr"
                                                                                role="progressbar"
                                                                                aria-hidden="true" aria-valuemin="0"
                                                                                aria-valuemax="100"
                                                                                style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                                <!---->
                                                                                <div class="v-progress-linear__background bg-primary"
                                                                                    style="width: 100%;"></div>
                                                                                <div
                                                                                    class="v-progress-linear__indeterminate">
                                                                                    <div
                                                                                        class="v-progress-linear__indeterminate long bg-primary">
                                                                                    </div>
                                                                                    <div
                                                                                        class="v-progress-linear__indeterminate short bg-primary">
                                                                                    </div>
                                                                                </div><!---->
                                                                            </div>
                                                                        </div><!---->
                                                                        <div class="v-field__field"
                                                                            data-no-activator=""><!----><label
                                                                                class="v-label v-field-label"
                                                                                for="app-text-field-Subscribe to newsletter-ldxcv"><!----><!----></label><!----><input
                                                                                placeholder="john@email.co"
                                                                                size="1" type="text"
                                                                                id="app-text-field-Subscribe to newsletter-ldxcv"
                                                                                aria-describedby="app-text-field-Subscribe to newsletter-ldxcv-messages"
                                                                                class="v-field__input"><!----></div>
                                                                        <!----><!---->
                                                                        <div class="v-field__outline">
                                                                            <div class="v-field__outline__start">
                                                                            </div><!---->
                                                                            <div class="v-field__outline__end"></div>
                                                                            <!---->
                                                                        </div>
                                                                    </div>
                                                                </div><!----><!---->
                                                            </div>
                                                        </div><button data-v-bf9cf05e="" type="button"
                                                            class="v-btn v-btn--elevated v-theme--dark bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated align-self-end rounded-s-0"
                                                            style="height: 40px;"><span
                                                                class="v-btn__overlay"></span><span
                                                                class="v-btn__underlay"></span><!----><span
                                                                class="v-btn__content" data-no-activator="">
                                                                Subscribe </span><!----><!----></button>
                                                    </form>
                                                </div>
                                            </div>
                                            <div data-v-bf9cf05e="" class="v-col-sm-4 v-col-md-2 v-col-12">
                                                <div data-v-bf9cf05e="">
                                                    <div data-v-bf9cf05e="" class="font-weight-medium mb-6">Demos
                                                    </div>
                                                    <ul data-v-bf9cf05e="" style="list-style: none;"></ul>
                                                </div>
                                            </div>
                                            <div data-v-bf9cf05e="" class="v-col-sm-4 v-col-md-2 v-col-12">
                                                <div data-v-bf9cf05e="">
                                                    <div data-v-bf9cf05e="" class="font-weight-medium mb-6">Pages
                                                    </div>
                                                    <ul data-v-bf9cf05e="" style="list-style: none;"></ul>
                                                </div>
                                            </div>
                                            <div data-v-bf9cf05e="" class="v-col-sm-4 v-col-md-3 v-col-12">
                                                <div data-v-bf9cf05e="">
                                                    <div data-v-bf9cf05e="" class="font-weight-medium mb-6">Download
                                                        our app</div>
                                                    <div data-v-bf9cf05e=""><button data-v-bf9cf05e=""
                                                            type="button"
                                                            class="v-btn v-btn--elevated v-theme--dark v-btn--density-default v-btn--size-x-large v-btn--variant-elevated mb-4 d-block"
                                                            style="background-color: rgb(40, 44, 62); color: rgb(255, 255, 255); caret-color: rgb(255, 255, 255);"><span
                                                                class="v-btn__overlay"></span><span
                                                                class="v-btn__underlay"></span><!----><span
                                                                class="v-btn__content" data-no-activator="">
                                                                <div data-v-bf9cf05e="" class="d-flex gap-x-3">
                                                                    <div data-v-bf9cf05e="">
                                                                        <div data-v-bf9cf05e=""
                                                                            class="v-responsive v-img v-img--booting"
                                                                            style="height: 34px; width: 34px;">
                                                                            <div class="v-responsive__sizer"></div>
                                                                            <!----><!----><!----><!----><!----><!---->
                                                                        </div>
                                                                    </div>
                                                                    <div data-v-bf9cf05e=""
                                                                        class="d-flex flex-column justify-content-start">
                                                                        <div data-v-bf9cf05e=""
                                                                            class="text-body-2 font-weight-normal">
                                                                            Download on the </div>
                                                                        <div data-v-bf9cf05e=""
                                                                            class="font-weight-medium text-start text-body-1">
                                                                            App Store</div>
                                                                    </div>
                                                                </div>
                                                            </span><!----><!----></button><button data-v-bf9cf05e=""
                                                            type="button"
                                                            class="v-btn v-btn--elevated v-theme--dark v-btn--density-default v-btn--size-x-large v-btn--variant-elevated mb-4 d-block"
                                                            style="background-color: rgb(40, 44, 62); color: rgb(255, 255, 255); caret-color: rgb(255, 255, 255);"><span
                                                                class="v-btn__overlay"></span><span
                                                                class="v-btn__underlay"></span><!----><span
                                                                class="v-btn__content" data-no-activator="">
                                                                <div data-v-bf9cf05e="" class="d-flex gap-x-3">
                                                                    <div data-v-bf9cf05e="">
                                                                        <div data-v-bf9cf05e=""
                                                                            class="v-responsive v-img v-img--booting"
                                                                            style="height: 34px; width: 34px;">
                                                                            <div class="v-responsive__sizer"></div>
                                                                            <!----><!----><!----><!----><!----><!---->
                                                                        </div>
                                                                    </div>
                                                                    <div data-v-bf9cf05e=""
                                                                        class="d-flex flex-column justify-content-start">
                                                                        <div data-v-bf9cf05e=""
                                                                            class="text-body-2 font-weight-normal">
                                                                            Download on the </div>
                                                                        <div data-v-bf9cf05e=""
                                                                            class="font-weight-medium text-start text-body-1">
                                                                            Google Play</div>
                                                                    </div>
                                                                </div>
                                                            </span><!----><!----></button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-v-bf9cf05e="" class="text-white-variant footer-line w-100">
                                    <div data-v-bf9cf05e="" class="v-container v-locale--is-ltr">
                                        <div data-v-bf9cf05e=""
                                            class="d-flex justify-space-between flex-wrap gap-y-4 align-center"><span
                                                data-v-bf9cf05e="" class="text-wrap me-4"> © 2024 <a
                                                    data-v-bf9cf05e="" href="https://pixinvent.com/"
                                                    target="_blank" rel="noopener noreferrer"
                                                    class="font-weight-bold ms-1 text-white">Pixinvent</a>, Made With
                                                <svg data-v-bf9cf05e="" xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                                                    role="img" tag="i"
                                                    class="v-icon notranslate v-theme--dark text-error mx-1 iconify iconify--tabler"
                                                    width="1em" height="1em" viewBox="0 0 24 24"
                                                    style="font-size: 1.25rem; height: 1.25rem; width: 1.25rem;">
                                                    <g fill="none" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2">
                                                        <path d="M0 0h24v24H0z"></path>
                                                        <path fill="currentColor"
                                                            d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037.033l.034-.03a6 6 0 0 1 4.733-1.44l.246.036a6 6 0 0 1 3.364 10.008l-.18.185l-.048.041l-7.45 7.379a1 1 0 0 1-1.313.082l-.094-.082l-7.493-7.422A6 6 0 0 1 6.979 3.074">
                                                        </path>
                                                    </g>
                                                </svg> for a better web. </span>
                                            <div data-v-bf9cf05e="" class="d-flex gap-x-6"><a data-v-bf9cf05e=""
                                                    href="https://github.com/pixinvent" target="_blank"
                                                    rel="noopener noreferrer">
                                                    <div data-v-bf9cf05e=""
                                                        class="v-avatar v-theme--dark v-avatar--density-default v-avatar--variant-flat rounded-0"
                                                        style="width: 16px; height: 16px;">
                                                        <div data-v-bf9cf05e=""
                                                            class="v-responsive v-img v-img--booting"
                                                            style="width: 16px;">
                                                            <div class="v-responsive__sizer"></div>
                                                            <!----><!----><!----><!----><!----><!---->
                                                        </div><!----><span class="v-avatar__underlay"></span>
                                                    </div>
                                                </a><a data-v-bf9cf05e=""
                                                    href="https://www.facebook.com/pixinvents/" target="_blank"
                                                    rel="noopener noreferrer">
                                                    <div data-v-bf9cf05e=""
                                                        class="v-avatar v-theme--dark v-avatar--density-default v-avatar--variant-flat rounded-0"
                                                        style="width: 16px; height: 16px;">
                                                        <div data-v-bf9cf05e=""
                                                            class="v-responsive v-img v-img--booting"
                                                            style="width: 16px;">
                                                            <div class="v-responsive__sizer"></div>
                                                            <!----><!----><!----><!----><!----><!---->
                                                        </div><!----><span class="v-avatar__underlay"></span>
                                                    </div>
                                                </a><a data-v-bf9cf05e="" href="https://twitter.com/pixinvents"
                                                    target="_blank" rel="noopener noreferrer">
                                                    <div data-v-bf9cf05e=""
                                                        class="v-avatar v-theme--dark v-avatar--density-default v-avatar--variant-flat rounded-0"
                                                        style="width: 16px; height: 16px;">
                                                        <div data-v-bf9cf05e=""
                                                            class="v-responsive v-img v-img--booting"
                                                            style="width: 16px;">
                                                            <div class="v-responsive__sizer"></div>
                                                            <!----><!----><!----><!----><!----><!---->
                                                        </div><!----><span class="v-avatar__underlay"></span>
                                                    </div>
                                                </a><a data-v-bf9cf05e=""
                                                    href="https://www.instagram.com/pixinvents/" target="_blank"
                                                    rel="noopener noreferrer">
                                                    <div data-v-bf9cf05e=""
                                                        class="v-avatar v-theme--dark v-avatar--density-default v-avatar--variant-flat rounded-0"
                                                        style="width: 16px; height: 16px;">
                                                        <div data-v-bf9cf05e=""
                                                            class="v-responsive v-img v-img--booting"
                                                            style="width: 16px;">
                                                            <div class="v-responsive__sizer"></div>
                                                            <!----><!----><!----><!----><!----><!---->
                                                        </div><!----><span class="v-avatar__underlay"></span>
                                                    </div>
                                                </a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><button type="button"
                        class="v-btn v-btn--elevated v-btn--icon v-theme--dark bg-primary v-btn--density-comfortable v-btn--size-default v-btn--variant-elevated scroll-to-top d-print-none"
                        style="transform-origin: center center; display: none;"><span
                            class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span
                            class="v-btn__content" data-no-activator=""><svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                tag="i" class="v-icon notranslate v-theme--dark iconify iconify--tabler"
                                width="1em" height="1em" viewBox="0 0 24 24"
                                style="font-size: 22px; height: 22px; width: 22px;">
                                <path fill="none" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2" d="M12 5v14m6-8l-6-6m-6 6l6-6"></path>
                            </svg></span><!----><!----></button><!----><!---->
                </div>
            </div>
        </div>
    </div>

    <script>
        const loaderColor = localStorage.getItem('vuexy-initial-loader-bg') || '#FFFFFF'
        const primaryColor = localStorage.getItem('vuexy-initial-loader-color') || '#7367F0'

        if (loaderColor)
            document.documentElement.style.setProperty('--initial-loader-bg', loaderColor)

        if (primaryColor)
            document.documentElement.style.setProperty('--initial-loader-color', primaryColor)
    </script>



    <div id="loom-companion-mv3" ext-id="liecbddmkiiihnedobmlmillhodjkdmb">
        <section id="shadow-host-companion"></section>
    </div>
    <div class="v-overlay-container">
        <div class="v-overlay v-overlay--absolute v-theme--dark v-locale--is-ltr v-tooltip" id="v-tooltip-5"
            role="tooltip" style="z-index: 2000;"><!---->
            <div class="v-overlay__content" style="min-width: 0px; display: none;"
                target="[object HTMLButtonElement]"><span class="text-capitalize">dark</span></div>
        </div>
    </div>
</body>

</html>
