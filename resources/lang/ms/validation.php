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

    'accepted'             => 'The :attribute mesti diterima.',
    'active_url'           => 'The :attribute bukan URL yang sah.',
    'after'                => 'The :attribute mesti tarikh selepas :date.',
    'after_or_equal'       => 'The :attribute mesti tarikh selepas atau sama dengan :date.',
    'alpha'                => 'The :attribute mungkin hanya mengandungi huruf.',
    'alpha_dash'           => 'The :attribute hanya boleh mengandungi huruf, angka, dan tanda hubung.',
    'alpha_num'            => 'The :attribute hanya boleh mengandungi huruf dan angka.',
    'array'                => 'The :attribute mestilah array.',
    'before'               => 'The :attribute mesti tarikh sebelum ini:date.',
    'before_or_equal'      => 'The :attribute mesti tarikh sebelum atau sama dengan :date.',
    'between'              => [
        'numeric' => 'The :attribute mesti antara :min dan :max.',
        'file'    => 'The :attribute mesti antara :min dan :max kilobytes.',
        'string'  => 'The :attribute mesti antara :min dan :max characters.',
        'array'   => 'The :attribute mesti ada antara :min dan :max items.',
    ],
    'boolean'              => 'The :attribute bidang mesti betul atau salah.',
    'confirmed'            => 'The :attribute pengesahan tidak sepadan.',
    'date'                 => 'The :attribute bukan tarikh yang sah.',
    'date_format'          => 'The :attribute tidak sesuai dengan format :format.',
    'different'            => 'The :attribute dan :other mesti berbeza.',
    'digits'               => 'The :attribute mesti :digits digits.',
    'digits_between'       => 'The :attribute mesti antara :min dan :max digits.',
    'dimensions'           => 'The :attribute mempunyai dimensi gambar yang tidak sah.',
    'distinct'             => 'The :attribute medan mempunyai nilai pendua.',
    'email'                => 'The :attribute Mesti alamat e-mel yang sah.',
    'exists'               => 'The terpilih :attribute tidak sah.',
    'file'                 => 'The :attribute mesti fail.',
    'filled'               => 'The :attribute bidang mesti mempunyai nilai.',
    'image'                => 'The :attribute mesti menjadi imej.',
    'in'                   => 'The terpilih :attribute tidak sah.',
    'in_array'             => 'The :attribute bidang tidak wujud di :other.',
    'integer'              => 'The :attribute mestilah bilangan bulat.',
    'ip'                   => 'The :attribute mestilah alamat IP yang sah.',
    'ipv4'                 => 'The :attribute mestilah alamat IPv4 yang sah.',
    'ipv6'                 => 'The :attribute mestilah alamat IPv6 yang sah.',
    'json'                 => 'The :attribute mestilah rentetan JSON yang sah.',
    'max'                  => [
        'numeric' => 'The :attribute mungkin tidak lebih besar daripada :max.',
        'file'    => 'The :attribute mungkin tidak lebih besar daripada :max kilobytes.',
        'string'  => 'The :attribute mungkin tidak mempunyai lebih daripada :max characters.',
        'array'   => 'The :attribute mungkin tidak mempunyai lebih daripada :max items.',
    ],
    'mimes'                => 'The :attribute mestilah fail jenis: :values.',
    'mimetypes'            => 'The :attribute mestilah fail jenis: :values.',
    'min'                  => [
        'numeric' => 'The :attribute mesti sekurang-kurangnya :min.',
        'file'    => 'The :attribute mesti sekurang-kurangnya :min kilobytes.',
        'string'  => 'The :attribute mesti sekurang-kurangnya :min characters.',
        'array'   => 'The :attribute mesti mempunyai sekurang-kurangnya :min items.',
    ],
    'not_in'               => 'Yang terpilih :attribute tidak sah.',
    'not_regex'            => 'The :attribute format tidak sah.',
    'numeric'              => 'The :attribute mesti nombor.',
    'present'              => 'The :attribute padang mesti ada.',
    'regex'                => 'The :attribute format tidak sah.',
    'required'             => 'The :attribute bidang diperlukan.',
    'required_if'          => 'The :attribute bidang diperlukan ketika :other adalah :value.',
    'required_unless'      => 'The :attribute bidang diperlukan kecuali :other adalah dalam :values.',
    'required_with'        => 'The :attribute bidang diperlukan ketika :values hadir.',
    'required_with_all'    => 'The :attribute bidang diperlukan ketika :values hadir.',
    'required_without'     => 'The :attribute bidang diperlukan ketika :values is tidak hadir.',
    'required_without_all' => 'The :attribute bidang diperlukan apabila tiada :values hadir.',
    'same'                 => 'The :attribute dan :other mesti sepadan.',
    'size'                 => [
        'numeric' => 'The :attribute mesti :size.',
        'file'    => 'The :attribute mesti :size kilobytes.',
        'string'  => 'The :attribute mesti :size characters.',
        'array'   => 'The :attribute mesti mengandungi :size items.',
    ],
    'string'               => 'The :attribute mesti tali.',
    'timezone'             => 'The :attribute mestilah zon yang sah.',
    'unique'               => 'The :attribute telah diambil.',
    'uploaded'             => 'The :attribute gagal memuat naik.',
    'url'                  => 'The :attribute format tidak sah.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Rules
    |--------------------------------------------------------------------------
    */

    'age_eligibility' => 'anda mesti :age tahun untuk terus maju.',
    'greater_than_zero' => 'The :attribute mesti lebih besar daripada sifar.',
    'greater_than_or_equal_zero' => 'The :attribute mestilah lebih besar daripada atau sama dengan sifar.',
    'has_same_depth_user_nodes' => [
        'incorrect_depth_users' => 'The :attribute mengandungi pengguna dengan tahap pengguna yang berbeza. Semua pengguna mesti mempunyai tahap pengguna yang sama',
        'incorrect_user_ids' => 'The :attribute mengandungi pengguna yang tidak sah.',
    ],
    'is_master_level_or_below' => [
        'incorrect_user_ids' => 'The :attribute mengandungi pengguna yang tidak sah.',
        'incorrect_user_levels' => 'The :attribute mesti mengandungi pengguna peringkat induk atau ke bawah.',
    ],
    'password_strength' => 'The :attribute mesti antara ' . config('app.api.global.passwordStrength.characterLength.min') . '-' . config('app.api.global.passwordStrength.characterLength.max') . ' watak, dan mempunyai sewa satu huruf kecil, satu huruf besar, satu nombor dan satu simbol (' . config('app.api.defaults.symbols') . ').',
    'user_phone_availability' => [
        'country_id_undefined' => 'The {countryId} pemboleh ubah tidak diteruskan ke peraturan pengesahan.',
        'phone_occupied' => 'Nombor telefon sudah digunakan oleh akaun lain.',
    ],
    'valid_rebate_distribution_amount' => [
        'missing_prerequisites' => 'Peraturan tidak mempunyai prasyarat yang diperlukan.',
        'invalid_distribution_amount' => 'The ":basics_user_level_distribution_type" medan mengandungi nilai yang tidak sah' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_selected_rrt_available_rebate' => 'The ":basics_user_level_distribution_type" bidang memerlukan penentuan nilai rebat yang ada' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_default_distribution_amount' => 'The ":basics_user_level_distribution_type" bidang memerlukan penentuan "Pengagihan Piawai" terlebih dahulu' . $userLevelDistributionTypeErrorMessageSuffix,
    ],
    'valid_total_available_rebate_amount' => [
        'missing_prerequisites' => 'Peraturan tidak mempunyai prasyarat yang diperlukan.',
        'invalid_total_available_rebate_amount' => 'Medan "Rebat Total Tersedia" mengandungi nilai yang tidak sah' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_rebate_calculation_type' => 'Medan "Rebat Total Tersedia" memerlukan pemilihan jenis pengiraan rebat RRT' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_type' => 'Medan "Rebat Total Tersedia" memerlukan pemilihan jenis RRT' . $userLevelDistributionErrorMessageSuffix,
        'undefined_rebate_distribution_silver_level' => 'Medan "Rebat Total Tersedia" mesti ditentukan untuk tahap Perak dengan nilai 0 atau lebih' . $userLevelDistributionErrorMessageSuffix,
        'incorrect_rebate_distribution' => 'Medan "Rebat Total Tersedia" memerlukan pembahagian jumlah yang betul antara tahap pengguna' . $userLevelDistributionErrorMessageSuffix,
    ],
    'valid_rrt_user_hierarchy' => [
        'missing_prerequisites' => 'Peraturan tidak mempunyai prasyarat yang diperlukan.',
        'undefined_selected_rrt_users' => 'Medan memerlukan pemilihan beberapa pengguna.',
        'incorrect_selected_master_level_rrt_users' => 'Medan terhad kepada satu pilihan pengguna.',
        'incorrect_selected_rrt_users' => 'Medan tidak boleh memilih pengguna kerana tahap induk tidak mempunyai pengguna yang dipilih.',
        'incorrect_selected_user_level' => 'Medan mempunyai beberapa pengguna dengan tahap pengguna yang salah.',
        'unavailable_selected_user_parent' => 'Medan ini mempunyai beberapa pengguna yang tidak dipilih oleh ibu bapa pada tahap sebelumnya.',
    ],
    'valid_rrt_base_currency_selection' => [
        'missing_prerequisites' => 'Peraturan tidak mempunyai prasyarat yang diperlukan.',
        'base_currency_not_selected' => 'Mata wang asas memerlukan "Profil Mata Wang" dibuat.',
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
            'invalid_value' => 'The :attribute mesti mengandungi huruf dan ruang sahaja.',
        ],
        'unique_value_in_array' => [
            'missing_prerequisites' => 'Beberapa prasyarat pengesahan tidak ada.',
            'required_key_missing' => 'The :attribute tiada kunci dalam susunan yang diberikan.',
            'duplicate_values' => 'The :attribute mengandungi nilai pendua.',
        ],
        'valid_default_rebate_rate_table_parameters' => [
            'missing_prerequisites' => 'Beberapa prasyarat pengesahan tidak ada.',
            'rrt_already_exists' => 'Kumpulan perdagangan lalai sudah ada dengan parameter ini.',
        ],
        'greater_than_or_equal_specific_number' => [
            'invalid_number' => 'The :attribute mesti lebih besar daripada atau sama dengan :number.',
        ],
    ],
    'is_valid_website_url' => 'Url laman web tidak sah.',

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
            'email' => 'alamat emel',
        ],
        $questionAttributes,
        $userLevelSelectionAttributes
    ),
];
