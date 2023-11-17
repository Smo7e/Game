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

    function preparationQuery($query, $arr){
        $stmt = $this->db->prepare($query);
        $stmt->execute($arr);
        return $stmt;
    }

    function getPersons($token) {
        $query = 'SELECT * FROM persons';
        $stmt = $this->db->query($query);
        return $stmt->fetchAll(PDO::FETCH_OBJ);
    }

    function getUserById($id) {
        $query = 'SELECT * FROM users WHERE id=?';
        return $this->preparationQuery($query, [$id])->fetch(PDO::FETCH_OBJ);
    }

    function getUserByLogin($login) {
        $query = 'SELECT * FROM users WHERE login=?';
        return $this->preparationQuery($query, [$login])->fetch(PDO::FETCH_OBJ);
    }

    function getUserByToken($token) {
        $query = 'SELECT * FROM users WHERE token=?';
        return $this->preparationQuery($query, [$token])->fetch(PDO::FETCH_OBJ);
    }

    function addUser($login, $password, $nickname) {
        $query = 'INSERT INTO users (login, password, name) VALUES (?, ?, ?)';
        $this->preparationQuery($query, [$login, $password, $nickname]);
    }

    function updateToken($userId, $token) {
        $query = 'UPDATE users SET token=? WHERE id=?';
        $stmt = $this->db->prepare($query);
        $stmt->execute([$token, $userId]);
    }
}
