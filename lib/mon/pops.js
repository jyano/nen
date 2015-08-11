$popQuOp=function(ob){ob=ob||{}; var o={}
    o.l = ob.limit
    o.s= ob.sort
    return o
}
$popOp=function(ob){
    if(A(ob)){return _.m(ob, function(ob){
        return $popOp(ob)
    })}

    ob=ob||{}; var o={}
    o.p = ob.path//  space delimited pt(s) to pop
    o.s= o.select //  select:  fd to select
    o.M = ob.match  //    qu conds to match
    o.m = ob.model  //    n of   md to use for pop
    
    if(D(o.o)) {
        ob.options = $popQuOp(o.o) 
    }  //     qu ops (sort, limit)
    return o
}
$nRf=function(ref){return {type:$N,ref:ref}}
$nRfs=function(ref){return [$nRf(ref)]}
$iRf=function(ref){return {type:$mg.S.T.ObjectId,ref:ref}}
$iRfs=function(ref){return [$iRf(ref)]}
$sRf=function(ref){return {type:$S,ref:ref}}
$sRfs=function(ref){return [$iRf(ref)]}
$bRf=function(ref){return {type:$mg.S.T.Buffer,ref:ref}}
$bRfs=function(ref){return [$iRf(ref)]}


// Mg supports  ref of a doc  to another doc via DBRef
// (mg uses the ObjectID schema type and ref prop )
// ObjectId -added as a  primary surrogate key to each ob
// ( refd as _id in the data ) ( used to refer to obs in other cls )
//  ref attr  must match md def's n ( _id-t  <> ref-t ) (or err: MissingScZ: Sc !regd for md "Player")
// valid refs: ObjectId,N,S,Buff


//mg also supports the pop  of parent doc  with the child doc  when querying db
// Population (of docs) ~   auto-replacing  spec paths in doc with doc(s) from other cls
// can pop: 1+ doc, 1+ pobs,  r all objects returned from a query.
// when paths are popped, the _id itself is gone..
// (b/c got replaced w new doc ob  (via sep. query)
// same with arrays ( to  get orig _ids (used during pop),  use  doc.populated() met  )
// -pop-docs are fully functional (unless lean:true) (rm actually rmvs it from db)
// -doc.pop() and query.pop() use  Md.pop() to pop docs
// can manually pop existing mg doc path(s) with doc.pop() met
// (but  only  for single refs, ![refs])
//   to limit fields (Populate Partial Objects)
// returned for the popd docs ( display_name of the included League object),
//  pass  the usual field n syntax as the 2nd g  to the pop method
// If we have one or many mg docs or even plain objects
// (like mapReduce output), pop them with Md.pop() met
// to pop 1 field in the query for an object,  s
// pecify field's name in a string to pop fn:

jy =  Per({

    _id: 0,
    n: 'Jy',
    a: 100
})


jy.s(function () {



    Bk({n: "deal", aut: jy._id}).s()


})

//   pop  bk's aut using the query builder:
Bk.f1({n: 'deal' })
    .P('aut').$(function (z, bk) {
        $l('by:'+ bk.aut.n) }) // -> by:Jy


//manually pop

Bk.f1({ n: 'the deal' },
    function(z, bk) {
        bk.aut = jy;
        $l(bk.aut.n)
    }) //-> Jy





 //spec. fields
 Bk.f1({ n: /timex/i }).P('aut', 'n')
 .$(function (z, bk) {
         $l('aut %s', bk.aut.n);  $l('auts age: %s', bk.aut.a)

 })

// only return the Pers n       aut: Jy  auts age: null



Bk.f().P('fans aut').$()
Bk.f().P({
    path: 'fans',//What if we wanted to pop our fans array
    match: { a: { $gte: 21 }}, // based on their age,
    select: 'n -_id', // select just their ns,
    options: { limit: 5 } //  return at most, any 5 of them?
}).$()




 // Refs to children
 // where by jy's bks?
 // no bk objects were ever 'pushed' onto jy.bks.
 // There are two perspectives here.
