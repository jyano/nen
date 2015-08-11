// cookie-session
 
//Simple cookie-based session middleware.

//Semantics

//This module provides "guest" sessions,
  //  meaning any visitor will have a session,
  // authenticated or not.
  // If a session is new a Set-Cookie will be produced
  // regardless of populating the session.

   // Install

 
ckSs   =$q('cookie-session')
ckSs(ops)

//Create a new cookie session middleware with the provided options.
 

//Cookie session accepts these properties in the options object.

   // name: name of the cookie to set, defaults to express:sess.

   // keys:list of keys to use to sign & verify cookie values. Set cookies are always signed with keys[0], while the other keys are valid for verification, allowing for key rotation.

   // secret:string which will be used as single key if keys is not provided.

 //   Cookie Other options are passed to cookies.get() and cookies.set() 
//allowing you to control security, domain, path, and signing among other settings.

//    The options can also contain  
    
maxAge: a number representing the milliseconds from Date.now() for expiry
    expires: a Date object indicating the cookie's expiration date (expires at the end of session by default).
path: a string indicating the path of the cookie (/ by default).
domain: a string indicating the domain of the cookie (no default).
secure: a boolean indicating whether the cookie is only to be sent over HTTPS (false by default for HTTP, true by default for HTTPS).
secureProxy: a boolean indicating whether the cookie is only to be sent over HTTPS (use this if you handle SSL not in your node process).
httpOnly: a boolean indicating whether the cookie is only to be sent over HTTP(S), and not made available to client JavaScript (true by default).
signed: a boolean indicating whether the cookie is to be signed (false by default). If this is true, another cookie of the same name with the .sig suffix appended will also be sent, with a 27-byte url-safe base64 SHA1 value representing the hash of cookie-name=cookie-value against the first Keygrip key. This signature key is used to detect tampering the next time a cookie is received.
    overwrite: a boolean indicating whether to overwrite previously set cookies of the same name (true by default). If this is true, all cookies set during the same request with the same name (regardless of path or domain) are filtered out of the Set-Cookie header when setting this cookie.

    
    //q.session    Represents the session for the given request.

 //   .isNew   Is true if the session is new.

   // .populated

//Determine if the session has been populated with data or is empty.

    q.sessionOptions

//Represents the session options for the current request. These options are a shallow clone of what was provided at middleware construction and can be altered to change cookie setting behavior on a per-request basis.

//    Destroying a session
//To destroy a session simply set it to null:

q.ss = null
//Example

Simple view counter example

  ckSs = $q('cookie-session')
  e = $q('express'); a = e()

a.s('trust proxy', 1) // trust first proxy


a.u(
    ckSs({
        name: 'session',
        keys: ['key1', 'key2']
    })
)



a.u(function (q, p, n) {   var n = q.ss.views || 0;  q.ss.views = n++; p.end(n + ' views')  })

a.listen(3000)

//Per-user sticky max age

 ckSs = $q('cookie-session')
 e  = $q('express'); a = e()

a.s('trust proxy', 1) // trust first proxy

a.u(ckSs({name: 'session',  keys: ['key1', 'key2'] }))

// This allows you to set req.session.maxAge to let certain sessions // have a different value than the default.
a.u(function (q, p, n) { q.ssOps.maxAge = q.ss.maxAge || q.ssOps.maxAge })
 
