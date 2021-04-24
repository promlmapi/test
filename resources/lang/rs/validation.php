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

    'accepted'             => 'В :attribute должен быть принят.',
    'active_url'           => 'В :attribute не является действительным URL.',
    'after'                => 'В :attribute должно быть дата после :date.',
    'after_or_equal'       => 'В :attribute должен быть датой после или равной :date.',
    'alpha'                => 'В :attribute может содержать только буквы.',
    'alpha_dash'           => 'В :attribute может содержать только буквы, цифры и дефисы.',
    'alpha_num'            => 'В :attribute может содержать только буквы и цифры.',
    'array'                => 'В :attribute должен быть массивом.',
    'before'               => 'В :attribute должно быть свидание до :date.',
    'before_or_equal'      => 'В :attribute должен быть датой до или равной :date.',
    'between'              => [
        'numeric' => 'В :attribute должно быть между :min и :max.',
        'file'    => 'В :attribute должно быть между :min и :max kilobytes.',
        'string'  => 'В :attribute должно быть между :min и :max characters.',
        'array'   => 'В :attribute должно быть между :min и :max items.',
    ],
    'boolean'              => 'В :attribute поле должно быть истинным или ложным.',
    'confirmed'            => 'В :attribute подтверждение не совпадает.',
    'date'                 => 'В :attribute не действительная дата.',
    'date_format'          => 'В :attribute не соответствует формату :format.',
    'different'            => 'В :attribute и :other должно быть иначе.',
    'digits'               => 'В :attribute должно быть :digits digits.',
    'digits_between'       => 'В :attribute должно быть между :min и :max digits.',
    'dimensions'           => 'В :attribute имеет недопустимые размеры изображения.',
    'distinct'             => 'В :attribute поле имеет повторяющееся значение.',
    'email'                => 'В :attribute Адрес эл. почты должен быть действительным.',
    'exists'               => 'Избранные :attribute является недействительным.',
    'file'                 => 'В :attribute должен быть файл.',
    'filled'               => 'В :attribute поле должно иметь значение.',
    'image'                => 'В :attribute должно быть изображение.',
    'in'                   => 'Избранные :attribute является недействительным.',
    'in_array'             => 'В :attribute поле не существует в :other.',
    'integer'              => 'В :attribute должно быть целым числом.',
    'ip'                   => 'В :attribute должен быть действующий IP-адрес.',
    'ipv4'                 => 'В :attribute должен быть действующим IPv4-адресом.',
    'ipv6'                 => 'В :attribute должен быть действующим IPv6-адресом.',
    'json'                 => 'В :attribute должна быть допустимой строкой JSON.',
    'max'                  => [
        'numeric' => 'В :attribute не может быть больше, чем :max.',
        'file'    => 'В :attribute не может быть больше, чем :max kilobytes.',
        'string'  => 'В :attribute не может быть больше, чем :max characters.',
        'array'   => 'В :attribute не может быть больше, чем :max items.',
    ],
    'mimes'                => 'В :attribute должен быть файл типа: :values.',
    'mimetypes'            => 'В :attribute должен быть файл типа: :values.',
    'min'                  => [
        'numeric' => 'В :attribute должен быть не менее :min.',
        'file'    => 'В :attribute должен быть не менее :min kilobytes.',
        'string'  => 'В :attribute должен быть не менее :min characters.',
        'array'   => 'В :attribute должен иметь как минимум :min items.',
    ],
    'not_in'               => 'Избранные :attribute является недействительным.',
    'not_regex'            => 'В :attribute формат недействителен.',
    'numeric'              => 'В :attribute должен быть числом.',
    'present'              => 'В :attribute поле должно присутствовать.',
    'regex'                => 'В :attribute формат недействителен.',
    'required'             => 'В :attribute Поле, обязательное для заполнения.',
    'required_if'          => 'В :attribute поле обязательно, когда :other является :value.',
    'required_unless'      => 'В :attribute поле является обязательным, если только :other в :values.',
    'required_with'        => 'В :attribute поле обязательно, когда :values настоящее.',
    'required_with_all'    => 'В :attribute поле обязательно, когда :values настоящее.',
    'required_without'     => 'В :attribute поле обязательно, когда :values нет.',
    'required_without_all' => 'В :attribute поле является обязательным, если ни один из :values присутствуют.',
    'same'                 => 'В :attribute и :other должен совпадать.',
    'size'                 => [
        'numeric' => 'В :attribute должно быть :size.',
        'file'    => 'В :attribute должно быть :size kilobytes.',
        'string'  => 'В :attribute должно быть :size characters.',
        'array'   => 'В :attribute должен содержать :size items.',
    ],
    'string'               => 'В :attribute должна быть строка.',
    'timezone'             => 'В :attribute должна быть действующая зона.',
    'unique'               => 'В :attribute уже принято.',
    'uploaded'             => 'В :attribute не удалось загрузить.',
    'url'                  => 'В :attribute формат недействителен.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Rules
    |--------------------------------------------------------------------------
    */

    'age_eligibility' => 'Ты должен быть :age лет, чтобы продолжить.',
    'greater_than_zero' => 'В :attribute должно быть больше нуля.',
    'greater_than_or_equal_zero' => 'В :attribute должно быть больше или равно нулю.',
    'has_same_depth_user_nodes' => [
        'incorrect_depth_users' => 'В :attribute содержит пользователей с разными уровнями пользователей. Все пользователи должны быть одного уровня пользователя.',
        'incorrect_user_ids' => 'В :attribute содержит недействительных пользователей.',
    ],
    'is_master_level_or_below' => [
        'incorrect_user_ids' => 'В :attribute содержит недействительных пользователей.',
        'incorrect_user_levels' => 'В :attribute должны содержать пользователей уровня мастера или ниже.',
    ],
    'password_strength' => 'В :attribute должно быть между ' . config('app.api.global.passwordStrength.characterLength.min') . '-' . config('app.api.global.passwordStrength.characterLength.max') . 'символов, и иметь по крайней мере одну букву нижнего регистра, одну букву верхнего регистра, одну цифру и один символ(' . config('app.api.defaults.symbols') . ').',
    'user_phone_availability' => [
        'country_id_undefined' => 'В {countryId} переменная не передается в правило проверки.',
        'phone_occupied' => 'Номер телефона уже используется другой учетной записью.',
    ],
    'valid_rebate_distribution_amount' => [
        'missing_prerequisites' => 'В правиле отсутствуют необходимые предпосылки.',
        'invalid_distribution_amount' => 'В ":basics_user_level_distribution_type" поле содержит недопустимое значение' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_selected_rrt_available_rebate' => 'В ":basics_user_level_distribution_type" поле требует определения доступного значения скидки' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_default_distribution_amount' => 'В ":basics_user_level_distribution_type" необходимо сначала указать "Стандартное распределение"' . $userLevelDistributionTypeErrorMessageSuffix,
    ],
    'valid_total_available_rebate_amount' => [
        'missing_prerequisites' => 'В правиле отсутствуют необходимые предпосылки.',
        'invalid_total_available_rebate_amount' => 'Поле «Общий доступный бонус» содержит недопустимое значение.' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_rebate_calculation_type' => 'В поле «Общая доступная скидка» необходимо выбрать тип расчета скидки RRT.' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_type' => 'В поле «Общая доступная скидка» необходимо выбрать тип RRT.' . $userLevelDistributionErrorMessageSuffix,
        'undefined_rebate_distribution_silver_level' => 'Поле «Общая доступная скидка» должно быть определено для уровня Silver со значением 0 или более.' . $userLevelDistributionErrorMessageSuffix,
        'incorrect_rebate_distribution' => 'В поле «Общий доступный бонус» требуется правильное разделение суммы между уровнями пользователей.' . $userLevelDistributionErrorMessageSuffix,
    ],
    'valid_rrt_user_hierarchy' => [
        'missing_prerequisites' => 'В правиле отсутствуют необходимые предпосылки.',
        'undefined_selected_rrt_users' => 'Поле требует выбора нескольких пользователей.',
        'incorrect_selected_master_level_rrt_users' => 'Поле ограничено выбором одного пользователя.',
        'incorrect_selected_rrt_users' => 'В поле не должны быть выбраны пользователи, потому что на родительском уровне не выбраны никакие пользователи.',
        'incorrect_selected_user_level' => 'У поля есть несколько пользователей с неправильным уровнем пользователя.',
        'unavailable_selected_user_parent' => 'В поле есть несколько пользователей, у которых на предыдущем уровне не выбран родительский элемент.',
    ],
    'valid_rrt_base_currency_selection' => [
        'missing_prerequisites' => 'В правиле отсутствуют необходимые предпосылки.',
        'base_currency_not_selected' => 'Базовая валюта требует создания «Валютного профиля».',
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
            'invalid_value' => 'В :attribute должен содержать только буквы и пробелы.',
        ],
        'unique_value_in_array' => [
            'missing_prerequisites' => 'Отсутствуют некоторые предварительные условия для проверки.',
            'required_key_missing' => 'В :attribute отсутствуют ключи в данном массиве.',
            'duplicate_values' => 'В :attribute содержит повторяющиеся значения.',
        ],
        'valid_default_rebate_rate_table_parameters' => [
            'missing_prerequisites' => 'Отсутствуют некоторые предварительные условия для проверки.',
            'rrt_already_exists' => 'Торговая группа по умолчанию с этими параметрами уже существует.',
        ],
        'greater_than_or_equal_specific_number' => [
            'invalid_number' => 'В :attribute должно быть больше или равно:number.',
        ],
    ],
    'is_valid_website_url' => 'URL-адрес веб-сайта недействителен.',

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
            'email' => 'Адрес электронной почты',
        ],
        $questionAttributes,
        $userLevelSelectionAttributes
    ),
];
