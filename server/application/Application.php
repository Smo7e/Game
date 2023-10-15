<?php

require_once('./modules/DB.php');
require_once('./modules/Chat.php');
require_once('./modules/User.php');
require_once('./modules/Game.php');

class Application {
    private $user = null;
    private $chat = null;
    private $game = null;
    private $db = null;

    function __construct() {
        $db = new DB();
        $this->user = new User($db);
        $this->chat = new Chat();
        $this->game = new Game();
        }

    function login($params) {
        $login = $params['login'];
        $hash = $params['hash'];
        $rnd = $params['rnd'];
        if ($login && $hash && $rnd) {
            return $this->user->login($login, $hash, $rnd);
            }
        return array(false, 1001);
        }

    function getPerson($params) {
        $personId = $params['personId']; // Передаётся ID нужного персонажа
        if ($personId) {
            $personData = $this->db->getPersonById($personId); // Получение данных о персонаже из базы данных // getPersonById - соответствующий метод в базе данных возвращающий данные о персонаже
            if ($personData) {
                return $personData;
                }
            }
        return $personId;
        }
    }