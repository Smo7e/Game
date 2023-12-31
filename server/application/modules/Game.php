<?php
class Game
{
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    private function getGamers($userId)
    {
        return $this->db->getGamers();
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

    function getScene($userId, $hashGamers, $hashItems, $hashMobs, $hashMap)
    {
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
        //...
        // проверяем хеш по мобам
        //...
        // проверяем хеш по карте
        //...
        return $result;
    }

    function move($userId, $direction, $x, $y)
    {
        $this->db->move($userId, $direction, $x, $y);
        $hash = md5(rand(0, 100000));
        $this->db->updateGamersHash($hash);
        return true;
    }
}
