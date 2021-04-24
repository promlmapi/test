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
    12501 => 'Số tiền chuyển nhiều hơn số dư tài khoản. Vui lòng yêu cầu số dư nhỏ hơn hoặc bằng số dư khả dụng.',
    12502 => 'Bạn đã yêu cầu chuyển tiền thành công vào tài khoản giao dịch của mình. Nhóm hỗ trợ của chúng tôi sẽ xác minh thông tin của bạn và xử lý nó trong thời gian ngắn.',
    12503 => implode(' ', [
        'Chỉ có',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingTransferRequests'),
        '(các) yêu cầu chuyển được cho phép tại một thời điểm. Vui lòng đợi nhóm hỗ trợ thực hiện yêu cầu chuyển hiện tại của bạn.'
    ]),

];
