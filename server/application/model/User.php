<?php

namespace model;

class User implements \JsonSerializable
{
    private string $id;
    private string $email;
    private string $password;
    private string $token;

    /**
     * @param string $id
     * @param string $email
     * @param string $password
     * @param string $token
     */
    public function __construct()
    {
        $this->id = "";
        $this->email = "";
        $this->password = "";
        $this->token = "";
    }

    public function jsonSerialize(): mixed
    {
        return [
            "id" => $this->id,
            "token" => $this->token,
            "email" => $this->email,
        ];
    }


    public function __toString()
    {
        return $this->id . " " . $this->email . " " . $this->password . " " . $this->token;
    }


    public function getId(): string
    {
        return $this->id;
    }

    public function setId(string $id): void
    {
        $this->id = $id;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): void
    {
        $this->email = $email;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): void
    {
        $this->password = $password;
    }

    public function getToken(): string
    {
        return $this->token;
    }

    public function setToken(string $token): void
    {
        $this->token = $token;
    }

}