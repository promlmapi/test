<?php

$resource = 'Cuenta bancaria verificada';
$resourceUcFirst = ucfirst($resource);

//Common lines
$resourceUpdateSuffix = 'Asegúrese de haber agregado los documentos relevantes de abajo para verificación.
<br/><br/>
<a class="ui white button small" role="button" href="/profile/manage-documents">Gestionar documento</a>';

return [

    /*
    |--------------------------------------------------------------------------
    | Nominated Bank Account Language Lines
    |--------------------------------------------------------------------------
    */

    /*
     * Index
     */
    11002 => 'No has agregado un ' . $resource . ' todavía.',

    /*
     * Store
     */
    11000 => 'Su solicitud ha sido enviada con éxito..' . $resourceUpdateSuffix,
    11001 => 'Usted ya tiene uno ' . $resource . ' agregado a su cuenta. Elimínelo primero antes de agregar otro.',

    /*
     * Destroy
     */
    11003 => $resourceUcFirst . ' eliminado con éxito.',
    11004 => 'Eliminar prohibida! Esta ' . $resource . ' Pertenece a otra usuaria.',

];
