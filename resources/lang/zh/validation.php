<?php

//Question field attributes
$questionAttributes = [];
for ($i = 0; $i <= 20; $i++) {
    $questionAttributes['question_' . $i] = 'question';
}

// user_level_x_selections.
$userLevelSelectionAttributes = [];
for ($i = 1; $i <= 8; $i++) {
    $userLevelSelectionAttributes['user_level_' . $i . '_selections'] = 'user selection';
}

// User level distribution error messages suffix.
$userLevelDistributionErrorMessageSuffix = ' (at ":basics_user_level_name" user >> ":basics_currency_name" currency >> ":basics_product_name" product >> ":basics_commission_level" commission level).';
$userLevelDistributionTypeErrorMessageSuffix = ' (at ":basics_user_level_name" user >> ":basics_currency_name" currency >> ":basics_product_name" product >> ":basics_commission_level" commission level >> ":basics_selected_user_level_name").';

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

    'accepted'             => '這  :attribute 必須被接受。',
    'active_url'           => '這  :attribute 不是有效的網址。',
    'after'                => '這  :attribute 必須是之後的日期 :date.',
    'after_or_equal'       => '這  :attribute 必須是等於或小於等於的日期 :date.',
    'alpha'                => '這  :attribute 只能包含字母。',
    'alpha_dash'           => '這  :attribute 只能包含字母，數字和破折號。',
    'alpha_num'            => '這  :attribute 只能包含字母和數字。',
    'array'                => '這  :attribute 必須是一個數組。',
    'before'               => '這  :attribute 必須是一個日期之前 :date.',
    'before_or_equal'      => '這  :attribute 必須是早於或等於的日期 :date.',
    'between'              => [
        'numeric' => '這 :attribute 必須介於 :min and :max.',
        'file'    => '這 :attribute 必須介於 :min and :max kilobytes.',
        'string'  => '這 :attribute 必須介於 :min and :max characters.',
        'array'   => '這 :attribute 必須介於 :min and :max items.',
    ],
    'boolean'              => '這 :attribute 字段必須為true或false。',
    'confirmed'            => '這 :attribute 確認不匹配。',
    'date'                 => '這 :attribute 不是有效日期。',
    'date_format'          => '這 :attribute 與格式不符 :format.',
    'different'            => '這 :attribute 和 :other 必須不同。',
    'digits'               => '這 :attribute 必須是 :digits digits.',
    'digits_between'       => '這 :attribute 必須介於 :min 和 :max digits.',
    'dimensions'           => '這 :attribute 圖片尺寸無效。',
    'distinct'             => '這 :attribute 字段具有重複值。',
    'email'                => '這 :attribute 必須是一個有效的E-mail地址。',
    'exists'               => '這 選定的 :attribute 是無效的。',
    'file'                 => '這 :attribute 必須是一個文件。',
    'filled'               => '這 :attribute 字段必須有一個值。',
    'image'                => '這 :attribute 必須是圖像。',
    'in'                   => '這 選定的 :attribute 是無效的。',
    'in_array'             => '這 :attribute 字段不存在於 :other.',
    'integer'              => '這 :attribute 必須為整數。',
    'ip'                   => '這 :attribute 必須是有效的IP地址。',
    'ipv4'                 => '這 :attribute 必須是有效的IPv4地址。',
    'ipv6'                 => '這 :attribute 必須是有效的IPv6地址。',
    'json'                 => '這 :attribute 必須是有效的JSON字符串。',
    'max'                  => [
        'numeric' => '這 :attribute 不得大於 :max.',
        'file'    => '這 :attribute 不得大於 :max kilobytes.',
        'string'  => '這 :attribute 不得大於 :max characters.',
        'array'   => '這 :attribute 可能不超過 :max items.',
    ],
    'mimes'                => '這 :attribute 必須是類型的文件: :values.',
    'mimetypes'            => '這 :attribute 必須是類型的文件: :values.',
    'min'                  => [
        'numeric' => '這 :attribute 必須至少 :min.',
        'file'    => '這 :attribute 必須至少 :min kilobytes.',
        'string'  => '這 :attribute 必須至少 :min characters.',
        'array'   => '這 :attribute 必須至少有 :min items.',
    ],
    'not_in'               => '這 選定的 :attribute 是無效的。',
    'not_regex'            => '這 :attribute 格式無效。',
    'numeric'              => '這 :attribute 必須是一個數字。',
    'present'              => '這 :attribute 字段必須存在。',
    'regex'                => '這 :attribute 格式無效。',
    'required'             => '這 :attribute 必填字段。',
    'required_if'          => '這 :attribute 何時需要該字段 :other is :value.',
    'required_unless'      => '這 :attribute 必填字段，除非 :other is in :values.',
    'required_with'        => '這 :attribute 何時需要該字段 :values is present.',
    'required_with_all'    => '這 :attribute 何時需要該字段 :values is present.',
    'required_without'     => '這 :attribute 何時需要該字段 :values is not present.',
    'required_without_all' => '這 :attribute 當以下任何一個都不為必填字段時 :values are present.',
    'same'                 => '這 :attribute 和 :other must match.',
    'size'                 => [
        'numeric' => '這 :attribute 必須是 :size.',
        'file'    => '這 :attribute 必須是 :size kilobytes.',
        'string'  => '這 :attribute 必須是 :size characters.',
        'array'   => '這 :attribute 必須包含 :size items.',
    ],
    'string'               => '這 :attribute 必須是一個字符串。',
    'timezone'             => '這 :attribute 必須是有效區域。',
    'unique'               => '這 :attribute 已有人帶走了。',
    'uploaded'             => '這 :attribute 上傳失敗。',
    'url'                  => '這 :attribute 格式無效。',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Rules
    |--------------------------------------------------------------------------
    */

    'age_eligibility' => '您必須是：age歲，才能繼續進行。',
    'greater_than_zero' => '這 :attribute 必須大於零。',
    'greater_than_or_equal_zero' => '這 :attribute 必須大於或等於零。',
    'has_same_depth_user_nodes' => [
        'incorrect_depth_users' => '這 :attribute 包含具有不同用戶級別的用戶。所有用戶必須具有相同的用戶級別',
        'incorrect_user_ids' => '這 :attribute 包含無效用戶。',
    ],
    'is_master_level_or_below' => [
        'incorrect_user_ids' => '這 :attribute 包含無效用戶。',
        'incorrect_user_levels' => '這 :attribute 必須包含主級或以下級別的用戶。',
    ],
    'password_strength' => '這 :attribute 必須介於 ' . config('app.api.global.passwordStrength.characterLength.min') . '-' . config('app.api.global.passwordStrength.characterLength.max') . ' 字符，並且至少包含一個小寫字母，一個大寫字母，一個數字和一個符號 (' . config('app.api.defaults.symbols') . ').',
    'user_phone_availability' => [
        'country_id_undefined' => '這 {countryId} 變量未傳遞到驗證規則。',
        'phone_occupied' => '該電話號碼已被另一個帳戶使用。',
    ],
    'valid_rebate_distribution_amount' => [
        'missing_prerequisites' => '該規則缺少必需的先決條件。',
        'invalid_distribution_amount' => '這 ":basics_user_level_distribution_type" 字段包含無效值' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_selected_rrt_available_rebate' => '這 ":basics_user_level_distribution_type" 字段需要定義可用的回扣值' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_default_distribution_amount' => ' 這 ":basics_user_level_distribution_type" 字段需要先定義“標準分佈”' . $userLevelDistributionTypeErrorMessageSuffix,
    ],
    'valid_total_available_rebate_amount' => [
        'missing_prerequisites' => '該規則缺少必需的先決條件。',
        'invalid_total_available_rebate_amount' => '“總可用返利”字段包含無效值' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_rebate_calculation_type' => '“總可用返利”字段要求選擇RRT返利計算類型' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_type' => '“總可用返利”字段要求選擇RRT類型' . $userLevelDistributionErrorMessageSuffix,
        'undefined_rebate_distribution_silver_level' => '必須為白銀級別定義“總可用回扣”字段，其值為0或更大' . $userLevelDistributionErrorMessageSuffix,
        'incorrect_rebate_distribution' => '“總可用返利”字段要求在用戶級別之間正確劃分數量' . $userLevelDistributionErrorMessageSuffix,
    ],
    'valid_rrt_user_hierarchy' => [
        'missing_prerequisites' => '該規則缺少必需的先決條件。',
        'undefined_selected_rrt_users' => ' 該字段需要選擇一些用戶。',
        'incorrect_selected_master_level_rrt_users' => '該字段僅限於一個用戶選擇。',
        'incorrect_selected_rrt_users' => '該字段不應選擇用戶，因為父級沒有選擇任何用戶。',
        'incorrect_selected_user_level' => '該字段包含一些用戶級別不正確的用戶。',
        'unavailable_selected_user_parent' => '該字段中的某些用戶未在上一級中選擇父級。',
    ],
    'valid_rrt_base_currency_selection' => [
        'missing_prerequisites' => '該規則缺少必需的先決條件。',
        'base_currency_not_selected' => '基本貨幣要求創建“貨幣資料”。',
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
            'invalid_value' => '這 :attribute 必須僅包含字母和空格。',
        ],
        'unique_value_in_array' => [
            'missing_prerequisites' => '缺少某些驗證先決條件。',
            'required_key_missing' => '這 :attribute 在給定數組中缺少鍵。',
            'duplicate_values' => '這 :attribute 包含重複值。',
        ],
        'valid_default_rebate_rate_table_parameters' => [
            'missing_prerequisites' => '缺少某些驗證先決條件。',
            'rrt_already_exists' => '具有這些參數的默認交易組已經存在。',
        ],
        'greater_than_or_equal_specific_number' => [
            'invalid_number' => '這 :attribute 必須大於或等於 :number.',
        ],
    ],
    'is_valid_website_url' => ' 網站網址無效。',

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
            'email' => '電子郵件',
        ],
        $questionAttributes,
        $userLevelSelectionAttributes
    ),
];
