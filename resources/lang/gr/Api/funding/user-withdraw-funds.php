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
    12001 => 'Der Auszahlungsbetrag ist höher als der Kontostand. Bitte fordern Sie ein Guthaben an, das kleiner oder gleich dem verfügbaren Guthaben ist.',
    12002 => 'Sie haben erfolgreich auf Ihr angegebenes Bankkonto abgebucht. Unser Support-Team wird Ihre Informationen überprüfen und in Kürze bearbeiten.',
    12003 => implode(' ', [
        'Nur',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedTotalPendingWithdrawalRequests'),
        'Auszahlungsanfragen sind jeweils zulässig. Bitte warten Sie, bis das Support-Team Ihre bestehende Auszahlungsanfrage bearbeitet hat.'
    ]),
    12004 => implode(' ', [
        'Die Mindestauszahlungsschwelle ist auf eingestellt',
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.minimumAmountSoftLimit'),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        'Bitte fordern Sie einen Auszahlungsbetrag an, der mindestens dem Mindestschwellenbetrag entspricht.'
    ]),
    12005 => implode(' ', [
        'Nur MT4-Konto',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT4Requests'),
        'Auszahlungsanfragen sind jeweils zulässig. Bitte warten Sie, bis das Support-Team Ihre bestehende Auszahlungsanfrage bearbeitet hat.'
    ]),
    12006 => implode(' ', [
        'Nur MT5-Konto',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT5Requests'),
        'Auszahlungsanfragen sind jeweils zulässig. Bitte warten Sie, bis das Support-Team Ihre bestehende Auszahlungsanfrage bearbeitet hat.'
    ]),
    12007 => implode(' ', [
        'Die Mindestauszahlungsschwelle ist auf eingestellt',
        env('SPECIFIC_USER_WITHDRAWAL_LIMIT', 20),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        'Bitte fordern Sie einen Auszahlungsbetrag an, der mindestens dem Mindestschwellenbetrag entspricht.'
    ]),
];
