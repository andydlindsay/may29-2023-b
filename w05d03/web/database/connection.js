const pg = require('pg');

const Client = pg.Client; // single connection to the database

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
};

const client = new Client(config);

client.connect();

module.exports = client;
