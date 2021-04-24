<?php

$resource = 'conto bancario nominato';
$resourceUcFirst = ucfirst($resource);

//Common lines
$resourceUpdateSuffix = 'Assicurati di aver aggiunto i documenti pertinenti dal basso per la verifica.
<br/><br/>
<a class="ui white button small" role="button" href="/profile/manage-documents">Gestisci documento</a>';

return [

    /*
    |--------------------------------------------------------------------------
    | Nominated Bank Account Language Lines
    |--------------------------------------------------------------------------
    */

    /*
     * Index
     */
    11002 => 'Non hai aggiunto un ' . $resource . ' ancora.',

    /*
     * Store
     */
    11000 => 'La tua richiesta è stata inviata con successo.' . $resourceUpdateSuffix,
    11001 => 'Ne hai già uno ' . $resource . ' aggiunto al tuo account. Si prega di rimuoverlo prima di aggiungerne un altro.',

    /*
     * Destroy
     */
    11003 => $resourceUcFirst . ' rimosso con successo.',
    11004 => 'Elimina vietata! Questa ' . $resource . ' appartiene a un altro utente.',

];
