CREATE TABLE persons
(
    id    BIGINT AUTO_INCREMENT,
    hp    FLOAT,
    name  VARCHAR(20),
    image VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE gamers
(
    id         BIGINT AUTO_INCREMENT,
    name       VARCHAR(120),
    user_id    BIGINT,
    person_id  BIGINT,
    experience FLOAT,
    hp         FLOAT,
    money      FLOAT,
    status     VARCHAR(20),
    coordinate POINT,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (person_id) REFERENCES persons (id) ON DELETE CASCADE
);

CREATE TABLE rangs
(
    id         BIGINT,
    name       VARCHAR(120),
    experience FLOAT,
    PRIMARY KEY (id)
);

CREATE TABLE game
(
    id            BIGINT AUTO_INCREMENT,
    version       FLOAT,
    hashUnits     TEXT,
    hashScene     TEXT,
    hashBullets   TEXT,
    hashItems     TEXT,
    current_rang  BIGINT,
    player_1      BIGINT,
    player_2      BIGINT,
    player_3      BIGINT,
    PRIMARY KEY (id),
    FOREIGN KEY (player_1) REFERENCES gamers (id),
    FOREIGN KEY (player_2) REFERENCES gamers (id),
    FOREIGN KEY (player_3) REFERENCES gamers (id),
    FOREIGN KEY (current_rang) REFERENCES rangs (id)
);

DELIMITER $$
CREATE TRIGGER game_unique_players BEFORE INSERT OR UPDATE ON game
FOR EACH ROW
BEGIN
    IF (NEW.player_1 = NEW.player_2 OR NEW.player_1 = NEW.player_3 OR NEW.player_2 = NEW.player_3) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Игроки должны иметь разные ID';
    END IF;
END$$
DELIMITER ;
