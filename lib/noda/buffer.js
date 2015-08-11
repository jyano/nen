b.len=b.length
b.tS=b.toString//([encoding][, start][, end])
b.tJ=b.toJSON()
//b[index]
b.eq=b.equals(otherBuffer)
b.cmp=b.compare(otherBuffer)
b.cp=b.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])
b.sl=b.slice([start][, end])
b.rUL=b.readUIntLE(offset, bytLen, noAssert)
b.rUB= b.readUIntBE(offset, bytLen, noAssert)
b.rIL= b.readIntLE(offset, bytLen, noAssert)
b.rIB= b.readIntBE(offset, bytLen, noAssert)
b.rUI8= b.readUInt8
b.rU16L=b.readUInt16LE
b.rU16B=b.readUInt16BE
b.rU32L=b.readUInt32LE
b.rU32B=b.readUInt32BE
b.rI8=b.readInt8
b.rI16L=b.readInt16LE
b.rI16B=b.readInt16BE
b.rI32L=b.readInt32LE
b.rI32B=b.readInt32BE
b.rFL=b.readFloatLE
b.rFB=b.readFloatBE
b.rDL=b.readDoubleLE
b.rDB=b.readDoubleBE
b.w=b.write(string, offset, length, encoding)
b.wUL= b.writeUIntLE(v, offset, bytLen, noAssert)
b.wUB=b.writeUIntBE(v, offset, bytLen, noAssert)
b.wIL= b.writeIntLE(v, offset, bytLen, noAssert)
b.wIB=b.writeIntBE(v, offset, bytLen, noAssert)
b.wUI8= b.writeUInt8
b.wU16L=b.writeUInt16LE
b.wU16B=b.writeUInt16BE
b.wU32L=b.writeUInt32LE
b.wU32B=b.writeUInt32BE
b.wI8=b.writeInt8
b.wI16L=b.writeInt16LE
b.wI16B=b.writeInt16BE
b.wI32L=b.writeInt32LE
b.wI32B=b.writeInt32BE
b.wFL=b.writeFloatLE
b.wFB=b.writeFloatBE
b.wDL=b.writeDoubleLE
b.wDB=b.writeDoubleBE


b.f=b.fill //(value[, offset][, end])

//  binary data? it's necessary to handle
// octet streams. Node has several
// strategies for manipulating, creating,
// and consuming octet streams.

//Raw data is stored in instances of the Buffer class.
// A Buffer is similar to an array of integers
// but corresponds to a raw memory allocation
// outside the V8 heap.
// A Buffer cannot be resized.
//
//    The Buffer class is a global,
// making it very rare that one would need
// to ever require('buffer').
//
//    Converting between Buffers and
// JavaScript string objects requires
// an explicit encoding method.
// Here are the different string encodings.


'ascii' // - for 7 bit ASCII data only.
// This encoding method is very fast, and will strip the high bit if set.
'utf8'// - Multibyte encoded Unicode characters.
// Many web pages and other document formats use UTF-8.

'utf16le' //- 2 or 4 bytes,
// little endian encoded Unicode characters.
// Surrogate pairs (U+10000 to U+10FFFF) are supported.

'ucs2' //- Alias of 'utf16le'.
'base64'// - Base64 string encoding.
'binary'// - A way of encoding raw binary data into strings
// by using only the first 8 bits of each character.
// This encoding method is deprecated and should be avoided
// in favor of Buffer objects where possible.
// This encoding will be removed in future versions of Node.
'hex'
//- Encode each byte as two hexadecimal characters.
//    Creating a typed array from a Buffer works
// with the following caveats:
//    The buffer's memory is copied, not shared.


//The buffer's memory is
// interpreted as an array,
// not a byte array.
// That is, new Uint32Array($Bf([1,2,3,4]))
// creates a 4-element Uint32Array
// with elements [1,2,3,4], not an Uint32Array
// with a single element [0x1020304] or [0x4030201].

//NOTE: Node.js v0.8 simply retained a reference to the buffer in
// array.buffer instead of cloning it.

//    While more efficient,
// it introduces subtle incompatibilities with the typed arrays
// specification.
// ArrayBuffer#slice() makes a copy of the slice
// while Buffer#slice() creates a view.

