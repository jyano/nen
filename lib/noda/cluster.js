cont=function(){
  
//Cluster
//How It Works
//$cs.schedulingPolicy
//$cs.settings
//$cs.isMaster
//$cs.isWorker
//Event: 'fork'
//Event: 'online'
//Event: 'listening'
//Event: 'disconnect'
//Event: 'exit'
//Event: 'setup'
//$cs.setupMaster([settings])
//$cs.fork([env])
//$cs.disconnect([fn])
//$cs.worker
//$cs.workers
//Class: Worker
//worker.id
//worker.process
//worker.suicide
//worker.send(message[, sendHandle])
//worker.kill([signal='SIGTERM'])
//worker.disconnect()
//worker.isDead()
//worker.isConnected()
//Event: 'message'
//Event: 'online'
//Event: 'listening'
//Event: 'disconnect'
//Event: 'exit'
//Event: 'error'

 }
// 1 inst of Node runs in 1 thread.   take advantage of multi-core sys ?  launch a cluster of Node processes to handle the load.  -cluster  creates  child processes that all share server ports.

lib()
function lib(){
    $os= require('os')
    $os.nCPU=function(){return this.cpus().length}
    $cs = require('cluster')
    $cs.iM=function(){return this.isMaster}
    $cs.iW=function(){return this.isWorker}
    $cs.sM=function(a,b,c){return this.setupMaster(a,b,c)}
    $cs.f=$cs.fork
    $cs.ws=function(){return this.workers}
    $cs.ks=function(fn){var $cs=this
        var k = $O.keys(this.ws())
        if(F(fn)){_.e(k,fn);return $cs}
        return k}
    $cs.oEx=function(fn){this.on('exit',fn);return this}
    $cs.oL=function(fn){this.on('listening',fn);return this}
    $cs.oF=function(fn){this.on('fork',fn);return this}
    $cs.oO=function(fn){this.on('online',fn);return this}
    $cs.oD=function(fn){this.on('disconnect',fn);return this}
}
if ($cs.isM()) { // Fork workers.
    _.t($os.nCPU(), function(){$cs.f()})
    $cs.oEx(function(wr, js,sig){
        $sWr(wr)
        $l('wr '+wr.pc.pid+' died')

    })

}
else {$h.S(function(q,p){p.wH(200);p.end("hi\n")}).lsn(8000)}// -ws can share any TCP conn(here:  a HTTP srvr)

//Rung node now shares port 8000 bwn wrs
//    % NODE_DEBUG=cluster node server.js //23521,Master Worker 23524 online //23521,Master Worker 23526 online //23521,Master Worker 23523 online //23521,Master Worker 23528 online


// wr pcs spwnd w $frk, can commc w par via IPC, pass sv handles back/forth)

//
//    The cluster module supports two methods
// of distributing incoming conns.
//
//    The first(df) one: round-robin approach,
// where the MsPc listens on a port,
// accepts new connections and distributes
// them across the workers in a round-robin fashion,
// with some built-in smarts to avoid overloading a worker process.
//
//    The second approach
// is where the MsPc
// creates the listen socket
// and sends it to interested workers.
//
// The workers then accept incoming connections directly.
//
//    The second approach should,
// in theory, give the best performance.
// In practice however, distribution tends to be very
// unbalanced due to operating system scheduler vagaries.
//
// Loads have been observed where over 70% of all connections
// ended up in just two processes, out of a total of eight.
//
//    Because server.listen() hands off most of the work to
// the MsPc, there are three cases where  bh bwn  normal
// node.js process and a cluster worker differs:
//
//    server.listen({fd: 7}) Because the message is
// passed to the master, file descriptor 7 in the parent
// will be listened on, and the handle passed to the worker,
// rather than listening to the worker's idea of what the number 7 file descriptor references.
//server.listen(handle) Listening on handles explicitly
// will cause the worker to use the supplied handle,
// rather than talk to the MsPc.
// If the worker already has the handle,
// then it's presumed that you know what you are doing.
//server.listen(0) Normally, this will cause servers
// to listen on a random port. However, in a cluster,
// each worker will receive the same "random" port each time they do listen(0). In essence, the port is random the first time, but predictable thereafter. If you want to listen on a unique port, generate a port number based on the cluster worker ID.
//    There is no routing logic in Node.js,
// or in your program, and no shared state bwn the workers.
// Therefore,
// it is important to design your program such that
// it does not rely too heavily on in-memory data obs
// for things like sessions and login.
//
//    Because workers are all separate processes,
// they can be killed or re-spawned depending on your program's needs,
// without affecting other workers.
//
// As long as there are some workers still alive,
// the server will continue to accept connections.
// Node does not automatically manage the number of workers for you,
// however.
//
// It is your responsibility to manage the worker pool
// for your application's needs.
//
//    $cs.schedulingPolicy#
//The scheduling policy, either $cs.SCHED_RR for round-robin or $cs.SCHED_NONE to leave it to the operating system. This is a global setting and effectively frozen once you spawn the first worker or call $cs.setupMaster(), whatever comes first.
//
//    SCHED_RR is   df
//    $cs.schedulingPolicy can also be set through
//  NODE_CLUSTER_SCHED_POLICY envir var
// Valid vals:   "rr"  "none".
//
//    $cs.settings#

