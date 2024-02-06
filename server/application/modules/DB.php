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
    function getUserByName($name) {
        $query = 'SELECT * FROM users WHERE name=?';
        return $this->preparationQuery($query, [$name])->fetch(PDO::FETCH_OBJ);
    }

    function getUserByLogin($login) {
        $query = 'SELECT * FROM users WHERE login=?';
        return $this->preparationQuery($query, [$login])->fetch(PDO::FETCH_OBJ);
    }

    function getUserByToken($token) {
        $query = 'SELECT * FROM users WHERE token=?';
        return $this->preparationQuery($query, [$token])->fetch(PDO::FETCH_OBJ);
    }

    function addUser($login, $nickname, $password) {
        $query = 'INSERT INTO users (login, name, password ) VALUES (?, ?, ?)';
        $this->preparationQuery($query, [$login, $nickname, $password]);
    }

    function updateToken($userId, $token) {
        $query = 'UPDATE users SET token=? WHERE id=?';
        $this->preparationQuery($query, [$token, $userId]);
    }

    function getItems() {
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
            WHERE m.created >= DATE_SUB(NOW(), INTERVAL 1 DAY)
            ORDER BY m.created ASC';
        return $this->preparationQuery($query, [])->fetchAll(PDO::FETCH_OBJ);
    }

    function getFriends($userId) {
        $selectQuery = 'SELECT `friends` FROM `users` WHERE `id` = ?;';
        return $this->preparationQuery($selectQuery, [$userId])->fetch(PDO::FETCH_ASSOC);
    }

    function addFriend($userId, $friendId, $currentFriends) {
        $currentFriends[] = (int) $friendId;
        $updateQuery = 'UPDATE `users` SET `friends` = ? WHERE `id` = ?;';
        $this->preparationQuery($updateQuery, [json_encode($currentFriends), $userId]);
    }

    function updateChatHash($hash) {
        $query = 'UPDATE game SET chat_hash=? WHERE id=1';
        $this->preparationQuery($query, [$hash]);
    }

    function updateGamersHash($hash) {
        $query = 'UPDATE game SET gamers_hash=? WHERE id=1';
        $this->preparationQuery($query, [$hash]);
    }
    function updateMobsHash($hash) {
        $query = 'UPDATE game SET mobs_hash=? WHERE id=1';
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
            g.direction AS direction,
            g.hp as hp
        FROM gamers AS g
        INNER JOIN users AS u
        ON u.id=g.user_id';
        return $this->preparationQuery($query, [])->fetchAll(PDO::FETCH_OBJ);
    }
    function getMobs() {
        $query = 'SELECT * FROM mobs';
        return $this->preparationQuery($query, [])->fetchAll(PDO::FETCH_OBJ);
    }

    function move($userId, $direction, $x, $y, $status) {
        $query = 'UPDATE gamers SET direction=?, x=?, y=?, status=? WHERE user_id=?';
        $this->preparationQuery($query, [$direction, $x, $y, $status,$userId]);
    }
    function moveMobs($x, $y) {
        $query = 'UPDATE mobs SET x=?, y=? WHERE id=1';
        $this->preparationQuery($query, [$x, $y]);
    }

    function updatePersonId($userId, $newPersonId) {
        $query = 'UPDATE gamers SET person_id=? WHERE user_id=?';
        $this->preparationQuery($query, [$newPersonId, $userId]);
    }
    function getGamerById($userId){
        $query = 'SELECT * FROM gamers WHERE user_id=?';
        return $this->preparationQuery($query, [ $userId])->fetch(PDO::FETCH_OBJ);
    }

    function deleteGamers(){
        $query = 'TRUNCATE TABLE gamers';
        $this->preparationQuery($query, []);
    }

    function addGamers($userId) {
        $a = json_decode($userId,true);
        $query = 'INSERT INTO gamers (user_id, person_id, status, x, y, direction) VALUES (?, 0, "stand", 0, 0, "down")';
        $this->preparationQuery($query, [$a]);
    }
    function addInvitation($userId,$friendId){
        $query = 'INSERT INTO invitations (id_who,id_to_whom) VALUES (?,?)';
        $this->preparationQuery($query, [$userId, $friendId]);
    }
    function checkInvites($userId){
        $query = 'SELECT id_who FROM invitations WHERE id_to_whom=?';
        return $this->preparationQuery($query, [ $userId])->fetchAll(PDO::FETCH_OBJ);
    }
    function updateHp($userId, $gamerHp){
        $hp = 'SELECT `hp` FROM `gamers` WHERE `user_id` = ?';
        $hp2 =  $this->preparationQuery($hp,[$userId])->fetch(PDO::FETCH_OBJ);
        $query = 'UPDATE gamers SET hp=? WHERE user_id=?';
        $this->preparationQuery($query, [$hp2->hp-5, $userId]);
    }
    
}
