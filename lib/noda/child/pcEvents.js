
evExit=function(){
    //  cb   arg : code  pc   exiting with.
//Emitted when   pc  about to exit. (cant stop   ev loop from exiting)
// once all exit lsnrs finished running->   pc will exit
// -good hook to perform  mu state checks (unit txs),

    pc.oEx(function (js) {
        _.do(function () {
            // -perform ONLY synch  opers
            $l('fail')})

        $l('About to ex w:', js)
    })
}
bfExEv=function(){

//Event: 'beforeExit'#
//This event is emitted when node empties
// it's event loop and has nothing else to schedule.
// Normally, node exits when there is no work scheduled,
// but a listener for 'beforeExit' can make asynchronous calls,
// and cause node to continue.


//'beforeExit' is not emitted for conditions
// causing explicit termination,
// such as pc.exit() or ucExs,
// and should not be used as an alt
// to the 'exit' event unless the
// intention is to schedule more work.
}
sigEv=function(){

//Emitted on SIGINT, SIGHUP

    pc.in.rs();

    pc.oINT(function(){
        $l('Got INT. Cntrl-D to ex')

    }) //resume Start reading from stdin (so we !ex)

// USR1  reserved by nd to start  dbr. -instlg  lsr !stop dbr  starting.

    //     BREAK: oCTRLBRK,lsb, cant send|gen it.
//     WINCH: oCslResz;   KILL:!lsb, TERMS nd; STOP:!lsb

//     HUP: gen when csl wd cld, -lsb; ends nd

// TERM : ldb // PIPE=ignored; lsb

// INT from term; gen  w CTRL+C; // send  INT w CntrC ('term raw' mode? !gen)
    // TERM, INT:have df hlrs , resets  term  mode bf exg:
    // code 128 + sig  num (sig  has lsr?  df bh rmd (nd wont ex), ~HUP)

// -   sig  0 can search  existence of  pc

// -    INT,TERM,KILL unconditionally  exit pc


}

