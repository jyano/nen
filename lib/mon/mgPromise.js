pr=$mg.Promise.prototype
pr.er=pr.error
pr.rs=pr.resolve
pr.aB=pr.addBack
pr.c=pr.complete
pr.aCb=pr.addCallback
pr.aEb=pr.addErrback

$Pr=function(fn){
    // fn passed to onResolve
    return new $mg.Promise(fn)
}

//mpromise
Promise = require('mpromise');//The exports object is the Promise constructor.
$Pr=function(fn){
   var  p  = new Promise(fn)
    p.ff = p.fulfill
    p.rs= p.resolve
    p.rj= p.reject
    p.oFf= p.onFulfill
    p.oRs= p.onResolve
    p.oRj= p.onReject
    p.th = p.then
    return p
}

p.oRs(function (z, argss) {})


//An mpromise can be in any of three states,
// pending,
// fulfilled (success),
// or rejected (error).
//
// Once it is either fulfilled or rejected it's state
// can no longer be changed.
//

//The constructor accepts an
// optional function which is executed
// when the promise is first resolved
// (either fulfilled or rejected).

fulFill=function() {
    //fulfill  Fulfilling a promise with values:
    p.ff(argss)
//If   pr  already  fulfilled or rejected,
// no action is taken.


//    onFulfill
//To register a function for execution
// when the promise is fulfilled, pass it to onFulfill.
// When executed it will receive the arguments passed to fulfill().
    p.oFf(function (a, b) {
        assert.equal(3, a + b)
    });

    p.ff(1, 2)

//The function will only be called
// once when the promise is fulfilled,
// never when rejected.
//
//    Registering a function with onFulfill
// after the promise has already been fulfilled
// results in the immediate execution
// of the function with the original arguments
// used to fulfill the promise.
//

    p.ff(" :D ");

    promise.oFf(function (arg) {
        $l(arg); // logs " :D "
    })

}
reject=function(){


//    reject Rejecting a promise with a reason:
   promise.rj(reason);
//If the promise has already been fulfilled or rejected,
// no action is taken.


//onReject
 
//To register a function for execution when the promise is rejected, pass it to onReject. When executed it will receive the argument passed to reject().
 p.oRj(function (reason) {assert.equal('sad', reason);})
promise.rj('sad');

//The function will only be called once when the promise is rejected, never when fulfilled.
//    Registering a function with onReject after the promise has already been rejected results in the immediate execution of the function with the original argument used to reject the promise.
  p.reject(" :( ");
promise.oRj(function (reason) {
    $l(reason)})// logs " :( "

}
resolve=function() {
//    resolve Node.js cb style
// promise resolution (z, args...):
    p.rs([reason], [arg1, arg2s])
    //If   pr   already been fulfilled or rejected,
    // no action
//onResolve
//Allows registration of node.js style cbs (z, args..)
// to handle
// either promise resolution type (fulfill or reject).

    p.oRs(function (z, a, b) {
        if (z) {
            $l(z.message)
        } else {
            $l(a + b)
        }
    })
    p.ff(1, 2)// logs 3
    p.rj($z('failed')) // logs "failed"
}
then=function() {
// Creates a new promise and returns it.
// If onFulfill or onReject are passed,
// they are added as SUCCESS/ERROR cbs  to this promise after the nextTick.

    p.th(oFf, oRj)
    p.th(function (arg) {
        return arg + 1;
    })
        .th(function (arg) {
            throw $z(arg + ' z!')
        })
        .th(null, function (z) {
            assert.ok(z instanceof $Z)
            assert.equal('z2:', z.message)
        })
    p.ff(1)


}
end=function() {

//Signifies that this promise was
// the last in a chain of then()s:
// if a handler passed to the call
// to then which produced this promise throws,
// the exception be rethrown.
// You can pass an OnReject handler
// to end so that exceptions will be handled
// (like a final catch clause);
// This method returns it's promise
// for easy use with return.
    p.th(function () {
        throw $z('shucks')
    });
    setTimeout(function () {
        p.ff();
    }, 10)
//    // error was caught and swallowed by the promise returned from
//    // p.then(). we either have to always register handlers on
//    // the returned promises or we can do the following...

//// this time we use .end()
// which prevents catching thrown errors
    p = new Promise;
    setTimeout(function () {
        p.ff()
    }, 10);// throws "shucks"
    return p.th(function () {
        throw $z('shucks')
    }).end(); // <--
//chain
//
//Allows direct promise to promise chaining (especially useful by a outside aggregating function).
// It doesn't use the asynchronous resolve algorithm and so excepts only another Promise as it's argument.
//

}

chain=function(){
    //Allows direct promise to promise chaining
    // (especially useful by a outside aggregating function)
    // . It doesn't use the asynchronous resolve algorithm
    // and so excepts only another Promise as it's argument.
    Pr=function(i) {var p = $Pr();p.ff(i);return p}
    rPr=iPr=$Pr()
    _.t(10,function(i){
        rPr=rPr.chain(Pr(i))
    })
    iPr.ff(); return rPr
}

changeEvNs=function() {
//If you'd like to alter this implementations event names
// used to signify success and failure
// you may do so by setting Promise.SUCCESS
// or Promise.FAILURE respectively.
//Promise.SUCCESS = 'complete';
//Promise.FAILURE = 'err';
}

$Pm=function(cb){var p= new mongoose.Promise; if(cb){p.addBack(cb)}; return p}


 //ex: mg Promise  not working  :

process=function(r,cb){

    var p=$Pm(cb)

    M.f({rt:r},function(z,d){

        var rs = _.b(p.rs, p)
        rs(z, d)
    })

    return p
}




$a.u(

    function (q,p,n) {

        p.lc('myStuff',
            process(q.pt, something)
        )

        $l(p.lc('myStuff'));n()})


        //At some point I am expecting my data to be present,
        // but how can I access it, or get at it?
        
    
    // ANSWERS////


//   exec() returns   Prom,  so   can do:
process = function(r){return M.f({rt:r}).$()}
    

//  Then, when you would like to get the data,
  // you should make it async:
$a.u(function(q,p,n){
           p.lc('stuff',  process(q.pt))
           p.lc('stuff').th(
               function(d){$l(d);n()},
               function(z){})
})


//    can use f() res as prom, w/o needing to call exec. do:
M.f({rt:r}).th(function(m){})

// why do you use p.lc?// can you directly use
a=process(q.pt)

// can use it directly.  MG uses proms,when you call $() on qu
p =M.f({rt:r}).$()




process=function(r,cb){var p=$Pm()
        if(cb){p.addBack(cb)}
        M.f({rt:r},function(z,ds){p.complete(ds)})
        return p
    }






 // http://spion.github.io/posts/why-i-am-switching-to-promises.html
 
    