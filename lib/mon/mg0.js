$mg=require('mongoose')
$mg.url = 'mongodb://localhost:'
$mg.URL =  $mg.url + '27017/jy'
$mg._c= $mg._cn = $mg.connect
$mg.c= $mg.cn = function (u, fn) {
    u = u || 'test'
    fn=fn|| function(){$l('mg..')}
    str='mongodb://localhost/' + u
    $l('str: '+ str + ' - brought to you by superMg')
    this._cn(str, fn)
    return this.connection
}

//$mg.iQ=function(a){if(a){return a instanceof $mg.Query}}
$mg.S=$mg.Schema
$mg.S.T=$mg.S.Types
$mg.S.T.I=$mg.S.T.ObjectId
$mg.S.T.M=$mg.S.T.Mixed

$Mx=$mg.S.T.M
$id=$mg.S.T.I
$Id=function(){var g = G(arguments), o
    o = {ty: $id, r: g.f}
    if (g.p) {o.q = 1}
    return o
}
$id=$oID = function (a) {return new $id(a)}
$ref = function (t,ref){var g=G(arguments),o
    o=U(g.s)? {ref:g.f}:
    {ty: g.f, ref: g.s}
    o.ty=o.t||$S
    return o
}

//$db = $mg.c('jy')  // $mg.cn(dbUrl = d.url + '27017/jy') // $mg.connect($mg.URL)

