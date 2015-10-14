// #1 - 10 octets
var buf = new Buffer(10);
// #2
var buf2 = new Buffer([10, 20, 30, 40, 50]);
// #3
var buf = new Buffer("Simply Easy Learning", "utf-8");

// json
var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);

console.log(json);

// string buffer
var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());


// STREAMS

var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input2.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
   console.log("wyciagam dane chunk: " + chunk);
});

readerStream.on('end',function(){
   console.log("koniec danych: wypisuje");
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");

/// Jest jeszcze piping i inne nudne operacje na systemie plikow

// __ o z tym są globalnymi zmiennymi
console.log( __filename );
console.log( __dirname );

// oczywiscie to wcyaiagnie plikow jest 
// callbackami wiec pojawi sie zawsze w kolejnce na koncu :/

// jakby te callbacki jeszcze wziac w taka funkcje 
//to do tego wszystkiego mozna spowolnic 
// wszystko, tak aby nie dosc ze bylo ostatnie to 
//jeszcze wywolalo sie po wszystkim :/
function printHello(){
   console.log( "Hello, World!");
}
setTimeout(printHello, 2000);

function dawajPozniej(){
	var data = fs.readFileSync('input.txt');
	console.log(data.toString());
	console.log("Sync");
}

console.log("Bez timeoutu");
fs.readFile('input.txt', function(err, data){
	console.log(data.toString());
	console.log("ASync");	
});
dawajPozniej();
console.log("Koniec bez timeoutu");

console.log("Z timeoutem");
setTimeout(dawajPozniej, 2000);
fs.readFile('input.txt', function(err, data){
	console.log(data.toString());
	console.log("ASync");	
});
console.log("Koniec z timeoutem");

// Ok czyli mozna synchroniczne 
// przlozyc "ZA" asynchronicznymi za pomocą timeoutu

//A jakby usunac ten timeout

console.log("Z timeoutem");
var t = setTimeout(dawajPozniej, 2000);
fs.readFile('input.txt', function(err, data){
	console.log(data.toString());
	console.log("ASync");	
});
clearTimeout(t);
console.log("Koniec z timeoutem");

// To sie nic nie wypisze 