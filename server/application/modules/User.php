<?php
class User {
    private $db;

    function __construct($db) {
        $this->db = $db;
    }

    function getUser($token) {
        return $this->db->getUserByToken($token);
    }
    function getUserById($idFriend) {
        return $this->db->getUserById($idFriend);
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
            return array(false, 1012);
        }
        return array(false, 1000);
    }

    function logout($token) {
        $user = $this->db->getUserByToken($token);
        if ($user) {
            $this->db->updateToken($user->id, null);
            return true;
        }
        return array(false, 455);
    }

    function signUp($login, $nickname, $hash, $verifyHash) {
        $user = $this->db->getUserByLogin($login);
        if (!$user) {
            if ($hash === $verifyHash) {
                $this->db->addUser($login, $nickname, $hash);
                return array(
                    'name' => $nickname,
                );
            }
            return array(false, 1502);
        }
        return array(false, 487);
    }
    function getUserByToken($token){
        return $this->db->getUserByToken($token);
    }
}