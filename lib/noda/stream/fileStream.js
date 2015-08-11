

$f.ws=function(pt,op){var $f=this,s
    g=G(arguments),o
    o= g.S_? {pt: g.f, op: g.s}:{op:g.f}
    o.op=$wSrOp(o.op)
    s= $f.createWriteStream(o.pt, o.op)//>> WSr ob
    $sWs(s)
    return s
}
