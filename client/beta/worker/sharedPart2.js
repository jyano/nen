//The structured cloning algorithm can accept JSON
// and a few things that JSON can't — like circ refs
//Passing data exs
//Example #1: Create a generic "asynchronous eval()"
//
//The following ex shows how to use a worker
// in order to asynchronously execute any JavaScript
// code allowed in a worker, through eval() within the worker:

//// Syntax: asyncEval(code[, listener])
asyncEval = (function () {

    aLsrs= []
    w=oParser = $Wr("data:text/javascript;charset=US-ASCII,onmessage%20%3D%20function%20%28oEvent%29%20%7B%0A%09postMessage" +
        "%28%7B%0A%09%09%22id%22%3A%20oEvent.data.id%2C%0A%09%09%22evaluated%22%3A%20eval%28oEvent.data.code" +
        "%29%0A%09%7D%29%3B%0A%7D").m(function(ev){var da,id,lsr
            da=ev.da
            id=da.id
            lsr = aLsrs[id]
            if(lsr){lsr(da.evaluated)}
            delete aLsrs[id]
        })


    return function(sCode, fLsr){
        aLsrs.push(fLsr || null);
        w.pM({id: aLsrs.length-1, code:sCode})
    }
})()



//The data URL is equivalent to a network request, with the following response:

onmessage=function(ev){pM({ id: ev.data.id, evald: eval(ev.data.code) })}

//// asynchronous alert message...
asyEval("3+2",function(sMs){alert("3+2="+sMs)})
//// asynchronous print message...


asyEval("Hello World!!!", function(sHTML){$bd.A(dc.crTxNd(sHTML))})



//// asynchronous void...

asyncEval("(function () {" +
    "\n\tvar oReq = new XMLHttpRequest();\n\toReq.open(\"get\", \"http://www.mozilla.org/\", false);\n\toReq.send(null);\n\treturn oReq.responseText;\n})()");

//Example #2: Advanced passing JSON Data and creating a switching system
//
//If you have to pass some complex data
// and have to call many different functions both in the main page and in the Worker,
// you can create a system like the following.

//    ex.html (the main page):
//
//<li><a id="firstLink" href="javascript:oMyTask.sendQuery('getDifference', 5, 3);">
// What is the difference between 5 and 3?</a></li>
//<li><a href="javascript:oMyTask.sendQuery('waitSomething');">Wait 3 seconds</a></li>
//<li><a href="javascript:oMyTask.terminate();">terminate() the Worker</a></li>
//</ul>
//my_task.js (the worker):

//// your custom PRIVATE functions
//
function myPrivateFunc1 () {}


//// your custom PUBLIC functions (i.e. queryable from the main page)
queryableFunctions = {// ex #1: get the difference between two numbers:
    getDifference: function (nMinuend, nSubtrahend) {reply("printSomething", nMinuend - nSubtrahend)},
    waitSomething: function () {_.in(3, function() { reply("alertSomething", 3, "seconds")})}}


//// system functions

function defaultQuery(vMsg){}
// your default PUBLIC function executed only when main page calls the queryableWorker.postMessage() method directly
function reply(lsnrN, g0, g1){var g=G(arguments)
    if(g.u){throw $TZ("reply - not enough arguments");return}
    pM({vo42t30: g.f, rnb93qh: g.r})}

m(function(m){
    if (O(m.d) && _.oP(m.d ,"bk4e1h0") && _.oP(m.d,"ktp3fm1")){
        qbFns[m.d.bk4e1h0].apply(self, m.d.ktp3fm1)}
    else {dfQ(m.d)}})

//It is possible to switch the content of each mainpage
// -> worker and worker -> mainpage message.
//
//    Passing data by transferring ownership (transferable objects)
//
//    Google Chrome 17+ and Firefox 18+ contain an additional way
// to pass certain types of objects (transferable objects,
// that is objects implementing the Transferable interface)
// to or from a worker with high performance.
// Transferable objects are transferred from
// one context to another with a zero-copy operation,
// which results in a vast performance improvement
// when sending large data sets.
// Think of it as pass-by-reference
// if you're from the C/C++ world.
// However, unlike pass-by-reference,
// the 'version' from the calling context is
// no longer available once transferred.
// Its ownership is transferred to the new context.
// For ex, when transferring an ArrayBuffer
// from your main app to a worker script,
// the original ArrayBuffer is cleared and no longer usable.
// Its content is (quite literally)
// transferred to the worker context.
//
//// Create a 32MB "file" and fill it.

uInt8Arr = new Uint8Arr(1024 * 1024 * 32); // 32MB
for (var i = 0; i < uInt8Arr.length; ++i) {uInt8Arr[i] = i}
w.pM//(uInt8Array.buffer, [uInt8Array.buffer]);


//    The following JavaScript code is stored
// in the "fibonacci.js" file
// referenced by the HTML in the next section.

res = [];

function resultReceiver(ev){
    res.push(parseInt(ev.data))
    if(res.length==2){pM(res[0]+res[1])}
}


function errorReceiver(ev){throw ev.data}
onmessage = function(ev){
    var n = parseInt(ev.data)
    if(n==0||n==1){pM(n);return}
    for (var i=1;i<=2;i++){
        var w = new Worker("fibonacci.js");
        w.onmessage=resultReceiver;
        w.onerror=errorReceiver;
        w.postMessage(n-i)}}

// var onmessage and function onmessage
// will define global properties
// with those names,
// but they will not register the function
// to receive messages sent by the  web page that created the worker).

// This starts the recursion,
// spawning new copies of itself to handle
// each iteration of the calculation.

//    <div id="result"></div>

w = $Wkr("fibo.js")

//look dude, we are setting on message and error handlers
//then pass a message
w.m(function(m){
    $("#res").t(m.d)
    dump("Got: "+m.d+"\n")
}).z(
    function(z){dump("Wr z:"+z.m+"\n")
        throw z}).p("5")

otherWrs=function() {
//        ServiceWorkers essentially act as proxy servers
// that sit between web applications, and the browser and network
// (when available). They are intended to (amongst other things)
// enable the creation of effective offline experiences,
// intercepting network requests and taking appropriate action
// based on whether the network is available and updated assets
// reside on the server. They will also allow access to push notifications
// and background sync APIs.

//        Audio Workers provide the ability for direct scripted audio
// processing to be done inside a web worker context.
}


// workers can use:

//    Navigator
//    XMLHttpRequest
//    Array, Date, Math, and String
//    Window.requestAnimationFrame, WindowTimers.setTimeout,
// WindowTimers.setInterval
//   WebSockets,  and data storage mechanisms like IndexedDB


//    The main thing you can't do in a Worker
// is directly affect the parent page.
// This includes manipulating the DOM
// and using that page's objects.
// You have to do it indirectly, by sending a message back to the main script
// via DedicatedWorkerGlobalScope.postMessage,
// then actioning the changes from there.
//
