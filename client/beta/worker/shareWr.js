$sw=function(a){var w
    w= new SharedWorker(a)
    return w
}//dw=


w = $sw("jsworker.js");
w.P= w.port

//Communicating with a Shared Web Worker

//Any of your page scripts
// can communicate with the shared web worker.

//pagescript.js:



w = new SharedWorker()

w.port.on('message', function(object){
    alert(object.data)
})







//    , false)



w.port.start()
// post a message to the shared web worker
w.port.postMessage("Alyssa");


//When the web worker script receives the
// first message from a script,
// it must attach an event handler
// to the active port.

// Under most ci;rcumstances,
// the handler will run its own
// postMessage() method to return a message
// to the calling code.

// Finally, the ports start() method
// must also be executed to enable messaging:
//
//    jsworker.js:

conns = 0 // count active connections


self.on('connection', function(message){


    conns++

    otherThing=  message.ports[0]


   otherThing.on('message',

       function(message){
           message.ports[0].postMessage("Hi "+ message.data+"(p#"+cns+")")
       }, false)

    message.ports[0].start()

    }, false)




//Like their dedicated siblings,
// shared web workers can:
//
//    load further scripts with importScripts()
//    attach error handlers, and
//run the port.close() method to prevent
// further communication on a specific port.