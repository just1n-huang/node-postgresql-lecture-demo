DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS things;
CREATE TABLE users(
    id SERIAL PRIMARY KEY, -- serial will auto increment, no input necessary
    name VARCHAR(100)
    
);
CREATE TABLE things(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT
);
