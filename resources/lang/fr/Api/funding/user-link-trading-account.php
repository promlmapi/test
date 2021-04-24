<?php

$resource = 'un compte de commerce';
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
    11301 => 'Cette ' . $resource . 'est déjà associé à votre compte de rabais actuel.',
    11302 => 'La ' . $resource . ' appartient à un autre utilisateur.',
    11303 => "Nous n'avons pas pu trouver donné" . $resource . ". Veuillez vérifier si le numéro de compte de trading soumis est correct.",
    11304 => $resourceUcFirst . ' a été associé avec succès à votre compte de rabais.',
    11305 => 'Le compte de remise appartient à quelqu un d autre.',
    11306 => 'La ' . $resource . ' est lié à votre compte de remise différent. Veuillez d abord dissocier, puis essayez d associer avec le compte de remise actuel.',
    11307 => 'Votre compte de rabais est déjà lié à un compte de trading. Veuillez d abord dissocier, puis essayez d associer un nouveau ' . $resource . '.',
    11308 => 'Email ne correspond pas!. L adresse e-mail de votre compte IB et celle de votre compte de trading doivent correspondre.',
    11309 => 'Le nom ne correspond pas !. Le nom de votre compte IB et le nom de votre compte de trading doivent correspondre.',
    11310 => 'La plateforme de compte de trading ne correspond pas !. Votre compte de rabais et les plates-formes de compte de trading doivent être identiques.',
    11311 => 'La devise du compte de trading ne correspond pas !. Les devises de votre compte de rabais et de votre compte de trading doivent être les mêmes.',

    /*
     * Destroy
     */
    11320 => $resourceUcFirst . ' dissociation réussie de votre compte de rabais.',
    11321 => 'Dissociation interdite! Ce lié ' . $resource . ' appartient à un autre utilisateur.',

];
