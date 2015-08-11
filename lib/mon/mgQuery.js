q=$mg.Query.prototype
q.a = q.all
q.$= q.exec
q.l= q.lean
q.e= q.equals; q.ne;
q.A= q.and;
q.or;q.nor
q.x= q.exists
q.o=  q.setOptions
q.p= q.P = q.populate
q.s= q.select;   q.lm = q.limit
q.so= q.sort; q.sk= q.skip
q.f = q.find; q.f1 = q.findOne
q.r= q.rm = q.remove; q.r1 = q.findOneAndRemove
q.u = q.update; q.u1 = q.findOneAndUpdate
q.w = q.where
q.gt;q.ge=q.gte; q.lt; q.le=q.lte; q.mod
q.in; q.nin; q.sl= q.slice;  q.win = q.within //not within?
q.co = q.count
q.tC = q.toConstructor
q.ca = q.cast  //cast this qu to the sc of a md
q.d = q.distinct
q.eM = q.elemMatch
q.m = q.merge
q.re = q.regex
q.iS = q.selected; q.iSE = q.selectedExclusively
q.bat=function(v){//limit
    if(U(v)){return this.batchSize}
    this.batchSize = !! v
    return this
}
q.tlb=function(t){
    if(U(t)){
        return this.tailable
    }
    this.tailable = !! t
    return this
}
q.sz=function(pt,v){
    return this.size(pt,v)
}
advanced=function() {
//performance
    q.maxScan(val)
//indexing
    q.snapshot
    q.hint
//stream

    q.sr=function(a){if(D(a)){a=F(a)? a: J.s}
        return this.stream(a||null)}
    q.srP=function(p2){return this.sr().p(p2)}
}
//storage
    q.comment(val)
//replica
    q.slaveOk
    q.read(pref, [tags])
//geo
    q.polygon([path], [coordinatePairs...])
    q.maxDistance([path], val)
    q.circle([path], area)
    q.geometry(object)
    q.near([path], val)
    q.nearSphere
    q.use$geoWithin
    q.box(val, Upper)
    q.intersects([arg])
}

$QuOp=function(ob){ob=ob||{};var o={}
    if(D(ob.l)){o.lean = !!ob.l}
    return o
}
paginate=function() {
    $mg.$Q.paginate = function (pg, lm, cb) {
        var qu = this
        return qu.sk(pg).lm(N(lm) ? lm : 10).$(function (z, ds) {
            return qu.model.count({type: 'jungle'}, function (z, tot) {
                return cb(null, tot, ds)
            })
        })
    }
    //  call as the last of  chain

}
$sQu=function(q){
    q.sE=q.selectedExclusively
    q.sI=q.selectedInclusively
    q.s=q.select
    return q
}
$sUpOp=function(ob){ob=ob||{}; var o={}
    if(D(ob.n)){o.new=!!ob.n}//new=F - true-> ret modified (!orig) dc
    if(D(ob.u)){o.upsert=!!ob.n}//upsert =F - cr ob if dont exist?
    if(F(ob.s)){o.sort=ob.s}//sort: how to sort which 1 doc to upd if >1 docs found
    return o
}
$Qu=function(r){
    var q= new Query()
    q.r=q.read
    q.l=function(l){
        if(U(l)){return this.lean()}
        this.lean(l?true:false)
        return this}
    if(r){return q.r(r)}
    return q
}
$quOp=function(o){
    o.t= o.tailable
    o.b= o.batchSize
    o.c= o.comment
    o.l= o.lean
    o.lm= o.limit
    o.h= o.hint
    o.sc= o.mxscan
    o.sk= o.skip
    o.so=o.t= o.sort
    o.sn= o.snapshot
    o.sO= o.slaveOk
    o.s= o.safe
    return o
}
$sQu=function(q){

    q.u= function(o,v){var q=this,k
        if(S(o)){
            k=o
            o={}
            o[k]=v
        }
        q.update(o)
    }

    return q
}
$agg=function(){
    $ag = function () {}
    $ag.p = function (ob) {
        var $prj = {}
        $prj.$project = ob
        return $prj
    }
    $ag.m = function (ob,v) {
        var $prj = {}, tmp
        if(S(ob)){
            tmp=ob
            ob={}
            ob[tmp]=v
        }
        $prj.$match = ob
        return $prj
    }
    $ag.m.gt=function(n){return {$gt:n}}

    $ag.g = function (ob) {
        var $prj = {}
        $prj.$group = ob
        return $prj
    }
    $ag.sk = function (ob) {
        var $prj = {}
        $prj.$skip = ob
        return $prj
    }
    $ag.s = function (ob) {
        var $prj = {}
        $prj.$sort = ob
        return $prj
    }
    $ag.r = function (ob) {
        var $prj = {}
        $prj.$redact = ob
        return $prj
    }
    $ag.o = function (ob) {
        var $prj = {}
        $prj.$out = ob
        return $prj
    }
    $ag.g = function (ob) {
        var $prj = {}
        $prj.$group = ob
        return $prj
    }
    $ag.l = function (ob) {
        var $prj = {}
        $prj.$limit = ob
        return $prj
    }
    $ag.u =  $ag.uw =  function (ob) {
        var $prj = {}
        $prj.$unwind = ob
        return $prj
    }
    $ag.g.s = function (s) {return {$sum: s}}
    $ag.op =  function (op) {
        op = op || {}
        var o = {}
        o.allowDiskUse = D(op.allowDiskUse) ? op.allowDiskUse : D(op.d) ? (op.d ? true : false) : true
        o.explain = D(op.explain) ? op.explain : D(op.e) ? (op.d ? true : false) : false
        if (op.cursor) {
            o.cursor = op.cursor
        }
        if (N(op.c)) {
            op.c = {b: op.c}
        }
        if (O(op.c)) {
            op.c.batchSize = N(op.c.batchSize) ? op.c.batchSize : op.c.b
            o.cursor = op.c
        }
        return o
    }
};$agg()
$popOp=function(ob){ob=ob||{}
    var o={}
    o.path = ob.p
    o.select = ob.s
    o.match  =ob.m
    o.options =ob.o
    return o
}


