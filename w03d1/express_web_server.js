const express = require('express');
const PORT = 3001;

const todos = {
  'getbread': {
    'id': 'getbread',
    'title': 'Get bread',
    'completed': false
  },
  'getmilk': {
    'id': 'getmilk',
    'title': 'Get milk',
    'completed': false
  },
  'learnPOSTrequests': {
    'id': 'learnPOSTrequests',
    'title': 'Learn POST requests',
    'completed': false
  }
};

const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false })); // this is needed to parse the body of POST requests

app.get('/', (req, res) => {
  res.send('<h1>Hello Express Driven World!</h1><p>Welcome to my web server. Here is a <a href="http://example.com/monkeyfuzz">link</a></p>');
});

app.get('/todos', (req, res) => {
  const templateVars = { mnkfz: todos }; // the property todos will become a variable in the template
  res.render('todos', templateVars);

});

app.get('/todos/new', (req, res) => {
  res.render('new');
});

app.post('/todos/new', (req, res) => {
  console.log('req.body', req.body);
  todos[req.body.id] = {
    id: req.body.id,
    title: req.body.title,
    completed: false
  };
  res.redirect('/todos');
});

app.get('*', (req, res) => {
  res.status(404);
  res.send('404 Page Not Found');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
