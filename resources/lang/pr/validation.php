<?php

//Question field attributes
$questionAttributes = [];
for ($i = 0; $i <= 20; $i++) {
    $questionAttributes['question_' . $i] = 'pergunta';
}

// user_level_x_selections.
$userLevelSelectionAttributes = [];
for ($i = 1; $i <= 8; $i++) {
    $userLevelSelectionAttributes['user_level_' . $i . '_selections'] = 'seleção do usuário';
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

    'accepted'             => 'O :attribute deve ser aceito.',
    'active_url'           => 'O :attribute não é um URL válido.',
    'after'                => 'O :attribute deve ser uma data depois :date.',
    'after_or_equal'       => 'O :attribute deve ser uma data posterior ou igual a :date.',
    'alpha'                => 'O :attribute só pode conter letras.',
    'alpha_dash'           => 'O :attribute pode conter apenas letras, números e travessões.',
    'alpha_num'            => 'O :attribute só pode conter letras e números.',
    'array'                => 'O :attribute deve ser uma matriz.',
    'before'               => 'O :attribute deve ser uma data antes :date.',
    'before_or_equal'      => 'O :attribute deve ser uma data anterior ou igual a :date.',
    'between'              => [
        'numeric' => 'O :attribute deve estar entre :min e :max.',
        'file'    => 'O :attribute deve estar entre :min e :max kilobytes.',
        'string'  => 'O :attribute deve estar entre :min e :max characters.',
        'array'   => 'O :attribute deve ter entre :min e :max items.',
    ],
    'boolean'              => 'O :attribute campo deve ser verdadeiro ou falso.',
    'confirmed'            => 'O :attribute a confirmação não corresponde.',
    'date'                 => 'O :attribute não é uma data válida.',
    'date_format'          => 'O :attribute não corresponde ao formato :format.',
    'different'            => 'O :attribute e :other deve ser diferente.',
    'digits'               => 'O :attribute devemos ser :digits dígitos.',
    'digits_between'       => 'O :attribute deve estar entre :min e :max digits.',
    'dimensions'           => 'O :attribute tem dimensões de imagem inválidas.',
    'distinct'             => 'O :attribute campo tem um valor duplicado.',
    'email'                => 'O :attribute Deve ser um endereço de e-mail válido.',
    'exists'               => 'O selecionado :attribute é inválido.',
    'file'                 => 'O :attribute deve ser um arquivo.',
    'filled'               => 'O :attribute campo deve ter um valor.',
    'image'                => 'O :attribute deve ser uma imagem.',
    'in'                   => 'O selecionado :attribute é inválido.',
    'in_array'             => 'O :attribute campo não existe em :other.',
    'integer'              => 'O :attribute deve ser um número inteiro.',
    'ip'                   => 'O :attribute deve ser um endereço IP válido.',
    'ipv4'                 => 'O :attribute deve ser um endereço IPv4 válido.',
    'ipv6'                 => 'O :attribute deve ser um endereço IPv6 válido.',
    'json'                 => 'O :attribute deve ser uma string JSON válida.',
    'max'                  => [
        'numeric' => 'O :attribute não pode ser maior que :max.',
        'file'    => 'O :attribute não pode ser maior que :max kilobytes.',
        'string'  => 'O :attribute não pode ser maior que :max characters.',
        'array'   => 'O :attribute não pode ter mais do que :max items.',
    ],
    'mimes'                => 'O :attribute deve ser um arquivo do tipo: :values.',
    'mimetypes'            => 'O :attribute deve ser um arquivo do tipo: :values.',
    'min'                  => [
        'numeric' => 'O :attribute deve ser pelo menos :min.',
        'file'    => 'O :attribute deve ser pelo menos :min kilobytes.',
        'string'  => 'O :attribute deve ser pelo menos :min characters.',
        'array'   => 'O :attribute deve ter pelo menos :min items.',
    ],
    'not_in'               => 'O selecionado :attribute é inválido.',
    'not_regex'            => 'O :attribute formato é inválido.',
    'numeric'              => 'O :attribute deve ser um número.',
    'present'              => 'O :attribute campo deve estar presente.',
    'regex'                => 'O :attribute formato é inválido.',
    'required'             => 'O :attribute campo é obrigatório.',
    'required_if'          => 'O :attribute campo é obrigatório quando :other é :value.',
    'required_unless'      => 'O :attribute campo é obrigatório, a menos :other é em :values.',
    'required_with'        => 'O :attribute campo é obrigatório quando :values é presente.',
    'required_with_all'    => 'O :attribute campo é obrigatório quando :values é presente.',
    'required_without'     => 'O :attribute campo é obrigatório quando :values não está presente.',
    'required_without_all' => 'O :attribute campo é obrigatório quando nenhum :values estão presentes.',
    'same'                 => 'O :attribute e :other deve combinar.',
    'size'                 => [
        'numeric' => 'O :attribute devemos ser :size.',
        'file'    => 'O :attribute devemos ser :size kilobytes.',
        'string'  => 'O :attribute devemos ser :size characters.',
        'array'   => 'O :attribute deve conter :size items.',
    ],
    'string'               => 'O :attribute deve ser uma string.',
    'timezone'             => 'O :attribute deve ser uma zona válida.',
    'unique'               => 'O :attribute já foi tomada.',
    'uploaded'             => 'O :attribute Falha ao carregar.',
    'url'                  => 'O :attribute formato é inválido.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Rules
    |--------------------------------------------------------------------------
    */

    'age_eligibility' => 'Você deve ser :age anos de idade para prosseguir.',
    'greater_than_zero' => 'O :attribute deve ser maior que zero.',
    'greater_than_or_equal_zero' => 'O :attribute deve ser maior ou igual a zero.',
    'has_same_depth_user_nodes' => [
        'incorrect_depth_users' => 'O :attribute contém usuários com diferentes níveis de usuário. Todos os usuários devem ser do mesmo nível de usuário',
        'incorrect_user_ids' => 'O :attribute contém usuários inválidos.',
    ],
    'is_master_level_or_below' => [
        'incorrect_user_ids' => 'O :attribute contém usuários inválidos.',
        'incorrect_user_levels' => 'O :attribute deve conter usuários de nível mestre ou inferior.',
    ],
    'password_strength' => 'O :attribute deve estar entre' . config('app.api.global.passwordStrength.characterLength.min') . '-' . config('app.api.global.passwordStrength.characterLength.max') . 'caracteres, e têm pelo menos uma letra minúscula, uma letra maiúscula, um número e um símbolo(' . config('app.api.defaults.symbols') . ').',
    'user_phone_availability' => [
        'country_id_undefined' => 'O {countryId} variável não é passada para a regra de validação.',
        'phone_occupied' => 'O número de telefone já está sendo usado por outra conta.',
    ],
    'valid_rebate_distribution_amount' => [
        'missing_prerequisites' => 'A regra não possui os pré-requisitos necessários.',
        'invalid_distribution_amount' => 'O ":basics_user_level_distribution_type" campo contém valor inválido' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_selected_rrt_available_rebate' => 'O ":basics_user_level_distribution_type" campo requer a definição do valor de desconto disponível' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_default_distribution_amount' => 'O ":basics_user_level_distribution_type" campo requer a definição de "Distribuição Padrão" primeiro' . $userLevelDistributionTypeErrorMessageSuffix,
    ],
    'valid_total_available_rebate_amount' => [
        'missing_prerequisites' => 'A regra não possui os pré-requisitos necessários.',
        'invalid_total_available_rebate_amount' => 'O campo "Desconto total disponível" contém um valor inválido' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_rebate_calculation_type' => 'O campo "Desconto total disponível" requer a seleção do tipo de cálculo do desconto RRT' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_type' => 'O campo "Desconto total disponível" requer a seleção do tipo de RRT' . $userLevelDistributionErrorMessageSuffix,
        'undefined_rebate_distribution_silver_level' => 'O campo "Desconto total disponível" deve ser definido para o nível Prata com valor igual a 0 ou mais' . $userLevelDistributionErrorMessageSuffix,
        'incorrect_rebate_distribution' => 'O campo "Desconto total disponível" requer a divisão correta do valor entre os níveis de usuário' . $userLevelDistributionErrorMessageSuffix,
    ],
    'valid_rrt_user_hierarchy' => [
        'missing_prerequisites' => 'A regra não possui os pré-requisitos necessários.',
        'undefined_selected_rrt_users' => 'O campo requer a seleção de alguns usuários.',
        'incorrect_selected_master_level_rrt_users' => 'O campo é limitado a uma seleção de usuário.',
        'incorrect_selected_rrt_users' => 'O campo não deve ter usuários selecionados porque o nível pai não possui nenhum usuário selecionado.',
        'incorrect_selected_user_level' => 'O campo possui alguns usuários com nível de usuário incorreto.',
        'unavailable_selected_user_parent' => 'O campo possui alguns usuários que não têm o pai selecionado no nível anterior.',
    ],
    'valid_rrt_base_currency_selection' => [
        'missing_prerequisites' => 'A regra não possui os pré-requisitos necessários.',
        'base_currency_not_selected' => 'A moeda base requer a criação de um "Perfil de moeda".',
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
            'invalid_value' => 'O :attribute deve conter apenas letras e espaços.',
        ],
        'unique_value_in_array' => [
            'missing_prerequisites' => 'Faltam alguns pré-requisitos de validação.',
            'required_key_missing' => 'O :attribute está faltando chaves em determinado array.',
            'duplicate_values' => 'O :attribute contém valores duplicados.',
        ],
        'valid_default_rebate_rate_table_parameters' => [
            'missing_prerequisites' => 'Faltam alguns pré-requisitos de validação.',
            'rrt_already_exists' => 'Já existe um grupo de negociação padrão com esses parâmetros.',
        ],
        'greater_than_or_equal_specific_number' => [
            'invalid_number' => 'O :attribute deve ser maior ou igual a :number.',
        ],
    ],
    'is_valid_website_url' => 'O url do site é inválido.',

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
            'email' => 'endereço de email',
        ],
        $questionAttributes,
        $userLevelSelectionAttributes
    ),
];
