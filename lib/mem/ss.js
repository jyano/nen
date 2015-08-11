
module.exports=function($ss, ob){
    ob = ob||{}
    ob= superSS(ob)
    return $ss( ob )
}  //$l('ss ob:')  //console.dir(ob)



function superSS(ob){
    var o={}

    o.secret = ob.secret || ob._  || 'abz' // required if not passed to cP()
    o.store = ob.store || ob.st || ob.s
    o.cookie = ob.cookie || ob.ck || ob.c
    o.unset = D(ob.unset)? ob.unset: D(ob.u)? ob.u: 'keep'
    o.resave = D(ob.resave)?ob.resave: D(ob.rs)? !!ob.rs: true
    o.saveUninitialized = D(ob.saveUninitialized )? ob.saveUninitialized: D(ob.sU)? !!ob.sU : true
    o.maxAge = N(ob.maxAge)? ob.maxAge : ob.a
    o.name = ob.name || ob.n //='connect.sid': what to set the  ss ID ck in res/req .. can namepace mult apps on (hostname + port)
    o.key = ob.key || ob.k  // 	'app.sess'
    o.rolling  =D(ob.rolling)?ob.rolling: D(ob.r)? !! ob.r:false //rolling=f:Force a ck to be set on every res. (resets  expirDt)
    o.genid = ob.genid || ob.i
    o.proxy = ob.proxy || ob.p

    return o
}




later=function(){


//secure ( for secure cks )  recommended to use it ( = true),but needs https-enabled site,
// If  node behind proxy and secure=true, set $e "trust proxy" ?


    ssOpDocs=function(){

// Fn to call to gen   new ss ID. // Provide cb that rets a str that will be used as a ss ID.
//   fn   given req as 1st g, to use req  val when geng the ID.
//    df val  is  fn which uses the uid2 lib  to gene  IDs.    do gen uniq  IDs avoid ss conflict



//  unset='keep': Control the result of unsetting req.ss
// (through del, setting to null,..)

//=f: trustreverse proxy?df= undefined (Uses the "trust proxy" setting from express):
// Trust the reverse proxy when setting secure cks(via the "X-Forwarded-Proto" header).
//    true The "X-Forwarded-Proto" header will be used.  false All headers are ignored , only   direct TLS/SSL conn  considered secure



// saveUninitialized(no df - required!), SET TO FALSE// svUninit: false, // don't create ss until something stored
// Force-saves "uninitialized"  (new, but !modified) ss's  (to store)
//   false useful for -implg login ss's,  -reducing server storage usage, - complying with laws that req permission before setting a ck.
//  -race conds (client makes mult parallel reqs w/o  ss)


//resave
// resv: false,//resave SET TO FALSE//df deprecated //usually u want false//don't save ss if unmodified
// Forces  ss to be saved back to ss store         // (even if ss !modified during the req)
//   may be necessary,         // but  can create race conds// (client makes two parallel reqs         // to your server and changes made to the ss in one req may get overwritten// when the other req ends, even if it made no changes)
//  store   implements  touch met? need store,   can safely set resave: false.
//  no? and your store sets  expir date on stored sss?  ->you need resave: true.
//saveUnitialized

// store(=new MemoryStore inst): ss store instance
//destroy      ss to be destroyd/deld at res-end
//keep     keeps ss in the store  but mods made during  req are ignored (!svd)
//cookie


//  ck (ck dfs apply ) : ssCk settings  df = {   path: '/', httpOnly: true, secure: false, maxAge: null}
//  Each ss has  uniq ck ob with it. // allows you to alter  ss ck per visitor.// ex:  can set q.ss.ck.expr to false to enable the ck to remain for only the duration of the user-agent

    }
//  i: function (q) {   return genUUID()  }// use UUIDs for ss IDs
//  $a.s('trust proxy', 1) // trust first proxy

    edu = function () {

        //For using secure cks in production,
// but allowing for testing in development,
// ex:  enabling this setup based on NODE_ENV in express:
        if ($a.g('env') === 'production') {
            $a.s('trust proxy', 1)
            op.ck.s = 1  // trust first proxy, serve secure cks

        }
//  use  q.ss to g/s data,
// j-serialized by store , nested obs ok


        //   req.ss
//   jsOb  only works as a proxy for those values.
//  To delete a ss var  just del  prop  from the q.ss
//  del q.ss.n           del q.ss['primary skill'];

    }
    depr = function () {

        function ssPrepare(ob) {
            ob = ssOpsOb(ob)
            if (ob.c) {
                ob.cookie = CookieOpsOb(ob.c)
            }
            if (ob.s) {
                ob.store = new $mgSt(mgStoreOpsOb(ob.s))
            }
            return ob
        }


//dep///
//dep this too!!!
        $a.ss = function (ob) {
            var $a = this
            ob = ssPrepare(ob)
            $a.u($ss(ob))
            return $a
        }
// $a.uSS=function(ob){ $a.u( $ss(ob) ) }
//$a.uESS=function(ob){$a.u($e.ss(ob)) }
///dep///
    }
    oldWayCkBasedSsDontUseIt = function () {
// a ss's API can be impld w cks bc  cks can store data in bw
// $e comes with a built-in mw called ckSs (which does that)
        //  Load the ckP mw with a secret,
        // followed by the ckSs mw,
        // bf rtr mw.
        // ckSs  depends on  ckP mw bc it stores ss data w a ck
        //    ckP mw should load w  a secret,
        // bc ckSs  needs to gen  a signed HttpOnly ck for storing  ss data.
        // if  ckP secret !specd,  must  ckSss spec secret op
//    ex: enable ss's in $e with the ckSs mw
        $a.u($e.ckP('S3CRE7'));
        $a.u($e.ckSs());
        $a.u($a.rtr);
        //opl ops:
        // key=connect.sess:	Name of the ck. Defaults to
        //  secret	Secret for signing the ss. required if
        // ckP
        //  is not initialized with one.
        //  ck	ssCk settings.
        // Regular ck defaults apply.
        //   proxy	To trust the reverse proxy or not.
        // Defaults to false.
        //  ex: initializing ckSs ( w  ops )
        $a.u($e.ckSs({key: 'app.sess', secret: 'SUPERsekret'}))
        //Once  ss API is enabled,
        // ss vars can be accessed on ss ob  on the qOb – req.ss.
        // ck-based ss's work great for simple ss data.
        // However, it doesn’t work well with large, complicated, and sensitive data
        // because the ss data is vs to  user,
        // there is a limit in the size of cks a bw can store,
        // and mult large size cks can affect the performance
    }

}