find=function(){
//db.cl.find(query, projection)
//Selects docs in a cl
// and returns a cursor to the selected docs. [1]
//

//query
// doc
// Optional.
// Specifies selection criteria using query operators.
// To return all docs in a cl, omit this cpam or pass an empty doc ({}).
//    projection	doc	Optional.
// Specifies the fields to return using projection operators.
// To return all fields in the matching doc, omit this cpam.
//    Returns:	A cursor to the docs that match the query criteria.
// When the find() method “returns docs,” the method is actually
// returning a cursor to the docs.
//    If find() includes a projection argument,
// the matching docs contain only the projection fields and the _id field.
// You can optionally exclude the _id field.
//
//    Executing find() directly in the mongo shell
// automatically iterates the cursor to display up to the first 20 docs.
// Type it to continue iteration.
//
//To access the returned docs with a driver,
// use the appropriate cursor handling mechanism for the driver language.
//
//    The projection cpam
// takes a doc of the following form:
//
//{ field1: <boolean>, field2: <boolean> ... }
//The <boolean> value can be any of the following:
//
//    1 or true to include the field.
// The find() method always includes the _id field
// even if the field is not explicitly stated to return
// in the projection cpam.
//0 or false to exclude the field.
//    A projection cannot contain both include and exclude
// specifications, except for the exclusion of the _id field.
// In projections that explicitly include fields, the _id field
// is the only field that you can explicitly exclude.
//
//    db.cl.find() is a wrapper
// for the more formal query structure
// that uses the $query operator.
// This operator is necessary to work with docs
// containing a field name query containing
// an embedded doc.



//Find All Docs in a Cl
//The find() method with no pams
// returns all docs from a cl
// and returns all fields for the docs.
// For example, the following operation
// returns all docs in the bios cl:
    db.bios.find()
//Find Docs that Match Query Criteria
//To find docs that match a
// set of selection criteria,
// call find() with the <criteria> cpam.
// The following operation returns all the docs
// from the cl products
// where qty is greater than 25:


    db.products.f({
        qty: {$gt:25}
    })


//Query for Equality
//    The following operation returns docs
// in the bios cl where _id equals 5:
//

    db.bios.f( { _id: 5 } )

//Query Using Operators
//The following operation returns docs in the bios cl
// where _id equals either 5 or ObjectId("507c35dd8fada716c89d0013"):
//

    db.bios.f(
        {
            _id: { $in: [ 5,  ObjectId("507c35dd8fada716c89d0013") ] }
        }
    )



//Query for Ranges
//    Combine comparison operators to specify ranges.
// The following operation returns docs with field between value1 and value2:
//

    db.cl.find( { field: { $gt: value1, $lt: value2 } } );
//Query a Field that Contains an Array
//If a field contains an array and your query has multiple
// conditional operators, the field as a whole will match
// if either a single array element meets the conditions
// or a combination of array elements meet the conditions.
//
//    Given a cl students that contains the following docs:
//
//{ "_id" : 1, "score" : [ -1, 3 ] }
//{ "_id" : 2, "score" : [ 1, 5 ] }
//{ "_id" : 3, "score" : [ 5, 5 ] }
//The following query:
//

    db.students.f({score: {$gt:0, $lt:2}})



//Matches the following docs:
//
//{ "_id" : 1, "score" : [ -1, 3 ] }
//{ "_id" : 2, "score" : [ 1, 5 ] }
//In the doc with _id equal to 1, the score: [ -1, 3 ] meets the
// conditions because the element -1 meets the $lt: 2 condition and
// the element 3 meets the $gt: 0 condition.
//
//    In the doc with _id equal to 2, the score: [ 1, 5 ] meets the
// conditions because the element 1 meets both the $lt: 2 condition
// and the $gt: 0 condition.



//    Query Arrays
//Query for an Array Element
//The following operation returns docs in the bios cl
// where the array field contribs contains the element "UNIX":
//

    db.bios.f({
        contribs: "UNIX"
    })

//Query an Array of Docs
//The following operation returns docs
// in the bios cl
// where awards array contains an embedded doc element
// that contains the award field equal to "Turing Award"
// and the year field greater than 1980:

    db.bios.f({
        awards: {
            $elemMatch: {
                award: "Turing Award",
                year: { $gt: 1980 }
            }
        }
    })

//Query Embedded Docs
//Query Exact Matches on Embedded Docs
//The following operation returns docs
// in the bios cl where the embedded doc name
// is exactly { first: "Yukihiro", last: "Matsumoto" },
// including the order:

    db.bios.f({

        n: {first: "Yukihiro", last: "Matsumoto"}
    })

//The n field must match the embedded doc exactly.
// The query does not match docs
// with the following n fields:

//{ first: "Yukihiro", aka: "Matz", last: "Matsumoto"}
//{ last: "Matsumoto", first: "Yukihiro"}


//Query Fields of an Embedded Doc
//The following operation returns docs
// in the bios cl where the embedded doc n
// contains a field first with the value "Yukihiro"
// and a field last with the value "Matsumoto".
// The query uses dot notation to access fields
// in an embedded doc:

    db.bios.f({
        "n.first": "Yukihiro",
        "n.last": "Matsumoto"
    })

//The query matches the doc where the n field
// contains an embedded doc with the field first
// with the value "Yukihiro"
// and a field last with the value "Matsumoto".
// For instance, the query would match docs
// with n fields that held either of the following values:
//{ first: "Yukihiro", aka: "Matz", last: "Matsumoto"}
//{ last: "Matsumoto", first: "Yukihiro"}



//Projections
//The projection cpam specifies which fields to return.
// The cpam contains either include or exclude specifications,
// not both, unless the exclude is for the _id field.
//
//    Specify the Fields to Return
//The following operation returns all the docs
// from the products cl where qty is greater than 25
// and returns only the _id, item and qty fields:
//
    db.products.f(
        {qty:{$gt:25}},
        {item:1,qty:1}
    )


//The operation returns the following:
//
//{ "_id" : 11, "item" : "pencil", "qty" : 50 }
//{ "_id" : ObjectId("50634d86be4617f17bb159cd"), "item" : "bottle", "qty" : 30 }
//{ "_id" : ObjectId("50634dbcbe4617f17bb159d0"), "item" : "paper", "qty" : 100 }
//The following operation finds all docs in the bios cl and returns only the n field,
// contribs field and _id field:
//
    db.bios.f(
        { }, { n: 1, contribs: 1 }
    )

//Explicitly Excluded Fields
//The following operation queries the bios cl and returns all fields
// except the first field in the n embedded doc and the birth field:
//
    db.bios.f(

        { contribs: 'OOP' },
        { 'n.first': 0, birth: 0 }
    )

//Explicitly Exclude the _id Field
//The following operation excludes the _id and qty fields from the result set:
//
    db.products.f(
        { qty: { $gt: 25 } },
        { _id: 0, qty: 0 }
    )
//The docs in the result set contain all fields except the _id and qty fields:
//
//{ "item" : "pencil", "type" : "no.2" }
//{ "item" : "bottle", "type" : "blue" }
//{ "item" : "paper" }


//The following operation finds docs in the bios cl and returns only the n field and the contribs field:

    db.bios.f(
        { },
        { n: 1, contribs: 1, _id: 0 }
    )
//On Arrays and Embedded Docs
//The following operation queries the bios cl and returns the last field in
// the n embedded doc and the first two elements in the contribs array:
//
    db.bios.f(
        { },
        {
            _id: 0,
            'n.last': 1,
            contribs: { $slice: 2 }
        }
    )

//Iterate the Returned Cursor
//The find() method returns a cursor to the results. In the mongo shell,
// if the returned cursor is not assigned to a variable using the var keyword,
// the cursor is automatically iterated up to 20 times to access up to the
// first 20 docs that match the query. You can use the DBQuery.shellBatchSize
// to change the number of iterations. See Flags and Cursor Behaviors. To iterate manually,
// assign the returned cursor to a variable using the var keyword.
//
//With Variable Name
//The following example uses the variable myCursor to iterate
// over the cursor and print the matching docs:
//
    myCursor = db.bios.f()
//
//myCursor
//With next() Method
//The following example uses the cursor method next() to access the docs:
//
    myCursor = db.bios.f( );
//
    myDoc = myCursor.hasNext() ? myCursor.next() : null;
//
    if (myDoc) {myName = myDoc.n; $l(tojson(myName));}
//To print, you can also use the printjson() method instead of print(tojson()):
//
    if (myDoc) {myName = myDoc.n; $d(myName)}

//With forEach() Method
//The following example uses the cursor method forEach()
// to iterate the cursor and access the docs:
//

    myCursor = db.bios.f( );
//
    myCursor.forEach(printjson);
//Modify the Cursor Behavior
//The mongo shell and the drivers provide several cursor methods that call on the cursor
// returned by the find() method to modify its behavior.
//
//    Order Docs in the Result Set
//The sort() method orders the docs in the result set.
// The following operation returns docs
// in the bios cl sorted in ascending order by the n field:
//
    db.bios.f().sort({n:1})
//sort() corresponds to the ORDER BY statement in SQL.
//
//    Limit the Number of Docs to Return
//The limit() method limits the number of docs in the result set. The following operation returns
// at most 5 docs in the bios cl:
//
    db.bios.f().limit( 5 )
//limit() corresponds to the LIMIT statement in SQL.
//
//    Set the Starting Point of the Result Set
//The skip() method controls the starting point of the results set. The following operation
// skips the first 5 docs in the bios cl and returns all remaining docs:
//
    db.bios.f().skip( 5 )
//Combine Cursor Methods
//The following statements chain cursor methods limit() and sort():
//
    db.bios.f().sort( { n: 1 } ).limit( 5 )
    db.bios.f().limit( 5 ).sort( { n: 1 } )
//The two statements are equivalent; i.e. the order in which you chain the limit()
// and the sort() methods is not significant. Both statements return the first five docs,
// as determined by the ascending sort order on ‘n’.
//
}

