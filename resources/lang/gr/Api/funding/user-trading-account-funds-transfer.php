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
    12501 => 'Der Überweisungsbetrag ist höher als der Kontostand. Bitte fordern Sie ein Guthaben an, das kleiner oder gleich dem verfügbaren Guthaben ist.',
    12502 => 'Sie haben erfolgreich beantragt, Geld auf Ihr Handelskonto zu überweisen. Unser Support-Team wird Ihre Informationen überprüfen und in Kürze bearbeiten.',
    12503 => implode(' ', [
        'Nur',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingTransferRequests'),
        'Übertragungsanfragen sind jeweils zulässig. Bitte warten Sie, bis das Support-Team Ihre bestehende Überweisungsanforderung bearbeitet hat.'
    ]),

];
