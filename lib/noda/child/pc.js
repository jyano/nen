$pc=function(p){p = p || process

    p.in = p.stdin
    p.ou = p.stdout
    p.er = p.stderr


    p.k=function(pid,sig){// sig= 'SIGTERM' ( 'SIGINT' 'SIGHUP')
            // send sig -> pc ((sig sent may !kill tg pc))
            return this.kill(pid,sig)}

    p.oHUP=function(fn){this.on('SIGHUP',fn);return this}
    p.kHUP=function(p){return this.k(p, 'SIGHUP')}
    p.rs=function(fn){
        this.in.resume(); if (fn) {this.oDa(fn)}; return this}
    p.oDa=function(fn){this.in.on('data', fn); return this}
    p.ls=function(a,b,c){return this.listeners(a,b,c)}
    p.uEx=function(){return this.ls('uncaughtException')}
    pc.ex = function (fn) {
        this.on('exit', fn);
        return this
    }
    return p


}
$pcIn = function () {
    var s = pc.in //readable
    s = $sRs(s)
    return s
}
$pcOut = function () {
    var s = pc.out //readable
    s = $sWs(s)
    return s
}
pc = $pc(process)








