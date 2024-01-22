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
    function addGamers($userId){
        $this->db->addGamers($userId);
        
    }
    function updatePersonId( $userId,$newPersonId){
        $a = json_decode($userId,true);
       $this->db->updatePersonId($a,$newPersonId);
       return true;
    }
    function getGamerById($userId){
        return  $this->db->getGamerById($userId);
    }
    function deleteGamers(){
        $this->db->deleteGamers();
    }

    function getItems(){
        return $this->db->getItems();
    }
}