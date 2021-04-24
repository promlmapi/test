<?php

$resource = 'حساب مصرفي معين';
$resourceUcFirst = ucfirst($resource);

//Common lines
$resourceUpdateSuffix = 'يرجى التأكد من إضافة المستندات ذات الصلة من الأسفل للتحقق منها.
<br/><br/>
<a class="ui white button small" role="button" href="/profile/manage-documents">إدارة المستند</a>';

return [

    /*
    |--------------------------------------------------------------------------
    | Nominated Bank Account Language Lines
    |--------------------------------------------------------------------------
    */

    /*
     * Index
     */
    11002 => 'أنت لم تقم بإضافة أ' . $resource . 'بعد.',

    /*
     * Store
     */
    11000 => 'تم تقديم طلبك بنجاح.' . $resourceUpdateSuffix,
    11001 => 'لديك بالفعل واحدة ' . $resource . 'أضيفت إلى حسابك. يرجى إزالة ذلك أولاً قبل إضافة أخرى.',

    /*
     * Destroy
     */
    11003 => $resourceUcFirst . 'تمت إزالته بنجاح.',
    11004 => 'حذف ممنوع! هذه' . $resource . 'ينتمي إلى مستخدم آخر.',

];
