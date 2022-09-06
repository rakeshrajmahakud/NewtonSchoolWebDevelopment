const {EventEmitter} = require('node:events');

const event = new EventEmitter()    //eventEmitter is a clss so we create an instance of it by using new keyword.


event.on('myevent', (err,data)=> {          //the 'on' method  recives the event which is emitted .
    if (err) {
        console.log(err);
    }
    else{
        console.log(data);
    }
})

event.on('myevent2',(...data)=>{  //when recives multiple data it automaticaly creates an array to store them .
    console.log(data.join("\n"));
})



event.emit('myevent'," this is a messge emitted");   // this emit message emit the message
event.emit('myevent2',"first data","second data","3rd data");
// console.log(event);


//MOST IMPORTANT interview Question .
// what is the contest inside the event listener ?
// The context inside an event Receiver is set to reference the `EventEmitter`instance to which
//  the listener is attached. However, this is true with only if the callback is created using regular function.
//  In case of arrow functions it is not returned and displays only empty object.


event.on('errEvent',(err)=>{          //handling error
    console.log("its an error");
    console.log(err.message);
})

event.emit('errEvent',new Error (" this is an error"))


console.log(event.eventNames());     //it displays all the event names.