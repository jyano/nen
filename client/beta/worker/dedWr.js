//  spawning background scripts  //    Workers run in an isolated thread // .utilize thread-like message // passing to achieve parallelism.

// The constructor  takes the name of the worker script:
// bw spawns new worker thread,
//  downloaded asynchronously,
// begins  when file completely
// downloaded and executed.

// postMessage() can accept either a string
// or JSON object

 //parent
w=$wr('doWork.js').oMs(function(e){
    $l('Wr said: ',e.d)
}, false).pM('Hi')


//doWork.js (the wr):
oMs(function(e){
    pM(e.d)
},false)


//<button onclick="sayHI()">Say HI</button>//<button onclick="unknownCmd()">Send unknown command</button>
//<button onclick="stop()">Stop wr</button>//<output id="result"></output>

function sayHI(){w.pM({'cmd': 'start', 'msg': 'Hi'});}
function stop(){ wr.pM({'cmd': 'stop', 'msg': 'Bye'})} // wr.terminate() from this script would also stop the wr.
function unknownCmd() {wr.pM({'cmd': 'foobard', 'msg': '???'})}
$Wr('doWork2.js').oMs(function(e){$('#res').t(e.d)},false)
//doWork2.js:
oMs(function(e){var d=e.d
    switch(d.cmd) {
        case 'start':
            pM('WORKER STARTED: ' + d.m);break;
        case 'stop':
            pM('WORKER STOPPED: ' + d.m + '. (buttons will no longer work)');close();  break; // Terminates the wr.
        default:pM('Unknown command: ' + d.m)}}, false)
//   two ways to stop a wr:
// by calling wr.terminate() from the main page
// by calling self.close() inside of the wr itself.
//
//    Example: Run this wr!
//
//    Say HI  Send unknown command  Stop wr
//  both self and this reference the global scope for the worker.

oMs(function(e) {
    var data = e.data;
    switch (data.cmd) {
        case 'start':
            pM('WORKER STARTED: ' + data.msg);
            break;
        //case 'stop':
    }
}, false)

//    Alt,   could set the onmessage // event handler directly (though addEventListener is always encouraged  by JavaScript ninjas).
m(function(e){d=e.d})
