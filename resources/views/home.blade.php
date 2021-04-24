<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#15a1bc"/>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="manifest" href="{{ asset('manifest.json') }}">
        <link rel="icon" href="{{ asset('images/favicon-32x32.png') }}" sizes="32x32">
        <link rel="icon" href="{{ asset('images/favicon-192x192.png') }}" sizes="192x192">
        <link rel="stylesheet" href="{{ mix('css/all.css') }}">
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <title>CFD & Forex Trading Broker in Australia | FP Markets</title>

    </head>
    <body>
        <div id='app'></div>
        <script src="{{ mix('js/app.js') }}"></script>

        <!-- Prompt a message in the browser if users disabled JS -->
        <noscript>Your browser does not support JavaScript!</noscript>
    </body>
</html>
