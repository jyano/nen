module.exports=function() {
    txPl = {"Content-Type": "text/plain"}
    z4 = "404 Not Found\n"

    JS = ['both/str', 'both/us',
        'client/cjs', 'client/bx', 'client/both',
        'client/jq', 'client/jqfn',
        'client/objects', 'client/clientMore',
        'client/html', 'client/ip', 'client/el',
        'client/can', 'client/core']

    scrTag = function (str) {str = str || ''
        return '<script type="text/javascript">' + str + '</script>'}

    _.tJs = $tJs = function (js) {return './' + js + '.js'}
    $h1 = function () {         return '<h1>' + a + '</h1>'}
    lk = function () {         return '<p>'
                + '<a href="/l1">Link1</a>'
                + ' <a href="/l2">Link2</a>'
                + ' <a href="/l3">Link3</a>'
                + '</p>'}

    _p = function (s) {var g = G(arguments), str = ''
        g.e(function (p) {str += ( '<p>' + p + '</p>' )}); return str}

}