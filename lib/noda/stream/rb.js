$sRb= $sRs=function(r){//var s= $sr.R()

    // Event: 'readable'   // common: 'data'   'end'  'close' 'error'
    r.ec=function(ec){return this.setEncoding(!!ec)}
    r.wr=function(sr){return this.wrap(sr)}
    function data(){r.pu = function (a) {return this.push(D(a) ? a : null)}
        r.u = r.ush = function(chunk){return this.unshift(chunk)}}
    function pause(){r.P = r.pause
        r.iP= r.isPaused
        r.rs= r.resume}
    function pipe(){r._=function(dst,op){return this.pipe(dst,op)}
        r.__=function(dst){return this.unpipe(dst)}}
    function read(){
        r.r=function(sz){return this.read(sz)}
        r.o.rb = function(fn){return this('readable',fn)}
        r.O.rb = function(fn){return this('readable',fn)}
        //r.oR=function(fn){this._read = fn; return this}
    }
    return r
}
$rs=function(fN,ob){ob=ob||{}
    var s= $sr.R()
    if(ob.e){
        if(ob.e=='u8'){ob.e=='utf8'}
        ob.encoding=ob.e
    }
    return $sRs(fN,ob)
}
$srOp=function(){
    return {readableObjectMode : true}
}
$opDfs={
    flags: 'w',
    encoding: null,
    fd: null,// if fd specd, ws ignores the pt arg,
    // uses specg file descriptor (no open ev will emit)
    mode: 0666,
    start:null
    //  allows writing data at some pos  past beginning of  file
// Modg (!replacing) a file may require  flagsMode: r+ (! the df mode w)
}

//sr.R implements _read(size) method
exCountingSr=function() {


//  -emits 1-1mil, then ends
    $u.ih(Counter, $sr.R)
    function Counter(op) {
        var c = this
        $sr.R.call(c, op)
        c._max = 1000000
        c._index = 1
    }

    Counter.prototype._read = function () {
        var c = this
        c.push(c._index++ > c._max ? null :
            new Buffer('' + c._index, 'ascii'))
        return c
    }

}

//Example: SimpleProtocol v1 (Sub-optimal)#
//This is similar to the parseHeader function described above,
// but implemented as a custom stream.
// Also, note that this implementation
// does not convert the incoming data to a string.
//// A parser for a simple data protocol.
//// The "header" is a JSON object,
// followed by 2 \n characters, and then a message body.


$u.ih(SimpleProtocol, Readable);
    function SimpleProtocol(src, op) {if (!(this instanceof SimpleProtocol)) return new SimpleProtocol(src,op)
        Readable.call(this, op)
        this._inBody = false; this._sawFirstCr = false;
        // source is a readable stream, such as a socket or file
        this._source = src; var self = this;src.on('end', function () {self.push(null)});
        // give it a kick whenever the source is readable
        // read(0) will not consume any bytes
        src.on('readable', function () {self.read(0)});this._rawHeader=[];this.header = null}
    SimpleProtocol.prototype._read = function (n) {
        if (!this._inBody) {var chunk = this._source.read();
            // if the source doesn't have data, we don't have data yet.
            if (chunk === null)return this.push('');
            // check if the chunk has a \n\n
            var split = -1;for (var i = 0; i < chunk.length; i++) {if (chunk[i] === 10) { // '\n'
                    if (this._sawFirstCr) {split = i;break;} else {this._sawFirstCr = true;}             } else {                 this._sawFirstCr = false}}
            if (split === -1) {// still waiting for the \n\n
                // stash the chunk, and try again.
                this._rawHeader.push(chunk);this.push('')} else {this._inBody = true;
                var h = chunk.slice(0, split);this._rawHeader.push(h);var header = Buffer.concat(this._rawHeader).toString();
                try {this.header = JSON.parse(header)} catch (er) {this.emit('error', new Error('invalid simple protocol data'));return}// now, because we got some extra data, unshift the rest
                // back into the read queue so that our consumer will see it.
                var b = chunk.slice(split);this.unshift(b);// and let them know that we are done parsing the header.
                this.emit('header', this.header)}} else {// from there on, just provide the data to our consumer.
            // careful not to push(null), since that would indicate EOF.
            var chunk = this._source.read();if (chunk) this.push(chunk)}}// Usage:
// var parser = new SimpleProtocol(source);
// Now parser is a readable stream that will emit 'header'
// with the parsed header data.
    new stream.Readable([options])#//options Object
//highWaterMark Number The maximum number of bytes to store in the internal buffer
// before ceasing to read from the underlying resource.
// Default=16kb, or 16 for objectMode streams
//encoding String If specified,
// then buffers will be decoded to strings using the specified encoding. Default=null
//objectMode Boolean Whether this stream should behave as a stream of objects.
// Meaning that stream.read(n) returns a single value
// instead of a Buffer of size n. Default=false
//In classes that extend the Readable class,
// make sure to call the Readable constructor
// so that the buffering settings can be properly initialized.
//
//    readable._read(size)#
//
//size Number Number of bytes to read asynchronously
//Note: Implement this function, but do NOT call it directly.
//
//    This function should NOT be called directly. It should be implemented by child classes,
// and only called by the internal Readable class methods.
//All Readable stream implementations must provide a _read method to fetch data from the underlying resource.
//    This method is prefixed with an underscore because it is internal to the class that defines it,
// and should not be called directly by user programs. However, you are expected to override this method
// in your own extension classes.
//
//    When data is available, put it into the read queue by calling readable.push(chunk).
// If push returns false, then you should stop reading. When _read is called again,
// you should start pushing more data.
//
//    The size argument is advisory.
// Implementations where a "read" is a single call that returns data
// can use this to know how much data to fetch.
// Implementations where that is not relevant, such as TCP or TLS, may ignore this argument,
// and simply provide data whenever it becomes available.
// There is no need, for example to "wait" until
// size bytes are available before calling stream.push(chunk).
//    readable.push(chunk[, encoding])#
//chunk Buffer | null | String Chunk of data to push into the read queue
//encoding String Encoding of String chunks.
// Must be a valid Buffer encoding, such as 'utf8' or 'ascii'
//return Boolean Whether or not more pushes should be performed
//Note: This function should be called by Readable implementors,
// NOT by consumers of Readable streams.
//    The _read() function will not be called again
// until at least one push(chunk) call is made.
//    The Readable class works by putting data into a read queue to be pulled out later
// by calling the read() method when the 'readable' event fires.
//    The push() method will explicitly
// insert some data into the read queue.
// If it is called with null then it will signal the end of the data (EOF).
//    This API is designed to be as flexible as possible.
// For example, you may be wrapping a lower-level source
// which has some sort of pause/resume mechanism,
// and a data callback.
// In those cases, you could wrap the low-level source object
// by doing something like this:
// source is an object with readStop() and readStart() methods,
// and an `ondata` member that gets called when it has data, and
// an `onend` member that gets called when the data is over.
$u.ih(SourceWrapper, Readable);
function SourceWrapper(op) {     Readable.call(this, op);
        this._source = getLowlevelSourceObject();var self = this;// Every time there's data,
        // we push it into the internal buffer.
        this._source.ondata = function (chunk) {// if push() returns false,
            // then we need to stop reading from source
            if (!self.push(chunk))self._source.readStop()}     // When the source ends, we push the EOF-signaling `null` chunk
        this._source.onend = function () {self.push(null)}}// _read will be called when the stream wants to pull more data in
// the advisory size argument is ignored in this case.
    SourceWrapper.prototype._read = function (size) {this._source.readStart()}
