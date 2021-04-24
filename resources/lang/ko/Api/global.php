<?php

// Common.
$soapErrorPrefix = '비누 오류! ';
$mt5ErrorPrefix = 'MT5 데이터베이스 연결 오류! ';


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

    10000 => '사용 가능한 결과.',
    10001 => '일부 필드가 누락되었거나 잘못된 데이터가있을 수 있습니다.',
    10002 => $soapErrorPrefix,
    10004 => $soapErrorPrefix . '나쁜 반응.',
    10005 => $soapErrorPrefix . '함수 이름이 제공되지 않았습니다.',
    10006 => $soapErrorPrefix . '응답에 결과 방법이 없습니다.',
    10007 => $mt5ErrorPrefix,
    10008 => $mt5ErrorPrefix . '잘못된 쿼리 개체.',
    10009 => '알 수없는 오류가 발생했습니다. 나중에 다시 시도 해주십시오.',
    10010 => '페이지를 찾을 수 없습니다.',
    10011 => '잘못된 액세스. 이 작업은 개별 유형의 IB에만 허용됩니다..',
    10012 => '예약 된 작업 오류! 자세한 내용은 로그를 확인하십시오.',
    10013 => '예약 된 작업이 성공적으로 완료되었습니다.',
    10014 => '잘못된 리소스 작업이 요청되었습니다.',
    10015 => '환율을 검색 할 수 없습니다. 나중에 다시 시도 해주십시오.',
    10016 => '웹 사이트는 시스템 업그레이드를위한 유지 관리 모드입니다. 잠시 후 다시 확인하십시오.',

];
