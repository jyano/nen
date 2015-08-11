$l('jqfn')
$.fn.slD= $.fn.slideDown
$.fn.slU= $.fn.slideUp

$.fn.a2Lb=function(t){
    t=t||'label:'; return this.a2($.lb(t))
}

$.fn.rm=$.fn.xx=function(){var e=this

    e.remove()

    return e}
$.fn.P1 = function(pos,x,y){
    if( U(pos) ){ return this.css('position') }
    this.css('position', oO('p',pos))

    if(N(x)){this.X(x)}
    if(y){this.Y(y)}
    return this}
$.fn.P = function(pos,x,y){var e=this,g=G(arguments)
    if(g.u ){ return e.css('position') }
    e.css('position', oO('p', pos))
    if(N(g.s)){e.X(g.s)}
    if(g.t){e.Y(g.t)}
    return e}
$.fn.ab=  $.fn.abs=function(x,y){var e=this

    return e.P('a',x,y)

}

$.fn.xK= $.fn.removeClass
$.fn.oH=$.fn.outerHeight


$.wn=function(){return $(window)}

$.fn.iA=$.fn.insertAfter
$.fn.s= $.fn.css
$.fn.N= $.fn.next


$.fn.hr=function(href){
    this.attr({href: href})
    return this
}

$.fn.isLi= $.fn.iLi=function(){
    return _.isElement(this) &&  _h('HTMLLIElement', this)}

$.fn.li=function(){   var  g=G(arguments),
    li = $.li()
    this.A( li )
    g.e(function(g){ li.A(g)  })
}

$.fn.C$=function(s){
    if(s){ $l(s + ' !!!')}
    return this.C($r())
}


$.pre=function(){ return  $("<pre>").A() }



$.l$=function(a){ $.c$(); $l(a||'!'); return a }

$.A=function(){var g=G(arguments)
    g.e(function(a){$('body').A(a)})
    return $
}
$.B=function(){var g=G(arguments)
    $l('if looking for bold, use $.b')
    g.e(function(a){$('body').A(a)})
    return $('body')}

$.fn.pp=function(a){ this.pp(a); return this}


$.fn.sb =function(fn){

    return  this.submit(

        function(e){
            e.pD= e.preventDefault
            fn(e)
        })
}



$.fn.mD=function(l){
    var c=this
    c.mousedown(function(e){l(e.clientX, e.clientY)})
    return c}
$.fn.pM=function(l){
    var c=this
    c.pressmove(function(e){l(e.clientX, e.clientY)})
    return c}

$.fn.chk=function(){ this.at('checked', true) }
$.fn.sz=function(sz){
    return this.at('size', sz)
}
$.fn.mlt=function(m){
    return this.at('multiple', true)
}
$.fn.hv= $.fn.hover
$.fn.h= $.fn.ht=$.fn.html
$.fn.oh=function(){
    return this[0].outerHTML
}
$.fn.m=function(o){

    var e = this

    if(o.mD){e.mD(o.mD)}
    if(o.mU){e.mD(o.mU)}
    if(o.pM){e.pM(o.pM)}

    return e}
$.fn.col = function(col){
    return this.css('color', oO('c', col))}
$.fn.C = function(c, c2){
    if(c2){return this.C(c).col(c2)}
    if(c=='*'){
        c = Yano.random()
        $l(c)
    }
    return this.css('backgroundColor', oO('c', c))
}
$.fn.A=function(stuff){
    if( U(stuff)){$('body').append(this); return this}
    this.append.apply(this, arguments)
    return this}
$.fn.W=function(width){return width? this.width(width): this.width()}
$.fn.H=function(height){return height? this.height(height): this.height()}

$.fn.E=function(html){
    this.empty(); this.html(html); return this
}
$.fn.WH=function(w,h){h=h||w;return this.W(w).H(h)}
$.fn.minW=function(a){return this.css('min-width',a)}
$.fn.minH=function(a){return this.css('min-height',a)}
$.fn.maxW=function(a){return this.css('max-width',a)}
$.fn.maxH=function(a){return this.css('max-height',a)}
$.fn.Z=function(w,h){return this.W(w).H(h||w)}
$.fn.Y=$.fn.top=function(top){
    if(N(top)){return this.css('top', top)}
    var top = this.css('top')
    if(top=='auto'){return 'auto'}
    return parseInt(top)}
