var http = require('http');

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  if (request.url == '/') {
    response.writeHead(200);
    response.end('Hello World from root');
  } else if (request.url == '/home') {
    response.writeHead(200);
    response.end('Hello World from home');
  } else if (request.url == '/raja') {
    response.writeHead(200);
    response.end('Hello World from raja shekar bollam');
  }
};
var www = http.createServer(handleRequest);
www.listen(8081);
