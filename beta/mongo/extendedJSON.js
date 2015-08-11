//MongoDB  extensions to the JSON format:

binary=function(){


    //  Binary  data_binary Strict Mode	 	mongo Shell Mode

//{"$binary": "<bindata>", "$type": "<t>" }
// BinData (<t>, <bindata>)

// <bindata> is base64 rep  of  binary str
// <t> is  rep of  single byte indicating   data type.
// In Strict mode it is a hexadecimal string,
// and in Shell mode it is   int
// See the extended bson doc  // http://bsonspec.org/spec.html

}



date=function(){
//Date //data_date //Strict Mode	 	mongo Shell Mode
//{ "$date": "<date>" } //new Date ( <date> )
//In Strict mode, <date> is an ISO-8601 date format
// with a mandatory time zone field
// YYYY-MM-DDTHH:mm:ss.mmm<+/-Offset>

//The MongoDB JSON parser currently
// does not support loading ISO-8601
// strings representing dates
// prior to the Unix epoch.
// When formatting pre-epoch dates and dates past what your system’s
// time_t type can hold,  following fm used:

    { $date: { $numberLong : dateAsMs} }

//In Shell mode, <date> is   JSON rep  of   64-bit signed int   giving num  ms since epoch UTC.
//    Timestamp //data_timestamp //Strict Mode	 	mongo Shell Mode
o= {
     $timestamp: {
         t:t,// JSON rep  of   32-bit unsigned int for seconds since epoch
         i:i// 32-bit unsigned int  for   increment
     }
}




}


re=function(){
// Regular Expression
//data_regex
//Strict Mode	 	mongo Shell Mode
//{ "$regex": "<sRegex>", "$options": "<sOptions>" }
///<jRegex>/<jOptions>
//<sRegex> is a string of valid JSON characters.
//<jRegex> is a string that may contain valid JSON characters
// and unescaped double quote (") characters, but may not contain unescaped forward slash (/) characters.
//    <sOptions> is a string containing the regex options represented by the letters of the alphabet.
//<jOptions> is a string that may contain only the characters
// ‘g’, ‘i’, ‘m’ and ‘s’

// Bc JS and mongo Shell reps support a limited range of ops,
// any nonconforming ops will be dropped
// when converting to this rep


}
oid=function(){
    // OID  data_oid
    // Strict Mode	mg Shell Model
    {  $oid : id }
    ObjectId( id ) //  24-char  hexdec  str

}

dbRef=function(){
    // DB Reference  data_ref  Strict Mode	 	mongo Shell Mode
 o={
     $ref:name, //  str  of valid JSON chars
     $id:id //  any valid extended JSON type.
 }

    DBRef( name ,  id )



}


undef=function(){
//Undefined Type //data_undefined
//Strict Mode	 	mongo Shell Mode
//{ "$undefined": true }
//undefined:rep for  JS/BSON undefined type. -cant use undefined in qu  docs
    // Consider the following doc  inserted into   people cl
    //    db.people.insert( { n : "Sally", age : undefined } )
    //The following queries return an error:

}

db.people.f( { age : undefined } )
db.people.f( { age : { $gte : undefined } } )
//However, you can query for undefined values using $type, as in:
db.people.f({
    age : {$type:6}
})



//This query rets all docs where age  undefined
minMax=function(){
//data_minkey  //Strict Mode	 	mongo Shell Mode
    //The rep of the MinKey BSON data type that compares lower than all other types.
    // MaxKey//data_maxkey //Strict Mode	 	mongo Shell Mode
// rep  of the MaxKey BSON data type that compares   higher than all other types.
    {$minKey:1}
    {$maxKey:1}
}

NumberLong=function(){



//  data_numberlong Strict Mode	 	mongo Shell Mode

    { $numberLong: '123' }//  64 bit signed int
    NumberLong( '123' )
    // You must include quotation marks or it will be interpreted
    // as a floating point number,
    // resulting in a loss of accuracy

//    For example,
// the following commands insert 9223372036854775807
// as a NumberLong with and
// w/o quotation marks around the integer value:
    db.json.insert({
        longQuoted : NumberLong("9223372036854775807")
    })
    db.json.insert({
        longUnQuoted : NumberLong(9223372036854775807)
    })

//When you retrieve the documents,
// the value of longUnquoted has changed,
// while longQuoted retains its accuracy:
    db.json.f()
//{ "_id" : ObjectId("54ee1f2d33335326d70987df"), "longQuoted" : NumberLong("9223372036854775807") }
//{ "_id" : ObjectId("54ee1f7433335326d70987e0"), "longUnquoted" : NumberLong("-9223372036854775808") }
}


/*

 Double	1
 String	2
 Object	3
 Array	4

 Binary data	5
            Undefined	6	Deprecated.
 Object id	7
 Boolean	8
 Date	9
 Null	10
 Regular Expression	11
 JavaScript	13
 Symbol	14
 JavaScript (with scope)	15
 32-bit integer	16
 Timestamp	17
 64-bit integer	18
 Min key	255	Query with -1.
 Max key	127

 */