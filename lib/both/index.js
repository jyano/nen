console.log('./lib/both/index.js')
require('./us')
require('./str')
console.log('./lib/both')


$d=function(a){console.dir(a); return a}



M=Math; M.fl= M.floor;
M.c= M.cos; M.s= M.sin
M.av=M.avg= M.average = function self(a,b){var g=G(arguments), z= _.size(g),  n=0;


    if(A(a)){return _a(self,a)}

    if(O(a)){

        return V(
            M.av(a.x,b.x),
            M.av(a.y,b.y)
        )

    }

    _.e(g,function(a){n+=a})
    return n/z
}
M.tN=_.tN=function(what, aNum){return N(what)? what: aNum||0  }
M.u= _.upd= function(curr, update, g){var res
    if(g.p){res = curr + update}
    else if(g.n){res = curr - update}
    else if(g.m){res = curr * update}
    else if(g.d){res = curr / update}
    else res = update
    return res
}
M.pI=_.pI = _.tI=function(a,b){
    if(U(b)){return parseInt(a)}
    return parseInt( _.tN(a,b) )}


_.l= _.last; _.f= _.first; _.i = _.initial; _.r = _.rest
_.e= _.each; _.m= _.map; _.t=_.times
_.x=_.extend ;_.df= _.defaults;  _.p= _.partial;
_.ic= _.include;
_.wo =_.without; _.cp= _.compact
_.ks= _.keys;
_.rs= _.result
_.tp= _.template

_.b=function(a,b,c){return F(a)?_.bind(a,b,c)  :_.bindAll(a,b,c)}
_.tA=function(a){return O(a)?_.toArray(a):[a]}
_.fl=_.F=function(a){if (A(a)){return _.flatten(a)}}
_.ey=function(a,b,c){return _.every(a,b,c) }
_.eW=function(a,b){return s$(a).endsWith(b) }
_.mo= function(n,fn){return N(n)? _.throttle(fn, n*1000): _.throttle(n, 1000)}
_.rd=function r(a,b,c,d){return  F(b) && D(c)? _.reduce(a, b, c) : _.reduceRight(a, c, b)}
_.rp=function(a,b,c){return a.replace(b||'#', c||'')}
_.rng=function(a,b){var g = G(arguments); return N(b)? _.range(a, b) : g.p? _.range(1, (a||10) + 1 ): _.range(a) }
_.iv=function(a,b){return  _.invert(a) }
_.ix=function(a,b){return _.ap(_.intersection, arguments) }

__='!!!!!!!!!!!!!!!!!!!!!!!!!!!!'

s$ = S  // ******** must go before 'S' is re-assigned to a bool

S=function(a){return  _.isString(a)}

$J=JSON;
$A=Array;
$B=Boolean; $N=Number; $O=Object;
$F=Function; $S=String;





S.iU= function(a){if(S(a)){return s$(a).isUpper()}}
S.tU=  _.tU= _.tUC=function(a){
    return a.toUpperCase()
    return S(a)? a.toUpperCase() :A(a)? _.m(a,function(a){return S.tU(a)}):a}
S.iL=function(a){
    return S(a)? a.toLowerCase() :A(a)? _m(a,function(a){return lC(a)}):a
    //Lc=function(a){if(_.isString(a)){return s$(a).isLower()}}
}
S.tL=_.tL= _.tLC=function(a){         return a.toLowerCase()

}
S.cR= function(a,b){return s$(a).chompRight(b).s }
S.eR=  function(a,b){return s$(a).ensureRight(b).s}
S.cL= function(a,b){return s$(a).chompLeft(b).s }
S.eL=  function(a,b){b = b || '/'; return s$(a).ensureLeft(b).s}
S.x= S.ext=_.ext= function(a, b){if(S(a)){
    return  s$(a).contains('.')  ? a :
        s$(a).ensureRight(b||'.png').s}}

S.slash= _.slash =_.ensureSlash=function(str){
    var hasSlash = str[0] == '/'
    return hasSlash? str: '/'+str
}


S.spl=_.spl=function(a,b){return  String(a).split(b)}
S.bf=_.bf=function(a,b){return  a.split(b|| '.')[0]}
S.af=_.af=function(a,b){return  a.split(b || '/')[0] }
S.S= S.to=_.tS=function(a){return  a.toString()}
S.ch=_.fCC=function(a){return $S.fromCharCode(a) }

