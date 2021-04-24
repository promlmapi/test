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
    12001 => '출금 금액이 계정 잔액보다 많습니다. 사용 가능한 잔액보다 작거나 같은 잔액을 요청하십시오.',
    12002 => '지명 된 은행 계좌로 성공적으로 인출했습니다. 지원팀이 귀하의 정보를 확인하고 곧 조치를 취할 것입니다.',
    12003 => implode(' ', [
        '뿐',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedTotalPendingWithdrawalRequests'),
        '인출 요청은 한 번에 허용됩니다. 지원팀이 기존 출금 요청을 처리 할 때까지 기다리십시오.'
    ]),
    12004 => implode(' ', [
        '최소 인출 한도는 다음과 같이 설정됩니다',
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.minimumAmountSoftLimit'),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        '최소 기준 금액 이상 인출 금액을 요청하십시오.'
    ]),
    12005 => implode(' ', [
        'MT4 계정 만',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT4Requests'),
        '인출 요청은 한 번에 허용됩니다. 지원팀이 기존 출금 요청을 처리 할 때까지 기다리십시오.'
    ]),
    12006 => implode(' ', [
        'MT5 계정 만',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT5Requests'),
        '인출 요청은 한 번에 허용됩니다. 지원팀이 기존 출금 요청을 처리 할 때까지 기다리십시오.'
    ]),
    12007 => implode(' ', [
        '최소 인출 한도는 다음과 같이 설정됩니다',
        env('SPECIFIC_USER_WITHDRAWAL_LIMIT', 20),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        '최소 기준 금액 이상 인출 금액을 요청하십시오.'
    ]),
];
