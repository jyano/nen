
$.sm= $.submit= $.submitButton = function(buttonText, func){
    return $.button(buttonText, func).type('submit')
}

$.sb=function(){var g=G(arguments)

    var ip= $.ip()

    ip.at('type','submit')
    ip.A()
    return ip
}
$.sbb=function(){var g=G(arguments)

    var ip= $.ip()

    ip.at('type','submit')
    return ip
}

$.smBt= $.submitButton=function(){

    var args=G(arguments),

        button = $button.apply(0, args)

    return button.type('submit')

}
//floating div of buttons
$.bts= $.buttons=function(a,b){
    var g=G(arguments),d=dva(2)


    if(g.p){
        return bts(['start',a],['stop',b]).auto()
    }

    _.each(g,function(v){v=A(v)?v:[v]

        d(

            $button( v[0], v[1] ).k( g.p?('fc'):'' ).M(4)

        )

    })

    return d}
$.btR= $.buttonRight=function(text, func){

    var b = $.button(text, func).float('right')//.display('block')

    return b}
$.btL= $.buttonLeft=function(text, func){

    var b = $.button(text, func).float('left')//.display('block')

    return b}

testButtonRight=function(){z()

    d= $.div('b', 500, 500).drag()

    d.A(
        b=$.buttonRight('yes')
    )
}

$.submit2 = sm=function(a){
    var g=G(arguments)

    if(g.p){

        return $button().type('submit').k('btn btn-mini button-default').T( ok(a) )
    }

    return ip('submit').k('show').v( ok(a) )

}

$.ta= $.textarea =   function(rows,cols,Cl,cl){

    var g=G(arguments),
        ta =  $('<textarea>')

    Cl=Cl||'pink'
    cl=cl||'black'

    if(g.N){
        ta.K('form-control')}

    if(N(rows)){
        ta.attr({rows: rows})}
    if(N(cols)){
        ta.attr({cols: cols})}

    return ta.C(Cl, cl)
}

$.fC=function(id){

    fC= $.ip().K('form-control')

    if(id){fC.id(id)}
    return fC
}



//
$.f=$.form = function(c, act){var g=G(arguments),  o,
    f= $('<form>').K('form')
    o=g.A? {ch: g.f} : {c:g.f, a:g.s}
    if(o.ch){g.eF(function(el){f.A(el)})}
    if(o.a){f.attr({ action: o.a})}
    if(o.c){f.C(o.c)}
    f.attr({ method: g.p? 'get':'post' })
    if(!g.n){f.A()}
    return f
}


$.fG= $.fGD=function(){

    var fG= $.dK('form-group').fS(20)

    return fG
}


$.formGet=function(c, act){var g=G(arguments), c =g[0],  act =g[1],
    f  = $.f().K('form').attr('method', 'get')
    if(c){f.C(c)}
    if(act){f.at({ action: act})  }
    return f}
$.fI= $.formInline=function(a,b){
    var f =  $.form().C('b').K('form-inline form-group'),
        g=G(arguments);
    _.e(g, function(g){f.A(g) });
    if(g.p){  f.A( $.submit('ok') ) }
    return  f
}
$.fR= $.formRight=function(a,b){ var g=G(arguments),
    f =  $.form().C('b').K('form navbar-form navbar-right');
    _.e(g, function(g){f.A(g) });
    if(g.p){  f.A( $.submit('ok') ) }
    return  f
}
$.fF= $.formFalse=function(a,b){   var g=G(arguments),
    f  = $.form().C('b').K('form well').attr({ method: false,  action: false });
    _.e(g, function(g){f.A(g) });
    if(g.p){  f.A( $.submit('ok') ) }
    return  f}



$.l=  function(t, fr, n, ph){  alert('$.l')
    var g=G(arguments), lb = $('<label>'),

        ip, sp
    if( !g.f ){ return lb }
    lb.for(fr).K('control-label').h(t)
    if( !g[2] ){ return lb }
    ip = $.ip().id(fr).n(n).ph(ph||'...')
    if(!g.n){ ip.K('form-control')}
    sp= $.sp().A(lb,   ip )
    if(!g.n){ $l('adding sp'); sp.A() }
    return sp
}