//Object
//execArgv Arr list of str args passed to   nd exb
// (Default=pc.execArgv)
//exec String file path to worker file. (Default=process.argv[1])
//args Array string arguments passed to worker. (Default=process.argv.slice(2))
//silent Boolean whether or not to send output to parent's stdio. (Default=false)

//uid Number Sets the user identity of the process. (See setuid(2).)

//gid Number Sets the group identity of the process. (See setgid(2).)

//After calling .setupMaster() (or .f()) this settings object will contain the settings, including the default values.
//
//    It is effectively frozen after being set,
// because .setupMaster() can only be called once.
//
//    This object is not supposed to be
// changed or set manually, by you.
//
//    $cs.isM()#
//Boolean
//True if the process is a master. This is determined by the process.env.NODE_UNIQUE_ID. If process.env.NODE_UNIQUE_ID is undefined, then isM() is true.
//
//    $cs.isWorker#
//Boolean
//True if the process is not a master (it is the negation of $cs.isM()).
//
//Event: 'f'#
//worker Worker object
//When a new worker is forked the cluster module will emit a 'fork' event. This can be used to log worker activity, and create your own timeout.


timeouts = []

$cs.oF(function(wr) {timeouts[wr.id] = _.sT(function(){
    $z("Something wrong w cn ...")}, 2000)})
$cs.oL( function(wr, addr){_.clT(timeouts[wr.id])})
$cs.oEx(function(wr, code, signal) {_.cT(timeouts[wr.id]); zMsg();});

//Event: 'online'#
//wr Worker object
//After forking a new wr, the wr should respond with an online message. When the master receives an online message it will emit this event. The difference between 'fork' and 'online' is that fork is emitted when the master forks a wr, and 'online' is emitted when the wr is running.
//
    $cs.oO( function(wr) {$l("Yay, the wr responded after it was forked");});
//Event: 'listening'#
//wr Worker object
//address Object
//Af calling lsn() from a wr, when 'lsng' ev emitted on sv ->lsng ev emitted on ms cluster
// ev  hlr  execd w  2args,  wr has  wr ob / and  addr  ob has cn props: addr , port, addrType  (useful if wr lsng >1 addr)


$cs.oL(function(wr, ad) {$l("A wr is now connected to " + ad.address + ":" + ad.port);});

//  addrType   one of:  4 (TCPv4)    6 (TCPv6)   -1 (unix domain socket)   "udp4" or "udp6" (UDP v4 or v6)



//Event: 'disconnect'#    wr ob  //Emitted after  wr IPC chan  has discond
//  (can occ  when a wr exs gracel, i killed, or  discond manually (wr.dscn))
//  may be delay bwn  disconnect and exEvs
//  evs can  detect if   pc is stuck  in cleanup, or if   long-living cns

