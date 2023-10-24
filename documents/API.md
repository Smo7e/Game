# Описание методов API

## Оглавление

## Домен
**http://studentfront**

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
    soname: string,
    token: string
}
```


## Метод login
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

## Метод logout
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


## Метод result
### адрес
```/?method=result```
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


## Метод checkParams
### адрес
```/?method=checkParams```
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
Error => false 
```


## Метод logout(Application)
### адрес
```/?method=logout```
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


## Метод login(Application)
### адрес
```/?method=login```
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
