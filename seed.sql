DROP TABLE IF EXISTS things;
DROP TABLE IF EXISTS users;
CREATE TABLE users(
    id SERIAL PRIMARY KEY, -- serial will auto increment, no input necessary
    name VARCHAR(100)
    
);
CREATE TABLE things(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    user_id INTEGER REFERENCES users(id)
);


INSERT INTO users(name) VALUES('moe');
INSERT INTO users(name) VALUES('lucy');
INSERT INTO users(name) VALUES('larry');
INSERT INTO users(name) VALUES('ethyl');
INSERT INTO users(name) VALUES('curly');

INSERT INTO things(name, user_id) VALUES('foo', 1); 
INSERT INTO things(name, user_id) VALUES('bar', 2); 
INSERT INTO things(name, user_id) VALUES('baz', 3); 