$.fn.X=$.fn.left=function(left){
    if(N(left)){return this.css('left', left)}
    var left = this.css('left')
    if(left=='auto'){return 'auto'}
    return parseInt(left)}
$.fn.XY = function(x,y){

    x=N(x)?x:0

    if(U(y)){y=x}
    return this.X(x).Y(y)
}
$.fn.background=function(bg){
    if(U(bg)){return this.css('background')}
    this.css('background', bg)
    return this
}
$.fn.backgroundPosition=function(bg){
    if(U(bg)){return this.css('backgroundPosition')}
    this.css('backgroundPosition', bg)
    return this
}
$.fn.right=function(right){
    if(U(right)){
        return this.css('right')
    }

    this.css('right', right)
    return this
}
$.fn.bottom=function(bottom){
    if(U(bottom)){
        return this.css('bottom')
    }
    this.css('bottom', bottom)
    return this
}
$.fn.id=function(id){ if(U(id)){ return this.attr('id')}; this.attr('id', id);return this     }
$.fn.name=function(name){ if(U(name)){ return this.attr('name')}; this.attr('name', name);return this     }
$.fn.drag = function(){

    this.A()
    this.each(function(){
        $(this).css('top', $(this).position().top )
        $(this).css('left', $(this).position().left)})

    this.P('a')

    this.on('mousedown', function(e){

        var el = $(this)

        var offset = el.offset(),
            deltaX = e.pageX-offset.left,
            deltaY = e.pageY-offset.top

        $('html').on('mousemove', function(e){
            var x=e.pageX - deltaX,
                y=e.pageY - deltaY

            el.left(x)
            el.top(y)

        }).on( 'mouseup' , function(){  $(this).off() })

    })

    //touchDrg(element)
    return this

}
$.fn.mar=function(margin){

    if(U(margin)){ return this.css('margin') }

    this.css( 'margin' , margin ); return this }
$.fn.marBottom=function(margin){

    if(U(margin)){ return this.css('marginBottom') }

    this.css( 'marginBottom' , margin ); return this }
$.fn.marTop=function(margin){

    if(U(margin)){ return this.css('marginTop') }

    this.css( 'marginTop' , margin ); return this }
$.fn.marLeft=function(margin){

    if(U(margin)){ return this.css('marginLeft') }

    this.css( 'marginLeft' , margin ); return this }
$.fn.marRight=function(margin){

    if(U(margin)){ return this.css('marginRight') }

    this.css( 'marginRight' , margin ); return this }
$.fn.marHor=function(a){return this.marLeft(a).marRight(a)}
$.fn.marVer=function(a){return this.marTop(a).marBottom(a)}

$.fn.K= function(){  $.fn.addClass.apply(this, arguments); return this  }
$.fn.fontSize=function(z){ this.css('font-size', z)

    return this}
$.fn.textAlign=function(z){

    this.css('text-align', z)

    return this}
$.fn.opacity=$.fn.alpha=function(z){

    this.css('opacity', z)

    return this}
$.fn.type=function(type){
    if(U(type)){return this.attr('type')}
    this.attr('type',type);return this
}
$.fn.display=function(display){
    if(U(display)){return this.css('display')}
    this.css('display',display);return this
}
$.fn.float=function(float){
    if(U(float)){return this.css('float')}
    this.css('float',float);return this
}
$.fn.overflow=function(overflow){
    if(U(overflow)){return this.css('overflow')}
    this.css('overflow',overflow);return this
}
$.fn.href=function(href){
    if(U(href)){return this.attr('href')}
    this.attr('href',href);return this
}
$.fn.borderStyle= function(style){

    this.css('border-style', style)

    return this}
$.fn.borderColor=function(c){

    this.css('border-color', oO('c', c))

    return this}
$.fn.borderWidth=function(w){

    this.css('border-width',w)

    return this}
