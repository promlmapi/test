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

    10000 => 'Kết quả có sẵn.',
    10001 => 'Một số trường có thể bị thiếu hoặc có dữ liệu không chính xác.',
    10002 => $soapErrorPrefix,
    10004 => $soapErrorPrefix . 'Phản ứng xấu.',
    10005 => $soapErrorPrefix . 'Tên hàm chưa được cung cấp.',
    10006 => $soapErrorPrefix . 'Phản hồi không có phương pháp kết quả.',
    10007 => $mt5ErrorPrefix,
    10008 => $mt5ErrorPrefix . 'Đối tượng truy vấn không hợp lệ.',
    10009 => 'Xảy ra lỗi không xác định được. Vui lòng thử lại sau.',
    10010 => 'Không tìm thấy trang.',
    10011 => 'Truy cập không hợp lệ. Hành động này chỉ được phép đối với IB thuộc loại Cá nhân.',
    10012 => 'Lỗi công việc đã lên lịch! Vui lòng kiểm tra nhật ký để biết thêm chi tiết.',
    10013 => 'Công việc đã lên lịch đã được hoàn thành thành công.',
    10014 => 'Hành động tài nguyên không hợp lệ đã được yêu cầu.',
    10015 => 'Không thể truy xuất tỷ giá quy đổi tiền tệ. Vui lòng thử lại sau.',
    10016 => 'Trang web đang trong chế độ bảo trì để nâng cấp hệ thống. Vui lòng kiểm tra lại trong thời gian ngắn.',

];
