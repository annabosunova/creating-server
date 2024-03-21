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
    fs.readFile('index.html', function(error, data) {
        if(error) {
            // update response status in case of error
            res.writeHead(404);
            res.write('Error: File not found');
         } else {
            res.write(data);
         }
         res.end();
    })
})
// start server listening
server.listen(port,function(error) {
    if(error) {
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening on port ' + port);

    }
})