$.fn.hold=function(a){
    a.P('s')
    this.A(a)


}
$.fn.pad=function(padding){
    if(U(padding)){return this.css('padding')}
    this.css('padding',padding);return this}
$.fn.padTop=function(padding){
    if(U(padding)){return this.css('paddingTop')}
    this.css('paddingTop',padding);return this}
$.fn.padBottom=function(padding){
    if(U(padding)){return this.css('paddingBottom')}
    this.css('paddingBottom',padding);return this}
$.fn.padLeft=function(padding){
    if(U(padding)){return this.css('paddingLeft')}
    this.css('paddingLeft',padding);return this}
$.fn.padRight=function(padding){
    if(U(padding)){return this.css('paddingRight')}
    this.css('paddingRight',padding);return this}
$.fn.padHor=function(a){return this.padLeft(a).padRight(a)}
$.fn.padVer=function(a){return this.padTop(a).padBottom(a)}
$.fn.bor=function(border){
    if(U(border)){return this.css('border')}
    this.css('border',border);return this}
$.fn.zIndex=function(z){
    if(U(z)){return this.css('z-index')}
    this.css('z-index',z);return this}
$.fn.el = function(e){
    if(U(e)){
        console.log( $('<div>').append(  this.clone()  ).html() )
        return this}}
$.fn.free=function(){

    $('body').A( this )

    this.P('a')
}
$.fn.dismiss=function(a){
    return this.attr('data-dismiss',a)}
$.fn.delButton=function(){
    var that=this

    this.prepend(

        $.div().A(
            $.button(  'x', function(){ that.remove() }).K('pull-right').mar(20)
        )

    )


    return this}
$.fn.for=function(forWhat){return this.attr('for', forWhat)}
$.fn.placeholder=function(forWhat){return this.attr('placeholder', forWhat)}
$.fn.src  = function(a){


    if( U(a) ){return this.attr('src')}

    this.attr('src',  src(a) )

    return this
}
$.fn.h1 = function(text){

    this.A($.h1(text))
    return this}
$.fn.h2 = function(text){

    this.A($.h2(text))
    return this}
$.fn.h3 = function(text){

    this.A($.h3(text))
    return this}
$.fn.h4 = function(text){

    this.A($.h4(text))
    return this}
$.fn.h5 = function(text){

    this.A($.h5(text))
    return this}
$.fn.h6 = function(text){

    this.A($.h6(text))
    return this}
$.fn.ipsum=function(){    var that =this

    _.each(arguments, function(num){
        that.A( $.ipsum(num) )
    })

    return this}
$.fn.ipsumP=function(){
    var that =this

    _.each(arguments, function(num){
        that.A( $.ipsumP(num) )
    })
    return this}
$.fn.role=function(role){
    if(U(role)){return this.attr('role')}
    this.attr('role', role)
    return this

}
$.fn.xs = function(num){

    return this.K('col-xs-' + num)

}
$.fn.sm = function(num){

    return this.K('col-sm-' + num)

}
$.fn.md= function(num){

    return this.K('col-md-' + num)

}
$.fn.lg= function(num){

    return this.K('col-lg-' + num)

}
$.fn.centerOnWindow = function(){
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
            $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
            $(window).scrollLeft()) + "px" )
    return this}

$.fn.xCenter=function(){

    return this.P( 'a' ).css({  left: '50%', 'margin-left': '-100px'  })}

$.fn._getPosition=function(){



    var e = this[0],
        x = 0,
        y = 0

    while (_.isElement(e)) {
        y += e.offsetTop
        x += e.offsetLeft
        if (isBodyElement(e)){e=0}
        e=e.offsetParent||e
    }
    return { x: x, y: y }

    function isBodyElement(e){return O(e)&& e.tagName.toUpperCase() == 'BODY'}


}



$.fn.ap2=function(el){
    el.A(this)
    return this
}

$.fn.cv=$.fn.can=function(){

    var c=  $.can.apply($, G(arguments))

    this.A(c)

    return this
}


$.fn.ch=function(){var g=G(arguments),ch,o
    o= g.F_? {fn: g.f} :
    {sel: g.f, fn: g.s}
    ch=this.children(o.sel)
    if(o.fn){ _.e(ch, o.fn) }
    return ch
}







