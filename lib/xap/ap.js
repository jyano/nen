var $e = require('express')
var $a = $e()


superApp()

server()

module.exports = $a



    function superApp(){
        $a.srv = function () {
            var http = require('http').Server($a)
            return http
        }
        $a.g = function () {
            var $a = this, g = G(arguments)

            if (S(g.f) && U(g.s)) {
                return $a.get(g.f)
            }


            if (g.A) {
                multPaths(g.f)
            }

            else if (g.O) {
                multRts(g.f)
            }

            else {
                $a.get(parPt(g.f), g.r)
            }

            return $a

            function multRts(rtsOb) {
                _.e(rtsOb, function (v, k) {
                    $a.g(k, v)
                })
            }

            function multPaths(pts, fn1, fn2) {
                _.e(pts, function (pt) {
                    $a.g(pt, fn1, fn2)
                })
            }

        }
        $a.s = function (k, v) {
            if (O(k)) {
                _.e(k, function (v, k) {
                    $a.set(k, v)
                })
                return $a
            }
            $a.set(k, v)
        }
        $a.po = function (a, b, c) {
            return $a.post(a, b, c)
        }
        $a.de = function (a, b, c) {
            return $a.delete(a, b, c)
        }
        $a.v = $a.vw = $a.vws = $a.views = function (eng, dir) {
            $a.s({'view engine': eng, views: dir})
            return $a
        }
        $a.port = function (port) {
            var $a = this
            if (U(port)) {
                return $a.g('port')
            }
            $a.s('port', port || process.env.PORT || 3333)
            return $a
        }
        $a.u = function (a) {
            var $a = this, g = G(arguments)


            if (g.A) {
                _.e(g.f, function (mw) {
                    $a.use(mw)
                })
                return $a
            }

            $a.use.apply($a, g)
            return $a
        }
        $a.b = $a.bP = function (bP) {
            var $a = this

            $a.u(
                bP.j()
            )
            $a.u(
                bP.u({extended: true})
            )
            return $a
        }
        $a.st = $a.stc = function (statDirs) {
            _.e(statDirs, function (dir) {
                $a.u(ep.stc(pt.j(__dirname, dir)))
            })
        }
        $a.a = $a.setup = function () {
            $a.views('jade', __dirname + '/../views/')
            $a.port(3456)
            $a.set('cb', function () {

                var add = srv.address()

                $l('listening on //' + add.address + '[' + add.port + '] ... ' + M.random())
            })
            start = function () {
                srv = $a.listen(
                    $a.g('port'),
                    $a.g('cb')
                )
            }
            return $a
        }
        $a.st = $a.uSt = function (a) {
            return this.u($e.st(a))
        }
        $a.l = $a.ls = function (port, fn) {
            var srv

            fn = fn || function () {
                $l('listening on port ' + port)
            }
            srv = this.listen(port, fn)

            return srv
        }


    }
function server() {

//  $a.ls(port,[hostN],[backlog],[cb])  Binds/listens for cns  on  spec  host/port ~ $h.s.ls()
//    conven met  ~ fn: return http.createServer($a).listen.apply(srv, g) // hSrv = ht.Srv($a, 80)
//$a.s('port', process.env.PORT || 3000)

// $a is req-handling fn ,designed to be passed to $h srv

    srv = function () {
        var srv
        lA = 'listening at ... '

        $a.ls(
            $a.port(), function () {

                $l(lA + srv.a().p) // $l(lA+ http:// ' + srv.a + ' : ' +  a.p)

                host = srv.a().a
                port = srv.a().p
                $l('listening still at ' + host + ' ' + port)
            })
    }

    srv.a = function () {
        var a = this.address()
        a.p = a.port
        a.a = a.address
        return a
    }
}



function parPt(pt) {
    pt = pt.replace('_', '/')
        .replace('$$', '?')
        .replace('$', ':')
    return S.slash(pt)
}

function $Rts(rtrs) {
    _.e(rtrs, function (rtr, rtrNm) {
        $a.r(rtrNm, rtr.mw, rtr.rts)
    })
}

    function old() {

        notGreat = function () {


            $a.r = $a.rt = $a.rtr = function () {
                var $a = this, g = G(arguments),
                    o = {pt: g.f, rts: g.s},
                    r = $Rtr()
                _.e(o.rts || {}, function (cb, pt) {
                    r.g(parPt(pt), cb)
                })
                $a.u(parPt(p.pt), r)
                return $a
            }


        }
//$a.uCP().g('/', function(q){$l("cks: ", q.cks)})
    }
