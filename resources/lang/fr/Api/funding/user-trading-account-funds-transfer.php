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
    12501 => 'Le montant du transfert est supérieur au solde du compte. Veuillez demander un solde inférieur ou égal au solde disponible.',
    12502 => 'Vous avez demandé avec succès de transférer des fonds sur votre compte de trading. Notre équipe d assistance vérifiera vos informations et les traitera sous peu.',
    12503 => implode(' ', [
        'Seule',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingTransferRequests'),
        'les demandes de transfert sont autorisées à la fois. Veuillez attendre que l équipe d assistance traite votre demande de transfert existante.'
    ]),

];
