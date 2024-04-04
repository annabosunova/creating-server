/**
 * A Node.js script that sets up a HTTP server
 * It requires http and fs (file system) modules,
 * that are used to create an HTTP server and read a file
 */

const http = require('http');
const fs = require('fs');
const port = 3000;
// create server
const server = http.createServer(function(req,res) {
    // update response status
    res.writeHead(200, {'Content-Type':'text/html'})
    // read index.html
    // routing
  let path = './views/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/contact':
      path += 'contact.html';
      res.statusCode = 200;
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
  }

  // send html
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    res.end(data);

    });
});
// start server listening
server.listen(port,function(error) {
    if(error) {
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening on port ' + port);

    }
})