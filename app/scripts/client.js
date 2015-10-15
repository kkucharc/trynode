'use strict';

var http = require('http');

// Options to be used by request 
var options = {
   host: 'localhost',
   port: '8081',
   path: '/task_managers.html'  
};

// Callback function is used to deal with response asssafdsfdgfhfghfgsgffsgbfsfg
var callback = function(response){
   // Continuously update stream with data
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // Data received completely.
      console.log(body);
   });
};
// Make a request to the server
var req = http.request(options, callback);
req.end();

// ES6
class Language3 {
  constructor(name, founder, year) {
    this.name = name;
    this.founder = founder;
    this.year = year;
  }
  summary() {
    return this.name + " was created by " + this.founder + " in " + this.year;
  }
}


// ES5
var Language2 = function(config) {
  this.name = config.name;
  this.founder = config.founder;
  this.year = config.year;
}
 
Language2.prototype.summary = function() {
  return this.name + " was created by " + this.founder + " in " + this.year;
};