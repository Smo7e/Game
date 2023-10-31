<?php

use repository\UserRepository;

require_once('application/repository/UserRepository.php');

class UserService
{
    private UserRepository $userRepository;

    /**
     * @param string $myField
     */
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function login(string $login, string $password) {
        return $this->userRepository->login($login, $password, $this->getRandomString(10));
    }

    public function register(string $login, string $email, string $password) {
        if ($login != null && $email != null && $password != null) {
            return $this->userRepository->register($login, $password, $email);
        }
        throw new \http\Exception\RuntimeException("BAD REQUEST");
    }

    public function logout(string $token) {
        if ($token != null) {
            return $this->userRepository->logout($token);
        }
        throw new \http\Exception\RuntimeException("BAD REQUEST");
    }

    public function checkUser(string $token) {
        if ($token != null) {
            return $this->userRepository->isUser($token);
        }
        throw new \http\Exception\RuntimeException("BAD REQUEST");
    }

    function getRandomString($n)
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $randomString = '';

        for ($i = 0; $i < $n; $i++) {
            $index = rand(0, strlen($characters) - 1);
            $randomString .= $characters[$index];
        }

        return $randomString;
    }

}