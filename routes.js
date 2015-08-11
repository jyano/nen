$a.g('/render/:page', function(q, p){p.r(q.p.page) })

// $Q(['./rt/rt',   './rt/books'])

rts=[
    '/public/deps',
    '/public/deps/js',  '/../js',  '/../js/core']

// $a.rt().stc(rts)




works=function(){
    rtr = $e.rtr()
    rtr.g('/', function (q, p) {
        p.send('home!')
    })
    rtr.g('/a', function (q, p) {
        p.send('about!')
    })
    $a.u('/r', rtr)
    $a.g({

        _: [mw1, function (q, p) {
            p.send('Hiki!')
        }],

        yo: [function (q, p) {
            p.send(' yo Hiki!')
        }],

        $any$$: [mw1, function (q, p) {
            var any = q.p.any || '!'
            p.s('welcome' + any + ' lucky:' + M.random())
        }]

    })
}



rtr = $e.Router()

rtr.param('uid', function(q, p, n, id) {q.user = {un:'jy', id: id }; n()})

rtr.route('/users/:uid')
    .all(function(q, p, n) { n()  })// rt-spec mw!
    .get(function(q, p, n) { p.json(q.user) })
    .put(function(q, p, n) {q.user.name = q.params.name; p.json(q.user)})//upd user?
    .post(function(q, p, n) {n(new Error('not implemented'))})
    .delete(function(q, p, n) {n(new Error('not implemented'))})




$a.u('/cool', rtr)



/*
$a.rtr(

    'dirts',

    function (q, p, n) {
        $l('Time: ', $D.now())
        n()
    },
    

    {

    // _: function (q, p) { p.s('dirts home page') },  about: function (q, p) { p.s('About dirts')

} )






    $a.rtr('birts', function (q, p, n) {
        $l('Time: ', $D.now());
        n()
    }, {
        _: function (q, p) {
            p.s('birts home page')
        },
        about: function (q, p) {
            p.s('About birts')
        }
    })
    */

