<?php

$resource = 'trading account';
$resourceUcFirst = ucfirst($resource);

return [

    /*
    |--------------------------------------------------------------------------
    | Link Trading Account Language Lines
    |--------------------------------------------------------------------------
    */

    /*
     * Store
     */
    11301 => 'This ' . $resource . ' is already linked with your current rebate account.',
    11302 => 'The ' . $resource . ' belongs to a different user.',
    11303 => "We couldn't find given " . $resource . ". Please check if the submitted trading account number is correct.",
    11304 => $resourceUcFirst . ' has been successfully linked to your rebate account.',
    11305 => 'The rebate account belongs to someone else.',
    11306 => 'The ' . $resource . ' is linked with your different rebate account. Please unlink first and then try linking with current rebate account.',
    11307 => 'Your rebate account is already linked with a trading account. Please unlink first and then try linking a new ' . $resource . '.',
    11308 => 'Email does not match!. Your IB account email and trading account email must match.',
    11309 => 'Name does not match!. Your IB account name and trading account name must match.',
    11310 => 'Trading account platform does not match!. Your rebate account and trading account platforms must be the same.',
    11311 => 'Trading account currency does not match!. Your rebate account and trading account currencies must be the same.',

    /*
     * Destroy
     */
    11320 => $resourceUcFirst . ' successfully de-linked from your rebate account.',
    11321 => 'De-link forbidden! This linked ' . $resource . ' belongs to another user.',

];
