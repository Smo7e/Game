<?php
class User
{
    function __constructor($bd)
    {
        $this->$bd = $bd;
    }
    function login($login, $password)
    {
        if ($login === 'vasya' && $password === '123') {
            return array('name' => 'Vasya', 'soname' => 'Pupkin', 'id' => 12);
        }
    }
}