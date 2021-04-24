<?php

//Question field attributes
$questionAttributes = [];
for ($i = 0; $i <= 20; $i++) {
    $questionAttributes['question_' . $i] = 'domanda';
}

// user_level_x_selections.
$userLevelSelectionAttributes = [];
for ($i = 1; $i <= 8; $i++) {
    $userLevelSelectionAttributes['user_level_' . $i . '_selections'] = 'selezione dellutente';
}

// User level distribution error messages suffix.
$userLevelDistributionErrorMessageSuffix = ' (at ":basics_user_level_name" utente >> ":basics_currency_name" moneta >> ":basics_product_name" Prodotto >> ":basics_commission_level" livello di commissione).';
$userLevelDistributionTypeErrorMessageSuffix = ' (at ":basics_user_level_name" utente >> ":basics_currency_name" moneta >> ":basics_product_name" Prodotto >> ":basics_commission_level" livello di commissione >> ":basics_selected_user_level_name").';

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

    'accepted'             => 'Le :attributo deve essere accettato.',
    'active_url'           => 'Le :attributo non è un URL valido.',
    'after'                => 'Le :attributo deve essere una data successiva a: data.',
    'after_or_equal'       => 'Le :attributo deve essere una data successiva o uguale a: data.',
    'alpha'                => 'Le :attributo può contenere solo lettere.',
    'alpha_dash'           => 'Le :attributo può contenere solo lettere, numeri e trattini.',
    'alpha_num'            => 'Le :attributo può contenere solo lettere e numeri.',
    'array'                => 'Le :attributo deve essere un array.',
    'before'               => 'Le :attributo deve essere una data precedente a: data.',
    'before_or_equal'      => 'Le :attributo deve essere una data precedente o uguale a: data.',
    'between'              => [
        'numeric' => 'Le :attributo deve essere compreso tra: min e: max.',
        'file'    => 'Le :attributo deve essere compreso tra: min e: max kilobyte.',
        'string'  => 'Le :attributo deve essere compreso tra: min e: max caratteri.',
        'array'   => 'Le :attributo deve avere un valore compreso tra: min e: max elementi.',
    ],
    'boolean'              => 'Le :campo dellattributo deve essere vero o falso.',
    'confirmed'            => 'Le :conferma dellattributo non corrisponde.',
    'date'                 => 'Le :attributo non è una data valida.',
    'date_format'          => 'Le :attributo non corrisponde al formato: formato.',
    'different'            => 'Le :attributo e: altro deve essere diverso.',
    'digits'               => 'Le :attributo deve essere: cifre cifre.',
    'digits_between'       => 'Le :attributo deve essere compreso tra: min e: max cifre.',
    'dimensions'           => 'Le :attributo ha dimensioni dellimmagine non valide.',
    'distinct'             => 'Le :il campo dellattributo ha un valore duplicato.',
    'email'                => 'Le :attributo deve essere un indirizzo email valido.',
    'exists'               => 'Le selezionata :attributo non è valido.',
    'file'                 => 'Le :attributo deve essere un file.',
    'filled'               => 'Le :il campo dellattributo deve avere un valore.',
    'image'                => 'Le :attributo deve essere unimmagine.',
    'in'                   => 'Le selezionata :attributo non è valido.',
    'in_array'             => 'Le :il campo dellattributo non esiste in: altro.',
    'integer'              => 'Le :attributo deve essere un numero intero.',
    'ip'                   => 'Le :attributo deve essere un indirizzo IP valido.',
    'ipv4'                 => 'Le :attributo deve essere un indirizzo IPv4 valido.',
    'ipv6'                 => 'Le :attributo deve essere un indirizzo IPv6 valido.',
    'json'                 => 'Le :attributo deve essere una stringa JSON valida.',
    'max'                  => [
        'numeric' => 'Le :attributo non può essere maggiore di: max.',
        'file'    => 'Le :attributo non può essere maggiore di: kilobyte max.',
        'string'  => 'Le :attributo non può essere maggiore di: max caratteri.',
        'array'   => 'Le :attributo non può avere più di: max articoli.',
    ],
    'mimes'                => 'Le :attributo deve essere un file di tipo:: valori.',
    'mimetypes'            => 'Le :attributo deve essere un file di tipo:: valori.',
    'min'                  => [
        'numeric' => 'Le :attributo deve essere almeno: min.',
        'file'    => 'Le :attributo deve essere almeno: min kilobyte.',
        'string'  => 'Le :attributo deve contenere almeno: min caratteri.',
        'array'   => 'Le :attributo deve avere almeno: elementi min.',
    ],
    'not_in'               => 'Le selezionata :attributo non è valido.',
    'not_regex'            => 'Le :formato dellattributo non è valido.',
    'numeric'              => 'Le :attributo deve essere un numero.',
    'present'              => 'Le :campo attributo deve essere presente.',
    'regex'                => 'Le :formato dellattributo non è valido.',
    'required'             => 'Le :campo attributo è obbligatorio.',
    'required_if'          => 'Le :campo attributo è obbligatorio quando: altro è: valore.',
    'required_unless'      => 'Le :campo attributo è obbligatorio a meno che: altro non sia in: valori.',
    'required_with'        => 'Le :campo attributo è obbligatorio quando: valori è presente.',
    'required_with_all'    => 'Le :campo attributo è obbligatorio quando: valori è presente.',
    'required_without'     => 'Le :campo attributo è obbligatorio quando: valori non è presente.',
    'required_without_all' => 'Le :campo attributo è obbligatorio quando nessuno di: valori è presente.',
    'same'                 => 'Le :attributo e: altro deve corrispondere.',
    'size'                 => [
        'numeric' => 'Le :attributo deve essere: taglia.',
        'file'    => 'Le :attributo deve essere: dimensione kilobyte.',
        'string'  => 'Le :attributo deve essere: caratteri di dimensione.',
        'array'   => 'Le :attributo deve contenere: articoli di taglia.',
    ],
    'string'               => 'Le :attributo deve essere una stringa.',
    'timezone'             => 'Le :attributo deve essere una zona valida.',
    'unique'               => 'Le :attributo è già stato preso.',
    'uploaded'             => 'Le :caricamento dellattributo non riuscito.',
    'url'                  => 'Le :formato dellattributo non è valido.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Rules
    |--------------------------------------------------------------------------
    */

    'age_eligibility' => 'Devi avere: età anni per procedere oltre.',
    'greater_than_zero' => 'Le :attributo deve essere maggiore di zero.',
    'greater_than_or_equal_zero' => 'Le :attributo deve essere maggiore o uguale a zero.',
    'has_same_depth_user_nodes' => [
        'incorrect_depth_users' => 'Le :attributo contiene utenti con diversi livelli utente. Tutti gli utenti devono essere dello stesso livello utente',
        'incorrect_user_ids' => 'Le :attributo contiene utenti non validi.',
    ],
    'is_master_level_or_below' => [
        'incorrect_user_ids' => 'Le :attributo contiene utenti non validi.',
        'incorrect_user_levels' => 'Le :attributo deve contenere utenti di livello master o inferiore.',
    ],
    'password_strength' => 'Le :attributo deve essere compreso tra ' . config('app.api.global.passwordStrength.characterLength.min') . '-' . config('app.api.global.passwordStrength.characterLength.max') . ' personaggi, e avere almeno una lettera minuscola, una lettera maiuscola, un numero e un simbolo (' . config('app.api.defaults.symbols') . ').',
    'user_phone_availability' => [
        'country_id_undefined' => 'Le {countryId} variabile non viene passata alla regola di convalida.',
        'phone_occupied' => 'Le numero di telefono è già utilizzato da un altro account.',
    ],
    'valid_rebate_distribution_amount' => [
        'missing_prerequisites' => 'Nella regola mancano i prerequisiti richiesti.',
        'invalid_distribution_amount' => 'Le ":basics_user_level_distribution_type" campo contiene un valore non valido' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_selected_rrt_available_rebate' => 'Le ":basics_user_level_distribution_type" campo richiede la definizione del valore di rebate disponibile' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_default_distribution_amount' => 'Le ":basics_user_level_distribution_type" campo richiede la definizione di "Distribuzione standard" prima' . $userLevelDistributionTypeErrorMessageSuffix,
    ],
    'valid_total_available_rebate_amount' => [
        'missing_prerequisites' => 'Nella regola mancano i prerequisiti richiesti.',
        'invalid_total_available_rebate_amount' => 'Le "rebate totale disponibile" campo contiene un valore non valido' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_rebate_calculation_type' => 'Le "rebate totale disponibile" campo richiede la selezione del tipo di calcolo dello rebate RRT' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_type' => 'Le "rebate totale disponibile" campo richiede la selezione del tipo di RRT' . $userLevelDistributionErrorMessageSuffix,
        'undefined_rebate_distribution_silver_level' => 'Le "rebate totale disponibile" campo deve essere definito per il livello Silver con valore uguale o superiore a 0' . $userLevelDistributionErrorMessageSuffix,
        'incorrect_rebate_distribution' => 'Le "rebate totale disponibile" campo richiede la corretta divisione dellimporto tra i livelli utente' . $userLevelDistributionErrorMessageSuffix,
    ],
    'valid_rrt_user_hierarchy' => [
        'missing_prerequisites' => 'Nella regola mancano i prerequisiti richiesti.',
        'undefined_selected_rrt_users' => 'Le campo richiede la selezione di alcuni utenti.',
        'incorrect_selected_master_level_rrt_users' => 'Le campo è limitato a una selezione utente.',
        'incorrect_selected_rrt_users' => 'Le campo non deve avere utenti selezionati perché il livello principale non ha utenti selezionati.',
        'incorrect_selected_user_level' => 'Le campo ha alcuni utenti con un livello utente errato.',
        'unavailable_selected_user_parent' => 'Le campo ha alcuni utenti che non hanno il genitore selezionato nel livello precedente.',
    ],
    'valid_rrt_base_currency_selection' => [
        'missing_prerequisites' => 'Nella regola mancano i prerequisiti richiesti.',
        'base_currency_not_selected' => 'Le base currency requires "Profilo valuta" essere creato.',
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
            'invalid_value' => 'Le :attributo deve contenere solo alfabeti e spazi.',
        ],
        'unique_value_in_array' => [
            'missing_prerequisites' => 'Mancano alcuni prerequisiti di convalida.',
            'required_key_missing' => 'Le :nellattributo mancano le chiavi nell array dato.',
            'duplicate_values' => 'Le :attributo contiene valori duplicati.',
        ],
        'valid_default_rebate_rate_table_parameters' => [
            'missing_prerequisites' => 'Mancano alcuni prerequisiti di convalida.',
            'rrt_already_exists' => 'Esiste già un gruppo di trading predefinito con questi parametri.',
        ],
        'greater_than_or_equal_specific_number' => [
            'invalid_number' => 'Le :attributo deve essere maggiore o uguale a: numero.',
        ],
    ],
    'is_valid_website_url' => 'Le URL del sito web non è valido.',

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
            'email' => 'indirizzo e-mail',
        ],
        $questionAttributes,
        $userLevelSelectionAttributes
    ),
];
