$ws=function(){var g=G(arguments), s,
    o= g.F_? {fn:g.f,ob:g.s}: {ob:g.f, fn:g.s}
    o.ob= $wsOp(o.ob)
    s=$sWs( new $sr.W(o.ob) )//new stream.Writable(op)
    if(o.fn){s.oW(o.fn)}
    return s
}
_.e([write, end, evs, drain, cork],function(fn){fn()})
$call=function(){
    G(arguments,
        function(fn){fn()})
}// <- G(ag).e(fn)
function $sWs(w){
    $call(write, end, evs, drain, cork)
    function write(){
        w.w=function(d){
            this.write(d);return this} //writable.write(chunk[, encoding][, callback])
        w.oW=function(fn){this._write=fn;return this}
        w.wb=function(a){this.writable = !!a; return this}}
    function end(){
        w.end(d,enc,fn)
        w.E= function(fn){
            this.end=fn;return this
        } //To tell  dst ws  done writing, call .end(d)// can pass final data

    }
    function evs() {
        w.o.fh = 'finish'
        w.o._ = 'pipe'
        w.o.__ = 'unpipe'
        //'error'(dup)
    }
    function drain(){
        w.o.dr = 'drain'
        w.oDr = function (fn) {
            this.on('drain', fn);
            return this
        }
        //If you want to wait for the buffer to  empty again,
        // listen for a 'drain' event.
    }
    function cork(){
        w.ck= w.cork; w.uc= w.uck=w.uncork
        w.ec=function(ec){this.setDefaultEncoding(ec); return this}

    }
    return w
}
$wsOp=function(ob){ob=ob||{}
    if(D(ob.op)){ob.options=ob.op}
    if(D(ob.wM)){ob.highWaterMark=ob.wM}//highWaterMark=16kb  or 16 for objectMode streams (N) // Bf lvl when w() starts returning false
    //  If you care about high water marks and buffering, .write()
    // returns false when there is more data
    // than the opts.highWaterMark option passed to
    // Writable() in the incoming buffer.
    if(D(ob.dcS)){ob.decodeStrings=!!ob.dcS}//decodeStrings=true; Decode strs into Bfs bf passing them to _w()?
    //  stop piped str converted -> bf?   Wr({dcS:0}) )
    //  wr will receive obs? ->  Wr({ob:1})
    if(D(ob.ob)){ob.objectMode = !!ob.ob} //objectMode=F; Shall (anyObj) be a valid oper?
    // If set you can write arbitrary data instead of only
    // Buffer / String data.
    //In classes that extend the Writable class,
    // make sure to call the constructor
    // so that the buffering settings
    // can be properly initialized.
    return ob
}

// can .p() to/not from: src.p(ws)
// define  met: _write(ch, enc, n), then can pipe rs in:

nd={}
nd.f=$f
nd.p=$p