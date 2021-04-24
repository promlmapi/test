<?php

$resource = 'Handelskonto';
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
    11301 => 'Dies ' . $resource . 'ist bereits mit Ihrem aktuellen Rebattkonto verknüpft.',
    11302 => 'Das ' . $resource . 'gehört einem anderen Benutzer.',
    11303 => "Wir konnten nicht gegeben finden " . $resource . ". Bitte überprüfen Sie, ob die übermittelte Handelskontonummer korrekt ist.",
    11304 => $resourceUcFirst . ' wurde erfolgreich mit Ihrem Rebattkonto verknüpft.',
    11305 => 'Das Rebattkonto gehört jemand anderem.',
    11306 => 'Das ' . $resource . ' ist mit Ihrem anderen Rabattkonto verknüpft. Bitte heben Sie zuerst die Verknüpfung auf und versuchen Sie dann, eine Verknüpfung mit dem aktuellen Rebattkonto herzustellen.',
    11307 => 'Ihr Rebattkonto ist bereits mit einem Handelskonto verknüpft. Bitte heben Sie zuerst die Verknüpfung auf und versuchen Sie dann, eine neue zu verknüpfen ' . $resource . '.',
    11308 => 'Email stimmt nicht überein!. Ihre IB-Konto-E-Mail-Adresse und Ihre Handelskonto-E-Mail-Adresse müssen übereinstimmen.',
    11309 => 'Name stimmt nicht überein!. Ihr IB-Kontoname und Ihr Handelskontoname müssen übereinstimmen.',
    11310 => 'Handelskonto-Plattform stimmt nicht überein!. Ihr Rebattkonto und Ihre Handelskontoplattformen müssen identisch sein.',
    11311 => 'Die Währung des Handelskontos stimmt nicht überein!. Die Währungen Ihres Rebattkonten und Ihres Handelskontos müssen identisch sein.',

    /*
     * Destroy
     */
    11320 => $resourceUcFirst . ' erfolgreich von Ihrem Rebattkonten getrennt.',
    11321 => 'De-Link verboten! Dies ist verknüpft ' . $resource . ' gehört einem anderen Benutzer.',

];
