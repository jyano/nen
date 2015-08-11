lib; function lib(){

    fn.eS=fn.asEventStream

    _.sz=function(a){return a.length}

    _.lt=function(v,max){return _.sz(v) < max }

    fn.m=function(fn){return this.map(fn || $tgV)}

    fn.oV=fn.onValue

    $tgV=function(ev){
        return ev.target.value
    }

    $Bus=function(){
        return new Bc.Bus()
    }

    _Dt=function() {$Dt().gT()}
}


u   = $('#u').eS('click'); d  = $('#d').eS('$')
u.m(1).mrg(d.m(-1)).scn(0, function(x,y){return x+y }).asgn($('#cr'),'text') // map up2 1,down2 -1, accum  sum, asgn: tx= obb val
function mvSrh(q){return _.lt(qu,3)? Bc.o1([]):Bc.pr(qMv(q))} //once//fromPrm//type word (3+ chars) into box  (!res for qus len < 3 )
tx = $('#ip').eS('D').db(300).m().skD() // sr of kD-txIp-evs, lm qu rate,  ip tx v from ea ev,  ignr dup evs (evs w ~tx)
// React to tx changes by doing lookup  , w   api fn movSrch,   crg  new obb  w  res
sug=tx.flatMapLatest(mvSrh) // Display "Srchg..." when waiting for res
tx.eS('kD').db(300).m().skD()// stream of keydown events from text-field
tx.awaitg(sug).oV(function(x){if(x){$('#res').h('Srhg..')}})

sug.oV(function(p){$('#res').h(   $.map(p,  showMv )   )})// Rr sug  res to DOM

//For example, a ShppgCart model component might look like this.
    function ShppgCart(initCnt){
        addBus = $Bus()
        rmBus = $Bus()
        cntProp = Bc.up(
            initCnt,
            addBus,
            function(cnt, newIt) { return cnt.cc(newIt) },
            rmBus,
            function(cnt, rmdIt) { return _.rm(cnt, rmdIt)
            })
    return {addBus: addBus,  rmBus: rmBus,  cntProp: cntProp}
}
//Internally, the ShppgCart cnt are composed from an initial status
// and addBus and removeBus streams using Bc.up.
//
//    The external interface of this component exposes the addBus
// and removeBus buses where you can plug external streams for adding and removing items.
// It also exposes the current cnt of the cart as a Prop.
//
//    Now you may define a view component that shows cart cnt,
// using your favorite DOM manipulation technology,
// like virtual-dom:


function ShppgCartVw(cntProp) {
    function upCntVw(newCnt) { /* omitted */ }
    cntProp.oV(upCntVw)}

// And a component that can be used for adding stuff to your cart:

    function NewItVw(){
        var $button, $nameField // JQuery objects
        newItProp  = Bc.$.txFdVal($nameField) // property containing the item being added
        newItClk = $button.eS("click") // clicks on the "add to cart" button
        newItSr = newItProp.sampledBy(newItClk)
        return {newItSr: newItSr}}

//  plug these guys together:

cart = ShppgCart([])
cartVw = ShppgCartVw(cart.cntProp) 
newItVw = NewItVw()
cart.Bus.plug(newItVw.newItSr)
Bc.interval(1000).m(_Dt)
Bc.fromPoll(1000,_Dt)//Using Bc.fromPoll,
// can have Bc call fn ea sec, produce cur timestamp on each call.



// roll your own srs? (Using Bc.fromBinder   overkill here)
timer = Bc.fromBinder(function(sink){
    return function(){_.cI(_.ev(function(){
        sink($Dt().gT())}))}})


timer.take(5).oV(function(v){
    $("#ev").A($.li().tx(v))
})










guyArray = [{name:'a'},{name:'b'},{name:'c'}]




///this:
for (i = 0; i++; guyArray.length){

    alert(guyArray[i].name)

}



///is identical to this:
each(guyArray, function(guy){alert(guy.name)})





