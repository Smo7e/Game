<?php
class Lobby {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getPersons($token) {
        $user = $this->db->getUserByToken($token);
        if ($user) {
            return $this->db->getPersons();
        }
        return array(false, 455);
    }

    public function setPerson($idPerson, $token) {
        $user = $this->db->getUserByToken($token);
        if ($user) {
            $result = $this->db->setPerson($idPerson, $token);
            if ($result) {
                return $result;
            }
            return array(false, 1003);
        }
        return array(false, 455);
    }
}