out=$pcOut()
s=$rs()  // s.pipe(dst)
$strDcr= require('string_decoder').StringDecoder
$StrDcr=function(a){
    return new $strDcr(a||'utf8')
}
sr = $f.RSr(__filename, {e:'u8'})
sr.oRb(function(){var b;while(b=sr.r()){$l('R from f:',b)}})
sr.once('end', fn)
sr = $f.WSr('out.txt')
i = _.ev(1,function(){sr.w( $D.tS() )})
_.in(5, function(){_.cI(i);sr.end()})
src = fs.RSr(__filename); tg = fs.WSr('copy.js'); src.pipe(tg)
sv = $nS()
upC = $Tf({dcS:0})
src = $RSr(__filename, {e:'8'})
tg = $WSr('upC.js')
src.p(upC).p(tg);
sv.on('cn', function(k) {var upC /// Create the transform stream:
    upC= $Tf({decodeStrings: false});
    upC._transform = function(ch, enc, dn) {db(null, ch.toUpperCase())}
    k.setEncoding('utf8');
    k.pipe(upC).pipe(k)/// pipe socket
})
//Pc Protocol
// Pull off a header delimited by \n\n
// use unshift() if we get too much
// Call the callback with (error, header, stream)
pc.in.p(
    Ws(function(
        ch, //   data  written  by   producer.
        enc,  //  str enc $S   but only when op.dcString false  and  written a str
        n // n(z) is   cb that tells  consumer they can write more.
    ){$d(ch);n()}))
pc.out.w('a b\n')   //To write to a ws, just call .w(d)

ws= $f.ws('ms.txt').w('a')

_.in(function(){ws.e('b\n')}) // a b

function parseHeader(sr,fn){

    var dcr,hdr

    $Sr(sr)

    sr.oZ(fn).oRb(function(){

        var spl,  b,
            str,
            nn=/\n\n/,
            ch=sr.r()
        while(ch!==null){
            str = dcr.w(ch)
            if(str.mat(nn)) {  // found the header boundary
                spl  = str.split(nn)
                hdr += spl.shift()
                b = $BfU(spl.join('\n\n')) //remaining
                if(b.length){sr.unshift(b)}
                sr.xZ(fn)
                sr.xRb(oRb)
                // now the body of the message can be read from the stream.
                fn(null, hdr, sr);
            }
            else {hdr += str;}// still reading the header.
        }
    })
    dcr = $strDcr
    hdr = ''
}
//object mode:
$u.i(JParSr, $Tf)
// Gets \n-delimited JSON string data, and emits the parsed objects
function JParSr(){var sr=this; if (!(sr instanceof JParSr)){return new JParSr()}

    $Tf.call(sr, $srOp({rdbOM:1}))
    sr.bf = ''
    sr.dcr= $StrDcr()
}
JPS = JParSr.prototype
JPS.tf = JPS._transform = function(ch, enc, cb) {var ls
    this.bf += this.dcr.w(ch)
    ls =  $nwLns(this.bf) // split on newlines
    // keep the last partial line buffered
    this.bf = ls.pop()
    _.e(ls,function(l){try {
        var o=J.p(l)}catch(z){this.emit('error',z);return}
        this.push(o)})// push parsed ob to rb(readable) consumer
    cb()
}
JSONParseStream.prototype._flush = function(cb) {
    // Just handle any leftover
    var rem = this._buffer.trim();
    if (rem) {try {var o = J.p(rem);}
    catch (er) {this.emit('error', er);return;}
        // push the parsed object out to the readable consumer
        this.push(o)}
    cb()
}
$u.i(Pc,$Tf);
function Pc(op){var pc=this
    if (!(pc instanceof Pc)){return new Pc(op)}
    $Tf.call(pc,op)
    pc.iB = false //inBody
    pc.sawCr1 = false //firstCr
    pc.rHdr = [] //rawHdr
    pc.hdr=null}
