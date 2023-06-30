const express = require('express');
const router = express.Router();

const productQueries = require('../db/product-queries');

// GET /api/admin/products/
router.get('/', (req, res) => {
  productQueries.getProducts()
    .then((products) => {
      res.json(products);
    });
})

// GET /products/:id
router.get('/:id', (req, res) => {
  const productId = req.params.id;
  productQueries.getProductById(productId)
    .then((product) => {
      res.json(product);
    });
});

module.exports = router;
