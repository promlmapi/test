<?php

// Common.
$soapErrorPrefix = 'Ошибка мыла!';
$mt5ErrorPrefix = 'Ошибка подключения к базе данных MT5!';


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

    10000 => 'Результат есть.',
    10001 => 'Некоторые поля могут отсутствовать или содержать неверные данные.',
    10002 => $soapErrorPrefix,
    10004 => $soapErrorPrefix . 'Плохой ответ.',
    10005 => $soapErrorPrefix . 'Имя функции не указано.',
    10006 => $soapErrorPrefix . 'В ответе нет метода результата.',
    10007 => $mt5ErrorPrefix,
    10008 => $mt5ErrorPrefix . 'Неверный объект запроса.',
    10009 => 'Произошла неизвестная ошибка. Пожалуйста, повторите попытку позже.',
    10010 => 'Страница не найдена.',
    10011 => 'Недействительный доступ. Это действие разрешено только для IB индивидуального типа.',
    10012 => 'Ошибка запланированного задания! Пожалуйста, проверьте журналы для более подробной информации.',
    10013 => 'Запланированное задание успешно выполнено.',
    10014 => 'Запрошено недопустимое действие с ресурсом.',
    10015 => 'Невозможно получить курсы конвертации валют. Пожалуйста, повторите попытку позже.',
    10016 => 'Веб-сайт находится в режиме обслуживания для обновления системы. Повторите попытку в ближайшее время.',

];
