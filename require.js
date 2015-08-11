$l('reqrs')

function requir() {


//If  exact flN   not found,
//  node  tries loading required flN w  added 
// .js, .json, then .node.
//
//    .js   interpretd  JS text files, 
// .json files parsed as JSON text files
// .node files are interpreted as compiled 
// addon mus loaded with dlopen.
//

//  mu prefixed w  '/' is   absolute file path  
// ex:  $q('/home/marco/foo.js') loads  file at /home/marco/foo.js.


//   mu prefixed w  './' is rel to  file calling $q().
// cir.js must be in the same dir as foo.js for $q('./cir') to find it.

//    w/o a leading '/' or './' to indicate a file, mu is either
// a "core mu" or is loaded from a node_mus folder.
//
//   given path !exist -? $q()  throws   Error  'Mu_NOT_FOUND' 
//
//    Loading from node_mus Folders#
//If mu identfr passed to $q()  not native mu,
// and does not begin with '/', '../', or './',
// then node starts at   parent dir of  cur  mu, and adds /node_mus,
// and attempts to load mu from that location.


//  If !found there,
// moves to  par  dir, etc, until reaches fl sys root
// ex:  if  file at '/home/ry/projects/foo.js' called $q('bar.js'),
// then node   looks  (in order):
//    /home/ry/projects/node_mus/bar.js
///home/ry/node_mus/bar.js
///home/node_mus/bar.js
///node_mus/bar.js

//-allows progs to localize their deps, avoid clash.


//
//    to require spec  files or sub mus distribd w mu: 
// include  path suffix af  mu name.
//ex: $q('example-mu/path/to/file')
//  resolves path/to/file rel to  example-mu  location
//  suffixed path follows ~ mu resolution semantics 
//


//  convenient to organize progs/libs  into self-contained dirs,
// and then provide single entry point to that lib .


    threeWaysFoldersPassedTo$qAsArg = function () {



        // 1) create   pkg.j in folder root,  which specs  main mu.
// ex pkg.j might look like this:
//
//{ "name" : "some-library",
//    "main" : "./lib/some-library.js" }
//If this was in a folder at ./some-library,
// then $q('./some-library')
// would attempt to load ./some-library/lib/some-library.js.
//
//This is  extent of Node's awareness of pkg.js.
//
//If there is no pkg.j present in dir,
// then node will attempt to load an index.js or index.node file
// out of that dir. 
// ex:  if there was no pkg.j in  above ex,
// then $q('./some-library') would attempt to load:
//
//    ./some-library/index.js
//    ./some-library/index.node
    }

    cached = function () {

//Mus are cached af 1st   load. ( ev   $q('foo') cal, rets exactly  same ob  if  resolves to  same file)

//    Mult   $q('foo') calls? code  may not be executed mult  times. 
// with this feature, "partially done" obs can be retd,
// thus allowing transitive deps to be loaded
// even when 
// they would cause cycles.
//
//    If you want to have a mu execute code mult  times,
// export a fn,  and call that fn
//
//Mu Caching Caveats#
//Mus are cached based on their resolved flN. 
// Since mus may resolve to a different flN based on  location of 
//   calling mu (loading from node_mus folders),
// it is not a guarantee that $q('foo') 
// will always return   exact same ob, 
// if it would resolve to different files.

    }


//In each mu, mu free var is a ref  to   ob representing
// current mu.
//


// mu.exports is also accessible via  exports  (modules  local to each mu)


// mu.exports created by  Mu system.
//
// Sometimes this is not acceptable; many want their mu to be an instance of some class.
// To do this, assign   desired export ob to mu.exports.
// Note that assigning  desired ob to exports will simply rebind 
// local exports variable,
// which is probably not what you want to do.
//
//    ex: suppose we were making a mu called a.js
//
//EventEmitter = $q('events').EventEmitter;
//
//mu.exports = new EventEmitter();
//
//// Do some work, and after some time emit
//// the 'ready' event from mu itself.


    $.in(1, function () {
        mu.exports.emit('ready')
    })


    a = $q('./a')

    a.on('ready', function () {
        $l('mu a is ready')
    })


//  assignment to mu.exports must be done immediately.
//  (cannot be done in any callbacks)
// doesnt work:

//    x.js:
    $.do(function () {
        mu.exports = {a: "hello"}
    })

//y.js:

    x = $q('./x');
    $l(x.a);

//exports alias#
//The exports variable that is available within a mu 
// starts as a ref  to mu.exports.
// As with any var,
// if you assign a new value to it, 
// it is no longer bound to the previous value.

    function $q() {
        function (mu, exports) {
            exports = some_func  // re-assigns exports, exports is no longer
            // a shortcut, and nothing is exported.
            mu.exports = some_function // makes your mu export 0
        }

        (mu, mu.exports)
        return mu
    }


    four = function () {
        idStr = function () {
//    mu.$q(id)#
//id String
//Return: Object mu.exports from  resolved mu
//The mu.$q method provides a way to load a mu as if $q() 
// was called from  original mu.
//
//    Note that in order to do this, you must get a reference to mu ob.
// Since $q() returns mu.exports, 
// and mu is typically only available
// within a specific mu's code,
// it must be explicitly exported in order to be used.
//
//mu.id#
//String
//The identifier for mu. Typically this is  fully resolved flN.
        }
        otherMuMets = function () {
//    mu.filename#
//String
//The fully resolved flN to mu.
//
//    mu.loaded#
//Boolean
//Whether or not mu is done loading, 
// or is in   process of loading.
//
//    mu.parent#
//Mu Object
//The mu that required this one.
//
//    mu.children#
//Array
//The mu obs required by this one.

        }
        resolve = function () {
//  get  exact flN that will be loaded  by $q? 
// use  $q.resolve() 

//   pseudocode  of what $q.resolve does:
//
//    $q(X) from mu at path Y
//1. If X is a core mu,  a. return   core mu  b. STOP
//2. If X begins with './' or '/' or '../'  a. LOAD_AS_FILE(Y + X)  b. LOAD_AS_DIRECTORY(Y + X)
//3. LOAD_NODE_MUS(X, dirname(Y))
//4. THROW "not found"

//LOAD_AS_FILE(X)
//1. If X is a file, load X as JS text.  STOP
//2. If X.js is a file, load X.js as JS text.  STOP
//3. If X.json is a file, parse X.json to a JS Object.  STOP
//4. If X.node is a file, load X.node as binary addon.  STOP

//LOAD_AS_DIRECTORY(X)
//1. If X/package.json is a file,
//    a. Parse X/package.json, and look for "main" field.
//    b. let M = X + (json main field)
//c. LOAD_AS_FILE(M)
//2. If X/index.js is a file, load X/index.js as JS text.  STOP
//3. If X/index.json is a file, parse X/index.json to a JS ob. STOP
//4. If X/index.node is a file, load X/index.node as binary addon.  STOP

//LOAD_NODE_MUS(X, START)
//1. let DIRS=NODE_MUS_PATHS(START)
//2. for each DIR in DIRS:
//a. LOAD_AS_FILE(DIR/X)
//b. LOAD_AS_DIRECTORY(DIR/X)
//
//NODE_MUS_PATHS(START)
//1. let PARTS = path split(START)
//2. let I = count of PARTS - 1
//3. let DIRS = []
//4. while I >= 0,
//    a. if PARTS[I] = "node_mus" CONTINUE
//c. DIR = path join(PARTS[0 .. I] + "node_mus")
//b. DIRS = DIRS + DIR
//c. let I = I - 1
//5. return DIRS

        }
        globFolders = function () {
//Loading from   global folders#
//If  NODE_PATH environment variable
//      is set to a colon-delimited list of absolute paths,
// then node will search those paths for mus 
// if they are not found elsewhere. 
//  
//Also, node will search in following locations:
//
//    1: $HOME/.node_mus
//2: $HOME/.node_libraries
//3: $PREFIX/lib/node
//Where $HOME is  user's home dir,
// and $PREFIX is node's configured node_prefix.
//
//    These are mostly for historic reasons. 
// You are highly encouraged to place your deps
// locally in node_mus folders.
// They will be loaded faster, and more reliably.
        }
        AccessMainMu = function () {
//When  file  run directly from Node,
// $q.main is set to its mu.
//  so can determine whether   file has been run
// directly
// by testing
//
//$q.main === mu
//For   file foo.js,
// this will be true if run via node foojs,
// but false if run by $q('./foo').
//
//    Because mu provides flN pro  
// (normally equivto _filename),
// entry point of   cur  app  canbe obtained by checking $q.main.filename.


//    Package Manager Tips
//The semantics   $q()  were designed to be general enough to support
// a number of sane dir structs. 
// Package manager programs such as dpkg, rpm, and npm 
// will hopefully
// find it possible to build native packages from Node mus 
// w/o modification.
//
//Below we give a suggested dir struct that could work:
//
//    Let's say that we wanted to have  folder at
// /usr/lib/node/<some-package>/<some-version>
// hold  contents of a specific version of a package.
//
//Packages can depend on one another. 
// In order to install package foo, you may have to install
// a specific version of package bar. 
// The bar package may itself have dep, and in some cases,
// these dep may even collide or form cycles.
//
//    Since Node looks up  realpath of any mus it loads 
// (that is, resolves symlinks),
// and then looks for their dep
// in   node_mus folders as described above, 
// this situation is very simple
// to resolve with  following architecture:
//
//    /usr/lib/node/foo/1.2.3/ - Contents of  foo package, version 1.2.3.
///usr/lib/node/bar/4.3.2/ - Contents of  bar package that foo depends on.
///usr/lib/node/foo/1.2.3/node_mus/bar
// - Symbolic link to /usr/lib/node/bar/4.3.2/.
///usr/lib/node/bar/4.3.2/node_mus/* 
// - Symbolic links to the packages that bar depends on.
// Thus, even if a cycle is encountered,
// or if there are deps conflicts,
// every mu will be able to get 
// ver of its deps that it can use.
//
// When   code in foo package does $q('bar'), it   gets  version 
// that is symlinked into /usr/lib/node/foo/1.2.3/node_mus/bar. 
// Then, when  code in   bar package calls $q('quux'), 
// it'll get  ver symlinked into /usr/lib/node/bar/4.3.2/node_mus/quux.
//
// Furthermore, to make  mu lookup process even more optimal,
// rather than putting packages directly in /usr/lib/node, 
// we could put them in /usr/lib/node_mus/<name>/<version>.
// Then node will not bother looking 
// for missing dep in /usr/node_mus or /node_mus.
//
// In order to make mus available to  node REPL,
// it might be useful to also add  /usr/lib/node_mus folder
// to the $NODE_PATH environment variable.
//
// Since mu lookups using node_mus folders are all rel,
// and based on real path of  files making   calls to $q(),
//   packages themselves can be anywhere.

        }
    }


//  If mu's name must be computed in fn , load it locally.

////Since   mus are cached,code shouldn't be executed multiple times. –
//  if you use any sync fns,including $q,
// you should use themonly during first tick,
// since no servers are listening yet anyway.

}