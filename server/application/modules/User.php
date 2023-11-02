<?php
 class User {
    private $db = null;
    function __construct($db) {
        $this->db = $db;
    }

    function login($login, $hash, $rnd) {
        $hashS = md5(md5($login.'1234').$rnd);
        if ($hash === $hashS) {
            $token = md5($hash.rand());
            return array(
                'name' => 'Vasya',
                'soname' => 'Vasilyevitch',
                'token' => $token
            );
        }
        return array(false,456);
    }

    function logout($token) {
        return true;
    }

  function signUp($login, $password, $nickname) {
        $user = $this->db->getUserByLogin($login);
        if (!$user) {
            $this->db->addUser($login, $password, $nickname);
            return true;
        }
    }
}
