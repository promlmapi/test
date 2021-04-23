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

    'accepted'             => 'The :attribute must be accepted.',
    'active_url'           => 'The :attribute is not a valid URL.',
    'after'                => 'The :attribute must be a date after :date.',
    'after_or_equal'       => 'The :attribute must be a date after or equal to :date.',
    'alpha'                => 'The :attribute may only contain letters.',
    'alpha_dash'           => 'The :attribute may only contain letters, numbers, and dashes.',
    'alpha_num'            => 'The :attribute may only contain letters and numbers.',
    'array'                => 'The :attribute must be an array.',
    'before'               => 'The :attribute must be a date before :date.',
    'before_or_equal'      => 'The :attribute must be a date before or equal to :date.',
    'between'              => [
        'numeric' => 'The :attribute must be between :min and :max.',
        'file'    => 'The :attribute must be between :min and :max kilobytes.',
        'string'  => 'The :attribute must be between :min and :max characters.',
        'array'   => 'The :attribute must have between :min and :max items.',
    ],
    'boolean'              => 'The :attribute field must be true or false.',
    'confirmed'            => 'The :attribute confirmation does not match.',
    'date'                 => 'The :attribute is not a valid date.',
    'date_format'          => 'The :attribute does not match the format :format.',
    'different'            => 'The :attribute and :other must be different.',
    'digits'               => 'The :attribute must be :digits digits.',
    'digits_between'       => 'The :attribute must be between :min and :max digits.',
    'dimensions'           => 'The :attribute has invalid image dimensions.',
    'distinct'             => 'The :attribute field has a duplicate value.',
    'email'                => 'The :attribute must be a valid email address.',
    'exists'               => 'The selected :attribute is invalid.',
    'file'                 => 'The :attribute must be a file.',
    'filled'               => 'The :attribute field must have a value.',
    'image'                => 'The :attribute must be an image.',
    'in'                   => 'The selected :attribute is invalid.',
    'in_array'             => 'The :attribute field does not exist in :other.',
    'integer'              => 'The :attribute must be an integer.',
    'ip'                   => 'The :attribute must be a valid IP address.',
    'ipv4'                 => 'The :attribute must be a valid IPv4 address.',
    'ipv6'                 => 'The :attribute must be a valid IPv6 address.',
    'json'                 => 'The :attribute must be a valid JSON string.',
    'max'                  => [
        'numeric' => 'The :attribute may not be greater than :max.',
        'file'    => 'The :attribute may not be greater than :max kilobytes.',
        'string'  => 'The :attribute may not be greater than :max characters.',
        'array'   => 'The :attribute may not have more than :max items.',
    ],
    'mimes'                => 'The :attribute must be a file of type: :values.',
    'mimetypes'            => 'The :attribute must be a file of type: :values.',
    'min'                  => [
        'numeric' => 'The :attribute must be at least :min.',
        'file'    => 'The :attribute must be at least :min kilobytes.',
        'string'  => 'The :attribute must be at least :min characters.',
        'array'   => 'The :attribute must have at least :min items.',
    ],
    'not_in'               => 'The selected :attribute is invalid.',
    'not_regex'            => 'The :attribute format is invalid.',
    'numeric'              => 'The :attribute must be a number.',
    'present'              => 'The :attribute field must be present.',
    'regex'                => 'The :attribute format is invalid.',
    'required'             => 'The :attribute field is required.',
    'required_if'          => 'The :attribute field is required when :other is :value.',
    'required_unless'      => 'The :attribute field is required unless :other is in :values.',
    'required_with'        => 'The :attribute field is required when :values is present.',
    'required_with_all'    => 'The :attribute field is required when :values is present.',
    'required_without'     => 'The :attribute field is required when :values is not present.',
    'required_without_all' => 'The :attribute field is required when none of :values are present.',
    'same'                 => 'The :attribute and :other must match.',
    'size'                 => [
        'numeric' => 'The :attribute must be :size.',
        'file'    => 'The :attribute must be :size kilobytes.',
        'string'  => 'The :attribute must be :size characters.',
        'array'   => 'The :attribute must contain :size items.',
    ],
    'string'               => 'The :attribute must be a string.',
    'timezone'             => 'The :attribute must be a valid zone.',
    'unique'               => 'The :attribute has already been taken.',
    'uploaded'             => 'The :attribute failed to upload.',
    'url'                  => 'The :attribute format is invalid.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Rules
    |--------------------------------------------------------------------------
    */

    'age_eligibility' => 'You must be :age years old to proceed further.',
    'greater_than_zero' => 'The :attribute must be greater than zero.',
    'greater_than_or_equal_zero' => 'The :attribute must be greater than or equal to zero.',
    'has_same_depth_user_nodes' => [
        'incorrect_depth_users' => 'The :attribute contains users with different user levels. All the users must be of same user level',
        'incorrect_user_ids' => 'The :attribute contains invalid users.',
    ],
    'is_master_level_or_below' => [
        'incorrect_user_ids' => 'The :attribute contains invalid users.',
        'incorrect_user_levels' => 'The :attribute must contain users of master level or below.',
    ],
    'password_strength' => 'The :attribute must be between ' . config('app.api.global.passwordStrength.characterLength.min') . '-' . config('app.api.global.passwordStrength.characterLength.max') . ' characters, and have at lease one lower case letter, one upper case letter, one number and one symbol (' . config('app.api.defaults.symbols') . ').',
    'user_phone_availability' => [
        'country_id_undefined' => 'The {countryId} variable is not passed to validation rule.',
        'phone_occupied' => 'The phone number is already in use by another account.',
    ],
    'valid_rebate_distribution_amount' => [
        'missing_prerequisites' => 'The rule is missing required prerequisites.',
        'invalid_distribution_amount' => 'The ":basics_user_level_distribution_type" field contains invalid value' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_selected_rrt_available_rebate' => 'The ":basics_user_level_distribution_type" field requires defining of available rebate value' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_default_distribution_amount' => 'The ":basics_user_level_distribution_type" field requires defining of "Standard Distribution" first' . $userLevelDistributionTypeErrorMessageSuffix,
    ],
    'valid_total_available_rebate_amount' => [
        'missing_prerequisites' => 'The rule is missing required prerequisites.',
        'invalid_total_available_rebate_amount' => 'The "Total Available Rebate" field contains invalid value' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_rebate_calculation_type' => 'The "Total Available Rebate" field requires selection of RRT rebate calculation type' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_type' => 'The "Total Available Rebate" field requires selection of RRT type' . $userLevelDistributionErrorMessageSuffix,
        'undefined_rebate_distribution_silver_level' => 'The "Total Available Rebate" field must be defined for Silver level with value as 0 or more' . $userLevelDistributionErrorMessageSuffix,
        'incorrect_rebate_distribution' => 'The "Total Available Rebate" field requires correct division of amount between user levels' . $userLevelDistributionErrorMessageSuffix,
    ],
    'valid_rrt_user_hierarchy' => [
        'missing_prerequisites' => 'The rule is missing required prerequisites.',
        'undefined_selected_rrt_users' => 'The field requires selection of some users.',
        'incorrect_selected_master_level_rrt_users' => 'The field is limited to one user selection.',
        'incorrect_selected_rrt_users' => 'The field should not have users selected because parent level don\'t have any users selected.',
        'incorrect_selected_user_level' => 'The field has some users with incorrect user level.',
        'unavailable_selected_user_parent' => 'The field has some users which don\'t have parent selected in previous level.',
    ],
    'valid_rrt_base_currency_selection' => [
        'missing_prerequisites' => 'The rule is missing required prerequisites.',
        'base_currency_not_selected' => 'The base currency requires "Currency Profile" to be created.',
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
            'invalid_value' => 'The :attribute must contain only alphabets and spaces.',
        ],
        'unique_value_in_array' => [
            'missing_prerequisites' => 'Some validation prerequisites are missing.',
            'required_key_missing' => 'The :attribute is missing keys in given array.',
            'duplicate_values' => 'The :attribute contains duplicate values.',
        ],
        'valid_default_rebate_rate_table_parameters' => [
            'missing_prerequisites' => 'Some validation prerequisites are missing.',
            'rrt_already_exists' => 'A default trading group already exists with these parameters.',
        ],
        'greater_than_or_equal_specific_number' => [
            'invalid_number' => 'The :attribute must be greater than or equal to :number.',
        ],
    ],
    'is_valid_website_url' => 'The website url is invalid.',

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
            'email' => 'email address',
        ],
        $questionAttributes,
        $userLevelSelectionAttributes
    ),
];
