<?php
class Game {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    private function getGamers($userId) {
        return $this->db->getGamers();
    }
    private function getMobs() {
        return $this->db->getMobs();
    }

    private function getItems($userId) {
        return $this->db->getItems();
    }

    function updateScene($updateTimestamp, $updateTimeout) {
        if (time() - $updateTimestamp >= $updateTimeout) {
            $this->db->updateTimestamp(time());

            
            // удалить мёртвых игроков
            // если у игрока статус "умер" - удалить его из БД

            // передвинуть мобов
            // передвинуть моба к ближайшему игроку
            // или воспользоваться либой easystar

            // переместить пули мобов
            // переместить пули мобов

            // воткнуть пули мобов в стены или в игроков
            // если пуля куда-нибудь воткнулась, посчитать урон окружающим

            // нанести урон игрокам
            // из ХП игрока вычесть урон в зависимости от расстояния попадания пули

            // стукнувшиеся пули мобов удалить
            //...

            // умершему игроку выставить статус "умер"
            // выставить игроку статус, чтобы на него могли отреагировать клиенты

            // обновить хеши игроков, мобов и пуль
        }
    }

    function getScene($userId, $hashGamers, $hashItems, $hashMobs, $hashMap) {
        $result = array(
            'gamers' => null,
            'items' => null,
            'mobs' => null,
            'map' => null
        );
        $hashes = $this->db->getHashes();

        $this->updateScene($hashes->update_timestamp, $hashes->update_timeout);
        // проверяем хеш по игрокам
        if ($hashes->gamers_hash !== $hashGamers) {
            $result['gamers'] = $this->getGamers($userId);
            $result['hashGamers'] = $hashes->gamers_hash;
        }

        // проверяем хеш по предметам
        if ($hashes->items_hash !== $hashItems) {
            $result['items'] = $this->getItems($userId);
            $result['hashItems'] = $hashes->items_hash;
        }

        if ($hashes->mobs_hash !== $hashMobs) {
            $result['mobs'] = $this->getMobs();
            $result['hashMobs'] = $hashes->mobs_hash;
        }

        // проверяем хеш по карте
        //...
        return $result;
    }
    function updateHp($gamerName, $gamerHp){
        $user = $this->db->getUserByName($gamerName);
        $hash = md5(rand(0, 100000));
        $this->db->updateGamersHash($hash);
        $this->db->updateHp($user->id, $gamerHp);
    }

    function move($userId, $direction, $x, $y, $status) {
        $this->db->move($userId, $direction, $x, $y, $status);
        $hash = md5(rand(0, 100000));
        $this->db->updateGamersHash($hash);
        return true;
    }
    function moveMobs($x, $y) {
        $this->db->moveMobs($x, $y);
        $hash = md5(rand(0, 100000));
        $this->db->updateMobsHash($hash);
        return true;
    }
}
