$sr = require('stream')
$sr.Sr=  function(ob){return new $sr.Stream(ob)}
$sr.R=$sr.Readable
$sr.W=$sr.Writable
$sr.T=$sr.Transform
//rs produce data that can be fed  into a ws,
// tfS, dpSr   by calling .pipe()


ev=function() {

    oO = function (fn) {this.on('open', fn)}
    oF = function (fn) {this.on('file.bytesWritten', fn)}

// open:  fd Int file descriptor used by ws.  Emitted when ws's file  opened.
// :  num bytes written so far, !includg data still queued for writing.

}

$BfU=function(a){
    return $Bf(a,'utf8')
}
 //rs._(dst(ws for writing da) , op  ) //op: end(B=true)  writer when the reader ends.
 // sr rs data ->,  spec 1_ dst(s),  // automanagg flow   (  !overwhelm dst )
// >>  dst sr, so you can chain pipes
ws = $f.ws('f.txt'); // rs sr ->   'f.txt'
rs._(ws)
r = $f.rs('f.txt');
z = zlib.createGzip();
w = $f.ws('f.txt.gz');
r._(z)._(w)

pc.in._(pc.out);//  emulate the Unix cat command:
//By default end() called on the dst
// when  src stream emits end,
// so that dst   no longer wb
// Pass { end: false } as op
// to keep the dst stream open.
//This keeps writer open so that "Goodbye"
// can be written at the end.


rb.$_(wb,{end: false}).oE(function(){wb.E('bye\n')})  // $_ : pipe, but return self

//Note that process.stderr and process.stdout are never closed until the process exits, regardless of the specified options.
rs._( ws=$f.ws('f.txt') )

_.in(function(){rs.__(ws);rs.E()})  //stop wrtg to file.txt, close file sr

