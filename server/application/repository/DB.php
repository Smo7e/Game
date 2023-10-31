<?php

namespace repository;

use PDO;

class DB
{
    private PDO $db;

    public function __construct()
    {
        $this->db = new PDO('pgsql:host=postgres-db;port=5432;dbname=postgres;user=postgres;password=postgres');
    }

    public function getDb(): PDO
    {
        return $this->db;
    }

}