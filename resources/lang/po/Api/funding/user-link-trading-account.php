<?php

$resource = 'konto handlowe';
$resourceUcFirst = ucfirst($resource);

return [

    /*
    |--------------------------------------------------------------------------
    | Link Trading Account Language Lines
    |--------------------------------------------------------------------------
    */

    /*
     * Store
     */
    11301 => 'To ' . $resource . ' jest już połączony z Twoim obecnym kontem rabatowym.',
    11302 => 'The ' . $resource . ' należy do innego użytkownika.',
    11303 => "Nie mogliśmy znaleźć danego " . $resource . ". Sprawdź, czy podany numer konta handlowego jest prawidłowy.",
    11304 => $resourceUcFirst . ' został pomyślnie połączony z Twoim kontem rabatowym.',
    11305 => 'Konto rabatowe należy do kogoś innego.',
    11306 => 'The ' . $resource . ' jest powiązany z Twoim innym kontem rabatowym. Najpierw odłącz, a następnie spróbuj połączyć z aktualnym kontem rabatowym.',
    11307 => 'Twoje konto rabatowe jest już połączone z kontem handlowym. Najpierw odłącz, a następnie spróbuj połączyć nowy ' . $resource . '.',
    11308 => 'email nie pasuje!. Adres e-mail Twojego konta IB i adres e-mail konta handlowego muszą być zgodne.',
    11309 => 'Nazwa się nie zgadza!. Nazwa Twojego konta IB i nazwa konta handlowego muszą być zgodne.',
    11310 => 'Platforma konta handlowego nie jest zgodna!. Twoje konto rabatowe i platformy kont handlowych muszą być takie same.',
    11311 => 'Waluta konta handlowego nie jest zgodna !. Twoje konto rabatowe i waluty konta handlowego muszą być takie same.',

    /*
     * Destroy
     */
    11320 => $resourceUcFirst . ' pomyślnie usunięto połączenie z Twojego konta rabatowego.',
    11321 => 'Odłączanie zabronione! To połączone ' . $resource . ' należy do innego użytkownika.',

];
