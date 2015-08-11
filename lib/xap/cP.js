//cookie-parser      pop  req.cookies w  ob  keyed by  ck names
// Parse ck header and pop  req.cks with an ob
// keyed by the ck names.
// to enable signed ck sup, pass  secr($S),
// (  assigns q.secr (so other mw can use it) )

module.exports = function(){
 var $cP= $q('cookie-parser')
 $cP.ck=function(){var g=G(arguments);
  return g.O ?ckP.JSONCookie(g.f) : ckP.JSONCookie(g.f)
 }


//cP.JSONCookie(str)
// decode  ck val
// Parse a ck val as JSON ck.
// rets  J-ck(ck val)? parsed Jval: passed val


//cP.JSONCookies(cookies)
// Given an ob,  iterates over the keys and
// call JSONCookie on each val .
//  rets  same ob  passed in.



 $cP.sCk=function() {var g = G(arguments);
  return g.O ? ckP.signedCookie(g.f) : ckP.signedCookie(g.f)
 }

 return $cP
}


$cP.ck('str') //parses JSON cks (can take an ob   ckP.ck({}))
$cP('sc',{ // opl,
// needed for parsing signed cks
//  passed to ck.parse
//  -decode met: decodes ck's val
//ops same as npm ck ops
    //sc: opl str used for  parsing signed cks.
    // (assigns req.secret
// so it other mw can use it)
})

// $a.u($cP())



exCurl=function(){
    $a.g('/', function(q) {
        $l("Ck: ", q.cookies)
    })
// curl command that sends an HTTP request with two cookies
// curl http://127.0.0.1:8080 --cookie "Cho=Kim;Greet=Hello"


}


