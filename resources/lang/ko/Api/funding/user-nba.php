<?php

$resource = '지명된 은행 계좌';
$resourceUcFirst = ucfirst($resource);

//Common lines
$resourceUpdateSuffix = '확인을 위해 아래에서 관련 문서를 추가했는지 확인하십시오.
<br/><br/>
<a class="ui white button small" role="button" href="/profile/manage-documents">문서 관리</a>';

return [

    /*
    |--------------------------------------------------------------------------
    | Nominated Bank Account Language Lines
    |--------------------------------------------------------------------------
    */

    /*
     * Index
     */
    11002 => '추가하지 않았습니다 ' . $resource . ' 아직.',

    /*
     * Store
     */
    11000 => '귀하의 요청이 성공적으로 제출되었습니다.' . $resourceUpdateSuffix,
    11001 => '이미 가지고 있습니다 ' . $resource . ' 귀하의 계정에 추가. 다른 항목을 추가하기 전에 먼저 제거하십시오.',

    /*
     * Destroy
     */
    11003 => $resourceUcFirst . ' 성공적으로 제거.',
    11004 => '금지 된 삭제! 이 ' . $resource . ' 다른 사용자에게 속함.',

];
