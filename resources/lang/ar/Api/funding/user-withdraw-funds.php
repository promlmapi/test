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
    12001 => 'مبلغ السحب أكبر من رصيد الحساب. الرجاء طلب رصيد أقل من أو يساوي الرصيد المتاح.',
    12002 => 'لقد سحبت بنجاح إلى حسابك المصرفي المحدد. سيتحقق فريق الدعم لدينا من معلوماتك ويتخذ إجراء بشأنها قريبًا.',
    12003 => implode(' ', [
        'فقط',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedTotalPendingWithdrawalRequests'),
        'يُسمح بطلب (طلبات) السحب في وقت واحد. يرجى انتظار فريق الدعم لاتخاذ إجراء بشأن طلب السحب الحالي الخاص بك.'
    ]),
    12004 => implode(' ', [
        'تم تعيين الحد الأدنى للسحب على',
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.minimumAmountSoftLimit'),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        'يرجى طلب سحب مبلغ يساوي أو يزيد عن الحد الأدنى للمبلغ.'
    ]),
    12005 => implode(' ', [
        'حساب MT4 فقط',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT4Requests'),
        'يُسمح بطلب (طلبات) السحب في وقت واحد. يرجى انتظار فريق الدعم لاتخاذ إجراء بشأن طلب السحب الحالي الخاص بك.'
    ]),
    12006 => implode(' ', [
        'MT5 فقط',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingWithdrawalMT5Requests'),
        'يُسمح بطلب (طلبات) السحب في وقت واحد. يرجى انتظار فريق الدعم لاتخاذ إجراء بشأن طلب السحب الحالي الخاص بك.'
    ]),
    12007 => implode(' ', [
        'تم تعيين الحد الأدنى للسحب على',
        env('SPECIFIC_USER_WITHDRAWAL_LIMIT', 20),
        config('app.models.ibRebateAccountJournalTransaction.configurations.minimumWithdrawalLimitation.basicsCurrency') . '.',
        'يرجى طلب سحب مبلغ يساوي أو يزيد عن الحد الأدنى للمبلغ.'
    ]),
];
