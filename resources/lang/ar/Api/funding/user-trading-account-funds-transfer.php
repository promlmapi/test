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
    12501 => 'مبلغ التحويل أكبر من رصيد الحساب. الرجاء طلب رصيد أقل من أو يساوي الرصيد المتاح.',
    12502 => 'لقد نجحت في طلب تحويل الأموال إلى حساب التداول الخاص بك. سيتحقق فريق الدعم لدينا من معلوماتك ويتخذ إجراء بشأنها قريبًا.',
    12503 => implode(' ', [
        'فقط',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingTransferRequests'),
        'يُسمح بطلب (طلبات) النقل في كل مرة. يرجى انتظار فريق الدعم لاتخاذ إجراء بشأن طلب النقل الحالي الخاص بك.'
    ]),

];