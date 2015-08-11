
console.log('\n\n- - - - - welcome to NEN\n\n')
require('./lib/both'); require('./lib/noda'); require('./lib/xap')

$a.bP( $bP=require('./lib/xap/bP') )
require('./lib/mon')
$a.u(require('./lib/mem'))


$mg.connect('mongodb://localhost/nen')
Dude = $mg.model('Dude', {name: String})

$a.u([$mw = require('./mw')])

$a.g('/', function(q,p){p.s('hii')})//.l(3000)
$a.g('/time', function(q,p){p.s('secs: '+ (new Date()).getSeconds())})
$a.g('/tx', function(q,p){$l('ok'); p.s('ok')})

$a.g('/dudes1', function(q,p){var n= 0, str= $h2('dudes')


    Dude.create({name: 'dude' + (new Date()).getSeconds()},
        function(z){
        Dude.find(function(z,dudes){var count= _.size(dudes)
            if(count > 6){Dude.remove(function(){

                    })}
            dudes.forEach(function(dude){n++;str+='<h1>#'+n+' '+dude.name+'</h1>'})
            p.send(str)})})


    function alt(){
        $a.g('/dudes1', function (q, p) {
            $l('/mg')


            kitty = new Cat({name: 'Zildjian'});

            kitty.save(function (z) {
                $l('meow')

                var str = ''

                Cat.find(function (z, cats) {

                    cats.forEach(function (cat) {
                        str += '\n' + cat.name
                    })
                })
                p.send('meoww ' + str)
            })
        })
        $a.g('/dudes2', function (q, p) {
            var str = ''
            Cat.find(function (z, cats) {
                cats.forEach(function (cat) {
                    str += '\n' + cat.name
                })
            })
            p.send('meoww ' + str)

            /*
             $a.g('/cat1', function (q, p, n) {
             $M = $mg.model

             Cat = $M('Cat', {n: $S})
             $M('Cat').rm({}, function (z) {
             $l('rmd!')
             Cat({n: 'eo'}).s(function () {
             $l('meow - saved')
             })
             })
             Cat.cr([{type: 'jel'}, {type: 'sn'}],// pass individual docs   or pass array
             //optional cb
             function (z, cats) {
             jel = cats[0];
             sn = cats[1]
             }) // rets prom
             prom = Cat.cr({type: 'jaw'})
             prom.then(function (jaw) {
             $l('wow!')
             })

             })
             */


        })


    }

})
$a.g('/dudes', function(q,p){var n= 0, str= $h2('dudes')
    Dude.create({
            name: 'dude' + (new Date()).getSeconds()
        },

        function(z){
            Dude.find(function(z,dudes){var count= _.size(dudes)
                if(count > 6){Dude.remove(function(){

                })}
                dudes.forEach(function(dude){n++;str+='<h1>#'+n+' '+dude.name+'</h1>'})
                p.send(str)})
        })
})

links()


$a.l(4000, function(){$l('port 4000..')})



