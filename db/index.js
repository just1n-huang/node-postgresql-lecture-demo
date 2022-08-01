// export node client from this file

// postgres client that can be used in node
const pg = require("pg");
// postgres needs to be installed npm i pg

// pg has a constructor 'Client' that takes connection string
const client = new pg.Client("postgres://localhost/stranger_things_db");

// client.connect();
// or do db.connect in server.js
// await db.connect();

module.exports = client;
