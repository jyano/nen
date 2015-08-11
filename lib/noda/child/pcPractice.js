pc.um=function(){
    this.umask//([mask])#
//Sets or reads the pc's file mode creation mask.
// Child pces inherit the mask from the parent pc.
// Returns the old mask if mask argument is given,
// otherwise returns the current mask.
    newmask = 0022;
    oldmask = pc.umask(newmask);
    $l('Changed umask from: ' + oldmask.tS(8) + ' to ' + newmask.tS(8))
}


pc.ut=function() {
    return this.uptime
    //()#  //Number of seconds
    // Node has been running.
}


pc.hr=function(opDifTime){

    return this.hrtime(opDifTime)

    //   cur high-res  real time in a [sc, nsc] tuple Arr
    // . It is relative to an arbitrary time in the past.
    // It is not related to the time of day and therefore
    // not subject to clock drift.
    // The primary use is for
    // measuring performance between intervals.
//        You may pass in the result of a previous call to pc.hrtime()
// to get a diff reading,
// useful for benchmarks and measuring intervals:

    time = pc.hrtime() // [ 1800216, 25 ]
    _.in(function () {
        var dif = pc.hrtime(time);
        $l('took %d nanoscs', dif[0] * 1e9 + dif[1])
    }) // [ 1, 552 ]// took 1000000527 nanoscs


}

pc.tt=function(tt){
    return  this.title(tt)
    //# //Getter/setter to set what
// is displayed in 'ps'.
//        When used as a setter,
// the max  len   pf-spec, probably short.
//       Linux/OS, max size :
// binary name + command line arg
// len (bc overwrites   argv memory)
}


pc.pf=function(){
    return this.platform
    //What pf you're running on:
// 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'
}


pc.mU=function(){
    return this.memoryUsage
    //()# // >>   mem  usage ob
    // of Nd pc(byts)

    //$l($u.inspect(pc.memoryUsage()));
    // r = {
    // rss: 4935680,
    // heapTotal: 1826816,
    // heapUsed: 650472
    // }

}



pc.nT=function(){
    this.nextTick//(callback)#
    $l('start');pc.nT(fn); $l('scheduled');//OP: start // scheduled  nT cb //  can dev API  where  user can assign evHlrs af ob instd, bf I/O
    function Md(op){
        this.sOp(op);
        pc.nT(function(){_.b(this.start(),this)}
        m = new Md(); m.gRdy(); m.start() //calld now (!bf)}}

    }

}


pc.mM=function(){
    return this.mainModule
    //# //Alternate way to retrieve require.main.
    //   dif:  if main mu changes at runtime,
    // require.main might still refer to
    //  orig l main mu in mus
    // that were required bf change.
    // (can assume that   two refer to the same mu)
//   -no entry script -> $U (~require.main)

}

pc.v=function(){
    return pc.version//#
// compiled-in prop:
// exposes NODE_VERSION.
//$l('Version: ' + pc.version)
}
pc.vs=function() {
    return pc.versions
// version strings of node and its dependencies.
//$l(pc.versions) // >> {http_parser: '1.0',  node: '0.10.4',   v8: '3.14.5.8',  ares: '1.9.0-DEV',  uv: '0.10.3',  zlib: '1.2.3',  modules: '11',  openssl: '1.0.1e' }}

}
pc.ar=function(){
    return this.arch
//#//What pcor arch  you're running on:
// 'arm', 'ia32', or 'x64'.

}
//APIs must 100% (synch|asynch)
    function maySy(g, cb) {
        if (g) {cb();return}
        $f.st('file', cb)
    }//api UNSAFE; ex:
    maySy(true, function () {foo()});
    bar() // !clear if foo|bar calld 1st
    function defAsy(g, cb) {
        if (g) {
            pc.nT(cb);
            return
        };
        $f.st('file', cb)
    }// better
//    nT  qu   completely drained
// ea   ev loop pass  bf additional I/O is procssed.
// -recurly  setting nT cbs blocks I/O (~  while(true);)




