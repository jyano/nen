setup=function(){


    PP = $q('passport')
    PP.sU = PP.serializeUser
    PP.dsU = PP.deserializeUser
    PP.i = PP.initialize
    PP.u = PP.use
    PP.az = PP.authenticate

    LocalStrategy = $q('passport-local').Strategy

    $lStr = function (ob) { return new LocalStrategy(ob)}

    PP.lStr = function (ob) { this.u( $lStr(ob) ) }

    PP.lc = function (op){
        if (op.s) {op.successRedirect = op.s}
        if (op.f) {op.failureRedirect = op.f}
        if (D(op.fF)) {op.failureFlash = op.fF ? true : false }
        if (D(op.sF)) {op.successFlash = op.sF ? true : false }
        this.az('local', op)
    }

    PP.bs = function (op) {
        if (D(op.ss)) {op.session = op.s ? true : false}
        this.az('basic', op)}



    $li = function (cb) {$a.po('/li', cb)}

    $liLc = function (ob) {$li(PP.lc(ob))}


    $dn = $done = function (ms) {
        return {message: ms}
    }


    // PP is auth. mw for Node.  to auth. reqs.
    // auth. can take a variety of forms:
    // users log in by  un/ pw,
    // sign-on using an OAuth provider  (Facebook  Twitter)
    //  Services that  expose an API often require token-based reds to protect access.
//  Auth  strats  packaged as indiv  mu's
// ( Apps can choose which strats to employ, w/o creating unnecessary deps)
}




 // to auth.. jsut call  PP.az()
// and specg which strategy to employ. auth()'s fn  is mw
$liLc({ s:'/',  f:'/i'})
 $liLc(function(q,p) {
    // If this fn  called, auth was success 
    //  If auth. succeeds, 
    // the next handler will be invoked and
    //  q.user property will be set to the auth.d user.
    p.rd('/users/' + q.user.un)  // `q.user` contains the authd user
 })
 // if auth. fails, PP sends  401 Unauthorized sts ( additional route handlers !invoked)
 // Strats must be configured prior to using them in a route.
//rd  is commonly issued after authenticating a req
$liLc({
    s: '/',
    //In this case, the rd ops override the df bhvr
// if auth  succ, user will be rdd to   home page.
    f: '/login'
// else, the user will be rdd back to  login page for another attempt.
})







flashMs=function() {

    //Rds  often combined w flash messages to display status info  to   user.
// Using flash messages requires  connect-flash mw
    $liLc({
        s: '/', f: '/li',
        fF: 1
//Setting the failureFlash option to true ->
        // PP will flash  zMs using   ms of strat's verify cb, if any
// (which can make   most accur  determin   why auth. failed )
        //fF: 'Invalid un or pw.'  // flash message can also be spec
    })
    $liLc({
        sF: 'Welcome!'
// successFlash option  avail, flashes a succ  ms on auth  succ
    })




    $liLc({ s: '/', f: '/li', fF: true })
//Setting the failureFlash = true 
//instructs PP to flash zMs using   message op 
// set by the verify cb above.   -helpful when prompting the user to try again.


}

/*
Disable Sessions

After successful auth , PP will establish a persistent login session. 
This is useful for the common scenario of users accessing a webApp via a bw.
 
 but sometimes
   ss spt !necessary. ex: API servers typically
  require creds to be supplied with each req
   When this is the case, ss sppt
   can be safely disabled by setting ss = false.
*/
 
$a.g('/api/users/me',  PP.bs({ ss: 0 }),
  function(q,p) {    p.j({ id: q.user.id, un: q.user.un })  })
  
  
//Custom Callback

 // If the built-in ops   !sufficient for handling   auth  req   
//  provide  cust cb to  handle succ/fail.

$a.g('/li', function(q, p, n) {
    
    cust =  function(z, u, info) {
        if (!u) { return p.rd('/login'); }
        q.logIn(u, function() {return p.rd('/users/' + u.un)  })
    }
    
    PP.az('local', cust)(q,p,n)
    
})

   /*
In ex: az() is called from within the route handler,  (!used as route mw) 
  -gives cb access to  q/p obs through closure.
If auth. failed, user set   false.
 If an exception, z   set.  opl info arg   passed, 
  containing additional details provided by strats's verify cb.

The cb can use the args supplied to handle auth. result as desired.
 Note that when using a custom cb,   becomes   app's responsb to establish
  a ss (by calling q.login()) and send resp 

 
Three pieces need to be configured to use PP for auth.:Auth strats     App  mw      Sessions (opl)
PP uses  'strats; to auth  reqs (range from verifying un/pw,  delegated auth ( OAuth )  federated auth ( using OpenID ) )
Before asking PP to auth. a req,  must cf your app's strat(s)  
Strats  and their cf, supplied via the use()   
 
 
*/
 

