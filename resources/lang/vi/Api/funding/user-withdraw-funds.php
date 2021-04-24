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
    12001 => 'Số tiền rút nhiều hơn số dư tài khoản. Vui lòng yêu cầu số dư nhỏ hơn hoặc bằng số dư khả dụng.',
    12002 => 'Bạn đã rút tiền thành công vào tài khoản ngân hàng được chỉ định của mình. Nhóm hỗ trợ của chúng tôi sẽ xác minh thông tin của bạn và xử lý nó trong thời gian ngắn.',
    12003 => implode(' ', [
        'Chỉ có',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedTotalPendingWithdrawalRequests'),
        '(các) yêu cầu rút tiền được cho phép tại một thời điểm. Vui lòng đợi nhóm hỗ trợ thực hiện yêu cầu rút tiền hiện tại của bạn.'
    ]),
    12004 => implode(' ', [
        'Ngưỡng rút tiền tối thiểu được đặt thành',
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.minimumAmountSoftLimit'),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        'Vui lòng yêu cầu số tiền rút bằng hoặc nhiều hơn số tiền ngưỡng tối thiểu.'
    ]),
    12005 => implode(' ', [
        'Chỉ tài khoản MT4',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT4Requests'),
        '(các) yêu cầu rút tiền được cho phép tại một thời điểm. Vui lòng đợi nhóm hỗ trợ thực hiện yêu cầu rút tiền hiện tại của bạn.'
    ]),
    12006 => implode(' ', [
        'Chỉ tài khoản MT5',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT5Requests'),
        '(các) yêu cầu rút tiền được cho phép tại một thời điểm. Vui lòng đợi nhóm hỗ trợ thực hiện yêu cầu rút tiền hiện tại của bạn.'
    ]),
    12007 => implode(' ', [
        'Ngưỡng rút tiền tối thiểu được đặt thành',
        env('SPECIFIC_USER_WITHDRAWAL_LIMIT', 20),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        'Vui lòng yêu cầu số tiền rút bằng hoặc nhiều hơn số tiền ngưỡng tối thiểu.'
    ]),
];
