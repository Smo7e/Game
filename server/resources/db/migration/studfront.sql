-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Янв 23 2024 г., 06:19
-- Версия сервера: 10.8.4-MariaDB
-- Версия PHP: 7.2.34

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
  `mobs_hash` varchar(256) NOT NULL,
  `update_timestamp` int(11) NOT NULL DEFAULT 0,
  `update_timeout` int(11) NOT NULL DEFAULT 300
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `game`
--

INSERT INTO `game` (`id`, `version`, `chat_hash`, `gamers_hash`, `items_hash`, `mobs_hash`, `update_timestamp`, `update_timeout`) VALUES
(1, '1.0.0', 'f7b7838b7e99419f3517f44296651324', '129b8a294ade36534889cd0553f3e86a', '', 'b60adcb70283fea07596c9a73ddfb899', 1705979558, 300);

-- --------------------------------------------------------

--
-- Структура таблицы `gamers`
--

CREATE TABLE `gamers` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `person_id` int(11) NOT NULL,
  `status` varchar(256) NOT NULL,
  `x` float NOT NULL DEFAULT 0,
  `y` float NOT NULL DEFAULT 0,
  `direction` varchar(256) NOT NULL DEFAULT 'down',
  `hp` int(11) NOT NULL DEFAULT 100
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `gamers`
--

INSERT INTO `gamers` (`id`, `user_id`, `person_id`, `status`, `x`, `y`, `direction`, `hp`) VALUES
(1, 7, 0, 'alive', -0.258235, -3.42907, 'walk', 45);

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
-- Структура таблицы `invitations`
--