// way 1 // if we push jy's bks to him (he knows his bks)  // like so.. jy.bks.push(bk1);  jy.s(fn);
 // then.. this allows us to perform a find and pop combo:
 
Per.f1({ n: 'Jy' }).pop('bks')
    .ex(function (z, per) { $l(per) }) // problem: must keep ptrs in sync
// way 2: dont pop; instead, directly find() the bks we want
 Bk.f({ aut: jy._id }).$(function(z,bks){
  $l('bks arr: ', bks)})

//update ref
jy = Per({ n: 'jy' })
jy.s(function (z) {
    
    bk.aut = jy;  $l(bk.aut.n) // -> jy
  
    bk.s(function (z) {
      Bk.f1({ n: /timex/i })
          .P({
              path: 'aut',
              select: 'n'
          })
          .$(function (z, bk) { $l('aut: ' + bk.aut.n)   }) // aut->jy
    })
})

u1 =  Ur({f: 'J', l: 'Y', em: 'jy@alt.com'})
u2 =  Ur({f: 'R', l: 'O', em: 'ro@a.mil'})
 
u1.s(function (z){       _id1 = u1._id
    
    u2.s(function (z) {  _id2 = u2._id
        
        cm_ids = []
        
        
        cm =  Cm({text: 'Cm1', by: _id2})
        cm.s(function(){
            cm_ids.push(cm._id)
            
            cm2 =  Cm({text: 'Cm2', by: _id2});
            cm2.s(function(){
                cm_ids.push(cm2._id)
                Ur.update(
                    {_id: _id1},
                    {$set: {cms: cm_ids}}, 
                    function (z) {$l('done')} )
            })
        })
    })})
// we inserted 2 users, 2 cms, Now   use ‘pop’  to auto-load relationship

Ur.f({ em: 'jy@alt.com' })
    .P('cms')
    .P({
        path: 'cms',
        match: {text: /Cm/i}
    })
    .lean().$(fn)

    // cm_ids  will be auto-replaced w cm obs




// reverse? cm-obs -> cm_ids?
u1 =  Ur({ f: 'J', l: 'Y', em: 'yano@sis.org', cms: []  })
u1.cms.push( Cm({ text: 't1'}))
u1.cms.push( Cm({ text: 't2'}))
u1.s()  //  will auto replace ‘cms’ w  ObjectIds.



    Plr = $M('Plr', plrSc)
    Leag = $M('Leag', {
        dp_n: $S,
        aut: {t: $id, r:'Plr'},
        plrs: $Cl('Plr')
    })
    Plr.f1({ _id: 'abc123' }).P('leags', 'display_name').$(z, plr)
        //  *Data Write - when a new League is created,
        // it needs a aut Player ref  saved  and
        // the creating Player  will automatically join the leag:
    leag = {dp_n: myLeagN, aut: curPlr._id}
    Leag.cr(leag, function (z, leag) {
            Plr.update({_id: curPlr._id},
                {$push: {leags :leag._id}},
                function (z, numAffected, raw) {p.j(leag)})})
    Plr.f1({ _id: 'abc123' }).P('leags').$(z, plr)
    // ->  json (leags popd -> [League obs]  )
//  to pop multiple paths at the same time, pass sp-delim $S of path names       .pop('aut plrs')
//  - sign in the select clause explicitly removes the field from  results.
    Plr.f().sel('-leags').$(fn)




// $push is a special update attribute that  appends new els to a md’s arr.







// create  schema for blog posts called  PostSchema
// (containing aut field (will be popd by  User md inst)
    $M('Post', PoSc)
    // create a new blog post? retrieve|create a user inst,
    // create a po inst, assign the po  aut = user inst
    ur=Ur(); ur.s()
    po = Po(); po.aut=ur; po.s()
    Po.f().P('aut').$(fn)







