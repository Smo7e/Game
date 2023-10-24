CREATE TABLE gamers (
    id bigserial,
    name varchar(120),
    user_id bigint,
    status varchar(20),
    primary key (id),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE game (
    id bigserial,
    player_1 bigint,
    player_2 bigint,
    player_3 bigint,
    player_4 bigint,
    primary key (id),
    FOREIGN KEY (player_1) REFERENCES gamers (id),
    FOREIGN KEY (player_2) REFERENCES gamers (id),
    FOREIGN KEY (player_3) REFERENCES gamers (id),
    FOREIGN KEY (player_4) REFERENCES gamers (id)
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
    BEFORE INSERT OR UPDATE ON game
    FOR EACH ROW
EXECUTE PROCEDURE game_unique_players_func();