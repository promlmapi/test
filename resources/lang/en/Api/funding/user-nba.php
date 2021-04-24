<?php

$resource = 'nominated bank account';
$resourceUcFirst = ucfirst($resource);

//Common lines
$resourceUpdateSuffix = 'Please ensure that you have added relevant documents from below for verification.
<br/><br/>
<a class="ui white button small" role="button" href="/profile/manage-documents">Manage Document</a>';

return [

    /*
    |--------------------------------------------------------------------------
    | Nominated Bank Account Language Lines
    |--------------------------------------------------------------------------
    */

    /*
     * Index
     */
    11002 => 'You have not added a ' . $resource . ' yet.',

    /*
     * Store
     */
    11000 => 'Your request has been submitted successfully.' . $resourceUpdateSuffix,
    11001 => 'You already have one ' . $resource . ' added to your account. Please remove that first before adding another.',

    /*
     * Destroy
     */
    11003 => $resourceUcFirst . ' successfully removed.',
    11004 => 'Delete forbidden! This ' . $resource . ' belongs to another user.',

];
