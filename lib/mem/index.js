$l('mem/index')
var $ss, c, s, ssOps, sess

$ss = require('express-session')
c = require('./ck')({a: 60 * 1000 * 100})  //x:$Dt(),
s = require('./store')($ss, {u: 'mongodb://localhost/jy'})
sess=function(ssOps){return require('./ss')($ss, ssOps)}
module.exports= sess({
    _:'afsd', u:'keep', sU: 1, rs: true, c: c, s: s
})






// $cP = require('./lib/cnMw/ck')() //$a.u($cP())






// * use ss af cP
// secure:true
// df ss expiry = “Session”  // (will go away if bw closes)