clasts=function(){

//Class: Buffer//$Bf(size)//$Bf(array)//$Bf(buffer)//$Bf(str[, encoding])

    Bff=Buffer
    Bff.isEncoding(encoding)
    Bff.isBuffer(obj)
    Bff.byteLength(string[, encoding])
    Bff.concat(list[, totalLength])
    Bff.compare(buf1, buf2)
}


//    Class: Buffer#
//The Buffer class is a global type for dealing
// with binary data directly.
// It can be constructed in a variety of ways.


//    $Bf(size)#
//size Number
//Allocates a new buffer of size octets.
// Note, size must be no more than kMaxLength.
// Otherwise, a RangeError will be thrown here.


//    $Bf(array)#
//array Array
//Allocates a new buffer using an array of octets.


//    $Bf(buffer)#
//buffer Buffer
//Copies the passed buffer data onto a new Buffer instance.


//    $Bf(str[, encoding])#
//str String - string to encode.
//    encoding String - encoding to use, Optional.
//    Allocates a new buffer containing the given str.
// encoding defaults to 'utf8'.


 Buffer.isEncoding(encoding)
//encoding String The encoding string to test
//Returns true if the encoding is a valid encoding argument,
// or false otherwise.

//    Class Method: Buffer.isBuffer(obj)#
//obj Object
//Return: Boolean
//Tests if obj is a Buffer.


