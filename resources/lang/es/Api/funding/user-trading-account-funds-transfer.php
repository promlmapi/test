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
    12501 => 'El monto de la transferencia es mayor que el saldo de la cuenta. Solicite un saldo menor o igual al saldo disponible.',
    12502 => 'Ha solicitado con éxito transferir fondos a su cuenta de operaciones. Nuestro equipo de soporte verificará su información y actuará en breve.',
    12503 => implode(' ', [
        'Solamente',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingTransferRequests'),
        'Las solicitudes de transferencia se permiten a la vez. Espere a que el equipo de asistencia responda a su solicitud de transferencia existente.'
    ]),

];
