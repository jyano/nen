s=$mg.S.prototype
s.A= s.a=s.add
s.eP=function(fn){
    //Iterates the schemas paths similar to Array#forEach.
//cb   passed pathname,scType
    this.eachPath(fn)
    return this
}
s.g=s.get
s.i=s.index
s.ii=s.indexes
s.iT=s.indexTypes
s.m = function(n,fn){this.method(n,fn); return this}
s.ms=s.methods
s.pt=function(k,v){
    if(U(v)){
        return this.path(k)
    }
    this.path(k,v);return this
}
s.pT=s.pathType
s.pl=s.plugin
s.pr=s.pre
s.prSv=function(fn){return this.pre('save', fn)}
s.prF=function(fn){
    return this.pre('find', fn)
}
s.po=s.post
s.poF=function(fn){
    return this.post('find', fn)
}
s.r=s.reserved
s.rP= s.requiredPaths

s.s = function(op,v){var s=this
    s.set(op,v)
    return s
}

s.st=s.statics
s.sts=s.status
s.vr= s.virtual
s.vp=s.virtualpath
s.op = s.options
//setting ops later
s.tO=function(ob){
    this.s('toObject', $obOp(ob))
    return this
}
s.tJ=function(ob){
    this.s('toJSON', $obOp(ob))
    return this
}
s.vBS=function(b){

    this.s('validateBeforeSave', b?true:false)
    return this
}
//if (!s.op.toObject) {s.op.toObject = {}}; s.op.tO= s.op.toObject

$obOp=function(ob){ob=ob||{};var o
    if(D(ob.g)){o.getters = !!ob.g}
    if(D(ob.v)){o.virtuals = !!ob.v}
    if(D(ob.m)){o.minimize = !!ob.m}
    if(D(ob.d)){o.depopulate = !!ob.d}
    if(D(ob.k)){o.versionKey = !!ob.k}
    if(F(ob.t)){o.transform = ob.t}
    return o
}
$capOp=function(ob){
    ob=ob||{}
    var o={}
    o.size = ob.s
    o.max= ob.m
    o.autoIndexId= !!ob.i
    return o
}

$scTy=function(ob){ob=ob||{}
    var g=G(arguments),o={}
    if(!ob.t){return ob}
    if(D(ob.mn)){o.min = ob.mn}
    if(D(ob.mx)){o.max = ob.mx}
    if(D(ob.tr)){o.trim = ob.tr}
    if(D(ob.t)){o.type = ob.t}
    if(D(ob.e)){o.enum = ob.en}
    if(D(ob.r)){o.required = ob.t}
    if(D(ob.d)){o.default = ob.t}
    if(D(ob.m)){o.match= ob.t}
    if(D(ob.ix)){o.index = ob.t}
    return o
}


$Sc=function(sc,ob){
    ob=ob||{};var o={}
    if(D(ob.ix)){o.autoIndex = !! ob.ix}
    if(D(ob.st)){o.strict = !! ob.st}
    if(D(ob.c)){
        o.capped = O(ob.c)? $capOp(ob.c) : !! ob.s
    }
    if(ob.cl){o.collection = !! ob.cl}
    if(ob.i){o.id = !! ob.s}
    if(ob._i){o._id = !! ob.s}
    if(ob.m){o.minimize = !! ob.s}
    if(ob.r){o.read = !! ob.s}
    if(ob.s){o.safe = !! ob.s}
    if(ob.sh){o.shardKey = !! ob.s}
    if(ob.j){o.toJSON = !! ob.s}
    if(ob.o){o.toObject = !! ob.s}
    if(ob.v){o.validateBeforeSave = !! ob.s}
    if(ob.k){o.versionKey = !! ob.s}
    if(ob.sk){o.skipVersioning = !! ob.s}
    return new $mg.S(sc, o)
}
_D=function(ob){

    return _.x({
        type:$D,
        default:$D.n
    },ob)
}
_S=function(ob){
    var o={type:$S}
    ob=$scTy(ob)
    o=_.x(o,ob)
    return o
}
_N=function(ob,m,M){
    var o={type:$N}
    ob=$scTy(ob)
    o = _.x(o,ob)
    if(N(m)){o.min=m}
    if(N(M)){o.min=M}
    return o
}
_A=function(ob){
    ob=$scTy(ob)
    var o={type:$A}
    o = _.x(o,ob)
    return o
}
_O=function(ob){
    ob=$scTy(ob)
    var o={type:$O}
    o = _.x(o,ob)
    return o
}
_B=function(ob){
    ob=$scTy(ob)
    var o={type:$B}
    o = _.x(o,ob)
    return o
}


