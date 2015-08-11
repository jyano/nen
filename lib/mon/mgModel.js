m= md = $mg.Model.prototype

m.c=function(){var m=this,g=G(arguments), o,res
    o= g.f
    res =  m.create(o)
    return res



    /*
     //create Model.create(doc(s), [fn]) Shortcut: cr  new Doc that is autoSvd to  db if valid
     M.cr({n: 'j'}, {n: 's'}, function (z, j, s) {
     })// pass indiv docs
     M.cr([{n: 'j'}, {n: 's'}], function (z, urs) {
     j = urs[0];
     s = urs[1]
     })// pass  arr
     M.cr({n: 'j'}).then(function (j) {
     }) // no cb? -> >> prm
     */


}
m.f=function () {
    var m = this, g = G(arguments), o

    o = F(g.s) ? {cnd: g.f, fn: g.s} :
        F(g.t) ? {cnd: g.f, sl: g.s, fn: g.t} :
        {cnd: g.f, sl: g.s, op: g.t, fn: g[3]}
    o.cnd = $sCnd(o.cnd)
    o.sl = o.sl || null
    o.op = op || {}

    //find
    // condOb, [fdsOb], [op], [cb]
    //  ob = condOb = {n:/zi/i, age:$gte(18)}
    //  op = $skip(10)
    //find call always starts w cnd ob, then
    // 1) it could end, or end with fn
    // 2) it could specify fds (S\O|null) and end (or end with fn)
    // 3) spec fds and op (end/ end w fn)
    // if no fn, returns q ob
    // if q ob executed with fn -> prm

    return o.fn ?
        m.find(o.cnd, o.sl, o.op, o.fn) :
        m.find(o.cnd, o.sl, o.op)




//  M.f(cnd, [prj], [op], [cb])



/*
    M.f({

            n: 'john',    //named john
            n: /john/i,   //like john

            age: $gte(18)  //at least 18

        },
        //'name friends', // only select  "n/friends" fields

        //{skip: 10},
        fn
    )

    pr  = M.f({n: /john/i}, null, {skip: 10}).$()
    pr.addBack(fn)

    // { lean: true }
//    Adventure.findById(id, 'name').lean().exec(function (err, doc) {});
*/
}
m.f1=function () {//  Model.findOne([cnd], [prj], [op], [cb])

    var m = this, g = G(arguments), o, res

    // ([cnd], [slOB], [op], [fn]) >> qu
    o = {cnd: g.f, sl: g.s, op: g.t, fn: g[3]}
    o.cnd = o.cnd || {}

    o.op = $QuOp(o.op)

    res = m.findOne(
        o.cnd,
        o.sl,
        o.op,
        o.fn
    )


    src = function () {
        Model.f1 = function f1(cnd, sl, op, fn) {
            if (F(op)) {
                fn = op;
                op = null
            }
            else if (F(sl)) {
                fn = sl;
                sl = null;
                op = null;
            }
            else if (F(cnd)) {
                fn = cnd;
                cnd = {};
                sl = null;
                op = null;
            }
            // get the mongodb collection object
            var mq = new Query({}, op, this, this.collection);
            mq.select(sl);
            if (this.schema.discriminatorMapping && mq.selectedInclusively()) {
                mq.select(this.schema.op.discriminatorKey);
            }

            return mq.f1(cnd, fn);
        }
    }
//cnds cast to resp. ScTys bf command sent
//cnd={n:'cal'}
//M..f1(cnd) //M.f1(cnd,'n')
//M.f1(cnd,'n',$QuOp({l:1}))
// ~ M.f1(cnd).s('n').l() //sel, lean
    return res
}
m.id=m._=function () {
    var m = this, g = G(arguments), o

    function isObNotFn(a) {
        return ( O(a) && !F(a) )
    }

    function isSel(a) {
        return (S(a) || isObNotFn(a))
    }


    o = isObNotFn(g.t) ? {id: g.f, sl: g.s, op: g.t, fn: g[3]} :
        isSel(g.s) ? {id: g.f, sl: g.s, fn: g.s} :
        {id: g.f, fn: g.s}

    o.op = o.op || {}

    return o.fn ? m.findById(o.id, o.sl, o.op, o.fn) :
        m.findById(o.id, o.sl, o.op)


//id (<O|S|N> val of `_id` to qu  by) [sl], [op], [cb]) >> qu
// M.id(id)~M.f1({_id:id}) //f1({_id:id}, sl, op, cn)
//  id  cast based on Sc  bf sending  command

//Adv.id(id,fn) ~  Adv.id(id).$(fn)

//sl:
//Adv.id(id, 'n length', fn)// sel  only   advs n, len
//Adv.id(id, '-length').$(fn) //all fds, except `length`

//Adv.id(id, 'n', {lean:true}, fn)//>> raw obs,!dcs
//Adv.id(id,'n').lean().$(fn)// same


}
m.w=m.wh= function(){var m=this,g=G(arguments), o,res

    o= g.f
    res =  m.where(o)
    return res



    /*
     //    Model.where(path, [val])
     $wh=function(fd,ob){
     ob=ob||{}
     var wh={},o={}

     if(ob.$ge){
     o.$gte=ob.$ge
     }
     if(ob.$le){
     o.$lte=ob.$le
     }
     wh[fd]=o
     return wh
     }
     Ur.f($wh('age', {$ge:21, $le:65}), cb)
     Ur.w('age').ge(21).le(65).w('n',/^b/i).$(cb)
     */
}
m.$w= m.$where
m.m=m.mR=function(){var m=this,g=G(arguments), o,res
    o= g.f
    res =  m.mapReduce(o)
    return res
}
m.u=function () {
    var m = this, g = G(arguments), o
    o = $(g.s) ? {dc: g.f, fn: g.s} :
        $(g.t) ? {cnd: g.f, dc: g.s, fn: g.t} :
        {cnd: g.f, dc: g.s, op: g.t, fn: g[3]}
    o.dc = o.dc || {}
    o.op = $upOp(o.op)
    return m.update(o.cnd, o.dc, o.op, o.fn)

    /*
     //update M.u(cond, doc,  op, [cb])
     M.u({age: {$gt: 18}}, {oldEnough: true}, fn)
     M.u({n: 'Tobi'}, {ferret: true}, {multi: true}, function (z, raw) {
     $l('MG raw resp: ', raw)
     })
     //    up vals are cast to their approp SchemaTypes before being sent.
     //  non-atomicOper-named top level keys, treated as set opers:
     q = {n: 'jy'}
     M.u(q, {n: 'jb'}, {}, cb)
     //// if overwrite op FF, sent as: M.u(q,  { $set: {n:'jb'} }, {}, cb)
     // TT-? sent w/o the $set wrapper
     // helps preventg overwriting all docs in  cl  w  { n: 'jb' }.
     M.u({_id: id}, {$set: {text: 'changed'}}).$()//        update docs w/o waiting for MG resp? dont pass cb, then call exec
     //  cb   receives (err, rawResponse): err is the error if any occurred, rawResponse is the full response from Mongo
     //   DONT use  existing mD inst for  update clause ( won't work, can infinite loop!)
     //   update clause CANT have _id prop,


     */
}
m.u1=function () {



   // A.findOneAndUpdate()                             // returns Query
//        All top level update keys which are not atomic operation names
// are treated as set operations:
  //  query = {n: 'borne'};
  //  Model.findOneAndUpdate(query, {n: 'jason borne'}, op, cb)
//// is sent as
  //  Model.findOneAndUpdate(query, {$set: {n: 'jason borne'}}, op, cb)
//    This helps prevent accidentally overwriting your document with { n: 'jason borne' }.
//



var m = this, g = G(arguments), o, res

    o = g.f
    res = m.findOneAndUpdate(o)
    return res



//    Model.findOneAndUpdate
//        Options:
//    new: bool - true to return the modified document rather than the original. defaults to false
//    upsert: bool - creates the object if it doesn't exist. defaults to false.
//    sort: if multiple docs are found by the cnd, sets the sort order to choose which doc to update
//    select: sets the document fields to return
    //        All top level update keys which are not atomic operation names
// are treated as set operations:
    //  M.findByIdAndUpdate(id, {n: 'jason borne'}, op, cb)
//
//// is sent as
    // M.findByIdAndUpdate(id, {$set: {n: 'jason borne'}}, op, cb)
//    This helps prevent accidentally overwriting your document with
// { n: 'jason borne' }.
//


}
m.uI=function () {
    var m = this, g = G(arguments), o
    o = {id: g.f, up: g.s, op: g.t, fn: g[3]}
    return m.findByIdAndUpdate(o.id, o.up, o.op, o.fn)



    //Model.findByIdAndUpdate(id, [update], [op], [cb])
//    Issues MG findAndModify update command by a document's _id field.
// findByIdAndUpdate(id, ...)is equivalent to findOneAndUpdate({ _id: id }, ...)
//    Parameters: id <Object, Number, String> value of `_id` to query by [update] <Object>[op] <Object> [cb] <Function>


//    Model.findOneAndUpdate([cnd], [update], [op], [cb])
//    Issues MG findAndModify update command.
//    Parameters:
//        [cnd] <Object>
//        [update] <Object>
//        [op] <Object>
//        [cb] <Function>
//    Finds a matching document, updates it according to the update arg,
// passing any op, and returns the found document (if any) to the cb.

//
//        Options:
//    new: bool - if true, return the modified document rather than the original. defaults to false (changed in 4.0)
//    upsert: bool - creates the object if it doesn't exist. defaults to false.
//    sort: if multiple docs are found by the cnd, sets the sort order to choose which doc to update
//    select: sets the document fields to return


}
m.r=function(){var m=this,g=G(arguments), o,res
    o= g.f
    res =  m.remove(o)
    return res


//remove  Model.remove(cond, [cb]) >> prm
//Cm.rm({tt: 'neato'}, fn)
//Cm.rm({_id: id}).$()
//  sends remove command directly to MG, no goose docs involved -> no e mw (hooks) execd

}
m.rI=function(){


//    Model.findByIdAndRemove(id, [op], [cb])
//   id pam =  <Object, Number, String> value of `_id` to query by
//Issue MG findAndModify remove command by a document's _id field.
// findByIdAndRemove(id, ...) ~ findOneAndRemove({ _id: id }, ...).



    var m=this, g=G(arguments),o
    o={id:g.f,up:g.s,op:g.t,fn:g[3]}
    return m.findByIdAndRemove(o.id,o.up,o.op,o.fn)

}
m.r1=function(){var m=this,g=G(arguments), o,res

    o= g.f
    res =  m.findOneAndRemove(o)
    return res





//    Model.findOneAndRemove(cnd, [op], [cb])
//    Issue MG findAndModify remove command.
//  op  sort: if multiple docs are found by the cnd, sets the sort order to choose which doc to update
//  op  select: sets the document fields to return





}
m.e=m.ix=m.eI=function(){var m=this,g=G(arguments), o,res

    o= g.f
    res =  m.ensureIndexes(o)
    return res



    M.ensureIndexes//([cb])  Sends ensureIndex commands to mongo for each index declared in the schema.



}
m.hy=function(){

    /*
     d=M.hydrate({

     //    create   new Doc from existing raw data,
     // pre-saved in the DB.
     //      doc returned has no paths marked as modified initially.
     //// hydrate previous data into a Mongoose document

     _id: '54108337212ffb6d459f854c',
     type: 'jelly bean'

     })
     */
}
m.ag=function(){

    /*
     M.ag([], [cb])

     //    [...] <Object, Array> aggregation pipeline operator(s) or operator array
     //    [cb] <Function>

     //If a cb is passed,
     // the aggregate is executed and a Promise is returned.
     // If a cb is not passed, the aggregate itself is returned.
     //// Find the max balance of all accounts
     Urs.ag(
     $grp(null, {mxBal: $max('$bal')}),
     $prj({_id:0, mxBal: 1}),
     _lD
     )// [ { mxBal: 98000 } ]

     Urs.ag()
     .group({ _id: null, mxBal: $max('$bal') })
     .select('-id maxBalance').$(_lD)

     */

}
m.discr=function() {

//discriminator   Model.discriminator(discrMdName, discrMdSc)  Adds a discriminator type.
    /*function BaseSc() {
     var g = G(arguments)
     $mg.S.apply(this, g)
     this.add({n: $S, createdAt: $D})
     }
     util.inherits(BaseSc, $mg.S)
     PersonSc = new BaseSc()
     BossSc = new BaseSc({department: $S})
     Person = $mg.m('Person', PerSc)
     Boss = Per.discriminator('Boss', BossSc)
     */

}
m.co= m.n=function(){

//M.count(cnd, [cb])
    //Adventure.count({ type: 'jungle' }, function (err, count) {
//     $l('there are %d jungle adventures', count); })





}
m.ds=function(){
    //    Model.distinct(fd, [cnd], [cb])
//M.distinct('url', { clicks:  $gt(100) }, function(z,res){ass(A(res)) ;$l('uniq urls <= 100 clks', res);})
//q = M.distinct('url').$(cb)

}
m.sr=function(a){
    return this.f().sr(a)
}
m.srP=function(a){
    return this.f().srP(a)
}



