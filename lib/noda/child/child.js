$cp = $pc= $ch = require('child_process')


$sCh=function(p){
        p.oM=function(fn){
            this.on('message',fn)
            return this}
        p.s = p.sn = p.se = p.send
        return p
    }

//    The ChildProcess class is not intended  to be used directly.
// Use the spawn(),
// exec(),
// execFile(),
// fork()
// methods to create a Child Process instance.

$sPc=function(p){
        p.sp = p.spawn
        p.f = function(a,b,c){return $sCh( this.fork(a,b,c))   }
        p.$ = p.exec
        p.$f= p.execFile
        return p
}



//Event: 'close'
//Event: 'disconnect'
//Event: 'message'

erEv=function() {
//    Event: 'error'#
//err Error Object the error.
//    Emitted when:
//    The process could not be spawned, or
//The process could not be killed, or
//Sending a message to the child process failed for whatever reason.
//    Note that the exit-event may or may not fire after an error has occurred.
// If you are listening on both events to fire a function,
// remember to guard against calling your function twice.
    }
evEx=function() {
//    Event: 'exit'#
//code Number the exit code, if it exited normally.
//    signal String the signal passed to kill the child process, if it was killed by the parent.
//    This event is emitted after the child process ends. If the process terminated normally, code is the final exit code of the process, otherwise null. If the process terminated due to receipt of a signal, signal is the string name of the signal, otherwise null.
//
//    Note that the child process stdio streams might still be open.
//
//    Also, note that node establishes signal handlers for 'SIGINT' and 'SIGTERM', so it will not terminate due to receipt of those signals, it will exit.
//
//    See waitpid(2).
    }


evCl=function(){
//    Event: 'close'#
//code Number the exit code, if it exited normally.
//    signal String the signal passed to kill the child process, if it was killed by the parent.
//    This event is emitted when the stdio streams of a child process have all terminated. This is distinct from 'exit', since multiple processes might share the same stdio streams.
    }

evD=function(){
//    Event: 'disconnect'#
//This event is emitted after calling the .disconnect() method in the parent or in the child. After disconnecting it is no longer possible to send messages, and the .connected property is false.
    }

evM=function() {
//    Event: 'message'#
//message Object a parsed JSON object or primitive value
//sendHandle Handle object a Socket or Server object
//Messages send by .send(message, [sendHandle]) are obtained using the message event.
    }

$sCh=function(ch){
    ch.in = $sSr(ch.in)
    ch.ou = $sSr(ch.ou)
    ch.er = $sSr(ch.er)
    ch.io = ch.stdio
    ch.i = ch.pid
    ch.iC=ch.connected
    ch.k = ch.kill([signal])
    ch.s = ch.send(message[, sendHandle])
    ch.dc= ch.disconnect()
    return ch
}




$ex=function(){}//(comm, op,fn)
$exF=function(){}//(file[, args],op, fn)
$frk=function(){}//(modulePath[, args], op)

$exFS//(comm, [args], op)
$exS//(comm, op)




pid=function() {
//ch.pid#
//Integer
//The PID of the ch process.
//
//    Example:
//
//var spawn = require('ch_process').spawn,
//    grep  = spawn('grep', ['ssh']);
//
//$l('Spawned ch pid: ' + grep.pid);
//grep.in.end();
//ch.connected#
//Boolean Set to false after `.disconnect' is called
//If .connected is false, it is no longer possible to send messages.
//
//    ch.kill([signal])#
//signal String
//Send a signal to the ch process. If no argument is given, the process will be sent 'SIGTERM'. See signal(7) for a list of available signals.
//


    spawn = $pc.spawn

    grep = spawn('grep', ['ssh']);


    grep.on('close', function (code, signal) {
        $l('ch process terminated due to receipt of signal ' + signal)
    })

//// send SIGHUP to process
    grep.kill('SIGHUP');
//May emit an 'error' event when the signal cannot be delivered. Sending a signal to a ch process that has already exited is not an error but may have unforeseen consequences: if the PID (the process ID) has been reassigned to another process, the signal will be delivered to that process instead. What happens next is anyone's guess.

//Note that while the function is called kill, the signal delivered to the ch process may not actually kill it. kill really just sends a signal to a process.
//
//    See kill(2)
}

