CREATE TABLE room_exits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    room_id INT,
    position VARCHAR(255),
    goto_id INT,
    status VARCHAR(20),
    FOREIGN KEY (room_id) REFERENCES room(id),
    FOREIGN KEY (goto_id) REFERENCES room(id)
);
