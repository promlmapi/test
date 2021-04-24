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
    12501 => '이체 금액이 계정 잔액보다 많습니다. 사용 가능한 잔액보다 작거나 같은 잔액을 요청하십시오.',
    12502 => '귀하의 거래 계좌로 자금 이체를 성공적으로 요청하셨습니다. 지원팀이 귀하의 정보를 확인하고 곧 조치를 취할 것입니다.',
    12503 => implode(' ', [
        '뿐',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingTransferRequests'),
        '전송 요청은 한 번에 허용됩니다. 지원 팀이 기존 전송 요청을 처리 할 때까지 기다리십시오.'
    ]),

];