$.lb=function(){ var g=G(arguments), o, lb= $('<label>')
    o= g.A_?  {ch: g.f} :
    {t: g.f, fr: g.s}


    if(o.ch){
        _.e(o.ch,function(ch){
            lb.A(ch) })
        return lb
    }

    lb
        .ht(o.t)
        .for(o.fr)

    //fr=fr||t
    //lb.K('control-label')
    if(!g.n){ lb.A() }
    return lb


}

$.ip= function(n){var g=G(arguments), o, ip

    ip = $('<input>').at('type','text')
    if(n){ ip.n(n);  ip.id(n) }

    o = g.O? g.f:
        g.N_? {w:g.f,id:g.s} :
        {ph:g.f, id:g.s, v: g.t|| g.s, n:g.t|| g.s}


    ip.ph(o.ph)
    if(o.w){ip.W(o.w)}
    if(o.id){ip.id(o.id) }
    if(o.v){ip.v(o.v)}
    if(o.n){ip.n(o.n)}
    ip.C( o.C||'r').col(o.c||'b')
    if(!g.n){
        ip.K('form-control')
        ip.A() }
    return ip
}
$.ipBt = function(btT,f){
    return $.d().A($.ip(),
        $.bt(btT,function(){f.A( ip.V() )})).A()}
$.ta= function(rows,cols,Cl,cl){var g=G(arguments),
    ta =  $('<textarea>');
    Cl=Cl||'p';
    cl=cl||'z';
    if(g.N){ta.K('form-control')}
    if(N(rows)){ta.at({rows: rows})}
    if(N(cols)){ta.at({cols: cols})}
    return ta.C(Cl, cl)}
$.pw =function(n){
    var el = $('<input>').ty('password')
    if(n){el.n(n)}
    return el}



$.bt=  $.button=function(){var g=G(arguments), o,bt = $('<button>');
    o = g.F? {fn: g[0]} : { t : g[0], fn: g[1] };
    o.t = o.t || 'submit';
    if(!g.n){bt.A()}
    return bt.T(o.t).$(o.fn)
}
$.BT= $.btL=  function(t, fn){
    if(F(t)){return $.bt('submit', t)}
    var b=$('<button>');
    b.text(t);     b.$(fn)
    return b.K('btn-lg')

    /*

     $.btL=  function(t,f,C,c){
     var g=G(arguments),
     t=g[0],f=g[1],C=g[2],c=g[3],
     t=t||'ok', k=  'btn-lg' , C=C||'b', c=c||'y';
     b = $.bt().K('btn-lg').c(C, c);
     b(t);if(f){ b.o( f ) }
     if( g.n ){ b.dd() }//dropdown
     return b
     }
     */

}
$._bt= $.btM= function(t,fn){return $.bt(t, fn).C('b').K("btn btn-mini" )}
$.bts=  function(a,b){
    var g=G(arguments),d=$.dA(200);
    if(g.p){return $.bts(['start',a],['stop',b]).auto()}
    g.e(function(v){v=A(v)?v:[v];
        d.A($.bt( v[0], v[1] ).k( g.p?('fc'):'' ).M(4))
    })
    return d}//floating div of buttons
$.btR=  function(t,fn){
    var b = $.bt(t,fn).float('right')//.display('block')
    return b
}
$.$bt= $.btLf=function(t,fn){var b = $.bt(t,fn).float('left')//.display('block')
    return b}
$.bX=$.btX=function(t,fn){var g=G(arguments),bt,o;
    o={
        url: g.f,
        data: g.s
    }

    t=  t || g.p? 'submit':'X'
    fn = fn ||  function (){var bt=this;
            $.aj({url: o.url, data: o.data, type: 'DELETE',
                success: function (){$(bt).pa().rm(); if(g.n){$.rl()}}})}

    bt= $.bt(t, fn)

    return bt
}




