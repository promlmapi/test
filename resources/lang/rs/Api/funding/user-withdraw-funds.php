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
    12001 => 'Сумма вывода больше остатка на счете. Пожалуйста, запросите баланс, меньший или равный доступному остатку.',
    12002 => 'Вы успешно сняли средства на указанный вами банковский счет. Наша служба поддержки проверит вашу информацию и в ближайшее время примет меры.',
    12003 => implode(' ', [
        'Только',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedTotalPendingWithdrawalRequests'),
        'запрос (ы) на снятие средств разрешен единовременно. Подождите, пока служба поддержки примет меры по вашему существующему запросу на снятие средств.'
    ]),
    12004 => implode(' ', [
        'Минимальный порог вывода установлен на',
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.minimumAmountSoftLimit'),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        'Пожалуйста, запросите сумму вывода, равную или превышающую минимальную пороговую сумму.'
    ]),
    12005 => implode(' ', [
        'Только счет MT4',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT4Requests'),
        'запрос (ы) на снятие средств разрешен единовременно. Подождите, пока служба поддержки примет меры по вашему существующему запросу на снятие средств.'
    ]),
    12006 => implode(' ', [
        'Только счет MT5',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT5Requests'),
        'запрос (ы) на снятие средств разрешен единовременно. Подождите, пока служба поддержки примет меры по вашему существующему запросу на снятие средств.'
    ]),
    12007 => implode(' ', [
        'Минимальный порог вывода установлен на',
        env('SPECIFIC_USER_WITHDRAWAL_LIMIT', 20),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        'Пожалуйста, запросите сумму вывода, равную или превышающую минимальную пороговую сумму.'
    ]),
];
