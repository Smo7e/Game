<?php
class DB {
    private $db;

    function __construct($config) {
        $user = $config["user"];
        $pass = $config["pass"];
        $db = $config["db"];
        $host = $config["host"];
        $port = $config["port"];
        
        try {
            $this->db = new PDO("mysql:host=$host;port=$port;dbname=$db", $user, $pass);
        }
    }
    
    function __destruct() {
        $this->db = null;
    }


    function getPersons($token) {
        $query = 'SELECT * FROM persons';
        $stmt = $this->db->query($query);
        return $stmt->fetchAll(PDO::FETCH_OBJ);
    }

    function getUserById($id) {
        $query = 'SELECT * FROM users WHERE id=?';
        $stmt = $this->db->prepare($query);
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_OBJ);
    }

    function getUserByLogin($login) {
        $query = 'SELECT * FROM users WHERE login=?';
        $stmt = $this->db->prepare($query);
        $stmt->execute([$login]);
        return $stmt->fetch(PDO::FETCH_OBJ);
    }

    function getUserByToken($token) {
        $query = 'SELECT * FROM users WHERE token=?';
        $stmt = $this->db->prepare($query);
        $stmt->execute([$token]);
        return $stmt->fetch(PDO::FETCH_OBJ);
    }

    function updateToken($userId, $token) {
        $query = 'UPDATE users SET token=? WHERE id=?';
        $stmt = $this->db->prepare($query);
        $stmt->execute([$token, $userId]);
    }
}