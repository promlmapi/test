@component('mail::layout')

{{-- Body --}}
@if (isset($slot))
{{ $slot }}
@endif

{{-- Message --}}
@if (isset($message))
{!! $message !!}
@endif

@for ($i = 0; $i <= 3; $i++)

@php
$value = $i == 0 ? '' : $i;
@endphp

{{-- Heading --}}
@if (isset( ${'headingSuper' . $value}))
@component('mail::heading-super')
{!! ${'headingSuper' . $value} !!}
@endcomponent
@endif

{{-- Greeting --}}
@if (isset(${'greeting' . $value}))
@component('mail::greeting', ['user' => ${'greeting' . $value}])
@endcomponent
@endif

{{-- Greeting Static --}}
@if (isset(${'greetingStatic' . $value}))
@component('mail::greeting-static', ['name' => ${'greetingStatic' . $value}])
@endcomponent
@endif

{{-- Note --}}
@if (isset(${'note' . $value}))
@component('mail::note', ['note' => ${'note' . $value}, 'spaceNeeded' => is_numeric($value)])
@endcomponent
@endif

{{-- Space --}}
@if (isset(${'space' . $value}))
@component('mail::space', ['height' => ${'space' . $value}])
@endcomponent
@endif

{{-- Heading --}}
@if (isset(${'heading' . $value}))
@component('mail::heading')
{!! ${'heading' . $value} !!}
@endcomponent
@endif

{{-- List --}}
@if (isset(${'list' . $value}))
@component('mail::list', ['list' => ${'list' . $value}])
@endcomponent
@endif

{{-- Bullet points --}}
@if (isset(${'bullets' . $value}))
@component('mail::bullet', ['bullets' => ${'bullets' . $value}])
@endcomponent
@endif

{{-- Button --}}
@if (isset(${'button' . $value}))
@component('mail::button', ['url' => ${'button' . $value}['url']])
{!! ${'button' . $value}['text'] !!}
@endcomponent
@endif

@endfor

    {{-- Subcopy --}}
    @if (isset($subcopy))
        @slot('subcopy')
            @component('mail::subcopy')
                {{ $subcopy }}
            @endcomponent
        @endslot
    @endif

@endcomponent
