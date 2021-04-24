<?php

// Common.
$soapErrorPrefix = 'Erro de sabão! ';
$mt5ErrorPrefix = 'Erro de conexão do banco de dados MT5!';


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

    10000 => 'Resultado disponível.',
    10001 => 'Alguns campos podem estar ausentes ou conter dados incorretos.',
    10002 => $soapErrorPrefix,
    10004 => $soapErrorPrefix . 'Resposta ruim.',
    10005 => $soapErrorPrefix . 'O nome da função não foi fornecido.',
    10006 => $soapErrorPrefix . 'A resposta não tem método de resultado.',
    10007 => $mt5ErrorPrefix,
    10008 => $mt5ErrorPrefix . 'Objeto de consulta inválido.',
    10009 => 'Ocorreu um erro desconhecido. Por favor, tente novamente mais tarde.',
    10010 => 'Página não encontrada.',
    10011 => 'Acesso inválido. Esta ação só é permitida para IBs do tipo Individual.',
    10012 => 'Erro de trabalho agendado! Por favor, verifique os logs para mais detalhes.',
    10013 => 'O trabalho agendado foi concluído com sucesso.',
    10014 => 'Foi solicitada uma ação de recurso inválida.',
    10015 => 'Não foi possível recuperar as taxas de conversão de moeda. Por favor, tente novamente mais tarde.',
    10016 => 'O site está em modo de manutenção para atualizações do sistema. Verifique novamente em breve.',

];
