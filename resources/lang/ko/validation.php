<?php

//Question field attributes
$questionAttributes = [];
for ($i = 0; $i <= 20; $i++) {
    $questionAttributes['question_' . $i] = '질문';
}

// user_level_x_selections.
$userLevelSelectionAttributes = [];
for ($i = 1; $i <= 8; $i++) {
    $userLevelSelectionAttributes['user_level_' . $i . '_selections'] = '사용자 선택';
}

// User level distribution error messages suffix.
$userLevelDistributionErrorMessageSuffix = ' (at ":basics_user_level_name" 사용자 >> ":basics_currency_name" 통화 >> ":basics_product_name" 생성물 >> ":basics_commission_level" 수수료 수준).';
$userLevelDistributionTypeErrorMessageSuffix = ' (at ":basics_user_level_name" 사용자 >> ":basics_currency_name" 통화 >> ":basics_product_name" 생성물 >> ":basics_commission_level" 수수료 수준 >> ":basics_selected_user_level_name").';

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted'             => '이 :속성이 허용되어야합니다.',
    'active_url'           => '이 :속성이 유효한 URL이 아닙니다.',
    'after'                => '이 :속성은 다음 날짜 여야합니다 :데이트.',
    'after_or_equal'       => '이 :속성은 다음 날짜 이후 여야합니다 :데이트.',
    'alpha'                => '이 :속성은 문자 만 포함 할 수 있습니다.',
    'alpha_dash'           => '이 :속성은 문자, 숫자 및 대시 만 포함 할 수 있습니다.',
    'alpha_num'            => '이 :속성은 문자와 숫자 만 포함 할 수 있습니다.',
    'array'                => '이 :속성은 배열이어야합니다.',
    'before'               => '이 :속성은 이전 날짜 여야합니다 :데이트.',
    'before_or_equal'      => '이 :속성은 다음 날짜 이전이어야합니다 :데이트.',
    'between'              => [
        'numeric' => '이 :속성은 사이 여야합니다 :최소 및 :최대.',
        'file'    => '이 :속성은 사이 여야합니다 :최소 및 :최대 킬로바이트.',
        'string'  => '이 :속성은 사이 여야합니다 :최소 및 :최대 문자.',
        'array'   => '이 :속성은 사이 여야합니다 :최소 및 :최대 항목.',
    ],
    'boolean'              => '이 :속성 필드는 true 또는 false 여야합니다.',
    'confirmed'            => '이 :속성 확인이 일치하지 않습니다.',
    'date'                 => '이 :속성은 유효한 날짜가 아닙니다.',
    'date_format'          => '이 :속성이 형식과 일치하지 않습니다 :체재.',
    'different'            => '이 :속성 및 :다른 사람은 달라야합니다.',
    'digits'               => '이 :속성은 :숫자 숫자.',
    'digits_between'       => '이 :속성은 사이 여야합니다 :최소 및 :최대 자릿수.',
    'dimensions'           => '이 :속성에 잘못된 이미지 크기가 있습니다.',
    'distinct'             => '이 :속성 필드에 중복 된 값이 있습니다.',
    'email'                => '이 :속성은 유효한 이메일 주소 여야합니다.',
    'exists'               => '이 선택된 :속성이 잘못되었습니다.',
    'file'                 => '이 :속성은 파일이어야합니다.',
    'filled'               => '이 :속성 필드에는 값이 있어야합니다.',
    'image'                => '이 :속성은 이미지 여야합니다.',
    'in'                   => '이 선택된 :속성이 잘못되었습니다.',
    'in_array'             => '이 :속성 필드가 없습니다 :다른.',
    'integer'              => '이 :속성은 정수 여야합니다.',
    'ip'                   => '이 :속성은 유효한 IP 주소 여야합니다.',
    'ipv4'                 => '이 :속성은 유효한 IPv4 주소 여야합니다.',
    'ipv6'                 => '이 :속성은 유효한 IPv6 주소 여야합니다.',
    'json'                 => '이 :속성은 유효한 JSON 문자열이어야합니다.',
    'max'                  => [
        'numeric' => '이 :속성은 다음보다 클 수 없습니다 :최대.',
        'file'    => '이 :속성은 다음보다 클 수 없습니다 :최대 킬로바이트.',
        'string'  => '이 :속성은 다음보다 클 수 없습니다 :최대 문자.',
        'array'   => '이 :속성은 다음을 초과 할 수 없습니다 :최대 items.',
    ],
    'mimes'                => '이 :속성은 파일 유형이어야합니다: :가치.',
    'mimetypes'            => '이 :속성은 파일 유형이어야합니다: :가치.',
    'min'                  => [
        'numeric' => '이 :속성은 최소한 :최저한의.',
        'file'    => '이 :속성은 최소한 :최저한의 킬로바이트.',
        'string'  => '이 :속성은 최소한 :최저한의 문자.',
        'array'   => '이 :속성은 최소한 :최저한의 항목.',
    ],
    'not_in'               => '이 선택된 :속성이 잘못되었습니다.',
    'not_regex'            => '이 :속성 형식이 잘못되었습니다.',
    'numeric'              => '이 :속성은 숫자 여야합니다..',
    'present'              => '이 :속성 필드가 있어야합니다.',
    'regex'                => '이 :속성 형식이 잘못되었습니다.',
    'required'             => '이 :속성 필드는 필수입니다.',
    'required_if'          => '이 :다음과 같은 경우 속성 필드가 필요합니다 :다른 것은 :값.',
    'required_unless'      => '이 :속성 필드는 :다른 것 :가치.',
    'required_with'        => '이 :다음과 같은 경우 속성 필드가 필요합니다 :값이 있습니다..',
    'required_with_all'    => '이 :다음과 같은 경우 속성 필드가 필요합니다 :값이 있습니다..',
    'required_without'     => '이 :다음과 같은 경우 속성 필드가 필요합니다 :값이 없습니다.',
    'required_without_all' => '이 :다음과 같은 경우 속성 필드가 필요합니다 해당 사항 없음 :값이 있습니다.',
    'same'                 => '이 :속성 및 :기타는 일치해야합니다.',
    'size'                 => [
        'numeric' => '이 :속성은 :크기.',
        'file'    => '이 :속성은 :크기 킬로바이트.',
        'string'  => '이 :속성은 :크기 문자.',
        'array'   => '이 :속성은 다음을 포함해야합니다 :크기 항목.',
    ],
    'string'               => '이 :속성은 문자열이어야합니다.',
    'timezone'             => '이 :속성은 유효한 영역이어야합니다.',
    'unique'               => '이 :속성이 이미 사용되었습니다.',
    'uploaded'             => '이 :속성을 업로드하지 못했습니다.',
    'url'                  => '이 :속성 형식이 잘못되었습니다.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Rules
    |--------------------------------------------------------------------------
    */

    'age_eligibility' => '계속 진행하려면 연령이되어야합니다.',
    'greater_than_zero' => '이 :속성은 0보다 커야합니다.',
    'greater_than_or_equal_zero' => '이 :속성은 0보다 크거나 같아야합니다.',
    'has_same_depth_user_nodes' => [
        'incorrect_depth_users' => '이 :속성에는 사용자 수준이 다른 사용자가 포함됩니다. 모든 사용자는 동일한 사용자 수준이어야합니다',
        'incorrect_user_ids' => '이 :속성에 잘못된 사용자가 있습니다.',
    ],
    'is_master_level_or_below' => [
        'incorrect_user_ids' => '이 :속성에 잘못된 사용자가 있습니다.',
        'incorrect_user_levels' => '이 :속성은 마스터 수준 이하의 사용자를 포함해야합니다.',
    ],
    'password_strength' => '이 :속성은 사이 여야합니다 ' . config('app.api.global.passwordStrength.characterLength.min') . '-' . config('app.api.global.passwordStrength.characterLength.max') . ' 문자, 적어도 하나의 소문자가 있어야합니다, 대문자 1 개, 하나의 숫자와 하나의 기호 (' . config('app.api.defaults.symbols') . ').',
    'user_phone_availability' => [
        'country_id_undefined' => '이 {countryId} 변수가 유효성 검사 규칙에 전달되지 않았습니다.',
        'phone_occupied' => '다른 계정에서 이미 사용중인 전화 번호.',
    ],
    'valid_rebate_distribution_amount' => [
        'missing_prerequisites' => '규칙에 필수 전제 조건이 없습니다.',
        'invalid_distribution_amount' => '이 ":basics_user_level_distribution_type" 필드에 잘못된 값이 있습니다' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_selected_rrt_available_rebate' => '이 ":basics_user_level_distribution_type" 필드에 사용 가능한 리베이트 값을 정의해야합니다' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_default_distribution_amount' => '이 ":basics_user_level_distribution_type" 필드에 정의가 필요합니다 "표준 분포" 먼저' . $userLevelDistributionTypeErrorMessageSuffix,
    ],
    'valid_total_available_rebate_amount' => [
        'missing_prerequisites' => '규칙에 필수 전제 조건이 없습니다.',
        'invalid_total_available_rebate_amount' => '이 "사용 가능한 총 리베이트" 필드에 잘못된 값이 있습니다' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_rebate_calculation_type' => '이 "사용 가능한 총 리베이트" 필드에는 RRT 리베이트 계산 유형을 선택해야합니다' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_type' => '이 "사용 가능한 총 리베이트" 필드에는 RRT 유형을 선택해야합니다' . $userLevelDistributionErrorMessageSuffix,
        'undefined_rebate_distribution_silver_level' => '이 "사용 가능한 총 리베이트" 실버 레벨에 대해 값이 0 이상인 필드를 정의해야합니다' . $userLevelDistributionErrorMessageSuffix,
        'incorrect_rebate_distribution' => '이 "사용 가능한 총 리베이트" 필드에는 사용자 수준간에 정확한 금액 분할이 필요합니다' . $userLevelDistributionErrorMessageSuffix,
    ],
    'valid_rrt_user_hierarchy' => [
        'missing_prerequisites' => '규칙에 필수 전제 조건이 없습니다.',
        'undefined_selected_rrt_users' => '이 필드는 일부 사용자를 선택해야합니다.',
        'incorrect_selected_master_level_rrt_users' => '이 필드는 하나의 사용자 선택으로 제한됩니다.',
        'incorrect_selected_rrt_users' => '상위 수준에는 사용자가 선택되어 있지 않으므로 필드에는 사용자가 선택되어서는 안됩니다.',
        'incorrect_selected_user_level' => '필드에 잘못된 사용자 수준을 가진 일부 사용자가 있습니다.',
        'unavailable_selected_user_parent' => '이 필드에는 이전 수준에서 부모가 선택되지 않은 일부 사용자가 있습니다.',
    ],
    'valid_rrt_base_currency_selection' => [
        'missing_prerequisites' => '규칙에 필수 전제 조건이 없습니다..',
        'base_currency_not_selected' => '기본 통화를 사용하려면 "통화 프로필"을 만들어야합니다.',
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'alpha_space' => [
            'invalid_value' => '이 :속성은 알파벳과 공백 만 포함해야합니다.',
        ],
        'unique_value_in_array' => [
            'missing_prerequisites' => '일부 검증 전제 조건이 누락되었습니다.',
            'required_key_missing' => '이 :속성에 지정된 배열의 키가 없습니다.',
            'duplicate_values' => '이 :속성에 중복 값이 ​​있습니다.',
        ],
        'valid_default_rebate_rate_table_parameters' => [
            'missing_prerequisites' => '일부 검증 전제 조건이 누락되었습니다.',
            'rrt_already_exists' => '이 매개 변수가있는 기본 거래 그룹이 이미 존재합니다.',
        ],
        'greater_than_or_equal_specific_number' => [
            'invalid_number' => '이 :속성은 다음보다 크거나 같아야합니다:번호.',
        ],
    ],
    'is_valid_website_url' => '웹 사이트 URL이 잘못되었습니다.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap attribute place-holders
    | with something more reader friendly such as E-Mail Address instead
    | of "email". This simply helps us make messages a little cleaner.
    |
    */

    'attributes' => array_merge(
        [
            'email' => '이메일 주소',
        ],
        $questionAttributes,
        $userLevelSelectionAttributes
    ),
];
