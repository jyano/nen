//  ch_process provides a tri-direct  popen(3) facility
// can stream  through a ch's stdin, stdout, and stderr
// -non-blocking! (if program uses line-buffered I/O internally,node not affectd, but data sent to ch pc, may not be consumed immed.)
//    Ch pcs always have  3 srs assoc  with them:
//  child.stdin, child.ou, and child.stderr.
// These may be shared
// with the stdio srs of par  pc, or sep  sr obs ,
// which can be piped to and from.



//function:
//represents ch pc's (1)
//is a (2) sr
//only set if ch spawned w (3)='pipe'
//short cut for (4)


// ch.ou:  [ ou,  rb,  stdio[1], ch.stdio[1] ]
// ch.er:  [ er,  rb,  stdio[2], ch.stdio[2] ]



//ch.in: [ in,  wb,  stdio[0], ch.stdio[0] ]
    // If  ch  waiting to read all its input,
    // it will not continue until  this sr closed via end().





//    ch.stdio ($A): sparse array of pipes to  ch pc,
// correspd w positions in  stdio option
// to spawn that have been set to 'pipe'.

// Note that streams 0-2 are also available as
// ChildProcess.in,
// ChildProcess.ou,
// and ChildProcess.stderr,
// respectively.
//
//   ex: only ch's fd1 is setup as pipe,
// so only  par's ch.stdio[1] is  sr,
// all other arr vals  null.





ch = $pc.sp("ls", {
    stdio: [
        0, // use parents in for child
        'pipe', // pipe child's ou to parent
        $.opSyn("err.out", "w") // direct child's er to a file
    ]

})

$as=function(a,b){
    return b? assert.equal(a,b)
        :assert(a)}
$as(ch.io[0], null)
$as(ch.io[0], ch.in)
$as(ch.ou);
$as(ch.io[1], ch.ou);
$as(ch.io[2], null);
$as(ch.io[2], ch.er);

