<?php

$resource = 'حساب التداول';
$resourceUcFirst = ucfirst($resource);

return [

    /*
    |--------------------------------------------------------------------------
    | Link Trading Account Language Lines
    |--------------------------------------------------------------------------
    */

    /*
     * Store
     */
    11301 => 'هذه' . $resource . 'مرتبط بالفعل بحساب الخصم الحالي الخاص بك.',
    11302 => 'ال' . $resource . 'ينتمي إلى مستخدم مختلف.',
    11303 => "لم نتمكن من العثور على المعطى" . $resource . ". يرجى التحقق مما إذا كان رقم حساب التداول المقدم صحيحًا.",
    11304 => $resourceUcFirst . ' تم ربط حساب الخصم الخاص بك بنجاح.',
    11305 => 'حساب الخصم ينتمي إلى شخص آخر.',
    11306 => 'ال ' . $resource . 'مرتبط بحساب الخصم الخاص بك. يرجى إلغاء الربط أولاً ثم محاولة الربط بحساب الخصم الحالي.',
    11307 => 'حساب الخصم الخاص بك مرتبط بالفعل بحساب تداول. يرجى إلغاء الربط أولاً ثم محاولة ربط ملف' . $resource . '.',
    11308 => 'البريد الإلكتروني لا يتطابق!. يجب أن يتطابق البريد الإلكتروني لحساب IB الخاص بك والبريد الإلكتروني لحساب التداول.',
    11309 => 'الاسم لا يتطابق !. يجب أن يتطابق اسم حساب الوسيط المعرّف الخاص بك مع اسم الحساب التجاري.',
    11310 => 'منصة حساب التداول لا تتطابق !. يجب أن تكون منصات حساب الخصم وحساب التداول الخاصين بك هي نفسها.',
    11311 => 'عملة حساب التداول غير متطابقة !. يجب أن يكون حساب الخصم وحساب التداول الخاص بك هو نفسه.',

    /*
     * Destroy
     */
    11320 => $resourceUcFirst . 'تم فك الارتباط بحساب الخصم الخاص بك بنجاح.',
    11321 => 'فك الارتباط ممنوع! هذا مرتبط' . $resource . 'ينتمي إلى مستخدم آخر.',

];