$.cb=   function(n,v,lb){
    $._cb=function(){return $.ip().ty('checkbox')}


    var g=G(arguments), checked,     n=g[0],     v=g[1],     lb=g[2],
        cb,     id
    if(g.u){return $('<input type="checkbox">').A()}
    if(A(v)){v=v[0];checked=true}
    id = n +'-'+ v
    V = '&nbsp'+v+'&nbsp'
    cb = $.ip().ty('checkbox')
    cb.n(n)
    cb.v(v)
    cb.id(id)
    if(checked){cb.at({checked:'checked'})}
    cb= lb? $.sp().A(cb , $.lb(l,id) )
        :g.p? $.sp().A( $.br(), cb , $.lb(V,id)) :
        !g.n? $.sp().A(cb , $.lb(V,id) ) :
            cb
    return cb.A()

    /*

     $.cb =function(n,v,lb){var g=G(arguments), checked, n=g[0],v=g[1],lb=g[2]
     if(A(v)){v=v[0];checked=true}
     var I=n+'-'+ v,
     V='&nbsp'+v+'&nbsp',
     cbox = $.input().type('checkbox').n(n).v(v).id(I)
     if(checked){cbox.attr({checked:'checked'})}
     return lb? $.span().A(cbox , $.lb(l,I))
     :g.p? $.span().A( $.br(), cbox , $.lb(V,I))
     :g.N? $.span().A(cbox , $.lb(V,I) )
     :cbox }

     $.cb = function self(n ,v,id, makeDivWithLabel){var g=G(arguments);
     n = g.f||''; v = g.s||'';id = g.t||'';
     cb= $.ip().ty('checkbox')
     sp  = $.sp()
     if(g.A_){_.e(g, function(ar){
     sp.A($.cb(ar[0], ar[1], ar[2], ar[3]),
     $.lb(ar[1], ar[2]))});
     return sp.A($.br())}
     cb.n(n).v(v).id(id);
     if(g.p){cb.prop('checked', true)}
     if(makeDivWithLabel!==false){cb = $.dK('checkbox').A($.lb(n).prepend( cb ))}
     return cb}

     */

}
$.cbG=  function(n,v){

    var g=G(arguments),n=g[0],v=g[1],sp=sp();
    if(g.p){_.e(v,function(v){
        sp.A($.cb(n,v,'+'))})}
    else{ _.e(v,function(v){sp.A(
        $.cb(n,v))})}
    return s.id(n)
}
$.cbl=$.cbLb = function(){var g=G(arguments)
    return $.sp().A(
        $.cb(g.f, g.s, g.t,g[3]), $.lb(g.f, g.s))}
$.rb=   function(){
    var g=G(arguments),
        chkd,  n=g[0] || 'n',  v=g[1], lb=g[2];
    if(A(v)){
        v= v[0];
        chkd=true
    }
    var I = n + '-' + v,
        V ='&nbsp'+ v +'&nbsp',
        rbox = $.ip().ty('radio').n(n).v(v).id(I);
    if(chkd){
        rbox.at({checked:'checked'})}
    return l?
        $.sp().A(rbox, $.lb(lb,I))
        :g.p?
        $.sp().A($.br(),rbox, $.lb(V,I))
        :g.N?
        $.sp().A(rbox, $.lb( V,I))
        :rbox}
$.rbG=   function(n,v){
    var g=G(arguments),n=g[0],v=g[1],sp= $.sp()
    if(g.p){_.e(v,function(v){
        sp.A($.rb(n,v,'+'))})}
    else {_.e(v,function(v){
            sp.A($.rb(n,v))}
    )}
    return sp.id(n)
}



$.sm =   function(v){     var el = $('<input>').ty('submit').fS(16)
    if(v){el.v(v)}
    return el}
$.sb=  function(t, fn){var g=G(arguments),bt= $.bt(t, fn).ty('submit')
    if(g.p){bt.K('btn btn-mini button-default').T( a || 'ok' )}
    //bt.A('submit').K('show')
    return bt}

$.o= $.op=function(n,v){var g=G(arguments),
    o= $('<option>')

    o.A( g.f );
    o.v( g.s  || g.f)


    // n = n||'option';  v=v||n; o.T(n).v(v)
    // o.V( g[0] )

    if(g.p){
        o.at({selected: true})
    }

    o.A()
    return o

}





