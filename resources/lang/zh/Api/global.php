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

    10000 => '結果可用。',
    10001 => '某些字段可能丟失或數據不正確。',
    10002 => $soapErrorPrefix,
    10004 => $soapErrorPrefix . '反應不好。',
    10005 => $soapErrorPrefix . '未提供函數名稱。',
    10006 => $soapErrorPrefix . '響應沒有結果方法。',
    10007 => $mt5ErrorPrefix,
    10008 => $mt5ErrorPrefix . '無效的查詢對象。',
    10009 => '發生未知錯誤。請稍後再試。',
    10010 => '網頁未找到。',
    10011 => '無效的訪問。此操作僅適用於“個人”類型的IB。',
    10012 => '預定作業錯誤！請檢查日誌以獲取更多詳細信息。',
    10013 => '計劃的作業已成功完成。',
    10014 => '請求了無效的資源操作。',
    10015 => '無法獲取貨幣兌換率。請稍後再試。',
    10016 => '該網站處於維護模式，用於系統升級。請稍後再回來查看。',

];