$upOp=function(ob){
    ob=ob||{}; var g=G(arguments), o={}
    if(ob.o){o.safe = !! ob.o} //    safe mode (defaults to value set in schema (true))
    if(ob.o){o.upsert = !! ob.o }// cr  doc, if it doesn't match? (false)
    if(ob.o){o.multi = !! ob.o}// should mult docs be updated? (false)
    if(ob.o){o.strict= !! ob.o}//  overrides the strict option for this update
    if(ob.o){o.overwrite = !!ob.o} // disables update-only mode, allowing you to overwrite doc (false)
    return o}
$strOb=function(a){var ob = {};ob[a] = $S; return ob}

$mg.m=function(n,s){var mg=this,Md
    s=S(s)? $strOb(s):s
    return  mg.model(n,s)
}
$M=function(n,sc){
    var Md = $mg.m(n,sc)
    return function(ob){
        return new Md(ob)
    }

    // prob: Cnstr has good static mets, so when i wrap Constr to rid 'new'.. i lose the mets..

}
reqModels=function(){

    mdsPt =__dirname + '/app/models'
    _.e($f.rdS(mdsPt), function(fl){
        require(mdsPt + '/' + fl)
    })
}
$Cl = function (ref) {
    ref = [{type: $id, ref: ref}];
    return ref
}



