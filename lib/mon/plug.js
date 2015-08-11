vd=function(){
    //   can vd your data at  app logic layer,
// but more useful to do it at md level
    //*  validate: {Fn|rg|Ar} - Creates a validator for this path
// Vldrs -defined at doc's fd level  -execd when the doc saved
    // (If a vd z occurs, save aborted, z is passed to  cb)
// min/max:  Cr  vdr which checks   that  val  not <,> spec val
    // **lowercase/uppercase:$B // Cr setter which calls .toLowerCase() on val
    // *trim: $B Cr setter which calls .trim() on the val

    UrSc  = $Sc({un:_S({tr:1,q:1})})
    tyBasedPreDFdVdr=function(){
        //*match: Cr RE vdr;val test()ed against   RE
        //1) match (for strings)
        UrSc  = $Sc({em: _S({  m: /.+\@.+\..+/,  ix:1 })}) // email vdr! :)

//2) enum
// allows insertion of only three possible strings?
        UrSc  = $Sc({  role: _S({e:['Admn', 'Owner', 'Ur'] }) })
//  *  enum: $A Creates enum vdr;  val !in  arr -> FAIL


    }
    custVdr=function(){

        //  Define cust validator ?
        // use 'validate' prop,
        // pass [ vd-fn, z-ms]
        Ur = $M('Ur', urSc ))

        Ur({
            f:'J', l:'Y',
            cr_at:  $D(), is_actv: 1, un : 'jay'
        }).s()

        // in db ->
        ob={"_id": ObjectId("548d0f141b41baf82259d815"),
            f: "J", l: "Y",
            cr_at: ISO$D("2014-12-14T04:16:20.542Z"),
            is_actv: 1,     un: "yano",
            last_payment_date: ISODate("2014-12-14T04:16:20.544Z"), //df val
            upd_at: ISO$D("2014-12-14T04:16:20.543Z"),  //df val
            cms: [], "__v": $NInt(0) }

        Ur({f: 'J', l: 'Y', cr_at:  $D(), is_actv: 1,
            t : 'Invalid', a:2, int_n:'xyz'}).s() // many vd errors!

        //   add cust vd to meta.likes ?
        UrSc.pt('meta.likes')
            .vd(function (v){return(!v||v<0)?0:1}, 'Like<0!')

        u1 =  Ur({
            f: 'J', l: 'Y', cr_at:  $D(),
            is_actv: 1, un: 'yano',
            t: 'Level1', a: 5,
            int_n: 'int_xetro',
            meta: {likes: -1}
        }) // throws vd-z

// /For Cus  Vd: undefined,
        // null wont throw z (saving ob below, !z)
//  If want $U to work either of these mets would work
//  likes: {t: $N, q: 1}, // or  likes: {t: $N, df : -1},
    }
    runValidators=function(){

//  Validators for u(),  u1()
//   op  to  run validators on u(), u1() calls
// -  op  on ->  runs validators for all fd that  u() call tried to $set|$unset.
        bfSc = $Sc({
            steak: _S({q: 1, e: ['flank', 'ribeye']}),
            eggs: _N({q:1, mn:2})

            // sc  has 4 validators.
// Both  steak/eggs fds must be spec
//   steak must be either "flank" or "ribeye",
// eggs must >= 2
        })

        Bf = $M('bf', bfSc, 'bfs');
        Bf.u({},
            upds= {
                $unset:{steak:1},
                $set:{eggs:0}
            },

            cb)

// By default this operation will succeed.
// However, if you set the runValidators option as shown below,
// you will get an error.
        Bf.u({}, upds, {
                runValidators: true
            }, //**

            function(z) {
                $l(z.errors['steak'].message);
                $l(z.errors['eggs'].message);
                // The above error messages output:
                // "Path `steak` is required.,
                // "Path `eggs` (0) is less than minimum allowed value (2)."
            })
//Why do you need to opt-in to run validators on update()?
// Update vldrs cant access doc being updated
// (might not be in your application's memory at all)
// Because of this,
// update validators have two subtle diffs
        /* (1) update validators only check $set,$unset ops (!$push,$inc) */

        Bf.u({},
            upds= {
                $inc: { eggs: -1 }
            }, cb)    // The update will succeed even if eggs is 2.
        // (2) in doc validators, THIS refs to  doc being updd


        bfSc = $Sc({
            steak: {t: $S, q: 1,
                enum: ['flank', 'ribeye'],
                vd: function(v) {// `this` ~ global ob!
                    if (this.eggs >= 4) {return v === 'flank'}
                }
            },
            eggs: {t: $N, q: 1, min: 2}
        })


//Why does this validation pass?
        $M('bf',
            bfSc, 'bfs').u1(
            {},
            { $set: { steak: 'ribeye', eggs: 4 } },
            { runValidators: 1 }, function(z){}
        )



        // !z
// Update validators run using .call(null),
// so in  cust validator,
// THIS  refers to global
// ob  rather than a doc
// If update validators
// were enabled by default,
// they would break
// because many custom validators use this.
//you will need to specify
// the runValidators op
// every time you call update()
// to run update validators
// (unless u set a df op)
// pre and post hooks for count(),find(),
// f1(), f1AndUpdate(), and update().
// Much like the existing mw for save(),
// validate(), and remove(),
// query mw allows you to define
// business logic for handling queries
// at the schema level.
// Query mw will also enable plugins
// to transform queries.


    }
    f1UpValPlug=function(){
        // query mw allow you to enable update validators by df
        // dont want to spec runValidators flag  for each call to f1AndUpdate?
        bfSc.pre('f1AndUpdate', function(n){
            this.op.runValidators = 1;
            n()
        })
        $M('bf', bfSc, 'bfs').u1({}, {
                $set: { steak: 'ribeye', eggs: 1 } }
            , function(z) { $l(z) })  // "VdZ:Path`eggs`(1)<min allowed val(2)


//You can even create a mg plugin to handle this for you:
// Any schema with this plugin will run validators on `f1AndUpdate()` by default.
        runValidatorsPlugin = function(sc, ops) {
            sc.pre('f1AndUpdate', function(n) {
                this.op.runValidators = 1; n()
            }) }
        $Sc({
            steak: _S({r:1, e:['flank', 'ribeye'] }),
            eggs: _S({r:1, min:2})
        }).plugin(runValidatorsPlugin);
    }

}
// plg: 1 fn, 2 pm: (sc,op): manips a sc (!touch mds, docs, !qu, wr to db)
//MyPlugin=function(sc, op) {}
CrdAtPlg=function(sc) {sc.pt('createdAt', $D).df($n())} //Add path to the sc
lastMod = function (sc, op){sc.A({lMod:$D})
    sc.prSv(function(n){this.lMod=$D.n()})
    if(op&&op.ix){sc.pt('lMod').ix(op.x)}}