$.fn.Cv=$.fn.Can=function(){

    var c
    c=  $.c.apply($, G(arguments))
    this.A(c)
    return c
}
$.fn.rm=function(){return this.remove()}

$.fn.dg=function(){return this.drag()}
$.fn.al=function(al){return this.opacity(al)}



$.fn.in=function(num){
    var g=G(arguments)
    this.delay(num * 1000)
    return this
}
$.fn.pp2=function(a){this.prependTo(a); return this}
$.fn.a2=function(a){a.A(this); return this}
$.fn.tt=$.fn.tit= $.fn.title=function(t,c){var p
    p = $.p(t).fS(24).K('text-center').C('X', c||'z').mH(10).pH(30)
    this.A(p, $.hr().fS(10))
    return this
}
$.fn.gg = $.fn.toggle
$.fn.pa= $.fn.parent

$.fn.v = function(v){var g=G(arguments),v

    if(D(v)){
        this.val(v)

        return this
    }
    v=this.val()
    if(!g.p){this.val('')}
    return v

}


$.fn.Vx=function(){
    var val= this.val()
    this.val('')
    return val
}


$.fn.fi= $.fn.find
$.fn.pp= $.fn.prepend
$.fn.rm=function(){return this.remove()}
$.fn.e = $.fn.each
$.fn.$= $.fn.click



$.fn.col = function(col){
    return this.css('color', oO('c', col))}
$.fn.C = function(col, c2){
    if(c2){return this.C(col).col(c2)}

    if(col=='*'){
        $l(col)

        col = Yano.random() }

    return this.css('backgroundColor', oO('c', col))
}
$.fn.al= $.fn.opacity=$.fn.alpha=function(z){

    this.css('opacity', z)

    return this}
$.fn.W=function(w){
    if(U(w)) {return  this.width()}
    this.width(w)
    return this
}
$.fn.H=function(height){return height? this.height(height): this.height()}
$.fn.mW= $.fn.minW=function(a){return this.css('min-width',a)}
$.fn.mH= $.fn.minH=function(a){return this.css('min-height',a)}
$.fn.MW= $.fn.maxW=function(a){return this.css('max-width',a)}
$.fn.MH= $.fn.maxH=function(a){return this.css('max-height',a)}
$.fn.WH=$.fn.Z=function(w,h){h=h||w;return this.W(w).H(h)}
$.fn.xs = function(num){

    return this.K('col-xs-' + num)

}

$.fn.sm1 = function(num){
    return this.K('col-sm-' + num)
} //will change back

//sm small, sb submit

$.fn.md= function(num){

    return this.K('col-md-' + num)

}
$.fn.lg= function(num){

    return this.K('col-lg-' + num)

}
$.fn.bg=function(bg){
    if(U(bg)){return this.css('background')}
    this.css('background', bg)
    return this
}
$.fn.bgP=function(bg){
    if(U(bg)){return this.css('backgroundPosition')}
    this.css('backgroundPosition', bg)
    return this
}


$.fn.free=function(){
    $('body').A( this )
    this.P('a')
}//?

$.fn.Y= $.fn.t=function(top){

    if(N(top)){return this.css('top', top)}
    var top = this.css('top')
    if(top=='auto'){return 'auto'}
    return parseInt(top)
}



$.fn.l=function(l){var q=this,g=G(arguments)

    if(N(l)){
        q.css('left', l)
        return q
    }

    l = q.css('left')
    return l=='auto'? 'auto':
        q.position().left
}


$.fn.X=  function(l){var q=this,g=G(arguments)

    if(N(l)){

        q.css('left',

            g.p? q.X()+l:
                l
        )

        return q
    }

    l = q.css('left')
    return l=='auto'? 'auto': parseInt(l)

}




$.fn.XY = function(x,y){

    x=N(x)?x:0

    if(U(y)){y=x}
    return this.X(x).Y(y)
}
$.fn.R=  function(right){
    if(U(right)){
        return this.css('right')
    }
    this.css('right', right)
    return this
}
$.fn.L=  function(n){
    if(U(n)){
        return this.css('left')
    }
    this.css('left', n)
    return this
}

