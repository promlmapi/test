<?php

//Question field attributes
$questionAttributes = [];
for ($i = 0; $i <= 20; $i++) {
    $questionAttributes['question_' . $i] = 'question';
}

// user_level_x_selections.
$userLevelSelectionAttributes = [];
for ($i = 1; $i <= 8; $i++) {
    $userLevelSelectionAttributes['user_level_' . $i . '_selections'] = 'sélection de l utilisateur';
}

// User level distribution error messages suffix.
$userLevelDistributionErrorMessageSuffix = ' (à ":basics_user_level_name" utilisatrice >> ":basics_currency_name" Devise >> ":basics_product_name" produit >> ":basics_commission_level" niveau de commission).';
$userLevelDistributionTypeErrorMessageSuffix = ' (à ":basics_user_level_name" utilisatrice >> ":basics_currency_name" Devise >> ":basics_product_name" produit >> ":basics_commission_level" niveau de commission >> ":basics_selected_user_level_name").';

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

    'accepted'             => 'La :attribut doit être accepté.',
    'active_url'           => 'La :attribut n est pas une URL valide.',
    'after'                => 'La :attribut doit être une date après :Date.',
    'after_or_equal'       => 'La :attribut doit être une date après ou égal à :Date.',
    'alpha'                => 'La :attribut ne peut contenir que des lettres.',
    'alpha_dash'           => 'La :l attribut ne peut contenir que des lettres, des chiffres et des tirets.',
    'alpha_num'            => 'La :l attribut ne peut contenir que des lettres et des chiffres.',
    'array'                => 'La :l attribut doit être un tableau.',
    'before'               => 'La :l attribut doit être une date antérieure :date.',
    'before_or_equal'      => 'La :l attribut doit être une date antérieure ou égal à :date.',
    'between'              => [
        'numeric' => 'La :attribut doit être compris entre :min et :max.',
        'file'    => 'La :attribut doit être compris entre :min et :max kilo-octets.',
        'string'  => 'La :attribut doit être compris entre :min et :max personnages.',
        'array'   => 'La :attribut doit être compris entre :min et :max éléments.',
    ],
    'boolean'              => 'La :le champ d attribut doit être vrai ou faux.',
    'confirmed'            => 'La :la confirmation d attribut ne correspond pas.',
    'date'                 => 'La :attribut n est pas une date valide.',
    'date_format'          => 'La :attribut ne correspond pas au format: format.',
    'different'            => 'La :attribut et: autre doit être différent.',
    'digits'               => 'La :attribut doit être: chiffres chiffres.',
    'digits_between'       => 'La :attribut doit être compris entre: min et: max chiffres.',
    'dimensions'           => 'La :attribut a des dimensions d image non valides.',
    'distinct'             => 'La :champ d attribut a une valeur en double.',
    'email'                => 'La :attribut doit être une adresse e-mail valide.',
    'exists'               => 'La choisie :attribut n est pas valide.',
    'file'                 => 'La :attribut doit être un fichier.',
    'filled'               => 'La :champ d attribut doit avoir une valeur.',
    'image'                => 'La :attribut doit être une image.',
    'in'                   => 'La choisie :attribut n est pas valide.',
    'in_array'             => 'La :champ d attribut n existe pas dans :autre.',
    'integer'              => 'La :attribut doit être un entier.',
    'ip'                   => 'La :attribut doit être une adresse IP valide.',
    'ipv4'                 => 'La :attribut doit être une adresse IPv4 valide.',
    'ipv6'                 => 'La :attribut doit être une adresse IPv6 valide.',
    'json'                 => 'La :attribut doit être une chaîne JSON valide.',
    'max'                  => [
        'numeric' => 'La :attribut ne peut pas être supérieur à :max.',
        'file'    => 'La :attribut ne peut pas être supérieur à :max kilo-octets.',
        'string'  => 'La :attribut ne peut pas être supérieur à :max personnages.',
        'array'   => 'La :attribut ne peut pas avoir plus de :articles max.',
    ],
    'mimes'                => 'La :attribut doit être un fichier de type: :valeurs.',
    'mimetypes'            => 'La :attribut doit être un fichier de type: :valeurs.',
    'min'                  => [
        'numeric' => 'La :attribut doit être au moins :min.',
        'file'    => 'La :attribut doit être au moins :min kilo-octets.',
        'string'  => 'La :attribut doit être au moins :min personnages.',
        'array'   => 'La :attribut doit avoir au moins :min items.',
    ],
    'not_in'               => 'La choisie :attribut n est pas valide.',
    'not_regex'            => 'La :format d attribut n est pas valide.',
    'numeric'              => 'La :attribut doit être un nombre.',
    'present'              => 'La :champ d attribut doit être présent.',
    'regex'                => 'La :format d attribut n est pas valide.',
    'required'             => 'La :champ d attribut est obligatoire.',
    'required_if'          => 'La :champ d attribut est obligatoire lorsque :autre est :valeur.',
    'required_unless'      => 'La :champ d attribut est obligatoire à moins que :autre est dans :valeurs.',
    'required_with'        => 'La :champ d attribut est obligatoire lorsque :les valeurs sont présentes.',
    'required_with_all'    => 'La :champ d attribut est obligatoire lorsque :les valeurs sont présentes.',
    'required_without'     => 'La :champ d attribut est obligatoire lorsque :les valeurs ne sont pas présentes.',
    'required_without_all' => 'La :champ d attribut est obligatoire lorsque aucun de :les valeurs sont présentes.',
    'same'                 => 'La :attribut et: autre doit correspondre.',
    'size'                 => [
        'numeric' => 'La :attribut doit être: taille.',
        'file'    => 'La :attribut doit être :size kilobytes.',
        'string'  => 'La :attribut doit être :caractères de taille.',
        'array'   => 'La :attribut doit contenir :articles de taille.',
    ],
    'string'               => 'La :attribut doit être une chaîne.',
    'timezone'             => 'La :attribut doit être une zone valide.',
    'unique'               => 'La :attribut a déjà été pris.',
    'uploaded'             => 'La :attribut na pas pu être téléversé.',
    'url'                  => 'La :format d attribut n est pas valide.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Rules
    |--------------------------------------------------------------------------
    */

    'age_eligibility' => 'Vous devez avoir: ans pour continuer.',
    'greater_than_zero' => 'La :attribut doit être supérieur à zéro.',
    'greater_than_or_equal_zero' => 'La :attribut doit être supérieur ou égal à zéro.',
    'has_same_depth_user_nodes' => [
        'incorrect_depth_users' => 'La :attribut contient des utilisateurs avec différents niveaux d utilisateur. Tous les utilisateurs doivent être du même niveau d utilisateur',
        'incorrect_user_ids' => 'La :attribut contient des utilisateurs non valides.',
    ],
    'is_master_level_or_below' => [
        'incorrect_user_ids' => 'La :attribut contient des utilisateurs non valides.',
        'incorrect_user_levels' => 'La :attribut doit contenir des utilisateurs de niveau master ou inférieur.',
    ],
    'password_strength' => 'La :attribut doit être compris entre ' . config('app.api.global.passwordStrength.characterLength.min') . '-' . config('app.api.global.passwordStrength.characterLength.max') . ' caractères et avoir au moins une lettre minuscule, une lettre majuscule, un chiffre et un symbole (' . config('app.api.defaults.symbols') . ').',
    'user_phone_availability' => [
        'country_id_undefined' => 'La {countryId} variable n est pas transmise à la règle de validation.',
        'phone_occupied' => 'La numéro de téléphone est déjà utilisé par un autre compte.',
    ],
    'valid_rebate_distribution_amount' => [
        'missing_prerequisites' => 'La règle ne contient pas les conditions préalables requises.',
        'invalid_distribution_amount' => 'La ":basics_user_level_distribution_type" champ contient une valeur non valide' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_selected_rrt_available_rebate' => 'La ":basics_user_level_distribution_type" champ nécessite la définition de la valeur de remise disponible' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_default_distribution_amount' => 'La ":basics_user_level_distribution_type" champ nécessite la définition de "Distribution standard" première' . $userLevelDistributionTypeErrorMessageSuffix,
    ],
    'valid_total_available_rebate_amount' => [
        'missing_prerequisites' => 'La règle ne contient pas les conditions préalables requises.',
        'invalid_total_available_rebate_amount' => 'La "Remise totale disponible" champ contient une valeur non valide' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_rebate_calculation_type' => 'La "Remise totale disponible" champ nécessite la sélection du type de calcul de la remise RRT' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_type' => 'La "Remise totale disponible" champ nécessite la sélection du type RRT' . $userLevelDistributionErrorMessageSuffix,
        'undefined_rebate_distribution_silver_level' => 'La "Remise totale disponible" champ doit être défini pour le niveau Argent avec une valeur égale ou supérieure à 0' . $userLevelDistributionErrorMessageSuffix,
        'incorrect_rebate_distribution' => 'La "Remise totale disponible" champ nécessite une répartition correcte du montant entre les niveaux d utilisateurs' . $userLevelDistributionErrorMessageSuffix,
    ],
    'valid_rrt_user_hierarchy' => [
        'missing_prerequisites' => 'règle ne contient pas les conditions préalables requises.',
        'undefined_selected_rrt_users' => 'La champ nécessite la sélection de certains utilisateurs.',
        'incorrect_selected_master_level_rrt_users' => 'La champ est limité à une sélection d utilisateur.',
        'incorrect_selected_rrt_users' => 'La champ ne doit pas avoir d utilisateurs sélectionnés car le niveau parent n a aucun utilisateur sélectionné.',
        'incorrect_selected_user_level' => 'La champ a des utilisateurs avec un niveau d utilisateur incorrect.',
        'unavailable_selected_user_parent' => 'La champ a des utilisateurs qui n ont pas de parent sélectionné au niveau précédent.',
    ],
    'valid_rrt_base_currency_selection' => [
        'missing_prerequisites' => 'règle ne contient pas les conditions préalables requises.',
        'base_currency_not_selected' => 'La devise de base nécessite "Profil de devise" à être créé.',
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
            'invalid_value' => 'La :attribut ne doit contenir que des alphabets et des espaces.',
        ],
        'unique_value_in_array' => [
            'missing_prerequisites' => 'Certaines conditions préalables de validation sont manquantes.',
            'required_key_missing' => 'La :attribut n a pas de clés dans le tableau donné.',
            'duplicate_values' => 'La :attribut contient des valeurs en double.',
        ],
        'valid_default_rebate_rate_table_parameters' => [
            'missing_prerequisites' => 'Certaines conditions préalables de validation sont manquantes.',
            'rrt_already_exists' => 'Un groupe commercial par défaut existe déjà avec ces paramètres.',
        ],
        'greater_than_or_equal_specific_number' => [
            'invalid_number' => 'La :attribut doit être supérieur ou égal à: nombre.',
        ],
    ],
    'is_valid_website_url' => 'La URL du site Web n est pas valide.',

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
            'email' => 'adresse e-mail',
        ],
        $questionAttributes,
        $userLevelSelectionAttributes
    ),
];
