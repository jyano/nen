d = dc = $mg.Document.prototype
d.g= d.get; d.s= d.set
d.sv= d.S= d.save
d.e=d.eq= d.equals
d.i=d.inspect
d.u= d.update
d.$= d.exec
d.tS= d.toString
d.o=d.tO = function(ob){return this.toObject($obOp(ob))}
d.j= d.tJ = function(ob){return this.toJSON($obOp(ob))}
d.p=d.P = d.populate; d.pd = d.populated; d.$p=d.$P= d.execPopulate
d.v = d.validate; d.vS = d.validateSync; d.iv = d.invalidate
d.iN = d.isNew //: Bool flag specg if doc new.
d.iI = d.isInit
d.iS = d.isSelected
d.iM= d.isModified
d.iDM= d.isDirectModified
d.mM= d.markModified
d.mP= d.modifiedPaths


$sDc=function(d){
    d.mx = d.mixed
    d.mx.t = d.mx.type
    d.s = d.schema // : doc's schema
    //  d.id  //:=getter fn that rets it's _id.2S() (op to disable) //see ops: new Schema({n:$S}, {id:false})
    d.z = d.errors //: Hash of cur vd z's
    return d

}
doc=function() {
    d.i() //Helper for $l

//select
    d.iI(pt) // pt was initialized?  >> $B
    d.iS(pt)// was pt was selected  in  source qu  which initd this dc? >> $B
    M.f1().s('n').$(function (z, d) {
        d.iS('n') // true
        d.iS('age')  // false
    })


//ob
    d.tJ({})// pass met res to JSON.stringify(dc).
    d.tO // accepts the same op  as d.tO.
// To apply  op to ev  dc of your sc by df
// set your scs toJSON   op  to  same arg
    sc.s('toJSON', {virtuals: true})
    d.tO([op])  // >> js ob (doc->pob  ready for MG storage)
//Buffers are converted to instances of mongodb.Binary for proper storage.
//options
//getters apply all getters (pt and virtual getters)
//virtuals apply virtual getters (can override getters option)
//minimize remove empty obs (defaults to true)
//transform a transform function to apply to the resulting document before returning
//depop depop any popd pts, replacing them with their original refs (defaults to false)
//versionKey whether to include the version key (defaults to true)
//retainKeyOrder keep the order of ob keys.
// If this is set to true,
// Object.keys(new Doc({ a: 1, b: 2}).tO()) will always produce ['a', 'b'] (defaults to false)
    virtGetters = function () {


        d.tO({
            //  pt getters
            getters: true,
            virtuals: false
        })

        d.tO({
            virtuals: true//   virt gtr
        })

        d.tO({
            getters: true //     pt AND virt gtrs
        })

        sc.s('tO', {virtuals: true})// define at sc-lvl (set default ops)

    }


//equal
    d.eq(d) // dc stores  same data as doc?
//dcs  eq  when have matching _ids, unless neither
//dc has  _id, in which case this fn falls back to using
//deepEqual()


    modified = function () {

        d.iDM(pt) // >> $B
        //Rets true if pt was directly set and modified, else false.
        d.s('docs.0.title', 'changed')
        d.iDM('docs.0.title') // true
        d.iDM('docs') // false


        d.iM(pt)// was this dc modified?
//If pt is given,
// checks if a pt or any full pt containing pt
// as part of
// its pt chain has been modified.
//
        d.s('docs.0.tt', 'changed')
        d.iM()// true
        d.iM('docs')// true
        d.iM('docs.0.tt')// true
        d.iDM('docs')//false

        d.mM(pt)//Marks the pt as having pending changes
// to write to the db. -good for Mixed types.
        d.mx.type = 'changed';
        d.mM('mixed.type');
        d.S() // changes to mixed.type are now persisted
        d.mP() //>> [modified pts]


    }

    pop = function () {


        dc.$P()//>>  prm that resolves to  dc when popln done
        //Explicitly executes popul,  good for ES6  integration.

        pr = d.P('company').P({
            pt: 'notes',
            select: 'text',
            match: /airline/,
            model: 'modelName',
            options: opts
        }).$P()
        d.$P()


    }
}
        // Pop does not occ  unless   cb is passed.
