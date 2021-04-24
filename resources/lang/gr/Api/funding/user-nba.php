<?php

$resource = 'nominiertes Bankkonto';
$resourceUcFirst = ucfirst($resource);

//Common lines
$resourceUpdateSuffix = 'Bitte stellen Sie sicher, dass Sie relevante Dokumente von unten zur Überprüfung hinzugefügt haben.
<br/><br/>
<a class="ui white button small" role="button" href="/profile/manage-documents">Dokument verwalten</a>';

return [

    /*
    |--------------------------------------------------------------------------
    | Nominated Bank Account Language Lines
    |--------------------------------------------------------------------------
    */

    /*
     * Index
     */
    11002 => 'Sie haben keine hinzugefügt ' . $resource . ' noch.',

    /*
     * Store
     */
    11000 => 'Ihre Anfrage wurde erfolgreich gesendet.' . $resourceUpdateSuffix,
    11001 => 'Du hast schon einen ' . $resource . ' Ihrem Konto hinzugefügt. Bitte entfernen Sie das zuerst, bevor Sie ein weiteres hinzufügen.',

    /*
     * Destroy
     */
    11003 => $resourceUcFirst . ' erfolgreich entfernt.',
    11004 => 'Löschen verboten! Dies ' . $resource . ' gehört einem anderen Benutzer.',

];
