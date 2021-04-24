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
    12001 => 'Jumlah pengeluaran lebih banyak daripada baki akaun. Mohon baki kurang daripada atau sama dengan baki yang ada.',
    12002 => 'Anda berjaya mengeluarkan ke akaun bank yang anda pilih. Pasukan sokongan kami akan mengesahkan maklumat anda dan segera bertindak.',
    12003 => implode(' ', [
        'Sahaja',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedTotalPendingWithdrawalRequests'),
        'permintaan pengeluaran dibenarkan pada satu masa. Harap tunggu pasukan sokongan bertindak atas permintaan penarikan anda yang ada.'
    ]),
    12004 => implode(' ', [
        'Ambang pengeluaran minimum ditetapkan ke',
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.minimumAmountSoftLimit'),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        'Mohon jumlah pengeluaran sama atau melebihi jumlah minimum.'
    ]),
    12005 => implode(' ', [
        'Akaun MT4 sahaja',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT4Requests'),
        'permintaan pengeluaran dibenarkan pada satu masa. Harap tunggu pasukan sokongan bertindak atas permintaan penarikan anda yang ada.'
    ]),
    12006 => implode(' ', [
        'Akaun MT5 sahaja',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT5Requests'),
        'permintaan pengeluaran dibenarkan pada satu masa. Harap tunggu pasukan sokongan bertindak atas permintaan penarikan anda yang ada.'
    ]),
    12007 => implode(' ', [
        'Ambang pengeluaran minimum ditetapkan ke',
        env('SPECIFIC_USER_WITHDRAWAL_LIMIT', 20),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        'Mohon jumlah pengeluaran sama atau melebihi jumlah minimum.'
    ]),
];