function links(){

    //$a.g('/', function(q,p){p.s($h1('howdy'))})




    $a.g('/a', function (q, p) {



        if(q.ss){

            q.ss.n= q.sss.n? q.ss.s.n+1:1
            q.ss.s(function(){
                p.s('ss st!')
                $l('q.ss')
//        $l(q.ss)
            })}


        else {
            p.s('!ss st!')
            $l('!q.ss')
        }

    })
    $a.g('/n', function (q, p){var s = q.ss
        $l('q.ss: ' + !!s); $l('q.session: ' + !!q.session)

        // q.ss.a= 4
        p.send('ss.a = ' + q.ss.a)
        q.ss.a= 3

        // if (!s.n) {s.n = 0}  // p.s('val in ss ' + s.n)

    })
    $a.g('/n1', function (q, p) {

        q.ss.a++

        p.send(  'ss.a++'  )

        //q.ss.a= 3
        // if (!s.n) {s.n = 0}// p.s('val in ss ' + s.n)
    })
    $a.g('/d', function (q, p) {
        q.ss.d();
        p.s('ss d!')
    })
    $a.g('/funky', function (q, p) {

        q.ss.monkey = 'true'
        $l(q.ss)
        p.s(q.ss)

    })
    $a.g('/tS1', function (q, p) {
        var fn = function (a) {
            return a + a
        }
        p.s($h1(fn.toString()))
    })
    $a.g('/tS', function (q, p) {
        var fn = function (a) {
            $.d('b', 500, 500);
            alert('hahaha')
        }
        p.s(scrTag('(( ' + fn.toString() + ' )())'))
    })
    $a.g('/js', function (q, p) {
        //fs.rF('./javascript.js', 'utf8', function (z,d) {$l(d)})

        fs.rF('./javascript.js', 'utf8',
            function (z, js) {
                p.s(scrTag(js))
            })
    })
    $a.g('/async0', function (q, p) {
        p.js(JS)
    })
    $a.g('/html', function (q, p) {

        html = '<div id="div"></div>'

        +

        '<button id="bt"> hello </button>'

        js = 'div=document.getElementById("div");' +

        'bt=document.getElementById("bt");' +

        'bt.innerHTML="afsdfsda";' +

        'fn = function(){alert(3)};' +

        'bt.setAttribute("onclick", "fn()")'

        p.s(html + scrTag(js))

    })
    $a.g('/async', function (q, p) {

        fns = []

        JS.forEach(function(js){
            fns.push(function(cb){
                $f.readFile('./'+js+'.js','utf8',function(z,j){
                    cb(null,j)
                })
            })
        })

        $y.series(fns,function(z,scrs){
            $l('in y series')
            var str=''
            scrs.forEach(function(js){

                str+=js
            })
            p.s(
                scrTag(str)
            )
        })
    })
    $a.g('async1', function (q, p) {

        p.writeHead(
            200,
            {"Content-Type": "text/js"}
        )

        $y.eachSeries(
            // Pass items to iterate over
            ['css/bootstrap.css', 'css/bootstrap-responsive.css'],
            // Pass iterator function that is called for each item
            function (filename, cb) {
                $f.rF(filename, function (z, content) {
                    p.write(content)
                })
            },

            // Final callback after each item has been iterated over.
            function () {
                p.end()
            }
        )
    })


    $a.g('/l1', function (q, p) {
        var ht

        q.s.lP += q.path + '<br>'

        ht = lk()

        ht += !q.s.lP ? 'no' :
        $h1('q.path') + 'lP:' + q.s.lP
        p.s(ht)
    })
    $a.g('/l2', function (q, p) {
        var ht
        var lP = q.s.lP

        q.s.lP += q.route + '<br>'

        ht = lk()

        ht += !lP ? 'no' :
        $h1('Youve to l2') + 'past pg:' + lP

        p.s(
            ht
        )

    })
    $a.g('/l3', function (q, p) {
        var ht = lk()
        q.s.lP = q.s.lP + q.path + $br()
        ht += !q.s.lP ? 'no' :
        $h1('dif l3 tt') + 'lP:' + q.s.lP
        p.s(ht)

    })
    $a.g('/foo', function (q, p, n) {
        p.s('visited ' + q.s.vws['/foo'] + ' times')
    })
    $a.g('/bar', function (q, p, n) {
        p.s('visited ' + q.s.vws['/bar'] + ' times')
    })
    $a.g('/date', function(q,p,n){var vws
        d = $D()
        $l('date: '+ d)

        $l('seconds: '+ d.s())
        if (!q.s.vws){
            q.s.vws = 1
            p.s('welcome to the session demo. refresh!')
        }

        else {

            q.s.c= q.s.cookie
            q.s.vws++
            vws = q.s.vws
            age = q.s.c.maxAge  //->  ms left
            expr= q.s.c.expires  // /dt =oneHourFromNowInDateForm()
            // hour = 3600000
            // q.s.c.expires = dt   ~    q.s.c.maxAge = 3600000
            //changing maxAge, will adjust the 'expires' op
            //s.touch resets maxAge to orig value
            // so i dont need to do that
            // resets it when it gets to zero?
            $l('expr: ' + expr)
            //$l("s"); $d(q.s); $l('c'); $d(q.s.c)
            p.$p(

                'vws: '+vws + '  -   expiry: in (age): '
                +(age/1000/60)+'m ',
                'expr: '+ expr,
                'date: '+d,'the year is '+d.y()+', ( month '+ d.M() +' ).',
                '..right at '+d.h()+' hours'+', '+ d.m()+' minutes'+', '+d.s()+' seconds',
                'And yes, even '+d.ms()+' little, baby milliseconds!',
                'date now: '+$Dt.n()
            )

        }





// dStr=  d.d()+'.'+ d.m()+1+'.'+d.y()+d.h()+'.'+d.mn() + 1+'.'+d.s()
// $l('dStr: '+ dStr)


        //q.session.destroy(function(){$l('destroy!!');  handler()})

    })
    $a.g('/admin', function (q, p) {
        sess = q.ss
        if (sess.email) {
            p.write(' <h1>Hello ' + sess.email + '</h1> ');
            p.end('<a href="+">Logout</a>')
        }
        else {
            p.write(' <h1>login first.</h1>');
            p.end('<a href="+">Login</a>')
        }
    })
    $a.g('/logout', function (q, p) {
        q.ss.destroy(function () {
            p.rd('/')
        })
    })



}

