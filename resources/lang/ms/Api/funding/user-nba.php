<?php

$resource = 'nominated bank account';
$resourceUcFirst = ucfirst($resource);

//Common lines
$resourceUpdateSuffix = 'Pastikan anda telah menambahkan dokumen yang berkaitan dari bawah untuk pengesahan.
<br/><br/>
<a class="ui white button small" role="button" href="/profile/manage-documents">Urus Dokumen</a>';

return [

    /*
    |--------------------------------------------------------------------------
    | Nominated Bank Account Language Lines
    |--------------------------------------------------------------------------
    */

    /*
     * Index
     */
    11002 => 'Anda belum menambah a ' . $resource . ' belum.',

    /*
     * Store
     */
    11000 => 'Permintaan anda berjaya dihantar.' . $resourceUpdateSuffix,
    11001 => 'Anda sudah mempunyai satu ' . $resource . ' ditambahkan ke akaun anda. Sila keluarkan terlebih dahulu sebelum menambahkan yang lain.',

    /*
     * Destroy
     */
    11003 => $resourceUcFirst . ' berjaya dikeluarkan.',
    11004 => 'Padam dilarang! Ini' . $resource . ' milik pengguna lain.',

];
