<?php


//Question field attributes
$questionAttributes = [];
for ($i = 0; $i <= 20; $i++) {
    $questionAttributes['question_' . $i] = 'pregunta';
}

// user_level_x_selections.
$userLevelSelectionAttributes = [];
for ($i = 1; $i <= 8; $i++) {
    $userLevelSelectionAttributes['user_level_' . $i . '_selections'] = 'selección de usuario';
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

    'accepted'             => 'La :atributo debe ser aceptado.',
    'active_url'           => 'La :atributo no es una URL válida.',
    'after'                => 'La :atributo debe ser una fecha posterior :fecha.',
    'after_or_equal'       => 'La :atributo debe ser una fecha posterior o igual a :fecha.',
    'alpha'                => 'La :atributo solo puede contener letras.',
    'alpha_dash'           => 'La :atributo solo puede contener letras, números y guiones.',
    'alpha_num'            => 'La :atributo solo puede contener letras y números.',
    'array'                => 'La :atributo debe ser una matriz.',
    'before'               => 'La :atributo debe ser una fecha anterior :fecha.',
    'before_or_equal'      => 'La :atributo debe ser una fecha anterior o igual a :fecha.',
    'between'              => [
        'numeric' => 'La :atributo debe estar entre: min y: max.',
        'file'    => 'La :atributo debe estar entre: mínimo y máximo: kilobytes.',
        'string'  => 'La :atributo debe estar entre: min y: max caracteres.',
        'array'   => 'La :atributo debe tener entre: min y: max items.',
    ],
    'boolean'              => 'La :campo de atributo debe ser verdadero o falso.',
    'confirmed'            => 'La :confirmación del atributo no coincide.',
    'date'                 => 'La :atributo no es una fecha válida.',
    'date_format'          => 'La :atributo no coincide con el formato: formato.',
    'different'            => 'La :atributo y: otro debe ser diferente.',
    'digits'               => 'La :atributo debe ser: dígitos dígitos.',
    'digits_between'       => 'La :atributo debe estar entre: min y: max digits.',
    'dimensions'           => 'La :atributo tiene dimensiones de imagen no válidas.',
    'distinct'             => 'La :campo de atributo tiene un valor duplicado.',
    'email'                => 'La :atributo debe ser una dirección de correo electrónico válida.',
    'exists'               => 'La seleccionada :atributo no es válido.',
    'file'                 => 'La :atributo debe ser un archivo.',
    'filled'               => 'La :campo de atributo debe tener un valor.',
    'image'                => 'La :atributo debe ser una imagen.',
    'in'                   => 'La seleccionada :atributo no es válido.',
    'in_array'             => 'La :campo de atributo no existe en: otro.',
    'integer'              => 'La :atributo debe ser un número entero.',
    'ip'                   => 'La :atributo debe ser una dirección IP válida.',
    'ipv4'                 => 'La :atributo debe ser una dirección IPv4 válida.',
    'ipv6'                 => 'La :atributo debe ser una dirección IPv6 válida.',
    'json'                 => 'La :atributo debe ser una cadena JSON válida.',
    'max'                  => [
        'numeric' => 'La :atributo no puede ser mayor que: max.',
        'file'    => 'La :atributo no puede ser mayor que: kilobytes máx.',
        'string'  => 'La :atributo no puede ser mayor que: caracteres máximos.',
        'array'   => 'La :atributo no puede tener más de: elementos máximos.',
    ],
    'mimes'                => 'La :atributo debe ser un archivo de tipo:: valores.',
    'mimetypes'            => 'La :atributo debe ser un archivo de tipo:: valores.',
    'min'                  => [
        'numeric' => 'La :atributo debe ser al menos: min.',
        'file'    => 'La :atributo debe ser al menos: min kilobytes.',
        'string'  => 'La :atributo debe tener al menos: min caracteres.',
        'array'   => 'La :atributo debe tener al menos: elementos mínimos.',
    ],
    'not_in'               => 'La seleccionada :atributo no es válido.',
    'not_regex'            => 'La :formato de atributo no es válido.',
    'numeric'              => 'La :atributo debe ser un número.',
    'present'              => 'La :campo de atributo debe estar presente.',
    'regex'                => 'La :formato de atributo no es válido.',
    'required'             => 'La :campo de atributo es obligatorio.',
    'required_if'          => 'La :campo de atributo es obligatorio cuando: otro es: valor.',
    'required_unless'      => 'La :campo de atributo es obligatorio a menos que: otro esté en: valores.',
    'required_with'        => 'La :campo de atributo es obligatorio cuando: hay valores presentes.',
    'required_with_all'    => 'La :campo de atributo es obligatorio cuando: hay valores presentes.',
    'required_without'     => 'La :campo de atributo es obligatorio cuando: los valores no están presentes.',
    'required_without_all' => 'La :campo de atributo es obligatorio cuando no hay ninguno de: valores presentes.',
    'same'                 => 'La :Atributo and : otra debe coincidir.',
    'size'                 => [
        'numeric' => 'La :atributo debe ser: tamaño.',
        'file'    => 'La :atributo debe ser: tamaño kilobytes.',
        'string'  => 'La :atributo debe ser: caracteres de tamaño.',
        'array'   => 'La :atributo debe contener: artículos de tamaño.',
    ],
    'string'               => 'La :atributo debe ser una cadena.',
    'timezone'             => 'La :atributo debe ser una zona válida.',
    'unique'               => 'La :atributo ya ha sido tomado.',
    'uploaded'             => 'La :atributo no se pudo cargar.',
    'url'                  => 'La :formato de atributo no es válido.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Rules
    |--------------------------------------------------------------------------
    */

    'age_eligibility' => 'Debes tener: años de edad para continuar.',
    'greater_than_zero' => 'La :atributo debe ser mayor que cero.',
    'greater_than_or_equal_zero' => 'La :atributo debe ser mayor o igual a cero.',
    'has_same_depth_user_nodes' => [
        'incorrect_depth_users' => 'La :atributo contiene usuarios con diferentes niveles de usuario. Todos los usuarios deben tener el mismo nivel de usuario',
        'incorrect_user_ids' => 'La :atributo contiene usuarios no válidos.',
    ],
    'is_master_level_or_below' => [
        'incorrect_user_ids' => 'La :atributo contiene usuarios no válidos.',
        'incorrect_user_levels' => 'La :atributo debe contener usuarios de nivel maestro o inferior.',
    ],
    'password_strength' => 'La :atributo debe estar entre ' . config('app.api.global.passwordStrength.characterLength.min') . '-' . config('app.api.global.passwordStrength.characterLength.max') . ' characters, and have at lease one lower case letter, one upper case letter, one number and one symbol (' . config('app.api.defaults.symbols') . ').',
    'user_phone_availability' => [
        'country_id_undefined' => 'La {countryId} variable no se pasa a la regla de validación.',
        'phone_occupied' => 'La número de teléfono ya está siendo utilizado por otra cuenta.',
    ],
    'valid_rebate_distribution_amount' => [
        'missing_prerequisites' => 'A la regla le faltan los requisitos previos obligatorios.',
        'invalid_distribution_amount' => 'La ":basics_user_level_distribution_type" campo contiene un valor no válido' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_selected_rrt_available_rebate' => 'La ":basics_user_level_distribution_type" campo requiere la definición del valor de reembolso disponible' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_default_distribution_amount' => 'La ":basics_user_level_distribution_type" campo requiere la definición de "Distribución estándar" primero' . $userLevelDistributionTypeErrorMessageSuffix,
    ],
    'valid_total_available_rebate_amount' => [
        'missing_prerequisites' => 'La regla le faltan los requisitos previos obligatorios.',
        'invalid_total_available_rebate_amount' => 'La "Rebate total disponible" campo contiene un valor no válido' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_rebate_calculation_type' => 'La "Rebate total disponible" campo requiere la selección del tipo de cálculo de devolución RRT' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_type' => 'La "Rebate total disponible" campo requiere la selección del tipo de RRT' . $userLevelDistributionErrorMessageSuffix,
        'undefined_rebate_distribution_silver_level' => 'La "Rebate total disponible" campo debe estar definido para el nivel Silver con un valor de 0 o más' . $userLevelDistributionErrorMessageSuffix,
        'incorrect_rebate_distribution' => 'La "Rebate total disponible" campo requiere una división correcta de la cantidad entre los niveles de usuario' . $userLevelDistributionErrorMessageSuffix,
    ],
    'valid_rrt_user_hierarchy' => [
        'missing_prerequisites' => 'La regla le faltan los requisitos previos obligatorios.',
        'undefined_selected_rrt_users' => 'La campo requiere la selección de algunas usuarias.',
        'incorrect_selected_master_level_rrt_users' => 'La campo está limitado a una selección de usuario.',
        'incorrect_selected_rrt_users' => 'La campo no debe tener usuarios seleccionados porque el nivel principal no tiene ningún usuario seleccionado.',
        'incorrect_selected_user_level' => 'La campo tiene algunos usuarios con un nivel de usuario incorrecto.',
        'unavailable_selected_user_parent' => 'La campo tiene algunos usuarios que no han seleccionado a los padres en el nivel anterior.',
    ],
    'valid_rrt_base_currency_selection' => [
        'missing_prerequisites' => 'La regla le faltan los requisitos previos obligatorios.',
        'base_currency_not_selected' => 'La moneda base requiere "Perfil de moneda" ser creado.',
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
            'invalid_value' => 'La :atributo debe contener solo alfabetos y espacios.',
        ],
        'unique_value_in_array' => [
            'missing_prerequisites' => 'Faltan algunos requisitos previos de validación.',
            'required_key_missing' => 'La :atributo le faltan claves en la matriz dada.',
            'duplicate_values' => 'La :atributo contiene valores duplicados.',
        ],
        'valid_default_rebate_rate_table_parameters' => [
            'missing_prerequisites' => 'Faltan algunos requisitos previos de validación.',
            'rrt_already_exists' => 'Ya existe un grupo comercial predeterminado con estos parámetros.',
        ],
        'greater_than_or_equal_specific_number' => [
            'invalid_number' => 'La :atributo debe ser mayor o igual que: número.',
        ],
    ],
    'is_valid_website_url' => 'La URL del sitio web no es válida.',

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
            'email' => 'dirección de correo electrónico',
        ],
        $questionAttributes,
        $userLevelSelectionAttributes
    ),
];
