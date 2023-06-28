require('dotenv').config(); // populates process.env with values from .env

const express = require('express');
const morgan = require('morgan');
const client = require('./database/connection');

const app = express();
// const port = 8002;
const port = process.env.PORT || 8002;

app.use(morgan('dev'));

// GET /cats
app.get('/cats', (req, res) => {
  client.query('SELECT * FROM cats ORDER BY id;')
    .then((response) => {
      const cats = response.rows;
      res.json(cats);
    });
});

// GET /cats/:id
app.get('/cats/:id', (req, res) => {
  client.query('SELECT * FROM cats WHERE id = $1;', [req.params.id])
    .then((response) => {
      const cat = response.rows[0];
      res.json(cat);
    });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
