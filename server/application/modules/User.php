<?php
class User {
    private $db;

    function __construct($db) {
        $this->db = $db;
    }

    function getUser($token) {
        return $this->db->getUserByToken($token);
    }

    function login($login, $hash, $rnd) {
        $user = $this->db->getUserByLogin($login);
        if($user) {
            $hashS = md5($user->password.$rnd);
            if($hash === $hashS) {
                $token = md5($hash.rand());
                $this->db->updateToken($user->id, $token);
                return array(
                    'name' => $user->name,
                    'token' => $token
                );
            }
            return array(false, 456);
        }
        return array(false, 455);
    }

    function logout($token) {
        $user = $this->db->getUserByToken($token);
        if($user) {
            $this->db->updateToken($user->id, null);
            return true;
        }
        return array(false, 455);
    }

    function signUp($login, $password, $nickname, $verifyPassword) {
        $password = md5($login.$password);
        $verifyPassword = md5($login.$verifyPassword);
        $user = $this->db->getUserByLogin($login);
        if(!$user) {
            if($password === $verifyPassword) {
                $this->db->addUser($login, $password, $nickname);
                return array(
                    'name' => $nickname,
                );
            }
            return array(false, 1502);
        }
        return array(false, 487);
    }
}