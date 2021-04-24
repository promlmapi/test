<?php

//Question field attributes
$questionAttributes = [];
for ($i = 0; $i <= 20; $i++) {
    $questionAttributes['question_' . $i] = 'سؤال';
}

// user_level_x_selections.
$userLevelSelectionAttributes = [];
for ($i = 1; $i <= 8; $i++) {
    $userLevelSelectionAttributes['user_level_' . $i . '_selections'] = 'اختيار المستخدم';
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

    'accepted'             => 'ال :attribute يجب قبوله.',
    'active_url'           => 'ال :attribute ليس عنوان URL صالحًا.',
    'after'                => 'ال :attribute يجب أن يكون تاريخًا بعد :date.',
    'after_or_equal'       => 'ال :attribute يجب أن يكون تاريخًا بعد أو يساوي :date.',
    'alpha'                => 'ال :attribute قد تحتوي على أحرف فقط.',
    'alpha_dash'           => 'ال :attribute قد تحتوي فقط على أحرف وأرقام وشرطات.',
    'alpha_num'            => 'ال :attribute قد تحتوي على أحرف وأرقام فقط.',
    'array'                => 'ال :attribute يجب أن يكون مصفوفة.',
    'before'               => 'ال :attribute يجب أن يكون تاريخ قبل :date.',
    'before_or_equal'      => 'ال :attribute يجب أن يكون تاريخًا يسبق أو يساوي :date.',
    'between'              => [
        'numeric' => 'ال :attribute يجب ان يكون بين :min و :max.',
        'file'    => 'ال :attribute يجب ان يكون بين :min و :max kilobytes.',
        'string'  => 'ال :attribute يجب ان يكون بين :min و :max characters.',
        'array'   => 'ال :attribute يجب أن يكون بين :min و :max items.',
    ],
    'boolean'              => 'ال :attribute يجب أن يكون الحقل صحيحًا أو خطأ.',
    'confirmed'            => 'ال :attribute التأكيد غير متطابق.',
    'date'                 => 'ال :attribute هذا ليس تاريخ صحيح.',
    'date_format'          => 'ال :attribute لا يتطابق مع الشكل :format.',
    'different'            => 'ال :attribute و :other يجب أن تكون مختلف.',
    'digits'               => 'ال :attribute يجب أن :digits digits.',
    'digits_between'       => 'ال :attribute يجب ان يكون بين :min و :max digits.',
    'dimensions'           => 'ال :attribute أبعاد الصورة غير صالحة.',
    'distinct'             => 'ال :attribute الحقل له قيمة مكررة.',
    'email'                => 'ال :attribute يجب أن يكون عنوان بريد إلكتروني صالح.',
    'exists'               => 'المختار:attribute غير صالح.',
    'file'                 => 'ال :attribute يجب أن يكون ملفًا.',
    'filled'               => 'ال :attribute يجب أن يكون للحقل قيمة.',
    'image'                => 'ال :attribute يجب أن تكون صورة.',
    'in'                   => 'المختار:attribute غير صالح.',
    'in_array'             => 'ال :attribute الحقل غير موجود في :other.',
    'integer'              => 'ال :attribute يجب أن يكون صحيحا.',
    'ip'                   => 'ال :attribute يجب أن يكون عنوان IP صالحًا.',
    'ipv4'                 => 'ال :attribute يجب أن يكون عنوان IPv4 صالحًا.',
    'ipv6'                 => 'ال :attribute يجب أن يكون عنوان IPv6 صالحًا.',
    'json'                 => 'ال :attribute يجب أن تكون سلسلة JSON صالحة.',
    'max'                  => [
        'numeric' => 'ال :attribute قد لا يكون أكبر من :max.',
        'file'    => 'ال :attribute قد لا يكون أكبر من  :max kilobytes.',
        'string'  => 'ال :attribute قد لا يكون أكبر من :max characters.',
        'array'   => 'ال :attribute قد لا يكون أكثر من :max items.',
    ],
    'mimes'                => 'ال :attribute يجب أن يكون ملفًا من النوع: :values.',
    'mimetypes'            => 'ال :attribute يجب أن يكون ملفًا من النوع: :values.',
    'min'                  => [
        'numeric' => 'ال :attribute لا بد أن يكون على الأقل :min.',
        'file'    => 'ال :attribute لا بد أن يكون على الأقل :min kilobytes.',
        'string'  => 'ال :attribute لا بد أن يكون على الأقل :min characters.',
        'array'   => 'ال :attribute يجب أن يكون على الأقل :min items.',
    ],
    'not_in'               => 'المختار :attribute غير صالح.',
    'not_regex'            => 'ال :attribute التنسيق غير صالح.',
    'numeric'              => 'ال :attribute يجب أن يكون رقما.',
    'present'              => 'ال :attribute يجب أن يكون الحقل موجودًا.',
    'regex'                => 'ال :attribute التنسيق غير صالح.',
    'required'             => 'ال :attribute الحقل مطلوب.',
    'required_if'          => 'ال :attribute الحقل مطلوب عندما  :other يكون :value.',
    'required_unless'      => 'ال :attribute الحقل مطلوب ما لم يكن :other في داخل :values.',
    'required_with'        => 'ال :attribute الحقل مطلوب عندما :values حاضر.',
    'required_with_all'    => 'ال :attribute الحقل مطلوب عندما :values حاضر.',
    'required_without'     => 'ال :attribute الحقل مطلوب عندما :values غير موجود.',
    'required_without_all' => 'ال :attribute الحقل مطلوبًا في حالة عدم وجود أي من :values حاضرون.',
    'same'                 => 'ال :attribute و :other يجب أن تتطابق.',
    'size'                 => [
        'numeric' => 'ال :attribute يجب أن :size.',
        'file'    => 'ال :attribute يجب أن :size kilobytes.',
        'string'  => 'ال :attribute يجب أن :size characters.',
        'array'   => 'ال :attribute يجب أن يحتوي على :size items.',
    ],
    'string'               => 'ال :attribute يجب أن يكون سلسلة.',
    'timezone'             => 'ال :attribute يجب أن تكون منطقة صالحة.',
    'unique'               => 'ال :attribute لقد اتخذت بالفعل.',
    'uploaded'             => 'ال :attribute فشل التحميل.',
    'url'                  => 'ال :attribute التنسيق غير صالح.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Rules
    |--------------------------------------------------------------------------
    */

    'age_eligibility' => 'يجب ان تكون :age سنة للمضي قدما.',
    'greater_than_zero' => 'ال :attribute يجب أن تكون أكبر من الصفر.',
    'greater_than_or_equal_zero' => 'ال :attribute يجب أن تكون أكبر من أو تساوي الصفر.',
    'has_same_depth_user_nodes' => [
        'incorrect_depth_users' => 'ال :attribute يحتوي على مستخدمين بمستويات مستخدم مختلفة. يجب أن يكون جميع المستخدمين من نفس مستوى المستخدم',
        'incorrect_user_ids' => 'ال :attribute يحتوي على مستخدمين غير صالحين.',
    ],
    'is_master_level_or_below' => [
        'incorrect_user_ids' => 'ال :attribute يحتوي على مستخدمين غير صالحين.',
        'incorrect_user_levels' => 'ال:attribute يجب أن يحتوي على المستخدمين من المستوى الرئيسي أو أقل.',
    ],
    'password_strength' => 'ال:attribute يجب ان يكون بين ' . config('app.api.global.passwordStrength.characterLength.min') . '-' . config('app.api.global.passwordStrength.characterLength.max') . ' أحرف ، ولديها عند الاستئجار حرف صغير واحد وحرف واحد كبير ورقم واحد ورمز واحد (' . config('app.api.defaults.symbols') . ').',
    'user_phone_availability' => [
        'country_id_undefined' => 'ال{countryId} لم يتم تمرير المتغير إلى قاعدة التحقق من الصحة.',
        'phone_occupied' => 'رقم الهاتف قيد الاستخدام بالفعل من قبل حساب آخر.',
    ],
    'valid_rebate_distribution_amount' => [
        'missing_prerequisites' => 'القاعدة تفتقد إلى المتطلبات الأساسية المطلوبة.',
        'invalid_distribution_amount' => 'ال ":basics_user_level_distribution_type" يحتوي الحقل على قيمة غير صالحة' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_selected_rrt_available_rebate' => 'ال ":basics_user_level_distribution_type" يتطلب الحقل تحديد قيمة الخصم المتاحة' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_default_distribution_amount' => 'ال ":basics_user_level_distribution_type" يتطلب الحقل تحديد "التوزيع القياسي" أولاً' . $userLevelDistributionTypeErrorMessageSuffix,
    ],
    'valid_total_available_rebate_amount' => [
        'missing_prerequisites' => 'القاعدة تفتقد إلى المتطلبات الأساسية المطلوبة.',
        'invalid_total_available_rebate_amount' => 'يحتوي حقل "إجمالي الخصم المتاح" على قيمة غير صالحة' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_rebate_calculation_type' => 'يتطلب حقل "إجمالي الخصم المتاح" تحديد نوع حساب الخصم RRT' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_type' => 'يتطلب حقل "إجمالي الخصم المتاح" تحديد نوع RRT' . $userLevelDistributionErrorMessageSuffix,
        'undefined_rebate_distribution_silver_level' => 'يجب تحديد حقل "إجمالي الخصم المتاح" للمستوى الفضي بقيمة 0 أو أكثر' . $userLevelDistributionErrorMessageSuffix,
        'incorrect_rebate_distribution' => 'يتطلب حقل "إجمالي الخصم المتاح" التقسيم الصحيح للمبلغ بين مستويات المستخدم' . $userLevelDistributionErrorMessageSuffix,
    ],
    'valid_rrt_user_hierarchy' => [
        'missing_prerequisites' => 'القاعدة تفتقد إلى المتطلبات الأساسية المطلوبة.',
        'undefined_selected_rrt_users' => 'يتطلب الحقل اختيار بعض المستخدمين.',
        'incorrect_selected_master_level_rrt_users' => 'يقتصر الحقل على تحديد مستخدم واحد.',
        'incorrect_selected_rrt_users' => 'يجب ألا يحتوي الحقل على مستخدمين محددين نظرًا لعدم تحديد أي مستخدمين على مستوى الوالدين.',
        'incorrect_selected_user_level' => 'يحتوي الحقل على بعض المستخدمين بمستوى مستخدم غير صحيح.',
        'unavailable_selected_user_parent' => 'يحتوي هذا الحقل على بعض المستخدمين الذين لم يتم اختيار أحد الوالدين في المستوى السابق.',
    ],
    'valid_rrt_base_currency_selection' => [
        'missing_prerequisites' => 'القاعدة تفتقد إلى المتطلبات الأساسية المطلوبة.',
        'base_currency_not_selected' => 'تتطلب العملة الأساسية إنشاء "ملف تعريف العملة".',
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
            'invalid_value' => 'ال :attribute يجب أن تحتوي فقط على الحروف الهجائية والمسافات.',
        ],
        'unique_value_in_array' => [
            'missing_prerequisites' => 'بعض متطلبات التحقق المسبقة مفقودة.',
            'required_key_missing' => 'ال :attribute يفتقد المفاتيح في مجموعة معينة.',
            'duplicate_values' => 'ال :attribute يحتوي على قيم مكررة.',
        ],
        'valid_default_rebate_rate_table_parameters' => [
            'missing_prerequisites' => 'بعض متطلبات التحقق المسبقة مفقودة.',
            'rrt_already_exists' => 'توجد بالفعل مجموعة تداول افتراضية مع هذه المعلمات.',
        ],
        'greater_than_or_equal_specific_number' => [
            'invalid_number' => 'ال :attribute يجب أن يكون أكبر من أو يساوي :number.',
        ],
    ],
    'is_valid_website_url' => 'عنوان url لموقع الويب غير صالح.',

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
            'email' => 'عنوان بريد الكتروني',
        ],
        $questionAttributes,
        $userLevelSelectionAttributes
    ),
];
