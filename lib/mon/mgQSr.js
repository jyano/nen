 // qSr provides   rSr  interface for qus


 // sr interface allows us to simply "plug-in"
 // to other Node streams such as
 // http responses and
 // write streams so everything
 // "just works" out of the box.

 //This api provides a more natural node-like api
 // than than what is presently available
 // with the Query#each method.

 qSr = $mg.QueryStream.prototype
 qSr.d= qSr.destroy
 qSr.P = qSr.pause
 qSr.p = qSr.pipe
 qSr.rs = qSr.resume
 qSr.oD = function(fn){
     return this.on('data',fn)
 }
 qSr.oCl = function(fn){
     return this.on('close',fn)
 }
 qSr.oZ = function(fn){
     return this.on('error',fn)
 }

 qSr.rb = function(a){
     if(U(a)){return this.readable}
     this.readable = !!a
     return this}

 qSr.iP = function(a){return this.paused}


 M.w('created').gte(14000).sr().pi(wSr)
 sr=M.f().sr()


 sr.on('data', function (dc) {
     if (somethingHappened) {
        this.pause()
        var self = this
        return bakeSomePizza(function () {self.resume()})
    }

    p.w(dc)
})

sr.oZ(function(z){})

sr.on('close', function () {
    // all done
})

//QueryStreams can be paused and resumed
// like you’d expect which allows us
// to stop streaming while waiting
// for other processes to complete for example.

                                                                                                                                                 QueryStreams also manage the underlying Cursors better than what we had in Query#each such that after the QueryStream has completed, whether due to an error, reaching the end of the cursor, or being manually destroyed, the internal Cursor is properly cleaned up.

    Events

data

//The data event emits a Mongoose Document as its only argument.

    stream.on('data', function (doc) { });
error

//Emitted if an error occurs while streaming documents. This event will fire before the close event.

    close

//Emitted when the stream reaches the end of the cursor,
// or an error occurs,
// or the stream is manually destroyed.
// After this event,
// no more events will be emitted.

   // Properties

QueryStream.readable

//Boolean, tells us if the stream is readable or not. true by default, false after calling destroy or an error occurs or the stream is closed.


 sr = M.f().sr()

 sr.readable // true

 QSr.paused

//Boolean, tells us if the stream is currently paused.
 sr = M.f().sr()
 sr.paused // false
 sr.pause()
 sr.paused // true

 Methods
QSr.pause //Pauses the stream. data events will stop until resume() is called.
    sr.pause();
QSr.resume //Resumes the QueryStream.
    sr.resume()
QSr.destroy//Destroys the stream. No more events will be emitted after calling this method.
    sr.destroy([err])

 //If the optional err argument is passed, an error event will be emitted with the err before close is emitted.

  QSr.pipe

//pipes the QueryStream into another WritableStream. This method is inherited from Stream.

 M.f().sr().pi(wSr,op)

 //This could be particularily useful if you are, for example, setting up an API for a service and want to stream out the docs based on some criteria. We could first pipe the QueryStream into a sort of filter that formats the stream as an array before passing on the document to an http response.

 fm = new ArrayFormatter;
 Events.f().sr().pi(fm).pi(p)
//As long as ArrayFormat implements the WriteStream API
// we can stream large formatted result sets out to the client.
// See this gist for a hacked example.


 sr = $M('order',$Sc({},{
     c:{s:10,mx:10,aI:1}
 })).f().tailable().sr()
 sr.oD(function(dc){
     $l('New: '+dc)
 }).oZ(zCb).oCl(fn)
 ///


 $ScS=function(m){return  $Sc({n:$S})}
 $Ms=function(m){return $M(m, $ScS())}

 Per=$Ms('Per')
 dropDB(function(){
     var peep =[];
     _.t(5000,function(i){peep.push({n:i})})
     Per.cr(peep), function(){
         $a.g('/', function sr(q,p,n) {var fm
             if ('HEAD'==q.method) {return p.e()}
             p.contTy('j') // output json
             Per.srP(new ArrFmr).pipe(p)// first pipe the querystream to fmr
         })
     }
 })

 function ArrFmr(){//A hacked querystream formatter which formats the output as a json literal

     Stream.call(this);
     this.writable = true;this._done = false
 }
 AF= ArrFmr.prototype

 sr = Stream.prototype

 AF.__proto__ = sr


 AF.w = function (dc) {var t=this
     if (!t.wrote) {
         t.wrote=1;t.e('data',
             '{"results":['+J.s(dc)
         )
     }// open an object literal / array string along with the doc
     else {t.e('data',','+J.s(dc))}
     return true}
 AF.e=AF.d=function(){var af=this
     if (af.dn) {return}
     af.dn=1 // close the object literal / array
     af.e('data', ']}' )
     af.e('end')// done
 }


