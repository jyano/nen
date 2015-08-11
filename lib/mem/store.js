function storeOb(ob){var o={}
    //u
    o.url = ob.url || ob.u
    //t
    o.ttl = ob.ttl || ob.t
    //aRI
    o.autoRemoveInterval = D(ob.autoRemoveInterval)? ob.autoRemoveInterval: ob.aRI
    //aRm
    o.autoRemove = ob.autoRemove || ob.aRm
    //aR
    o.autoReconnect = D(ob.autoReconnect)? ob.autoReconnect:
        D(ob.aR)? !!ob.aR:false
    //cl
    o.collection=ob.collection||ob.cl
    //tA
    o.touchAfter = ob.touchAfter || ob.tA //   24 * 3600 // time period in seconds
    o.mongooseConnection = ob.mongooseConnection? ob.mongooseConnection:  ob.mg? ob.mg.connection: ob.cn
    o.mongoOptions = ob.mongoOptions || ob.o
    return o
}

function superStore($st){
    $st.d= $st.destroy
    // (sid, cb) used to destroy/delete a ss from the $st given a ss ID (sid).  (post-destroy, cb should be called as cb(z) )
    $st.g = $st.get//(sid, cb) //   gets a ss from   $st given a ss ID (sid)   cb(z, ss).
    //  The ss arg  should be a ss if found, o/w null|undefined if !found (& no z)
    // A special case is made when z.code === 'ENOENT' to act like cb(null, null).
    $st.s = $st.set//(sid, ss, cb)// upserts a ss into   $st
    // given a ss ID (sid) and ss (ss) ob.   cb(z) <- ss   set in the $st.
    $st.t= $st.touch//(sid, ss, cb)//   used to "touch"
// a given ss given a ss ID (sid)
// and
// ss (ss) object.
// The cb should be called as cb(error) once the ss has been touched.
    //   primarily used when the $st will auto  del  idle ss's
    // and
    // this met is used to signal
    // to the $st
    // the given ss is active,
    // potentially resetting the idle timer // ex : $st page views for user :
//  optl mets are ones this mu does not call at all,
// but helps present uniform $sts to users.
    $st.a = $st.all
    //(cb)//  gets all ss's in  $st (as arr)  cb(z, [ss]).
    $st.cl = $st.clear//(cb)//?      deletes all sss from the $st.  cb(z) <- $st cleared.
    $st.l = $st.length//(cb) //?  counts  ss's in  $st.   cb(z, len).
//  Recommended mets are ones  that this mu will call on the $st if avail
    return $st
}




module.exports=function($ss, ob){

    var g=G(arguments),  $St, $st

    //ob=g.S_? {s: g.f, st: g.s}:ob||{}

    $St = require('connect-mongo')($ss)

    ob=storeOb( ob)

    $st = new $St( ob )  //  return pam? mSt(pam) : mSt
    // superStore( $st )

    $st= superStore($st)

    return  $st
}





//(df=sessions)
//if(ob.m){ob.fallbackMemory  =ob.m} //to memStore
//stringify:true->   ss's JSON.stringify-d  bf setting ,  JSON.parsed when gotten,  useful if  using non MG-supported types
// stringify: true, //  good if using tys MG don't support // If true, cn-mg serializes ss's w J.stringify bf setting them, //  deserializes them (w  J.parse) when getting them. (opl, df: true).
// serialize Custom hook for serializing ss's to MG,  helps modify  ss bf writing it out
// unserialize   Custom hook for unserializing ss's from MG ,helps with support diff tys  serializations ( obs, JSON strings),or need to modify ss bf using  it in your $a.
// hash (opl)   an object, which dets whether hash the sid in mg, since       !undefined, means sid   hashed
// hash.salt Salt will be used to hash the sid  in g, df salt is "connect-mongo"
// hash.algorithm Hash algorithm, default algorithm   is "sha1"
//collection='sessions'
// host: '127.0.0.1',     // port: 27017,
// auto_reconnect: false, // ssl: false,
//  defaultExpirationTime:  1000 * 60 * 60 * 24 * 14
//fallbackMemory:  want to fallback (use?) MemoryStore? (in dvlpm?)

// Cr new conn from MG-cnStr (best way to cf new conn)
//  u: 'mgdb://u1:fb@lh/app?authSre=admins&w=1'
//  aRC: 1,  db: mg,
//   t: 14 * 24 * 60 * 60 // = 14 days. Df
// o: advOp,
// When ssCk has exprtn-dt, cn-mg uses it; o/w, new one crd (using ttl op)
// -exprDt refreshed on each req
// cn-mg uses MG TTL to have mongod auRm expired ss's.
// cn-mg creates a TTL index for you at startup.  -NEED admin permiss
//   change this? Set MG to df mode  (clean expired ss's)
// avoid this mode in +concurr environm; set index yourself, once!
// aR: true,// 'int', // df='native' // aR: disabled: Dsbl exprd ss's cleaning..
// in prod (or you manage the TTL index elsewhere)
//  aRI: 10,//(mins)=df  cg-mg rms exprd ss's, at int
// If don't want mg to resave all the ss  each pg refresh,
// 'lazy upd' the ss (by limiting a period of time )
//  touchAfter: 24 * 3600 ,//secs (daily)//bc of this setting..
// num reqs dont matter ( except those that change something on the ss data)
// db: 'myapp', host: '127.0.0.1', port: 3355