<?php

$resourceUpdateSuffix = ' 請確保您已添加相關的支持文檔以進行地址驗證。';

$resourceDocUpdateSuffix = ' 請確保您已從下方添加了相關文檔以進行驗證。
<br/><br/>
<a class="ui white button small" role="button" href="/profile/manage-documents">管理文件</a>
';

return [

    /*
    |--------------------------------------------------------------------------
    | Address Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used during authentication for various
    | messages that we need to display to the user. You are free to modify
    | these language lines according to your application's requirements.
    |
    */

    10300 => '地址已成功提交以供驗證。' . $resourceUpdateSuffix,
    10301 => '您尚未添加任何地址。',
    10302 => '成功列出您的地址。',
    10303 => '您的請求已成功提交。' . $resourceDocUpdateSuffix,
    10304 => '禁止更新地址！該地址屬於另一個用戶。',
    10305 => '禁止更新地址！地址沒有更改。',
    10306 => '禁止更新地址！這是舊地址。只允許更新最近的地址。',
    10307 => '禁止添加地址！已經添加了一個地址。請改為更新地址',
    10308 => '步驟錯誤！請依序繼續註冊。',
    10309 => '您的請求已成功提交。',
    10310 => '被請求的用戶沒有訪問權限。',
    10311 => '用戶詳細信息已成功更新。',

];
