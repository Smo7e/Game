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
        if ($user) {
            $hashS = md5($user->password.$rnd);
            if ($hash === $hashS) {
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
        if ($user) {
            $this->db->updateToken($user->id, null);
            return true;
        }
        return array(false, 455);
    }

    function signUp($login, $password, $nickname) {
        $password = md5($login.$password);
        $user = $this->db->getUserByLogin($login);
        if (!$user) {
            $this->db->addUser($login, $password, $nickname);
            return true;
        }
        return array(false, 487);
    }
}