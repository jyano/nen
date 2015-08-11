$mROp=function(ob){ob=ob||{}; var o={}
    //query
    if(O(ob.q)){o.query = ob.q} // qu  filter ob
    //sort
    if(O(ob.so)){o.sort = ob.so}   //  so ip obs using this key
    //limit?
    if(N(ob.lm)){o.limit = ob.so}//   max num  docs
    //keeptemp
    if(D(ob.kp)){o.keeptemp = !!ob.kt}//=F keep temp data
    // finalize(Fn)
    if(F(ob.f)){o.finalize= ob.f}
    //scope
    if(O(ob.sc)){o.scope = ob.sc} // scope vars exposed to m/rd/finalize  during exec
    // jsMode=F
    if(D(ob.j)){o. jsMode = !!ob.j}//   make  exec  stay in JS?
    // verbose=F
    if(D(ob.v)){o.verbose = !!ob.v}  // provide stats on job exec  time.
    // readPreference(S)
    if(S(ob.r)){o.readPreference=ob.r}
    // out* = {inline:1}
    if(O(ob.ou)){
        o.out = $outOp( ob.ou )
    }// sets OP target for  map reduce job.
    o.mapReduce = ob.mR //name of source cl
    o.map = ob.m
    o.reduce = ob.r
    o.out = $outOp(ob.o)
    return o


}

$outOp=function(){

    $act=function(act,ob){
        par={rp:'replace', m:'merge', r:'reduce'}
        var o={}
        _.e(par, function(v,k){
            if( act==k ){

            }
        })
        o[act] = act
        return
    }

    ob = ob || {};
    var o = {}
    o.i = ob.inline
    o.rp= ob.replace
    o.rd = ob.reduce
    o.m = ob.merge
    return o
}




//mapReduce  M.mR(op, [cb])
// If options.out is set to replace, merge, or reduce,
//    Model inst  retd that can be used         for further querying.
//  this md execs qus  w lean op//
//meaning:
//    -only  js ob  retd
//-!(getters, setters.. applied)






$sStt=function(ob){ob=ob||{}
    var o ={}
    o.pT = ob.processtime
    return o
}




Ur.mR({m:function(){emit(this.n,1)}, r:function(k,vs){return vs.length}, o: {rp:'crdClNForRes'},  v:1},
    function (z, md, stats) {$l('took %d ms', stats.processtime); md.f().w('v').gt(10).$(_lD) })
pr = Ur.mR({})//// a promise is returned so you may instead write
pr.th(function (md, stats) {$l('map reduce took %d ms', stats.processtime); return md.f().w('v').gt(10).$() })
    .th(function (dcs) {$l(dcs)}).th(null, handleError).e()


out=function() {

    /*
     out Options


     out: <clName>
     Output to a cl with an Action
     This option is only available when passing
     a cl that already exists to out.
     out: { <action>: <clName>  [, db: <dbName>]  [, sharded: <boolean> ]  [, nonAtomic: <boolean> ] }
     <action>: Specify one of the following actions:
     db:
     Optional. The name of the database that you want the map-reduce
     operation to write its output. By default this will be the
     same database as the input cl.
     sharded:
     Optional. If true and you have enabled sharding on output database,
     the map-reduce operation will shard the output cl using the
     _id field as the shard key.
     nonAtomic:
     Optional. Specify output operation as non-atomic.
     This applies only to the merge and reduce output modes,
     which may take minutes to execute.
     By default nonAtomic is false, and the map-reduce operation
     locks the database during post-processing.
     If nonAtomic is true, the post-processing step prevents MongoDB
     from locking the database: during this time, other clients will
     be able to read intermediate states of the output cl.
     Output Inline
     Perform the map-reduce operation in memory and return the result.
     This option is the only available option for out on secondary
     members of replica sets.
     out: { inline: 1 }
     The result must fit within the maximum size of a BSON document.
     */

//    * out op:
//
//    {inline:1} the results are returned in an array
//    {replace: 'collectionName'} add the results to collectionName: the results replace the collection
//    {reduce: 'collectionName'} add the results to collectionName: if dups are detected, uses the reducer / finalize functions
//    {merge: 'collectionName'} add the results to collectionName: if dups exist the new docs overwrite the old
//    If op.out is set to replace, merge, or reduce, a Model instance is returned that can be used for further querying. Queries run against this model are all executed with the lean option; meaning only the js object is returned and no Mongoose magic is applied (getters, setters, etc).
//


//rp:'replace',
    // Replace the contents of the <clName>
    // if the cl with the <clName> exists. {replace: 'clN'} //  add the res to clN:  the res replace the cl


    //  m:'merge',
    // Merge the new result with
    // the existing result if the output cl already exists.
    // If an existing document has the same key
    // as the new result, overwrite that existing document.  {merge: 'clN'}  // add the res to clN: if dups exist the new docs overwrite old


    // r:'reduce'
//Merge the new result with the existing result
// if the output cl already exists.
// If an existing document has the same key as the new result,
// apply the reduce function to both the new and the
// existing documents and overwrite the
// existing document with the result. {reduce: 'clN'} // add the res to clN:  if dups are detected,   uses the reducer / finalize functions


// {inline:1}  // res retd in  arr


}