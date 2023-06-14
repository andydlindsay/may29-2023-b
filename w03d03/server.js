const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();
const port = 54321;

// configuration
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); // creates/populates req.body
app.use(cookieParser()); // creates/populates req.cookies

const users = {
  abc: {
    id: "abc",
    username: "alice",
    password: "1234",
  },
  def: {
    id: "def",
    username: "bob",
    password: "5678",
  },
};

// login endpoints
app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  // pull the data off the body
  const username = req.body.username;
  const password = req.body.password;

  // did we NOT get a username and/or password
  if (!username || !password) {
    return res.status(400).send('Please provide a username and password');
  }

  // lookup the user based off their username
  let foundUser = null;
  for (const userId in users) {
    // grab the user object from users
    const user = users[userId];
    // compare the user's username against the one from req.body
    if (user.username === username) {
      // we found our user!
      foundUser = user;
    }
  }

  // did we NOT find a user
  if (!foundUser) {
    return res.status(400).send('no user with that username found');
  }

  // do the passwords NOT match
  if (foundUser.password !== password) {
    return res.status(400).send('passwords do not match');
  }

  // happy path!!! the user is who they say they are!

  // set a cookie
  res.cookie('userId', foundUser.id);

  // send the user somewhere
  res.redirect('/protected');
});

// protected endpoint
app.get('/protected', (req, res) => {
  // grab the userId from the cookie
  const userId = req.cookies.userId;

  // do they NOT have a cookie
  if (!userId) {
    res.status(401).send('you must be logged in to see this page');
  }

  // yay! they have a cookie!
  // lookup the user based off their userId
  const user = users[userId];

  const templateVars = {
    user: user
  };

  res.render('protected', templateVars);
});

// logout endpoint
app.post('/logout', (req, res) => {
  // clear the user's cookie
  res.clearCookie('userId');

  // redirect the user somewhere
  res.redirect('/login');
});

// registration endpoints
app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  // pull the data off the body
  const username = req.body.username;
  const password = req.body.password;

  // did we NOT get a username and/or password
  if (!username || !password) {
    return res.status(400).send('Please provide a username and password');
  }

  // lookup the user based off their username
  let foundUser = null;
  for (const userId in users) {
    // grab the user object from users
    const user = users[userId];
    // compare the user's username against the one from req.body
    if (user.username === username) {
      // we found our user!
      foundUser = user;
    }
  }

  // did we find a user?
  if (foundUser) {
    return res.status(400).send('there is already a user with that username');
  }

  // happy path!
  // create a new user object
  const id = Math.random().toString(36).substring(2, 5);

  const newUser = {
    id: id,
    username: username,
    password: password
  };

  // update the users object
  users[id] = newUser;
  console.log(users);

  // do we log the user in? or do we redirect to /login
  res.redirect('/login');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
