var http = require("http");

var fs = require("fs");

console.log("Nara 2");

var data = fs.readFileSync('input.txt');
data.toString();
console.log("Nara 1");


fs.readFile('input2.txt', function(err, data){
	console.log("2file");
	data.toString();
});

var events = require('events');

var eventEmitter = new events.EventEmitter();

var eventHandler = function connect(){
	console.log("Connection succesful");
	console.log('INSIDE CONNECTION HANDLER');
	eventEmitter.emit('data_received');
}

//Binding
eventEmitter.on('connection', eventHandler);

//
eventEmitter.on('data_received', function(){
	console.log('INSIDE DATA R HANDLER');
	console.log('data received succesfully');
});

console.log('EMITING CONNECTION');
eventEmitter.emit('connection');
console.log('End');

fs.readFile('input.txt', function(err, data){
	console.log("1file");
	data.toString();
});
// http.createServer(function (request, response){
// 	response.writeHead(200, {'Content-Type': 'text/plain'});

// 	response.end('msg: Yo!');

// }).listen(8981);

// console.log('Server runs on 8081');