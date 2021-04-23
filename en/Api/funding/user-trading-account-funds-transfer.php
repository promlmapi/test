<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Rebate Account Funds Transfer Language Lines
    |--------------------------------------------------------------------------
    */

    /*
     * Store
     */
    12501 => 'The transfer amount is more than the account balance. Please request balance less than or equal to available balance.',
    12502 => 'You have successfully requested to transfer funds to your trading account. Our support team will verify your information and action it shortly.',
    12503 => implode(' ', [
        'Only',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingTransferRequests'),
        'transfer request(s) are allowed at a time. Please wait for the support team to action your existing transfer request.'
    ]),

];
