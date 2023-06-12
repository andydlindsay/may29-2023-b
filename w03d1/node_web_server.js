const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log('Request received');
  console.log('req.method', req.method);
  console.log('req.url', req.url);

  const route = req.method + ' ' + req.url;

  switch (route) {
    case 'GET /':
      res.write('<h1>Hello World!</h1><p>Welcome to my web server. Here is a <a href="http://example.com/monkeyfuzz">link</a></p>');
      res.end();
      break;
    case 'GET /about':
      res.write('About page');
      res.end();
      break;
    default:
      res.statusCode = 404;
      res.write('404 Not Found');
      res.end();
      break;
  }

});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
