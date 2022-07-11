// const EventEmitter = require('events');

// // create a class
// class MyEmitter extends EventEmitter{};

// //create the object
// const myEmitter = new MyEmitter();

// //event listener
// myEmitter.on('event', () =>console.log('Fired Event'));

// myEmitter.emit('event')

//getting from legger file

const Logger = require('./logger_demo.js');

const logger = new Logger();

logger.on('message', (data) => {
    console.log('Listening : ', data );
});

logger.log('Hello world');