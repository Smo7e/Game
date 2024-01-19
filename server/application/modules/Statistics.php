<?php

class Statistics {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getKills($playerId) {
        return $this->getStatistic($playerId, 'kills');
    }

    public function getDeath($playerId) {
        return $this->getStatistic($playerId, 'death');
    }

    public function getExperience($playerId) {
        return $this->getStatistic($playerId, 'experience');
    }

    public function getDamage($playerId) {
        return $this->getStatistic($playerId, 'damage');
    }

    public function playerKills($playerId) {
        $this->updateStatistic($playerId, 'kills');
    }

    public function playerDies($playerId) {
        $this->updateStatistic($playerId, 'death');
    }

    public function playerGainsExperience($playerId) {
        $this->updateStatistic($playerId, 'experience');
    }

    public function playerDealsDamage($playerId) {
        $this->updateStatistic($playerId, 'damage');
    }

    private function getStatistic($playerId, $statistic) {
        $query = "SELECT $statistic FROM statistics WHERE id = $playerId";
        $result = $this->db->query($query);

        if ($result) {
            $row = $result->fetch_assoc();
            return ($row) ? $row[$statistic] : 0;
        } else {
            return array(false,9000);

        }
    }

    private function updateStatistic($playerId, $statistic) {
        $query = "UPDATE statistics SET $statistic = $statistic + 1 WHERE id = $playerId";
        $result = $this->db->query($query);

        if (!$result) {
            return array(false,9000);

        }
    }
}


