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

    function addUser($login, $password, $nickname) {
        $query = 'INSERT INTO users (login, password, name) VALUES (:login, :password, :name)';
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':login', $login);
        $stmt->bindParam(':password', $password);
        $stmt->bindParam(':name', $nickname);
        $stmt->execute();
    }
    function updateToken($userId, $token) {
        $query = 'UPDATE users SET token=? WHERE id=?';
        $stmt = $this->db->prepare($query);
        $stmt->execute([$token, $userId]);
    }
}