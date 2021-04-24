@if($spaceNeeded)
@component('mail::space')
@endcomponent
@endif

@foreach($note as $row)
<p style="line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt; text-align: left;">
    <span style="color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap; font-size: 14px;"></span>
    <span style="color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap; font-size: 14px;">{!! $row !!}</span>
</p>
@endforeach