CREATE TABLE `invitations` (
  `id` int(11) NOT NULL,
  `id_who` int(11) NOT NULL,
  `id_to_whom` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `invitations`
--

INSERT INTO `invitations` (`id`, `id_who`, `id_to_whom`) VALUES
(5, 7, 4),
(6, 7, 1);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

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
(9, 4, '1111', '2023-12-12 11:20:28'),
(10, 1, 'Hello, this is a test message.', '2024-01-21 16:17:58'),
(11, 1, 'Hello, this is a test message.', '2024-01-21 16:18:42'),
(12, 1, 'Hello, this is a test message.', '2024-01-21 20:52:40'),
(13, 1, '5', '2024-01-21 20:52:45'),
(14, 1, '57654', '2024-01-21 20:52:54');

-- --------------------------------------------------------

--
-- Структура таблицы `mobs`
--

CREATE TABLE `mobs` (
  `id` int(11) NOT NULL,
  `x` float NOT NULL DEFAULT 0,
  `y` float NOT NULL DEFAULT 0,
  `status` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hp` int(11) NOT NULL DEFAULT 120
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `mobs`
--

INSERT INTO `mobs` (`id`, `x`, `y`, `status`, `hp`) VALUES
(1, 7.99018, -21.0582, 'alive', 120);

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
-- Структура таблицы `questions_russian`
--

CREATE TABLE `questions_russian` (
  `id` int(11) NOT NULL,
  `question` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `answer_1` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `answer_2` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `answer_3` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `answer_4` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `correct_answer` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `questions_russian`
--

INSERT INTO `questions_russian` (`id`, `question`, `answer_1`, `answer_2`, `answer_3`, `answer_4`, `correct_answer`) VALUES
(1, 'Отметьте слово, в котором все согласные звуки звонкие', '1) встреча', '2) подвал', '3) дальний', '4) гость', 3),
(2, 'В каком ряду во всех словах ударение падает на второй слог?', '1) эксперт, сняла, начать', '2) обзвонит, доверху, прибыл', '3) заняла, добела, затемно', '4) поняла, кухонный, досуг', 1),
(3, 'В каком ряду не все слова являются синонимами?', '1) влажный, мокрый, промозглый, сырой', '2) жаркий, знойный, палящий, вьюжный', '3) великан, богатырь, гигант, исполин', '4) внешность, вид, наружность, облик', 2),
(4, 'Каким словом можно заменить слово доказательство?', '1) окончание', '2) аргумент', '3) факт', '4) предложение', 2),
(5, 'Подберите антоним к прилагательному в словосочетании «свежий хлеб»', '1) мягкий', '2) чёрствый', '3) старый', '4) белый', 2),
(6, 'Значение какого слова меняется в зависимости от места ударения?', '1) кошки', '2) крошки', '3) кружки', '4) пряжки', 3),
(7, 'В каком ряду неправильно употреблены паронимы?', '1) отборный рис, отборочный тур', '2) практическая работа, практичная обувь', '3) звериное преступление, зверские следы', '4) добротная мебель, добрый человек', 3),
(8, 'Какой тип речи состоит из тезисов, аргументов – доказательств и вывода?', '1) описание', '2) рассуждение', '3) повествование', '4) все типы речи', 2),
(9, 'Отметьте фразеологизм с речевой ошибкой', '1) хлопать ушами', '2) считать ворон', '3) бежать сломив голову', '4) биться об стенку', 3),
(10, 'Определите лексическое значение слова импровизация', '1) музыкальное произведение, сочинённое во время исполнения', '2) воспроизведение с возможной точностью', '3) первое удачное публичное выступление', '4) деятельность на каком-либо поприще', 1),
(11, 'В каком ряду во всех корнях пишется гласная О?', '1) свеча наг…рела, оз…рить счастьем, лёгкое к…сание', '2) покл…няться красоте, сл…жить обязанности, насквозь вым…кнуть', '3) укл…ниться от курса, выр…внить дорожку, р…стительный жир\r\n\r\n', '4) быстро отск…чить, непром…каемый плащ, пл…вники рыбы', 2),
(12, 'Укажите ряд, в котором все пропущенные буквы можно проверить ударением', '1) сп…ши (на урок), выск…чка, об…жал (малыша)', '2) пл…вчиха, посв…тить стихотворение, министерство просв…щения', '3) с…рдечный, запл…тить (долг), поз…лочённый', '4) ум…лять о пощаде, зам…реть, д…льфин', 3),
(13, 'В каком ряду во всех словах пишется Ь?', '1) роскош(ь), пореж(ь)те, рубеж(ь), достич(ь)', '2) желч(ь), вос(ь)мью, съеш(ь)те, наотмаш(ь)', '3) вскач(ь), лиш(ь), фонар(ь)щик, невмоч(ь)', '4) вер(ь)фи, брит(ь)ся, фальш(ь), приготов(ь)те', 2),
(14, 'В каком ряду во всех словах на месте пропуска пишется одна и та же буква?', '1) во …рождение, …делать, во …местить, ра…щелина', '2) и… числять, и…пользовать, ра…пробовать, ра…смешить', '3) во…становить, во…раст, …горяча, …дравствуйте', '4) …дание, …дача, во…клицательный, ра…жигающий', 2),
(15, 'В каком ряду на месте пропусков не пишется И?', '1) след лисиц…, ножниц…', '2) акц…я, лекц…онный материал', '3) ц…тата, ц…трусовые деревья', '4) душистый нарц…сс, получить компенсац…ю', 1),
(16, 'Укажите ряд, в котором все существительные в предложном падеже имеют на конце И', '1) в госпитал.., на кроват.., в тетрад.., о счасть..', '2) о времен.., на площад.., в постел.., в жизн..', '3) в рощ.., на яблон.., в ущель.., в осен..', '4) в плать.., о медвед.., в метел.., в памят..', 2),
(17, 'В каком ряду во всех словах пишется одна и та же буква?', '1) расстила…щаяся по долине, вид…щий насквозь, уверя…щий в своей правоте', '2) беле…щий парус, мысл…щий отвлечённо, недремл…щий глаз', '3) запива…щий лекарство, кол…щееся растение, ворку…щие голуби', '4) жал…щие пчёлы, стро…щийся дом, зна…щий правду', 3),
(18, 'Тип языковых норм, который регулирует выбор вариантов построения словосочетаний и предложений -', '1) морфологический', '2) лексический', '3) стилистический', '4) синтаксический', 4),
(19, 'Какой пример соответствует лексической сочетаемости слов?', '1) одержать поражение', '2) высокая стоимость', '3) оказать внимание', '4) заклятый друг', 2),
(20, 'В каком предложении выделенные слова пишутся слитно?', '1) Надо было (ВО)ВРЕМЯ собрать малину и (В)НАЧАЛЕ августа вырезать сухие кусты.', '2) Очень хотелось, ЧТО(БЫ) всё шло по плану, (ПО)ТОМУ что от этого зависело многое.', '3) Путник устал (ДО)ТОГО, что уже (СО)ВСЕМ обессилел.', '4) Арег согласен (СО)ВСЕМ, что говорит отец, Ара, (НА)ПРОТИВ, с ним не соглашается.', 2),
(21, 'В каком из вариантов правильно указано сказуемое?\r\nО, я как брат обняться с бурей был бы рад.', '1) был бы', '2) обняться был бы рад', '3) был бы рад', '4) рад обняться', 2),
(22, 'Укажите грамматическую основу предложения.\r\nМне необходимо сойти на этой остановке.', '1) мне необходимо', '2) необходимо сойти', '3) необходимо сойти на остановке', '4) мне необходимо сойти', 2),
(23, 'Укажите предложение, в котором определение нужно обособить.', '1) Город задыхался от запаха буйно цветущей белой акации.', '2) На опустевшей платформе блестели длинные полосы дождевой воды.', '3) Резкие голоса увлечённых спором людей нарушали тишину.', '4) Он говорил о кавказской жизни полной дикой красоты.\r\n\r\n', 4),
(24, 'Не является отраслью современной стилистики:', '1) морфологическая стилистика', '2) практическая стилистика', '3) функциональная стилистика', '4) стилистика текста', 1),
(25, ' Укажите фразеологизм, в значении \"смущать\":', '1) держать в курсе', '2) зайти в тупик', '3) вгонять в краску', '4) войти в силу', 3),
(26, 'Укажите ряд, в котором наречия пишутся раздельно', '1) (за)частую, (из)дали', '2) (в)высь, (на)верх', '3) (на)глаз, (на)корточках', '4) (на)прокат, (в)брод', 3),
(27, 'Полилог – это…', '1) развёрнутое высказывание одного лица, обращенное к слушателям или к самому себе', '2) столкновение мнений или позиций, в ходе которого приводят аргументы в поддержку своих убеждений', '3) разновидность диалога, разговор между несколькими лицами', '4) разговор двух или нескольких лиц, их совместное речевое общение, речевая деятельность', 3),
(28, 'В каком ряду все слова — числительные?', '1) четырёх, удвоить, утроили, один', '2) тройка, пятнадцатый, первый, десятка', '3) второй, двадцать, седьмой, двенадцать', '4) шестому, пятёрка, четвёрка, пятьдесят', 3),
(29, 'Укажите числительное, в котором в именительном падеже не нужно писать мягкий знак', '1) двенадцати', '2) двумстам', '3) тринадцати', '4) пятидесяти', 2),
(30, 'В каком ряду оба деепричастия несовершенного вида?', '1) стараясь, раздвинув', '2) кашляя, дрожа', '3) полюбив, скучая', '4) шутя, склонившись', 2);

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
-- Структура таблицы `statistics`
--

CREATE TABLE `statistics` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `kills` int(11) DEFAULT NULL,
  `death` int(11) DEFAULT NULL,
  `experience` int(11) DEFAULT NULL,
  `damage` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `statistics`
--

INSERT INTO `statistics` (`id`, `user_id`, `kills`, `death`, `experience`, `damage`) VALUES
(1, 0, 24, 2, 1000, 8000);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `login` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `name` varchar(256) NOT NULL,
  `token` varchar(256) DEFAULT NULL,
  `friends` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '[]'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `name`, `token`, `friends`) VALUES
(1, 'vasya', '4a2d247d0c05a4f798b0b03839d94cf0', 'Vasya Ivanoff', 'ddc8333a742f3f6ab2c3bf63dba70a59', '[2,4,5,6,7]'),
(2, 'petya', '123', 'Petya Petroff', NULL, '[]'),
(4, 'masha', 'ebf191604221bd6bc7af3f959d41b5eb', 'Masha', 'e5b1f3fa1ee368b38248f4dad09b5bc6', '[5]'),
(5, '1', 'c51ce410c124a10e0db5e4b97fc2af39', '2', NULL, '[]'),
(6, '12', '78bf4f00f81a36b57950e239f1df91c1', '12', NULL, '[]'),
(7, '123', '4297f44b13955235245b2497399d7a93', '123', '347b4d69dfa3f0c543f4f12a8f8c2453', '[4,2,1]');

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
-- Индексы таблицы `invitations`
--
ALTER TABLE `invitations`
  ADD PRIMARY KEY (`id`);

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
-- Индексы таблицы `mobs`
--
ALTER TABLE `mobs`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `persons`
--
ALTER TABLE `persons`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `questions_russian`
--
ALTER TABLE `questions_russian`
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
-- Индексы таблицы `statistics`
--
ALTER TABLE `statistics`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
-- AUTO_INCREMENT для таблицы `invitations`
--
ALTER TABLE `invitations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `items`
--
ALTER TABLE `items`
  MODIFY `id` bigint(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT для таблицы `mobs`
--
ALTER TABLE `mobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `persons`
--
ALTER TABLE `persons`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `questions_russian`
--
ALTER TABLE `questions_russian`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

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
-- AUTO_INCREMENT для таблицы `statistics`
--
ALTER TABLE `statistics`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

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
