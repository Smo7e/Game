<?php

class Answer {
    static $CODE = array(
        '400' => 'токен не найден',
        '401' => 'no character data',
        '404' => 'не найдено',
        '455' => 'неверный логин',
        '456' => 'неверный логин или пароль',
        '469' => 'параметр метода не задан',
        '466' => 'метод не найдет',
        '487' => 'этот пользователь уже существует',
        '598' => 'аргументы переданы неправильно',
        '1001' => 'Пожалуйста, проверьте свой пароль и имя аккаунта и попробуйте снова.',
        '1002' => 'Недопустимый токен',
        '1012' => 'Введите логин и пароль',
        '9000' => 'Неопределенная ошибка'
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