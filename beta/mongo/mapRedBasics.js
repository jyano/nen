cmCl=[{ tx: "hi!", aut: 'jh', vt: 2 }]


//find the total number of vt each aut  earned across  entire comment cl?




op = Cc.mapReduce(

    map = function(){

        //   formats our data as a series of key-value pairs.
        // Our key is the comment author’s name
        // (this makes sense only if this username is unique).
        // Our value is a document containing the number of vt.
        // We generate these key-value pairs by emitting them.
// Our key is author's userame;
// our value, the number of vt for the current comment.
//When we run map-reduce, the map function is applied to each document.
// This results in a collection of key-value pairs.

        emit(this.aut, {vt: this.vt})
    },

    //   reduce function receiving something like this:
//reduce('kbanker', [{vt:2}, {vt:1}, {vt:4}]);
//Given that, it’s easy to come up with a reduce function
// for tallying these vt:
// Add up all the vt for each key.

    reduce= function(k,vs) {
        //reduce function will be invoked with two arguments:
// k and   arr  of vals assoc w  that k


        var sum = 0
        _.e(vs,function(d){
            sum += d.vt})
        return {vt: sum}
    },

    {out:"mr_results"} // output collection name
)




//Notice that running the mapReduce helper >>
statsOnOper={
    result : "mr_results",
    timeMillis : 8,
    counts: {
        input: 6,
        emit:6, output:2
    },
    ok:1
}



// the results of the operation itself are stored in the collection specified,
// here called “mr_results”.
//
//The other stats also prove informative.
// First is the operation time in mss.
// Next are the number of input documents,
// the number of times we called emit
// (this can be more than once per document), and the number of output documents. Finally, we can be assured that the operation has succeeded because “ok” is 1.

   [op.result].find()

a=[
    {_id:"hwaet", v:{vt:21}},
    {_id:"kbanker",v:{vt:13 }}
]


//Output types: merge, reduce, and inline
//
//temporary collections are no more.
// All output now must go into a specifically named collection
// or be returned inline.
//
//    If you specify the collection name only,
// then any existing collection of the same name will be overwritten.
//
//    But there are now two new options that 
// allow you to preserve the existing collection 
// either by merging the new set of results
// or folding them in with the reduce function. 
// Let’s take a closer look at these.

//    merging :
comments.mR(m,r, {out: {merge: "mr_results"}});
// A merge will overwrite any existing keys
// with  the newly-generated keys.

//     reducing  :
comments.mR(m,r, {out: {reduce: "mr_results"}})
//Reducing works like this: whenever a key in the new results
// already exists in the output collection, 
// the reduce function is applied to both keys, 
// and the return value replaces the existing key.

// So suppose earlier map-reduce places the following two   results into   output cl

a=[{ _id: "hwaet", v : { "vt" : 5 } },{ _id: "kbanker", v : { "vt" : 5 } }]

//Now imagine that we run map-reduce again w  more recent data set,
// producing the following results:

 a=[{ _id : "hwaet", v : { "vt" : 1 } },
 { _id : "jones", v : { "vt" : 100 } }]


//If we run a map-reduce merge,
// the final collection  will contain these values:

a= [
    { _id : "hwaet", v : { "vt" : 1 } },
 { _id : "kbanker", v : { "vt" : 5 } },
 { _id : "jones", v : { "vt" : 100 } }]

//With reduce:

a= [
    { _id : "hwaet", v : { "vt" : 6 } },
 { _id : "kbanker", v : { "vt" : 5 } },
 { _id : "jones", v : { "vt" : 100 } }]

//Notice that the values for the “hwaet” key are reduced 
// using the reduce function. 





// In this case, this simply means adding the vt together.
//
//    The final new map-reduce option
//allows you to return the results rather
//than writing them to a collection.
//    Here’s how you use it in JavaScript:

db.comments.mapReduce(map, reduce, {out: {inline: 1}});
