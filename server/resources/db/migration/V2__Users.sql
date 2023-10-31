CREATE TABLE users (
    id bigserial,
    login varchar(255) UNIQUE ,
    email varchar(255) UNIQUE ,
    password text,
    token text,
    primary key (id)
);