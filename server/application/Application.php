<?php

require_once('server/application/modules/Database.php');
require_once('server/application/modules/Chat.php');
require_once('server/application/modules/Game.php');
require_once('server/application/modules/User.php');


class Application
{
    function __construct()
    {
        $db = new Database();
        $this->user = new User($db);
        $this->chat = new Chat();
        $this->game = new Game();
    }
    private $user;
    function login($params)
    {
        $login = $params['login'];
        $password = $params['password'];
        if ($login && $password) {
            return $this->user->login($login, $password);
        }
        return array(false, 1001);
    }
}