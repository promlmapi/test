<?php

//Question field attributes
$questionAttributes = [];
for ($i = 0; $i <= 20; $i++) {
    $questionAttributes['question_' . $i] = 'Frage';
}

// user_level_x_selections.
$userLevelSelectionAttributes = [];
for ($i = 1; $i <= 8; $i++) {
    $userLevelSelectionAttributes['user_level_' . $i . '_selections'] = 'Benutzerauswahl';
}

// User level distribution error messages suffix.
$userLevelDistributionErrorMessageSuffix = ' (at ":basics_user_level_name" Nutzerin >> ":basics_currency_name" Währung >> ":basics_product_name" Produkt >> ":basics_commission_level" Provisionsniveau).';
$userLevelDistributionTypeErrorMessageSuffix = ' (at ":basics_user_level_name" Nutzerin >> ":basics_currency_name" Währung >> ":basics_product_name" Produkt >> ":basics_commission_level" Provisionsniveau >> ":basics_selected_user_level_name").';

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

    'accepted'             => 'Das :Attribute must be accepted.',
    'active_url'           => 'Das :Attribut ist keine gültige URL.',
    'after'                => 'Das :Das Attribut muss ein Datum nach: Datum sein.',
    'after_or_equal'       => 'Das :Das Attribut muss ein Datum nach oder gleich: Datum sein.',
    'alpha'                => 'Das :Attribut darf nur Buchstaben enthalten.',
    'alpha_dash'           => 'Das :Attribut darf nur Buchstaben, Zahlen und Bindestriche enthalten.',
    'alpha_num'            => 'Das :Attribut darf nur Buchstaben und Zahlen enthalten.',
    'array'                => 'Das :Attribut muss ein Array sein.',
    'before'               => 'Das :Attribut muss ein Datum vor: Datum sein.',
    'before_or_equal'      => 'Das :Attribut muss ein Datum vor oder gleich: Datum sein.',
    'between'              => [
        'numeric' => 'Das :Attribut muss zwischen: min und: max liegen.',
        'file'    => 'Das :Attribut muss zwischen: min und: max Kilobyte liegen.',
        'string'  => 'Das :Attribut muss zwischen: min und: max Zeichen liegen.',
        'array'   => 'Das :Attribut muss zwischen: min und: max Elementen liegen.',
    ],
    'boolean'              => 'Das :Attributfeld muss wahr oder falsch sein.',
    'confirmed'            => 'Das :attribute confirmation does not match.',
    'date'                 => 'Das :Attribut ist kein gültiges Datum.',
    'date_format'          => 'Das :Attribut stimmt nicht mit dem Format: Format überein.',
    'different'            => 'Das :Attribut und: andere müssen unterschiedlich sein.',
    'digits'               => 'Das :Attribut muss sein: Ziffern Ziffern.',
    'digits_between'       => 'Das :Attribut muss zwischen: min und: max Ziffern liegen.',
    'dimensions'           => 'Das :Attribut hat ungültige Bildabmessungen.',
    'distinct'             => 'Das :Attributfeld hat einen DuplikatWert.',
    'email'                => 'Das :Attribut muss eine gültige E-Mail-Adresse sein.',
    'exists'               => 'Das ausgewählt :Attribut ist ungültig.',
    'file'                 => 'Das :Attribut muss eine Datei sein.',
    'filled'               => 'Das :Attributfeld muss einen Wert haben.',
    'image'                => 'Das :Attribut muss ein Bild sein.',
    'in'                   => 'Das ausgewählt :Attribut ist ungültig.',
    'in_array'             => 'Das :Attributfeld existiert nicht in: other.',
    'integer'              => 'Das :Attribut muss eine Ganzzahl sein.',
    'ip'                   => 'Das :Attribut muss eine gültige IP-Adresse sein.',
    'ipv4'                 => 'Das :Attribut muss eine gültige IPv4-Adresse sein.',
    'ipv6'                 => 'Das :Attribut muss eine gültige IPv6-Adresse sein.',
    'json'                 => 'Das :Attribut muss eine gültige JSON-Zeichenfolge sein.',
    'max'                  => [
        'numeric' => 'Das :Attribut darf nicht größer sein als: max.',
        'file'    => 'Das :Attribut darf nicht größer sein als: max Kilobyte.',
        'string'  => 'Das :Attribut darf nicht größer sein als: max Zeichen.',
        'array'   => 'Das :Attribut darf nicht mehr als: max Elemente enthalten.',
    ],
    'mimes'                => 'Das :Attribut muss eine Datei vom Typ :: Werte sein.',
    'mimetypes'            => 'Das :Attribut muss eine Datei vom Typ :: Werte sein.',
    'min'                  => [
        'numeric' => 'Das :Attribut muss mindestens sein: min.',
        'file'    => 'Das :Attribut muss mindestens sein: min Kilobyte.',
        'string'  => 'Das :Attribut muss mindestens sein: min Zeichen.',
        'array'   => 'Das :Attribut muss mindestens Folgendes enthalten: min.',
    ],
    'not_in'               => 'Das ausgewählt: Attribut ist ungültig.',
    'not_regex'            => 'Das :Attributformat ist ungültig.',
    'numeric'              => 'Das :Attribut muss eine Zahl sein.',
    'present'              => 'Das :Attributfeld muss vorhanden sein.',
    'regex'                => 'Das :Attributformat ist ungültig.',
    'required'             => 'Das :Attributfeld ist erforderlich.',
    'required_if'          => 'Das :Attributfeld ist erforderlich, wenn: other is: value ist.',
    'required_unless'      => 'Das :Attributfeld ist erforderlich, es sei denn: other ist in: values.',
    'required_with'        => 'Das :Das Attributfeld ist erforderlich, wenn: Werte vorhanden sind.',
    'required_with_all'    => 'Das :Attributfeld ist erforderlich, wenn: Werte vorhanden sind.',
    'required_without'     => 'Das :Attributfeld ist erforderlich, wenn: Werte nicht vorhanden sind.',
    'required_without_all' => 'Das :Attributfeld ist erforderlich, wenn keiner der folgenden Werte vorhanden ist.',
    'same'                 => 'Das :Attribut und: andere müssen übereinstimmen.',
    'size'                 => [
        'numeric' => 'Das :Attribut muss sein: Größe.',
        'file'    => 'Das :Attribut muss sein: Größe Kilobyte.',
        'string'  => 'Das :Attribut muss sein: Größe Zeichen.',
        'array'   => 'Das :Attribut muss Folgendes enthalten: Größenelemente.',
    ],
    'string'               => 'Das :Attribut muss eine Zeichenfolge sein.',
    'timezone'             => 'Das :Attribut muss eine gültige Zone sein.',
    'unique'               => 'Das :Attribut wurde bereits vergeben.',
    'uploaded'             => 'Das :Attribut konnte nicht hochgeladen werden.',
    'url'                  => 'Das :Attributformat ist ungültig.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Rules
    |--------------------------------------------------------------------------
    */

    'age_eligibility' => 'Sie müssen: Alter Jahre alt sein, um fortzufahren.',
    'greater_than_zero' => 'Das :Attribut muss größer als Null sein.',
    'greater_than_or_equal_zero' => 'Das : Attribut muss größer oder gleich Null sein.',
    'has_same_depth_user_nodes' => [
        'incorrect_depth_users' => 'Das :Attribut enthält Benutzer mit unterschiedlichen Benutzerebenen. Alle Benutzer müssen dieselbe Benutzerebene haben',
        'incorrect_user_ids' => 'Das :Attribut enthält ungültige Benutzer.',
    ],
    'is_master_level_or_below' => [
        'incorrect_user_ids' => 'Das :Attribut enthält ungültige Benutzer.',
        'incorrect_user_levels' => 'Das :Attribut muss Benutzer mit Master-Level oder niedriger enthalten.',
    ],
    'password_strength' => 'Das :Attribut muss zwischen sein ' . config('app.api.global.passwordStrength.characterLength.min') . '-' . config('app.api.global.passwordStrength.characterLength.max') . ' Zeichen und haben mindestens einen Kleinbuchstaben, einen Großbuchstaben, eine Zahl und ein Symbol (' . config('app.api.defaults.symbols') . ').',
    'user_phone_availability' => [
        'country_id_undefined' => 'Das {countryId} Variable wird nicht an die Validierungsregel übergeben.',
        'phone_occupied' => 'Das Die Telefonnummer wird bereits von einem anderen Konto verwendet.',
    ],
    'valid_rebate_distribution_amount' => [
        'missing_prerequisites' => 'Das Regel fehlen erforderliche Voraussetzungen.',
        'invalid_distribution_amount' => 'Das ":basics_user_level_distribution_type" Feld enthält ungültigen Wert' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_selected_rrt_available_rebate' => 'Das ":basics_user_level_distribution_type" Feld erfordert die Definition des verfügbaren Rabattwerts' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_default_distribution_amount' => 'Das ":basics_user_level_distribution_type" Feld erfordert die Definition von "Standardverteilung" zuerst' . $userLevelDistributionTypeErrorMessageSuffix,
    ],
    'valid_total_available_rebate_amount' => [
        'missing_prerequisites' => 'Das Regel fehlen erforderliche Voraussetzungen.',
        'invalid_total_available_rebate_amount' => 'Das "Insgesamt verfügbarer Rebate" Feld enthält ungültigen Wert' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_rebate_calculation_type' => 'Das "Insgesamt verfügbarer Rebate" Feld erfordert die Auswahl des RRT-Rabattberechnungstyps' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_type' => 'Das "Insgesamt verfügbarer Rebate" Feld erfordert die Auswahl des RRT-Typs' . $userLevelDistributionErrorMessageSuffix,
        'undefined_rebate_distribution_silver_level' => 'Das "Insgesamt verfügbarer Rebate" Feld muss für die Silberstufe mit einem Wert von 0 oder mehr definiert sein' . $userLevelDistributionErrorMessageSuffix,
        'incorrect_rebate_distribution' => 'Das "Insgesamt verfügbarer Rebate" Feld erfordert korrekte Aufteilung des Betrags zwischen Benutzerebenen' . $userLevelDistributionErrorMessageSuffix,
    ],
    'valid_rrt_user_hierarchy' => [
        'missing_prerequisites' => 'Das Regel fehlen erforderliche Voraussetzungen.',
        'undefined_selected_rrt_users' => 'Das Feld erfordert die Auswahl einiger Benutzer.',
        'incorrect_selected_master_level_rrt_users' => 'Das Feld ist auf eine Benutzerauswahl beschränkt.',
        'incorrect_selected_rrt_users' => 'Das In diesem Feld sollten keine Benutzer ausgewählt sein, da auf übergeordneter Ebene keine Benutzer ausgewählt sind.',
        'incorrect_selected_user_level' => 'Das Feld hat einige Benutzer mit falscher Benutzerebene.',
        'unavailable_selected_user_parent' => 'Das Feld hat einige Benutzer, die in der vorherigen Ebene kein übergeordnetes Element ausgewählt haben.',
    ],
    'valid_rrt_base_currency_selection' => [
        'missing_prerequisites' => 'Das Regel fehlen erforderliche Voraussetzungen.',
        'base_currency_not_selected' => 'Das Für die Basiswährung muss ein "Währungsprofil" erstellt werden.',
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
            'invalid_value' => 'Das :Attribut darf nur Alphabete und Leerzeichen enthalten.',
        ],
        'unique_value_in_array' => [
            'missing_prerequisites' => 'Einige Validierungsvoraussetzungen fehlen.',
            'required_key_missing' => 'Das :Attribut fehlt Schlüssel in einem bestimmten Array.',
            'duplicate_values' => 'Das :Attribut enthält doppelte Werte.',
        ],
        'valid_default_rebate_rate_table_parameters' => [
            'missing_prerequisites' => 'Einige Validierungsvoraussetzungen fehlen.',
            'rrt_already_exists' => 'Mit diesen Parametern existiert bereits eine Standardhandelsgruppe.',
        ],
        'greater_than_or_equal_specific_number' => [
            'invalid_number' => 'Das :Attribut muss größer oder gleich: number sein.',
        ],
    ],
    'is_valid_website_url' => 'Das URL der Website ist ungültig.',

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
            'email' => 'E-Mail-Addresse',
        ],
        $questionAttributes,
        $userLevelSelectionAttributes
    ),
];
