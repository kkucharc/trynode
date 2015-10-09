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