$cs.oD( function(wr){$l('wr#'+wr.id+' dscnd')})
//Event: 'exit'#    wr dies ->  cluster mu  emits exEv
//  (can be used to restart the wr by calling .f() again)
$cs.oEx( function(wr, exCdNum, sig) {$l('wr %d died (%s). restarting...', wr.prc.pid, sig  || exCdNum); $cs.f();})
//    Event: 'setup'#   Emitted when .sM()  called.  setgs ob :  $cs.sgs ob  when .sM()  called   -advisory only ( mult calls to .sM() can be made ea tk) // need accuracy?  use $cs.settings.
//
    $cs.sM(op)
 
//exec(=process.argv[1]String file path to wr file.)


//args=pc.argv.slice(2):  [str arg] passed to wr 

//silent=F : send OP to par's stdio or not? 

//sM  used to change  df 'fork' bh. 
// Once called, the setgs  present in $cs.settings.
//   setgs changes only affect future  .f()  calls  (! wrs   already running)
//  -only attr  of   wr that cant be set via .sM()  is   env passed to .f()
// dfs above apply to 1st call only (dfs for later calls is  cur  val  from when $cs.sM  called)

$cs.sM({exec: 'wr.js', args: ['--use', 'https'], silent: true});
 
$cs.sM({args: ['--use', 'http']});

$cs.f(); // http worker //This can only be called from the MsPc.
$cs.f//([env:   Key/value pairs to add to wr pc envir      ])#   >> new Worker pc ob   (can only be called from the MsPc)





   $cs.disconnect//([fn])#
//  called when all wrs are discond and handles   closed
//calls .disconnect() on each wr in $cs.wrs.
//    When   discond all internal handles closed, mspc  dies gracely if !ev waiting
//    -takes an opl cb    
//    -can only be called from  ms pc
//
//    
// $cs.wr: cur wr ref (!avail in ms pc)
//
    

if ($cs.isM()) {
    $l('I am master');
    $cs.f();
    $cs.f();
} else if ($cs.isWorker) {
    $l('I am wr #' + $cs.wr.id);
}
//$cs.wrs#
//Object
//A hash that stores the active wr objects, keyed by id field. Makes it easy to loop through all the wrs. It is only available in the MsPc.
//
//    A wr is removed from $cs.wrs after the wr has disconnected and exited. The order between these two events cannot be determined in advance. However, it is guaranteed that the removal from the $cs.wrs list happens before last 'disconnect' or 'exit' event is emitted.
//
//// Go through all wrs
    function eachWorker(fn) {
    for ( id in $cs.wrs) {
        fn($cs.wrs[id]);
    }
}
eachWorker(function(wr) {
    wr.send('big announcement to all wrs');
});
//Should you wish to reference a wr over a communication channel, using the wr's unique id is the easiest way to find the wr.

socket.on('data', function(id) {
     wr = $cs.wrs[id];
})


//Class: Worker#
//A Worker object contains all public information and method about a wr. In the master it can be obtained using $cs.wrs. In a wr it can be obtained using $cs.wr.
//
//    wr.id#
//String
//Each new wr is given its own unique id, this id is stored in the id.
//
//    While a wr is alive, this is the key that indexes it in $cs.wrs

wrPc=function() {
//wr.process#
//ChildProcess object
//All wrs are created using child_process.f(), the returned object from this function is stored as .process. In a wr, the global process is stored.
//
//    See: Child Process module
//
//Note that wrs will call process.exit(0) if the 'disconnect' event occurs on process and .suicide is not true. This protects against accidental disconnection.
}

wrSuicide=function() {
 wr.suicide//#//Boolean // call  .k() or .dscn(), until then it $U
//      distinguish bwn volunt/accid  ex (ms may choose not to respawn a wr based on val)
    $cs.oEx(function (wr,code,sig){if(wr.suicide===true){$l('suicide')}})
    wr.k()
}

wrSend=function() {
//wr.send(message[, sendHandle])#
//message Object
//sendHandle Handle object

//This function is equal to the send methods
// provided by $cp.f().

//    in ms: use fn to send   ms to spec  wr.
//    in wr: use pc.send(ms) (~ fn)


//ex: echo back all msgs from ms (master)

    if ($cs.isM()) {$cs.f().send('hi there')}
    else if ($cs.iW()){pc.oM(function(m){pc.send(m)})}

}