byteLen=function() {
    Buffer.byteLength//(string[, encoding])#
//string String
//encoding String, Optional, Default: 'utf8'
//Return: Number
//Gives the actual byte length of a string. encoding defaults to 'utf8'. This is not the same as String.prototype.length since that returns the number of characters in a string.
//
//    Example:
//
    str = '\u00bd + \u00bc = \u00be';

    $l(str + ": " + str.length + " characters, " +
        Buffer.byteLength(str, 'utf8') + " bytes");

//// ½ + ¼ = ¾: 9 characters, 12 bytes
//Class Method: Buffer.concat(list[, totalLength])#
//list Array List of Buffer objects to concat
//totalLength Number Total length of the buffers when concatenated
//Returns a buffer which is the result of concatenating all the buffers in the list together.
//
//    If the list has no items,
// or if the totalLength is 0,
// then it returns a zero-length buffer.
//
//    If the list has exactly one item,
// then the first item of the list is returned.
//
//    If the list has more than one item,
// then a new Buffer is created.
//
//    If totalLength is not provided, it is read from the buffers in the list. However, this adds an additional loop to the function, so it is faster to provide the length explicitly.
//
//    Class Method: Buffer.compare(buf1, buf2)#
//buf1 Buffer
//buf2 Buffer
//The same as buf1.compare(buf2). Useful for sorting an Array of Buffers:

    arr = [Buffer('1234'), Buffer('0123')];
    arr.sort(Buffer.compare);

    len = function () {
//buf.length#
//Number
//The size of the buffer in bytes.
// Note that this is not necessarily the size of the contents.
// length refers to the amount of memory allocated for the buffer object.
// It does not change when the contents of the buffer are changed.
//
        buf = $Bf(1234);

        $l(buf.length);
        buf.write("some string", 0, "ascii");
        $l(buf.length);

//// 1234
//// 1234
//While the length property is not immutable, changing the value of length can result in undefined and inconsistent behavior. Applications that wish to modify the length of a buffer should therefore treat length as read-only and use buf.slice to create a new buffer.
//

        b = $Bf(10);
        b.w("abcdefghj", 0, "ascii");

        $l(b.length); // 10

        b = b.sl(0, 5);
//$l(buf.length); // 5
//buf.write(string[, offset][, length][, encoding])#
//string String - data to be written to buffer
//offset Number, Optional, Default: 0
//length Number, Optional, Default: buffer.length - offset
//encoding String, Optional, Default: 'utf8'
//Writes string to the buffer at offset using the given encoding. offset defaults to 0, encoding defaults to 'utf8'. length is the number of bytes to write. Returns number of octets written. If buffer did not contain enough space to fit the entire string, it will write a partial amount of the string. length defaults to buffer.length - offset. The method will not write partial characters.
//
        b = $Bf(256);
        len = b.w('\u00bd + \u00bc = \u00be', 0);
        $l(len + " bytes: " + b.tS('utf8', 0, len));
        b.wUIntLE//(value, offset, byteLength[, noAssert])#
        b.wUIntBE//(value, offset, byteLength[, noAssert])#
        b.wIntLE//(value, offset, byteLength[, noAssert])#
        b.wIntBE//(value, offset, byteLength[, noAssert])#
//value {Number} Bytes to be written to buffer
//offset {Number} 0 <= offset <= buf.length
//byteLength {Number} 0 < byteLength <= 6
//noAssert {Boolean} Default: false
//Return: {Number}
//Writes value to the buffer at the specified offset and byteLength. Supports up to 48 bits of accuracy. For example:
//

        b = $Bf(6);
        b.wUB(0x1234567890ab, 0, 6);//// <Buffer 12 34 56 78 90 ab>
//Set noAssert to true to skip validation of value and offset. Defaults to false.
//
    }
    b.rUL//(offset, byteLen[, noAssert])#
    b.rUB//(offset, byteLength[, noAssert])#
    b.rL//(offset, byteLength[, noAssert])#
    b.rB//(offset, byteLen[, noAssert])#

//offset {Number} 0 <= offset <= buf.length
//byteLength {Number} 0 < byteLength <= 6
//noAssert {Boolean} Default: false
//Return: {Number}

//A generalized version of all numeric read methods.
// Supports up to 48 bits of accuracy. For example:
//
    b = $Bf(6);
    b.wU16L(0x90ab, 0);
    b.wU32L(0x12345678, 2);
    b.rUL(0, 6).tS(16);  // Specify 6 bytes (48 bits)//// output: '1234567890ab'

//Set noAssert to true to skip validation of offset.
// This means that offset may be beyond the end of the buffer.
// Defaults to false.
}
toStr=function(){


//    buf.toString([encoding][, start][, end])#
//encoding String, Optional, Default: 'utf8'
//start Number, Optional, Default: 0
//end Number, Optional, Default: buffer.length
//Decodes and returns a string
// from buffer data encoded using the specified character set encoding. If encoding is undefined or null, then encoding defaults to 'utf8'. The start and end parameters default to 0 and buffer.length when undefined`.

    buf = $Bf(26);
    for (var i = 0 ; i < 26 ; i++) {
        buf[i] = i + 97; // 97 is ASCII a
    }

    b.tS('ascii'); // outputs: abcdefghijklmnopqrstuvwxyz
    b.tS('ascii',0,5); // outputs: abcde
    b.tS('utf8',0,5); // outputs: abcde
    b.tS(undefined,0,5); // encoding defaults to 'utf8', outputs abcde
//See buffer.write() example, above.
//
//    buf.toJSON()#
//Returns a JSON-representation of the Buffer instance.
// JSON.stringify implicitly calls this function
// when stringifying a Buffer instance.

    buf = $Bf('test');
    json = JSON.stringify(buf);

    $l(json) // '{"type":"Buffer","data":[116,101,115,116]}'

    J=JSON
    J.p= J.parse
    iBf=function(v){return v && v.type === 'Buffer'}
    $Bf=function(bf){return $Bf(bf)}

}

copy=J.p(json,
    function(k,v){iBf(v)?$Bf(v.data):v})
$l(copy)

//// <Buffer 74 65 73 74>
//buf[index]#
//Get and set the octet at index.
// The values refer to individual bytes,
// so the legal range is between 0x00 and 0xFF hex or 0 and 255.

//Example: copy an ASCII string into a buffer,
// one byte at a time:


str = "node.js";

buf = $Bf(str.length)
for(var i=0;i<str.length;i++){buf[i]=str.charCodeAt(i)}
$l(buf)