$.SEL =  function(n,i){var g=G(arguments),sl

    sl=  $('<select>')
    sl.n(n).id(i)
    if(!g.n){sl.K('form-control')}
    if(g.p){sl.at({mutiple:true})}
    return sl
}

$.og=$.opGr= function(lb){var g=G(arguments), o,og
    o=g.S_? {lb:g.f, ch: g.s} : {ch:g.f}
    og=  $('<optgroup>')
    if(o.lb){og.at('label',o.lb)}
    if(o.ch){if(A(o.ch)){_.e(o.ch,function(q){

        //if(N(q)){q =''+ q }
        if(S(q)){
            q = $.o(q)
        }

        og.A(q)

    })}


    else {  og.A( o.ch )  }}
    og.A()
    return og
}




$.sl=function(){var g=G(arguments), sl=  $('<select>').A()

    if(g.A_){
        g.eF(function(o){
            if(N(o)){o=''+o}
            if(S(o)){ o=$.o(o) }
            sl.A(o)
        })
    }


    if(g.p){sl.multiselect()}
    /*
     //if(!A(g.f)){g.unshift( ['select'] )}

     if(A(g.f)){
     sl= $.sel.apply($, g.f);
     _.e(g.r,function(v){
     if(S(v)){v = $.op(v)}
     sl(v)})}
     else {sl= $.sel();
     _.e(g,function(v){if (S(v)) {v = $.o(v)}
     sl(v)})  }


     */
    sl.V=function(v){
        if(U(v)){return sl.q.v()}
        sl.v(v);return sl}

    sl.o=function(f){f=f||alert
        sl.change(function(){ f(sl.V()) })
        return sl}


    if(g.O){g.eF(function(v,k){

        sl.A($.o(k,v))

    })}



    return sl
    //$.sl(['volvo', $.op('merc'), 'saab' ])
//$('<select multiple>').A().A(  $.op('merc'),        $.op('merc1'),        $.op('merc2'))
//$('<select size="3">').A().A($.op('merc'), $.op('merc1'),  $.op('merc2'))
}



$sel=function(){var g=G(arguments)
    var sl= $.sl().id(g.f)
    _.e(g.r, function(g){
        var o= $.op(g).v(g)
        sl.A(o)
    })
    sl.A()
    return sl}
$.rg= function(n, m, M){
    m=N(m)?m:0;
    M=N(M)?M:100;
    n=n||'r';
    var r =  $('<input type="range">');
    r.attr({ name:n,  min:m,  max:M  });
    return r
}

$.dropDown=function(a,f){

    var l = $('<a>').id(a).A(a)
    if(F(f)){  l.click(f)  }
    else {  l.href( f|| '#' )}
    return l.K('dropdown-toggle')
        .at({ 'data-target' : 'dropdown' })
}
$.active=function(a,f){
    var l = $('<a>').id(a).A(a)
    if(F(f)){  l.$(f)  }
    else {  l.href( f|| '#' )}
    return   l.K('active')}

TXFO=function(){z()

    return $.form().A(

        $.sel(
            ['single'],
            'Single',
            'Single2'),

        $.sel(
            ['multiple', '+'],
            'Multiple', 'Multiple2','Multiple3' ),

        $.cb(
            ['check','check1', 'ch1'],
            ['check', 'check2', 'ch2', '+']),

        $.rb(
            ['radio','radio1', 'r1', '+'],
            ['radio', 'radio2', 'r2'],
            '+'),

        $.submit()

    ).A()

}
TXF=function(){z(); $.f().A(
    $.sel(['sing'], 'Sing', 'Sing2'),
    $.sel(['mult', '+'], 'Mult', 'Mul2','Mult3' ),
    $.cb(['ch','ch1', 'ch1'], ['ch', 'ch2', 'ch2', '+']),
    $.rb(['ra','ra1', 'r1', '+'], ['ra', 'ra2', 'r2'], '+'),
    $.submit()).A()}
