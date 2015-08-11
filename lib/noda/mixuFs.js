
baics=function(){
    data = $f.rF('./index.html', 'utf8')
    $f.rF('./index.html', 'utf8', _lD)
    $f.rF(fN, enc, fn)
    $f.wF(fN, data, encoding='utf8', [fn])
    $f.o(pt, flags, [mode], [fn])
    $f.r(fd, bf, offset, len, pos, [fn])
    $f.w(fd, bf, offset, len, pos, [fn])

    $f.fsync(fd, fn)
    $f.truncate(fd, len, [fn])
    $f.close(fd, [fn])


//Dirs
    $f.readdir(path, [fn])
    $f.mkdir(path, mode, [fn])
    $f.rmdir(path, [fn])
// Files: info
    $f.stat(path, [fn])
    $f.lstat(path, [fn])
    $f.fstat(fd, [fn])
    $f.realpath(path, [fn])


//Readable streams
    $f.ReadStream
// Event: 'open'
    $f.createReadStream(pt, op)
//Writable streams
    $f.WriteStream
//Event: 'open' file.bytesWritten
    $f.createWriteStream(pt,op)
//Files: rename, watch changes & change timestamps
    $f.rename(path1, path2, [fn])
    $f.watchFile(filename, [options], listener)
    $f.unwatchFile(filename)
    $f.watch(filename, [options], listener)

    $f.utimes(path, atime, mtime, fn)
    $f.futimes(path, atime, mtime, fn)
//Files: Owner and permissions
    $f.chown(path, uid, gid, [fn])
    $f.fchown(path, uid, gid, [fn])
    $f.lchown(path, uid, gid, [fn])
    $f.chmod(path, mode, [fn])
    $f.fchmod(fd, mode, [fn])
    $f.lchmod(fd, mode, [fn])

//Files: symlinks
    $f.link(srcpath, dstpath, [fn])

    $f.symlink(linkdata, path, [fn])
    $f.readlink(path, [fn])
    $f.unlink(path, [fn])

}
    
$f.rF('./file.html', function (err, data) {})

$f.rF('./other.html', function (err, data) {})

//These file reads might complete in any order depending on how long it takes to read each file.
// The simplest solution is to chain the fns:

    $f.rF('./file.html', function (z,d) {$f.rF('./other.html', fn)})



//Fully buffered reads and writes are fairly straightforward:
  //  call the function and pass in a String or a Buffer to write,
  //  and then check the return value.

 //   Recipe: Reading a file (fully buffered)

$f.rF('./index.html', 'utf8', _lD)// the data is passed to the fn in the second argument
  


//Recipe: Writing a file (fully buffered)

$f.wF('./results.txt', 'Hello World', function(z) {$l('File write completed')})

//When we want to work with files in smaller parts, we need to open(), get a file descriptor and then work with that file descriptor.


$f.o(pt, flags,mode,fn)  //supports the following flags:
openFlags=function(){
    //  'r' - Open file for reading.
//  An exception occurs if the file does not exist.
// 'r+' - Open file for reading and writing.
// An exception occurs if the file does not exist.
// 'w' - Open file for writing.
// The file is created (if it does not exist)
// or truncated (if it exists).
//'w+' - Open file for reading and writing.
// The file is created (if it does not exist) or truncated
// (if it exists).
//'a' - Open file for appending.
// The file is created if it does not exist.
//'a+' - Open file for reading and appending.
// The file is created if it does not exist.
    //  mode refers to the permissions to use in case
    // a new file is created. The default is 0666.


}