popSingOb=function(){


    Ur.id(id, function(z,ur){

        Ur.P(
            ur,
            $popOp([     {p:'job', M:{x:1}, s:'n'},      {p:'notes', m: 'override', o:{l: 10 }}      ]),
            cb
        )

    })
}




popArrOfObs=function() {
    Ur.f(

        match,

        function (z, urs) {
            prm = Ur.P(urs, $popOp( [{       p: 'job',                   M: {x: 1}, s: 'n'}]))
            prm.th($l).e()}

    )
}


popMultPobs=function() {


    guns=[
        {_id:3,n:'wip'},
        {_id:8,n:'bom'}
    ]


    Gun.P(

        {n:'IJ', gun:3}, $popOp({p:'gun',m:'Gun'}),

        function (z,ur){
            $l(ur.gun.n)
        }
    )// whip


    
    Gun.P([{n:'IJ', gun: 3}, {n: 'Bat', gun: 8}],
        $popOp({p: 'gun'}),
        function (z, urs) {_.e(urs, function (ur) {$l( urs.n +' uses '+ ur.gun.n)})})  //  IJ uses whip // Bat uses bam


// Note that we didn't need to specify the Gun model because
// we were already using it's P() method.
}



redo=function(){

    UrSc=$Sc({_id:$N,

        un:$S,

        //children
        bks: $iRfs('Bk')//  pop will use md.Bk (only Bk_id fds here)
    })



    BkSc = $Sc({

        n:$S,

        //parent
        by: $nRf('Ur'), //   $nRf  MATCHES UrSc._id (_id/ref must ~type)


        //children
        fans: $nRfs('Ur')
    })




    Bk  = $M('Bk', BkSc)
    Ur = $M('Ur', UrSc)
    //   Saving refs to other docs works 
    // same way you normally save props, 
    // just assign   _id val:
    ur = Ur({_id:0, n:'jan'})
    ur.save(function (err) {
        Bk({
            n:"Once",
            by: ur._id    
            // assign the _id from the ur
        }).save(cb)
    })
    //   Population
    Bk.f1({n:'Once'}).P('by').$(function(z,bk){$l('by '+bk.by.n)})//  "by jan"
    //     Arrays of refs? Just call the populate method on the query //  see document#populated()

    //Setting Populated Fields
    Bk.f1({n:'Once'},function(z,bk){bk.by=jan;$l(bk.by.n)}) // "jan"
    
}
redoPart2=function(){

    //     this only works for single refs. You currently can't manually populate an array of refs.

    //    Field selection

    //   What if we only want a few specific fields returned for the populated documents? This can be accomplished by passing the usual field name syntax as the second argument to the populate method:

    Bk
        .f1({ n: /timex/i })
        .P('by', 'name') // only return the Urs name
        .$(function (z, bk) {
            $l('by '+ bk.by.n);
            // "The creator is jan"
            $l('The creators age is %s', bk.by.age);
            // "The creators age is null'
        })
    //   Populating multiple paths

    //   What if we wanted to populate multiple paths at the same time?

    Bk
        .f()
    .P('fans by') // space delimited path names
        .$()
    //    In mongoose >= 3.6, we can pass a space delimited string of path names to populate. Before 3.6 you must execute the populate() method multiple times.

    Bk.f().P('fans').P('by').$()
    //   Query conditions and other options

    //   What if we wanted to populate our fans array based on their age, select just their names, and return at most, any 5 of them?

    Bk.f().P({
        
        path: 'fans',
        match: { age: { $gte: 21 }},
        select: 'name -_id',
        options: { limit: 5 }
    }).$()
    
     

}

