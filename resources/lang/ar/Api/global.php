<?php

// Common.
$soapErrorPrefix = 'Soap Error! ';
$mt5ErrorPrefix = 'MT5 Database Connection Error! ';


return [

    /*
    |--------------------------------------------------------------------------
    | Global Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used during authentication for various
    | messages that we need to display to the user. You are free to modify
    | these language lines according to your application's requirements.
    |
    */

    10000 => 'النتيجة متاحة.',
    10001 => 'قد تكون بعض الحقول مفقودة أو بها بيانات غير صحيحة.',
    10002 => $soapErrorPrefix,
    10004 => $soapErrorPrefix . 'رد سيء.',
    10005 => $soapErrorPrefix . 'لم يتم توفير اسم الوظيفة.',
    10006 => $soapErrorPrefix . 'الاستجابة ليس لديها طريقة النتيجة.',
    10007 => $mt5ErrorPrefix,
    10008 => $mt5ErrorPrefix . 'كائن استعلام غير صالح.',
    10009 => 'حدث خطأ غير معروف. الرجاء معاودة المحاولة في وقت لاحق.',
    10010 => 'الصفحة غير موجودة.',
    10011 => 'دخول غير صالح. هذا الإجراء مسموح به فقط للوسطاء المعرفين من النوع الفردي.',
    10012 => 'خطأ وظيفي مجدول! يرجى التحقق من السجلات لمزيد من التفاصيل.',
    10013 => 'اكتملت المهمة المجدولة بنجاح.',
    10014 => 'تم طلب إجراء مورد غير صالح.',
    10015 => 'تعذر استرداد أسعار تحويل العملات. الرجاء معاودة المحاولة في وقت لاحق.',
    10016 => 'الموقع في وضع الصيانة لتحديثات النظام. يرجى التحقق مرة أخرى بعد قليل.',

];
