//  how to integrate GridFS with mongoose.
//      Mongodb provides us with a very efficient way to store files directly in db, rather than in file system.
//
//  suppose you need to store an image file or an audio or video file
// you can directly store that in mongodb itself // lib to use is https://www.npmjs.com/package/gridfs-stream


cn = mg.connection;

fs = $q('fs')

Grid = $q('gridfs-stream');
Grid.mongo = mongoose.mongo;

conn.once('open', function () {$l('open');
    var gfs = Grid(conn.db);

    // streaming to gridfs //filename to store in mongodb
    writestream = gfs.createWriteStream({filename: 'mongo_file.txt'   })
    fs.createReadStream('/home/etech/sourcefile.txt').pipe(writestream);

    writestream.on('close', function (file) {   $l(file.filename + 'Written To DB') }) })
//  After above is done, you will see two collections added to the database ‘fs.chunks’ and ‘fs.files’

//  Reading a File  is also easy, you need to know the filename or _id

//write content to file system
fs_write_stream = fs.createWriteStream('write.txt');

//read from mongodb
readstream = gfs.createReadStream({filename: 'mongo_file.txt' });
readstream.pipe(fs_write_stream);fs_write_stream.on('close', function () {
    $l('file has been written fully!') })

//     For Deleting a file you need to know the filename or _id
gfs.remove({     filename: 'mongo_file.txt'  }, function (z) { $l('success')    });
// or

gfs.remove({     _id : '548d91dce08d1a082a7e6d96'  }, function (z) {
    if (z) return handleError(z);
    $l('success')   })
//  File Exists

// To check if a file exists or not

op = {filename : 'mongo_file.txt'}; //can be done via _id as well
gfs.exist(options, function (z, found) {
    if (z) return handleError(z);     found ? $l('File exists') : $l('File does not exist')    })
//   Access File Meta Data

gfs.files.find({ filename: 'mongo_file.txt' }).toArray(function (z, files) {$l(files)   })
// Gfs can also be piped to a node http server easily to display images, audio file, etc for your web application.



//// part 2 UPLAOAD //////




//    how to handle multipart data/file uploading
// Save files to mongodb using GridFS and rending files.
//   To handle file uploads in express, i will use the library located at https://github.com/expressjs/multer

app.use('/uploads', express.static(__dirname + '/uploads' ))
app.use(multer({dest: './uploads/'}))
//     The above code catches all multipart data,
// fileuploads automatically and stores the file to ‘uploads/’ folder
//
//   So basically if you have a form tag, with its action pointed to a express route.
// Fileupload server handling is taken care automatically
// and all file move to ‘uploads’ folder.

//    Now let’s see how to save uploaded file to mongodb. Detailed explanation of using gridfs here

//    Suppose the file upload URL is http://127.0.0.1:3000/upload


fs = $q('fs');

router.all('/upload',function(req,res){
    var dirname = $q('path').dirname(__dirname);
    var filename = req.files.file.name;
    var path = req.files.file.path;
    var type = req.files.file.mimetype;

    var read_stream =  fs.createReadStream(dirname + '/' + path);

    var conn = req.conn; var Grid = $q('gridfs-stream'); Grid.mongo = mongoose.mongo;

    gfs = Grid(conn.db);
    writestream = gfs.createWriteStream({ filename: filename })
    read_stream.pipe(writestream);

});
//   Now let’s see how to view image file uploaded in mongo

//    If URL to view files is http://127.0.0.1:3000/file/mongo_id

router.get('/file/:id',function(q,p){

    pic_id = q.param('id'); gfs = q.gfs;
    gfs.files.find({filename: pic_id}).toArray(function (z, files) {
        if (z) { p.j(z) }
        if (files.length > 0) {
            var mime = 'image/jpeg';
            p.set('Content-Type', mime)

            read_stream = gfs.createReadStream({filename: pic_id}); read_stream.pipe(p) }
        else {p.j('File Not Found') } })
})

