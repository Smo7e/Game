<?php
class DB {
    private $db;

    function __construct() {
        $user = 'root';
        $pass = '';
        $db = 'studfront';
        $host = '127.0.0.1';
        $port = 3306;
        $this->db = new PDO("mysql:host=$host;port=$port;dbname=$db", $user, $pass);
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
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    function getUserByLogin($login) {
        $query = 'SELECT * FROM users WHERE login=?';
        $stmt = $this->db->prepare($query);
        $stmt->execute([$login]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    function getUserByToken($token) {
        $query = 'SELECT * FROM users WHERE token=?';
        $stmt = $this->db->prepare($query);
        $stmt->execute([$token]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

}
