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
    12001 => '提款金額大於帳戶餘額。請要求餘額少於或等於可用餘額。',
    12002 => '您已成功提取到指定的銀行帳戶。我們的支持團隊將驗證您的信息並儘快採取措施。',
    12003 => implode(' ', [
        '僅有的',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedTotalPendingWithdrawalRequests'),
        '一次允許提款請求。請等待支持團隊對您現有的提款請求進行處理。'
    ]),
    12004 => implode(' ', [
        '最低提款閾值設置為',
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.minimumAmountSoftLimit'),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        '請要求提款金額等於或大於最低閾值金額。'
    ]),
    12005 => implode(' ', [
        '僅MT4帳戶',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT4Requests'),
        '一次允許提款請求。請等待支持團隊對您現有的提款請求進行處理。'
    ]),
    12006 => implode(' ', [
        '僅MT5帳戶',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT5Requests'),
        '一次允許提款請求。請等待支持團隊對您現有的提款請求進行處理。'
    ]),
    12007 => implode(' ', [
        '最低提款閾值設置為',
        env('SPECIFIC_USER_WITHDRAWAL_LIMIT', 20),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        '請要求提款金額等於或大於最低閾值金額。'
    ]),
];