pc=Pc.prototype
pc.tm=function(chs,enc,dn) {

    var pc=this,spl,h
    if(!pc.iB) {// check if the ch has a \n\n
        spl=-1
        _.e(chs, function(ch,k,i){
            if(ch===10){ // '\n'
                if(pc.sawCr1){spl=i;break}
                else {pc.sawCr1=true}}
            else {pc.sawCr1 = false}
        })

        if(spl===-1){pc.rHdr.push(ch)}          // still waiting for the \n\n // stash the ch, and try again.

        else {

            pc.iB=pc.iB = true
            pc.rHdr.push(ch.sl(0,spl))
            try {pc.hdr = J.p(Bff.cc(pc.rHdr).tS())}
            catch (z){pc.em('error', Z('invalid simple protocol data'));return}
            // and let them know that we are done parsing the header.
            pc.emit('hdr',pc.hdr);
            // now, because we got some extra data, emit this first.
            pc.push(ch.sl(spl))
        }
    }

    else {this.push(ch)}
    // from there on, just provide the data to our consumer as-is.
    done();
};
// Usage:
// var parser = new SimpleProtocol();
// source.pipe(parser)
// Now parser is a readable stream that will emit 'header'
// with the parsed header data.
everything=function(){



//Readable
//Readable streams will emit data events
// each time they get a "ch" of data
//and then they will emit end when they are all finished.
// emit

//    Readable streams can also be paused and resumed,
//    and it's up to the Stream implementer
// to write the pause() and
// resume() methods

//Pause is intended to be an advisory API meaning
// when you call it you are telling the stream to
// stop emitting data events


// Writable streams must implement two functions:
// write and end.
// When you write data to a writable stream
// it will return either true or false.
// true means cool,
// keep sending more data with
// write and false means Uh-oh I am backed up --
// don't write any more data until I emit drain.

// This is a form of back pressure which is a very
// powerful feature as it lets stream communicate "upstream"
// to their writers.

//usually you call .destroy() if it has .destroy
//if it doesnt have .destroy
//you are out of luck and the stream
//should upgrade to use e.g. newer through2
//in request you call .abort()
//(this should get fixed to use .destroy())
//what about close, end

//usually no .close method exists
//except in FD backed streams (usually only fs).
//usually you would never call .close()
//    .end() tries to end the stream gracefully
//what about events
//
//finish event is emitted when a stream ends nicely (e.g. stream.end())


//close and error events
// are emitted when a stream ends due to failure (e.g. stream.destroy())
//end is emitted when a readable stream has no more data
//end in streams2 behaves more like a flush event, it only gets emitted when
//the data has been read from the readable

    rbS.p(wbS)

    function XHR_(x) {$xhr(x)
        __._.call(this)
        x.oRS = function(){me.handle()}
        x.s(null)
    }
    $u.i(XHR_,__._)

    ws =  $__().wb(1).w(_rT)
    // true means 'yes i am ready for more data now'
    // OR return false and emit('drain')
    // when ready later
    ws.e(function (data) {
        // no more writes after end
        // emit "close" (optional)
    })
    ws.write({number: 1})
    rs=$Rs()
    rs.readable = true
    rs.on('data', function(d){var rs=this,
        rdy=ws.w(d)
        if(rdy===false){rs.P(); ws.o('drain', _.b(rs.rs,rs))}
    })
    rs.on('end', function() {ws.e()})




    var server = http.createServer(function (q,p) {

        var body = '';
        // we want to get the data as utf8 strings
        // If you don't set an encoding, then you'll get Buffer objects

        q.setEncoding('utf8')

        // Readable streams emit 'data' events once a listener is added
        q.on('data', function(ch){
            body += ch
        })
        // the end event tells you that you have entire body
        q.on('end', function () {
            try {var d = J.p(body)}
            catch (z) {// uh oh!  bad json!
                p.statusCode = 400;return p.e('z: '+z.ms);}
            // write back something interesting to the user:
            p.w(typeof data);
            p.e()
        });
    });

    server.listen(1337);

}
// $ curl localhost:1337 -d '{}' // object
// $ curl localhost:1337 -d '"foo"'// string
// $ curl localhost:1337 -d 'not json'// error: Unexpected token o
future=function(){
    //  Streams on the client

// After working with node for a while
// I came to love the Stream API (
// and I'm not the only one) but sorely missed
// it when I had to deal with the variety of I/O
// bound APIs in the client side realm.
// Some examples of these are
// XHR, WebSockets, IndexedDB, WebWorkers, WebRTC, and DOM Events
// (mouse, touch, etc).
// Wouldn't it be great if you could use the same node
// style Stream semantics to interface
// with all of these things? Unfortunately it
// seems that standards bodies have instead
// implemented their own (usually inconsistent or
// poorly done) streaming semantics for the client.

    //  I thought it would be useful to write s
    // omething like fingerSwipe.pipe(webSocket)
    // (pseudo-code for detecting swipe touch eve
    // nts and streaming them to the server as they
    // happen over a WebSocket connection) so I star
    // ted a project called domnodewhich intends to
    // wrap common I/O bound APIs in node style stre
    // ams so that you can render them into the DOM easily.
    //    There is a magical project by @substack called browserifythat makes domnode possible. It lets you write code in client side JS that looks like node code:


//@dominictarr contributed a Stream wrapper
// for Socket.io called browser-stream
// that nicely integrates with domnode
// so you can emit things from node
// and rest assured that they will make
// their way into your web app.


    //destroy() initiates a forceful end to a stream,
    // whereas destroySoon() and end()
    // both wait for the current data to finish buffering
    //  end() and destroySoon() came from different parts
    // of node originally but after being consolidated
    // into Streams they have some overlap
    // and can probably be redesigned.

    //  There is also some confusion between
    // the close and end events.
    // end means no more data will be emitted
    // but if this stream is also writable
    // it should stay open for more writes
    // if they need to happen
    // and close means whatever this thing was tied to,
    // it's done now.
    // you may dispose of it, it's gone.
    // Close comes from the fs.close() method
    // and end is tied to the end() function
    // on Streams and as you can see these
    // can probably be refactored.

//   Another possibility is that streams
// will get automagic buffering.
// This means that if you create a writable stream
// but haven't yet piped it anywhere
// then it will buffer any data you
// write to it and then emit that data
// when someone asks for it later.
// This same behavior will be available
// if you pause a stream and then resume later.
// Currently you have to roll your own
// buffered stream implementation or
// use a generic third party module


}

