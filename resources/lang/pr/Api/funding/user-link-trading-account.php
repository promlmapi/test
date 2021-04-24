<?php

$resource = 'conta de negociação';
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
    11301 => 'Esta ' . $resource . ' já está vinculado à sua conta de reembolso atual.',
    11302 => 'O ' . $resource . 'pertence a um usuário diferente.',
    11303 => "Não conseguimos encontrar dado" . $resource . ". Verifique se o número da conta de negociação enviada está correto.",
    11304 => $resourceUcFirst . 'foi vinculado com sucesso à sua conta de reembolso.',
    11305 => 'A conta do desconto pertence a outra pessoa.',
    11306 => 'O' . $resource . 'está vinculado à sua conta de desconto diferente. Desvincule primeiro e, em seguida, tente vincular à conta de reembolso atual.',
    11307 => 'Sua conta de desconto já está vinculada a uma conta de negociação. Desvincule primeiro e tente vincular um novo' . $resource . '.',
    11308 => 'O e-mail não corresponde !. O e-mail da sua conta IB e o e-mail da conta de negociação devem coincidir.',
    11309 => 'O nome não corresponde !. O nome da sua conta IB e o nome da conta comercial devem corresponder.',
    11310 => 'A plataforma da conta de negociação não corresponde !. Sua conta de desconto e plataformas de conta de negociação devem ser iguais.',
    11311 => 'A moeda da conta de negociação não corresponde !. As moedas da sua conta de desconto e da conta de negociação devem ser as mesmas.',

    /*
     * Destroy
     */
    11320 => $resourceUcFirst . ' desvinculado com sucesso de sua conta de reembolso.',
    11321 => 'Proibido desvincular! Este linkado' . $resource . ' pertence a outro usuário.',

];
