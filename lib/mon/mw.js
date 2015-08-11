//Middleware ~~ pre/post hooks : fns passed control during exec of async fns
// -specd on the sch level
// mw can intercept the process of
// init, validate, save,   remove inst  mets.
// Mw  executed at   instance level
// can be pre or post
//  useful for: -writing plugins -atomizing model logic and avoiding nested blocks of async code
//-complex validation -removing dependent documents (removing a user removes all his blogposts)
// -async defaults, async tasks that a certain action triggers
// -triggering custom events -notifications
//    two types of pre hooks,
// serial: executed one after another,when each mw calls next.
// parallel:  more fine-grained flow control
//  Pre and post save() hooks are
// not executed on update(),findOneAndUpdate(), etc.
// (mg has distinct hooks for these)
// doc-mw,  supported for:  init   validate  save, remove
// THIS refers to the document being updated.
// query-mw,  supported for:  count  find  findOne  findOneAndUpdate   update
//  THIS refers to the query object
//  post mw -  executed after the hooked method
//  -do not directly receive flow control (no next or done cbs are passed to it)
// -are a way to register traditional ev  listeners for these mets

sc=$Sc()

sc.pr('save', function (n) {n()})//serial
$Sc().pr('save', true, function (n, done) {n(); doAsync(done)}) // calling next kicks off the next mw in parall
sc.po('init', function (d){$l(d._id+' initd from db')})
sc.po('vd',function(d){$l(d._id+' vdd,!svd')})
sc.po('sv',function(d){$l(d._id+' svd')})
sc.po('rm',function(d){$l(d._id+' rmd')})
sc.pr('u', function() {//add an updatedAt timestamp to every update() call?
    this.u({$set: { updAt: $D.now() } })
    $l(mg.iQ(this))//true
    this.start = $D.n()})
sc.po('u', function() {$l(this instanceof mg.Qu) // true
    $l('update() took '+($D.n()-this.start)+' ms')})
// if some async operation is q
uSc.pr('s', function (n) {n()})
uSc.pr('s',1, function (n,done) {n(); asyncOper(done) }) //  md ‘s’ will only be called when all asyncOps done.


//   Pre mw exd before  op, ex: a pre-save mw  exd before saving of  doc (good for vds, df val  assignment)
USc.pr('save', function(n) {
    if (z){n()} else {n(new Error('An Error Occured'))}
})

// post mw gets exd after op
//  a post-save mw   exd after doc svd (good for loging  app  logic)
USc.po('save', function(n) {$l(this.isNew? 'new usr crd': 'ur upd details')})



//  can use md isNew prop  to understand whether md inst  was created or updated.