s.pu('a')
s.pu('b\n')
s.pu(null);

s._(out);//$ node read0.js beep boop
//  tell consumer rs  dn outputting data? ->rs.pu(null)
//  chunks .push()ed to rs are bfd until  consumer reads them
//  lazy load?  push chunks on-demand  by defining met: ._read

c = 97

s.oR(function(){

    s.pu(_.cC(c++))
    if(c>_.cCA('z',0)){s.pu()}
}


s._(out);//$ node read1.js //abcdefghijklmnopqrstuvwxyz //Here we push the letters 'a' through 'z', inclusive,
// but only when the consumer is ready to read them.
//    The _read function will also get
// a provisional size pam
// as its g1 that specs how many bytes
// the consumer wants to read, but   rs can ignore it
//     can also use $u.i to subclass a rs,
// but that approach doesn't lend itself very well
// to comprehensible examples.
//To show that our _read fn is only being
// called when  consumer requests,  add a delay:

c=97-1

s.oR(function(){
    if(c>= _.cCA('z',0)){return s.pu()}
})


_.sT(function(){
    s.pu(_.cC(++c))},100
)


s._(out)


pc.ex(function(){$z('\n_read() called '+(c-97)+' times')})
out.oZ(pc.ex)


// Running this program we can see that _read()
// is only called 5 times  when we only request 5 bytes of output:
// $ node read2.js | head -c5 //_read() called 5 times
//  -delay necessary bc opSys


// requires some time to send us the relevant signals to close the pipe.
//    pc.out.on('z', fn) cb  necessary
// bc  opSys  sends a SIGPIPE to   pc
// when head is no longer interested in our program's output,
// which gets emitted as
// an EPIPE z on out
//These extra complications
// necessary when interfacing w external
// opSys pipes but   auto when
// we interface directly
// w node srs the whole time.
// obMode; cr rs   that pushes arb vals,
// instead of just strs
// and bfs, use $rs({ob:1})




// consume a readable stream directly.

i=$pcIn()
i.rb(function(){$d(i.r())})

//$ (echo abc; sleep 1; echo def; sleep 1; echo ghi) | node consume0.js
//<Buffer 61 62 63 0a>//<Buffer 64 65 66 0a>//<Buffer 67 68 69 0a>
//null

//When data is available,
// the 'readable' event fires and you can call .read()
// to fetch some data from the buffer.
//    When the stream is finished, .read() returns null
// because there are no more bytes to fetch.
//    You can also tell .read(n) to return n bytes of data.
// Reading a number of bytes is merely advisory
// and does not work for object streams,
// but all of the core streams support it.
//    Here's an example of using .read(n)
// to buffer stdin into 3-byte chunks:
//
i.rb(function(){$d(i.r(3))})

//Running this example gives us incomplete data!
//    $ (echo abc; sleep 1; echo def; sleep 1; echo ghi) | node consume1.js
//<Buffer 61 62 63>//<Buffer 0a 64 65>//<Buffer 66 0a 67>
//this bc there  extra data left
// in internal bfs
// and we need to give node a "kick"
// to tell it that we are interested in more data past
// the 3 bytes that we've already read.
// A simple .read(0) will do this:
i.rb(function () {$d(i.r(3));i.r(0)});

//Now our code works as expected in 3-byte chunks!
//    $ (echo abc; sleep 1; echo def; sleep 1; echo ghi) | node consume2.js
//<Buffer 61 62 63>//<Buffer 0a 64 65>//<Buffer 66 0a 67>//<Buffer 68 69 0a>
//You can also use .unshift()
// to put back data
// so that the same read logic
// will fire when .read() gives you more data
// than you wanted.
//    Using .unshift() prevents us from making
// unnecessary buffer copies.
// Here we can build a readable parser to split on newlines:
//
ofs=0

i.rb(function(){var f=i.r()
    if(!b){return}
    for(;ofs<b.length;ofs++) {
        if(b[ofs]===0x0a){$c.d(b.sl(0,ofs).tS())
            b=b.sl(ofs+1); ofs=0;i.u(b); return}}
        i.u(b)})

// /$ tail -n +50000 /usr/share/dict/american-english |
// head -n10 | node lines.js
//'hearties'//'heartiest'//'heartily'//'heartiness'
// 'heartiness\'s'//'heartland'//'heartland\'s'//'heartlands'//'heartless'//'heartlessly'
//However, there are modules on npm such as split
// that you should use instead of rolling your
// own line-parsing logic



split=function(){

   // Break up  sr and reassemble it so  ea line is  ch;

// Ex, read every line in a file ...
    $f.rs(f)._(spl()).oDat( function (line) {})
    //each ch now is a sep line!
    //spl  takes the same args as string.split
    // except   dfs to '/\r?\n/', !',' and  lm pam ignored

    spl(matr, // matr may be   S|RE
        mapr,//spl  accs fn which tfs each line.
        op
    )

    // options:
    //    maxLength -  mx bf len  w/o seeing newline|matr,
    // if 1 line exceeds this, split sr emits z
      //  split(J.p, null, { mxLen: 2})
    //trailing
    // - By df the last b not delimited by newline|matr will emit
    // To prevent this set op.trailing=F    split(J.p, null, { trailing:F }) // keep matd splitter
    // /As w $A.split, if you split by RE w  matg grp,  mats retained in cl

    i._(spl(/(\r?\n)/)) //... //lines + seps.  NDJ - Newline Delimited J
    $f.rs(f)._(spl(J.p)).oDat(fn)   //each ch now js ob
        .oZ(fn)//syntax zs  land here; -ends sr

}
