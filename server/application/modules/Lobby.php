<?php
class Lobby {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getPersons($params) {
        $token = $params['token'];
        if ($token) {
            return $this->db->getPersons($token);
        }
        return array(false, 1002);
    }

    function getItems(){
        return $this->db->getItems();
    }
}