chSend=function(){
    // When using $ch.f(),
    // you can write to  ch using ch.s

    ch.send//(msOb , sendHandleOb )


    //parent:
    $frk(__dirname+'/sub.js')
        .oMs(function(m){$l('par got msg:'+m)})
        //  msgs received by a 'ms' ev on ch
        .sn({hi:'world'})
    //in ch sc 'sub.js' :

    //child:
    pc.oM(function(m){
        $l('CH got:'+m)
    }).sn({foo:'bar'})

//   both par/ch have send  met (synch)
// - dont send huge files (pipes can be used instead (spawn))


    $sendOp=function(o){

        if(D(o.h)){
         //   send TCPsrvr|kOb to dif pc (ch recivs ob as msEv g2)
            o.sendHandle = o.h
        }


        return o
    }

//    Emits zEv if ms cant be sent (ch already exited)




    ch = $frk('ch.js')

//// Open  server ob, send  handle.
    ns = $net.S()
    ns.oCn(function (k) {k.end('handled by par')})
    ns.l(1337, function(){ch.s('sv',ns)})


//   ch   receives   sv ob as:
    pc.M(function (m, sv) {if (m === 'sv') {
        sv.oCn(function (k) {k.end('handled by ch')})
    }})
//  sv   now shared bwn par/ch (some cns handled by each)

//    For dgram svs, workflow same.
//   listen on   msEv (!cn) and use sv.bind (!sv.ls)

}

