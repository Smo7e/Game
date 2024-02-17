<?php

require_once('application\modules\DB.php');
require_once('application\modules\Chat.php');
require_once('application\modules\User.php');
require_once('application\modules\Game.php');
require_once('application\modules\Lobby.php');

class Application {
    private $user = null;
    private $chat = null;
    private $game = null;
    private $db = null;
    private $lobby = null;

    function __construct() {
        $config = json_decode(file_get_contents('./config/db/config.json'), true);
        $this->db = new DB($config["DataBase"]);
        $this->user = new User($this->db);
        $this->chat = new Chat($this->db);
        $this->game = new Game($this->db);
        $this->lobby = new Lobby($this->db);
    }

    private function checkParams() {
        $arr = func_get_args();
        if (count($arr) === 0)
            return false;
        foreach ($arr as $i) {
            if (!$i)
                return false;
        }
        return array(false, 1001);
    }

    function login($params) {
        $login = $params['login'];
        $hash = $params['hash'];
        $rnd = $params['rnd'];
        if ($login && $hash && $rnd) {
            return $this->user->login($login, $hash, $rnd);
        }
        return array(false, 1012);
    }

    function logout($params) {
        $token = $params['token'];
        if ($token) {
            return $this->user->logout($token);
        }
        return array(false, 400);
    }

    function signUp($params) {
        $login = $params['login'];
        $nickname = $params['nickname'];
        $hash = $params['hash'];
        $verifyHash = $params['verifyHash'];
        if ($login && $nickname) {
            if ($hash || $verifyHash) {
                return $this->user->signUp($login, $nickname, $hash, $verifyHash);
            }
            return array(false, 1501);
        }
        return array(false, 1001);
    }

    function sendMessage($params) {
        $token = $params['token'];
        $message = $params['message'];
        if ($token && $message) {
            $user = $this->user->getUser($token);
            if ($user) {
                return $this->chat->sendMessage($user->id, $message);
            }
            return array(false, 455);
        }
        return array(false, 1001);
    }

    function getMessages($params) {
        $token = $params['token'];
        $hash = $params['hash'];
        if ($token && $hash) {
            $user = $this->user->getUser($token);
            if ($user) {
                return $this->chat->getMessages($hash);
            }
            return array(false, 455);
        }
        return array(false, 1001);
    }

    function addFriend($params) {
        $token = $params['token'];
        $friendId = $params['id'];
        if ($token && $friendId) {
            $user = $this->user->getUser($token);
            if ($user) {
                return $this->lobby->addFriend($user->id, $friendId);
            }
            return array(false, 455);
        }
        return array(false, 1001);
    }

    function getFriends($params) {
        $token = $params['token'];
        if ($token) {
            $user = $this->user->getUser($token);
            if ($user) {
                return $this->lobby->getFriends($user->id);
            }
            return array(false, 455);
        }
        return array(false, 1001);
    }
    function getUserById($params) {
        $token = $params['token'];
        $idFriend = $params['idFriend'];
        return $this->user->getUserById($idFriend);

    }

    function getScene($params) {
        $token = $params['token'];
        $hashGamers = $params['hashGamers'];
        $hashItems = true;
        $hashMobs = $params['hashMobs'];
        $hashMap = true;
        if ($token && $hashGamers && $hashItems && $hashMobs && $hashMap) {
            $user = $this->user->getUser($token);
            if ($user) {
                return $this->game->getScene($user->id, $hashGamers, $hashItems, $hashMobs, $hashMap);
            }
            return array(false, 455);
        }
        return array(false, 1001);
    }
    function updatePersonId($params) {
        $token = $params['token'];
        $newPersonId = $params['newPersonId'];
        if($token){
            $user = $this->user->getUser($token);
            if($user){
               return $this->lobby->updatePersonId($user->id,$newPersonId);
                //return true;

            }
            return array(false, 455);
        }
        return array(false, 1001);
    }
    function getGamerById($params){
        $userId = $params['userId'];
        return $this->lobby->getGamerById($userId);
    }
    function getGamers(){
        return $this->lobby->getGamers();
    }
    function getUserByToken($params){
        $token = $params['token'];
        if($token){
            return $this->user->getUserByToken($token);
        }
        return array(false, 1001);
    }
    function addGamers($params){
        $token = $params['token'];
        
        if($token){
            $user = $this->user->getUser($token);
            if($user){
                $this->lobby->addGamers($user->id);
                return true;
            }
            return array(false, 455);
        }
        return array(false,1001);
    }
    function deleteGamers($params){
        $this->lobby->deleteGamers();
        return true;
    }
    

    function move($params) {
        $token = $params['token'];
        $direction = $params['direction'];
        $x = $params['x'];
        $y = $params['y'];
        $status = $params['status'];
        if ($token && $direction && $x && $y && $status) {
            $user = $this->user->getUser($token);
            if ($user) {
                return $this->game->move($user->id, $direction, $x, $y, $status);
            }
            return array(false, 455);
        }
        return array(false, 1001);
    }
    function moveMobs($params) {
        $x = $params['x'];
        $y = $params['y'];
        if ( $x && $y) {
            return $this->game->moveMobs($x, $y);
        }
        return array(false, 1001);
    }

    function getItems(){
        return $this->lobby->getItems();
    }

   function addInvitation($params){
    $userId = $params['userId'];
    $friendId = $params['friendId'];
    return $this->lobby->addInvitation($userId, $friendId);
   }
   function checkInvites($params){
    $userId = $params['userId'];
    $result = $this->lobby->checkInvites($userId);
    if ($result) {
        return $result;
    }
    return array(true);

   }
   function updateHp($params){
    $gamerName = $params['gamerName'];
    $gamerHp = $params['gamerHp'];
    $this->game->updateHp($gamerName, intval($gamerHp));
    return true;
   }
   function updateHpMobs(){
    $this->game->updateHpMobs();
    return true;
   }
   function getQuestionsProgrammer(){
    return $this->game->getQuestionsProgrammer();
   }
   function getMobs(){
    return $this->game->getMobs();
   }

   function updateSpeedBoss(){
       return $this->game->updateSpeedBoss();
   }

}
