<?php

$resource = 'conta bancária indicada';
$resourceUcFirst = ucfirst($resource);

//Common lines
$resourceUpdateSuffix = 'Certifique-se de ter adicionado os documentos relevantes abaixo para verificação.
<br/><br/>
<a class="ui white button small" role="button" href="/profile/manage-documents">Gerenciar Documento</a>';

return [

    /*
    |--------------------------------------------------------------------------
    | Nominated Bank Account Language Lines
    |--------------------------------------------------------------------------
    */

    /*
     * Index
     */
    11002 => 'Você não adicionou um ' . $resource . 'ainda.',

    /*
     * Store
     */
    11000 => 'Seu pedido foi enviado com sucesso.' . $resourceUpdateSuffix,
    11001 => 'Voce ja tem um' . $resource . 'adicionado à sua conta. Remova-o antes de adicionar outro.',

    /*
     * Destroy
     */
    11003 => $resourceUcFirst . 'removido com sucesso.',
    11004 => 'Exclua proibido! Esta' . $resource . ' pertence a outro usuário.',

];
