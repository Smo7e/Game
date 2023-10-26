-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Окт 26 2023 г., 15:15
-- Версия сервера: 10.3.22-MariaDB
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `item`
--

-- --------------------------------------------------------

--
-- Структура таблицы `item`
--

CREATE TABLE `item` (
  `id` int(7) NOT NULL,
  `thing` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kind` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `place` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `boost` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `item`
--

INSERT INTO `item` (`id`, `thing`, `kind`, `place`, `image`, `boost`) VALUES
(1, 'пиво', 'расходник', 'багетница', '-', 0),
(2, 'сосиска в тесте', 'расходник', 'багетница', '-', 0),
(3, 'айфон', 'гаджет', 'программирование', '-', 0),
(4, 'спортивки', 'одежда', 'физра', '-', 0),
(5, 'энергос', 'расходник', 'багетница', '-', 0),
(6, 'учебник', 'книга', 'программирование, русский язык, ', '-', 0),
(7, 'сигареты', 'расходник', 'багетница', '-', 0),
(8, 'Кофта “Stone Island” ', 'одежда', 'физра', '-', 0),
(9, 'калькулятор', 'гаджет', 'математика', '-', 0),
(10, 'словарь', 'книга', 'Русский язык, Английский язык', '-', 0),
(11, 'ноутбук', 'гаджет', 'математика, программирование', '-', 0),
(12, '-', '-', '-', '-', 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `item`
--
ALTER TABLE `item`
  MODIFY `id` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
