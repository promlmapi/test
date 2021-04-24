<?php

// Common.
$soapErrorPrefix = 'Błąd mydła! ';
$mt5ErrorPrefix = 'Błąd połączenia z bazą danych MT5! ';


return [

    /*
    |--------------------------------------------------------------------------
    | Global Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used during authentication for various
    | messages that we need to display to the user. You are free to modify
    | these language lines according to your application's requirements.
    |
    */

    10000 => 'Dostępny wynik.',
    10001 => 'Niektórych pól może brakować lub zawierać nieprawidłowe dane.',
    10002 => $soapErrorPrefix,
    10004 => $soapErrorPrefix . 'Zła odpowiedź.',
    10005 => $soapErrorPrefix . 'Nie podano nazwy funkcji.',
    10006 => $soapErrorPrefix . 'Odpowiedź nie ma metody wynikowej.',
    10007 => $mt5ErrorPrefix,
    10008 => $mt5ErrorPrefix . 'Nieprawidłowy obiekt zapytania.',
    10009 => 'Wystąpił nieznany błąd. Spróbuj ponownie później.',
    10010 => 'Strona nie znaleziona.',
    10011 => 'Nieprawidłowy dostęp. Ta akcja jest dozwolona tylko dla IB typu indywidualnego.',
    10012 => 'Błąd zaplanowanego zadania! Sprawdź dzienniki, aby uzyskać więcej informacji.',
    10013 => 'Zaplanowane zadanie zostało pomyślnie zakończone.',
    10014 => 'Zażądano nieprawidłowego działania dotyczącego zasobów.',
    10015 => 'Nie można pobrać kursów wymiany walut. Spróbuj ponownie później.',
    10016 => 'Witryna jest w trybie konserwacji w celu aktualizacji systemu. Sprawdź ponownie wkrótce.',

];
