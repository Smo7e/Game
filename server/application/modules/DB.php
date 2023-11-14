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
        $query = 'INSERT INTO users (login, password, name) VALUES (?, ?, ?)';
        $stmt = $this->db->prepare($query);
        $stmt->execute([$login, $password, $nickname]);
    }

    function updateToken($userId, $token) {
        $query = 'UPDATE users SET token=? WHERE id=?';
        $stmt = $this->db->prepare($query);
        $stmt->execute([$token, $userId]);
    }

    function sendMessage($userId, $message) {
        $query = 'INSERT INTO messages (user_id, message, created) VALUES (?, ?, now())';
        $stmt = $this->db->prepare($query);
        $stmt->execute([$userId, $message]);
    }

    function getMessages() {
        $query = 'SELECT 
                m.message AS message,
                u.name AS name
            FROM messages AS m
            INNER JOIN users AS u
            ON u.id=m.user_id
            ORDER BY m.created DESC';
        $stmt = $this->db->prepare($query);
        $stmt->execute([]);
        return $stmt->fetchAll(PDO::FETCH_OBJ);
    }

    function updateChatHash($hash) {
        $query = 'UPDATE game SET chat_hash=? WHERE id=1';
        $stmt = $this->db->prepare($query);
        $stmt->execute([$hash]);
    }

    function getHashes() {
        $query = 'SELECT * FROM game WHERE id=1';
        $stmt = $this->db->prepare($query);
        $stmt->execute([]);
        return $stmt->fetch(PDO::FETCH_OBJ);
    }
}