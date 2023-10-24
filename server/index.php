<?php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');

require_once('application/Answer.php');
require_once('application/Application.php');

function result($params) {
    $method = $params['method'];
    if ($params) {
        $app = new Application();
        switch ($method) {
            case 'login': return $app->login($params);
            case 'logout': return $app->logout($params);
            
            default: return array(false, 466);
        }
    }
    return array(false, 469);
}

echo json_encode(Answer::response(result($_GET)));
