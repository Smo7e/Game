<?php

namespace repository;

use http\Encoding\Stream;
use model\User;
use PDO;

require_once('application/model/User.php');

class UserRepository
{
    private DB $db;

    public function __construct(DB $db)
    {
        $this->db = $db;
    }

    public function login(string $login, string $password, string $token)
    {
        $sql = "UPDATE users SET token = :token WHERE login = :login AND password = :password
                RETURNING id, login, password, email, token";

        $stmt = $this->db->getDb()->prepare($sql);

        $stmt->bindParam(":login", $login);
        $stmt->bindParam(":password", $password);
        $stmt->bindParam(":token", $token);


        $stmt->execute();

        $row = $stmt->fetch();

        $user = new User();
        $user->setId($row["id"]);
        $user->setEmail($row["email"]);
        $user->setPassword($row["password"]);
        $user->setToken($row["token"]);

        return $user;
    }

    public function register(string $login, string $password, string $email)
    {
        $sql = "INSERT INTO users (email, login, password) VALUES (:email, :login, :password) RETURNING id, email, login, password";

        $stmt = $this->db->getDb()->prepare($sql);

        $stmt->bindParam(":login", $login);
        $stmt->bindParam(":password", $password);
        $stmt->bindParam(":email", $email);

        $stmt->execute();

        $row = $stmt->fetch();

        $user = new User();
        $user->setId($row["id"]);
        $user->setEmail($row["email"]);
        $user->setPassword($row["password"]);

        return $user;
    }

    public function logout(string $token)
    {
        $sql = "UPDATE users SET token = NULL WHERE token = :token RETURNING id, email, login";

        $stmt = $this->db->getDb()->prepare($sql);

        $stmt->bindParam("token", $token);

        $stmt->execute();

        $row = $stmt->fetch();

        $user = new User();
        $user->setId($row["id"]);
        $user->setEmail($row["email"]);
        return $user;
    }

    public function isUser(string $token)
    {
        $sql = "SELECT id FROM users WHERE token = :token";

        $stmt = $this->db->getDb()->prepare($sql);

        $stmt->bindParam("token", $token);

        $stmt->execute();

        $row = $stmt->fetch();

        $user = new User();
        $user->setId($row["id"]);
        return $user;
    }

}