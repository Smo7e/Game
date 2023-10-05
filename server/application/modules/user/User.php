<?php
class User
{
    function __construct($db)
    {
        $this->db = $db;
    }
    function login($login, $password)
    {
        if ($login === 'vasya' && $password === '123') {
            return array('name' => 'Vasya', 'soname' => 'Pupkin', 'id' => 12);
        }
        return array(false, 1002);
    }
}