$.fn.LR=function(l,r){var q=this
    if(O(l)){r= l.r; l= l.l }
    if(N(l)){q.L(l)}
    if(N(r)){q.R(r)}
    return q
}


$.fn.B= $.fn.bottom=function(bottom){
    if(U(bottom)){
        return this.css('bottom')
    }

    this.css('bottom', bottom)
    return this
}
$.fn.p=$.fn.P = function(pos,x,y){
    if( U(pos) ){ return this.css('position') }
    this.css('position', oO('p',pos))

    if(N(x)){this.X(x)}
    if(y){this.Y(y)}
    return this}

$.fn.ab= $.fn.abs=function(x,y){
    this.P('a', x,y)
    return this
}

$.fn.cw=$.fn.centerOnWindow = function(){
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
            $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
            $(window).scrollLeft()) + "px" )
    return this}
$.fn.xc=$.fn.xCenter=function(){

    return this.P( 'a' ).css({  left: '50%', 'margin-left': '-100px'  })}

$.fn._getPosition=function(){



    var e = this[0],
        x = 0,
        y = 0

    while (_.isElement(e)) {
        y += e.offsetTop
        x += e.offsetLeft
        if (isBodyElement(e)){e=0}
        e=e.offsetParent||e
    }
    return { x: x, y: y }

    function isBodyElement(e){return O(e)&& e.tagName.toUpperCase() == 'BODY'}


}

$.fn.os=function(){return this.offset()}
$.fn.ho=$.fn.hold=function(a){
    a.P('s')
    this.A(a)
}
$.fn.mar = function (margin) {

    if (U(margin)) {
        return this.css('margin')
    }

    this.css('margin', margin);
    return this
}
$.fn.mB= $.fn.marBottom = function (margin) {

    if (U(margin)) {
        return this.css('marginBottom')
    }

    this.css('marginBottom', margin);
    return this
}
$.fn.mT= $.fn.marTop = function (margin) {

    if (U(margin)) {
        return this.css('marginTop')
    }

    this.css('marginTop', margin);
    return this
}
$.fn.mL=  $.fn.marLeft = function (margin) {

    if (U(margin)) {
        return this.css('marginLeft')
    }

    this.css('marginLeft', margin);
    return this
}
$.fn.mR=    $.fn.marRight = function (margin) {

    if (U(margin)) {
        return this.css('marginRight')
    }

    this.css('marginRight', margin);
    return this
}
$.fn.mH= $.fn.marHor = function (a) {
    return this.marLeft(a).marRight(a)
}
$.fn.mV= $.fn.marVer = function (a) {
    return this.marTop(a).marBottom(a)
}
$.fn.bS = $.fn.borderStyle = function (style) {

    this.css('border-style', style)

    return this
}

$.fn.e= $.fn.each

$.fn.bdC= $.fn.borderColor = function (c) {

    this.css('border-color', oO('c', c))

    return this
}
$.fn.bW= $.fn.borderWidth = function (w) {

    this.css('border-width', w)

    return this
}
$.fn.at= $.fn.attr
$.fn.bor = function (border) {
    if (U(border)) {
        return this.css('border')
    }
    this.css('border', border);
    return this
}
$.fn.pad = function (padding) {
    if (U(padding)) {
        return this.css('padding')
    }
    this.css('padding', padding);
    return this
}
$.fn.pT=    $.fn.padTop = function (padding) {
    if (U(padding)) {
        return this.css('paddingTop')
    }
    this.css('paddingTop', padding);
    return this
}
$.fn.pB=    $.fn.padBottom = function (padding) {
    if (U(padding)) {
        return this.css('paddingBottom')
    }
    this.css('paddingBottom', padding);
    return this
}
$.fn.pL=    $.fn.padLeft = function (padding) {
    if (U(padding)) {
        return this.css('paddingLeft')
    }
    this.css('paddingLeft', padding);
    return this
}
$.fn.pR=    $.fn.padRight = function (padding) {
    if (U(padding)) {
        return this.css('paddingRight')
    }
    this.css('paddingRight', padding);
    return this
}
$.fn.pH=   $.fn.padHor = function (a) {
    return this.padLeft(a).padRight(a)
}
$.fn.pV=    $.fn.padVer = function (a) {
    return this.padTop(a).padBottom(a)
}
$.fn.h1 = function(t){ return this.A($.h1(t)) }
$.fn.h2 = function(text){

    this.A($.h2(text))
    return this}
