# Описание методов API

## Оглавление
1. [User.php](#1-User.php)
    * 1.1 [Метод login](#11-Метод-login)
    * 1.2 [Метод logout](#12-Метод-logout)
2. [Application.php](#2-Application.php)
    * 2.1 [Функция checkParams](#21-Функция-checkParams)
    * 2.2 [Метод login](#22-Метод-login)
    * 2.3 [Метод logout](#23-Метод-logout)
3. [index.php](#3-index.php)
    * 3.1 [Функция result](#31-Функция-result)


## Домен
```http://studfront```

## Структуры данных
### Корректный ответ Correct
```
{
    result: 'ok',
    data: Data
}
```
### Ответ с ошибкой Error
```
{
    result: 'error',
    error: ErrorDetail
}
```
### ErrorDetail
```
{
    code: number,
    text: string
}
```
### User
```
{
    id: string,
    name: string,
    token: string
}
```

## 1. User.php


### 1.1. Метод login
### адрес
```/?method=login```
### параметры
|Параметр|Тип данных|Комментарий|
|-|-|-|
|login|string|логин юзера|
|hash|string|md5(md5(login+password)+rnd)|
|rnd|number|случайное целое число|

### Успешный ответ
```
Correct => User
```
### Ошибки
```
ErrorDetail = { code: 1001, text: 'missing parameters' } если переданы не все параметры
ErrorDetail = { code: 456, text: 'hash mismatch' } ошибка авторизации
```

### 1.2. Метод logout
### адрес
```/?method=logout```
### параметры
|Параметр|Тип данных|Комментарий|
|-|-|-|
|token|string|авторизационный токен юзера|

### Успешный ответ
```
Correct => true
```
### Ошибки
```
ErrorDetail = { code: 400, text: 'token not found' } если токен не передан
```


## 2. Application.php

### 2.1. Функция checkParams
### параметры
|Параметр|Тип данных|Комментарий|
|-|-|-|
|любой|различный|переменное количество аргументов|

### Успешный ответ
```
Correct => true
```
### Ошибки
```
ErrorDetail = { code: 1001, text: 'missing parameters' } если параметры не переданы
ErrorDetail = { code: 598, text: 'arguments passed incorrectly' } не верно передан аргумент
```

### 2.2. Метод login
### параметры
|Параметр|Тип данных|Комментарий|
|-|-|-|
|params|string|параметр пришедший по ссылке|

### Успешный ответ
```
Correct => true
```
### Ошибки
```
ErrorDetail = { code: 1001, text: 'missing parameters' } если недостаёт параметров
```

### 2.3. Метод logout
### параметры
|Параметр|Тип данных|Комментарий|
|-|-|-|
|params|string|параметр пришедший по ссылке|

### Успешный ответ
```
Correct => User
```
### Ошибки
```
ErrorDetail = { code: 400, text: 'token not found' } если токен не передан
```




## 3. index.php

### 3.1. Функция result

### параметры
|Параметр|Тип данных|Комментарий|
|-|-|-|
|params|string|параметр пришедший по ссылке|

### Успешный ответ
```
Correct => login
Correct => logout
```
### Ошибки
```
ErrorDetail = { code: 466, text: 'method not found' }  если метод не найден
ErrorDetail = { code: 469, text: 'param method not setted' } если параметры не определены

```
