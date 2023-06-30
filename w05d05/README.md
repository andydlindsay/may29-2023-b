# W05D05 - Mid-term Project Kickoff

### Why Midterms?
* using everything we've learned together
* working together

### Pick a Project

### User Stories
* describe how/why a user will interact with our app
* As a _____, I can _____, because _______

As a logged in user, I can see a list of available maps, because I'm interested in what's going on around me.
As a logged in user, I can create a map and put pins on that map, because I want to share info with others.
As a non logged in user, I cannot edit the pins on a map, because they don't belong to me

/planning/user-stories.md

### Identify the Nouns
* nouns === table
* ERD

/planning/erd.png
/planning/erd-stretch.png

### Routes
* RESTful routing
* naming convention

GET /all-the-users
POST /create-new-user

Browse  GET   /menu-items
Read    GET   /menu-items/:id
Edit    POST  /menu-items/:id
Add     POST  /menu-items
Delete  POST  /menu-items/:id/delete

Browse  GET     /menu-items
Read    GET     /menu-items/:id
Edit    PATCH   /menu-items/:id
Add     POST    /menu-items
Delete  DELETE  /menu-items/:id

PUT - replaces a resource completely
PATCH - replaces a piece of a resource
DELETE - deletes a resource

/planning/routes.md

### MVP
* Minimum Viable Product
* @KV Minimum Viable Demo (MVD)
* what is the minimum feature set that we show off in 5 mins
* if you're not going to demo it, don't build it

### Wireframes/Mockups
* this is not a web design school

/planning/wire-frame-home-page.png

### User Login
* Don't do it

```js
// http://localhost:8000/login/2
app.get('/login/:user_id', (req, res) => {
  // encrypted cookies
  req.session.user_id = req.params.user_id;

  // plaintext cookies
  res.cookie('user_id', req.params.user_id);

  // send the user somewhere
  res.redirect('/');
});
```

### Tech Choices
* Back End: Node, Express, Postgres
* Front End: HTML, CSS, JS, jQuery, bootstrap, SCSS

### SPA vs MPA
* up to you
* not mutually exclusive

### How to divide up the work?
* vertical - choosing a small slice that incorporates all three layers
* horizontal - choosing a layer
* pair programming