scOpDocs=function() {

//index
//   disable index auto-creation 
// (create indexes (w ensureIndexes) manually)
// sc  = new Sc({}, { auIx: false });
// Clk = $mg.m('Clock', sc); Clk.eI(cb)


    validateBeforeSave = function () {


        sc.s('validateBeforeSave', false)

        sc.path('name').validate(function (value) {
            return v != null;
        })

        m.validate(function (err) {
            $l(err); // Will tell you that null is not allowed.
        })

        m.save(); // Succeeds despite being invalid
        //option: versionKey
//By df, docs vdd before being saved to db
// ( to prevent saving an invalid doc)
//  handle validation manually and
// be able to save objects which don't pass validation,?
// set validateBeforeSave to false.

        Sc = $Sc({n: $S});

        Sc.s('validateBeforeSave', false);

        Sc.pt('n').vd(function (val) {
            return val != null
        })

        M = $M('Per', Sc)
        m = M({n: null})
        m.vd(function (z) {
            $l(z)
        }) // Will tell you that null is not allowed.

        m.save() // Succeeds despite being invalid


    }

    id = function () {
        id = function () {
            //  each   Sc  has df  id virtual getter  -> doc's _id field cast to a string, (or if ObjectId, its hexString)
            op_Id = function () {

                // If you don't want an _id added to your Sc at all you may disable it
                // prevent docs from getting a mg-created_id   during Sc construction ?
                // set ' _id '
                // (parent docs will still have an _id created by MongoDB when inserted).
                //(Passing the option later using Sc.set('_id', false) will not work).

// default behavior

                Page = $M('Page', sc = $Sc({n: $S}))

                p = Page({n: 'mongodb.org'})

                $l(p); // { _id: '50341373e894ad16347efe01', n: 'mongodb.org' }


                sc = $Sc({n: $S}, {_id: false}) // disabled _id

// Don't set _id to false after Sc construction as in
//  sc  = $Sc({ n: $S });
// sc.set('_id', false);

                Page = $M('Page', sc);
                p = Page({n: 'mongodb.org'});

                $l(p); // { n: 'mongodb.org' }

// MongoDB will create the _id when inserted
                p.s(function (z) {
                    Page.id(p, function (z, doc) {
                        $l(doc)
                        // { n: 'mongodb.org', _id: '50341373e894ad16347efe12' }
                    })
                })
                //Note that currently you must disable the _id
            }
            opId = function () {

// If you don't want an id getter added to your Sc,
// you may disable it
// passing this option at Sc construction time.

// default behavior
                Page = $M('Page', Sc = $Sc({n: $S}))
                p = Page({n: 'mongodb.org'});
                $l(p.id); // '50341373e894ad16347efe01'
// disabled id
                Sc = $Sc({n: $S}, {id: false});
                Page = $M('Page', Sc);
                p = Page({n: 'mongodb.org'});
                $l(p.id)   // undefined
            }
        }

//  id: disable  id getter function?  id: false
        // _id:   disable auto add of _id field? _id:F

    }
    safe = function () {


//This option is passed to MongoDB with
// all operations and specifies if errors
// should be returned to our cbs
// as well as tune write behavior.
//
//By default this is set to true
// for all scs which guarentees
// that any occurring error gets passed back
// to our cb.
// By setting safe to somem else
// like { j: 1, w: 2, wtimeout: 10000 }
// we can guarantee the write was committed
// to the MongoDB journal (j: 1),
// at least 2 replicas (w: 2),
// and that the write will timeout
// if it takes longer than 10 seconds
// (wtimeout: 10000).
// Errors will still be passed to our cb.
//

// versioning will automatically be disabled
// when safe is set to false
//
//**NOTE: this setting overrides
// any setting specified by passing db options
// while creating a connection.
//
        //This option is passed to MongoDB with all operations and specifies
        // if errors should be returned
        // to our callbacks as well as tune write behavior.

        safe = true;
        $Sc({}, {safe: safe})


        //By default this is set to true for all Scs which guarentees that
        //        any occurring error gets passed back to our callback.

        // By setting safe to someab else like { j: 1, w: 2, wtimeout: 10000 }

        // we can guarantee the write was committed to the MongoDB journal (j: 1),
        // at least 2 replicas (w: 2), and that the write will timeout
        // if it takes longer than 10 seconds (wtimeout: 10000).

        // Errors will still be passed to our callback.
        // versioning automatically  disabled when safe is set to false

        //**NOTE: this setting overrides any setting specified by passing db options while creating a connection.

        // another write concern: { w: "majority" }

        $Sc({}, {safe: {w: "majority", wtimeout: 10000}})

        safe = true;
        $Sc({}, {safe: safe});


//    There are other write concerns
// like { w: "majority" } too.

        safe = {w: "majority", wtimeout: 10000};
        $Sc({}, {safe: safe});

    }


    minimizeEx = function () { // $N
        // minimize: stop $mg from rmg empty obs from scs (minimizing)?  minimize: false
        //option: minimize- $mg will, by default, "minimize" Scs by removing empty obs
        sc = $Sc({n: $S, inv: {}})
        Char = $M('Char', sc)
// will store `inv` field if it is not empty
        frodo = Char({n: 'Frodo', inv: {ringOfPower: 1}});
        Char.f1({n: 'Frodo'}, function (z, char) {
            $l(char); // { n: 'Frodo', inv: { ringOfPower: 1 }}
        });
// will not store `inv` field if it is empty
        sam = Char({n: 'Sam', inv: {}});
        Char.f1({n: 'Sam'}, function (z, char) {
            $l(char); // { n: 'Sam' }
        })
//This behavior can be overridden by setting minimize option to false
// It will then store empty objects.
        sc = $Sc({n: $S, inv: {}}, {minimize: false});
        Char = $M('Char', sc)
// will store `inv` if empty
        sam = Char({n: 'Sam', inv: {}});
        Char.f1({n: 'Sam'}, function (z, Char) {
            $l(Char); // { n: 'Sam', inv: {}}
        })

    }


//The strict option,
    M = $mg.model('M', Sc = $Sc({}))
// (enabled by default),
// ensures that values passed to our model constructor
// that were not specified in our sc do not get saved to the db.
    m = M({iAmNotInTheSchema: true});
    m.save() // iAmNotInTheSchema is not saved to the db
    Sc = $Sc({}, {s: 0})//// set to false..
    m = M({iAmNotInTheSchema: true});
    m.save(); // iAmNotInTheSchema is now saved to the db!!
//This also affects the use of doc.set()
// to set a property value.
    Sc = $Sc({})
    M = $mg.model('M', Sc)
    m = new M;
    m.set('iAmNotInTheSchema', true);
    m.save(); // iAmNotInTheSchema is not saved to the db
//This value can be overridden at the model instance level
//by passing a second boolean arg
    M = $M('M')
    m = M(dOb, true)   // enables strict mode
    m = M(dOb, false)  // disables strict mode
//  do not set to false unless  good reason.
//The strict option may also
// be set to "throw" which will cause errors to be produced
// instead of dropping the bad data.
//      Any key/val set on the inst
// that does not exist in your sc is always ignored,
// regardless of sc op
    mSchema = $Sc({})
    M = mongoose.model('M', mSchema);
    m = new M;
//m.iAmNotInTheSchema = true;
//m.save(); // iAmNotInTheSchema is never saved to the db


//buffer
    Sc = $Sc({}, {bufferCommands: false})
//When running with
// drivers autoReconnect option disabled
// and
// connected to a single mongod (non-replica-set),
// mg buffers commands when the connection goes down
// until you manually reconnect.
//  disable mg buffering under these conditions


// capped=null: max-cl-size (bytes)//  MG capped cls
    $Sc({}, {c: 1024})// to 'cap' a cl: set capped = cl max byte-size
    $Sc({}, {c: {s: 1024, m: 1000, i: 1}})// to pass more ops ( max,autoIndexId), set=ob //  size op  required

//collection : overwrite cl name (df:pluralizes)? collection:newName//normally cl names come from passing the md n to utils.toCollectionName()  -> pluralizes // manually set cl name?


// shardKey
    $Sc({}, {sh: {tag: 1, n: 1}})
// is used with sharded MG architecture.
// Each sharded cl  given a shard key 
// which must be present in all insert/update opers.
// We just need to set this Sc option to the same shard key, and we’ll be all set.
// mg does not send the shardcollection command for you.
//  You must configure your shards yourself.


//read
    sc = $Sc({}, {read: 'p'})// 'primary'
    $Sc({}, {r: 's'})         // 'secondary'
    $Sc({}, {r: 'n'})         //   'nearest'
    $Sc({}, {r: 'pp'})   //   'primaryPreferred'
    $Sc({}, {r: 'sp'}) //  'secondaryPreferred'
//     read op  also allows us to spec tag sets.
// (tells  driver which rep-set memb to read from
//    may   spec   driver read pref strat  op  when conng:
//// pings   replset members
// periodically to track network latency
// provide readPrefs to all qus derived from a md?
//(set query.read ops? read:true at  sc level)
// Allows setting query#read options at the Sc level,
//  apply default ReadPreferences to all
// queries derived from a model
//The alias of each pref is also permitted
// so instead of having to type out 'secondaryPreferred'
// and getting the spelling wrong, we can simply pass 'sp'.
//The read option also allows us to specify tag sets.
// These tell the driver from which members of the replica-set
// it should attempt to read. Read more about tag sets here and here.
// NOTE: you may also specify the driver read pref strategyoption when connecting:
// pings the replset members periodically to track network latency
    sc = $Sc({}, {r: ['n', {disk: 'ssd'}]})
    ops = {replset: {strategy: 'ping'}}
    $mg.c(uri, ops)
    $mg.m('JellyBean', sc = $Sc({}, {read: ['nearest', {disk: 'ssd'}]}))
//$mg.connect(uri, {replset: {strategy: 'ping'}} )


///////////// VERSIONING /////
// set on each dc when first created by Mongoose.
// This keys value contains the internal revision of the document.
// The default name is __v, but name is configurable
// disable  doc-versioning another way?
// set vK = false. (very advanced)


    M = $mg.m('M', $Sc({n: 'str'}))
    M({n: 'mgv3'}).sv(); // { __v: 0, name: 'mgv3' }  cust vK
    M = $mg.m('M', $Sc({}, {vK: '_somemElse'}))
    m = new M({n: 'mg v3'}).sv()
//{_somemElse:0,n:'mg v3'}
//Dc versg can be disabled


    M = $mg.m('M', $Sc({}, {vK: false}))
    d = M({n: 'no versioning please'});
    d = M({n: '!vers'});
    m.sv() // {n: '!vers' }
    d.sv() // { n: 'no versioning please' }
    Sc = $Sc({n: 'string'})
    d = $M('ab', Sc)
    d = ab({n: '$mg v3'})
    d.sv() // { __v: 0, n: '$mg v3' }
// customized vK
    M = $M('M', $Sc({}, {vK: '_something'}))
    d = M({n: '$mg v3'})
    d.sv()// { _something: 0, n: '$mg v3' }


//skipVersioning $B
// want to exclude pts from versg?(the internal revision
// will not be incremented even if these paths
// are updated) (advanced!)
    new Sc({skipVersioning: {dontVersionMe: true}});
    m.dontVersionMe.push('hey')
    m.sv()   // vers  ! incremented


}