BTR=function(){z(); d= $.d('b', 500, 500,'+').A(b=$.btR('yes'))}
old=function(){

    $c = function(c, w, h){var g=G(arguments),o
        o=S(c)?{c:g[0],w:g[1],h:g[2]}:{w:g[0],h:g[1]}
        o.c= o.c||'y'
        return $.c(o.c, o.w||500, h, '+').al(.8)
    }

//avail=bbM({url:'/sts'})
//avails=bbC({model:avail, url:'/sts'})
    c3X=function(a){ return $.c(300).fit(a) };



    johnX=function(){

        var o={};

        o.d=3;

        o.a=function(){o.d++};

        o.g=function(){return o.d};

        return o};


    fredX=function(){
        var o = john();

        o.m =function(){o.d--};
        return o
    };



    REQUESTSX=function(){var c=CT(),d=dv('y',800,600);
        c(d(h1('Buddy requests'),br(),
            MB=_d().w(600).h(500)( )).$$(function(){d.drg()}));
        qG('/gRq',function(msgs){_e(msgs,function(msg){MB(_d()(
            h6('from '+msg.fr+' on '+msg.dt),
            h5(msg.m),
            bt('accept',function(){qP('/yRq',{u:msg.fr})}),bt('deny'),hr()))})})};
    USERSX=function(){

        CT(h1('Users: '),br(),rr=row());
        getUsers(function(u){




            _e(u,function(u){  qP('/dud',{d:u.m}, function(m){
                rr(tn(pg(u.u),br(),m).o(function(){
                    win(_d()(br(),hr(),h3('User: '+ u.u), br(),
                        xc().w(300).h(300).f(m), s=h1(),  d=_d(),
                        ms=ta().c('w','z'),bt('mail',function(){qP('/sMsg',{m:ms.V(),to:u.u})}),
                        bt('chat',function(){iMsg(u.u,ms.V())}),
                        bt('buddy-request',function(){qP('/sRq',{to:u.u})})));

                    prof(u.u, d);

                    wUSt(u.u,function(s){
                        d(h1('STATUS: '+s));
                        d(bt('comment',function(){iMsg(u.u,ms.V())}),
                            bt('see feed',function(){iMsg( u.u, ms.V())}),
                            bt('see blog',function(){BLOG(u.u)}),
                            bt('challenge',function(){qP('/sRq',{to:u.u})}))})}))})})});



        tab1=['users',function(){


        }];

        tab2=['a',function(){}];
        tab3=['a',function(){}];
        tab4=['a',function(){}];

        s2(t=tabs(tab1,tab2,tab3,tab4));
        t.load()

    };

    BLOGX=function(u){

        z();
        WAPNAV();

        format();

        s1(h1('user '+u+' blog'));


        qG('/pstu',{u:u}, function(i){blp(i, s2, '+')},'+')};

    $autoDivX= autoX=function(){var g=G(arguments),
        d= $.d().auto();
        _.e(g, function(g){ d.A(g) });
        return d};
    showTabX =shwX=function(a){

        qi(a).q.tab('show');

        //return a
    };
    firstChildX =ch$X =function(a){  a.ch(0).$()  };
    TabX =tabX=function(tabText, func){

        var g=G(arguments),
            tabText=g[0],
            func=g[1],

            theLi= $liA(
                tabText,
                function(){
                    showTab(tabText); func()
                });

        theLi.load=function(){
            showTab(tabText); func()  };

        if(g.m){  theLi.k('active')  }

        return theLi
    };
    $passwordX=function(){return ip().type('password').k('form-control')};
    tabsX=function(a){
        var g=G(arguments), a=g[0],  d, u;
        d=$.d('X').WH('auto').A(
            theUlNav=$.ul().K('nav nav-tabs'),
            TABS= $.sp()
        );
        //ok so a can already be a tag.. OR, if you pass in an array, it will make it a tag for :)
        if(A(a)){a = $.tab.apply($.tab, a)}
        theUlNav(a);
        _.e(g.r,   function(a){if( A(a) ){a = _a(tab, a)}
            theUlNav(a)

        });
        d.load=function(){a.children[0].$(); return d};
        return d
    }
}