$l=function(a){var g=G(arguments),v
    if(O(a) && N(a.x) && N(a.y) ){
        v=a.toFixed()
        $l(v.x + ' , ' + v.y)
        return a}
    _.e(g,function(a){
        console.log(
            _.isFunction(a)? a.toString()
                :O(a)? JSON.stringify(a)
                :a
        )
    })
    return a
}

G=function(arg, str){var a,ag= _.tA(arguments), p, n, m, d,g
    //conflict with N(not neg) and N(g.$ && N(g.f) )
    if(S(ag[0])){
        a=_.tA(ag[1])
        if(S(a[0])){
            a[ag[0]]=a.shift()}}
    else{a=_.tA(ag[0])}
    if(_.l(a)=='+'){p= a.pop()}
    else if(_.l(a)=='-'){

        n=a.pop()}
    else if(_.l(a)=='*'){m=a.pop()}
    else if(_.l(a)=='/'){d=a.pop()}
    if(S(ag[1])&&S(_.l(a))){a[ag[1]]=a.pop()}
    g =  _.df(a, {
        z: a.length,
        f: _.f(a),
        s: a[1],
        t: a[2],
        l: _.l(a),
        r: _.r(a), i: _.i(a),
        p:p, P:!p, m:m, M:!m,
        d:d, D:!d, n:n, N:!n

    })
    g.u=U(g.f);g.U=!g.u
    g.L=g.length
    str=''
    _.t(g.L,function(){str=str+'$'})
    g[str]=1
    //g.N= g.$ && N(g.f);
    g.N = g.$ && N(g.f)
    g.N_ =N(g.f);
    g._N =N(g.l)
    g.$N= N(g.f)
    g.$_N= N(g.s)
    g.S = g.$ && S(g.f)
    g._S = S(g.l)
    g.$S=  g.S_ = S(g.f)
    g.$_S= S(g.s)
    g.O = g.$ && O(g.f)
    g.O_ = O(g.f)
    g._O = O(g.l)

    g.A= g.$ && A(g.f)
    g.A_= A(g.f);
    g._A= A(g.l)


    g.F=g.$ && F(g.f);g.F_=F(g.f);g._F=F(g.l)
    g.SA=  g.$$ && g.S_ && A(g.s)
    g.OO_ = O(g.f) && O(g.s)
    g.e=function(fn,str){var g=this
        if(str){
            g.e(function(g){fn[str](g)})
            return fn}

        _.e(g,fn)
        return g
    }
    g.e0=function(fn){
        _.e(this[0], fn)
    }

    g.e1=function(fn){
        _.e(this[1], fn)}

    g.eR=function(fn){
        _.eR(this, fn)
    }

    g.eF=function(fn){_.e(g.f, fn)}


    g.eS=function(fn){
        this.e(function(k) {
            if (S(k)){fn(k)}})}
    g.G=function(a){
        a=_.clone(a)
        if(g.n){a.push('-')}
        else if(g.p) {a.push('+')}
        else if(g.d) {a.push('/')}
        else if(g.m) {a.push('*')}
        return a}
    g.g = g.G( g )
    g.a=g.ap=function(){var g=this, gg=G(arguments)

        //if(g.A){

        return gg.s?
            $a(gg.s, gg.t, g.f):
            $a(gg.f, g.f)
    }
    g.ush=function(d){var g=this,
        res

        if(U(d)){d=null}

        g.t=g.s
        g.s=g.f
        g.f=d
        res=g.unshift(d)


        return res}
    return _g=g
}; G._=function(){g=G(arguments); $l(g.L + ' args')}

