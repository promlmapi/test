<?php

$resourceUpdateSuffixed = ' Please ensure that you have added relevant supporting documents for address verification.';

$resourceDocUpdateSuffix = ' Please ensure that you have added relevant documents from below for verification.
<br/><br/>
<a class="ui white button small" role="button" href="/profile/manage-documents">Manage Document</a>
';

return [

    /*
    |--------------------------------------------------------------------------
    | Address Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used during authentication for various
    | messages that we need to display to the user. You are free to modify
    | these language lines according to your application's requirements.
    |
    */

    10300 => 'Address submitted successfully for verification.' . $resourceUpdateSuffix,
    10301 => 'You have not added any addresses yet.',
    10302 => 'Successfully listing of your addresses.',
    10303 => 'Your request has been submitted successfully.' . $resourceDocUpdateSuffix,
    10304 => 'Update address forbidden! This address belongs to another user.',
    10305 => 'Update address forbidden! No changes have been made in address.',
    10306 => 'Update address forbidden! This is an old address. Updating only most recent address is allowed.',
    10307 => 'Add address forbidden! There is already an address added. Please update the address instead',
    10308 => 'Step Error! Please continue registration sequentially.',
    10309 => 'Your request has been submitted successfully.',
    10310 => 'Requested User doesn\'t have access permission.',
    10311 => 'User details updated successfully.',

];
