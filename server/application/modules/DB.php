<?php
class DB {
    private $db;

    function __construct() {
        $username = 'mysql';
        $password = 'mysql';
        $database = 'studfront';
        $host = 'server';

        $dsn = 'mysql:host='.$host.';dbname='.$database.';charset=utf8;';

        $this->db = new PDO($dsn, $username, $password);

    }


    function getPersons($token) {
        if ($token) {
            $query = 'SELECT * FROM person';
            $stmt = $this->db->query($query);
            if ($stmt) {
                $persons = $stmt->fetchAll(PDO::FETCH_ASSOC);
                return $persons;
            } else {
                return array(false, 401);
            }
        } else {
            return array(false, 1002);
        }
    }

    function getUserById($id) {
        $query = 'SELECT * FROM users WHERE id=?';
        $stmt = $this->db->prepare($query);
        $stmt->execute([$id]);
        return $stmt->fetchObject();
    }

    function getUserByLogin($login) {
        $query = 'SELECT * FROM users WHERE login=?';
        $stmt = $this->db->prepare($query);
        $stmt->execute([$login]);
        return $stmt->fetchObject();
    }

    function getUserByToken($token) {
        $query = 'SELECT id FROM users WHERE token=?';
        $stmt = $this->db->prepare($query);
        $stmt->execute([$token]);
        return $stmt->fetchObject();
    }

}
