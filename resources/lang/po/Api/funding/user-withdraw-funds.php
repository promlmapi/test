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
    12001 => 'Kwota wypłaty jest większa niż saldo konta. Poproś o saldo mniejsze lub równe saldzie dostępnemu.',
    12002 => 'Pomyślnie dokonałeś wypłaty na wskazane konto bankowe. Nasz zespół pomocy technicznej zweryfikuje Twoje informacje i wkrótce podejmie działania.',
    12003 => implode(' ', [
        'Tylko',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedTotalPendingWithdrawalRequests'),
        'żądania wypłaty są dozwolone jednocześnie. Poczekaj, aż zespół wsparcia wykona Twoją istniejącą prośbę o wypłatę.'
    ]),
    12004 => implode(' ', [
        'Minimalny próg wypłaty jest ustawiony na',
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.minimumAmountSoftLimit'),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        'Poproś o kwotę wypłaty równą lub wyższą niż minimalna kwota progowa.'
    ]),
    12005 => implode(' ', [
        'Tylko konto MT4',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT4Requests'),
        'żądania wypłaty są dozwolone jednocześnie. Poczekaj, aż zespół wsparcia wykona Twoją istniejącą prośbę o wypłatę.'
    ]),
    12006 => implode(' ', [
        'Tylko konto MT5',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT5Requests'),
        'żądania wypłaty są dozwolone jednocześnie. Poczekaj, aż zespół wsparcia wykona Twoją istniejącą prośbę o wypłatę.'
    ]),
    12007 => implode(' ', [
        'Minimalny próg wypłaty jest ustawiony na',
        env('SPECIFIC_USER_WITHDRAWAL_LIMIT', 20),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        'Poproś o kwotę wypłaty równą lub wyższą niż minimalna kwota progowa.'
    ]),
];
