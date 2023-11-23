<?php
class Chat {
    private $db;

    function __construct($db) {
        $this->db = $db;
    }

    function sendMessage($userId, $message) {
        $this->db->sendMessage($userId, $message);
        $hash = md5(rand(0, 100000));
        $this->db->updateChatHash($hash);
        return true;
    }

    function getMessages($oldHash) {
        $hashes = $this->db->getHashes();
        if ($hashes->chat_hash === $oldHash) {
            return true;
        }
        $messages = $this->db->getMessages();
        return array(
            'messages' => $messages,
            'hash' => $hashes->chat_hash
        );
    }

}