$.fn.h3 = function(text){

    this.A($.h3(text))
    return this}
$.fn.h4 = function(text){

    this.A($.h4(text))
    return this}
$.fn.h5 = function(text){

    this.A($.h5(text))
    return this}
$.fn.h6 = function(text){

    this.A($.h6(text))
    return this}
$.fn.ips=$.fn.ipsum=function(){    var that =this

    _.each(arguments, function(num){
        that.A( $.ipsum(num) )
    })

    return this}
$.fn.ipsumP=function(){
    var el =this

    _.e(arguments, function(num){
        el.A( $.ipsumP(num) )
    })
    return el
}


$.fn.T= function(){var g=G(arguments)
    this.text.apply(this,g)
    return this
}

$.fn.fS= function(z){ this.css('font-size', z)

    return this}
$.fn.tA=  function(z){
    this.css('text-align', z)
    return this}
$.fn.ov = $.fn.overflow=function(overflow){
    if(U(overflow)){return this.css('overflow')}
    this.css('overflow',overflow);return this
}
$.fn.hd= $.fn.hide
$.fn.sh= $.fn.show
$.fn.dg= $.fn.drag = function(){

    this.A()
    this.each(function(){
        $(this).css('top', $(this).position().top )
        $(this).css('left', $(this).position().left)})

    this.P('a')

    this.on('mousedown', function(e){

        var el = $(this)

        var offset = el.offset(),
            deltaX = e.pageX-offset.left,
            deltaY = e.pageY-offset.top

        $('html').on('mousemove', function(e){
            var x=e.pageX - deltaX,
                y=e.pageY - deltaY

            el.left(x)
            el.top(y)

        }).on( 'mouseup' , function(){  $(this).off() })

    })

    //touchDrg(element)
    return this

}
$.fn.ty= $.fn.type=function(type){
    if(U(type)){return this.attr('type')}
    this.attr('type',type);return this
}
$.fn.dp= $.fn.display=function(display){
    if(U(display)){return this.css('display')}
    this.css('display',display);return this
}
$.fn.float=function(float){
    if(U(float)){return this.css('float')}
    this.css('float',float);return this
}
$.fn.ph= function(forWhat){return this.attr('placeholder', forWhat)}

$.fn.dismiss=function(a){
    return this.attr('data-dismiss',a)}

$.fn.xBt=$.fn.delButton=function(){var el=this
    el.pp( $.d().A( $.bt(  'x', function(){ el.rm() })
                .K('pull-right').mar(20)
        )
    )
    return el}

$.fn.sib=function(){var g=G(arguments); return this.sib.apply(this. g)}
$.fn.hv= $.fn.hover
$.fn.fr=$.fn.for=function(forWhat){return this.attr('for', forWhat)}
$.fn.mD = function (l) {
    var c = this
    c.mousedown(function (e) {
        l(e.clientX, e.clientY)
    })
    return c
}
$.fn.pM=function(l){
    var c=this
    c.pressmove(function(e){l(e.clientX, e.clientY)})
    return c}
$.fn.m=function(o){

    var e = this

    if(o.mD){e.mD(o.mD)}
    if(o.mU){e.mD(o.mU)}
    if(o.pM){e.pM(o.pM)}

    return e}
$.fn.pm=$.fn.pressmove=function(func){
    var mouse_pressed
    this.mousedown(function(){mouse_pressed=true})
    this.mouseup(function(){mouse_pressed=false})



    this.mousemove(function(e){


        if(mouse_pressed){

            func(e)

        }

    })






    return this}
$.fn.mp=$.fn.mousePoint=function(e, scale){
    scale=N(scale)?scale:1
    return V(e.pageX/scale,e.pageY/scale )
}
$.fn.H5=function(a){return $.h5(a).a2(this)}

