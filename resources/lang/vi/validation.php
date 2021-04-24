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

    'accepted'             => 'Các :attribute phải được chấp nhận.',
    'active_url'           => 'Các :attribute không phải là một URL hợp lệ.',
    'after'                => 'Các :attribute phải là một ngày sau :date.',
    'after_or_equal'       => 'Các :attribute phải là một ngày sau hoặc bằng :date.',
    'alpha'                => 'Các :attribute chỉ có thể chứa các chữ cái.',
    'alpha_dash'           => 'Các :attribute chỉ có thể chứa các chữ cái, số và dấu gạch ngang.',
    'alpha_num'            => 'Các :attribute chỉ có thể chứa các chữ cái và số.',
    'array'                => 'Các :attribute phải là một mảng.',
    'before'               => 'Các :attribute phải là một ngày trước :date.',
    'before_or_equal'      => 'Các :attribute phải là một ngày trước hoặc bằng :date.',
    'between'              => [
        'numeric' => 'Các :attribute phải ở giữa :min và :max.',
        'file'    => 'Các :attribute phải ở giữa :min và :max kilobytes.',
        'string'  => 'Các :attribute phải ở giữa :min và :max characters.',
        'array'   => 'Các :attribute phải có giữa :min và :max items.',
    ],
    'boolean'              => 'Các :attribute trường phải đúng hoặc sai.',
    'confirmed'            => 'Các :attribute nhận đinh không phù hợp.',
    'date'                 => 'Các :attribute Không phải là ngày hợp lệ.',
    'date_format'          => 'Các :attribute không phù hợp với định dạng :format.',
    'different'            => 'Các :attribute và :other phải khác.',
    'digits'               => 'Các :attribute cần phải :digits chữ số.',
    'digits_between'       => 'Các :attribute phải ở giữa :min và :max chữ số.',
    'dimensions'           => 'Các :attribute có kích thước hình ảnh không hợp lệ.',
    'distinct'             => 'Các :attribute trường có giá trị trùng lặp.',
    'email'                => 'Các :attribute Phải la một địa chỉ email hợp lệ.',
    'exists'               => 'Phần được chọn :attribute không có hiệu lực.',
    'file'                 => 'Các :attribute phải là một tệp.',
    'filled'               => 'Các :attribute trường phải có một giá trị.',
    'image'                => 'Các :attribute phải là một hình ảnh.',
    'in'                   => 'Phần được chọn:attribute không có hiệu lực.',
    'in_array'             => 'Các :attribute trường không tồn tại trong :other.',
    'integer'              => 'Các :attribute phải là số nguyên.',
    'ip'                   => 'Các :attribute phải là một địa chỉ IP hợp lệ.',
    'ipv4'                 => 'Các :attribute phải là địa chỉ IPv4 hợp lệ.',
    'ipv6'                 => 'Các :attribute phải là địa chỉ IPv6 hợp lệ.',
    'json'                 => 'Các :attribute phải là một chuỗi JSON hợp lệ.',
    'max'                  => [
        'numeric' => 'Các :attribute có thể không lớn hơn :max.',
        'file'    => 'Các :attribute có thể không lớn hơn :max kilobytes.',
        'string'  => 'Các :attribute có thể không lớn hơn :max characters.',
        'array'   => 'Các :attribute có thể không có nhiều hơn :max items.',
    ],
    'mimes'                => 'Các :attribute phải là một loại tệp: :values.',
    'mimetypes'            => 'Các :attribute phải là một loại tệp: :values.',
    'min'                  => [
        'numeric' => 'Các :attribute ít nhất phải là :min.',
        'file'    => 'Các :attribute ít nhất phải là :min kilobytes.',
        'string'  => 'Các :attribute ít nhất phải là :min characters.',
        'array'   => 'Các :attribute phải có ít nhất :min items.',
    ],
    'not_in'               => 'Các đã chọn :attribute không có hiệu lực.',
    'not_regex'            => 'Các :attribute định dạng không hợp lệ.',
    'numeric'              => 'Các :attribute phải là một số.',
    'present'              => 'Các :attribute trường phải có mặt.',
    'regex'                => 'Các :attribute định dạng không hợp lệ.',
    'required'             => 'Các :attribute lĩnh vực được yêu cầu.',
    'required_if'          => 'Các :attribute trường được yêu cầu khi :other Là :value.',
    'required_unless'      => 'Các :attribute trường là bắt buộc trừ khi :other trong :values.',
    'required_with'        => 'Các :attribute trường được yêu cầu khi :values là quà tặng.',
    'required_with_all'    => 'Các :attribute trường được yêu cầu khi :values là quà tặng.',
    'required_without'     => 'Các :attribute trường được yêu cầu khi :values không phải lúc này.',
    'required_without_all' => 'Các :attribute trường là bắt buộc khi không có :values đang có mặt.',
    'same'                 => 'Các :attribute và :other phải phù hợp với.',
    'size'                 => [
        'numeric' => 'Các :attribute cần phải :size.',
        'file'    => 'Các :attribute cần phải :size kilobytes.',
        'string'  => 'Các :attribute cần phải :size characters.',
        'array'   => 'Các :attribute phải chứa :size items.',
    ],
    'string'               => 'Các :attribute phải là một chuỗi.',
    'timezone'             => 'Các :attribute phải là một vùng hợp lệ.',
    'unique'               => 'Các :attribute đã được thực hiện.',
    'uploaded'             => 'Các :attribute không tải lên được.',
    'url'                  => 'Các :attribute định dạng không hợp lệ.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Rules
    |--------------------------------------------------------------------------
    */

    'age_eligibility' => 'bạn phải :age tuổi để tiến xa hơn.',
    'greater_than_zero' => 'Các :attribute phải lớn hơn 0.',
    'greater_than_or_equal_zero' => 'Các :attribute phải lớn hơn hoặc bằng không.',
    'has_same_depth_user_nodes' => [
        'incorrect_depth_users' => 'Các :attribute chứa người dùng với các cấp độ người dùng khác nhau. Tất cả người dùng phải ở cùng cấp độ người dùng',
        'incorrect_user_ids' => 'Các :attribute chứa người dùng không hợp lệ.',
    ],
    'is_master_level_or_below' => [
        'incorrect_user_ids' => 'Các :attribute chứa người dùng không hợp lệ.',
        'incorrect_user_levels' => 'Các:attribute phải chứa người dùng từ cấp độ chính trở xuống.',
    ],
    'password_strength' => 'Các :attribute phải ở giữa ' . config('app.api.global.passwordStrength.characterLength.min') . '-' . config('app.api.global.passwordStrength.characterLength.max') . ' ký tự và có một chữ thường, một chữ hoa, một số và một ký hiệu (' . config('app.api.defaults.symbols') . ').',
    'user_phone_availability' => [
        'country_id_undefined' => 'Các {countryId} biến không được chuyển đến quy tắc xác thực.',
        'phone_occupied' => 'Số điện thoại đã được một tài khoản khác sử dụng.',
    ],
    'valid_rebate_distribution_amount' => [
        'missing_prerequisites' => 'Quy tắc thiếu điều kiện tiên quyết bắt buộc.',
        'invalid_distribution_amount' => 'Các ":basics_user_level_distribution_type" trường chứa giá trị không hợp lệ' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_selected_rrt_available_rebate' => 'Các ":basics_user_level_distribution_type" trường yêu cầu xác định giá trị giảm giá khả dụng' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_default_distribution_amount' => 'Các":basics_user_level_distribution_type" trường yêu cầu xác định "Phân phối chuẩn" trước tiên' . $userLevelDistributionTypeErrorMessageSuffix,
    ],
    'valid_total_available_rebate_amount' => [
        'missing_prerequisites' => 'Quy tắc thiếu điều kiện tiên quyết bắt buộc.',
        'invalid_total_available_rebate_amount' => 'Trường "Tổng số tiền giảm giá có sẵn" chứa giá trị không hợp lệ' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_rebate_calculation_type' => 'Trường "Tổng khoản giảm giá có sẵn" yêu cầu chọn loại tính toán khoản giảm giá RRT' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_type' => 'Trường "Tổng số tiền giảm giá có sẵn" yêu cầu chọn loại RRT' . $userLevelDistributionErrorMessageSuffix,
        'undefined_rebate_distribution_silver_level' => 'Trường "Tổng số tiền hoàn lại có sẵn" phải được xác định cho cấp độ Bạc có giá trị từ 0 trở lên' . $userLevelDistributionErrorMessageSuffix,
        'incorrect_rebate_distribution' => 'Trường "Tổng số tiền hoàn lại có sẵn" yêu cầu phân chia chính xác số tiền giữa các cấp độ người dùng' . $userLevelDistributionErrorMessageSuffix,
    ],
    'valid_rrt_user_hierarchy' => [
        'missing_prerequisites' => 'Quy tắc thiếu điều kiện tiên quyết bắt buộc.',
        'undefined_selected_rrt_users' => 'Trường yêu cầu lựa chọn một số người dùng.',
        'incorrect_selected_master_level_rrt_users' => 'Trường được giới hạn cho một lựa chọn của người dùng.',
        'incorrect_selected_rrt_users' => 'Trường không được chọn người dùng vì cấp chính không có bất kỳ người dùng nào được chọn.',
        'incorrect_selected_user_level' => 'Trường có một số người dùng với cấp độ người dùng không chính xác.',
        'unavailable_selected_user_parent' => 'Trường có một số người dùng không được cha mẹ chọn ở cấp trước',
    ],
    'valid_rrt_base_currency_selection' => [
        'missing_prerequisites' => 'Quy tắc thiếu điều kiện tiên quyết bắt buộc.',
        'base_currency_not_selected' => 'Đơn vị tiền tệ cơ sở yêu cầu phải tạo "Hồ sơ tiền tệ".',
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
            'invalid_value' => 'Các :attribute chỉ được chứa các bảng chữ cái và dấu cách.',
        ],
        'unique_value_in_array' => [
            'missing_prerequisites' => 'Thiếu một số điều kiện tiên quyết xác thực.',
            'required_key_missing' => 'Các :attribute bị thiếu khóa trong mảng nhất định.',
            'duplicate_values' => 'Các :attribute chứa các giá trị trùng lặp.',
        ],
        'valid_default_rebate_rate_table_parameters' => [
            'missing_prerequisites' => 'Thiếu một số điều kiện tiên quyết xác thực.',
            'rrt_already_exists' => 'Một nhóm giao dịch mặc định đã tồn tại với các thông số này.',
        ],
        'greater_than_or_equal_specific_number' => [
            'invalid_number' => 'Các :attribute phải lớn hơn hoặc bằng :number.',
        ],
    ],
    'is_valid_website_url' => 'Url của trang web không hợp lệ.',

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
            'email' => 'địa chỉ email',
        ],
        $questionAttributes,
        $userLevelSelectionAttributes
    ),
];
