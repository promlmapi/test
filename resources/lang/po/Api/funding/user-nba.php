<?php

$resource = 'Wyznaczone konto bankowe';
$resourceUcFirst = ucfirst($resource);

//Common lines
$resourceUpdateSuffix = 'Upewnij się, że dodałeś odpowiednie dokumenty poniżej w celu weryfikacji.
<br/><br/>
<a class="ui white button small" role="button" href="/profile/manage-documents">Zarządzaj dokumentem</a>';

return [

    /*
    |--------------------------------------------------------------------------
    | Nominated Bank Account Language Lines
    |--------------------------------------------------------------------------
    */

    /*
     * Index
     */
    11002 => 'Nie dodałeś ' . $resource . ' jeszcze.',

    /*
     * Store
     */
    11000 => 'Twoja prośba została przesłana pomyślnie.' . $resourceUpdateSuffix,
    11001 => 'Ty już masz ' . $resource . ' dodany do twojego konta. Usuń to najpierw przed dodaniem kolejnego.',

    /*
     * Destroy
     */
    11003 => $resourceUcFirst . ' pomyślnie usunięty.',
    11004 => 'Usuń zabronione! To ' . $resource . ' należy do innego użytkownika.',

];
