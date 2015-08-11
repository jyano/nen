w.m=function(fn){
    this.onmessage=fn
    return this}
w.z=function(fn){
    this.onerror=fn
    return this}
w.p= function(a){this.postMessage(a);return this}

$Wr=function(a){
    return new Worker(a)
}
$wd= window
$wd.oU=function(a){return this.URL.createObjectURL(a)}
$dc = document
$dc.qS=$dc.querySelector
$dc.txCnt=function(id,t){
    this.id(id).textContent = t
    return this
}
$dc.id=$dc.getElementById
$wr=function(a){var wr
    wr= new Worker(a)//('task.js');
    wr.on=wr.addEventListener
    wr.pM=wr.postMessage
    wr.om=function(fn){this.onmessage=fn;return this}
    wr.oM=function(fn){this.on('message',fn,false); return this}
    wr.oZ=function(fn){this.on('error',fn,false); return this}
    return wr
}
// workers run in another global context that
// is dif from the current window.
access=function(){

    //Dedicated workers only accessible by the script that called it.
// A dedicated worker is only accessible
// from the script that first spawned it,
// whereas a shared workers can be accessed from mult  scripts.

}
//Workers may in turn spawn new workers,
// as long as those workers are hosted
// within the same origin as the parent page.
network=function() {
// In addition, workers may use XMLHttpRequest for network I/O,
// with the exception that the responseXML
// and channel attributes on XMLHttpRequest always return null.

}


//    Features Available to Workers
//
//    Due to their multi-threaded behavior,
// web workers only has access to a subset of JavaScript's features:
//
//    The navigator object
//    The location object (read-only)
//    XMLHttpRequest
//    setTimeout()/clearTimeout() and setInterval()/clearInterval()
//    The Application Cache
//    Importing external scripts using the importScripts() method
//    Spawning other web workers
//    Workers do NOT have access to:
//
//        The DOM (it's not thread-safe)
//    The window object
//    The document object
//    The parent object
//    Loading External Scripts


useCases=function(){

    //        Prefetching and/or caching data for later use
//    Code syntax highlighting or other real-time text formatting
//    Spell checker
//    Analyzing video or audio data
//    Background I/O or polling of webservices
//    Processing large arrays or humungous JSON responses
//    Image filtering in <canvas>
//    Updating many rows of a local web database

}