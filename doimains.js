var EventEmitter = require("events").EventEmitter;
var domain = require("domain");
var child = domain.create();

var emitter = new EventEmitter();

child.on('error', function(err){
	console.log("child handled an error: " + err.message);
});

// explicit binding
child.add(emitter);

emitter.on('error', function(err){
	console.log("listener on emitter shows error: " + err.message);
});

emitter.emit('error', new Error('Will be handled by listener'));

emitter.removeAllListeners('error');

emitter.emit('error', new Error('Will be handled by child'));

var child2 = domain.create();

child2.on('error', function(err){
   console.log("domain2 handled this error ("+err.message+")");
});

child2.run(function(){
   var emitter2 = new EventEmitter();
   emitter2.emit('error',new Error('To be handled by child2'));   
});

child.remove(emitter);

emitter.emit('error', new Error("Crash!"));