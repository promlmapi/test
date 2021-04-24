<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Rebate Account Funds Transfer Language Lines
    |--------------------------------------------------------------------------
    */

    /*
     * Store
     */
    12501 => 'Kwota przelewu jest większa niż saldo konta. Poproś o saldo mniejsze lub równe saldzie dostępnemu.',
    12502 => 'Z powodzeniem zażądałeś przelewu środków na swoje konto handlowe. Nasz zespół pomocy technicznej zweryfikuje Twoje informacje i wkrótce podejmie działania.',
    12503 => implode(' ', [
        'Tylko',
        config('app.models.ibRebateAccountJournalTransaction.configurations.maximumAllowedPendingTransferRequests'),
        'prośby o przeniesienie są dozwolone jednocześnie. Poczekaj, aż zespół pomocy wykona istniejące żądanie przeniesienia.'
    ]),

];
