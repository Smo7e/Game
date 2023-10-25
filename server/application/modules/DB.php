<?php
class DB {
    private $db;

    function __construct() {
        $username = 'mysql';
        $password = 'mysql';
        $db = 'pdo_example';
        $host = 'server';

        $dsn = 'mysql:host='.$host.';dbname'.$db.';charset=utf8;';

        $this->db = new PDO($dsn, $username, $password);
    }


    function getPersons($token) {
        if ($token) {
            $query = 'SELECT * FROM persons';
            $stmt = $this->db->prepare($query);
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

}