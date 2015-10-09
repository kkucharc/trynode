
// server
var http = require("http");

http.createServer(function (request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});

	response.end('msg: Yo!');

}).listen(8981);

console.log('Server runs on 8081');









