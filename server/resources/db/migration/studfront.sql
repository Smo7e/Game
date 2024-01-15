-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Дек 14 2023 г., 19:06
-- Версия сервера: 10.4.12-MariaDB
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `studfront`
--

-- --------------------------------------------------------

--
-- Структура таблицы `game`
--

CREATE TABLE `game` (
  `id` int(11) NOT NULL,
  `version` varchar(256) NOT NULL,
  `chat_hash` varchar(256) NOT NULL,
  `gamers_hash` varchar(256) NOT NULL,
  `items_hash` varchar(256) NOT NULL,
  `update_timestamp` int(11) NOT NULL DEFAULT 0,
  `update_timeout` int(11) NOT NULL DEFAULT 300
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `game`
--

INSERT INTO `game` (`id`, `version`, `chat_hash`, `gamers_hash`, `items_hash`, `update_timestamp`, `update_timeout`) VALUES
(1, '1.0.0', '8b4c78eac40944896eaef63ea53a908e', 'f77db2fe395e0666297c622a93603b76', '', 1702365760, 300);

-- --------------------------------------------------------

--
-- Структура таблицы `gamers`
--

CREATE TABLE `gamers` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `person_id` int(11) NOT NULL,
  `status` varchar(256) NOT NULL,
  `x` int(11) NOT NULL DEFAULT 0,
  `y` int(11) NOT NULL DEFAULT 0,
  `direction` varchar(256) NOT NULL DEFAULT 'down'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `gamers`
--

INSERT INTO `gamers` (`id`, `user_id`, `person_id`, `status`, `x`, `y`, `direction`) VALUES
(1, 1, 1, 'stand', 0, 2, 'walk'),
(2, 4, 1, 'walk', 22, 11, 'walk');

-- --------------------------------------------------------

--
-- Структура таблицы `gamers_items`
--

CREATE TABLE `gamers_items` (
  `id` bigint(20) NOT NULL,
  `item_id` bigint(20) DEFAULT NULL,
  `gamer_id` bigint(20) DEFAULT NULL,
  `status` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `x` float DEFAULT NULL,
  `y` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `gamers_properties`
--

CREATE TABLE `gamers_properties` (
  `id` bigint(20) NOT NULL,
  `gamer_id` bigint(20) DEFAULT NULL,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `items`
--

CREATE TABLE `items` (
  `id` bigint(7) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `items`
--

INSERT INTO `items` (`id`, `name`, `type`, `location`, `image`, `description`) VALUES
(1, 'Пиво', 'Расходник', 'Багетница', 'https://drive.google.com/uc?id=1txKPVJl2qxHKfoTPNLb2Gof4Sb2_CJEp', 'Восстанавливает здоровье на 15 единиц, на время боя увеличивает максимальное здоровье на 20 единиц'),
(2, 'Сосиска в тесте', 'Расходник', 'Багетница', 'https://drive.google.com/uc?id=1_Oh0szf4vo2Uadnup78RSiPBVqOceEHD', 'Восстанавливает здоровье на 15 единиц'),
(3, 'Айфон', 'Гаджет', 'Программирование', 'https://drive.google.com/uc?id=1_1JOzhHE-A07iss6PFHKy6vSVpugUL0q', 'Увеличивает урон по “Программированию” на 15 единиц'),
(4, 'Спортивки', 'Одежда', 'Физра', 'https://drive.google.com/uc?id=1NVcwa-CUL0unvHG2Ai3dRB4unnqtxdK7', 'Увеличивает постоянное здоровье на 15 единиц'),
(5, 'Энергос', 'Расходник', 'Багетница', 'https://drive.google.com/uc?id=1zOmnG7A1hi2swN4PRdhb5zP_phY0NOec', 'Восстанавливает здоровье на 15 единиц, на время боя увеличивает максимальное здоровье на 20 единиц'),
(6, 'Учебник', 'Расходник', 'Программирование, русский язык, математика, английский язык', 'https://drive.google.com/uc?id=1CcxSd3GCb92Krr4Of_iHkR82-iqm1PRV', 'Увеличивает урон по всем парам кроме “Физра” на 5 единиц'),
(7, 'Сигареты', 'Расходник', 'Багетница', 'https://drive.google.com/uc?id=1w8Rg20Ee_N4WXohJtQ6wclGg3mXmjPzX', 'Уменьшает текущее здоровье на 20, но на время боя увеличивает урон каждой атаки на 10 '),
(8, 'Кофта “Stone Island” ', 'Одежда', 'Физра', 'https://drive.google.com/uc?id=19xKs-LkbtI47TDBA22StocB-nvzkMaAv', 'Увеличивает максимальное здоровье на 15'),
(9, 'Калькулятор', 'Гаджет', 'Математика', 'https://drive.google.com/uc?id=14HEzCbJRFXuc9p0AjPwlTK2pp3j43dCo', 'Увеличивает урон по “Математике” на 15 единиц'),
(10, 'Словарь', 'Книга', 'Русский язык, английский язык', 'https://drive.google.com/uc?id=1Sms2iIUvf2aN3-EHdLz8-jMTyJLHhom0', 'Увеличивает урон по “Русскому языку” и “Английскому языку” на 10 единиц'),
(11, 'Ноутбук', 'Гаджет', 'Математика, программирование', 'https://drive.google.com/uc?id=1AmXmAyEcvSGUK0gL70VDyx_nLIhT7GQI', 'Увеличивает урон по “Программированию” и “Математике” на 10 единиц'),
(12, 'Багет', 'Расходник', 'Багетница', 'https://drive.google.com/uc?id=17LFVpq1h5V_HrYuHz6zbYpK3rcXpPBIY', ' Восстанавливает здоровье на 25 единиц');

-- --------------------------------------------------------

--
-- Структура таблицы `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `message` varchar(256) NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `messages`
--

INSERT INTO `messages` (`id`, `user_id`, `message`, `created`) VALUES
(1, 4, 'hahahha', '2023-11-14 10:29:24'),
(2, 1, 'hihihi', '2023-11-14 10:29:53'),
(3, 4, 'hohohohohooooo', '2023-11-14 10:33:36'),
(4, 4, 'иди в попу!', '2023-11-14 11:08:25'),
(5, 4, 'сам иди', '2023-11-29 08:27:05'),
(6, 1, 'ща втащу!', '2023-11-29 08:27:13'),
(7, 1, 'fdfgdfgsdg', '2023-12-12 11:17:54'),
(8, 1, 'rtyr546', '2023-12-12 11:18:01'),
(9, 4, '1111', '2023-12-12 11:20:28');

-- --------------------------------------------------------

--
-- Структура таблицы `persons`
--

CREATE TABLE `persons` (
  `id` bigint(20) NOT NULL,
  `hp` float DEFAULT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `rangs`
--

CREATE TABLE `rangs` (
  `id` bigint(20) NOT NULL,
  `name` varchar(120) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `experience` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `room`
--

CREATE TABLE `room` (
  `id` bigint(20) NOT NULL,
  `width` int(11) DEFAULT NULL,
  `height` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `room_exits`
--

CREATE TABLE `room_exits` (
  `id` bigint(20) NOT NULL,
  `room_id` bigint(20) DEFAULT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `goto_id` bigint(20) DEFAULT NULL,
  `status` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `login` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `name` varchar(256) NOT NULL,
  `token` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `name`, `token`) VALUES
(1, 'vasya', '4a2d247d0c05a4f798b0b03839d94cf0', 'Vasya Ivanoff', '41e3fe36008ef0420e50c42547c1568b'),
(2, 'petya', '321', 'Petya Petroff', NULL),
(4, 'masha', 'ebf191604221bd6bc7af3f959d41b5eb', 'Masha', '826c181183abdb683aaeb372c5d8da1c'),
(5, '1', 'c51ce410c124a10e0db5e4b97fc2af39', '2', NULL),
(6, '12', '78bf4f00f81a36b57950e239f1df91c1', '12', NULL),
(7, '123', '4297f44b13955235245b2497399d7a93', '123', NULL),
(8, 'wef', 'b1444ebf2a132112bfaec62ed475ef82', 'ASFfvD', NULL),
(11, 'vasya3', 'bbdfc6d64804b6c634d94e52f05505ca', '1231', NULL);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `gamers`
--
ALTER TABLE `gamers`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `gamers_items`
--
ALTER TABLE `gamers_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `item_id` (`item_id`),
  ADD KEY `gamer_id` (`gamer_id`);

--
-- Индексы таблицы `gamers_properties`
--
ALTER TABLE `gamers_properties`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gamer_id` (`gamer_id`);

--
-- Индексы таблицы `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `persons`
--
ALTER TABLE `persons`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `rangs`
--
ALTER TABLE `rangs`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `room_exits`
--
ALTER TABLE `room_exits`
  ADD PRIMARY KEY (`id`),
  ADD KEY `room_id` (`room_id`),
  ADD KEY `goto_id` (`goto_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`login`),
  ADD KEY `login_2` (`login`),
  ADD KEY `login_3` (`login`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `game`
--
ALTER TABLE `game`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `gamers`
--
ALTER TABLE `gamers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `gamers_items`
--
ALTER TABLE `gamers_items`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `gamers_properties`
--
ALTER TABLE `gamers_properties`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `items`
--
ALTER TABLE `items`
  MODIFY `id` bigint(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `persons`
--
ALTER TABLE `persons`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `room`
--
ALTER TABLE `room`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `room_exits`
--
ALTER TABLE `room_exits`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `room_exits`
--
ALTER TABLE `room_exits`
  ADD CONSTRAINT `room_exits_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`),
  ADD CONSTRAINT `room_exits_ibfk_2` FOREIGN KEY (`goto_id`) REFERENCES `room` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