//sc.plg(lastMod,{ix:1})
QuProfilerPlg=function(sc){
//  Add mw (pre/post hooks)
    sc.prF(function(){
        this.start=$n()})
    sc.poF(function(){
        var t=$n()-this.start; $l('Qu time: '+t)
    })
}

InvertDfToJSONOpsPlg=function(sc){//Tweak a sc op
    sc.sTO({
        g:1, // getters
        v:1, // virtuals
        m:1, //minimize
        d:1 //depopulate
    })
}
Per = $M('per', perSc, 'people')
Band=$M('band', bandSc, 'bands')
axl = Per({ n: 'Axl' })
gnr =  Band({
    n: "Guns",
    lead: axl._id
})
Band.f1({n:"Gun"}).P('lead').$(function(z,band){
    $l(band.lead.n)}) // Axl

// Update vdrs   allow you to make   apps more performant
// by allowing you   to run vd w/o loading  whole doc  into mem
//Ev time you call Band.f/f1,  autopop will pop  lead field for you.
hidden=function(){

    //Modifying Sc Options://  use case : defining tf fns for tO()
    // mongoose-hidden  / (gives  way to always hide  spec fds from tO() OP)
// A classic example is hiding certain sensitive fields
// before sending the object to the client,
// like pws or email addresses
    uSc.plg(function HidePlugin(sc){
        var toHide = []
        sc.eP(function(ptN, scTy) {
            if (scTy.op && scTy.op.hide) {
                toHide.push(ptN)}
        })
        sc.op.tO.transform = function(dc,returnedOb){
            toHide.forEach(function(ptN) {
              // Loop over all fields to hide
                var sp = ptN.split('.'),
                 // Break the path up by dots to find the actual object to delete
                    obj = returnedOb
                _.e(sp, function(s){
                    if(!obj){return}; obj=obj[s]})
                delete obj[sp[sp.length - 1]]})
            return ret}
    }) //  tf fn  loops through all  fds marked "hide",  dels them in   final ob
    Ur=$M('Ur',urSc,'urs');
    ur=Ur({n:'V',pw:'pwd'}) // Prints `{ "name": "Val" }`. No pw!
    $l(J.s(ur.tO()))
}
geo=function(sc, op){

    //  Adding Extra Fields
//  enables you to efficiently qu
// for a random doc  in your cl

//An efficient way to pull a random doc  from a cl
// is to assoc  a randomly gend point (x, y)
// with each doc (such that 0 <= x, y < 1)
// To gene  a random doc,
// you pick another random point (a, b),
//       ask mg for the doc  closest to (a, b).
// You can do this efficiently
// by creating a 2dsphere ix on the (x, y) points.


    op = op || {}
    // Can specify a random function other than M.random
    randFn = op.fn || M.random
    randCoords = function () { return [randFn(), randFn()] }
    // Create a path 'random' that's a GeoJSON point
    field = {}
    field[   op.path || 'random' ] = {ty: { ty: $S, df: 'Point' },
        coords: { ty: [$N], df: randCoords } }
    var index = {};
    index[op.path || 'random' ] = '2dsphere'
    // Add the 'random' field and a 2dsphere index on it
    sc.add(field)
    sc.ix(index)

    // Attach a `findRandom()` helper to the sc for syntactic sugar
    sc.stcs.fRnd = function (conds, fields, op, fn) {
        if (!conds || F(conds) ) {conds = {}}
        conds[pt] = conds[pt] || {
                $near: { $geometry: {
                    ty: 'Point',
                    coordinates: randCoords() } } }
        return this.find(conds, fields, op, fn)
    }
}