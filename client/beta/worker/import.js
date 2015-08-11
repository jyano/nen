


//Importing scripts and libraries
//
//Worker threads have access to a global function,
// importScripts(),
// which lets them import scripts in the same domain
// into their scope.
// It accepts zero or more URIs as parameters
// to resources to import;
// all of the following exs are valid:

importScripts() //imports nothing
importScripts('foo.js');
importScripts('foo.js', 'bar.js') // imports two scripts

//The browser loads each listed script and executes it.
// Any global objects from each script  may
//   be used by the worker.


// Scripts may be downloaded in any order,
// but will be executed in the order
// in which you pass the filenames into importScripts() .
//
// This is done synchronously; importScripts()
// does not return until all the scripts have been loaded
// and executed.



//    You can load external script files or libraries
// into a worker with the importScripts() function. The method takes
// zero or more strings representing the filenames for the resources to import.
//
//    This example loads script1.js and script2.js into the worker:
//
//        worker.js:
//
importScripts('script1.js');
importScripts('script2.js');
//    Which can also be written as a single import statement:
//
importScripts('script1.js', 'script2.js');

