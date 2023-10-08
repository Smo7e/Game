<?php

class Answer
{
    static $CODE = array(
        '404' => 'not Found',
        '469' => 'param method not setted',
        '466' => 'method not found',
        '9000' => 'undefined error',
        '1001' => '-'
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
                'rasult' => 'ok',
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