sign=function(){
    $cP.sCk(str, secr)
//Parses (unsigns) valid signed cks (takes ob)
// if valid signed ck ,
// key   deld from ob,
// added to new returnd ob

    cP.signedCookie(str, sc)
// Parse  cke val  as a signed ck.
// This will return the parsed unsigned value
// if it was  validly signed ck
// o/w rets passed val
    cP.signedCookies(cks, sc)
    // Given an ob, iterates over   keys,
    // checks for signed ck w vald sig. if foundd,
    //  key deleted from  ob, added to  new (returned) ob

    secureCook=function(){
        /*
         how to manage state ? ck : small plain text file, stored by bw

         srv sends  Set-Ck hdr w k/v pair, ops (only re-sends if change)
         Set-Cookie: val(n=v); expires=dt; domain=dm; path=pt; secure
         -all ops opl, cks can have mult ops,  order don't matter

         then, on bw reqs, bw sends hdrr, w ck n/v's
         When ck present,
         ck val sent to the srv on subseq reqs via Ck HT-hdr,
         respck  has val but not the ops
         (ops only for bw, srv don't need them back)


         bw rms ck when  ss over (bw closed)  or when exprDt reached


         two  restrictions:
         -num cks (bw’s ck lm is reached? old cks deld)
         - max  size =  4 KB.  over lm?  truncatd


         ck val is str specd by Set-Ck (!parsing)
         If req has mult cks, they are sepd by ';' and sp
         Cookie: value1; value2; name1=value1
         **subCks overcome ck num lm, increase avail storage
         -allows sing ck to hold mult n-v pairs  in its ck val ( needs parsing )
         name=a=b&c=d&e=f&g=h

         Any number of options can be specified for a single ck,
         and those options may appear in any order.


         expires (= bw shutdown (1 sess))
         when to stop sending ck back to srv (del bw ck)
         - use to stay logged in
         Set-Cookie: name=Nicholas; expires=Sat, 02 May 2009 23:38:25 GMT
         Wdy, DD-Mon-YYYY HH:MM:SS GMT
         -  ck deld if date old


         Domain       send/lm subdms pts that get cks, prevent intercep by other app.
         “www.example.com” mats only exact dm ( “www.example.com”  )
         “.example.com”   mats subs (forums.example.com, blog.example.com).
         domain(=hostName)  //allows subnames to get cks
         which dm(s)  should recieve ck       www.nczonline.net
         domain  op  WIDENs num dms ck goes to
         Set-Cookie: name=Nicholas; domain=nczonline.net
         Yahoo! has sites like name.yahoo.com  (finance.yahoo.com)
         sing ck val can be set for all the sites with:  domain=yahoo.com
         bw  (tail-)compares ( starting at end of str) val/reqHostName
         on mat, sends (corresp) Ck hdr
         -dm must stay on same  host name (invld dm ops ignored)
         domain verified 1st,


         path compared 2nd
         Path  specs what paths on  site to send the ck
         df= “/” -> all reqs get  ck
         “/forums/” -> lm ck to that pt ,
         pt  based on  actual URL the bw uses
         (bf any mod_rewrite or URL mapping)
         path (df=cur URL's pt)
         cks only sent to urls that START w pt
         Set-Cookie: name=Nicholas; path=/blog
         mat: /blog, /blogroll  (* bgg  /blog)







         //security
         bw can  easily change the ck vals !
         if non-SSL conn, cks stored in cleartext and can be salvaged
         from computer
         HTTP does not encrypt the headers
         secure
         (df = ck set on HTTPS-conn? y:n )  just  flag (!val)
         -  dont send clear-txt cks to non-SSL/HTTPS-reqs (cks !sc anyway!)
         Set-Cookie: name=Nicholas; secure
         tells bw (or other http bws) to only send
         the ck over SSL conns so the ck isn’t sent in cleartext.







         change a ck's val? send Set-Cookie header with SAME ck n & dm & pt
         Set-Cookie: name=Nicholas; domain=nczonline.net; path=/blog
         Set-Cookie: name=Greg; domain=nczonline.net; path=/blog    MAKES UPDATE
         Set-Cookie: name=Nicholas; domain=nczonline.net; path=/
         After returning this header,
         there are now two cks with a name of “name”.
         If you were to access a page at www.nczonline.net/blog,
         the following header would be included in the request:
         Cookie: name=Greg; name=Nicholas
         two cks in this hdr named “name”,
         with the more spec path being returned first.
         The ck string is always returned in order from most spec
         domain-path-secure tuple
         to least spec.
         Suppose I’m at www.nczonline.net/blog
         and set:   Set-Cookie: name=Mike
         The returned header now becomes:
         Cookie: name=Mike; name=Greg; name=Nicholas
         Since the ck with the value “Mike” uses the hostname
         (www.nczonline.net) for its domain
         and the full path (/blog) as its path,
         it is more spec than the two others.
         ck identifying info :  name-domain-path-secure
         each ck has its own expDt
         (won’t change    until you manually change )
         change  persistCk -> SSCk ?  del persist ck
         (set exprDt to past, then cr sSCk w same name )
         Set-Cookie: name=Mike; expires=Sat, 03 May 2025 17:44:22 GMT
         Set-Cookie: name=Matt //-> exprDt unchanged
         exprDt
         (time checked on CLIENT,
         cant verify that system/srv time syncd (may cause z))











         document.cookie:  cr, manip, rm cks in js (acts as Set-Ck/Ck hdrs )
         doc.cookie="name=Nicholas; domain=nczonline.net; path=/";
         Set document.cookie
         - sets ck specd in str,
         !all page cks -same access rules
         -next srv req,   js cks and srv cks sent together ( str of mult cks sepd by '; ' )
         name1=Greg; name2=Nicholas
         *Blocking js with HttpOnly
         Set-Cookie: name=Nicholas; HttpOnly
         blocks js from accessing cks via document.cookie (cant set from js, duh)
         hinders XSS (js stealing cks ), not foolproof!





         session cookies:
         (val just simp ID)have same lms as non-sess cks
         real power behind sess's is when ID   used to pull out srv data
         srv data can’t be manipd by user,  can store data bw cant have access to.
         store large data w/o having to send back/forth  each req,



         */
    }
    cookSign=function(){
        /*

         How can you authenticate a user in a web system with a “Shared-Nothing” architecture when you are not sure what webserver you’ll come back to for any given request?

         [Update: James Abley points out via twitter that there is no mention of MD5/HMAC extension attacks here.  I’d love to claim it was deliberate, but was actually because I hadn’t thought of them as connected with this.  I’ve added a postscript to try to address them]

         Let’s assume that you are happy to use cookies.

         Make a request to a protected resource (lets say /article/create), get detected as unauthenticated and therefore unauthorised and get redirected to our login page, /login
         Submit username and password to /login, which checks them against a database of usernames and passwords (using a secure slow one-way hash like bcrypt), if your username and password match then redirect back to the original url
         Request the original url, now with an authentication token, which detects that you are authorised to access the url.
         The user is totally in control of all 3 of these requests, and we cannot keep any state on the server side so we are going to need to provide the user with the relevant data to use for all the conversation. So for example:

         /article/create returns a redirect to /login, with a “return-url” cookie set to “/article/create”
         The user POST’s to /login with username, password and the return-url cookie. If successful set a “username” cookie to the username and redirect to return-url
         The user requests /article/create now with the username cookie.
         Assuming that understanding how to actually authenticate a user on the /login handler is a solved problem, the trick here is to ensure that this user flow is secure. There are two important parts.

         Authentication is not authorisation

         Just because the user has been authenticated, by having a username token, doesn’t mean that they are authorised to access a url. This is a relatively common issue where having a user account is confused with having the access to any given url. You need to ensure that the /article/create controller does a check to ensure that the given username is allowed to access the resource requested. This is normally best done completely serverside, and you should probably look into Role Based Authentication for any reasonably complex system

         Authentication must be secure

         The simplest thing we can do with an authentication cookie is to set a cookie that containers the user-id or username. So once I’ve logged in, we set a username cookie containing “Michael Brunton-Spall”, or uid=1 or something.

         The problem with this is that the user is in total control of this cookie, so I could change my cookie value to “Alan Rusbridger” and the system would then assume that I had been authenticated as the Editor of the Guardian. That’s probably not what we want.

         The question therefore becomes how do I make sure that the value in the cookie hasn’t been tampered with?

         To solve this the simplest way we just need to provide a fingerprint or checksum for the cookie. We could just MD5/SHA1 or use some other signing algorithm and append it to the cookie, so instead of just Michael Brunton-Spall we could set “Michael Brunton-Spall|71c937e3aafbc99ded390aad306ac594e8cf969d”

         To verify this cookie, we split it at the pipe character, SHA1 the first part and compare that SHA1 to the second part. If they match then the first part wasn’t modified at all.

         The problem with this is that a signature is not secure since anyone can generate a new SHA1, so I could change the cookie to “Alan Rusbridger|71c937e3aafbc99ded390aad306ac594e8cf969d” and the cookie wouldn’t be verified, but if I change it to “Alan Rusbridger|f30bd13d1226d47899a3ed31feb33daa77fcff93” then the cookie is valid and again I an impersonate someone else. I can do this because SHA1 is a known algorithm and easy to do: ‘echo “Michael Brunton-Spall” | shasum’ for example.

         So we need a secret, some piece of information that isn’t transmitted to the client but is shared by the servers. The handy thing about signatures is that they are designed to be a one way function. There are potentially thousands of possible inputs that can result in the SHA1 of 71c937e3aafbc99ded390aad306ac594e8cf969d, so it’s not mathmatically possible to take the signature and go backwards to the original string to know that it was “Michael Brunton-Spall” that generated it.

         So how to do we use a secret and verify it? The algorithm works something like this:

         Take the username, append the secret, so “Michael Brunton-Spall” => “Michael Brunton-Spall|Kittens”.
         SHA1 the combined string to get “bf650c31ed39e7dcdd26462eac8b22a99be339df”.
         Send the cookie to the user as username and SHA1, i.e. “Michael Brunton-Spall|bf650c31ed39e7dcdd26462eac8b22a99be339df”.
         To verify we simply repeat the same process,

         Split the cookie at the pipe into username and signature
         Take the username and add the secret
         SHA1 the resultant string and compare against the user supplied signature, if they are a match then the username wasn’t modified.
         This is the basis of a signed cookie, and deals with the simplest of attack vectors in your system. The nice part is that there is nothing server dependent about this system, a cookie set by one server applies to another server, and the cookie can be maintained indefinately between server restarts and it doesn’t need any database access to verify.

         The hard part here is that you need to make sure that each server has the secret key on it, something that can be tricky to do securely. Secondly this only protects against a malicious client attempting to modify their cookie, it does not prevent somebody stealing a cookie and re-using it, or in their place.

         If you want to make this system more secure you could

         Use a different secret per user

         This solves the problem that if I figure out the secret I can simply change my name or userid to somebody elses, sign it and impersonate them. That means an attacker who breaks into one account can only access that one account.

         Use a time signature in the cleartext

         Use “Michael Brunton-Spall|2012-11-08T23:00:00” as the plaintext part of the key. You can then expire the cookie after a set time perdiod and require a server to re-issue the cookie after that.
         This solves the problem of stealing the cookie from a user and then reusing it later. Essentially you are limiting the usefulness of a cloned authentication token to a minumum time period.

         Add a nonce, or one time random number, to each cookie.

         Essentially generate a really random number, say a random 64bit number. Keep track of whether you’ve seen any given random number before and only allow any number to be used once within the time period that the time signature is usable by.
         This prevents what’s called a replay attack, where someone steals your cookie and keeps using it for a short period.

         There are of course drawbacks to these as well.

         The cookie cannot be used to authenticate without access to the user database, so if your database is down your entire system is down.
         The longer you allow a cookie to be valid for, the more misused a cookie could be, but the shorter it is, the more reauthentication needs to be done, and that tends to interupt user flow (especially if the user just spent an hour crafting a blog post and you needed to reauthenticate their http POST request)
         It’s very remotely possible to generate the same large random number twice in short succession, and therefore invalidly refuse someone.
         You need to generate a new nonce on every request which destroys cachability and you need to track used nonces across servers, which implies shared state (which is a pain if you are crossing data centers for example).
         Post Script: What about extension attacks?

         There is a category of attacks that can be done on signatures because they are not designed to be cryptographically secure. Signatures like MD5 and SHA1 are designed to be checksums on content, and there is a drawback to that.

         Extension attacks are able to exploit a weakness in the signature algorithms by using some knowledge about the kind of key you have and the signature sent over the wire. Essentially the problem is that if you are signing “KEY|DATA” => SIGNATURE, then it’s possible to calculate “KEY|DATA|DATA2” => SIGNATURE2 given only DATA and SIGNATURE.

         Our cookie based system is not vulnerable to this form of attack because of two things:

         Firstly we append the secret key at the end, meaning that it’s not possible to add further data to the string and since you’d be modifying the key not the value string.

         Secondly, this sort of attack works only when adding extra data to the string has a valid meaning. If we had put the KEY first, and then appending the name, adding extra data would in most cases not have helped, (and although one could theoretically go from “Michael Brunton” to “Michael Brunton-Spall”, the opportunity for exploit is much reduced).

         HTTP requests are far more vulnerable to length extension because HTTP allows the same query parameter multiple times, so /login?param1=foo&username=bob&signature=SIG can become /login?param1=foo&username=bob&signature=SIG&username=eric and a lot of web libraries, if you ask for the parameter username will return the second parameter without warning (unless you explicitly ask for multiple values).

         Since the signature for API’s is often done by removing the signature parameters, arranging in alphabetical order and signing the string, we’d sign “KEY|param1=foo,username=bob” and the attacker can change it to “KEY|param1=foo,username=bob,username=eric”.

         Thirdly, in order to initialise the signature vector correctly you need to know the length of the secret key.  In our system that’s a secret, but it would be trivial to bruteforce search for the key length so I don’t think that’s much of a defense.

         If you are thinking of implementing signed cookies, the way to ensure that you are protected against extension attacks is to ensure that you cannot add extra data to the end of the string. The simplest way to do this is to sign DATA|KEY, and to verify that data does not contain a pipe character. Secondly, ensure that however you build your data string, it should not support multiple key=value parameters, with later instances overriding the values of the earlier parameters without warning.


         */
    }

}