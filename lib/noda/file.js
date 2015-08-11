$l('entering file..')
  $f =require('fs')
dir()
read()
//stat()
function dir(){
    $f.rd=function(){var $f=this, g=G(arguments)
     //(pt, fn)//$f.rdS=$f.readdirSync(pt)
        if(F(_.l(g))){$f.readdir.apply($f,g); return $f}
        return $f.readdirSync.apply($f,g)}
    $f.rdE = function (pt, fn) {
        $f.rd(pt, function (z, fs) {
            _.e(fs, fn)
        })
    }
    $f.rmd=function(){var $f=this, g=G(arguments) //(pt)
        if(F(_.l(g))){$f.rmdir.apply($f,g); return $f}
        return $f.rmdirSync.apply($f,g)}
    $f.mkd=function(){var $f=this, g=G(arguments) // (pt [mode])
        if(F(_.l(g))){$f.mkdir.apply($f,g); return $f}
        return $f.mkdirSync.apply($f,g)}
}




function read(){
    $f.r=function(){var $f=this, g=G(arguments)//(fd,bf,offset,len,pos)
        if(F(_.l(g))){$f.read.apply($f,g); return $f}
        return $f.readSync.apply($f, g)}
    $f.rF=function(f,op,fn){var $f=this, g=G(arguments)
        if(F(_.l(g))){$f.readFile.apply($f,g); return $f}
        return $f.readFileSync.apply($f, g)}
    $f.u8=  $f.rUF= function(js, fn){this.rF(js, 'utf8', fn)}
    $f.rBF=  $f.bn=function(a,fn){this.rF(a,'binary',fn)}

}
/*

function stat(){
$f.st= $f.sS= function(f){


//stat() stats the file pointed to by
// path and fills in buf.

    var s= $f.statSync(f)
    s.f= s.iF = s.isFile
    s.d= s.iD = s.isDirectory
    s.bD=  s.iBD  = s.isBlockDevice
    s.cD=  s.iCD  = s.isCharacterDevice
    s.sL= s.iSL  = s.isSymbolicLink // (only valid with fs.lstat())
    s.F=s.iFF  = s.isFIFO
    s.s= s.iS  = s.isSocket
    return s
}
$f.iD=function(f){return this.sS(f).isDirectory()}
$f.iF=function(f){return this.sS(f).isFile()}
$f.st=$f.stat(pt, fn)//$f.stS=$f.statSync(pt)
$f.lSt=$f.lstat(pt, fn)//$f.lStS=$f.lstatSync(pt)
$f.fSt=$f.fstat(fd, fn)//$f.fStS=$f.fstatSync(fd)

}


*/

$f.o=function(){var $f=this, g=G(arguments) //(pt, flags[, mode], fn)
    if(F(_.l(g))){$f.open.apply($f,g); return $f}
    return $f.openSync.apply($f, g)
}
$f.cl=function(){var $f=this, g=G(arguments) //(fd, fn)//$f.clS=$f.closeSync(fd)
    if(F(_.l(g))){$f.close.apply($f,g); return $f}
    return $f.closeSync.apply($f, g)
}


fileSecurity=function(){

    //chown: change owner and group of a file
    $f.ow=$f.chown//(pt, uid, gid, fn)//$f.owS=$f.chownSync(pt, uid, gid)
    $f.fOw=$f.fchown//(fd, uid, gid, fn)//$f.fOwS=$f.fchownSync(fd, uid, gid)
    $f.lOw=$f.lchown//(pt, uid, gid, fn)//$f.lOwS=$f.lchownSync(pt, uid, gid)

//chmod: change permissions
    $f.m=$f.chmod//(pt, mode, fn)//$f.mS=$f.chmodSync(pt, mode)
    $f.fM=$f.fchmod(fd, mode, fn)//$f.fMS=$f.fchmodSync(fd, mode)
    $f.lM=$f.lchmod(pt, mode, fn)//$f.lMS=$f.lchmodSync(pt, mode)

}//;fileSecurity()
/*
linkPath=function() {
    $f.l = $f.link(srcpt, dstpt, fn)//$f.lS=$f.linkSync(srcpt, dstpt)
    $f.sL = $f.symlink(srcpt, dstpt[, type],fn)//$f.sLS=$f.symlinkSync(srcpt, dstpt[, type])
//readlink: prints val of symbolic link or canonical file name
    $f.rL = $f.readlink//(pt, fn)//$f.rLS=$f.readlinkSync//(pt)
    $f.rp = $f.realpath//(pt[, cache], fn)//$f.rpS=$f.realpathSync//(pt[, cache])
    $f.ul = $f.unlink//(pt, fn)//$f.ulS=$f.unlinkSync//(pt)

};linkPath()
*/

$f.ut=$f.utimes//(pt, atime, mtime, fn)//$f.utS=$f.utimesSync(pt, atime, mtime)
$f.fut=$f.futimes//(fd, atime, mtime, fn)//$f.futS=$f.futimesSync(fd, atime, mtime)
$f.fs=$f.fsync//(fd, fn)//$f.fsS=$f.fsyncSync(fd)


