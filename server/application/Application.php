<?php

require_once('application\modules\DB.php');
require_once('application\modules\Chat.php');
require_once('application\modules\User.php');
require_once('application\modules\Game.php');

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
        $personName = $params['personName'];
        $personId = $params['personId'];
        $imageId = $params['imageId'];
        if ($personName && $personId && $imageId) {
            $personData = $this->db->getPersonByParams($personName, $personId, $imageId);
            if ($personData) {
                return $personData;
                }
            }
        return array(false, 1012);
        }
    }