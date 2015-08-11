child=function(){
//parent
    ch = $ch.sp('node', ['ch.js']) //run Nd (ch.js as arg)
    ch.in.w("Hi!");// Send data to the child pc via its stdin stream
    ch.ou.oDa(function (d) {
        $l('We received a reply: ' + d)
    })// Listen for any response from the child:
    ch.er.oDa(function (d) {
        $l('There was an error: ' + d)
    })// Listen for any errors:
//child
    pc.rs(function (d) {
        $l('Received data: ' + d)
    })
      //    Unpause the stdin stream: pc.stdin.resume()
    // Listen for incoming data: pc.stdin.on('data',fn )
}

// kill()  wont kill ch pc’s own spawned ch pc's.
sp  = $spw()
ch = sp('my-command')
ch.k()



//We can start ch  pcs  with
// {detached: true} option
// so those processes will not be
// attached to main process
// but they will go to a new group
// of processes.

// Then using process.kill(-pid) method
// on main process we can kill
// all processes that are in the
// same group of a child process
// with the same pid group.





// In my case, I only have one processes
// in this group.



ch  = sp('my-command', {detached: true});

pc.k(-ch.pid) //- bf pid : pid -> pidGrp for (pc.k)

//In Node.js it is a fairly common practice
// to fork
// one or more companion child processes
// to a main process,
// such as when you need precise timing
// over short intervals,
// or when you need to run something
// computationally intensive
// and don't want to tie up
// the main thread of operation.
// Node.js provides the core
// child_process and cluster modules
// to manage forking,
// sharing of ports,
// and communication
// between processes to support
// various different types
// of multi-process application.



//On the command line SIGKILL is gend by  "kill -9" command, (abrupt kill, no cleanup)

// SIGTERM by "kill",  // and SIGINT by crtl-c.  (can end gracfly)

//  sv pc should  shut down in response to SIGINT
// -  it is prob rung from  comm line  during dev,
// (devr wants to stop it)
// Only fire once ( avoid potential overlap )

pc.o1TERM=function(fn){this.o1('SIGTERM', fn)}
pc.o1TERM(function(){pc.ex(0)})
     //shutdown.// Cleanup activities go here...

//  can't lsn for    KILL
//   cr  companion ch  pc
// (that shuts down when par does)

chArgs = []
ch  = $frk(
    $p.j(__dirname, "ch.js"),// Run  ch.js (~ same dir as this file)
    chArgs, {
        env: pc.ENV, // Pass over all  envir
        silent: false})
ch.oM(fn)//  Lsn for ch msgs, respond



// chpc dies unexpect, do what?  1)  fork  new ch
// 2)  exit par   ex:
ch.oUExpctEx=function(cd,sig){
    $l("Ch pc terminated w cd: "+cd);pc.ex(1)
}// Helper fn added to  chpc to manage shutdown.

ch.oEx(ch.oUExpctEx);


//  ways   parent pc  can end:
// (a) pc.ex()  called somewh
// (b)  SIGINT|TERM sig  received
// (c) unEx thrown.
// These can all be managed such
// that  par AND ALSO ch pc  shut down


exEv=function() {
//  TERM and INT   trg ex Ev
    pc.shutdown = function (UnexpectedExit) {
        //  to cleanup: get rid of ex Lsnr
        this.O.ex(UnexpectedExit).k("SIGTERM")
    }

}

pc.o1TERM(function(){pc.exit(0)});
pc.o1INT( function () {pc.exit(0)});
pc.o1Ex(function(){ch.shutdown()})//   ex  ev shuts down  ch
//   -works  in conj  w most  what 3rd parties might   do w   ucEx lsnrs, while preserving   exception ty
pc.o1Ex(  function (z) {if (pc.uEx().length===0) {ch.shutdown();throw z;}});

// I s last lsnrs?->   shutdown  ch, rethrow.
// assume  code lsng for  uCEx will    call pc.ex().




sigKill=function(){

    //  SIGKILL should not be sent to your par  pc (TERM ok)
    //  SIGKILL does not give  par   time to  kill forked chs!
    //  (will run until  either deadPar/ch-commChan times out or ucEx)



}