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
    12501 => 'Limporto del trasferimento è superiore al saldo del conto. Richiedi un saldo inferiore o uguale al saldo disponibile.',
    12502 => 'Hai richiesto con successo di trasferire fondi sul tuo conto di trading. Il nostro team di supporto verificherà le tue informazioni e agirà a breve.',
    12503 => implode(' ', [
        'Solo',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingTransferRequests'),
        'le richieste di trasferimento sono consentite alla volta. Attendi che il team di supporto esegua la tua richiesta di trasferimento esistente.'
    ]),

];
