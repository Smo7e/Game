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

    function getItems(){
        return $this->db->getItems();
    }
}