<?php
class Lobby {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getPersons($token) {
        $user = $this->db->getUserByToken($token);
        if ($user) {
            return $this->db->getPersons($token);
        }
        return array(false, 455);
    }

    public function setPerson($params) {
        $id = $params['id'];
        $idPerson = $params['person_id'];
        $token = $params['token'];
        if ($id && $idPerson && $token) {
            return $this->db->setPerson($id, $idPerson, $token);
        }
        return array(false, 1002);
    }
}