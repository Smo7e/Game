<?php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');

error_reporting(0);

require_once('application/Answer.php');
require_once('application/Application.php');

function result($params) {
    $method = $params['method'];
    if ($params) {
        $app = new Application();
        switch ($method) {
            case 'login':
                return $app->login($params);
            case 'logout':
                return $app->logout($params);
            case 'signUp':
                return $app->signUp($params);
            case 'sendMessage':
                return $app->sendMessage($params);
            case 'getMessages':
                return $app->getMessages($params);
            case 'getItems':
                return $app->getItems();
            case 'addFriend':
                return $app->addFriend($params);
            case 'getFriends':
                return $app->getFriends($params);
            // игровые команды
            case 'move':
                return $app->move($params);
            // shot
            // cast
            // pickup
            // получение сцены
            case 'getScene':
                return $app->getScene($params);
            case 'moveMobs':
                return $app->moveMobs($params);
            case 'getUserById':
                return $app->getUserById($params);
            case 'getUserByToken':
                return $app->getUserByToken($params);
            case 'getGamers':
                return $app->getGamers();
            case 'addGamers':
                return $app->addGamers($params);
            case 'deleteGamers':
                return $app->deleteGamers($params);
            case 'updatePersonId':
                return $app->updatePersonId($params);
            case 'getGamerById':
                return $app->getGamerById($params);
            case 'addInvitation':
                return $app->addInvitation($params);
            case 'checkInvites':
                return $app->checkInvites($params);
            case 'updateHp':
                return $app->updateHp($params);
            default:
                return array(false, 466);
        }
    }
    return array(false, 469);
}

echo json_encode(Answer::response(result($_GET)));