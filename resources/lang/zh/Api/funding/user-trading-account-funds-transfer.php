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
    12501 => '轉賬金額大於帳戶餘額。請提交少於或等於可用餘額的金額。',
    12502 => '您已成功請求將資金轉入您的交易帳戶。我們的支持團隊將驗證您的信息並儘快採取措施。',
    12503 => implode(' ', [
        'Only',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingTransferRequests'),
        '一次允許傳輸請求。請等待支持團隊處理您現有的轉移請求。'
    ]),

];