function dates(){
  // dc=document
  //  dc.w=function(){var dc=this,g=G(arguments)
  //      g.e(function(toWr){dc.write(toWr)})
  //      return dc
  //  }
  //  d=$D()
  // dc.w(d.d(), '.', d.m()+1,'.',d.y(),d.h(),'.',d.mn() + 1,'.',d.s())
  //  DAY=["Sunday","Monday","Tuesday","Wednesday", "Thursday","Friday","Saturday"]
  dc.w("Today is " + DAY[d.n()]) //Display weekday - write cur day NAME (names stored in arr ob  S=0,M=1)
  //  MONTH=[ "Jan","Feb","Mar","Apr","May","Jun", "Jul","Aug","Sep","Oct","Nov","Dec"]
//dc.w(DAY[d.n()]+" ",d.d() + ". ",MONTH[d.m()]+" ",d.y()) //  complete date w  day name and M name
//d.y("1990")// can set  date| time into dtOb w sD, sH..  (here only year  set)
//dc.w(".",d.gUH(),".",d.gUMn() + 1,".",d.gUS())

  dispTime=function(){
// Note that this script is similar to the Time example above,
// only this script writes the time in an input field.
// And it continues writing the time one time per second.

    //       var tmr = null
    // function stop(){clearTimeout(tmr)}
    //   function bg() {
    //     var t, h, s,clk,tmr
    //     d  = $D()
    h  = d.h()
    //     mn=((mn < 10) ? "0" : "") + mn
    //     s = d.s(); s=((s < 10) ? "0" : "") + s
    //    clk = h  + ":" + mn + ":" + s
    //    dc.forms[0].display.value = clk
    //   tmr = setTimeout("bg()",1000)
    //  }


  }
}
function localsMw(q,p,n){
  p.locals.user = q.user
  if (/api/i.test(q.path)) {q.ss.returnTo = q.path
  }
  n()
}
function pgTrackerMw(q,p,n){
  vws = q.ss.vws = q.ss.vws || {}
  ptN = require('parseurl')(q).pathname
  // get the url pathname
  vws[ptN] = (vws[ptN] || 0) + 1
  // count the vws
  n()
}


function render(){

  $a.g('/1', function (q, p) {
    //Session set when user Request our $a via URL
    if (q.s.em) {p.rd('/admin')}
    // check Session existence.
    // If it existed will do some action.
    else {p.r('index.html')}
  })
}//$a.po('/li', function (q, p) {     q.ss.em = q.b.em; p.e('done')})
//  node, old?
// a.u(function (q, p) {
//      p.setHeader('Content-Type', 'text/plain')
//      p.write('you posted:\n')
//      p.e(JSON.stringify(q.b, null, 2))
//  })
//    add  gen  J/URL-enc prsr  as  top-level mw
//  $bP.j({   t: 'app/*+j'  }),
//      $a.po('/api/users',     function (q, p) {if (!q.b) {return p.STS(400)} })
// acces q.b ( cr user )
// recommended way:  add  bd parsers  to  spec rts
//$a.po('/login',     $bP.u(), function (q, p) {if (!q.b) {return p.s4()}   ;p.s('un:' + q.b.un)})// POST /login //  gets urlenc  bds

function exErr() {


    // production error handler
    // no stacktraces leaked to user
    // a.u(function(z, q, p, n) {
    // p.status(z.status || 500);
    // p.render('error', {message: z.message,  error: {} }) })


    // catch 404 and forward to error handler
    a.u(function (q, p, n) {
        z = new Error('Not Found');
        z.status = 404;
        n(z)
    })
    // development error handler
    // will print stacktrace
    if (a.g('env') === 'development') {

        $a.u(function (z, q, p, n) {
            p.status(z.status || 500);
            p.render('error', {
                message: z.message, error: z
            })
        })

    }

}
function badRoutes(){
    // ix=index = require('./routes/index');
    // li=login = require('./routes/login');
    // sU=signup = require('./routes/signup');
    // u= user = require('./routes/user');
    // attaching routes to the application
    //a.u(ix);  a.u(li); a.u(sU); a.u(u)
    //    require('./routes')
    //$a.g('/', routes.index);

}
function notUsed(){

    //env = process.env.NODE_ENV || 'development'  //    config = $q('./config/config')[env]


    //$a.u($e.st($p.j(__dirname, 'public'), {maxAge: 31557600000}))


// $a.bP( $bP=require('./lib/xap/bP'))



    //$a.s('port', port = process.env.PORT || 3000)
    //$a.s('views',$p.join(__dirname, 'views'))
    //$a.s('view engine', 'jade')
    //methodOverride = require('method-override');// $a.u(methodOverride())



    //  favicon// logger


//app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
}