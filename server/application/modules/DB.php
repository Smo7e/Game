<?php
class DB
{
    private $db = null;

    function getUserById($id) {
        $query='SELECT * FROM users WHERE id=?';
        $stmt = $this->db->prepare($query);
        $stmt->execute([$id]);
        return $stmt->fetchObject();
    }

    function getUserByLogin($login) {
        $query='SELECT * FROM users WHERE login=?';
        $stmt = $this->db->prepare($query);
        $stmt->execute([$login]);
        return $stmt->fetchObject();
    }

    function getUserByToken($token) {
        $query='SELECT id FROM users WHERE token=?';
        $stmt = $this->db->prepare($query);
        $stmt->execute([$token]);
        return $stmt->fetchObject();
    }

}
