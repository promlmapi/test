<?php

$resource = 'cuenta de operaciones';
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
    11301 => 'Esta ' . $resource . ' ya está vinculado con su cuenta de rebate actual.',
    11302 => 'La ' . $resource . ' Pertenece a una usuaria diferente.',
    11303 => "Nosotras no pudimos encontrar dado " . $resource . ". Verifique si el número de cuenta comercial enviado es correcto.",
    11304 => $resourceUcFirst . ' se ha vinculado correctamente a su cuenta de rebate.',
    11305 => 'La cuenta de rebate pertenece a otra persona.',
    11306 => 'Esta ' . $resource . ' está vinculado con su cuenta de rebate diferente. Desvincula primero y luego intenta vincularlo con la cuenta de rebate actual.',
    11307 => 'Su cuenta de rebate ya está vinculada con una cuenta comercial. Desvincular primero y luego intente vincular un nuevo ' . $resource . '.',
    11308 => '¡El email no coincide!. El correo electrónico de su cuenta IB y el correo electrónico de su cuenta comercial deben coincidir.',
    11309 => '¡El nombre no coincide !. El nombre de su cuenta IB y el nombre de su cuenta comercial deben coincidir.',
    11310 => 'La plataforma de la cuenta comercial no coincide. Su cuenta de rebate y las plataformas de su cuenta comercial deben ser las mismas.',
    11311 => 'La divisa de la cuenta de operaciones no coincide. Las monedas de su cuenta de rebate y de su cuenta comercial deben ser las mismas.',

    /*
     * Destroy
     */
    11320 => $resourceUcFirst . ' desvinculado correctamente de su cuenta de rebate.',
    11321 => 'Desvincular prohibido! Este vinculado ' . $resource . ' Pertenece a otra usuaria.',

];