U = function u(a, b) {

    if (_.isUndefined(b)) {
        return _.isUndefined(a)
    }

    // return  _.extend.apply(_.extend, arguments)
}
A = _.isArray
B = _.isBoolean
D = function (a, b, c) {
    return _.isUndefined(b) ? !_.isUndefined(a)
        : _.defaults.apply(_.defaults, arguments)
}
F = function f(a, b, c) {
    //if(_.isDefined(b)){return _.filter(a,b,c)}
    return _.isFunction(a)  // return a.prototype||true

}
N = _.isNumber
O = function (a, b) {

    if (_.isUndefined(b)) {
        return _.isObject(a)
    }

    if (_.isObject(a)) {
        // return  _.extend.apply(_.extend, arguments)

    }
}
I = function (f, i) {
    var g = G(arguments), clear


    if (F(g[0])) {
        f = g[0];
        i = g[1]
    }

    else {
        f = g[1];
        i = g[0]
    }

    i = !N(i) ? 1000 : i > 5 ? i : i * 1000


    if (g.N) {
        f()
    }

    clear = setInterval(f, i)

    return function () {
        clearInterval(clear)
    }

}
AA=  _.AA = _.isNested = function(a){return A(a) && A(a[0])}


_.sT= _.sI=function(a,b){return setTimeout(a,b)}
_.sI=function(a,b){return setInterval(a,b)}
_.in=   function(time, fn){var g=G(arguments),
    o= F(g[0])? {fn:g[0]} :{s:g[0], fn:g[1]}
    o.s  =  N(o.s)? o.s: 1
    o.fn= o.fn || function(){}
    return _.sT(function(){
            o.fn()},
        o.s * 1000)
}

_.ev= function(n, fn){_.sI(fn, n*1000)
    //  _.iv=function(a,b){if(N(b)){return setInterval(_v(a),b)}}
}
_.cI= _.xI=function(n){clearInterval(n)}

R=function(n,n2){var num
    if(O(n)){n= n.length}
    n=N(n)? n:1
    n2=N(n2)?n2:0
    num= (M.random()*n)+n2
    return M.floor(num)
}
$r=function(a,b){
    a = a||'c'; //cannot be 'color' ?? only abr??
    var values = _.values(oO(a))
    return Oo(a,b) || values[_.random(_.size(values)-1)]
}
_.RE= _.isRegExp
$RE=function(a,b,c){return new RegExp(a,b,c)}

_.j=function(a,b){return(a||[]).join(b||' ')}
_.ob =  function (a) {return O(a) ? a : {}}
_.ext = function (o) {o.e = o.extend; return o }
_.ap  = _a =function (ob, met, arr) {
    var g = G(arguments)
    if (g.t) {

        return g.f[g.s].apply(g.f, g.t)
    }
    return g.f.apply(null, g.s)
    // function (a, b, c) {   return  a.apply(c || a, b) }
}

//added

_.b= _.bind
//$l = function (a) {console.log(a); return a}
/*

$q = require
$q = function () {
    var g = G(arguments)
    if (g.A) {
        _.e(g.f, function (mu) {
            require(mu)
        })
    }
    else if (g.s) {
        _.e(g, function (mu) {
            require(mu)
        })
    }
    else if (g.f) {
        return require(g.f)
    }
}
$Q = function () {
    var g = G(arguments)

    if (g.A) {
        _.e(g.f, function (mu) {
            require(mu)()
        })
    }

    else if (g.s) {
        _.e(g, function (mu) {
            require(mu)()
        })
    }

    else if (g.f) {
        return require(g.f)()
    }
}

*/
$d=function(o){console.dir(o);return o}

_.gT = function (){  return $Dt().getTime()  }
$z=function(z){ console.error(z)}




require('./clHtml')()



$l('in dat.........................')
$Dt=Date
$Dt.n=$Dt.now  //->  cur time - ms since  1970 UTC (N)
$Dt.H= 3600000
$Dt.U=$Dt.UTC// ?
// same pams as longest form  of constructor (2 to 7) -> ms since 1970 UTC (N)
$Dt.p = $Dt.parse// date as str ->  ms since  1970  UTC (N)