write=function(){

    $f.w=$f.write//(fd, buffer, offset, length[, position], fn)
      // $f.=$f.write(fd, data[, position[, encoding]], fn)
    //  $f.wS=$f.writeSync(fd, buffer, offset, length[, position])
   //   $f.=$f.writeSync//(fd, data[, position[, encoding]])
/*
    $f.wF=$f.writeFile//(filename, data[, op], fn)
     $f.wFS=$f.writeFileSync//(filename, data[, op])

    $f.aF=$f.appendFile//(filename, data[, op], fn)
     $f.aFS=$f.appendFileSync//(filename, data[, op])

    $f.fTc=$f.ftruncate//(fd, len, fn)
    $f.fTcS=$f.ftruncateSync(fd, len)

    $f.tc=$f.truncate//(pt, len, fn)
    $f.tcS=$f.truncateSync(pt, len)

    $f.rn=$f.rename//(oldPt, newPt, fn)
    $f.rnS=$f.renameSync(oldPt, newPt)
*/
};write()

/*
watch=function(){

    $f.wF=$f.watchFile//(filename[, op], listener)
    $f.uwF=$f.unwatchFile//(filename[, listener])
    $f.wa=$f.watch(//filename[, op][, listener])

};watch()
*/

    module.exports =   $f

//Caveats
//Availability
//Filename Argument
//$f.exists(pt, fn)
//$f.existsSync(pt)
//$f.access(pt[, mode], fn)
//$f.accessSync(pt[, mode])
//Class: $f.Stats
//Stat Time Values
//$f.createReadStream(pt[, op])
//Class: $f.ReadStream
//Event: 'open'
//$f.createWriteStream(pt[, op])
//Class: $f.WriteStream
//Event: 'open'
//file.bytesWritten
//Class: $f.FSWatcher
//watcher.close()
//Event: 'change'
//Event: 'error'







//  lstat() is identical to stat(),
// except that if path is a symbolic link,
//  then the link itself is stat-ed,
// not the file that it refers to.
//fstat()  is  identical to stat(),
// except that the file to be stat-ed is
//specified by the file descriptor fd.

examp=function() {


//ex  get !recur  dir  listing
    dirListing = function () {

        p = "../"

        $f.rd(p, function (z, fls) {

            fls.map(function (f) {
                return $p.j(p, f)
            })
                .filter(function (f) {
                    return $f.iF(f)
                })
                .forEach(function (f) {
                    $l(f + '(' + $p.x(f) + ')')
                })
        })

// We could also easily use the Array.filter()
// method to filter the file array by the fi
// le extension if we only wanted to interate over
// .js/.json files or .png files,
// or instead we could use the fs.stats class’
// isDirectory() method to
// recursively get the nested directory structure.

    }

//ex: send static file
    $s = $h.s(function (q, p) {
        $p.ex(
            f = $p.j(process.cwd(), $u.pN(q.url)),
            function (ex) {
                return ex ? exists(f) : doesnt()
            })
        //just one function
// and it only runs under one condition:
// if a certain file exists
// so it checks..
        function exists(f) {
            // and if it does..
            // it checks it its a directory
            if ($f.iD(f)) {
                //and if it is..
                // then it looks looks for the index html IN that dir
                f += '/index.html'
            }
            $f.bn(f, function (z, f) {
                //so now it has a file and so it
                // writes a 200 header
                // //and writes the file OUT to binary
                // and ends (sends)
                p.wHwBE(200, f)
            })
        }

        function doesnt() {
            p.wH(404, txPl).w(z4).e();
            return
        }
    })


    exAjaxUpload = function () {

        // https://codeforgeek.com/2014/11/ajax-file-upload-node-js/

        //  Recommended read : File uploads using node.js

        server = function () {

            multer = $q('multer')
            done = false
            $a.u(
                multer({
                    dest: './uploads/',
                    rename: function (fieldN, flN) {
                        return flN + Date.now()
                    },

                    onFileUploadStart: function (fl) {
                        $l(fl.originalname + ' is starting ...')
                    },
                    onFileUploadComplete: function (fl) {
                        $l(file.fieldname + ' uploaded to  ' + fl.path);
                        done = true
                    }
                }))
            $a.g('/', function (q, p) {
                p.fl("index.html")
            }) //sendFile
            $a.po('/api/photo', function (q, p) {
                if (done == true) {
                    $l(q.files);
                    p.e("File uploaded.")
                }
            })


        }
        client = function () {

            /*

             <form id="uploadForm"
             enctype="multipart/form-data"
             action="/api/photo"
             method="post">
             <input type="file" name="userPhoto" />
             <input type="submit" value="Upload Image" name="submit">
             </form>

             $('#uploadForm').submit(function() {
             $(this).ajaxSubmit({
             error: function(xhr) { status('Error: ' + xhr.status) },
             success: function(response) { $l(response) } })
             return false  // disable the page refresh.

             })



             On Form submit,
             we will stop the page refresh by returning FALSE
             and call the API using ajaxSubmit().
             Add this code in separate file and add it below the jquery.form
             or copy and paste just below this line

             Ajax always provides richness to web $alication.
             jQuery.form is one of the stable and popular library.
             Multer takes care of handling multipart data
             and provides ease to implementation.


             */
        }

    }
}