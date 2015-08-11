//High-level way to execute a command as a ch,  bf OP, return it all in cb
//  simplest way ( "fire, forget, and buffer" )
// It runs your process, buffers its output  (up to a default maximum of 200kb),
// maxBuffer specs the largest amount of data  allowed on stdout or stderr
// - too much data? ch killed.
//>>  returns the whole ch buffer output (as buffer)
//   buffers  ch OP,  >> ChPc ob (wrapped still-running pc !)
// and lets you access it from a callback when it is finished.
// use  when   ch  rets simp sts msgs
// can set max   buffer size (df=200,000 in the exec options.
//  not meant for processes that return HUGE buffers  (use spw for that)
// Use  to run programs that return result statuses, instead of data.
//   "synchronously asynchronous",
//  although the exec  asynch,  waits for the ch   to end
// and tries to return all the buffered data at once.
//If timeout > 0, ch killed on timeout (df=SIGTERM').
//    Pam:  command(S), op,  function(Error?|...[*]):undefined=} callback
//exec(comm, op, fn)


$exOp=function(o){
    o = o || {}
    dfOp={

        encoding: 'utf8',

        timeout: 0,

        maxBuffer: 200*1024,

        killSignal: 'SIGTERM',

        cwd: null,

        env: null
    }
    //    e   encoding: 'utf8',
    //    b   maxBuffer: 200*1024,
    //    t   timeout: 0,
    //    s   killSignal: 'SIGTERM',
    //    d   cwd: null,
    //    en  env: null
    return o
}



ch = $ex('cat *.js badfile | wc -l', function (error, stdout, stderr) {




    $l('stdout: ' + stdout);
    $l('stderr: ' + stderr);
    if (error !== null) {
        $l('exec error: ' + error);
    }
})

ls = $ex('ls -l', function (error, stdout, stderr) {
        if (error) {
            $l(error.stack);
            $l('Error code: '+error.code);
            $l('Signal received: '+error.signal);
        }
        $l('Child Process STDOUT: '+stdout);
        $l('Child Process STDERR: '+stderr);

})

ls.oEx(function (chExitCode){$l('ChPc exited')})
// - pc will exit  (error code shown on errors)

execFile=function() {
// execFile(file, options, callback)
//Parameters:
//{string} file
//{Object} options
//{function(Error?|...[*]):undefined=} callback
}
err=function() {
    // On success, error will be null.
// On error, error will be an instance of Error
// and err.code will be the ch's exit code,
// and err.signal will be set to the signal
// that terminated the process.

//  error.stack is a stack trace to the point that
// the Error object was created.
}