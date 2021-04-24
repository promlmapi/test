<?php

$resource = 'nominated bank account';
$resourceUcFirst = ucfirst($resource);

//Common lines
$resourceUpdateSuffix = '請確保您已從下方添加了相關文檔以進行驗證。
<br/><br/>
<a class="ui white button small" role="button" href="/profile/manage-documents">管理文件</a>';

return [

    /*
    |--------------------------------------------------------------------------
    | Nominated Bank Account Language Lines
    |--------------------------------------------------------------------------
    */

    /*
     * Index
     */
    11002 => '您尚未添加 ' . $resource . ' 然而.',

    /*
     * Store
     */
    11000 => '您的請求已成功提交。' . $resourceUpdateSuffix,
    11001 => '你已經有一個 ' . $resource . '已添加到您的帳戶。請先刪除該內容，然後再添加其他內容。',

    /*
     * Destroy
     */
    11003 => $resourceUcFirst . ' 成功刪除。',
    11004 => '禁止刪除！這' . $resource . '屬於另一個用戶。',

];
