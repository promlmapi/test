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
    12501 => 'Jumlah pemindahan lebih banyak daripada baki akaun.Sila mohon dengan baki kurang daripada atau sama dengan baki yang ada.',
    12502 => 'Anda berjaya meminta untuk memindahkan dana ke akaun perdagangan anda. Pasukan sokongan kami akan mengesahkan maklumat anda dan segera bertindak.',
    12503 => implode(' ', [
        'Sahaja',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingTransferRequests'),
        'permintaan pemindahan dibenarkan pada satu masa. Harap tunggu pasukan sokongan bertindak atas permintaan transfer anda yang ada.'
    ]),

];