//    Passing the same pt 2nd time
// overwrites prev pt ops


//d.P([pt], [cb])
//Populates dc refs,
// executing  cb when complete.
//
//[pt] <String, Object> The pt to pop or an options ob
//    [cb] <Function> When passed, population is invoked
//Returns:
//
//    <dc> this
//See:
//
//    Model.pop
//Example:
//

        /*
        d.P('company')
            .P({
                pt: 'notes',
                match: /airline/,
                select: 'text',
                md: 'modelName'
                op: op
            }, function (z, ur) {
                assert(d._id == ur._id)
                // dc itself is passed
            })

        d.P(pt)               // not executed
        d.P(op);           // not executed
        d.P(pt, cb)     // executed
        d.P(op, cb); // executed
        d.P(cb);          // executed


//    Popln only occurs if cb passed or $P()
// called
//    -rePassing same pt overwrites   prev  pt ops
        d.pd(pt) // >> <A, OId, N, Bf, S, U>
//Gets _id(s) used during pop  of the given pt.


        M.f1().P('aut').$(function (z, dc) {
            $l(d.aut.n)         // Dr.Seuss
            $l(d.pd('aut')) // '5144cf8050f071d979c118a7'
        })//If  pt !popd  >> $U


    }


    Transform = function () {
//We may need to perform a transformation
// of the resulting ob based on some criteria,
// say to remove some sensitive information or
// return a custom ob. In this case we set the
// optional transform function.


//Transform fns receive three args:
//doc:  dc being converted
//ret:  converted pob
//op: op in use (either sc op or the op passed inline)

//// specify the transform sc option
        if (!sc.op.tO) sc.op.tO = {};
        sc.op.tO.transform = function (doc, ret, op) {
//    // rm   _id of ev  doc  bf returng  res
            delete ret._id
        }
//
//// w/o the transformation in the sc
        d.tO(); // { _id: 'anId', name: 'Wreck-it Ralph' }
//
//// with the transformation
//d.tO(); // { name: 'Wreck-it Ralph' }
//With transformations we can do a lot more than remove properties. We can even return completely new customized obs:
//
        if (!sc.op.tO) {
            sc.op.tO = {};
        }
        sc.op.tO.transform = function (doc, ret, op) {
            return {movie: ret.name}
        }
//// w/o the transformation in the sc
        d.tO(); // { _id: 'anId', name: 'Wreck-it Ralph' }
//
//// with the transformation
        d.tO(); // { movie: 'Wreck-it Ralph' }
//Note: if a transform function returns undefined,
// the return value will be ignored.
//
//    Transformations may also be applied inline,
// overridding any transform set in the op:
//
        function xform(d, ret, op) {
            return {inline: ret.n, custom: true}
        }

//// pass the transform as an inline option
//d.tO({ transform: xform });
// { inline: 'Wreck-it Ralph', custom: true }
//Note: if you call tO and pass any op,
// the transform declared in your sc op
// will not be applied.
// To force its application pass transform: true
        if (!sc.op.tO) {
            sc.op.tO = {}
        }
        sc.op.tO.hide = '_id'
        sc.op.tO.transform = function (dc, ret, op) {
            if (op.hide) {
                op.hide.split(' ')
                    .forEach(function (prop) {
                        delete ret[prop]
                    })
            }
        }
        d = new Doc({_id: 'anId', secret: 47, n: 'rek-it'});
        d.tO()                                        // { secret: 47, name: 'Wreck-it Ralph' }
        d.tO({hide: 'secret _id'})                 // { _id: 'anId', secret: 47, name: 'Wreck-it Ralph' }
        d.tO({hide: 'secret _id', transform: true}); // { name: 'Wreck-it Ralph' }
//Transforms
// -applied only to   dc,not   sub-docs
//   - avail  for tJ
//    -During save, cus op !applied to   dc  bf   sent to db
        d.tS() //Helper for $l

    }


//get,set
    d.g('age')
// dynamic casting -to str "// >>  pt(age)  val
    d.g('age', $S) //27 -> '27'
    d.s(pt, v)
//pass ob to set
    d.s({pt: v, pt2: {pt: v2}})
// on-the-fly type cast -to str
    d.s(pt, v, $S)
    d.s(pt, v, $N, {})
//set w op - strict mode
    d.s(pt, v, {strict: false})

//update
    d.u(dc, op, cb)
    d.u(
        {$inc: {wheels: 1}},
        {w: 1}, cb
    )


//remove
//Model#remove([cb]) >> prm
//Removes this doc  from  db
    d.rm(function (z, d) {
        m.id(d._id, _lD)// null (because its gone!)
    })
    d.rm().then(fn).onRejected(fn)
//As an extra measure of flow control,
// remove will return a Promise (bound to fn if passed)
// so it could be chained,
// or hooked to recive errors


//Model#save([op], doc, fn) >> prm Saves this doc
    d.sold = Date.now()
    d.sv(function (z, product, nAffd) {
    })// nAffd -> 1 when doc found/updated, o/w 0
    $db = $mg.createConnection()
    M = $db.m('M', sc)
    $db.on('error', cb)// if vd fail and no cb, vdZ emits to md's creator conn
    M.on('error', cb)//  add z listener  to md for 'closer' z handling
    d.sv().then(function (d, nAffd) {
    }).onRejected(function (z) {
        assert.ok(z)
    })
    docSave = function () {
//As an extra measure of flow control,
// save will return a Promise
// (bound to fn if passed)
// so it could be chained,
// or hook to recive errors
    }
    retainKeyOrderToObOp = function () {
//For legacy reasons,
// mongoose stores object keys
// in reverse order on initial save.
// That is, { a: 1, b: 2 } will be saved as
// { b: 2, a: 1 } in MongoDB.
// To override this behavior,
// set the toObject.retainKeyOrder option
// to true on your schema.
    }

    where = function () {
//Model#$where(argument)
//
//Creates a Query and specifies a $where condition.
//
//    Parameters:
//
//argument <String, Function> is a javascript string or anonymous function
//Returns:


//Query.$where
//Sometimes you need to query for things in
// mongodb using a JavaScript expression.
// You can do so via find({ $where: js }),
// or you can use the mongoose shortcut method $where
// via a Query chain or from your mongoose Model.

        M.$where('this.comments.length &gt; 5')
            .$(function (z, docs) {
            });
    }

    increment = function () {
//Model#increment()
//make increment of this docs version     See:  versionKeys

        M.id(id, function (z, d) {
            d.incr();
            d.sv(fn)
        })
    }


    //M#model(name) >>   another Model inst
    d.md('User').id(id, cb)


    validate = function () {

        //  doc.validate,
        //which forces validation test to run
        // and returns a promise
        // ( internally, called pre save.. see: sc.v )
        d.v(function (z) {
            if (z) {
                Z(z)
            } else {
            }
        });
        //  doc.validateSync
        d.vS()
        //  Execs regstrd vd rules
// (skipping asynch vds)
// for this doc // useful for synch vd
// Rets mgZ if z's during vd, else $U
        z = d.vS();
        if (z) {
            Z(z)
        } else {
        }
        //invalidate
        //Marks a pt as invalid, causing validation to fail.
//pt <String> the field to invalidate
//errorMsg <String, Error>
// the error which states the reason `pt` was invalid
//value <Object, String, Number, T> optional invalid value
//The errorMsg argument will become the message of the ValidationError.
//    The value argument (if passed) will be available
// through the ValidationError.value property.
//    d.invalidate('size', 'must be less than 20', 14);
        d.invalidate('size', 'must be less than 20', 14)
        d.validate(function (z) {
            $l(z)
        })
        prints = {
            message: 'Validation failed',
            name: 'ValidationError',
            errors: {
                size: {
                    path: 'size',
                    value: 14, message: 'must be less than 20',
                    name: 'ValidatorError',
                    type: 'user defined'
                }
            }
        }
        d.iv(pt, zMs, value)

    }


//Model(docValOb) //Model constructor
    modelEvents = function () {
//    error: If listening to this event,
// it is emitted when a document
// was saved w/o passing a cb and an error occurred.
// If not listening,
// the event bubbles to the connection
// used to create this Model.

//    index: Emitted after Model#ensureIndexes completes.
// If an error occurred it is passed with the event.
//    Provides the interface to MongoDB collections
// as well as creates document instances.

    }
    modelMetaProps = function () {
//    Model#base:  Base mg inst md uses

//    Model#collection:  Collection the model uses.

//    Model#db:  Conn  the md uses

//    Model#discriminators: Registered discriminators for this model.

//    Model#modelName:The name of the model

//    Model#schema:Schema the model uses.

    }


}

subdocs=function(){

    //subdoc - ch doc of a par's doc arr, w own schema  // ~normal doc, BUT: !saved indiv, (saved when  top-level parent doc  saved)
    _lScc=function(z){$l('scc!')}

    Pa = $M('Pa', paSc= $Sc({
        ch:[{n: $S}]
    }))
    pa = Pa({
        ch: [{n:'Mat'}, {n:'Sar'}]
    })
    pa.ch[0].n = 'Mat'
    pa.s(fn)

//Find sub-doc?
// DocArrs have special meth
// for looking up doc by its _id
    doc = pa.ch.id(id)

    addSubDoc=function(){
//mgArr mets:     push     unshift     addToSet   cast args to their proper tys transparently:
// create a comment
        pa.ch.push({ n: 'Liesl' })
        sD = pa.ch[0]; $l(sD) // { _id: '501d', n: 'Liesl' }
        sD.isNew // true
        pa.s(_lScc)
        //create: cr subdoc (w/o adding it to arr)
        doc = pa.ch.cr({ n: 'jy' })
    }

    //Rmg docs.. Ea subdoc has it's own rm met .
    d = pa.ch.id(id).rm()
    pa.s(fn)

    Ur = $M('Ur', uSc)
    ur =  Ur({un: 'derp',  sts: [{text:'Hi!'}] })
    ur.sv(fn)



    //Querying  //If you know the sub-doc position in the arr, easy to query it
    sD = ur.sts[0];  $l(sD.text); //This will output: Hello world!

    //If you know its id it is also really simple
    sD= ur.sts.id(id) //where id is sD _id
    //If you only know text more complicated

    Ur.f1(
        {'sts.text': 'Kaha!!!'},
        function(z, ur){
            if(ur){ $l(ur.un) }
        }
    ) //yano



// Adding sub-sub-docs
    sD.likes.push({un: ur.un}).s(fn)

    //Query sub-sub-docs
// This is were trouble comes,
// bc there  not really a way in mg to query them.
// You can use   position in  arr  if you know it,
// but you can't really track this
// Remember it is an arr,
// so you can do this to query them:
    for(i in sD.likes){  if(likes[i].un == un){} }
    //un is the variable of the un of the like you want to find

    eD= EmbeddedDocument
    eD.inspect() //Helper for console.log
    eD.invalidate//(pt,z(S|Z))>>$B  Marks pt as invld (vd will fail)
    eD.ownerDocument() // >> top level doc  of this subdoc
    eD.parent() //     >> this subdoc's par doc
    eD.parentArray//() >> this subdoc's par arr
    eD.remove(fn)//  rm subdoc from its par arr
    eD.markModified//(pt) Marks embedded doc modified
    d=blgPo.cms.id(hexstring); d.mixed.type = 'changed'; d.mM('mixed.type')

            */