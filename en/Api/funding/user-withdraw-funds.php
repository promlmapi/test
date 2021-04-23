<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Nominated Bank Account Language Lines
    |--------------------------------------------------------------------------
    */

    /*
     * Store
     */
    12001 => 'The withdrawal amount is more than the account balance. Please request balance less than or equal to available balance.',
    12002 => 'You have successfully withdrawn to your nominated bank account. Our support team will verify your information and action it shortly.',
    12003 => implode(' ', [
        'Only',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedTotalPendingWithdrawalRequests'),
        'withdrawal request(s) are allowed at a time. Please wait for the support team to action your existing withdrawal request.'
    ]),
    12004 => implode(' ', [
        'Minimum withdrawal threshold is set to',
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.minimumAmountSoftLimit'),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        'Please request withdrawal amount equal or more than the minimum threshold amount.'
    ]),
    12005 => implode(' ', [
        'MT4 account only',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT4Requests'),
        'withdrawal request(s) are allowed at a time. Please wait for the support team to action your existing withdrawal request.'
    ]),
    12006 => implode(' ', [
        'MT5 account only',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT5Requests'),
        'withdrawal request(s) are allowed at a time. Please wait for the support team to action your existing withdrawal request.'
    ]),
    12007 => implode(' ', [
        'Minimum withdrawal threshold is set to',
        env('SPECIFIC_USER_WITHDRAWAL_LIMIT', 20),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        'Please request withdrawal amount equal or more than the minimum threshold amount.'
    ]),
];
