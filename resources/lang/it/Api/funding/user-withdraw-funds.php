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
    12001 => 'Limporto del prelievo è superiore al saldo del conto. Richiedi un saldo inferiore o uguale al saldo disponibile.',
    12002 => 'Ti sei ritirato con successo sul tuo conto bancario indicato. Il nostro team di supporto verificherà le tue informazioni e agirà a breve.',
    12003 => implode(' ', [
        'Solo',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedTotalPendingWithdrawalRequests'),
        'le richieste di prelievo sono consentite alla volta. Attendi che il team di supporto esegua la tua richiesta di prelievo esistente.'
    ]),
    12004 => implode(' ', [
        'La soglia minima di prelievo è impostata su',
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.minimumAmountSoftLimit'),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        'Si prega di richiedere un importo di prelievo uguale o superiore all importo della soglia minima.'
    ]),
    12005 => implode(' ', [
        'Solo account MT4',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT4Requests'),
        'le richieste di prelievo sono consentite alla volta. Attendi che il team di supporto esegua la tua richiesta di prelievo esistente.'
    ]),
    12006 => implode(' ', [
        'Solo account MT5',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT5Requests'),
        'le richieste di prelievo sono consentite alla volta. Attendi che il team di supporto esegua la tua richiesta di prelievo esistente.'
    ]),
    12007 => implode(' ', [
        'La soglia minima di prelievo è impostata su',
        env('SPECIFIC_USER_WITHDRAWAL_LIMIT', 20),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        'Si prega di richiedere un importo di prelievo uguale o superiore all importo della soglia minima.'
    ]),
];