part3=function(){


    //  Refs to children

    //   We may find however, if we use the jan object, we are unable to get a list of the bks. This is because no bk objects were ever 'pushed' onto jan.bks.

    //       There are two perspectives here. First, it's nice to have jan know which bks are his.

    jan.bks.push(bk1);
    jan.save(fn);
    //   This allows us to perform a find and populate combo:

    Ur.f1({n: 'jan' }).P('bks') // only works if we pushed refs to children
        .$(function(z,ur){$l(ur)})
    //   It is debatable that we really want two sets of pointers
    // as they may get out of sync.
    // Instead we could skip populating 
    // and directly find() the bks we are interested in.

    
    Bk.f({by:jan._id}).$(function(z,bks){$l('bks arr: ',bks)})


    //    Updating refs
    //   Now that we have a bk we realized that the by was incorrect.
    // We can update refs the same as any other property 
    // through Mongoose's internal casting:

    guille = new Ur({ n: 'Rigo' });
    guille.save(function (err) {
        bk.by = guille;
        $l(bk.by.n);
        // "Rigo" in mongoose >= 3.6
        // see https://github.com/Automattic/mongoose/wiki/3.6-release-notes

        bk.save(function (z){
            Bk.f1({ n: /timex/i })
                .P({ path: 'by', select: 'name' })
                .$(function (z, bk) {$l('by ',+ bk.by.n) })
                    // "The creator is Rigo"
        })
    })




    //   The documents returned from query population become fully functional,
    // removeable, saveable documents unless the lean option 
    // is specified. Do not confuse them with sub docs. 
    // Take caution when calling its remove method
    // because you'll be removing it from the database, not 
    // just the array.
    //    Populating an existing document
    //    If we have an existing mongoose document and want
    // to populate some of its paths, mongoose >= 3.6 supports
    // the document#populate() method.
    //       Populating multiple existing documents
    //    If we have one or many mongoose documents or even
    // plain objects (like mapReduce output), we may populate
    // them using the Model.populate() method available in 
    // mongoose >= 3.6. This is what document#populate() 
    // and query#populate() use to populate documents.

}


populate = function () {
//    Model.populate(docs, op, [cb(err,doc)])
//
//    Populates document references.
//
//        show code
//    Parameters:
//
//        docs <Document, Array> Either a single document or array of documents to populate.
//        op <Object> A hash of key/val (path, op) used for population.
//                                                                        [cb(err,doc)] <Function> Optional cb, executed upon completion. Receives `err` and the `doc(s)`.
//    Returns:
//
//        <Promise>
//    Available op:
//
//        path: space delimited path(s) to populate
//    select: optional fields to select
//    match: optional query conditions to match
//    model: optional name of the model to use for population
//        op: optional query op like sort, limit, etc
//    Examples:
//
//// populates a single object
//        User.findById(id, function (err, user) {
//            var opts = [
//                { path: 'company', match: { x: 1 }, select: 'name' }
//                , { path: 'notes', op: { limit: 10 }, model: 'override' }
//            ]
//
//            User.populate(user, opts, function (err, user) {
//                $l(user);
//            })
//        })
//
//// populates an array of objects
//    User.find(match, function (err, users) {
//        var opts = [{ path: 'company', match: { x: 1 }, select: 'name' }]
//
//        var promise = User.populate(users, opts);
//        promise.then($l).end();
//    })
//
//// imagine a Weapon model exists with two saved documents:
////   { _id: 389, name: 'whip' }
////   { _id: 8921, name: 'boomerang' }
//
//    var user = { name: 'Indiana Jones', weapon: 389 }
//    Weapon.populate(user, { path: 'weapon', model: 'Weapon' }, function (err, user) {
//        $l(user.weapon.name) // whip
//    })
//
//// populate many plain objects
//    var users = [{ name: 'Indiana Jones', weapon: 389 }]
//    users.push({ name: 'Batman', weapon: 8921 })
//    Weapon.populate(users, { path: 'weapon' }, function (err, users) {
//        users.forEach(function (user) {
//            $l('%s uses a %s', users.name, user.weapon.name)
//            // Indiana Jones uses a whip
//            // Batman uses a boomerang
//        })
//    })
//// Note that we didn't need to specify the Weapon model because
//// we were already using it's populate() method.
}