eq=function(){
    //// node.js
//buf.equals(otherBuffer)#
//otherBuffer Buffer
//Returns a boolean of whether this and otherBuffer have the same bytes.
//
//    buf.compare(otherBuffer)#
//otherBuffer Buffer
//Returns a number indicating whether this comes before or after or is the same as the otherBuffer in sort order.
//
}
copy=function(){

    buf.copy//(targetBuffer[, targetStart][, sourceStart][, sourceEnd])#
//targetBuffer Buffer object - Buffer to copy into
//targetStart Number, Optional, Default: 0
//sourceStart Number, Optional, Default: 0
//sourceEnd Number, Optional, Default: buffer.length
//Copies data from a region of this buffer to a region in the target buffer even if the target memory region overlaps with the source. If undefined the targetStart and sourceStart parameters default to 0 while sourceEnd defaults to buffer.length.

//    Example: build two Buffers,
// then copy buf1 from byte 16 through byte 19 into buf2,
// starting at the 8th byte in buf2.


    buf1 = $Bf(26);buf2 = $Bf(26)
    for(var i=0;i<26;i++){buf1[i] = i + 97; // 97 is ASCII a
        buf2[i]=33}// ASCII !

    buf1.copy(buf2,8,16,20)
//$l(buf2.toString('ascii', 0, 25))
//// !!!!!!!!qrst!!!!!!!!!!!!!
//Example: Build a single buffer, then copy data from one region to an overlapping region in the same buffer
    buf = $Bf(26)

    for (var i = 0 ; i < 26 ; i++) {buf[i] = i + 97} // 97 is ASCII a

//
//buf.copy(buf, 0, 4, 10);
//$l(b.tS());
//
//// efghijghijklmnopqrstuvwxyz

}
//buf.slice([start][, end])#
//start Number, Optional, Default: 0
//end Number, Optional, Default: buffer.length
//Returns a new buffer which references the same memory as the old, but offset and cropped by the start (defaults to 0) and end (defaults to buffer.length) indexes. Negative indexes start from the end of the buffer.
//
//    Modifying the new buffer slice will modify memory in the original buffer!
//
//    Example: build a Buffer with the ASCII alphabet, take a slice, then modify one byte from the original Buffer.
//
 buf1 = $Bf(26);

for (var i = 0 ; i < 26 ; i++) {
    buf1[i] = i + 97;
}// 97 is ASCII a

 buf2 = buf1.slice(0, 3);
$l(buf2.toString('ascii', 0, buf2.length));
buf1[0] = 33;
$l(buf2.toString('ascii', 0, buf2.length));

//// abc
//// !bc
//buf.rUInt8(offset[, noAssert])#
//offset Number
//noAssert Boolean, Optional, Default: false
//Return: Number
//Reads an unsigned 8 bit integer from the buffer at the specified offset.
//
//    Set noAssert to true to skip validation of offset.
// This means that offset may be beyond the end of the buffer.
// Defaults to false.
// buf = $Bf(4)
//buf[0] = 0x3;buf[1] = 0x4;buf[2] = 0x23;buf[3] = 0x42;
for (ii = 0; ii < buf.length; ii++){$l(buf.rUInt8(ii))}
//// 0x3
//// 0x4
//// 0x23
//// 0x42

b=buf

b.rUInt16LE(offset, noAssert)
b.rUInt16BE(offset, noAssert)

//offset Number
//noAssert Boolean, Optional, Default: false
//Return: Number
//Reads an unsigned 16 bit integer from the buffer
// at the specified offset with specified endian format.
//
//    Set noAssert to true to skip validation of offset.
// This means that offset may be beyond the end of the buffer. Defaults to false.
buf = $Bf(4);
buf[0] = 0x3;buf[1] = 0x4;buf[2] = 0x23;buf[3] = 0x42;

$l(buf.rUInt16BE(0));$l(buf.rUInt16LE(0));$l(buf.rUInt16BE(1));
$l(buf.rUInt16LE(1));$l(buf.rUInt16BE(2));$l(buf.rUInt16LE(2));

//// 0x0304
//// 0x0403
//// 0x0423
//// 0x2304
//// 0x2342
//// 0x4223
//buf.rUInt32LE(offset[, noAssert])#
//buf.rUInt32BE(offset[, noAssert])#
//offset Number
//noAssert Boolean, Optional, Default: false
//Return: Number
//Reads an unsigned 32 bit integer from the buffer at the specified offset with specified endian format.


//    Set noAssert to true to skip validation of offset.
// This means that offset may be beyond the end of the buffer.
// Defaults to false.
  buf = $Bf(4);
 buf[0] = 0x3;
 buf[1] = 0x4;
buf[2] = 0x23;
buf[3] = 0x42;
 $l(buf.rUInt32BE(0));
 $l(buf.rUInt32LE(0));
