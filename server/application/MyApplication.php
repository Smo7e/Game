<?php

use repository\UserRepository;
use repository\DB;

require_once('application/repository/DB.php');
require_once('application/repository/UserRepository.php');
require_once('application/service/UserService.php');

class MyApplication
{
    private UserService $userService;

    function __construct()
    {

        $myDB = new DB();
        $userRepository = new UserRepository($myDB);
        $this->userService = new UserService($userRepository);
    }

    public function test($params)
    {
        $login = $params['login'];
        $password = $params['password'];
        return $this->userService->login($login, $password);
    }

    public function register($params) {
        $login = $params["login"];
        $password = $params["password"];
        $email = $params["email"];
        return $this->userService->register($login, $email, $password);
    }

    public function logout($params) {
        $token = $params["token"];
        return $this->userService->logout($token);
    }

    public function auth($params) {
        $token = $params["token"];
        return $this->userService->checkUser($token);
    }
}