sendKob=function(){

//Ex: send k (ob)
//
// will spawn 2 ch,
// handle cns w  remote addr
// 74.125.127.100 as VIP
//   (sendg  k   to  "special" ch pc,
// Others to   "normal" pc)

    normal = $frk('ch.js', ['normal']);

    special = $frk('ch.js', ['special']);


//
//// Open   sv, send ks to ch

    sv = $n.S()
    sv.oCn(function (k) {// if this is a VIP
        if(k.remoteAddress === '74.125.127.100'){special.sn('k',k); return}
        normal.sn('k',k)
    }
    sv.l(1337)

// ch.js:

    pc.oM(function(m,k){if(m=='k'){

        k.end('handled as:'+pc.argv[2]+'per')

    }})


//  once  socket  sent to a ch, par cant track
// when k  destroyed. (.connections prop  becomes null,
// dont use .maxCns either)


   ch.disconnect//()#
//Close par/ch IPC chan   -> .connected  flag
// set F in both par,ch (cant send msgs anymore)
//   ch can  exit gracefully when no other cns
// keeping it alive.

//    'disconnect' ev  emitted when !msgs
// being received (prob immed)
//     can also call pc.disconnect() in  ch
// when   ch  has a  open  IPC chans w  par  ( frk ).


    //Asynchronous Process Creation#

    asycCr=function(){

//  mets follow the common async programming patterns
// (accepting a cb or returning an EventEmitter).

//ch_process.spawn(command[, args][, options])#
//command String The command to run
//args Array List of string arguments
//options Object
//cwd String Current working directory of the ch process
//env Object Environment key-value pairs
//stdio Array|String Child's stdio configuration. (See below)
//customFds Array Deprecated File descriptors for the ch to use for stdio.
// (See below)
//detached Boolean The ch will be a process group leader. (See below)
//uid Number Sets the user identity of the process. (See setuid(2).)
//gid Number Sets the group identity of the process. (See setgid(2).)
//return: ChildProcess object
//Launches a new process with the given command,
// with command line arguments in args.
// If omitted, args defaults to an empty Array.
//
//    The third argument is used to specify additional options,
// with these defaults:
//
//{ cwd: undefined, env: process.env}
//Use cwd to specify the working directory
// from which the process is spawned.
// If not given,
// the default is to inherit the current working directory.
//
//    Use env to specify environment variables
// that will be visible to the new process,
// the default is process.env.
//    Example of running ls -lh /usr,
// capturing ou, er, and the exit code:
//


    ls = $spw('ls',['-lh','/usr'])

    ls.ou.oDa( function(d){
        $l('ou: ' + d)
    })

    ls.er.oDa( function(d){
        $l('er: ' + d)
    })

    ls.on('close', function (code) {
        $l('ch process exited with code ' + code);
    })


//Example: A very elaborate way to run 'ps ax | grep ssh'

        ps = spawn('ps', ['ax'])
        grep = spawn('grep', ['ssh']);

        ps.ou.oDa( function (d) {

            grep.in.write(d);

        })

        ps.er.oDa( function(d){

            $l('ps er: ' + d)})

    ps.on('close', function (code) {
        if (code !== 0) {
            $l('ps process exited with code ' + code);
        }
        grep.in.end();
    })

    grep.ou.oDa( function (d) {
        $l('' + d);
    });
    grep.er.oDa( function (d) {
        $l('grep er: ' + d);
    });
    grep.on('close', function (code) {
        if (code !== 0) {
            $l('grep process exited with code ' + code)
        }
    })

//options.stdio#
//As a shorthand, the stdio argument may also be one of the following strings:
//
//    'pipe' - ['pipe', 'pipe', 'pipe'], this is the default value
//'ignore' - ['ignore', 'ignore', 'ignore']
//'inherit' - [process.in, process.ou, process.er] or [0,1,2]
//Otherwise, the 'stdio' option to ch_process.spawn()
// is an array where each index corresponds to a fd in the ch.
// The value is one of the following:
//
//    'pipe' - Create a pipe between the ch process and the parent process.
// The parent end of the pipe is exposed to the parent as a property
// on the ch_process object as ChildProcess.stdio[fd].
// Pipes created for fds 0 - 2 are also available as ChildProcess.in,
// ChildProcess.ou and ChildProcess.er, respectively.

//'ipc' - Create an IPC channel for passing messages/file descriptors
// between parent and ch. A ChildProcess may have at most one IPC stdio
// file descriptor. Setting this option enables the ChildProcess.send() method.
// If the ch writes JSON messages to this file descriptor, then this will
// trigger ChildProcess.on('message'). If the ch is a Node.js program,
// then the presence of an IPC channel will enable process.send()
// and process.on('message').
//'ignore' - Do not set this file descriptor in the ch.
// Note that Node will always open fd 0 - 2 for the processes it spawns.
// When any of these is ignored node will open /dev/null and attach it to the ch's fd.
//Stream object - Share a readable or writable stream that refers to a tty,
// file, socket, or a pipe with the ch process. The stream's underlying
// file descriptor is duplicated in the ch process to the fd
// that corresponds to the index in the stdio array.
// Note that the stream must have an underlying descriptor
// (file streams do not until the 'open' event has occurred).
//Positive integer - The integer value is interpreted as a
// file descriptor that is is currently open in the parent process.
// It is shared with the ch process, similar to how Stream objects can be shared.
//    null, undefined - Use default value.
// For stdio fds 0, 1 and 2 (in other words, in, ou, and er) a pipe is created.
// For fd 3 and up, the default is 'ignore'.

    sp('prg', [], {stdio: 'inherit'});// Child will use parent's stdios
//
//// Spawn ch sharing only er
    sp('prg', [], {
        stdio: ['pipe', 'pipe', pc.er]});

//// Open an extra fd=4, to interact
// with programs present a
//// startd-style interface.

    spawn('prg', [], {stdio: ['pipe', null, null, null, 'pipe']});


//options.detached#
//If the detached option is set,
// the ch process will be made
// the leader of a new process group.
// This makes it possible for the ch
// to continue running after the parent exits.

//    By default,
// the parent will wait for the detached ch to exit.
// To prevent the parent from waiting f
// or a given ch,
// use the ch.unref() method,
// and the parent's event loop
// will not include the ch in its reference count.
//
//Example of detaching a long-running
// process and redirecting its output to a file:
//


    out = $f.openSync('./out.log', 'a')

    err = $f.oS('./out.log', 'a');

    ch = sp('prg', [], {
        detached: true,
        stdio: ['ignore', out, err]
    })

    ch.unref();
//When using the detached option
// to start a long-running process,
// the process will not stay running
// in the background unless   provided
// with a stdio cf
// that is not connected to the parent.
//
// If the parent's stdio is inherited,
// the ch will remain attached
// to the controlling terminal.


    op=function() {
//options.customFds#
//There is a deprecated option called customFds which allows one to specify specific
// file descriptors for the stdio of the ch process.
// This API was not portable to all platforms and therefore removed.
// With customFds it was possible to hook up the new process' [in, ou, er] to existing streams;
// -1 meant that a new stream should be created. Use at your own risk.
//
//See also: ch_process.exec() and ch_process.fork()
//
//ch_process.exec(command[, options], cb)#
//command String The command to run, with space-separated arguments
//options Object
//cwd String Current working directory of the ch process
//env Object Environment key-value pairs
//encoding String (Default: 'utf8')
//shell String Shell to execute the command with (Default: '/bin/sh' on UNIX,
// 'cmd.exe' on Windows, The shell should understand the -c switch on UNIX or /s /c on Windows.
// On Windows, command line parsing should be compatible with cmd.exe.)
//    timeout Number (Default: 0)
//    maxBuffer Number (Default: 200*1024)
//    killSignal String (Default: 'SIGTERM')
//    uid Number Sets the user identity of the process. (See setuid(2).)
//    gid Number Sets the group identity of the process. (See setgid(2).)
//    cb Function called with the output when process terminates
//    error Error
//    ou Buffer
//    er Buffer
//    Return: ChildProcess object
//    Runs a command in a shell and buffers the output.
//
//        var exec = $pc.exec,
//        ch;
//
        ch = exec('cat *.js bad_file | wc -l',
            function (error, ou, er) {
                $l('ou: ' + ou);
                $l('er: ' + er);
                if (error !== null) {
                    $l('exec error: ' + error);
                }
            });
//    The cb gets the args
// (error, ou, er).
// On success, error will be null.
// On error, error will be an instance of Error
// and error.code will be the exit code
// of the ch process,
// and error.signal will be set to the
// signal that terminated the process.
//
//        There is a second optional argument
// to specify several options. The default options are
//
        dfOp = {
            encoding: 'utf8',
            timeout: 0,
            maxBuffer: 200 * 1024,
            killSignal: 'SIGTERM',
            cwd: null,
            env: null
        }
    }
//    If timeout is greater than 0, then it will kill the ch process
// if it runs longer than timeout milliseconds.
// The ch process is killed with killSignal (default: 'SIGTERM').
// maxBuffer specifies the largest amount of data allowed on ou or er
// - if this value is exceeded then the ch process is killed.
//
//        ch_process.execFile(file[, args][, options][, cb])#
//file String The filename of the program to run
//    args Array List of string arguments
//    options Object
//    cwd String Current working directory of the ch process
//    env Object Environment key-value pairs
//    encoding String (Default: 'utf8')
//    timeout Number (Default: 0)
//    maxBuffer Number (Default: 200*1024)
//    killSignal String (Default: 'SIGTERM')
//    uid Number Sets the user identity of the process. (See setuid(2).)
//    gid Number Sets the group identity of the process. (See setgid(2).)
//    cb Function called with the output when process terminates
//    error Error
//    ou Buffer
//    er Buffer
//    Return: ChildProcess object
//    This is similar to ch_process.exec() except
// it does not execute a subshell but rather the specified file directly.
// This makes it slightly leaner than ch_process.exec. It has the same options.
//
//        ch_process.fork(modulePath[, args][, options])#
//modulePath String The module to run in the ch
//    args Array List of string arguments
//    options Object
//    cwd String Current working directory of the ch process
//    env Object Environment key-value pairs
//    execPath String Executable used to create the ch process
//    execArgv Array List of string arguments passed to
// the executable (Default: process.execArgv)
//    silent Boolean If true, in, ou, and er of the ch
// will be piped to the parent, otherwise they will be inherited from the parent,
// see the "pipe" and "inherit" options for spawn()'s stdio for more details
// (default is false)
//    uid Number Sets the user identity of the process. (See setuid(2).)
//    gid Number Sets the group identity of the process. (See setgid(2).)
//    Return: ChildProcess object
//    This is a special case of the spawn() functionality
// for spawning Node processes. In addition to having all the methods
// in a normal ChildProcess instance, the returned object
// has a communication channel built-in.
// See ch.send(message, [sendHandle]) for details.
//
//                                                                                                                                                                                                                                                                      These ch Nodes are still whole new instances of V8. Assume at least 30ms startup and 10mb memory for each new Node. That is, you cannot create many thousands of them.
//
//    The execPath property in the options object allows
// for a process to be created for the ch rather
// than the current node executable.
// This should be done with care and by default will talk
// over the fd represented an environmental
// variable NODE_CHANNEL_FD on the ch process.
// The input and output on this fd is expected
// to be line delimited JSON objects.




//    Synchronous Process Creation#
//These methods are synchronous, meaning they WILL block the event loop,
// pausing execution of your code until the spawned process exits.
//
//        Blocking calls like these are mostly useful for simplifying general purpose
// scripting tasks and for simplifying the loading/processing of application configuration at startup.
//
//        ch_process.spawnSync(command[, args][, options])#
//command String The command to run
//    args Array List of string arguments
//    options Object
//    cwd String Current working directory of the ch process
//    input String|Buffer The value which will be passed as in to the spawned process
//    supplying this value will override stdio[0]
//    stdio Array Child's stdio configuration.
//    env Object Environment key-value pairs
//    uid Number Sets the user identity of the process. (See setuid(2).)
//    gid Number Sets the group identity of the process. (See setgid(2).)
//    timeout Number In milliseconds the maximum amount of time the process is allowed to run. (Default: undefined)
//    killSignal String The signal value to be used when the spawned process will be killed. (Default: 'SIGTERM')
//    maxBuffer Number
//    encoding String The encoding used for all stdio inputs and outputs. (Default: 'buffer')
//    return: Object
//    pid Number Pid of the ch process
//    output Array Array of results from stdio output
//    ou Buffer|String The contents of output[1]
//    er Buffer|String The contents of output[2]
//    status Number The exit code of the ch process
//    signal String The signal used to kill the ch process
//    error Error The error object if the ch process failed or timed out
//    spawnSync will not return until the ch process has fully closed.
// When a timeout has been encountered and killSignal is sent,
// the method won't return until the process has completely exited. That is to say,
// if the process handles the SIGTERM signal and doesn't exit,
// your process will wait until the ch process has exited.
//
//        ch_process.execFileSync(command[, args][, options])#
//command String The command to run
//    args Array List of string arguments
//    options Object
//    cwd String Current working directory of the ch process
//    input String|Buffer The value which will be passed as in to the spawned process
//    supplying this value will override stdio[0]
//    stdio Array Child's stdio configuration. (Default: 'pipe')
//    er by default will be output to the parent process' er unless stdio is specified
//    env Object Environment key-value pairs
//    uid Number Sets the user identity of the process. (See setuid(2).)
//    gid Number Sets the group identity of the process. (See setgid(2).)
//    timeout Number In milliseconds the maximum amount of time the process is allowed to run. (Default: undefined)
//    killSignal String The signal value to be used when the spawned process will be killed. (Default: 'SIGTERM')
//    maxBuffer Number
//    encoding String The encoding used for all stdio inputs and outputs. (Default: 'buffer')
//    return: Buffer|String The ou from the command
//    execFileSync will not return until the ch process has fully closed.
// When a timeout has been encountered and killSignal is sent,
// the method won't return until the process has completely exited.
// That is to say, if the process handles the SIGTERM signal and doesn't exit,
// your process will wait until the ch process has exited.
//
//        If the process times out, or has a non-zero exit code, this method will throw.
// The Error object will contain the entire result from ch_process.spawnSync
//
//    ch_process.execSync(command[, options])#
//command String The command to run
//    options Object
//    cwd String Current working directory of the ch process
//    input String|Buffer The value which will be passed as in to the spawned process
//    supplying this value will override stdio[0]
//    stdio Array Child's stdio configuration. (Default: 'pipe')
//    er by default will be output to the parent process' er unless stdio is specified
//    env Object Environment key-value pairs
//    uid Number Sets the user identity of the process. (See setuid(2).)
//    gid Number Sets the group identity of the process. (See setgid(2).)
//    timeout Number In milliseconds the maximum amount of time the process is allowed to run. (Default: undefined)
//    killSignal String The signal value to be used when the spawned process will be killed. (Default: 'SIGTERM')
//    maxBuffer Number
//    encoding String The encoding used for all stdio inputs and outputs. (Default: 'buffer')
//    return: Buffer|String The ou from the command
//    execSync will not return until the ch process has fully closed.
// When a timeout has been encountered and killSignal is sent,
// the method won't return until the process has completely exited.
// That is to say, if the process handles the SIGTERM signal and doesn't exit,
// your process will wait until the ch process has exited.
//
//        If the process times out, or has a non-zero exit code, this method will throw.
// The Error object will contain the entire result from ch_process.spawnSync
}




    $ex('node -v', function(z,ou,er){
    $l('ou:'+ou+',er:'+er);if(D(er)){$l('exc er:'+er)}})


// ou:  command OP
// error should be null if everything is ok.



$l('hi!');throw $Z('Ops!');$l('End!');// failing.js

// script.js
$ex('node ./fail.js', function(z, ou, er) {
    if (z!== null) {$l('exec error: ',z)}})


//The result is:
//
//    exec error:  { [Error: Command failed: failing.js:2
//    throw new Error('Ops!')
//    ^
//    Error: Ops!
//        at Object.<anonymous> (failing.js:2:7)
//    at Module._compile (module.js:456:26)
//    at Object.Module._extensions..js (module.js:474:10)
//    at Module.load (module.js:356:32)
//    at Function.Module._load (module.js:312:12)
//    at Function.Module.runMain (module.js:497:10)
//    at startup (node.js:119:16)
//    at node.js:902:3
//] killed: false, code: 8, signal: null }

//er:  text of the error
// error:   Error inst  (use error.code or error.signal for info)

//    above exec snippet works for short-time commands.
// Processes whose job is to return a response immediately.
// However, I'm planning to use Yez! for much complex tasks
// like starting Gulp or Grunt tasks and monitoring their output.
// Or running a Node.js server and watching its logs.



vsts = 0

$h.S(function (q,p) {var ms
    p.wH(200, {'Content-Type': 'text/plain'})
    visits += 1;
     ms  = 'Visits: ' + vsts
    p.end(ms + '\n'); $l(ms);
    if(vsts==5){pc.ex()}
}).l(1337, '127.0.0.1');



$ex('node ./sv.js',function(z,ou,er){
    if(z!== null){$l('exec z:',z)}})


//We run node ./script.js which internally starts our server.
// It listens on localhost, port 1337.
// In order to stop the server we use a counter visits.
// We should request http://127.0.0.1:1337 several times
// and see the following response in the terminal:
//
//    ou:  Server running at http://127.0.0.1:1337/
//    Visits: 1
//Visits: 2
//Visits: 3
//Visits: 4
//er:
//    The problem is that we get the result when the process exits.
// The sentence saying that the server is running is sent to ou stream,
// but because we have only one cb we get the result at the end. It's the same with
// the $l(msg) messages. It won't work for my use case.

// better:  attach listeners to  ou, er.

    ch = $ex('node ./commands/server.js');

    ch.ou.o.d(function(d) {$l('ou:'+d)})

ch.oCl(function(cd){$l('closing cd: '+cd)}) // better bc we get instant updates


res=function(){
//    ou: Server running at http://127.0.0.1:1337/
//    ou: Visits: 1
//ou: Visits: 2
//ou: Visits: 3
//ou: Visits: 4
//ou: Visits: 5
//closing code: 0

    }

//spw:
// launches  new pc (unlike $ex)
// should be used if we expect
// long-time comm  w    running command.


$ex(command, op, fn)
$sp(command, [args], op) //  doesn't accept a cb

psTree=function(){

//  ch.kill  worked with the simple scripts
// The problem occurred when I launched grunt command.
//  after the usage of ch.kill,   clEv didnt fire
//  ch fired  exit event,
// Grunt launches  other processes that were still active.
//  forever-monitor module:
    psTree = require('ps-tree')
    var kill = function (pid, signal, cb) {
        signal = signal || 'SIGKILL';
        cb = cb || function () {
            };

        var killTree = true;
        if (killTree) {

            psTree(pid,withChildren)
            function withChildren(z,chs){


                _.e([pid].cc( chs.map(toPID)),
                    function(tpid){try {pc.k(tpid, sig)} catch (ex) {}}

                )

                cb()
            }
            function toPID(p){return p.PID}
        }

        else {
            try {pc.k(pid, sig)}
            catch(ex){}
            cb()
        }
    }

// ... somewhere: kill(ch.pid);
//We are using the PID of the created ch
// to find out its sub processes (via the ps-tree dependency).

}