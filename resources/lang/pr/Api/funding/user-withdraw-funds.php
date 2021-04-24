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
    12001 => 'O valor da retirada é maior do que o saldo da conta. Solicite um saldo menor ou igual ao saldo disponível.',
    12002 => 'Você sacou com sucesso para sua conta bancária indicada. Nossa equipe de suporte verificará suas informações e tomará providências em breve.',
    12003 => implode(' ', [
        'Somente',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedTotalPendingWithdrawalRequests'),
        'solicitação (ões) de retirada são permitidas de cada vez. Aguarde até que a equipe de suporte execute sua solicitação de saque existente.'
    ]),
    12004 => implode(' ', [
        'O limite mínimo de retirada é definido como',
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.minimumAmountSoftLimit'),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        'Solicite um valor de saque igual ou superior ao valor mínimo.'
    ]),
    12005 => implode(' ', [
        'MT4 conta apenas',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT4Requests'),
        'solicitação (ões) de retirada são permitidas de cada vez. Aguarde até que a equipe de suporte execute sua solicitação de saque existente.'
    ]),
    12006 => implode(' ', [
        'Conta MT5 apenas',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT5Requests'),
        'solicitação (ões) de retirada são permitidas de cada vez. Aguarde até que a equipe de suporte execute sua solicitação de saque existente.'
    ]),
    12007 => implode(' ', [
        'O limite mínimo de retirada é definido como',
        env('SPECIFIC_USER_WITHDRAWAL_LIMIT', 20),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        'Solicite um valor de saque igual ou superior ao valor mínimo.'
    ]),
];