$.slP=$.fn.selPic=function(){
    $('.pic').e(function(){$(this).C('b')})
    this.parent().C('y')
    //$(pic).parent().C('y')
}
$.fn.tl=$.fn.trans=function(transform){
    $l('transform')
    return this.css({transform: transform})}
$.fn.A=function(stuff){
    if( U(stuff)){$('body').append(this); return this}
    this.append.apply(this, arguments)
    return this}


$.fn.E=function(html){
    this.empty(); this.html(html); return this
}
$.fn.id=function(id){ if(U(id)){ return this.attr('id')}; this.attr('id', id);return this     }
$.fn.n= $.fn.name=function(name){ if(U(name)){ return this.attr('name')}; this.attr('name', name);return this     }

$.fn.K= function(){
    $.fn.addClass.apply(this, arguments); return this
}


$.fn.hf=$.fn.href=function(href){
    if(U(href)){return this.attr('href')}
    this.attr('href',href); return this
}
$.fn.zi=$.fn.zIndex=function(z){
    if(U(z)){return this.css('z-index')}
    this.css('z-index',z);return this}
$.fn.el = function(e){
    if(U(e)){
        console.log( $('<div>').append(  this.clone()  ).html() )
        return this}}
$.sr=$.fn.src= function(a){
    if( U(a) ){return this.attr('src')}

    this.attr('src', J.src(a) )

    return this
}
$.ro=$.fn.role=function(role){
    if(U(role)){return this.attr('role')}
    this.attr('role', role)
    return this

}
$.cx=$.fn.ctx = function () {
    return this[0].getContext('2d')
}
$.fn.wor = $.fn.world = function () {
    var can = this
    var w = b2d.wor.apply(null, arguments).bug(can, 30, '*')
    w.can = can
    w.ctx = can.ctx()
    return w
}
$.fn.getPosition = $.fn.getTotalOffset = function () {

    var e = this, x = 0, y = 0

    while (E(e) && e.tagName) {

        y += e.offsetTop

        x += e.offsetLeft

        if (isBodyElement(e)) {
            e = 0
        }

        e = e.offsetParent || e
    }

    return {x: x, y: y}


}//just gets the TOTAL offset of ANY element
$.fn.gw=$.fn.grow = function(){

    originalWidth =  this.W()
    originalHeight = this.H()

    this.on('mousedown', function(e){


        mx = e.clientX
        my = e.clientY


        $.mouseMove(function(e){

            this.WH( originalWidth +  e.clientX - mx,
                originalHeight +  e.clientY - my )

        })

        $.mouseUp(function(){ $(this).off() })  //mouseUp anything?
        this.children().on('mousedown', function(e){e.stopPropagation()})

    })

}




$.fn.bg = $.fn.bgI=   function (url) {//set background image
    this.bgI('url("' + Y.src(url) + '")');
    return this
}
$.fn.bp =$.positionBackgroundImage = function (x, y) {
    var g = G(arguments), x = g[0], y = g[1];
    x = N(x) ? x : 0;
    y = N(y) ? y : 0;
    this.css({backgroundPos: x + 'px ' + y + 'px'});
    return this

}
$.fn.fr =  function (n, w) {
    if (O(n)) {q.bp(n.n, n.w)}
    else {q.bp(n * w)}
    return this

}


CORNERS=function(){
    //  dva(2, 2, 2, 2 )
    div = $.dA(200,200).A(
        $.dA('r', 20, 20).top(-10).left(-10),
        $.dA('y', 20, 20).bottom(-10).right(-10),
        $.dA('g', 20, 20).top(-10).right(-10),
        $.dA('b', 20, 20).bottom(-10).left(-10)
    );
    i = $.dF('u').col('w').fS( 20).al(.2).tA('c').width('100%').top(100);
    i.H( W() + ' * ' + H() );
    Z(function(){  i.H(  W() + ' * ' + H() )  });

    $.$( function(){ _.rat( function(){$('body').C($r())  } , 10 )
    });
    i.grow()
}
