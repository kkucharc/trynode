var fs = require("fs");

// synchroniczne otwieranie plików
var data = fs.readFileSync('input.txt');
data.toString();
console.log("Nara 1");

// asynchroniczne otwieranie plików
// callback - asynchroniczna wersja synchronicznej funkcji
fs.readFile('input2.txt', function(err, data){
	console.log("2file");
	data.toString();
});

fs.readFile('input.txt', function(err, data){
	console.log("1file");
	data.toString();
});

// wniosek nie wazne ile synchronicznych polecen w glownych watkach mamy
// to i tak one zawsze przejdą jako pierwsze chocby wypadalo aby asynchroniczne
// dzialania zostaly wywolane w miedzyczasie 
// -- suabo --