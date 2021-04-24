<?php

//Question field attributes
$questionAttributes = [];
for ($i = 0; $i <= 20; $i++) {
    $questionAttributes['question_' . $i] = 'pytanie';
}

// user_level_x_selections.
$userLevelSelectionAttributes = [];
for ($i = 1; $i <= 8; $i++) {
    $userLevelSelectionAttributes['user_level_' . $i . '_selections'] = 'wybór użytkownika';
}

// User level distribution error messages suffix.
$userLevelDistributionErrorMessageSuffix = ' (w ":basics_user_level_name" użytkownik >> ":basics_currency_name" waluta >> ":basics_product_name" produkt >> ":basics_commission_level" poziom prowizji).';
$userLevelDistributionTypeErrorMessageSuffix = ' (w ":basics_user_level_name" użytkownik >> ":basics_currency_name" waluta >> ":basics_product_name" produkt >> ":basics_commission_level" poziom prowizji >> ":basics_selected_user_level_name").';

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

    'accepted'             => 'W :atrybut musi zostać zaakcepto.',
    'active_url'           => 'W :atrybut nie jest prawidłowym adresem URL.',
    'after'                => 'W :atrybut musi być datą po: data.',
    'after_or_equal'       => 'W :atrybut musi być datą późniejszą lub równą: data.',
    'alpha'                => 'W :atrybut możezawierają tylko litery.',
    'alpha_dash'           => 'W :atrybut możezawierają tylko litery, liczby, and myślniki.',
    'alpha_num'            => 'W :atrybut możezawierają tylko litery i liczby.',
    'array'                => 'W :atrybut musi być tablicą.',
    'before'               => 'W :atrybut musi być datą przed: data.',
    'before_or_equal'      => 'W :atrybut musi być datą wcześniejszą lub równą: data.',
    'between'              => [
        'numeric' => 'W :atrybutmusi znajdować się między :min i :max.',
        'file'    => 'W :atrybutmusi znajdować się między :min i :max kilobajtów.',
        'string'  => 'W :atrybut musi mieć od: min do: max znaków.',
        'array'   => 'W :atrybut musi mieć pomiędzy :min i :max przedmiotów.',
    ],
    'boolean'              => 'W :pole atrybutu musimieć true lub false.',
    'confirmed'            => 'W :potwierdzenie atrybutu nie pasuje.',
    'date'                 => 'W :atrybutnie jest prawidłową datą.',
    'date_format'          => 'W :atrybut nie pasuje do formatu: format.',
    'different'            => 'W :atrybut i: inne muszą być różne.',
    'digits'               => 'W :atrybut musi być: cyfry cyfry.',
    'digits_between'       => 'W :atrybut musi zawierać się między: min a: max cyfr.',
    'dimensions'           => 'W :atrybut ma nieprawidłowe wymiary obrazu.',
    'distinct'             => 'W :poleatrybutu ma zduplikowaną wartość.',
    'email'                => 'W :atrybut musi być prawidłowym adresem e-mail.',
    'exists'               => 'W wybrany :atrybut jest nieprawidł.',
    'file'                 => 'W :atrybut musi być plikiem.',
    'filled'               => 'W :atrybut pole musi mieć wartość.',
    'image'                => 'W :atrybut musi być obrazem.',
    'in'                   => 'W wybrany :atrybut jest nieważny.',
    'in_array'             => 'W :atrybut pole nie istnieje w: inne.',
    'integer'              => 'W :atrybut musi być liczbą całkowitą.',
    'ip'                   => 'W :atrybut musi być prawidłowym adresem IP.',
    'ipv4'                 => 'W :atrybut musi być prawidłowym adresem IPv4.',
    'ipv6'                 => 'W :atrybut musi być prawidłowym adresem IPv6.',
    'json'                 => 'W :atrybut musi być prawidłowym ciągiem JSON.',
    'max'                  => [
        'numeric' => 'W :atrybut nie może być większy niż: max.',
        'file'    => 'W :atrybut nie może być większy niż: max kilobajtów.',
        'string'  => 'W :atrybut nie może być większy niż: maksymalna liczba znaków.',
        'array'   => 'W :atrybut nie może mieć więcej niż: max elementów.',
    ],
    'mimes'                => 'W :atrybut musi być plikiem typu:: values.',
    'mimetypes'            => 'W :atrybut musi być plikiem typu:: values.',
    'min'                  => [
        'numeric' => 'W :atrybut musi być przynajmniej :min.',
        'file'    => 'W :atrybut musi być przynajmniej :min kilobajtów.',
        'string'  => 'W :atrybut musi być przynajmniej :min znaków.',
        'array'   => 'W :atrybut musi mieć co najmniej :min przedmiotów.',
    ],
    'not_in'               => 'W wybrany :atrybut jest nieważny.',
    'not_regex'            => 'W :atrybut format jest nieważny.',
    'numeric'              => 'W :atrybut musi być liczbą.',
    'present'              => 'W :atrybut pole musi być obecny.',
    'regex'                => 'W :atrybut format jest nieważny.',
    'required'             => 'W :atrybut pole jest wymagane.',
    'required_if'          => 'W :atrybut pole jest wymagane kiedy: inne to: wartość.',
    'required_unless'      => 'W :atrybut pole jest wymagane chyba że: inne jest w: wartości.',
    'required_with'        => 'W :atrybut pole jest wymagane kiedy: wartości są obecne.',
    'required_with_all'    => 'W :atrybut pole jest wymagane kiedy: wartości są obecne.',
    'required_without'     => 'W :atrybut pole jest wymagane kiedy: wartości nie są obecne.',
    'required_without_all' => 'W :atrybut pole jest wymagane gdy nie ma żadnych z: wartości.',
    'same'                 => 'W :atrybut i :inne muszą pasować.',
    'size'                 => [
        'numeric' => 'W :atrybut musi mieć wartość: rozmiar.',
        'file'    => 'W :atrybut musi mieć wartość: rozmiar kilobajty.',
        'string'  => 'W :atrybut musi być :rozmiar znaków.',
        'array'   => 'W :atrybut musi zawierać: wielkość pozycji.',
    ],
    'string'               => 'W :atrybut musi być ciągiem.',
    'timezone'             => 'W :atrybut musi być prawidłową strefą.',
    'unique'               => 'W :atrybut został już zajęty.',
    'uploaded'             => 'W :atrybut nie udało się przesłać.',
    'url'                  => 'W :atrybut format jest nieważny.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Rules
    |--------------------------------------------------------------------------
    */

    'age_eligibility' => 'musisz być :wiek lat, aby przejść dalej.',
    'greater_than_zero' => 'W :atrybut musi być większy od zera.',
    'greater_than_or_equal_zero' => 'W :atrybut musi być większy lub równy zero.',
    'has_same_depth_user_nodes' => [
        'incorrect_depth_users' => 'W :atrybut zawiera użytkowników z różnymi poziomami użytkowników. Wszyscy użytkownicy muszą mieć ten sam poziom użytkownika',
        'incorrect_user_ids' => 'W :atrybut zawiera nieprawidłowych użytkowników.',
    ],
    'is_master_level_or_below' => [
        'incorrect_user_ids' => 'W :atrybut zawiera nieprawidłowych użytkowników.',
        'incorrect_user_levels' => 'W :atrybut musi zawierać użytkownicy poziomu mistrzowskiego albo poniżej.',
    ],
    'password_strength' => 'W :atrybut musi być pomiędzy ' . config('app.api.global.passwordStrength.characterLength.min') . '-' . config('app.api.global.passwordStrength.characterLength.max') . ' postacie, i mieć co najmniej jedną małą literę, jednej dużej litery, jedna liczba i jeden symbol (' . config('app.api.defaults.symbols') . ').',
    'user_phone_availability' => [
        'country_id_undefined' => 'W {countryId} zmienną jest nie przekazywany do reguły walidacji.',
        'phone_occupied' => 'Ten numer telefonu jest już używany przez inne konto.',
    ],
    'valid_rebate_distribution_amount' => [
        'missing_prerequisites' => 'W regule brakuje wymaganych wymagań wstępnych.',
        'invalid_distribution_amount' => 'W ":basics_user_level_distribution_type" pole zawiera nieprawidłową wartość' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_selected_rrt_available_rebate' => 'W ":basics_user_level_distribution_type" pole wymaga definiowanie w dostępna wartość rabatowe' . $userLevelDistributionTypeErrorMessageSuffix,
        'undefined_default_distribution_amount' => 'W ":basics_user_level_distribution_type" pole wymaga zdefiniowania "Dystrybucja standardowa" pierwszy' . $userLevelDistributionTypeErrorMessageSuffix,
    ],
    'valid_total_available_rebate_amount' => [
        'missing_prerequisites' => 'W regule brakuje wymaganych wymagań wstępnych.',
        'invalid_total_available_rebate_amount' => 'W "Całkowity dostępny rabatowe" pole zawiera nieprawidłową wartość' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_rebate_calculation_type' => 'W "Całkowity dostępny rabatowe" pole wymaga wyboru typu kalkulacji rabatu RRT' . $userLevelDistributionErrorMessageSuffix,
        'undefined_selected_rrt_type' => 'W "Całkowity dostępny rabatowe" pole wymaga wyboru typu RRT' . $userLevelDistributionErrorMessageSuffix,
        'undefined_rebate_distribution_silver_level' => 'W "Całkowity dostępny rabatowe" pole musi być zdefiniowany dla poziomu Silver z wartością 0 lub większą' . $userLevelDistributionErrorMessageSuffix,
        'incorrect_rebate_distribution' => 'W "Całkowity dostępny rabatowe" pole wymaga prawidłowego podziału kwoty między poziomami użytkowników' . $userLevelDistributionErrorMessageSuffix,
    ],
    'valid_rrt_user_hierarchy' => [
        'missing_prerequisites' => 'W regule brakuje wymaganych wymagań wstępnych.',
        'undefined_selected_rrt_users' => 'W pole wymaga wyboru niektórych użytkowników.',
        'incorrect_selected_master_level_rrt_users' => 'W pole jest ograniczony do jednego wyboru użytkownika.',
        'incorrect_selected_rrt_users' => 'W pole nie powinien mieć wybranych użytkowników, ponieważ na poziomie nadrzędnym nie ma wybranych żadnych użytkowników.',
        'incorrect_selected_user_level' => 'W pole ma kilku użytkowników z nieprawidłowym poziomem użytkownika.',
        'unavailable_selected_user_parent' => 'W pole ma kilku użytkowników, którzy nie mają wybranego rodzica na poprzednim poziomie.',
    ],
    'valid_rrt_base_currency_selection' => [
        'missing_prerequisites' => 'W regule brakuje wymaganych wymagań wstępnych.',
        'base_currency_not_selected' => 'W waluta bazowa wymaga "Profil walutowy" zostać stworzonym.',
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
            'invalid_value' => 'W :atrybut musi zawierać tylko alfabety i spacje.',
        ],
        'unique_value_in_array' => [
            'missing_prerequisites' => 'Brak niektórych wymagań wstępnych weryfikacji.',
            'required_key_missing' => 'W :atrybut brakuje kluczy w podanej tablicy.',
            'duplicate_values' => 'W :atrybut zawiera zduplikowane wartości.',
        ],
        'valid_default_rebate_rate_table_parameters' => [
            'missing_prerequisites' => 'Brak niektórych wymagań wstępnych weryfikacji.',
            'rrt_already_exists' => 'Istnieje już domyślna grupa handlowa z tymi parametrami.',
        ],
        'greater_than_or_equal_specific_number' => [
            'invalid_number' => 'W :atrybut musi być większy lub równy: liczba.',
        ],
    ],
    'is_valid_website_url' => 'W adres URL witryny jest nieprawidłowy.',

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
            'email' => 'adres e-mail',
        ],
        $questionAttributes,
        $userLevelSelectionAttributes
    ),
];
