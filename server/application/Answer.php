<?php

class Answer {
    static $CODE = array(
        '400' => 'Токен не найден',
        '404' => 'Не найдено',
        '455' => 'Неверный логин',
        '456' => 'Неверный логин или пароль',
        '469' => 'Параметр метода не задан',
        '466' => 'Метод не найден',
        '487' => 'Этот пользователь уже существует',
        '598' => 'Аргументы переданы неправильно',
        '1001' => 'Пожалуйста, проверьте свой пароль и имя',
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