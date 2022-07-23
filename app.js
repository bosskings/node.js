//##Creating a basic Js function----
// function greeting(name){
//     console.log(name);
// }

/*Exporting the contents of the function above with the export modeule*/ 
// module.exports.send = greeting;

/*Exploring the path built-in modules */ 
// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(pathObj);

/* os built-in module*/
// const os = require('os');

// var fremem = os.freemem();
// var totmem = os.totalmem();

// /*display with templated strings*/
// console.log(`The Free Memory is ${fremem}`);
// console.log(`The Total Memory is ${totmem}`);

// fs module
// const fs = require('fs')

// var file = fs.readdirSync('./');
// // console.log(file);

// var file_ = fs.readdir('./', function(err,file_){
//     if(err) console.log('Error',err);
//     else console.log('Result', file_)
// });
//################################################
/*  Node.js EVENTS 
    Emitter Class
*/
// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// //registers a listener
// emitter.on('messageLogged', (arg) => {
//     console.log('Testing Events', arg);
// })
// //raise and event
// emitter.emit('messageLogged',{id:1,url:'url.com'});

// const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

//registers a listener
logger.on('messageLogged', (arg) => {
    console.log('Testing Events', arg);
});

logger.log('I dont Know yet ooo...........');