module.exports= function( ob){var o={}

 o.path = ob.path || ob.p || '/'
 o.domain = ob.domain|| o.d

 o.expires = D(ob.expires)?ob.expires: ob.x  //date ob

 o.maxAge = N(ob.maxAge)?  ob.maxAge: N(ob.a)? ob.a: null  //num secs

 o.secure = D(ob.secure)? ob.secure: D(ob.s)? !!ob.s: false


 o.httpOnly = D(ob.httpOnly)? ob.httpOnly:
     D(ob.h)? !! ob.h: false //if true, bw cannot access ck's!




 return o

}


//normal ck df's
// { path: '/', httpOnly: true, secure: false, maxAge: null }.