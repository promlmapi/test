<?php

// Common.
$soapErrorPrefix = 'Erreur de savon! ';
$mt5ErrorPrefix = 'Erreur de connexion à la base de données MT5! ';


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

    10000 => 'Résultat disponible.',
    10001 => 'Certains champs peuvent être manquants ou contenir des données incorrectes.',
    10002 => $soapErrorPrefix,
    10004 => $soapErrorPrefix . 'Mauvaise réponse.',
    10005 => $soapErrorPrefix . 'Le nom de la fonction n a pas été fourni.',
    10006 => $soapErrorPrefix . 'La réponse n a pas de méthode de résultat.',
    10007 => $mt5ErrorPrefix,
    10008 => $mt5ErrorPrefix . 'Objet de requête non valide.',
    10009 => 'Une erreur inconnue s est produite. Veuillez réessayer plus tard.',
    10010 => 'Page non trouvée.',
    10011 => 'Accès invalide. Cette action n est autorisée que pour les IB de type Individuel.',
    10012 => 'Erreur de tâche planifiée! Veuillez consulter les journaux pour plus de détails.',
    10013 => 'Le travail planifié a été terminé avec succès.',
    10014 => 'Une action de ressource non valide a été demandée.',
    10015 => 'Impossible de récupérer les taux de conversion des devises. Veuillez réessayer plus tard.',
    10016 => 'Le site Web est en mode maintenance pour les mises à niveau du système. Prière de réessayer bientôt.',

];