//
//// 0x03042342
//// 0x42230403
//buf.rInt8(offset[, noAssert])#
//offset Number
//noAssert Boolean, Optional, Default: false
//Return: Number
//Reads a signed 8 bit integer from the buffer at the specified offset.
//
//    Set noAssert to true to skip validation of offset.
// This means that offset may be beyond the end of the buffer. Defaults to false.
//
//    Works as buffer.rUInt8,
// except buffer contents are treated as two's complement signed values.
//
//buf.rInt16LE(offset[, noAssert])#
//buf.rInt16BE(offset[, noAssert])#
//offset Number
//noAssert Boolean, Optional, Default: false
//Return: Number
//Reads a signed 16 bit integer from the buffer at the specified offset
// with specified endian format.
//
//    Set noAssert to true to skip validation of offset.
// This means that offset may be beyond the end of the buffer.
// Defaults to false.
//
//    Works as buffer.rUInt16*,
// except buffer contents are treated as two's complement signed values.
//
//buf.rInt32LE(offset[, noAssert])#
//buf.rInt32BE(offset[, noAssert])#
//offset Number
//noAssert Boolean, Optional, Default: false
//Return: Number
//Reads a signed 32 bit integer from the buffer at the specified offset with specified endian format.
//
//    Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.
//
//    Works as buffer.rUInt32*, except buffer contents are treated as two's complement signed values.
//
//buf.rFloatLE(offset[, noAssert])#
//buf.rFloatBE(offset[, noAssert])#
//offset Number
//noAssert Boolean, Optional, Default: false
//Return: Number
//Reads a 32 bit float from the buffer at the specified offset
// with specified endian format.
//
//    Set noAssert to true to skip validation of offset.
// This means that offset may be beyond the end of the buffer. Defaults to false.


buf = $Bf(4);
buf[0] = 0x00; buf[1] = 0x00; buf[2] = 0x80; buf[3] = 0x3f;


//$l(buf.rFloatLE(0));
//
//// 0x01
//buf.rDoubleLE(offset[, noAssert])#
//buf.rDoubleBE(offset[, noAssert])#
//offset Number
//noAssert Boolean, Optional, Default: false
//Return: Number
//Reads a 64 bit double from the buffer at the specified offset with specified endian format.
//
//    Set noAssert to true to skip validation of offset.
// This means that offset may be beyond the end of the buffer.
// Defaults to false.
//


  b = $Bf(8); b[0] = 0x55; b[1] = 0x55; b[2] = 0x55;
b[3] = 0x55; b[4] = 0x55; b[5] = 0x55;
b[6] = 0xd5;b[7] = 0x3f; $l(b.rdDL(0)) //// 0.3333333333333333
//buf.writeUInt8(value, offset[, noAssert])#
//value Number
//offset Number
//noAssert Boolean, Optional, Default: false
//Writes value to the buffer at the specified offset. Note, value must be a valid unsigned 8 bit integer.
//
//    Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.

b = $Bf(4);b.wU8(0x3, 0);b.wU8(0x4, 1);
b.wUInt8(0x23, 2);b.wUInt8(0x42, 3);$l(b);//// <Buffer 03 04 23 42>
 b.wU16L(v, os, noAssert) ;b.wU16B(v, os, noAssert)
//value Number
//offset Number
//noAssert Boolean, Optional, Default: false
//Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid unsigned 16 bit integer.
//
//    Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
 b = $Bf(4);
 b.wU16B(0xdead, 0); b.wU16B(0xbeef, 2);$l(b);
 b.wU16L(0xdead, 0); b.wU16L(0xbeef, 2);
 $l(b);//// <Buffer de ad be ef>//// <Buffer ad de ef be>
buf.wU32L(v, offset, noAssert);
b.wU32B(v, offset, noAssert)

//value Number
//offset Number
//noAssert Boolean, Optional, Default: false
//Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid unsigned 32 bit integer.
//
//    Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
//
//    Example:
//

b = $Bf(4); b.wU32B(0xfeedface, 0);$l(b)

b.wU32L(0xfeedface, 0);$l(b);/// <Buffer fe ed fa ce> / <Buffer ce fa ed fe>
//buf.wInt8(value, offset[, noAssert])#
//value Number//offset Number
//noAssert Boolean, Optional, Default: false
//Writes value to the buffer at the specified offset. Note, value must be a valid signed 8 bit integer.
//
//    Set noAssert to true
// to skip validation of value and offset.
// This means that value may be too large
// for the specific function
// and offset may be beyond the end
// of the buffer leading to the values
// being silently dropped.
//
// This should not be used unless you
// are certain of correctness.
// Defaults to false.