//Recipe: Opening, writing to a file and closing it (in parts)
$f.o('./data/index.html', 'w',
    function(z, fd) {
    var buf = new Buffer('bbbbb\n');
    $.w(fd, buf, 0, buf.length, null,
        function(z, written, bf)
        $l(z, written, bf);$.cl(fd, fn)
    }
)


// // The read() and write() functions operate on Buffers,
// so in the example above we create a new Buffer() from a string.
    //Note that built-in readable streams (e.g. HTTP, Net) generally return Buffers.

    //   Recipe: Opening, seeking to a position, reading from a file and closing it (in parts)

$f.o('./data/index.html', 'r', function(z,fd){
        var str = new Buffer(3);

        $f.r(fd, buf, 0, buf.length, null,
            function(z, bytesRead,bf){
                $l(z, bytesRead, bf);$f.cl(fd,fn)})
})


//11.2 Directories: read, create & delete

//    Recipe: Reading a directory

//Reading a directory returns the names of the items (files, directories and others) in it.

   pt=  './data/';

$f.rdE(pt, function(f) {
        $l(pt+f)
        $f.st(pt+f, _lD)})

$f.statObReturned= { dev: 2114,
    ino: 48064969, mode: 33188, nlink: 1,
    uid: 85, gid: 100, rdev: 0,
    size: 527, blksize: 4096, blocks: 8,
    atime: $D, mtime: $D, ctime: $D// Mon, 10 Oct 2011 23:24:11 GMT
}

// The stat object also has the following functions:

s.isFile()
s.isDirectory()
s.isBlockDevice()
s.isCharacterDevice()
s.isSymbolicLink() //(only valid with $f.lstat())
s.isFIFO()
s.isSocket()

//The Path module has a set of additional functions for working with paths, such as:
path.normalize//(p)	Normalize a string path, taking care of '..' and '.' parts.
path.join//([path1], [path2], [...])	Join all arguments together and normalize the resulting path.
path.resolve//([from ...], to)	Resolves to to an absolute path. If to isn't already absolute from arguments are prepended in right to left order, until an absolute path is found. If after using all from paths still no absolute path is found, the current working directory is used as well. The resulting path is normalized, and trailing slashes are removed unless the path gets resolved to the root directory.

$f.realpath//(path, [fn])
$f.realpathSync//(path)

//Resolves both absolute (‘/path/file’)
// and relative paths (‘../../file’)
// and returns the absolute path to the file.

    path.dirname//(p)	Return the directory name of a path. Similar to the Unix dirname command.

    path.basename//(p, [ext])	Return the last portion of a path. Similar to the Unix basename command.

    path.extname//(p)	//Return the extension of the path. Everything after the last '.' in the last portion of the path. If there is no '.' in the last portion of the path or the only '.' is the first character, then it returns an empty string.

    path.exists(p, [fn])
path.existsSync(p)	//
// Test whether or not the given path exists.
// Then, call the fn argument
// with either true or false.



    //Recipe: Cr/dl dir
    $f.mkdir('./newdir', 0666, function(z) {
        $l('Created newdir')
        $f.rmdir('./newdir', fn)})



streams=function(){

//Using Readable and Writable streams
//
//Readable and Writable streams are covered in Chapter 9.
//
//Recipe: Reading a file and writing to another file

 f = $f.createReadStream('./data/results.txt', {flags: 'r'} );
  out = $f.createWriteStream('./data/results2.txt', {flags: 'w'});
f.on('data', function(data) {
    $l('data', data);
    out.write(data);
});
f.on('end', function() {
    $l('end');
    out.end(function() {
        $l('Finished writing to file');
        test.done();
    });
});
//You can also use pipe():

  file = $f.createReadStream('./data/results.txt', {flags: 'r'} );
 out = $f.createWriteStream('./data/results2.txt', {flags: 'w'});
file.pipe(out);


//Recipe: Appending to a file
f  = $f.createWriteStream('./data/results.txt', {flags: 'a'} );
f.write('HELLO!\n');
f.end(function(){test.done()})

//Practical example
//
//Since Node makes it very easy to launch multiple asynchronous file accesses, you have to be careful when performing large amounts of I/O operations: you might exhaust the available number of file handles (a limited operating system resource used to access files). Furthermore, since the results are returned in a asynchronous manner which does not guarantee completion order, you will most likely want to coordinate the order of execution using the control flow patterns discussed in the previous chapter. Let’s look at an example.
//
//    Example: searching for a file in a directory, traversing recursively
//
//In this example, we will search for a file recursively starting from a given path. The function takes three arguments: a path to search, the name of the file we are looking for, and a fn which is called when the file is found.
//
//    Here is the naive version: a bunch of nested fns, no thought needed:

function fFile(pt,searchF,fn){

    $f.rdE(pt,  function(f) {
            $f.st(pt+'/'+f, function(z,s) {if(s.iF() && f == searchF){fn(undefined, pt+'/'+f)}}
            else if(s.iD()) {fFile(pt+'/'+f, searchF, fn);}
        })
}
fFile('./test', 'needle.txt', function(z, pt) {$l('Found file at: '+pt)})
function fFile(fnpt, searchFile, fn) {
    // check for a match, given a stat
    function isMatch(z,s){
        if(s.iF()&&f==searchF){fn(undefined, fnpt+'/'+f)}
        else if(s.iD()){statDir(fnpt+'/'+f)}}
    statDir(fnpt, isMa)// launch  search
}
// Read and stat a directory
function statDirectory(fnpt, fn) {
    $f.rd(fnpt, function (z, fs) {
        _.e(fs, function(f){$f.st(fnpt+'/'+f, fn)})
    })
}

fFile('./test','needle.txt',
    function(z,fnpt){$l('Found file at: '+fnpt)})

//The function is split into smaller parts:
//
//    findFile: This code starts the whole process, taking the main input arguments as well as the fn to call with the results.
//    isMatch: This hidden helper function takes the results from stat() and applies the "is a match" logic necessary to implement findFile().
//    statDirectory: This function simply reads a fnpt, and calls the fn for each file.
//    I admit this is fairly verbose.

}
eventStream=function() {
//    PathIterator: Improving reuse by using an EventEmitter
//However, we can accomplish the same goal in a more reusable manner
// by creating our own module (pathiterator.js),
// which treats directory traversal as a stream of events
// by using EventEmitter:
    EventEmitter = require('events').EventEmitter
    util = require('util')

    var PathIterator = function () {
    };

// augment with EventEmitter
    util.inherits(PathIterator, EventEmitter);

// Iterate a fnpt, emitting 'file' and 'directory' events.
    PathIterator.prototype.iterate = function (pt) {
        var self = this;
        this.statDirectory(function (fpt, stats) {
            var s = stats
            if (s.iF()) {
                s.emit('file', fpt, s)
            }
            else if (s.iD()) {
                self.emit('directory', fpt, s);
                self.iterate(pt + '/' + file);
            }
        })
    }


// Read and stat a directory
    PathIterator.prototype.statDirectory = function (pt, fn) {


        $f.rdE(pt, function (f) {
            var fpt = pt + '/' + f
            $f.st(fpt, function (z, stt) {
                fn(fpt, stt)
            })
        })

    }


    module.exports = PathIterator;
// create  class  which extends EventEmitter,  emits these evs:

//    “error” - function(error): emitted on errors.
//“file” - function(filepath, stats): the full path to the file and the result from $f.stat
//“directory” - function(dirpath, stats): the full path to the directory and the result from $f.stat

//We can then use this utility
// class to implement the same
// dir  traversal:

    PathIterator = require('./pathiterator.js');


    function findFile(pt, searchFile, fn) {
        pi = new PathIterator();
        pi.on('file', function (file, stats) {
            if (file == searchFile) {
                fn(undefined, file);
            }
        })
        pi.on('error', fn);
        pi.iterate(pt);
    }

//While this approach takes a few lines more than the
// pure-fn approach,  res more extensible
// (  easily look for mult files in  “file” fn  )
//
//If you end up writing a lot of code that iterates pts, having a PathIterator EventEmitter will simplify your code. The fns are still there - after all, this is non-blocking I/O via the event loop - but the interface becomes a lot easier to understand. You are probably running findFile() as part of some larger process - and instead of having all that file travelsal logic in the same module,
// you have a fixed interface which you can write your pt traversing operations against.
}
async=function() {
//Encapsulating the I/O behind a EventEmitter
// helps a bit, but we can do one better
// by using fjacob's async.js.
// This is a FS-specific library
// that encapsulates file system operations
// behind a chainable interface.
// The findFile() function can be written
// using async.js like this:


    function findFile(pt, searchFile, fn) {
        $y.readdir(pt).stat()
            .filter(function (file) {
                return file.stat == searchFile
            })
            .toString(fn);
    }

//The techniques behind async.js consist essentially of an object that acts like a series,
// but allows you to specify the operations using a chainable interface.

    // My point - if there is any - is that coordinating asynchronous I/O control
    // flow in Node is somewhat more complicated than in scripting environments/languages
    // where you can rely on I/O blocking the execution of code.
    // This is most obvious when you are dealing with the file system,
    // because file system I/O generally requires you to perform long sequences of
    // asynchronous calls in order to get what you want.

    // However, even with file I/O, it is possible to come up with solutions
    // that abstract away the details from your main code.
    // In some cases you can find domain specific libraries
    // that provide very conscise ways of expressing your logic
    // (e.g. async.js) - and in other cases you can at least take parts of the process,
    // and move those into a separate module (e.g. PathIterator).

}