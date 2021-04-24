<?php

// Common.
$soapErrorPrefix = 'Error de jabón! ';
$mt5ErrorPrefix = 'Error de conexión de la base de datos MT5! ';


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

    10000 => 'Resultado disponible.',
    10001 => 'Es posible que falten algunos campos o que tengan datos incorrectos.',
    10002 => $soapErrorPrefix,
    10004 => $soapErrorPrefix . 'Mala respuesta.',
    10005 => $soapErrorPrefix . 'No se ha proporcionado el nombre de la función.',
    10006 => $soapErrorPrefix . 'La respuesta no tiene método de resultado.',
    10007 => $mt5ErrorPrefix,
    10008 => $mt5ErrorPrefix . 'Objeto de consulta no válido.',
    10009 => 'Ocurrió un error desconocido. Por favor, inténtelo de nuevo más tarde.',
    10010 => 'Página no encontrada.',
    10011 => 'Acceso invalido. Esta acción solo está permitida para IB de tipo Individual.',
    10012 => '¡Error de trabajo programado! Consulte los registros para obtener más detalles..',
    10013 => 'El trabajo programado se completó correctamente.',
    10014 => 'Se ha solicitado una acción de recurso no válida.',
    10015 => 'No se pueden recuperar las tasas de conversión de moneda. Por favor, inténtelo de nuevo más tarde.',
    10016 => 'El sitio web está en modo de mantenimiento para actualizaciones del sistema. Vuelve a consultar en breve.',

];
