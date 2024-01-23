<?php
class Lobby {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function addFriend($userId, $friendId) {
        $user = $this->db->getFriends($userId);
        if ($user) {
            $friends = json_decode($user['friends'], true);
            if (!in_array($friendId, $friends)) {
                $friend = $this->db->getUserById($friendId);
                if ($friend) {
                    $this->db->addFriend($userId, $friendId, $friends);
                    return true;
                }
                return array(false, 488);
            }
            return array(false, 500);
        }
        return array(false, 499);
    }

    public function getFriends($userId) {
        $friendId = $this->db->getFriends($userId);
        if ($friendId) {
            return json_decode($friendId['friends'], true);
        }
        return [];
    }
    function addGamers($userId){
        $this->db->addGamers($userId);
        
    }
   function getGamers(){
        return $this->db->getGamers();
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
    function addInvitation($userId, $friendId){
        $this->db->addInvitation($userId,$friendId);
        return true;
    }
    function checkInvites($userId){
        return $this->db->checkInvites($userId);
        
    }
}