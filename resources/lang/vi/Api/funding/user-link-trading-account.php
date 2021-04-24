<?php

$resource = 'tài khoản giao dịch';
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
    11301 => 'Điều này ' . $resource . ' đã được liên kết với tài khoản giảm giá hiện tại của bạn.',
    11302 => 'Các ' . $resource . 'thuộc về một người dùng khác.',
    11303 => "Chúng tôi không thể tìm thấy " . $resource . ". Vui lòng kiểm tra xem số tài khoản giao dịch đã gửi có chính xác không.",
    11304 => $resourceUcFirst . 'đã được liên kết thành công với tài khoản giảm giá của bạn.',
    11305 => 'Tài khoản giảm giá thuộc về người khác.',
    11306 => 'Các' . $resource . 'được liên kết với tài khoản giảm giá khác nhau của bạn. Vui lòng hủy liên kết trước và sau đó thử liên kết với tài khoản giảm giá hiện tại.',
    11307 => 'Tài khoản giảm giá của bạn đã được liên kết với tài khoản giao dịch. Vui lòng hủy liên kết trước và sau đó thử liên kết một ' . $resource . '.',
    11308 => 'Email không khớp !. Email tài khoản IB của bạn và email tài khoản giao dịch phải khớp nhau.',
    11309 => 'Tên không khớp !. Tên tài khoản IB và tên tài khoản giao dịch của bạn phải khớp.',
    11310 => 'Nền tảng tài khoản giao dịch không phù hợp !. Tài khoản chiết khấu và nền tảng tài khoản giao dịch của bạn phải giống nhau.',
    11311 => 'Tiền tệ tài khoản giao dịch không khớp !. Tài khoản chiết khấu và đơn vị tiền tệ của tài khoản giao dịch phải giống nhau.',

    /*
     * Destroy
     */
    11320 => $resourceUcFirst . ' hủy liên kết thành công khỏi tài khoản giảm giá của bạn.',
    11321 => 'De-link bị cấm! Liên kết này' . $resource . 'thuộc về người dùng khác.',

];
