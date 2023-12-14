<?php
class DB {
    private $db;

    function __construct($config) {
        extract($config);

        $this->db = new PDO("mysql:host=$host;port=$port;dbname=$db", $user, $pass);

    }

    function __destruct() {
        $this->db = null;
    }

    private function preparationQuery($query, $arr = []) {
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
        $this->preparationQuery($query, [$token, $userId]);
    }

    function getItems(){
        $query = 'SELECT * FROM items';
        $stmt = $this->db->query($query);
        return $stmt->fetchAll(PDO::FETCH_OBJ);
    }

    function sendMessage($userId, $message) {
        $query = 'INSERT INTO messages (user_id, message, created) VALUES (?, ?, now())';
        $this->preparationQuery($query, [$userId, $message]);
    }

    function getMessages() {
        $query = 'SELECT 
                m.message AS message,
                u.name AS name
            FROM messages AS m
            INNER JOIN users AS u
            ON u.id=m.user_id
            ORDER BY m.created DESC';
        return $this->preparationQuery($query, [])->fetchAll(PDO::FETCH_OBJ);
    }

    function updateChatHash($hash) {
        $query = 'UPDATE game SET chat_hash=? WHERE id=1';
        $this->preparationQuery($query, [$hash]);
    }

    function updateGamersHash($hash) {
        $query = 'UPDATE game SET gamers_hash=? WHERE id=1';
        $this->preparationQuery($query, [$hash]);
    }

    function updateTimestamp($updateTimestamp) {
        $query = 'UPDATE game SET update_timestamp=? WHERE id=1';
        $this->preparationQuery($query, [$updateTimestamp]);
    }

    function getHashes() {
        $query = 'SELECT * FROM game WHERE id=1';
        return $this->preparationQuery($query, [])->fetch(PDO::FETCH_OBJ);
    }

    function getGamers() {
        $query = 'SELECT 
            u.name AS name,
            g.person_id AS person_id,
            g.status AS status,
            g.x AS x,
            g.y AS y,
            g.direction AS direction
        FROM gamers AS g
        INNER JOIN users AS u
        ON u.id=g.user_id';
        return $this->preparationQuery($query, [])->fetchAll(PDO::FETCH_OBJ);
    }

    function move($userId, $direction, $x, $y) {
        $query = 'UPDATE gamers SET direction=?, x=?, y=? WHERE user_id=?';
        $this->preparationQuery($query, [$direction, $x, $y, $userId]);
    }
}