types=function(){
    $z=function(z){console.error($S(z))}
    $D= Date
    _lS=function(z){$l($S(z))}
    $Mat=function(m,x){
        var o={type:$S, match:m}
        if(x){_.x(o,x)}
        return o
    }
    $En=function(e,x){
        var o={type:$S, enum:e}
        if(x){_.x(o,x)}
        return o
    }


    enum=function(){
//scS.enum([argss]) enum validator [enumVals] S|O
        M = $M('M', $Sc({
            ST: $En(['opening', 'open', 'closing'])
        }))

        m = M({ST: 'invld'})
        m.sv(function (z) {
            $z(z)
// ValidationError: `invalid`
// is not a valid enum value for path `ST`.
            m.ST = 'open'
            m.sv(cb)
        })// success
        m = $M('M', $Sc({
            ST:
                $En({
                    values: 'opening open closing closed'.split(' '),
                    message: 'enum validator failed for path `{PATH}` with value `{VALUE}`'
                })
        }))({ST: 'inv'})

        m.sv(function (z) {
            $z(z)
            // vdZ: enum validator
            // failed for path `ST` with value `invalid`
            m.ST = 'open'
            m.sv(cb) // success
        })//// w cust z msgs
    }
    mat=function(){



//  scS.match(RE, zMs): vals that fail regExp.test(val) fails vd


        m = $M('M', $Sc({ n: $Mat(/^a/) }))({n: 'ivd!'})
        m.vd(function (z) {$z(z)//vdZ: Pt `n` invld(invld!)
            m.n = 'apples'
            m.vd(function(z){assert.ok(z)})}) // success
        $M('M', $Sc({

                file: $Mat([
                    /\.html$/,
                    "That file doesn't end in .html ({VALUE})"
                ])

            })
        )({ file: 'invalid' }).vd(_lS)

//// using a custom  z message
// "ValidationError: That file doesn't end in .html (invalid)"
//Empty strings, undefined, and null values always pass the match validator.



// If you require these values, enable the required validator also.
        $Sc({n: $Mat(/^a/,{q:1})})


    }
    //scS.trim() trm setter (trmd when set)
    $M('M', $Sc({n:{t:$S,tr:1}}))({n:' abc '})//len 3
// uppercase  up/lowcase setter
    $M('M',$Sc({caps:{t:$S,uc:1}}))({ caps: 'ex' } )// $l(m.caps)//EX




    nMixMin=function(){

        $M('M',    $Sc({n: { t: $N, max: 10 }}))({ n: 11 }).sv(function (z) {
            $z(z) // validator z
            m.n = 10;
            m.sv() // success
        })
        $M('Meas', $Sc({n: {t:$N, max:[10,'`{PATH}`({VALUE})>({MAX})']}}))({n:4}).vd(_lS)// cust z ms

    }
    sMaxMin=function(){ //set max/min length validator.
        Addr = $M('Addr',  $Sc({poCode: {t:$S,  mnL:5, mxL:9}})  );
        Addr({ poCode: '9512512345' }).sv(function (z) {$z(z); addr.poCode = '95125'; addr.sv() })

        Addr  = $M('Addr', $Sc({ poCode: { t: $S, mxL: [9, '`{PATH}` (`{VALUE}`)>({MAXLENGTH})!'] }))
        Addr({ poCode: '9512512345' }).vd(function (z) {$l($S(z))})// cust z ms
    }
    dMaxMin=function(){ //Sets a max/min date validator.
        $M('M', $Sc({ d: { t: $D, max: $D('2014-01-01'), min: $D('1970-01-01')}))
        ({ d: $D('2014-12-08') }).sv(function (z){
            $z(z); m.d = $D('2013-12-31'); m.sv()})
        $M('M', $Sc({ d: { t: $D, min: [ $D('1970-01-01'), '`{PATH}`({VALUE})>({MIN})' ]}))
        ({ d: $D('1969-12-31') }).vd(_lS)// cust z ms
    }


    // SchemaDate.expires(when)//  <$N, $S>
    // Declares TTL ix (to nearest sc)
// sets expiresAfterSeconds ix op
// This ix ty   only compatible w Date tys


    $Sc({

        createdAt: {
            t: $D,
            exp: 60 * 60 * 24 //24 hours
            //expires utilizes the ms module from guille ,
            // allowing us to use a friendlier syntax:
            // expires: '24h'
            // expires: '1.5h'
        }
    })

    sc.pt('createdAt').exp('7d')





//ObjectId.auto(turnOn)
//Adds an auto-generated ObjectId default if turnOn is true.

}
schemaDocs=function() {
    virtAtts = function () {
        //  *in op:  virtuals:true  (to toObject()|toJSON())  to have them returned)
        //Virt  prop  setters  applied before other vd
// (above ex would still work even if
// first,last, fds required)

//Only non-virt props work as part of  queries ,
// for fd sel

        Per = $M('Pe',
            perSc = $Sc({
                n: {f: $S, l: $S}
            }))

        perSc.vr('n.full')
            .g(function () {
                return this.n.f + ' ' + this.n.l
            })
            .s(function (full) {
                var spl = full.split(' '),
                    f = spl[0], l = spl[1];
                this.s('n.f', f);
                this.s('n.l', l)
            })

    }
    ty = function () {
        $mg.m = $mg.md = $mg.model
        Emp1 = $Sc({
            any: []
        })
        Emp2 = $Sc({any: $A})
        Emp3 = $Sc({any: [$Mx]})
        Emp4 = $Sc({any: [{}]})

// Sc Tys:   $S $N  $D   $Bf  $B  $M(ixed)    $id  $A
// to add additional keys later,  use  Sc.add
        /* saved as : {
         f: 'J', l: 'Y',  actv: 1,
         cr_at: ISODate("2014-12-14T04:00:36.811Z"),
         __v: NumberInt(0),
         _id: ObjectId("548d0b64fbcb585c0b8292c4")
         }
         */
//$Mixed "anything goes" :flexible, but  harder to maintain.
        //  avail   through Sc.Types.Mixed or an emp ob lit
        //   $Sc({ any: {} })  ~  y = $Sc({ any: $M });
        //   mg loses the ability to auto detect/save  changes,
        // but to "tell" mg MxTy has changed -> doc.markModified(path-to-changed-mixedTy)
        dfMug = {}
        user = {
            un: {ty: $S, q: 1}, pw: $S,
            mug: {ty: $S, df: dfMug},
            sts: {ty: $S, df: 'nothing much'},
            buds: [$S]
        }
    }
    anSc = $Sc({n: $S, ty: $S})
    MD = {} // for(var md in SC){  MD[md] =  mg.md(md,  mg.Sc( SC[md] ))  }


    ScPt = function () {
        m.thing = {x: [3, 4, {y: "newVal"}]};
        m.mM('thing');
        per.sv();
//  [] ~[$M] // The following all create [$M]s
// Ops are fns, called on each ScTy
// (d)efault: {fn|val}
// spec df val for pt.
// All vals casted.
// If using fn, rets df-val casted val
/// re(q)uired($B)
//   g/s( fn )
//  ScTy can have own cust ops (to df ops later,  access keys through  pt fn, add ops there)

        Per.pt('a').max(400)


        Per.pt('meta.birth')
            .s(function (v) {
            })// this is a setter

        Per.pt('tt')
            .v(function (v) {
                return v.length > 50
            })
    }


    SC = {
        user: user,
        pic: {
            ur: {ty: $id, r: 'user', q: 1},
            // /user: {ty: $id, r:'user', q:1},
            date: {ty: $D, df: $D.n},
            modified: $D,
            sz: $N,
            n: $S,
            ext: $S
        },

        img: {
            un: $S,
            u: $S,

            dt: $D,
            data: $S,
            d: $S,
            n: $S,
            dats: [$N], physicsData: [$N]
        },

        thing: {n: $S, age: $N},

        guy: {
            n: $$S({q: 1}),
            m: $S, x: $N, y: $N
        },
        map: {n: $S, guys: $O},

        bk: {
            urId: {ty: $id, r: 'ur', q: 1},
            tt: $S, chs: ['ch']
        },

        sort: {
            un: {ty: $S, q: 1},
            dt: {ty: $D, df: $D.now}, tt: $S, items: {ty: [{}], df: []}
        },
        sts: {dt: {ty: $D, df: $D.now}, un: {ty: $S, q: 1}, text: $S},
        avail: {dt: {ty: $D, df: $D.now}, un: {ty: $S, q: 1}, text: $S},
        po: {dt: {ty: $D, df: $D.now}, un: {ty: $S, q: 1}, tt: $S, text: $S, dataURl: $S},
        ms: {from: {ty: $S, q: 1}, to: {ty: $S, q: 1}, dt: {ty: $D, df: $D.now}, tt: $S, text: $S},
        //bud request
        budReq: {from: {ty: $S, q: 1}, to: {ty: $S, q: 1}, dt: {ty: $D, df: $D.now}},

        Tp: {topic: $S, items: {ty: [{}], df: []}},

        Ms: {
            topicId: $N, topicName: $S,
            text: $S, score: $N
        },

        Cm: {}, link: {tt: $S, url: $S}
    }

    uSc = perSc = $Sc({
        n: $S, f: $S, l: $S,
        a: $N, _id: $N,
        actv: $B,

        un: $$S({
            lC: 1,
            trim: 1,
            q: 1
        }), // t: {t: $S,  enum: ['role1', 'role2'] },//  bks  : $Cl('Bk'), //  only ([bk ObjectId (_id) ] can be stored here
        street: $SS({
            // here we pass a function
            // can also pass array   vd: [has$N, 'street number required']
            // or regex: $Sc({ street: { t: $S, vd: /\d/ }})
            vd: function hasNum(v) {
                return v.length && /\d/.test(v)
            }
        }),
        tt: $SS({lowercase: true}),
        em: $$S({q: 1, index: {u: 1}}), // cms: $Cl('Cm'),
        pw: $SS({
            hide: true,     // vd the pw len?
            vd: [function (pw) {
                return pw.length >= 6
            },
                'Password should be longer']
        }),
        int_n: $$S({match: /int_/}),
        is_actv: $$B({df: 1}),
        age: $$N({}, 5, 40),

        last_payment_date: $$D({
            df: $D.now,
            expires: 60 * 60 * 31 //    sets   seconds after which a doc  should be  auto-deleted by mg
        }),

        cr_at: $$D({df: $D.n()}), // cr_at: $D,
        upd_at: $$D({df: $D.n()}),


        meta: {friends: $N, likes: $N, votes: $N, dislikes: $N},
        cms: [{body: $S, date: $D}]


    })

//plrSc =  $Sc({dp_n: $S, leags: $Cl('League')})//display name

    pre = function () {

        chSc = $Sc({n: 'str'}).pre('save', function (n) {
            if (this.n == 'bad') {
                return n($Z('z!'))
            }
            n()
        })
        paSc = $Sc({ch: [chSc]})//[{ n: 'str' }]})
    }

    strict = function () {

        poSc = $Sc({
            strict: false, // ->   allows us to skip sc  def
            tt: {t: $S, q: true},
            cont: {t: $S, q: true},
            aut: {t: $id, r: 'U'},
            cl: 'po'
        })

    }

    emb = function () {
        blgSc = $Sc({
            tt: $S,
            aut: $S,
            body: $S,
            dt: $$D({df: $D.n()}),
            cms: [{
                body: $S,
                dt: $D
            }],
            hidden: $B,
            meta: {
                votes: $N,
                favs: $N
            }
        })
        Blg = $M('Blg', blgSc)
// $A Creates [ScTys] (Embedded Docs)
        ToyBox = $Sc({
            toys: [
                ToySc = $Sc({n: $S})
            ],
            bfs: [$B],
            str: [$S],
            nums: [$N]
        })
        likesSc = $Sc({un: 'string'})
        stsSc = $Sc({text: 'string', likes: [likesSc]})
        userSc = $Sc({un: 'string', sts: [stsSc]})
//  likesSchema embbed in  stsSchema,
// which is embedded inside the userSchema.

    }

    STATICS = function () {
        //  can add static, inst mets to a Sc
// STAT METS  apply to (get directly called on) md itself (directly)
        uSc.stcs.fLvl = function (lvl, fn) {
            this.f({lev: lvl}, function (z, d) {
                fn(z, d)
            })
        }
        //$M('Ur', urSc).fLvl('l1',function(z,d){})
        anSc.stcs.fN = function (n, fn) {
            return this.f({n: $RE(n, 'i')}, fn)
        }
        //$M('An',anSc).fN('fido',cb)

    }

    INSTMETS = function () {

        uSc.mets.lvlAlow = function (fn) {
            // alowTy = ['l1','l2','l3'] ?
            //  md = this.md('Ur');
            // can perform   db ops  on  md
            if (this.age > 10 && (this.t == 'l2' || this.t == 'l3')) {
                fn(0, 0)
            } else {
                fn(0, 1)
            }
        }


        $M('Ur', uSc)({
            f: 'J', l: 'Y', un: 'jy', a: 5,
            cr_at: $D(), actv: 1, t: 'l3',
            int_n: 'int_xetro', meta: {likes: 1}
        }).lvlAlow(function (z, alow) {
            $l(alow ? 'yes' : 'no')
        })//process.exit()


        anSc.mets.fSimTy = function (cb) {
            return this.m('An').f({ty: this.ty}, cb)
        }
        An = $M('An', anSc)
        dog = An({ty: 'dog'})
        dog.fSimTy(cb) // woof ??


    }

    popLeadPlg = function (n) {
        //  to auto-pop  lead singer,
        // every time a band loaded,
        // use find()/f1() mw (qu hooks)
        this.P('lead');
        n()
    }

    autoPopAndEachPath = function (sc) {

//   purpose :ability to say
// "this field should always be
// popd every time this md qu-ed "

        pts2Pop = []
        // Find ev  pt that has   `autopop` op
        // eaPt allows you to iter  over ev  pt
        sc.eP(function (ptN, scTy) {
            if (scTy.op && scTy.op.autopop) {
                pts2Pop.push({
                    pt: ptN,
                    autopop: scTy.op.autopop
                })
            }
        })

//   On f(),f1(), process autopop  op  for ea  pt. If `autopop` is  fn, auPop calls it.
        popHlr = function () {
            var that = this
            _.e(pts2Pop, function (pt) {
                processOp.call(that, pt.autopop,
                    pt.pt)
            })
        }

        sc.pre('find', popHlr)
            .pre('findOne', popHlr)
    }

}