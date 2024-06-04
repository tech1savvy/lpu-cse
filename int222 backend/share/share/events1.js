var eve=require('events');
var obj1=new eve.EventEmitter();
obj1.addListener('dancing',function(msg){
    console.log(msg);
});
obj1.emit('dancing',"Lets Dance");

var fun1 = (msg) => {

    console.log("Message from fun1: " + msg);

};
obj1.addListener('dancing',fun1)
obj1.emit('dancing','Dancing Done');

var fun2 = (msg) => {
    console.log("message from msg2"+msg);
}
for(i=0;i<3;i++){
obj1.addListener('dancing',fun2);}
obj1.emit('dancing','Dancing Done');


var event = require('events');  
const multiple = new event.EventEmitter();
multiple.on('myEvent', () =>
{
    console.log('1st listener');
});
multiple.on('myEvent', () =>
{
    console.log('2nd listener');
} );
multiple.emit('myEvent');

