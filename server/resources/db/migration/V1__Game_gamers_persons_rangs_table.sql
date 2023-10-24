CREATE EXTENSION IF NOT EXISTS hstore;
CREATE TABLE persons
(
    id    bigserial,
    hp    float4,
    name  varchar(20),
    image varchar(255),
    primary key (id)
);

CREATE TABLE gamers
(
    id         bigserial,
    name       varchar(120),
    user_id    bigint,
    person_id  bigint,
    experience float4,
    hp         float4,
    money      float4,
    status     varchar(20),
    coordinate point,
    primary key (id),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (person_id) REFERENCES persons (id) ON DELETE CASCADE
);

CREATE TABLE rangs
(
    id bigint,
    name varchar(120),
    experience float4,
    primary key (id)
);

CREATE TABLE game
(
    id          bigserial,
    version     float4,
    hashUnits   hstore,
    hashScene   hstore,
    hashBullets hstore,
    hashItems   hstore,
    current_rang bigint,
    player_1    bigint,
    player_2    bigint,
    player_3    bigint,
    player_4    bigint,
    primary key (id),
    FOREIGN KEY (player_1) REFERENCES gamers (id),
    FOREIGN KEY (player_2) REFERENCES gamers (id),
    FOREIGN KEY (player_3) REFERENCES gamers (id),
    FOREIGN KEY (player_4) REFERENCES gamers (id),
    FOREIGN KEY (current_rang) REFERENCES rangs (id)
);

CREATE OR REPLACE FUNCTION game_unique_players_func() RETURNS TRIGGER
    LANGUAGE plpgsql
AS
$$
BEGIN
    IF (NEW.player_1 = NEW.player_2 OR NEW.player_1 = NEW.player_3 OR NEW.player_1 = NEW.player_4 OR
        NEW.player_2 = NEW.player_3 OR NEW.player_2 = NEW.player_4 OR NEW.player_3 = NEW.player_4) THEN
        RAISE EXCEPTION 'Игроки должны иметь разные ID';
    END IF;
    RETURN NEW;
END;
$$;

CREATE TRIGGER game_unique_players
    BEFORE INSERT OR UPDATE
    ON game
    FOR EACH ROW
EXECUTE PROCEDURE game_unique_players_func();