kill=function() {

//wr.kill([signal='SIGTERM'])#


//signal String Name of the kill signal to send to the wr process.
//    This function will kill the wr.
// In the master,
// it does this by disconnecting the wr.process,
// and once disconnected,
// killing with signal.
// In the wr, it does it by disconnecting the channel,
// and then exiting with code 0.
//
//Causes .suicide to be set.
//
//    This method is aliased as wr.destroy() for backwards compatibility.
//
//    Note that in a wr, process.kill() exists,
// but it is not this function, it is kill.
//
//    wr.disconnect()#
//In a wr, this function will close all servers,
// wait for the 'close' event on those servers,
// and then disconnect the IPC channel.
//
//    In the master, an internal message is sent
// to the wr causing it to call .disconnect() on itself.
//
//    Causes .suicide to be set.
//
//    Note that after a server is closed,
// it will no longer accept new connections, but cns
// may be accepted by any other listening wr.
// Existing connections will be allowed to close as usual.
// When no more connections exist, see server.close(),
// the IPC channel to the wr will close allowing it to die gracefully.
//
//    The above applies only to server connections,
// client connections are not automatically closed by wrs,
// and disconnect does not wait for them to close before exiting.
//
//    Note that in a wr, process.disconnect exists,
// but it is not this function, it is disconnect.
//
//    Because long living server cns may block wrs
// from disconnecting,
// it may be useful to send a message,
// so application specific actions may be taken to close them.
// It also may be useful to implement a timeout,
// killing a wr if the dscnEv  not been emitted after some time.

    if ($cs.isM()){
        w = $frk()
        w.oL(function (addr){w.sn('shutdown'); w.dscn()
            tmO = _.in(2,function(){w.k()})})
        wr.oDscn(function(){_.cT(tmO)})
    }
    else if($cs.iW()) {
        $n.S(function(k){}).lsn(8000); // connections never end
        pc.oM(function (m) {if (m === 'shutdown') {}})  //   graceful close of any srv cns
    }


 wr.isDead//()# has wr's pc terminated??  (  bc of exg or being signaled)?


}


//wr.isConnected()# is wr   connected to its ms
// via its IPC chan?
//   wr  cnd to its ms af  created,  dscnd af dscn ev   emitted.




//Event: 'message'#  ~  $frk.ms ev  In  wr, can also use pc.on('message').
//     cluster   keeps count of the num  requests in   MsPc using  ms sys:

if ($cs.iM()){
     nReqs=0;_.ev(function(){$l("nReqs:",nReqs)})  //  track   http reqs
    _.t($os.nCPU(),function(){$cs.f()})// Start wrs and listen for messages containing notifyRequest
    $cs.ks(function(id){$cs.ws()[id].oM(function(m){
        if(m.cmd&&m.cmd=='notReq'){numReqs+=1}})})}
else {//wrPcs have http sv
    $h.S(function(q,p){
        p.wH(200).E("hi\n");pc.sn({cmd:'notReq'})
    }).lsn(8000)} // notify ms about req




$frk().oOl(fn) // online: sim to  $cs.on('online') ev, but spec  to this wr, !emitted in  wr.
//Event: 'listening'# address Object //Sim to the $cs.on('listening') event, but specific to this wr.
$frk().on('listening',  function(addr ) {// wr lsng
    }); //  !emitted in  wr


evDisconnect//'# Similar to the $cs.on('disconnect') event, but specfic to this wr.
$frk().on('disconnect', function() {
        // Worker has disconnected
    });



evEx//code Number the exit code, if it exited normally.  name of  sig  that killed pc ( 'SIGHUP')



$frk().oEx(function(cd,sig){
    if(sig){$l("w kd by sig:"+sig)}
    else if(cd!==0){$l("w exd;z-cd:"+cd)}
    else {$l("w succ!")}})


//Event: 'error'# same as the one provided by child_process.f(). //    In a wr you can also use process.on('error').