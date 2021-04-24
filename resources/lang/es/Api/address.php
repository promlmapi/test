<?php

$resourceUpdateSuffix = ' Asegúrese de haber agregado los documentos de respaldo relevantes para la verificación de la dirección.';

$resourceDocUpdateSuffix = ' Asegúrese de haber agregado los documentos relevantes de abajo para verificación.
<br/><br/>
<a class="ui white button small" role="button" href="/profile/manage-documents">Gestionar documento</a>
';

return [

    /*
    |--------------------------------------------------------------------------
    | Address Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used during authentication for various
    | messages that we need to display to the user. You are free to modify
    | these language lines according to your application's requirements.
    |
    */

    10300 => 'Dirección enviada con éxito para verificación.' . $resourceUpdateSuffix,
    10301 => 'Aún no has agregado ninguna dirección.',
    10302 => 'Listado exitoso de sus direcciones.',
    10303 => 'Su solicitud ha sido enviada con éxito.' . $resourceDocUpdateSuffix,
    10304 => '¡Actualizar dirección prohibida! Esta dirección pertenece a otro usuario.',
    10305 => '¡Actualizar dirección prohibida! No se han realizado cambios en la dirección.',
    10306 => '¡Actualizar dirección prohibida! Esta es una dirección antigua. Se permite actualizar solo la dirección más reciente.',
    10307 => '¡Agregar dirección prohibida! Ya se agregó una dirección. Actualice la dirección en su lugar',
    10308 => '¡Error de paso! Continúe el registro secuencialmente.',
    10309 => 'Su solicitud ha sido enviada con éxito.',
    10310 => 'El usuario solicitado no tiene permiso de acceso.',
    10311 => 'Los detalles del usuario se actualizaron correctamente.',

];
