<?php

class Answer {
    static $CODE = array(
        '400' => 'token not found',
        '401' => 'no character data',
        '404' => 'not Found',
        '455' => 'user not exists',
        '456' => 'hash mismatch',
        '469' => 'param method not setted',
        '466' => 'method not found',
        '487' => 'this user already exists',
        '598' => 'arguments passed incorrectly',
        '1001' => 'missing parameters',
        '1002' => 'invalid token',
        '9000' => 'undefined error'
    );

    static function response($data) {
        if ($data) {
            if (count($data) === 2 && $data[0] === false) {
                $code = $data[1];
                return array(
                    'result' => 'error',
                    'error' => array(
                        'code' => $code,
                        'text' => self::$CODE[$code]
                    )
                );
            }
            return array(
                'result' => 'ok',
                'data' => $data
            );
        }
        $code = 9000;
        return array(
            'result' => 'error',
            'error' => array(
                'code' => $code,
                'text' => self::$CODE[$code]

            )
        );
    }
}