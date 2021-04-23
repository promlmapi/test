<?php

// Common.
$soapErrorPrefix = 'Soap Error! ';
$mt5ErrorPrefix = 'MT5 Database Connection Error! ';


return [

    /*
    |--------------------------------------------------------------------------
    | Global Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used during authentication for various
    | messages that we need to display to the user. You are free to modify
    | these language lines according to your application's requirements.
    |
    */

    10000 => 'Result available.',
    10001 => 'Some fields may be missing or have incorrect data.',
    10002 => $soapErrorPrefix,
    10004 => $soapErrorPrefix . 'Bad response.',
    10005 => $soapErrorPrefix . 'Function name hasn\'t been provided.',
    10006 => $soapErrorPrefix . 'Response does not have result method.',
    10007 => $mt5ErrorPrefix,
    10008 => $mt5ErrorPrefix . 'Invalid query object.',
    10009 => 'Unknown error occurred. Please try again later.',
    10010 => 'Page not found.',
    10011 => 'Invalid Access. This action is only allowed for IBs of Individual type.',
    10012 => 'Scheduled Job Error! Please check logs for more details.',
    10013 => 'Scheduled job has been completed successfully.',
    10014 => 'Invalid resource action has been requested.',
    10015 => 'Unable to retrieve currency conversion rates. Please try again later.',
    10016 => 'The website is in maintenance mode for system upgrades. Please check back again shortly.',

];
