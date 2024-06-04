// var event = require('events');   //events is a module and we require it
// //create a variable myEmitter and create EventEmitter object and store it in myEmitter
// var myEmitter = new event.EventEmitter();
// /*create an event called anEvent and use a callback function with a parameter "msg",,, anEvent is the name of the
// event function(msg) is the listener*/
// myEmitter.once('anEvent1', function(msg)
// {
// //when we create the above event, watch the console display the message
// console.log(msg);      
// });
// //Emit or raise the event
// myEmitter.emit('anEvent1', 'Event emitted1');
// myEmitter.emit('anEvent1', 'Event emitted2');

const EventEmitter = require('events');
// Initializing event emitter instances
var eventEmitter1 = new EventEmitter();
var eventEmitter2 = new EventEmitter();

// Getting max listener
console.log("Default max listener for eventEmitter1 is: ",eventEmitter1.getMaxListeners());

console.log("Default max listener for eventEmitter2 is: ",eventEmitter2.getMaxListeners());


// Set global deaultMaxListeners to 2

EventEmitter.defaultMaxListeners = 2;


// Getting max listener

console.log("Default max listener for eventEmitter1 is: ",eventEmitter1.getMaxListeners());

console.log("Default max listener for eventEmitter2 is: ",eventEmitter2.getMaxListeners());

// Set max listener of eventEmitter1 to 5

eventEmitter1.setMaxListeners(5);
// Getting max listener

console.log("Default max listener for eventEmitter1 is: ", eventEmitter1.getMaxListeners());

console.log("Default max listener for eventEmitter2 is: ", eventEmitter2.getMaxListeners());

var fun1 = (msg) => {

    console.log("Message from fun1: " + msg);

};


// Declaring listener fun2 to myEvent2

var fun2 = (msg) => {

    console.log("Message from fun2: " + msg);

};


// Listening to myEvent1 with 3 instance of fun1

for(var i = 0; i < 3; i++) {

    eventEmitter1.addListener('myEvent1', fun1)

}


// Listening to myEvent2 with 3 instance of fun2

for(var i = 0; i < 3; i++){

    eventEmitter2.addListener('myEvent2', fun2)

}


// Emitting myEvent1 and myEvent2

eventEmitter1.emit('myEvent1', 'Event1 occurred');

eventEmitter2.emit('myEvent2', 'Event2 occurred');

