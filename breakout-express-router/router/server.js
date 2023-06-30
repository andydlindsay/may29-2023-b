require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

// import the routers
const productRouter = require('./routes/product-router');
const blogpostRouter = require('./routes/blogpost-router');

// use the routers
app.use('/api/admin/products', productRouter);
app.use('/blogposts', blogpostRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
