
        //    pc.stdout# //A Writable Stream to stdout (on fd 1).
        $l = function(d) { pc.stdout.write(d + '\n')};//Example: the definition of $l


//pc.stderr and pc.stdout are unlike other streams in Node in that they cannot be closed (end() will throw), they never emit the finish event and that writes are usually blocking.
//
//    They are blocking in the case that they refer to regular files or TTY file descriptors.
//    In the case they refer to pipes:
//    They are blocking in Linux/Unix.
//    They are non-blocking like other streams in Windows.
//    To check if Node is being run in a TTY context, read the isTTY property on pc.stderr, pc.stdout, or pc.stdin:
//
//$ node -p "Boolean(pc.stdin.isTTY)"
//true
//$ echo "foo" | node -p "Boolean(pc.stdin.isTTY)"
//false
//
//$ node -p "Boolean(pc.stdout.isTTY)"
//true
//$ node -p "Boolean(pc.stdout.isTTY)" | cat
//false
//See the tty docs for more information.




stderr=function() {

        pc.stderr//# //A writable stream to stderr (on fd 2).
//
//pc.stderr and pc.stdout are unlike other streams in Node
// in that they cannot be closed (end() will throw), they never emit
// the finish event and that writes are usually blocking.
//
//    They are blocking in the case that they refer to regular files or TTY file descriptors.
//    In the case they refer to pipes:
//    They are blocking in Linux/Unix.
//    They are non-blocking like other streams in Windows.

    }

        pc.stdin//#  //A Readable Stream for stdin (on fd 0).
        pc.in.sEnc('utf8')//  open  stdinput, lsn   for both evs
        pc.in.on('readable', function () {
            var ch = pc.in.r()
            if (ch !== null) {
                pc.out.w('data:' + ch)
            }
        })
        pc.stdin.oE(function () {
            pc.stdout.w('end')
        })
//As a Stream, pc.stdin can also be used in "old" mode
// that is compatible with scripts written for node prior v0.10.
// For more information see Stream compatibility.
//
//    In "old" Streams mode the stdin stream is paused by default,
// so one must call pc.stdin.resume() to read from it.
// Note also that calling pc.stdin.resume()
// itself would switch stream to "old" mode.
//    If you are starting a new project you should prefer a
// more recent "new" Streams mode over "old" one.


