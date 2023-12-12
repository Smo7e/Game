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
    }

    private function check($params){
        foreach($params as $param=>$value){
            if($param === 'token' && (!is_string($value) || strlen($value) != 32)){
                return false;
            }
            if($param === 'login' && (!is_string($value) || strlen($value) > 16 )){
                return false;
            }
            if($param === 'password' && (!is_string($value) && strlen($value) > 16)){
                return false;
            }
            if($param === 'nickname' && (!is_string($value) || strlen($value) > 16)){
                return false;
            }
            if($param === 'verifyPassword' && (!is_string($value) && strlen($value) > 16)){
                return false;
            }    
            if($param === 'message' && (!is_string($value) || strlen($value) > 256)){
                return false;
            }
            if($param === 'messageTo' && !is_numeric($value)){
                return false;
            }
            if($param === 'hash' && (!is_string($value) || !strlen($value) == 32)){
                return false;
            }
            if($param === 'hashMap' && (!is_string($value) || !strlen($value) == 32) ){
                return false;
            }
            if($param === 'hashItems' && (!is_string($value) || !strlen($value) == 32) ){
                return false;
            }
            if($param === 'hashMobs' && (!is_string($value) || !strlen($value) == 32) ){
                return false;
            }
            if($param === 'hashGamers' && (!is_string($value) || !strlen($value) == 32)){
                return false;
            }
            if($param === 'direction' && !is_numeric($value)){
                return false;
            }
            if($param === 'x' && !is_numeric($value)){
                return false;
            }
            if($param === 'y' && !is_numeric($value)){
                return false;
            }          
        }
        return true;
    }

    function login($params) {
        $login = $params['login'];
        $hash = $params['hash'];
        $rnd = $params['rnd'];
        if($login && $hash && $rnd) {
            return $this->user->login($login, $hash, $rnd);
        }
        return array(false, 1012);
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
            return array(false, 455);
        }
        return array(false, 1001);
    }

    function getScene($params) {
        $token = $params['token'];
        $hashGamers = $params['hashGamers'];
        $hashItems = true;
        $hashMobs = true;
        $hashMap = true;
        if ($token && $hashGamers && $hashItems && $hashMobs && $hashMap) {
            $user = $this->user->getUser($token);
            if($user) {
                return $this->game->getScene($user->id, $hashGamers, $hashItems, $hashMobs, $hashMap);
            }
            return array(false, 9000);
        }
        return array(false, 9000);
    }

    function move($params) {
        $token = $params['token'];
        $direction = $params['direction'];
        $x = $params['x'];
        $y = $params['y'];
        if ($token && $direction && $x && $y) {
            $user = $this->user->getUser($token);
            if($user) {
                return $this->game->move($user->id, $direction, $x, $y);
            }
            return array(false, 9000);
        }
        return array(false, 9000);
    }

}