$D=function(){
    var d = new $Dt() // new $Dt(a,b,c,d,e)
    d.s = d.getSeconds
    d.t=function(m){  //time  num MSs af/bf 1/1/70
        d.sT=d.setTime
        d.gT= d.getTime
        if(U(m)){return this.gT()}
        this.sT(m)
        return this
    }
    d.s=function(s){ //secs 0-59
        // $l('d.s')
        var d=this
        d.sS=d.setSeconds
        d.gS = d.getSeconds
        if(U(s)){return d.gS() }
        d.sS(s)
        return d
    }
    d.h=function(m){  //hour 0-23
        d.gH= d.getHours
        d.sH    =  d.setHours
        if(U(m)){return this.gH()}
        this.sH(m)
        return this
    }
    d.d= d.getDay  // day of   week (from 0-6)
    d.D=function(d){var d=this   //date  day of   month (from 1-31)
        d.gD= d.getDate //
        d.sD = d.setDate
        if(U(d)){return this.gD()}
        this.sD(d)
        return this
    }
    d.M=function(m){  //month 0-11
        d.sM  =  d.setMonth
        d.gM= d.getMonth
        if(U(m)){return this.getMonth()}
        this.setMonth(m)
        return this
    }
    d.m=function(m) {//mins 0-59
        d.gMn = d.getMinutes
        d.sMn = d.setMinutes

        if(U(m)){return this.gMn()}
        this.sMn(m)
        return this
    }
    d.ms=function(m){ //ms 0-999
        d.gMs=d.getMilliseconds
        d.sMs=d.setMilliseconds
        if(U(m)){return this.gMs()}
        this.sMs(m)
        return this
    }
    d.y= function(y){ //fullYear (year Deprecated -> fullYear )
        d.sY    =  d.setFullYear	//Sets the year (four digits) of dtOb
        d.gY= d.getFullYear//	  year (four digits)
        if(U(y)){return this.gY()}
        this.sY(y)
        return this
    }
    //superParse(d)
    //superUTC(d)

    return  d
}
$D.n=function(a){return $Dt.n(a)}
$D.p=function(a){return $Dt.p(a)}
$D.U=function(a){return $Dt.U(a)}

$now=function(){return {t:$D, df:$D.n()}}
$n=$nowPlusWhat_InDateForm=function(plus){
    var dateNow
    if(U(plus)){return $D.n()}
    //plus=plus||0
    dateNow =  $D( $D.n() + plus)
    return dateNow}
function $superUTC(d){
    // uniT ms 0-999
    d.sUMs    =  d.setUTCMilliseconds
    d.gUMs   =  d.getUTCMilliseconds

    //uniT secs 0-59
    d.SUSc    =  d.setUTCSeconds
    d.gUSc   =  d.getUTCSeconds//

    //uniT min 0-59
    d.sUMn = d.setUTCMinutes
    d.gUMn = d.getUTCMinutes

    //uniT hour 0-23
    d.sUH    =  d.setUTCHours
    d.gUH    =  d.getUTCHours


    d.gUM    =  d.getUTCMonth
    d.sUM    =  d.setUTCMonth

    //uniT dtOb's year (4digs)
    d.sUFY    =  d.setUTCFullYear
    d.gUFY    =  d.getUTCFullYear

    //  uniT  dOM 1-31
    d.gUDt= d.getUTCDate
    d.sUDt  =  d.setUTCDate

    d.U= d.UTC	//num of MSs in a date since midnight of 1/1/70, according to UTC time
    d.gUD= d.getUTCDay	// uniT dOW 0-6
    d.gO=d.gTO= d.getTimezoneOffset// mns dif bwn UTC/local time

    return d
}
function $superParse(d){
    d.tS = d.toString	//dtOb -> str
    d.tI = d.toISOString	//date as a str, using ISO standard
    d.tDt = d.toDateString	//Converts the date portion of   dtOb into a readable string
    d.tLDt = d.toLocaleDateString//	date portion of a dtOb as   string, using locale conventions
    d.tLT  = d.toLocaleTimeString	//time portion of  dtOb as   string, using locale conventions
    d.tL  = d.toLocaleString	//dtOb -> str, using locale conventions

    d.tT  = d.toTimeString	//Converts   time portion of  dtOb to   string

    d.tU = d.toUTCString	//dtOb -> str, by uniT
    d.p =  d.parse	//Parses date str  and num   ms snc 1/1/70
    d.j= d.tJ    =  d.toJSON	//date as   str, formatted as a JSON date
    d.v= d.vO= d.valueOf	//primitive val  of   dtOb
    return d
}
function oneHourFromNowInDateForm(){return $D.n( $D.H )}
