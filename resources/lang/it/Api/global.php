<?php

// Common.
$soapErrorPrefix = 'Errore di sapone! ';
$mt5ErrorPrefix = 'Errore di connessione al database MT5! ';


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

    10000 => 'Risultato disponibile.',
    10001 => 'Alcuni campi potrebbero mancare o contenere dati errati.',
    10002 => $soapErrorPrefix,
    10004 => $soapErrorPrefix . 'Cattiva risposta.',
    10005 => $soapErrorPrefix . 'Il nome della funzione non è stato fornito.',
    10006 => $soapErrorPrefix . 'La risposta non ha un metodo di risultato.',
    10007 => $mt5ErrorPrefix,
    10008 => $mt5ErrorPrefix . 'Oggetto query non valido.',
    10009 => 'Errore sconosciuto. Per favore riprova più tardi.',
    10010 => 'pagina non trovata.',
    10011 => 'Accesso non valido. Questa azione è consentita solo per IB di tipo Individuale.',
    10012 => 'Errore di lavoro pianificato! Si prega di controllare i log per maggiori dettagli.',
    10013 => 'Il lavoro pianificato è stato completato con successo.',
    10014 => 'È stata richiesta unazione per la risorsa non valida.',
    10015 => 'Impossibile recuperare i tassi di conversione della valuta. Per favore riprova più tardi.',
    10016 => 'Il sito Web è in modalità di manutenzione per gli aggiornamenti del sistema. Si prega di ricontrollare a breve.',

];
