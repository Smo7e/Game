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
        $this->db = new DB();
        $this->user = new User($this->db);
        $this->chat = new Chat();
        $this->game = new Game();
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
        return array(false, 1001);
    }


    function logout($params) {
        $token = $params['token'];
        if ($token) {
            return $this->user->logout($token);
        }
        return array(false, 400);
    }

    function sendMessage($params) {
        $token = $params['token'];
        $message = $params['message'];
        if ($token && $message) {
            //if ($this->check(['token', 'message'])) {
            $user = $this->user->getUser($token);
            if ($user) {
                //return $this->chat->sendMessage($user->id, $message);
            }
            return array(false, 455);
        }
        return array(false, 1001);
    }

    function signUp($params) {
        $login = $params['login'];
        $password = $params['password'];
        $nickname = $params['nickname'];
        if ($login && $password && $nickname) {
        return $this->user->signUp($login, $password, $nickname);
        } else {
            return (false, 1001);
        }
    }
}