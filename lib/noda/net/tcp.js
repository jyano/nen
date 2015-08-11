lib=function(){
    $lr = function (a) {return function () {
        $l(a)
    } }


}
$sK = function (k) {
    $sEv(k)
    k._ = k.pipe
    k.w = function (a) { this.write(a);return this}
    k.rA = k.remoteAddress
    k.rP = k.remotePort
    k.r = function () {return this.rA + ':' + this.rP}
    return k
}
//  3 k cats:  TCP  UDP   UNIX domain  // two TCPk cats:sv,cl;
// TCP sv l4(listens for) collection cns,
// sends da back (cl/sv comm  happens via ks)
// ev  handler for  'cn' ev  (kOb the cb receives UNIQUE for each cn)
// We have a cn - a kOb autoAssigned to cn
_h = '127.0.0.1';
_p = 6969;
$tcp = function (port, ip, fn) {
        var s
        fn = fn || $lr('Sv lsng on ' + s.ad$() + ':' + s.adP())
        s = $n.S(fn).l(port, ip)
        return s
}
$sk = function () {
    var k = $n.Socket()
    $sEv(k)
    k.cn = function (a, b, c) {
            this.connect(a, b, c)
            return this
        }
    return k
}
s = $tcp(_p,_h,function(k){
    $l('CN TO:'+_h+':'+_p +k.r())

    k.w('CN Echo sv\r\n')._(k)

    k.oDa(oDa=function(d){
        $l('DA '+rA+': '+d)
        k.w('You said "'+d+'"')
        this.des()

    }).oCl(oCl=function(d){$l('cn CLD:'+k.r())})



}).oDa(oDa).oCl(oCl)
cl=$sk()
cl.cn(1337,  '127.0.0.1',  function(){
    $l('Cnd')cl.w('hi sv, from cl')})
    .oDa(function(d){$l('ms:'+d); cl.des()})
    .oCl($lr('Cn closed'))

