 //1. read a file, display its contents
 $f.rF('data.txt', function (z, d) {if (d) {$l(d.toString('utf8'))}}) //  resulting file data as a binary buffer array  data.
 $f.wF('data2.txt', 'Hello!', fn) // write to file
 //    3. read  given dir lc's file list, display flNs
 $f.rd('.', //cur working dir
     function(z,fls){
         for (var ix in fls){  //  array of filenames stored in files
                $l(fls[ix])//iter [flN] and display each flN
         }
     })

//5.   get certain attributes of a given file
// such as whether or not it is a file or a directory,
// and you want to be able to set certain attributes
// such as the file’s name or the file’s permissions.

 $f.st('data.txt',   //    obtain  infor  about a given file ‘data.txt’
         function (z, s) { // (err, stats)



             // display   whether the given file is a file or a dir
         if (s.iF()) {
             $l('It\'s file!')
         } else if (s.iD()) {
             $l('It\'s dir!')
         }

             //   step through each non-function member of the stats object
         for (var i in s) {


             // display what that member field’s name is and what value it contains
             // (including detailed file info)
// such as creation date, modified date, file size..

             if (!F(s[i])) {
                 $l(i + '\t=' + s[i])
             }
         }
     })
 $f.rn('data2.txt', 'data2_new.txt', fn)
 $f.m('data3.txt', '0777', fn)// chmod// all read-write-execute



recur=function(){// 4.  recur read through    list of a dir's files,display each flN or recursly traverse  file if it is a dir
    trav = function(curPt) {var curF, s,fs
        fs=$.rdS(curPt)
        for (var i in fs){
            curF= curPt+'/'+fs[i]
            s=$f.stS(curF)
            if(s.iF()){$l(curF)}
            else if(s.iD()){trav(curF)}}
    }
    //  synch ret list of cur dir's files
    //  iter over ea item in the flN arr, cr var  to store our fully-qualified file path   and obtain info about that file using a synch  file stats call  statSync()
//  fn then checks if the cur  file   is a file or a dir,and either displays the file’s name if it is a file or recurses by re-invoking the traverse  fn using  new cur  dir  pt if it is a dir.




    trav('..')//   (simp way to ref par dir of cur working dir)

}
watch=function() {
//6.   be notified of any changes that occ  w/i a given dir  either to   dir’s contents or dir  itself.
    inotify = new Inotify();// mu “inotify.”
    fn = function (ev) {

        var file = ev.name ? ev.name : '', mask = ev.mask


        if (file != '' && file.indexOf('.') !== 0) {

            if (mask & Inotify.IN_OPEN) {
                $l(file + ' was opened ')
            }
            else if (mask & Inotify.IN_CLOSE) {
                $l(file + ' was closed ')
            }

        }

    }
    inotify.addWatch({
        path: '.',
        watch_for: Inotify.IN_OPEN | Inotify.IN_CLOSE,
        callback: fn
    })
    // include the inotify
// module var inotify = require(‘/usr/local/node/node_modules/inotify’).Inotify;
//  (note that this path should be whatever path you installed the
// inotify module to).

// instantiate   inotify ob  new Inotify();
// which we will use for watching for file changes.
//    The next few lines are all for defining our  watcher object
// with the following properties: path: ‘.’
// (the path to the file we want to watch—in this case,
// we are watching the current working directory),
// watch_for: Inotify.IN_OPEN | Inotify.IN_CLOSE (specifying that
// we will only be firing change events when a file is opened or closed),
// and lastly, callback: function (event) {  … } (defines our
// cb fn that will be fired whenever the above two events
// are emitted). In the first line of our callback, we are getting the
// filename from the event object var file = event.name ? event.name : ”;
// (if the filename is null, we’ll set the variable to an empty string).


//The next line is just to make a “shorthand” variable
// for the event type mask var mask = event.mask; .
// The next conditional statement will filter out empty filenames
// and filenames that start with a “.”
// (which sometimes indicate
//  temp  file being used to write a file).
// The next couple of statements if (mask & Inotify.IN_OPEN) {  … }
// and then after  else if (mask & Inotify.IN_CLOSE) {  … }
// will display whether there was a file opened or closed under
// the given directory location.


//    Lastly is a very important line of code where we
// add our watcher object that we just defined to the inotify object
// using inotify.addWatch(watcher); (note that without this very line, our watcher object is essentially useless).
//There are many more event types that you can watch files for, along with additional parameters for the watcher object. Reference the inotify github website for more information.


}
