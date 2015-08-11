_.oP=function(a,b){return a.hasOwnProperty(b)}
$SWr= function(){
    var w = new SharedWorker("wr.js")
    return w 
}

access=function() {

//  accessible by multiple scripts
    // — even if they are being accessed by different windows,
// iframes or even workers.
//   accssb from sev browsing ctxs if they same origin  ( protocol, host, port).
}



//  comm w  shared wrs   via   port ob 
// — an explicit port is opened that the scripts can use
// to comm  with the worker  ( done implicitly with ded workers).

//  port conn  needs to be started either
// implic  onmessage   or explic  w  start()   
// before  msgs can be posted.

// Calling start()  only needed if addEventListener() used

//    When using the start() method
// to open the port connection,
// it needs to be called from both
// parent thread and the worker thread
// if two-way communication is needed.


//in parent
w.port.start()
// called in worker thread 

// port.start()

//Now messages can be sent
// to the worker as before,
// but the postMessage() method has to be invoked
// through the port object
// (again, you'll see similar constructs in
// both multiply.js and square.js):





w.port.postMessage([squareN.v, squareN.v]);






//Now, on to the worker.


self.on('connect',  function(ob){
    var port = ob.ports[0]
    port.on('message', function(ob){
            arr= ob.data
            port.postMessage('Result:' + (arr[0] * arr[1]))})
    port.start() // not neces bc onmessage ev  hlr used
}


// First, we use an onconnect handler
// to fire code when a connection
// to the port happens
// (i.e. when the onmessage event handler
// in the parent thread is setup,
// or when the start() method is explicitly called
// in the parent thread).


//We use the ports attribute of this event object
// to grab the port and store it in a variable.
//
//    Next, we use an onmessage handler
// on the port to do the calculation
// and return the result to the main thread.
// Setting up this onmessage handler
// in the worker thread also
// implicitly opens the port connection
// back to the parent thread,
// so the call to port.start()
// is not actually needed, as noted above.
//
//    Finally, back in the main script
// we deal with the message
w.port.m(function (e) {

        res2.t( e.data[0] )

    $l('Message received from worker')

})
//When a message comes back through the port from the worker,
// we check what result type it is,
// then insert the calculation result inside
// the appropriate result paragraph.
safe=function() {

//The Worker interface spawns real OS-level threads,

// There's no access to non-threadsafe components, or the DOM.
// And you have to pass specific data in and out
// of a thread through serialized objects.
// So you have to work really hard to cause problems in your code.

}

// Obs serialized / de-serialized on the other end.

cloned=function() {
// The page and worker do not share the same instance,
//   duplicate is created on each end. (structured cloning)

//  emulMs() simulates the behavior of a value that is cloned
// and not shared during the passage from a worker
// to the main page or vice versa:
    function emulMs(v) {
        return eval("(" + J.s(v) + ")")
    }

    ex1 = new $N(3)// object
    alert(typeof emulMs(ex1)); // number
    ex2 = true; // boolean
    alert(typeof emulMs(ex2)); // boolean
    ex3 = $S("Hello World");  // object
    alert(typeof emulMs(ex3)); // string
    ex4 = {n: "John Smith", a: 43} // object
    al(typeof emulMs(ex4)); // object
    function Anim(ty, age) {
        this.ty = ty
        this.age = age
    }

    ex5 = new Anim("Cat", 3)
    al(ex5.constructor); // Animal
    al(emulMs(ex5).constructor); // Object


// ms: a cloned (!shared) value

}
//parent
w = $Wr("my_task.js")
    .m(function(e){$l("from wr:"+e.d)})
    .pM("ali")
//child
    pM("before sv posted")
    m(function(m){pM("Hi "+m.d)})