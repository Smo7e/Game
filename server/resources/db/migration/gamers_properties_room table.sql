CREATE TABLE gamers_properties (
    id INT AUTO_INCREMENT PRIMARY KEY,
    gamer_id INT,
    `key` VARCHAR(255),
    name VARCHAR(255),
    value VARCHAR(255),
    FOREIGN KEY (gamer_id) REFERENCES gamers(id)
);

CREATE TABLE room (
    id INT AUTO_INCREMENT PRIMARY KEY,
    width INT,
    height INT
);