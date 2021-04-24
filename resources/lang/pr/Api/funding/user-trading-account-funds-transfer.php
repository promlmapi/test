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
    12501 => 'O valor da transferência é maior do que o saldo da conta. Solicite um saldo menor ou igual ao saldo disponível.',
    12502 => 'Você solicitou com sucesso a transferência de fundos para sua conta de negociação. Nossa equipe de suporte verificará suas informações e tomará providências em breve.',
    12503 => implode(' ', [
        'Somente',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingTransferRequests'),
        'solicitação (ões) de transferência são permitidas por vez. Aguarde até que a equipe de suporte atue em relação à solicitação de transferência existente.'
    ]),

];
