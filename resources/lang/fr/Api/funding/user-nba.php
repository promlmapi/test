<?php

$resource = 'Compte bancaire désigné';
$resourceUcFirst = ucfirst($resource);

//Common lines
$resourceUpdateSuffix = 'Veuillez vous assurer que vous avez ajouté les documents pertinents ci-dessous pour vérification.
<br/><br/>
<a class="ui white button small" role="button" href="/profile/manage-documents">Gérer le document</a>';

return [

    /*
    |--------------------------------------------------------------------------
    | Nominated Bank Account Language Lines
    |--------------------------------------------------------------------------
    */

    /*
     * Index
     */
    11002 => 'Vous n avez pas ajouté de ' . $resource . ' encore.',

    /*
     * Store
     */
    11000 => 'Votre demande a été soumise avec succès.' . $resourceUpdateSuffix,
    11001 => 'Vous en avez déjà un ' . $resource . ' ajouté à votre compte. Veuillez le supprimer avant d en ajouter un autre.',

    /*
     * Destroy
     */
    11003 => $resourceUcFirst . ' supprimé avec succès.',
    11004 => 'Supprimer interdit! Cette ' . $resource . ' appartient à un autre utilisateur.',

];
