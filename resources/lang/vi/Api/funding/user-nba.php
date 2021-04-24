<?php

$resource = 'tài khoản ngân hàng được chỉ định';
$resourceUcFirst = ucfirst($resource);

//Common lines
$resourceUpdateSuffix = 'Hãy đảm bảo rằng bạn đã thêm các tài liệu liên quan từ bên dưới để xác minh.
<br/><br/>
<a class="ui white button small" role="button" href="/profile/manage-documents">Quản lý tài liệu</a>';

return [

    /*
    |--------------------------------------------------------------------------
    | Nominated Bank Account Language Lines
    |--------------------------------------------------------------------------
    */

    /*
     * Index
     */
    11002 => 'Bạn chưa thêm một ' . $resource . 'chưa.',

    /*
     * Store
     */
    11000 => 'Yêu cầu của bạn đã được gửi thành công.' . $resourceUpdateSuffix,
    11001 => 'Bạn đã có một cái rồi ' . $resource . 'được thêm vào tài khoản của bạn. Vui lòng xóa cái đó trước trước khi thêm cái khác.',

    /*
     * Destroy
     */
    11003 => $resourceUcFirst . 'đã loại bỏ thành công.',
    11004 => 'Xóa bị cấm! Điều này' . $resource . ' thuộc về người dùng khác.',

];
