//obs which emit evs are  events.EventEmitter insts
// Inside lsnr fn: THIS ->  Em lsr  attached to
//EventEmitters emit  evs: newListener and removeListener
$evOb={
    d: 'data',
    cl:'close',
    m: 'message',
    c:'connection',
    nL:'newListener',
    rL:'removeListener', xL:'removeListener',
    z:'error'
}
$prEv=function(e){
    return e
}
$sOn=function(){}
$ev=require('events')
$ev.E=$ev.EventEmitter
$ev.E.C=function(){return ev.Em.listenerCount()}//(em, ev) >> num lsnrs for an ev
$ev.E.maxL=function(){}//Em.defaultMaxListeners  // set max lisnrs at class level
$sEm=function(e){
    e.o=function(ev,fn){var e=this
        if(S(ev)&&U(fn)){
            return  this.listeners(ev)
            //(ev) >>  [lsrs]   for  spec ev
            // sv.oCn(function (stream) {$l('someone connected!')})
            // ;$l($u.inspect(sv.o('cn')))  >> [Fn]
        }
        if(O(ev)&&U(fn)){_.e(ev,function(fn,ev){e.o(ev,fn)});return this}
        return this.on($prEv(ev),fn)
          // em.on //(ev, fn) >> em (+chaining) :)
//Adds a lsr to  end of ev's lsrs arr ( [lsrs] )  // -can add same lsnr mult times
    }
    e.o1= e.once//(ev, lsr)  //runs one time after which it is removed.
    // ex: sv.o1('connection', function (sr){$l('first user!')}
    s.o1=s.once //Class: events.EventEmitter
    e.O= e.xL=function(ev,fn){
        return fn?
            this.removeListener(ev, fn):
            //(ev,lsr) Rms  0|1 lsr (from lsr arr)  for spec ev
            // (changes arr indices in lsrArr behind lsr)
            this.removeAllListeners(ev)
        //(ev) Rm all an ev's  (or ALL evs') lsnrs

        //ex:
        //sv.oCn(fn).xL('cn', fn)
    }
    e.em=function(){
        var e=this, g=G(arguments), res
        res= e.emit.apply(e,g)
         //(ev, g1, g2..)
        //exec lsnrs in order (wi the supplied args)
        // >> ev had lsrs? true: false
        return res}
    e._maxL=function (n) {
        //ee.setMaxListeners(20); //df max is only 10 lsrs!

        if (U(n)) {}
        else {this.setMaxListeners(n); return this}
        //By default EventEmitters will print a warning if more than 10  lsrs are added for a particular ev.
//   increase (or Set to zero for unlimited)
    }
    native(e)
    handlers(e)
    function handlers(e){
        e.o.z=function(fn){return this('z',fn)}//error
        s.O.z=function(fn){return this('z',fn)}
        e.o.d= function(){return this('d', fn)}//data
        e.o.cl= function(){return this._o('cl', fn)} //close
        //end
        //connect

    }
    function native(e){ // native evs:  newListener   removeListener
        e.o.nL = function (fn) {
            return this('nL', fn)
        }
        e.o.xL = function (fn) {
            return this('rL', fn)
        }
        e.O.nL = function (fn) {
            return this('nL', fn)
        }
        e.O.xL = function (fn) {
            return this('rL', fn)
        }

    }
    return e
}
$Em=function(){

    return $sEm(new $ev.E())
}

//events is just a hash
evs= {
    arrival: [fn1, fn2],
    done: [fn1,fn2,fn3]
    msg: [fn]
}
//ee = new $ev.E()
// on and emit.
//ee.o("someEvent", function () {$l("event has occured");});
//ee.em("someEvent",daOb, arg2);
ex=function() {
    id = 1;
    db = {
        users: [{id: id++, name: "Joe Smith", occ: "developer"}, {
            id: id++,
            name: "Jane Doe",
            occ: "data analyst"
        }, {id: id++, name: "John Henry", occ: "designer"}]
    };
    function UrLs() {
        $ev.E.call(this)
    }// Inheriting the constructor isn't enough
    $u.ih(UrLs, $ev.E)// use  util module to  inherit the prototype //This will add everything that's on $ev.E.prototype to UserList.prototype;  // now our UserList instances will have all  // mets of an $ev.E instance.
    UrLs.prototype.sv = function (d) {
        d.id = id++;
        db.urs.push(obj);
        this.em("saved-user", d)
    }
    UrLst.prototype.all = function () {
        return db.urs
    }
//I've added one more method: a simple one that returns all the users. Then, we assign UserList to module.exports.
//Now, let's see this in use; in another file, say test.js. Add the following:
    urs = new UrLs()
    urs.o("saved-user", function (u) {
        $l("svd:" + u.n + "(" + u.id + ")")
    })
    urs.sv({n: "Jane Doe", occ: "manager"});
    urs.sv({n: "John Jacob", occ: "developer"});
//saved: Jane Doe (4) //saved: John Jacob (5)
//  alt: this could work the other way around:
//  use  .on met inside class and the emit method outside,  or both inside or out.
}