PP.u($lStr(  //ex:  use LocalStrategy for un/pw auth..
        function(un, pw, d) { 
            
            Ur.f1({ un: un }, function (z, u) {

                if (!u) {return d(null, false, $dn('Incorrect un')) }
                if (!u.validPassword(pw)) {
                    return d(null, false, $dn('incorr pw'))
                }
                
                return d(null, u) 
            })  
        })
)
 


 /*
 Strats require    ' verify cb ' 
  verify cbs  find the user that possesses a set of creds.

When PP auths a req, it parses the creds contained in   req  

 then invokes   verify cb  with those creds as args ( in this case un and pw )
 If   creds  valid,   verify cb invokes done to supply PP w  authd user  
return done(null, user) 

If creds !valid (bad pw), 
done should be invoked with false (instead of a user)
indicating auth failure 
return done(null, false)

 additional info message can be supplied 
 to indicate  failure   reason
 useful for displaying  flash message prompting the user to try again.

return done(null, false, { message: 'Incorrect pw.' });
Finally, if an exception occurred while verifying the creds (ex: db !avail),
 done should be invoked with z (Node style)
return done(z)
 
 
 it is important to distinguish the two failure cases that can occur.
 The latter is a server exception,
  in which err is set to a non-null value. Authentication failures are natural conditions,
  in which the server is operating normally.
   Ensure that err remains null, 
   and use the final argument to pass additional details.

By delegating in this manner,
 the verify cb keeps PP database agnostic.
 Apps are free to choose how user info    stored, 
 w/o any assumptions imposed by the auth. layer.


*/
// Middleware  In  $e app

//PP.i() mw is required to initialize PP.
 //If your $app   uses persistent login sessions,
 // PP.ss() mw must also be used.
  
  $a.u($e.static('public'));
  $a.u($e.cP());
  $a.u($e.bP());
  $a.u($e.session({ secret: 'keyboard cat' }));
  $a.u(PP.ie());
  $a.u(PP.ss()) 
  $a.u($a.router) 
 /*
 
  enabling ss support  opl but recommended for most apps. 
If enabled,
 be sure to use $e.ss()  bfPP.session()
   to  ensure   login ss  restored in the correct order.




Sessions
In  typical web app, 
creds used to auth. a user will
 only be transmitted during  login req. 
 
on auth succ, ss established/maintained via bw ck  
 subseq  reqs  will  contain   the uniq  ck 
 that identifies the ss (instead of creds)
  
 PP serializes/deserializes user insts to/from ss to spt login ss's
*/
PP.sU(function(user, done) {done(null, user.id);});
PP.dsU(function(id, done) {  Ur.id(id, function(z, u) {   done(z, u);  });});

/*
ex:  only the user ID  serialized to the ss, keeping the small amount   data stored 
 When subseq  reqs  received, this ID is used to find the user, which will be restored to  q.user.
 serialization/deserialization logic is supplied by app
 allowing the app to choose db  w/o imposition by the auth. layer.

*/
// Spt for  username/pw  provided by t  PP-local mu
 

PP.lStr( function(un, pw, d) { Ur.f1({un:un}, function(z, u) {
    if(!u){return d(null, false,  $dn('bad un') )}
    if(!u.validPassword(pw)) {return d(null, false, $dn('bad pw'))}
    return d(null, u) 
    
})})

 
 //The verify cb for local auth. accepts un/pw args, submitted to app via a login form.
// user   enters   creds and log in.
/*<f act="/login" met="post">
    <d>    <lb>Urname:</>     <ip name="un"/>    </d>
    <d>   <lb>Password:</>    <ip type="pw" name="pw"/>     </d>
    <d>    <ip type="submit" value="Log In"/>    </d>
</f> */
// li form  POST-submitted   to  server
 // Using az() w  local strat    handles  login reqs
 

//LocalStrategy expects to find creds in   pams named username and password 
// (can change df's in ops)
PP.u( $lStr({unField: 'em',  pwField: 'pw' }, function(un, pw, done) {}))









 