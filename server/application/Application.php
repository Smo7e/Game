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
        $this->game = new Game();
    }

    private function checkParams() {
        $arr = func_get_args();
        if(count($arr) === 0)
            return false;
        foreach($arr as $i) {
            if(!$i)
                return false;
        }
        return array(false, 1001);
    }

    function login($params) {
        $login = $params['login'];
        $hash = $params['hash'];
        $rnd = $params['rnd'];
        if($login && $hash && $rnd) {
            return $this->user->login($login, $hash, $rnd);
        }
        return array(false, 1001);
    }

    function logout($params) {
        $token = $params['token'];
        if($token) {
            return $this->user->logout($token);
        }
        return array(false, 400);
    }

    function signUp($params) {
        $login = $params['login'];
        $password = $params['password'];
        $nickname = $params['nickname'];
        $verifyPassword = $params['verifyPassword'];
        if($login && $nickname) {
            if($password || $verifyPassword) {
                return $this->user->signUp($login, $password, $nickname, $verifyPassword);
            }
            return array(false, 1501);
        }
        return array(false, 1001);
    }

    function sendMessage($params) {
        $token = $params['token'];
        $message = $params['message'];
        if($token && $message) {
            $user = $this->user->getUser($token);
            if($user) {
                return $this->chat->sendMessage($user->id, $message);
            }
            return array(false, 455);
        }
        return array(false, 1001);
    }


    function getMessages($params) {
        $token = $params['token'];
        $hash = $params['hash'];
        if($token && $hash) {
            $user = $this->user->getUser($token);
            if($user) {
                return $this->chat->getMessages($hash);
            }
            return array(false, 9000);
        }
        return array(false, 9000);
    }

}