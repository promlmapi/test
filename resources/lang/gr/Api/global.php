<?php

// Common.
$soapErrorPrefix = 'Seife error! ';
$mt5ErrorPrefix = 'MT5-Datenbankverbindungsfehler! ';


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

    10000 => 'Ergebnis verfügbar.',
    10001 => 'Einige Felder fehlen möglicherweise oder enthalten falsche Daten.',
    10002 => $soapErrorPrefix,
    10004 => $soapErrorPrefix . 'Schlechte Antwort.',
    10005 => $soapErrorPrefix . 'Der Funktionsname wurde nicht angegeben.',
    10006 => $soapErrorPrefix . 'Die Antwort hat keine Ergebnismethode.',
    10007 => $mt5ErrorPrefix,
    10008 => $mt5ErrorPrefix . 'Ungültiges Abfrageobjekt.',
    10009 => 'Unbekannter Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.',
    10010 => 'Seite nicht gefunden.',
    10011 => 'Ungültiger Zugang. Diese Aktion ist nur für IBs vom Typ Individual zulässig.',
    10012 => 'Geplanter Jobfehler! Bitte überprüfen Sie die Protokolle für weitere Details.',
    10013 => 'Der geplante Job wurde erfolgreich abgeschlossen.',
    10014 => 'Es wurde eine ungültige Ressourcenaktion angefordert.',
    10015 => 'Währungsumrechnungskurse können nicht abgerufen werden. Bitte versuchen Sie es später noch einmal.',
    10016 => 'Die Website befindet sich im Wartungsmodus für System-Upgrades. Bitte versuchen Sie es in Kürze erneut.',

];
