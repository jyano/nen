bf= MongooseBuffer

bf.copy//(target <Buffer>)>> <MongooseBuffer> Copies the buffer.
//Buffer.copy does not mark target as modified so you must copy from a MongooseBuffer for it to work as expected.
//This is a work around since copy modifies the target, not this.


bf.equals // (other <Buffer>) >> $B  is this buffer is equals to other buffer


bf.subtype//(subtype<Hex>) Sets the subtype option and marks the buffer modified.
doc.buffer.subtype(bson.BSON_BINARY_SUBTYPE_UUID);


bf.toObject//([subtype<Hex>]) >> <Binary>
//Converts this buffer to its Binary type representation.
doc.buffer.toObject(bson.BSON_BINARY_SUBTYPE_USER_DEFINED);

bf.write()// Writes the buffer.



//SubTypes:
bson = require('bson')
bson.BSON_BINARY_SUBTYPE_DEFAULT
bson.BSON_BINARY_SUBTYPE_FUNCTION
bson.BSON_BINARY_SUBTYPE_BYTE_ARRAY
bson.BSON_BINARY_SUBTYPE_UUID
bson.BSON_BINARY_SUBTYPE_MD5
bson.BSON_BINARY_SUBTYPE_USER_DEFINED



