<?php

$resource = 'conto di trading';
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
    11301 => 'Questa ' . $resource . ' è già collegato al tuo attuale conto di rebate.',
    11302 => 'Il ' . $resource . ' appartiene a un altro utente.',
    11303 => "Non siamo riusciti a trovare dato" . $resource . ". Si prega di verificare se il numero del conto di trading inviato è corretto.",
    11304 => $resourceUcFirst . ' è stato collegato con successo al tuo conto di rebate.',
    11305 => 'Il conto del rebate appartiene a qualcun altro.',
    11306 => 'Il ' . $resource . ' è collegato al tuo diverso conto di rebate. Si prega di scollegare prima e poi provare a collegare con lattuale conto di rebate.',
    11307 => 'Il tuo conto di rebate è già collegato a un conto di trading. Prima scollega e poi prova a collegarne uno nuovo' . $resource . '.',
    11308 => 'LEmail non corrisponde!. Lemail del tuo account IB e le-mail del tuo account di trading devono corrispondere.',
    11309 => 'Il nome non corrisponde !. Il nome del tuo conto IB e il nome del tuo conto di trading devono corrispondere.',
    11310 => 'La piattaforma del conto di trading non corrisponde !. Il tuo conto di rebate e le piattaforme del conto di trading devono essere le stesse.',
    11311 => 'La valuta del conto di trading non corrisponde !. Il tuo conto di rebate e le valute del conto di trading devono essere le stesse.',

    /*
     * Destroy
     */
    11320 => $resourceUcFirst . ' scollegato con successo dal tuo conto di rebate.',
    11321 => 'Scollegamento vietato! Questo collegato ' . $resource . ' appartiene a un altro utente.',

];
