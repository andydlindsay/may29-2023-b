const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8000;

// database
const foodItems = [
  {
    id: 'abc',
    name: 'Spicy Chicken Sandwich',
    price: 7.99,
    tagline: 'Crispy and Spicy!',
    calories: 750,
  },
  {
    id: 'def',
    name: 'Classic Cheeseburger',
    price: 6.99,
    tagline: 'Juicy and Cheesy!',
    calories: 850,
  },
  {
    id: 'ghi',
    name: 'Veggie Pizza',
    price: 9.99,
    tagline: 'Fresh and Flavorful!',
    calories: 650,
  },
];

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// endpoints
app.get('/food-items', (req, res) => {
  res.json(foodItems);
});

app.post('/food-items', (req, res) => {
  const name = req.body.name;
  const price = Number(req.body.price);
  const tagline = req.body.tagline;
  const calories = Number(req.body.calories);

  const id = Math.random().toString(36).substring(2, 5);

  const newFoodItem = {
    id: id,
    name: name,
    price: price,
    tagline: tagline,
    calories: calories
  };

  foodItems.push(newFoodItem);

  res.status(201).send();
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
