const pg = require('pg');

const Client = pg.Client; // single connection to the database
// const Pool = pg.Pool; // collection of clients (default 5) - managed

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
};

const client = new Client(config);

client.connect();

const verb = process.argv[2];
const id = process.argv[3];
// console.log('verb', verb);

switch (verb) {
  case 'browse':
    client.query('SELECT * FROM cats ORDER BY id;')
      .then((response) => {
        console.log(response.rows);
        client.end();
      });
    break;

  case 'read':
    client.query('SELECT * FROM cats WHERE id = $1;', [id])
      .then((response) => {
        console.log(response.rows[0]);
        client.end();
      });
    break;

  case 'edit':
    const newBreed = process.argv[4];
    client.query('UPDATE cats SET breed = $1 WHERE id = $2;', [newBreed, id])
      .then(() => {
        console.log('breed was updated successfully');
        client.end();
      });
    break;

  case 'add':
    const name = process.argv[3];
    const breed = process.argv[4];

    const query = 'INSERT INTO cats (name, breed) VALUES ($1, $2);';
    client.query(query, [name, breed])
      .then(() => {
        console.log('cat created successfully');
        client.end();
      });
    break;

  case 'delete':
    client.query('DELETE FROM cats WHERE id = $1;', [id])
      .then(() => {
        console.log('the cat has found a new home!');
        client.end();
      });
    break;

  default:
    console.log('please use a BREAD verb');
    client.end();
}


