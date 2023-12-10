<?php

class Answer {
    static $CODE = array(
        '400' => 'Токен не найден',
        '404' => 'Не найдено',
        '455' => 'Пользователь не авторизован',
        '456' => 'Неверный логин или пароль',
        '466' => 'Метод не найден',
        '469' => 'Параметр метода не задан',
        '487' => 'Этот пользователь уже существует',
        '598' => 'Аргументы переданы неправильно',
        '1000' => 'Пожалуйста, проверьте свой логин и пароль',
        '1001' => 'Недостаточно параметров',
        '1002' => 'Недопустимый токен',
        '1012' => 'Введите логин и пароль',
        '1501' => 'Введите пароль и подтверждение пароля',
        '1502' => 'Пароли не совпадают',
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