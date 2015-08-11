module.exports= function(q,p,n){req(q); res(p); n()


}
function req(q){


    data()
    url()
    if (q.session) {q.s = q.ss = sess( q.session )} // q.c= q.ck= q.cookies; // q.sC= q.signedCookies

    return q
    function data(){
        q.a = q.app;
        q.p = q.params;
        q.q = q.query;
        q.b = q.body;
    }
    function url(){
        q.u = q.url
        q.bU = q.baseUrl;
        q.oU = q.originalUrl;
        q.h = q.hn = q.hostname //q.rt = q.route  //q.rt.pt = q.rt.path  // q.pt = q.rt.pt  // q.pt = q.path;
        q.pc = q.protocol  //q.s= q.secure;  q.fr= q.fresh; q.st= q.stale;
        // q.sd= q.subdomains; q.x= q.xhr  // q.ip= q.ip  // q.ips= q.ips

    }
    function sess(s){
        s.s = s.save
        s.rg = s.regenerate    // new SID and Session inst initd at q.ss.
        s.rl = s.reload // ss rl updd in cb
        s.d = s.destroy // cannot access session in cb
        // Destroys  ss, removing q.ss  (re-gens next req)
        //destroy session!!!
//  ssStor-based ss's has  met  called destroy(),
//     -used for    destroying ss's from the ssStor
//       –  proper way of tearing down a ssStor-based ss.
//     q.ss.destroy(); -accepts an opl cb
//        ( exd af  ss cleared from  store )
// q.ss.destroy(function () {  p.s('ss deleted') })
        s.t = s.touch  // Upds  maxAge prop   (ss mw usually does this).
        s.c= s.ck= s.cookie // s.a= s.maxAge
        s.mA = function (a) {this.c.maxAge = a}
        s.exp = function (a) {this.c.expires = new Date(Date.now() + a)}
        return s}
}
function res(p){
    p.s = p.send
    p.e = p.end
    header()
    template()
    url()
    ck()
    js()
    write()
    status()
    file()
    beta()
    return p
    function header(){
        p.h = p.g = p.hd = function (k,v) {
            var p = this
            //get/set header
            if (U(v)){
                return p.get(k)}
            p.set(k, v)
            return p
        }
        p.cT=function(cT){var p=this

            p.h('Content-Type',cT)
            return p
        }
    }
    function template(){
        p.l = p.locals;
        p.r = p.render


        p.fm = p.format;
    }
    function url(){

        p.rd = function (u) {
            var p = this;
            u = S(u) ? u : 'back';
            p.redirect(u)
        }
        p.lc = p.location;
        p.lk = p.links

    }
    function ck(){

        p.xC = p.clearCookie //
        p.c = p.ck = p.cookie;// p.a = p.app;   // p.hdS = p.headersSent
    }
    function js(){
    p.j = p.json;
    p.jp = p.jsonp
    p.scrs=function(fns){var p=this
        async.series(fns, function (z, scrs) {
            var  str=''
            scrs.forEach(function(js){str += js})
            p.s( scrTag(str) )})}
    p.js=function(JS){var  p=this, fns=[]
        JS.forEach(function(js) {fns.push(function (cb) {
            $f.u8($tJs( js ), function (z,j){cb(null, j) })})})
        p.scrs(fns)
    }
}
    function write(){

        p.wH = function (a) {
            this.writeHead(a);
            return this
        };
        p.w = function (a) {
            this.write(a);
            return this
        }
        p.wB = function (a) {return this.write(a, 'binary')}
        p.wHwBE = function (a, b) {return this.wH(a).wB(b).e()}

    }
    function status(){
        p.st = p.status;
        p.sS = p.sSt = p.sendStatus

        p.s4= p.s400 = function(){ return this.STS(400) }
        p.z = function (z) {return this.tx().w(z + "\n").e()}
        p.s403 = p.s4 = function () {
            return this.sTs(403)
        }
        p.ok = function () {
            return this.s('OK')

            n()
        }

    }
    function file(){
        p.a = p.append;

        p.f = p.sF = p.sendFile;
        p.at = p.attachment;
        p.dl = p.download

    }
    function beta(){
        p.v = p.vary // ?
        p.t = p.ty = p.type;
        p.tx = function () {return this.wH(500, {"Content-Type": "text/plain"})}
        p.$p=function(){var g=G(arguments)
            this.s(_p.apply(null,g))}

    }
}
function users(){
    Midware.user = function (q, p, n) {

        if (q.loggedIn) {

            models.user.findOne({username: q.username}, function (z, u) {
                if (z) {
                    n(z)
                }
                else if (u) {
                    q.user = p.locals.user = u
                    q.username = p.locals.username = u.username
                    q.userId = p.locals.userId = u._id
                }
                n()
            })
        }
        else {
            // $l('middleware says NOT logged in :(')
            p.json('guest')
        }


    }
//var mP=u.mugPath;$l('mP:');$l(mP);p.l.mP=q.mP=mP;
// $m.image.findOne({relPath:mP},function(z,d){if(!d){$l('-m')}else{$l('+m');
// p.l.M=q.M=mug;p.l.mp=q.mp=q.M.relPath;p.l.mid=q.mid=q.M._id}n()})
// if(!u){q.s.u=null;q.s.save(function(){p.r('guest')})}
    Midware.Pics = Midware.P = function (req, res, next) {


        $m.pic.find(
            {u: req.I},


            function (err, pics) {

                var array = []

                _.each(
                    pics,

                    function (pic) {
                        array.push(
                            _S(pic._id) + pic.e
                        )  // $l(    )


                    })

                res.locals.I = array
                next()
            })
    }
    Midware.pic = Midware.p = function (req, res, next) {

        models.pic.findById(
            req.params.p,


            function (err, i) {


                if (err) {
                    next(err)
                }


                res.locals.i = '/' + i._id


                req.i = i


                next()

            })


    }
    Midware.Books = Midware.B = function (req, res, next) {

        Book.find({

                user: req.I
            },

            function (err, books) {
                if (err) {
                    next(err)
                }
                ;
                if (!books) {
                    'no book!'
                }
                res.locals.books = books
                next()
            })

    }
    Midware.book = Midware.book = function (req, res, next) {


        models.book.findOne({

                u: req.I,

                title: req.p.t
            },


            function (err, book) {
                if (err) {
                    next(err)
                }

                res.locals.book = book

                if (req.params.n) {

                    var c = res.locals.n = book.c[n]
                }

                if (res.params.h) {
                    res.locals.h = c[n][h]
                }

                next()

            })
    }
//module.exports = Midware

    function userLogin(){
        //checks session to see if user is logged in
        //  p.locals.loggedIn = q.loggedIn = (q.session.username)? true: false   //=  res.locals.li=  q.li

        //  p.r = p.render

        // q.username = q.session.username


        // $l('MAIN middleware says q.username = ' + q.username)

    }
}