CREATE TABLE gamers_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_id INT,
    gamer_id INT,
    status ENUM('надето', 'в кармане'),
    x FLOAT,
    y FLOAT,
    FOREIGN KEY (item_id) REFERENCES items(id),
    FOREIGN KEY (gamer_id) REFERENCES gamers(id)
);

CREATE TABLE map (
    room_id INT, 
    height INT,
    width INT,
    content TEXT,
    FOREIGN KEY (room_id) REFERENCES room(id)
);