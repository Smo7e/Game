<?php
class Game {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    private function getGamers($userId) {
        return $this->db->getGamers();
    }

    function getScene($userId, $hashGamers, $hashItems, $hashMobs, $hashMap) {
        $result = array(
            'gamers' => null,
            'items' => null,
            'mobs' => null,
            'map' => null
        );
        $hashes = $this->db->getHashes();
        // проверяем хеш по игрокам
        if ($hashes->gamers_hash !== $hashGamers) {
            $result['gamers'] = $this->getGamers($userId);
            $result['hashGamers'] = $hashes->gamers_hash;
        }
        // проверяем хеш по предметам
        //...
        // проверяем хеш по мобам
        //...
        // проверяем хеш по карте
        //...
        return $result;
    }

    function move($userId, $direction, $x, $y) {
        $this->db->move($userId, $direction, $x, $y);
        $hash = md5(rand(0, 100000));
        $this->db->updateGamersHash($hash);
        return true;
    }

}