read=function(){
    find=function(){
        //Q.f(crt,cb) >> $Qu
// qu only execd, if cb
// excd query >> [dc]
        q.f({n:'j'}).f(cb)

    }
    findOne=function(){
//Q.f1([crtOb], [proj$Qu], [cb]) >> $Qu
// 1st found doc  passed to cb.
//Passing  cb execs qu  // res of qu is 1 dc

    }
// dc may be null if no dc matd


    q=M.wh({ c: 'w' })
    q.f1(function (z, k) {if (k) { }})

//Q.r1([cond], [op], [cb])

//Issues a mg findAndModify rm command.
//pm:[conds] $O [options] $O [cb] $F
//rets:$Qu this See:mg
//Finds matg dc, rms it, passing found dc (if any) to cb.
//Executes immediately if cb is passed.
//ops:
//sort: if multiple docs are found by the conds, sets the sort order to
//choose which doc to update

//A.wh().r1([conds], [op], cb) // executes
//A.wh().r1([conds], op)  // >> Query



    findOneAndUpdate=function() {
//Q.findOneAndUpdate([qu][dc][ops][cb]) //pm:[qu] <$O,$Qu>[doc]  >> $Qu
//(Issues Mg findAndModify upd comm)

        //Finds  matg dc, upds it (acc2 upd arg), pass ops,
// rets   found dc (if any) to the cb.
//  if cb passed, qu  execs immed


        q.u1([conds], [upd], [op], cb) // execs
        q.u1(conds, upd, [op])  // -> Qu
        q.u1(upd, cb)  // -> Qu
        q.u1(upd)  // -> Qu
        q.u1() // -> Qu
    }

    _dd=function(z,dd) {$l(dd[0].owner.n)}

//q.select(O|S) //use which fds (qu "proj")? >> $Qu
//- will flag that path as excluded, + forces path inclsn (* useful for pts excluded at sc lvl)
    q.sel('a b')// incl a, b, exclude other fields
//  may use ob not, useful w keys prefixed"-"
    q.sel('-c -d')// exclude c,d
    q.sel({a:1,b:1})// force icn of fd xcd at sc  lvl
    q.sel({c:0,d:0})// q.sel('+path') // Cannot be used with distinct().
    q.s() // fd sel made? >> $B
    q.sE() // xcv fd sel made? >> $B
    q.sI()  // icv fd sel made?  >> $B
    M.f1().P('owner').x(dd)// Max
    pop=$sPopOp({
        p:'owner',s:'n',m:{c:'b'},
        o:{so:{n:-1}}
    })

    M.f().P(pop).exec(dd) // Zoopa
    M.f().P('owner', 'n', null,{so:{n:-1}}).ex(_dd) // Zoopa

    q.sE() // false
    q.s('-n')
    q.sE() // true
    q.sI() // false
    q.sI() // false
    q.s('n')
    q.sI() // true


    q.$where(js)
// Specs fn|exprs to pass to MG qu ys pm:js <$S,$F> rets:$Qu this See:$where
    q.$wh('this.cms.length===10 || this.n.length === 5')
    q.$wh(function(){
        return this.cms.length === 10 || this.n.length === 5
    })
//Only use $where when you have cond that cannot be met using  MG ops ($lt)
    q.all([pt],v)
//Specs an $all quCond.pm:[path] $Sval $NSee:$all1 arg? ->, mst-rcntly-passd2-where pt used.
    q.batchSize(val) //Specs the batchSize option. Pams:val $N See:batchSize
    q.batchSize(100) //Cannot be used with distinct()
    q.comment(val)//Specs the comment option. pm:val $N See:comment  Cannot be used with distinct()
    q.comment('login qu')
    q.distinct([fd], [criteria], [cb])
//Declares or executes a distict() operation.pm:[fd] $S[criteria] <$O, $Qu>[cb] $F  rets:$Qu thisSee:distinct  Passing a cb executes the q.
    distinct(fd, conds, cb)
    distinct(fd, conds)
    distinct(fd, cb)
    distinct(fd)
    distinct(cb)
    distinct()
    q.elemMatch(pt, criteria)
// Specs $elemMatch cond
// pm:path <String, Object, Function>
// criteria <Object, Function>
// rets:$Qu thisSee:$elemMatch
    q.elemMatch('comment',
        {
            author: 'autobot', votes: {$gte: 5}
        })

    q.wh('comment').elemMatch({ author: 'autobot', votes: {$gte: 5}})
    q.elMat('comment', function (elm) {
        elm.wh('author').eq('autobot');
        elm.wh('votes').gte(5)
    })

    q.wh('comment').elemMatch(function (elem) {elem.wh({ author: 'autobot' });elem.where('votes').gte(5)})
    q.eq(val) //Specs the complementary comparison value for paths specified with where() pm:val $Orets:$Qu this
    User.w('age').eq(49) //  same as User.where('age', 49);
    q.exc([oper], [cb]) //Executes the qu  pm:[operation] <$S,$F>[cb] $F rets:<Promise>
    prom = q.ex();
    prom  = q.exc('update')
    q.x(cb)
    q.x('find',cb)
    q.exists([pt],v)  // Specs $exists cond  pm:[path] $Sval $N rets:$Qu thisSee:$exists
// { n: { $exists: true }}
    M.wh('n').exists()
    M.wh('n').exists(true)
    M.f().exists('n') // { n: { $exists: false }}
    M.wh('n').exists(false);
    M.f().exists('n', false);


    q.hint(val) // Sets qu hints.// pm:val $O a hint object rets:$Qu this See:$hint
    q.hint({ indexA: 1, indexB: -1}) //Cannot be used with distinct()

    q.in([pt], val)  //Specs $in quCond.pm:[path] $S val $N See:$in   1 arg? ->, mst-rcntly-passd2-where pt used.
//  Qu#lean(bool=true)Sets the lean option.
//  rets:$Qu this
//Docs returned from queries w
//lean op  enabled are pobs,
//  not MongooseDocuments.
//  They have no save method,
//getters/setters or other Mongoose magic applied.
    $Qu().l() // true
    $Qu().l(1)
    $Qu().l(0)
    Md.f().lean().exec(function (z, docs) {
        docs[0] instanceof $mg.Document
    })// false

//This is a great option
// in high-performance read-only scenarios,
//especially when combined with stream.
    q.limit(val)  //Specs the maximum number of dcs the qu will return.   pm:val $N   q.limit(20)    Cannot be used with distinct()
    q.maxScan(val)  // Specs the maxScan option.  pm:val $N See:maxScan q.maxScan(100)  Cannot be used with distinct()
    q.merge(source) //Merges another Qu or conds object into this one.pm:source <Qu, Object> rets:$Qu this
//When a Qu is passed, conds, fd sel and options are merged.
    q.mod([pt], val) // Specs a $mod condpm:[path] $Sval $Nrets:$Qu thisSee:$mod
    q.pop(pt,[sel],[md],[mat],[op])//rets:$Qu  //Specs paths which should be popd w  other docs
//pm:
// path <Object, String> either the path to populate or an object specifying all parameters
// [select] <Object, String> Fd sel for the population qu
// [model] <Md> The n of the model you wish to use for population. If not specified, the n is looked up from the Schema ref.
// [match] $O Conditions for the population qu
// [options] $O Options for the population qu (sort, etc)
    q.regex([pt],v)//Specs$regex quCond.pm:[path] $Sval $N See:$regex1 arg? ->, mst-rcntly-passd2-where pt used.
    q.setOptions(options)
//Sets qu options.
// pm:options $OOptions:tailable *sort *limit *skip *
//maxscan *batchSize *comment *snapshot *hint *slaveOk *lean *safe
//* denotes a qu helper method is also available

// q.skip(num): of dcs to skip // !use w q.d
    q.sk(100).lm(20)




//Qu#slice([path], val)  Specs$slice projection for an arr.pm:[path] $S
//val $N number/range of elements to slice
//rets:$Qu this
//See:mongodb $slice
    q.sl('comments', 5)
    q.sl('comments', -5)
    q.sl('comments', [10,5])
    q.w('comments').sl(5)
    q.w('comments').sl([-10,5])
    q.snapshot()   //Specs this qu as  snapshot >> q //Cannot be used with distinct()
    q.snp() // true
    q.snp(1)
    q.snp(0)




    q.tailable(bool)
//Sets the tailable option (for use with capped collections).
//pm:bool $B =true
//See:tailable
    q.tlb() // true
    q.tlb(1); q.tlb(0)
//Cannot be used with distinct()
    q.then()  // Executes this qu and returns a promise
//rets:<Promise>  Qu#toConstructor()
//Converts this qu to a customized,
//  reusable qu constructor with all arguments and options retained.
//  rets:$Qu subclass-of-Qu
// Create a qu for adventure movies and read from the primary
// node in the replica-set unless it is down, in which case we'll
// read from a secondary node.
    qu = Movie.f({tags:'adv'}).read('primaryPreferred')
// create a custom Qu constructor based off these settings
    Adv = q.toConstructor();
// Adv  now  subclass of $mg.Qu, works same way but w
// df qu pams and ops set

    Adv().$(cb)
//  narrow down qu res  w prev setgs
    Adv().wh({ n: /^Life/ }).$(cb)


// since Adv is a stand-alone constructor
// we can also add our own
// helper methods and getters without impacting global queries
    Adv.prototype.startsW=function(prfx){
        this.wh({n:$RE('^'+prfx)});return this}

    $O.defineProperty(

        Adv.prototype,

        'hiRated',

        {
            get: function () {
                this.wh({ rating: { $gt: 4.5 }});
                return this}
        }

    )



    Adv().hiRated.startsW('Life').$(cb)





    q.where([path], [val]) //Specs path for use with chaining.pm:[path] <String, Object>[val] <T> rets:$Qu this
// instead of writing:
    User.f({age: {$gte: 21, $lte: 65}}, cb);
// we can instead write:
    User.w('age').gte(21).lte(65);
// passing quConds is permitted
    User.f().where({ n: 'vonderful' })
// chaining
    User.w('age').gte(21).lte(65)
        .where('n', /^vonderful/i)
        .where('friends').slice(10)
        .exec(cb)



    cn = mg.createConnection('mongodb://127.0.0.1/blog')


    Po = $M('poSc', poSc )
    Po.fi({ tt: /Test/i }, function (z, p) {

        if (!p || p.length == 0) {

            Po({
                tt: 'Test Title',cat_id: 1, date: new $D() + ''
            }).s(function(z){$l('Post Svd') })
        }

        else {
            _.e(p, function(row){


                $l(
                    'tt: ' +   row.g('tt') + 'in cat: ' +
                    row.g('cat_id') + ' with _id: ' +  row.g('_id')
                )

            }) }
    })





    Po.fi(
        {"_id": obID=$oID('54549d4b2db33af6045d4ec1')},
        function(z, docs) {
            if (!z) {if (docs.length > 0) {
                row = docs[0]
                Po.update({'_id': row.g('_id')},
                    {$set: {tt: 'Updated Tt'} },
                    function(z) {if (!z) {$l('Upd Done');}});}
            else {$l('Not Found')}}})

// To del a row,  use the remove() function, just like save() and find().

    InsertMultipleRowsTogetherAndCbWhenDone=function(){

        recs = []
//mock it up (10 inserts)
        _.t(10, function() {
            recs.push({tt: 'Title Number ' + M.random(1000), 'cat_id': 1})
        })
        insertAndNotify(recs, function(z) {$l('all done!!'); process.exit() })
        function insertAndNotify(recs, cb) {
            var inserted = 0
            _.e(recs,   function(rec){
                Po({tt: row.tt, cat_id: row.cat_id * 1, date: new $D() + ''})
                    .s(function(z, row) {inserted++;  if (inserted == recs.length) {cb()}})
            })
        }
        // A Faster Mass Insert using async  // use async library.
        function insertAndNotify(recs, main_cb) {
            async.eachLimit(recs, 5, function(row, cb) {
                Po({tt: row.tt, cat_id: row.cat_id * 1, date: new $D() + ""})
                    .s(function(z, row) {cb()})},  function(z) {main_cb(z)})
        }
// In the above function,
// we are doing a parallel processing of 5 insert at a time
// hence will increase speed.
// The same concept can be extended to remove and update as well.
        //We will see some of the advance operations which can be done using mg.
    }


    Md.f1({_id: $oID(md_id) }) //Load By ID  find info based on ObjectID?


//    use lean to get 'bare bone' json ob
// Model.find().lean().exec(function(z,d){$l(d); //json ob  })


//other qu examples
    Md.fi().sort({date:-1}).skip(5).limit(10).exec(function(z,d){})
    Md.fi({$or : [
        {isd : '54853e4e905437385a8b4567'}, {store : '547ffe9c90543793128b4568'}
        // isd, store in $or

    ],
        // date is $and.
        date : '2014-12-12'})




// docs can be retrieved through sev md static helper mets

// can spec qu conds  two ways for each qu met:
//  if( cb fn  passed ){ immed -> cb(res)
// f1->doc fi->[docs] count-> num docs  update->num affected docs
// }

// else {an inst  of Qu(w qu builder interface) returned,
// and can be used as a promise via then() }
//  Qu enables you to build up a qu
// using chaining syntax,
// rather than specifying a JSON object.

    Per  = $M('Per', perSc)

    Per.f1({'n.l':'Ghost'},// fi each per with a lN matching 'Ghost',
        'n occ', // selecting the `n` and `occ` fds
        function(z,per){
            $l(per.n.f+' '+per.n.l+' is a '+per.occ)
        })

    likes=['vaporizing','talking']


    Per.f({occ:/host/}) // qu builder (~)
        .wh('n.l').eq('Ghost')
        .wh('a').gt(17).lt(66)
        .wh('likes').in(likes)


    Per.f({ // JSON (~)
        occ:/host/,
        'n.l':'Ghost',
        a:{$gt:17,$lt:66},
        likes: {$in: likes}
    })

// (both)
        .lm(10)
        .so({occ:-1})//.sort('-occ')
        .s({n:1, occ:1})//.select('n occ')
        .$(cb)

//  select($B) - Specs df path sel  bhr
// ( you can spec  if   path (by df)
// should be included / excluded  from qu results  )

    Per = $Sc({

        bio: $$S({
            select: 0
        })
    }) // `bio` excluded from qu results (by df)




    $M('Per',Per).f1(function(z,p){$l(p.bio)})// undefined





    $M('Per', Per = $Sc({n: {t: $S, sel: 1}, a: $N
    })).f1().sel('a').ex(function (z, p) {
        $l(p.isSel('a')) // 1
        $l(p.isSel('n')) // 1
    })

// can  be overridden
    Per = $Sc({ bio: { t: $S, sel: 0 }})
    $M('Per', Per)
        .f1().sel('bio').ex(cb) // bio will be selected


    q.count([crtOb], [cb])
// crtOb =  mg sel[cb] $F >> $Qu t //Passg cb exs qu

    countQu = M.wh({'c':'r'}).count()
    q.count({c:'b'}).count(cb)
    q.count({c:'b'},cb)
    q.wh('c', 'r').count(function(z,n) {
        $l('num kittens: '+n) })

    q.sz([pt],v)
//Specs$size quCond.pm:[path] $Sval $NSee:$size
// 1 arg? ->, mst-rcntly-passd2-where pt used.
    M.wh('tags').sz(0).$(function(z,d){assert(A(d)); $l('dcs w 0 tags',d)})

    q.gt([$S pt], $N)// Specs a $gt quCond //q.gte   lt   lte
//1 arg? ->,  mst-rcntly-passd2-wh pt used.
    M.f().wh('age').gt(21)
    M.f().gt('age',21)

    logic=function(){

        q.and([{ c: 'g' }, { sts: 'ok' }])//Specs args for a $and cond.   //Pams:arr $A arr of conds' rets:   $Qu this See: $and
        q.nin([pt], val) // $nin quCond.  // pm:[path] $S// val $NSee:$nin// 1 arg? ->, mst-rcntly-passd2-where pt used.
        q.nor([{ c: 'g' }, { sts: 'ok' }])//  Specs args for a $nor cond.     // pm:arr $A arr of conds rets:$Qu this
        q.or([{ c: 'r' }, { sts: '!!!' }]) //Specs args for an $or cond.    pm:arr $A arr of conds  // rets:$Qu thisSee:$or
    }

    q.sort(arg)// >> $Qu this See: cu.sort // Cannot be used with distinct()
//1) arg=O vals:asc,desc,1,-1   q.so({f:1,t:-1})// so by"f"asc,'t'desc
//so ord -> '-prefex'?desc:asc
//2) arg=S sp-delim ptN ls  q.so('f -t')


    Ur.f({age: {$gte:21, $lte:65}}).w({n: 'vonderful' })

    Ur.w('age').ge(21).le(65).w('n', /^vonderful/i)//.w('n',/^b/i)
        .w('buds').sl(10).$(fn)

    Ur.f().elemMatch("boxes", {
        a:"foo",
        b:"bar"
    })


//within is geo!


//q.$where(js) //js fn/S/expression to pass to MG qu  sys
    w='this.comments.length === 10 || this.name.length === 5'
    w=function(){return this.comments.length === 10 || this.name.length === 5}
    q.$where(w)
//  Only use $where when you have cond other MGopers ($lt..) !handle
    q.all(pt,num)   //  When called with one argument, the most recent path passed to where() is used.

    q.and(cndArr) // specs args for $and cond .
    q.and([
        {c:'g'}, {sts:'ok'}
    ])