//    Works as buffer.wUInt8,
// except value is written out as a
// two's complement signed integer into buffer.
//

b.wI16L(v, offset, noAssert)
b.wI16B(v, os, noAss)

//value Number//offset Number
//noAssert Boolean, Optional, Default: false
//Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid signed 16 bit integer.
//    Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
//    Works as buffer.wUInt16*, except value is written out as a two's complement signed integer into buffer.

b.wI32L(v,os,noA)
b.wI32B(v,os,nA)

//value Number
//offset Number
//noAssert Boolean, Optional, Default: false
//Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid signed 32 bit integer.
//
//    Set noAssert to true to skip validation
// of value and offset.
// This means that value may be too large
// for the specific function and offset
// may be beyond the end of the buffer leading
// to the values being silently dropped.
// This should not be used unless you are
// certain of correctness.
// Defaults to false.


//    Works as buffer.wUInt32*,
// except value is written out as
// a two's complement signed integer into buffer.
b.wFL(v, offset, noAss)
b.wFB(v, os, noAss)

//value Number//offset Number
//noAssert Boolean, Optional, Default: false
//Writes value to the buffer at the specified offset with specified endian format. Note, behavior is unspecified if value is not a 32 bit float.
//
//    Set noAssert to true to skip validation
// of value and offset.
// This means that value may be too large
// for the specific function and offset
// may be beyond the end of the buffer
// leading to the values being silently dropped.
// This should not be used
// unless you are certain of correctness.
// Defaults to false.

b = $Bf(4);
b.wFB(0xcafebabe, 0); $l(b)
b.wFL(0xcafebabe, 0); $l(b) // <Buffer 4f 4a fe bb> <Buffer bb fe 4a 4f>
b.wDL(v, offset,noAssert)
b.wDB(v, offset, noAssert)


//value Number
//offset Number
//noAssert Boolean, Optional, Default: false
//Writes value to the buffer at the specified offset with specified endian format. 
// Note, value must be a valid 64 bit double.
//
//    Set noAssert to true to skip validation of value and offset. 
// This means that value may be too large for the specific function 
// and offset may be beyond the end of the buffer leading to the values being silently dropped. 
// This should not be used unless you are certain of correctness. Defaults to false.
//
//    Example:
//
  b = $Bf(8);
b.wDB(0xdeadbeefcafebabe, 0);$l(b);
 b.wDL(0xdeadbeefcafebabe, 0);$l(b);

//// <Buffer 43 eb d5 b7 dd f9 5f d7>
//// <Buffer d7 5f f9 dd b7 d5 eb 43>
//buf.fill(value[, offset][, end])#
//value
//offset Number, Optional
//end Number, Optional
//Fills the buffer with the specified value. If the offset (defaults to 0) and end (defaults to buffer.length) are not given it will fill the entire buffer.
//
  b = $Bf(50); b.fill("h");b.INSPECT_MAX_BYTES#
//Number, Default: 50
//How many bytes will be returned when buffer.inspect() is called.
// This can be overridden by user modules.
//
//    Note that this is a property on the buffer module returned by require('buffer'),
// not on the Buffer global, or a buffer instance.
//
//    Class: SlowBuffer#
//Returns an un-pooled Buffer.
//
//    In order to avoid the garbage collection overhead of creating many
// individually allocated Buffers, by default allocations under 4KB are sliced
// from a single larger allocated object. This approach improves
// both performance and memory usage since v8 does not need
// to track and cleanup as many Persistent objects.
//
//    In the case where a developer may need to retain a small chunk of memory
// from a pool for an indeterminate amount of time it may be appropriate
// to create an un-pooled Buffer instance using SlowBuffer and copy out the relevant bits.
//
//// need to keep around a few small chunks of memory


store = []
 socket.on('readable', function() {
 data = socket.read();
  sb = new SlowBuffer(10); // allocate for retained data
   data.copy(sb,0,0,10);store.push(sb)})
// copy the data into the new allocation
//Though this should used sparingly and only be a last resort after a developer has actively
// observed undue memory retention in their applications.