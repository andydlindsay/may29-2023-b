const express = require('express');
const router = express.Router();

const db = require('../db/connection');

router.use((req, res, next) => {
  // if (!req.cookies.userId) {
  //   return res.redirect('/login');
  // }

  console.log('inside the blogpost router');
  next();
});

// GET /blogposts/
router.get('/', (req, res) => {
  db.query('SELECT * FROM blogposts;')
    .then((response) => {
      const blogposts = response.rows;
      res.json(blogposts);
    });
});

// GET /blogposts/:id
router.get('/:id', (req, res) => {
  const blogpostId = req.params.id;
  db.query('SELECT * FROM blogposts WHERE id = $1;', [blogpostId])
    .then((response) => {
      const blogpost = response.rows[0];
      res.json(blogpost);
    });
});

module.exports = router;
