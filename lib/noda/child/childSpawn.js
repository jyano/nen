//static node.child_process
// .spawn(path, args, options, customFds)


//Launches a new process with the given command,
// with command line arguments in args.
// If omitted, args defaults to an empty Array.
// The third argument is used
// to specify additional options, which defaults to:
//{
//    cwd: undefined,
//    env: process.env,
//    customFds: [-1, -1, -1],
//    setsid: false
//}


//cwd allows you to specify the working directory
// from which the process is spawned.

// Use env to specify environment variables
// that will be visible to the new process.

// With customFds it is possible to hook up
// the new process' [stdin, stout, stderr] to existing streams;

// -1 means that a new stream should be created.

// setsid, if set true,
// will cause the subprocess; to be run in a new session.





ls = $spw( 'ls',  ['-lh','/usr'] )


//     capturing stdout, stderr, and the exit code:
ls.ou.oDa(function(d){$l('ou: '+d)})
ls.er.oDa(function(d){$l('er: '+d)})
ls.oEx(function (code) {
    $l('child process exited with code ' + code);
});
nZ=function(a){return a!==0}


// ex: run 'ps ax | grep ssh'
ps = $spw('ps',['ax'])
gr =$spw('grep', ['ssh'])

ps.oOuDa(function(d){gr.inW(d)}).oOuEr(function(d){$l('ps er:'+d)})

ps.oEx(function(cd){
    if(nZ(cd)){
        $l('ps pc exd w cd:'+cd)};
    gr.inE()})

gr.ou.oDa(_lD);
gr.er.oDa(function(d){$l('grep er:'+d)})
gr.oEx(function(cd){if(cd!==0){
    $l('grep pc exd w cd:'+cd)}})




$spw('badcommand').er.oDa(function(d){
    if(/^execvp\(\)/.test(d.asciiSlice(0,d.length))){
        $l('Failed to start ch pc')}})// check for failed exec:




// use   when   ch returns LARGE  data to Node (img processing, read  binary da)
// to return huge binary data to Node

// "asynchronously asynchronous" ( starts sending back data stream from   ch  upon ch execution

// >> sr (ob w stdout, stderr srs)


//stdout: // is a sr //  has the "data", "end" .. // provides da that ch sends (back to Node)



// can stream data through the child's
// stdin, stdout, and stderr
// in a fully non-blocking way.

$spw=function(comm, argsA, op){
    $spwOp=function(o){
        o=o||{}
        if(D(o.s)){o.stdio = o.s}
        if(D(o.d)){
            o.detached = o.d}

        if(D(o.c)){
            o.customFs = o.c}
        return o
    }

    var g=G(arguments), o,p
    o={comm: g.f}
    _.x(o, A(g.s)? {args: g.s, op: g.t}:{op: g.s})
    o.op= $spwOp(o.op)
    p = $cp.spawn(o.comm, o.args, o.op)
    $sPc(p)
    p.od=p.oOuDa=function(fn){
        this.ou.oDa(fn)
        return this
    }
    p.ez=p.oOuEr=function(fn){
        this.ou.oEr(fn)
        return this
    }
    g.inW=function(d){
        this.in.write(d)
        return this}
    g.inE=function(a){
        this.in.end(a)
        return this
    }
    return p
}

$spwS//(comm, [args],op)