<?php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

require_once('server/application/Application.php');
function result($params)
{
    $method = $params['method'];
    if ($params) {
        $app = new Application();
        switch ($method) {
            case 'm':
                return $app->login($params);
        }
    }
}

echo json_encode(Answer::response(result($params)));

?>