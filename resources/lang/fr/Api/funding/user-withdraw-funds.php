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
    12001 => 'Le montant du retrait est supérieur au solde du compte. Veuillez demander un solde inférieur ou égal au solde disponible.',
    12002 => 'Vous avez effectué un retrait avec succès sur votre compte bancaire désigné. Notre équipe d assistance vérifiera vos informations et les traitera sous peu.',
    12003 => implode(' ', [
        'Seule',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedTotalPendingWithdrawalRequests'),
        'les demandes de retrait sont autorisées à la fois. Veuillez attendre que l équipe d assistance traite votre demande de retrait existante.'
    ]),
    12004 => implode(' ', [
        'Le seuil de retrait minimum est défini sur',
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.minimumAmountSoftLimit'),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        'Veuillez demander un montant de retrait égal ou supérieur au montant du seuil minimum.'
    ]),
    12005 => implode(' ', [
        'Compte MT4 uniquement',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT4Requests'),
        'les demandes de retrait sont autorisées à la fois. Veuillez attendre que l équipe d assistance traite votre demande de retrait existante.'
    ]),
    12006 => implode(' ', [
        'Compte MT5 uniquement',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT5Requests'),
        'les demandes de retrait sont autorisées à la fois. Veuillez attendre que l équipe d assistance traite votre demande de retrait existante.'
    ]),
    12007 => implode(' ', [
        'Le seuil de retrait minimum est défini sur',
        env('SPECIFIC_USER_WITHDRAWAL_LIMIT', 20),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        'Veuillez demander un montant de retrait égal ou supérieur au montant du seuil minimum.'
    ]),
];
