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
    12001 => 'El monto del retiro es mayor que el saldo de la cuenta. Solicite un saldo menor o igual al saldo disponible.',
    12002 => 'Ha retirado con éxito a su cuenta bancaria verificada. Nuestro equipo de soporte verificará su información y actuará en breve..',
    12003 => implode(' ', [
        'Solamente',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedTotalPendingWithdrawalRequests'),
        'Las solicitudes de retiro están permitidas a la vez. Espere a que el equipo de soporte actúe con su solicitud de retiro existente.'
    ]),
    12004 => implode(' ', [
        'El umbral mínimo de retiro está establecido en',
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.minimumAmountSoftLimit'),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        'Solicite un monto de retiro igual o superior al monto del umbral mínimo.'
    ]),
    12005 => implode(' ', [
        'Solo cuenta MT4',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT4Requests'),
        'Las solicitudes de retiro están permitidas a la vez. Espere a que el equipo de soporte actúe con su solicitud de retiro existente.'
    ]),
    12006 => implode(' ', [
        'Solo cuenta MT5',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT5Requests'),
        'Las solicitudes de retiro están permitidas a la vez. Espere a que el equipo de soporte actúe con su solicitud de retiro existente.'
    ]),
    12007 => implode(' ', [
        'El umbral mínimo de retiro está establecido en',
        env('SPECIFIC_USER_WITHDRAWAL_LIMIT', 20),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        'Solicite un monto de retiro igual o superior al monto del umbral mínimo.'
    ]),
];
