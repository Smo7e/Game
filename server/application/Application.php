<?php

require_once('./modules/DB.php');
require_once('./modules/Chat.php');
require_once('./modules/User.php');
require_once('./modules/Game.php');

class Application
{
    private $user = null;    
    private $chat = null;
    private $game = null;

    function __construct()
    {
        $db = new DB();
        $this->user = new User($db);
        $this->chat = new Chat();
        $this->game = new Game();
    }
    
    function login($params) { 
        $login = $params['login'];
        $hash = $params['hash'];
        $rnd = $params['rnd'];
        if ($login && $hash && $rnd) {
            return $this->user->login($login,$hash,$rnd);
        }
        return array(false, 1001);
    }

    function checkParams(){
        $arr = func_get_args();
        if(count($arr)===0)return false;
        foreach($arr as $i){
            if(!$i) return false;
        }
        return true;
    }
}