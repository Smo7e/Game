<?php

class Answer
{
    static $CODE = array(
        '400' => 'token not found',
        '404' => 'not Found',
        '456'=>'hash mismatch',
        '469' => 'param method not setted',
        '466' => 'method not found',
        '598' => 'arguments passed incorrectly',
        '1001' => 'missing parameters',
        '9000' => 'undefined error'
    );
    static function response($data)
    {

        if ($data) {
            if (count($data) === 2 && !$data[0]) {
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