<?php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');

require_once('application/Answer.php');
require_once('application/MyApplication.php');

function result($params) {
    $method = $params['method'];
    if ($params) {
        $app2 = new MyApplication();
        switch ($method) {
            case "login": return $app2->test($params);
            case "register": return $app2->register($params);
            case "logout": return $app2->logout($params);
            case "auth": return $app2->auth($params);
            default: return null;
        }
    }
    return null;
}

//echo json_encode(Answer::response(result($_GET)));
echo json_encode(result($_GET));