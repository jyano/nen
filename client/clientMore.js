


vkl=function(a){return new Function("v","k","l","l[k]=" + a)}



$w=window; $$w=$(window)
S.url = function(a){return 'url("' +a+ '")' }
_.iDU=  function(a){ return s$(a).ct('data:') }


mostlyClient = function () {
    M.tD = M.toDegrees = tDeg = function (r) {
        return r * (180 / M.PI)
    }
    M.tR = M.toRadians = M.toRads = tRad = rad = function (degs) {
        if (O(degs)) {
            degs = degs.rotation
        }
        return degs * M.PI / 180
    }
    M.dst = M.distance = dst = function self(a, b) {


        M.xyz = xyz = function (a, b) {
            a = a || {};
            a.x = a.x || 0;
            a.y = a.y || 0;
            a.z = a.z || 0
            b = b || {};
            b.x = b.x || 0;
            b.y = b.y || 0;
            b.z = a.z || 0


            return sqr(a.x - b.x, a.y - b.y, a.z - b.z)

            function sqr(a, b) {
                var g = G(arguments)
                return M.sqrt(U(b) ? a
                    : sq.apply(this, g))
            }

            function sq(a) {
                var g = G(arguments), n = 0
                _.each(g, function (a) {
                    n += (a * a)
                })

                return n
            }
        }


        if (A(a) && U(b)) {
            return self(a[0], a[1])
        }


        if (U(b)) {
            return xyz(M.V({}), M.V(a))
        }


        return xyz(M.V(a), M.V(b))


    }
    M.lD = M.dist = M.lineDistance = function (p1, p2) {
        var xs = 0, ys = 0;

        p1 = V(p1)
        p2 = V(p2)
        xs = p2.x - p1.x;
        xs = xs * xs;

        ys = p2.y - p1.y;
        ys = ys * ys;

        return M.sqrt(xs + ys);
    }
    M.lineCenter = function (x1, y1, x2, y2) {
        if (A(x1)) {

            if (N(x1[3])) {
                return center(x1[0], x1[2], x1[2], x1[3])
            }
            return center(x1[0], x1[1], y1[0], y1[1])
        }
        if (O(x1)) {
            return center(x1.x, x1.y, y1.x, y1.y)
        }
        return center(x1, y1, x2, y2)
        function center(x1, y1, x2, y2) {
            var x, y

            if (x1 > x2) {
                upperX = x1;
                lowerX = x2
            }
            else {
                upperX = x2;
                lowerX = x1
            }

            if (y1 > y2) {
                upperY = y1;
                lowerY = y2
            }
            else {
                upperY = y2;
                lowerY = y1
            }

            x = lowerX + (upperX - lowerX) / 2
            y = lowerY + (upperY - lowerY) / 2

            return V(x, y)
        }
    }
    M.pointInCircle = function (x, y, circle) {
        var withinX, withinY
        withinX = x < circle.x + circle.radius && x > circle.x - circle.radius
        withinY = y < circle.y + circle.radius && y > circle.y - circle.radius
        return withinX && withinY
    }//Y.pointInCircle = pntInCir =
    M.pointInRect = Math.pointInRectangle = function (x, y, rect) {
        var withinX, withinY
        var halfwidth = (rect.width || rect.w) / 2
        var halfheight = (rect.height || rect.h) / 2
        //assumes center
        withinX = x < rect.x + halfwidth && x > rect.x - halfwidth
        withinY = y < rect.y + halfheight && y > rect.y - halfheight
        return withinX && withinY
    }
    M.circlesOverlap = function (c1, c2) {
        var sum, dist, rads
        sum = sqr(c1.x - c2.x) + sqr(c1.y - c2.y)
        dist = sqrt(sum)
        rads = c1.r + c2.r
        return rads < dist
    }
    M.warp = function (lowBound, highBound, cushion) {//wrp=
        cushion = cushion || 0
        return function (num) {
            return num < lowBound ? highBound - cushion
                : num > highBound ? lowBound + cushion
                : num
        }
    }
};
mostlyClient()
_.in1 = $.in1 = function (time) {
    time = ( N(time) ? time : 1) * 1000
    cjs.wait = true
    return _.sT(function () {
        cjs.wait = false
    }, time)
}
//_.toU = function () {     _.e(G(arguments), function (g) {g = undefined})}
//_.left = function(a,b){var g=G(arguments); return S(b)? (!g.m?  s$(a).ensureLeft(b).s :s$(a).chompLeft(b).s):0}
// S.r=function(a,b){var g=G(arguments); return  g.n?  s$(a).chompRight(b).s: s$(a).ensureRight(b).s }
// String.prototype.ensureSlash=function(){var hasSlash = this[0] = '/'; return hasSlash? this: '/'+this}
// _.xxx=function e(p,q,w){return S(p) && s(q)? _.eW(p,q) :S(q)?  e(p,function(v,k){eval(q)}, w)}
OOOO = function () {
    oOo = function oOo(a, b) {
        if (_.isUndefined(b)) {
            return _I(lC(V(oO(a))))
        }
        if (oOo(a)[lC(b)]) {
            return b
        }
    }
    Oo = _.defaults(function o(a, b) {
        if (D(b)) {
            return o[a] && ( o[a][b] || oOo(a, b))
        }
    }, ooo)
    oO = _.defaults(function oO(a, b, c) {
        return _.isUndefined(a) ? _.keys(f)
            : '*' == b ? $r(a)
            : D(c) ? oO(oO(c, a), b)
            : _.isUndefined(b) ? D(function (x, y) {
            return oO(a, x, y)
        }, oO[a] || {})
            : (oO[a] && oO[a][b]) ?
            oO[a][b]
            : b
    }, ooo)
    oC = function (c) {
        return oO('c', c)
    }
    oK = function (a) {
        return oO('k', a)
    }
    oT = function (a) {
        return oO('t', a)
    }
    oE = function (a) {
        return oO('e', a)
    }
    oI = function (a) {
        return oO('i', a)
    }
    oS = function (a) {
        return oO('s', a)
    }
    //$o=function o(a,b,c){return _.isUndefined(b)?_p(o,a):G(arguments).N?oO(a,b,c):Oo(a,b,c)}
    oQ = function (f, m) {
        $(function () {
            Q(m || mf, f)
        })
    }
};
OOOO()
_.vl = _v = function (a) {
    return S(a) ? function () {
        Function(a)()
    } : F(a) ? a : F(a.value) ? a.value() : a.value
}
_.fT = function (times, func) {
    var timeout
    if (N(times)) {
        return _.times(times, function (i) {
            func(i + 1)
        })
    }
    if (F(times)) {
        timeout = N(func) ? func : 100
        func = times
    }
    return setTimeout(func, timeout)
}
extra = function () {

    _.scl = function (v, a) {
        v.x *= a;
        v.y *= a;
        return v
    }
    _.def = function (a, b) {
        var g = G(arguments);
        a = a || {}
        return g.p ? D(a, oO(b || '' + 'D')) : D(a) ? a : b
    }
    _.inx = $.inx = function () {
    }
    _.er = function (z) {
        throw new Error(z)
    }
    _.ig = function () {
        if (_.has('Image', E(a))) {
            return E(a)
        }
    }
    _.eW = function (a, b) {
        return l$(a, _z(b)) == b
    }
    _.cc = function (a, b) {
        return (A(a) ? a : [a]).cc(b)
    }
    _.is = function (a) {
        return function (b) {
            return b === a
        }
    }
    _.io$ = function (a, b, c) {
        return a.indexOf(b, (c < 0 ? c + _z(a) : c))
    }
    _.pp = _.props = $p = function p(i, t, kK, vf, f) {
//get: index thing key //set: index thing key value [function] //setOb: index thing ob [function]
        if (O(kK)) {
            _.each(kK, function (v, k) {
                p(i, t, k, v, vf)
            })
        }                   //setOb
        if (U(kK)) {
            return _p(p, i, t)
        }
        if (vf == "*") {
            return p(i, t, kK, $r(kK))
        } // set it randomly?!
        else if (U(vf)) {
            return t[oO(i, kK)]
        }   //get
        else {
            f = f || _s  //function(t,k,v){t[k]=v}  //set
            f(t, oO(i, kK), oO(kK, vf, 'R'))
        }
        return t
    }
    _.met = _.mm = function f(i, x, m, g) {
//=met $m=
        if (U(i)) {
            return
        }
        if (U(x)) {
            return _p(f, i)
        }
        if (U(m)) {
            return _p(f, i, x)
        }// if(U(g)){return _p(f,i,x,m)}
        if (!A(g)) {
            return _a(f, [i, x, m, _r(arguments, 3)])
        }//met('x',  c.x, 'd',  [i,0,0]     )//met('x',  c.x, 'd',   i,0,0   )
        return _a(x[oO(i, m)], g, x) || x
    }
    _.hs = function _h(a, b, c) {
        if (O(b)) {
            return _h(b.toString(), a)
            //  if( A(a)){return_.ct(a,b): _.has(a,b)}
        }
        if (S(a)) {
            return s$(a).contains(b, c)
        }
    }
}
old = function () {


    ll = function (a, b) {
        if (S(b)) {
            console.log(a + ': ' + b)
        }
        else {
            $l(a + ' ->');
            $l(b)
        }
        ;
        return b
    }
//xP=function(a){return Utils.props('X', X(a))}
//xM=function(a){return Utils.methods('x', X(a))}
}
old = function () {

    G1 = function (a) {
        //if(!_.isArguments(a)){return}
        var p, n, m, d
        a = _.toArray(a)
        if (_.last(a) === '+') {
            p = a.pop()
        }
        if (_.last(a) === '-') {
            n = a.pop()
        }
        if (_.last(a) === '*') {
            m = a.pop()
        }
        if (_.last(a) === '/') {
            d = a.pop()
        }

        return D(a, {

            z: a.length,
            f: _.first(a),
            l: _.last(a),
            r: _.rest(a),
            i: _.initial(a),
            p: p,
            P: !p,
            m: m,
            M: !m,
            d: d,
            D: !d,
            n: n,
            N: !n

        })
    }

    /* S1=function(a,b,c){
     return _.isUndefined(b)? (_.isString(a)? $.span().html(a):0  )
     :N(b)? a.substr(b,c)
     :S(b)? s$(a).startsWith(b)
     :_.some(a, b||F,c)
     }
     */
//  nN=function(w){return Boolean(Number(w))}//M=
//  Nn = _.isNan

}
dim = function () {
    _.wd = function (a, b) {

        if (O(a)) {

            var w = function (a, b) {
                if (U(b)) {
                    return a.width
                }
                a.width = b;
                return a
            }
            if (U(b)) {
                return F(w(a)) ? a.width() : w(a) ? w(a) : _.isFunction(a.w) ? a.w() : a.w
            }
            if (F(w(a))) {
                a.width(b)
            }
            else if (w(a)) {
                w(a, b)
            }
            else if (F(a.w)) {
                a.w(b)
            }
            else {
                a.w = b
            }
            return a
        }
    }
    _.sz = _z = function z(a, b, c) {
        return U(b) ? _.size(a)
            : N(b) ? _z(a) == b
            : _z(a) == _z(b)
    }
    _.ht = function (a, b, c) {
        if (O(a)) {
            if (U(b)) {
                return a.height ? (F(a.height) ? a.height() : a.height) :
                    _.isFunction(a.h) ? a.h() : N(a.h) ? a.h : false
            }
            if (N(b)) {
                if (F(a.height)) {
                    a.height(b);
                    return a
                }
                if (N(a.height)) {
                    a.height = b;
                    return a
                }
                if (F(a.h)) {
                    a.h(b);
                    return a
                }
                if (N(a.h)) {
                    a.h = b;
                    return a
                }
            }


        }
    }
};dim()
