


mouse=function(){


    $.md=$.mousedown=function(func){
        $('body').on('mousedown', func);
        return this}
    $.mu=$.mouseup=function(func){
        $('body').on('mouseup', func);
        return this}
    $.mm=$.mousemove=function(func){

        $('body').on('mousemove', func);
        return this}
    $.ts=$.touchstart=function(func){

        $('body').on('touchstart', func);
        return this}
    $.te=$.touchend=function(func){

        $('body').on('touchend', func);
        return this}
    $.oMD=function(fn){
        $.mousedown(function(e){
            fn(e.clientX,e.clientY,e)});
        return $}
    $.oMM=function(fn){
        $.mousemove(function(e){
            fn(e.clientX, e.clientY, e)});
        return $}
    $.oMU = function (fn) {
        $.mouseup(function (e) {
            fn(e.clientX, e.clientY, e)
        });
        return $}
    $.$$=function(a,b,c){$('body').$$(a,b,c); return this}
    $.$=function(){

        var b=$('html');

        b.click.apply(b, arguments);

        return $}




};mouse()


//time
$.sec=function(f){return setTimeout(f,1000)}
$.do=function(func){
    setTimeout(func,0);
    return 'nada'}

$.T = function(a,b){return setTimeout(_v(a),b)}
$.dateTime = $.date =  dateTime=dt=function(a){
    var d=new Date(a);
    d.y=d.getFullYear;
    d.d=d.getDate;
    d.D=d.getDay;
    d.M= d.getMinutes;
    d.m= d.getMonth;
    d.date=function(){return d.d()+'/'+ d.m()+'/'+ d.y()};
    d.time=function(){return d.h()+':'+ d.M()};
    d.dt=function(){return d.date()+' '+ d.time()};
    d.ms= d.getMilliseconds;
    d.h= d.getUTCHours;
    d.s= d.getSeconds;
    //d.tm= d.getTime
    //d.gto= d.getTimezoneOffset
    d.udt= d.getUTCDate;
    d.gud= d.getUTCDay;
    d.ufy= d.getUTCFullYear;
    d.gh= d.getHours;
    d.gms= d.getUTCMilliseconds;
    d.um= d.getUTCMinutes;
    d.um= d.getUTCMonth;
    d.us= d.getUTCSeconds;
    return d}
$.dateAndTime =dtt=function(a){
    var datetime = new Date(a);
    return datetime.date()+' '+ datetime.time()}
/////////


$.scroll =function(a){
    return $(window).scroll(a||function(){$('body').C('*')})
}


$.$=   m$ = function(f){ return $(document).on('click', _v(f) )}
$.$$=   m$$ = function(f){ return $(document).on('dblclick', _v(f) )}


$.fn.toR = $.fn.moveRight=function(num){
    num=num||20

    if(this.left()=='auto'){this.left(0)}

    this.left( parseInt(this.left()) + num)

    return this
}

$.fn.toL = $.fn.moveLeft=function(num){
    num=num||20
    if(this.left()=='auto'){this.left(0)}
    this.left( parseInt(this.left()) - num)
    return this}
$.fn.toU =$.fn.moveDown=function(num){num=num||20
    if(this.top()=='auto'){this.top(0)}
    this.top( this.top()  - num  )
    return this}
$.fn.toD =$.fn.moveDown=function(num){num=num||20
    if(this.top()=='auto'){this.top(0)}
    this.top( this.top()  + num  )
    return this}
$.key = $.keyDown = $.kD = kD = function self(key, funk){

    if(O(key)){
        _.each(key, function(func, arrKey){
            if( s$(arrKey).isUpper() ){   $.kU(arrKey.toLowerCase(), func)  }
            else { self(arrKey,func) }
        })

        return}

    keyObj={
        up:38,u:38,

        down:40, d:40,
        left:37, l:37,
        right:39, r:39,
        space:32,s:32,
        enter:13, e:13}

    if(keyObj[key]){key = keyObj[key]}

    $('body').on('keydown', function(e){
        if (e.which == key) { funk(e) }
    })}
$.keyUp = $.kU = kU = function(key, funk){
    keyObj={
        up:38,u:38,
        down:40, d:40,
        left:37, l:37,
        right:39, r:39,
        space:32,s:32,
        enter:13, e:13}
    if(keyObj[key]){key = keyObj[key]}
    $('body').on('keyup', function(e){

        if (e.which == key) { funk(e) }
    })
}
$.fn.keyControls = function(num){
    var args=G(arguments), that=this

    g=args

    this.P('a')

    if(args.P){
        $.kD('left', function(){that.toL(num)})
        $.kD('right', function(){that.toR(num)})}
    if(args.N){
        $.kD('up', function(){that.toU(num)})
        $.kD('down',   function(){that.toD(num)} )}
}// o.keyControls(num) should deprecate use of key(o)

$.fn.hideOnKeyDown = function(a){
    var that = this
    $('body').keydown(function(ev){e=ev
        $l(e.which)
        if(e.which == 40){ that.hide()  }
        if(e.which == 38){ that.show()  }
    })
}


testMove=function(){z()
    d = $.d('b',100,100, '+')

    f = function(num){d.toR(num)}
    setInterval(f,100)
}
testMoveAndWarp=function(){z()
    d = $.d('b',100,100,'+')
    f = function(num){d.toR(num)}
    setInterval(f,100)}
testInputKeys=function(){
    z()


    input =  $.ip().A()

    $.sp('span ').C('y').A().id('spn')

    input.on('keypress', function(e){

        $('#spn').text(

            $('#spn').text() + e.which
        )

    })

        .on('keyup',function(e){

            if(e.which==13){$l('enter')
                $('body').C('*') }})

        .on('keydown', function(e){

            var key = e.which, //why these nums?
                result = (key>48  &&  key<57)||  ( key>96 && key<105) ||  (key == 8)
            $l('result: '+result)
        })

}


testInputUpOrDown  = function(){

    $.input().A()

    onTextInputKeyup(function(e){

        var dir =  (parseInt(e.which) == 38)? 'up'
            : (parseInt(e.which) == 40)? 'down'
            : 'neither'

        $l(dir)
    })

    function onTextInputKeyup(func){return $('input[type=text]').on('keyup', func)}
}
//cool!
testUpperVsLowerLetters=function(){z()

    i = $.input().A()

    i.on('keydown keypress',
        function(e){
            $l(e.type+':'+ String.fromCharCode(e.which) +'('+ e.which +')')})
}
testHideOnKeyDown=function(){z()

    c = $.canvas('r', 500).A()

    c.hideOnKeyDown()


}

responsiveBottomPanel=function(){z()


    $.div('red').P('f').X(0).css({

        bottom: 0,
        width: '50%',  height: '50%',
        'min-width' :110,
        'max-width' :318,

        opacity: 4

    }).A().A(
        $.img('me')
    )



    // call and then play with browser size


}

slowFadeAway=function self(opacity){   z()

    //makes a yellow square and black dot??

    c = $.c('y',500,500)
    c.cir(10,10,10)

    opacity = U(opacity) ? 0.2 : parseFloat(opacity) - 0.001

    c.opacity(opacity).fillStyle('red').fillRect()

    if(opacity < 1){ setTimeout(function(){ self(opacity)}, 30) }

}




drawHalf=function(c,i){c.dI(i, -i.width/2, -i.h/2)}


//parallax!!!
CanvasLayer=function(bg){

    c = $.c('y',500,500).P('a').W('100%').H(256)
    if(bg){c.bg(bg)}
    return c
}

DivLayer=function(bg){
    d = $.d('y',500,500).P('a').W('100%').H(256)
    if(bg){d.bg(bg)}
    return d
}



transparent=function(i, num){
    if(!N(num)){ return 'transparent url('+i+'.png)'  }
    return 'transparent url('+ i +'.png)' + num +'% 0px'
}


PARALLAX=function(){z()

    CanvasLayer( transparent('me', 10))

    CanvasLayer( transparent('guy', 300))


}

//awesome!!!!!
PARALLAXBYMOUSE=function(){z()

    back=DivLayer(transparent('me') )
    front=DivLayer(transparent('guy'))

    speed=0
    xp=0

    $('body').mousemove(function(e){

        speed= e.pageX - ( W()/2 )

        speed /= ( W()/2 )

        $l(speed)
    })
    $('body').mouseout(function(e){speed=0})


    setInterval(function(){
        xp += speed
        back.bgP( xp+'px 0px')
        front.bgP( (xp*3)+'px 0px')
    },30)}


drag = drg=function(element){
    var q= $b( qq(element).q ).css({ position: 'absolute' }).on('mousedown', function(e){
        var offset = $(this).offset(),
            deltaX = e.pageX - offset.left, deltaY = e.pageY - offset.top
        $('html').on( 'mousemove' , function( e ){ q.css({ left:  e.pageX - deltaX , top: e.pageY - deltaY }) })
            .on( 'mouseup' , function(){  $(this).off() })

    })

    touchDrg(element)
    return qq(element)

}

cjs.Keys = function(o){

    if(O(o)){

        if(F(o.u)){
            cjs.tick(function(){if(cjs.Keys.u){ o.u(cjs.Keys.u) } })}

        if(F(o.d)){
            cjs.tick(function(){
                if(cjs.Keys.d){ o.d(cjs.Keys.d) } })}

        if(F(o.l)){
            cjs.tick(function(){
                if(cjs.Keys.l){
                    o.l(cjs.Keys.l)
                } })}

        if(F(o.r)){
            cjs.tick(function(){if(cjs.Keys.r){
                o.r(cjs.Keys.r)
            } })}

    }
}
cjs.watchKeys=function(){
    cjs.Keys.l = cjs.Keys.left = false
    cjs.Keys.r = cjs.Keys.right = false
    cjs.Keys.u = cjs.Keys.up = false
    cjs.Keys.d = cjs.Keys.down = false

    $.kD('l',function(){
        if($.test){$l('left pressed')}
        cjs.Keys.l = cjs.Keys.left = true
        cjs.Keys.dir = 'left'})



    $.kU('l',function(){if($.test){$l('left lifted')}
        cjs.Keys.l = cjs.Keys.left = false
    })
    $.kD('r',function(){if($.test){$l('right pressed')}
        cjs.Keys.r = cjs.Keys.right = true
        cjs.Keys.dir = 'right'})
    $.kU('r',function(){if($.test){$l('right lifted')}
        cjs.Keys.r = cjs.Keys.right = false
    })
    $.kD('u',function(){if($.test){$l('up pressed')}
        cjs.Keys.u = cjs.Keys.up = true
    })
    $.kU('u',function(){if($.test){$l('up lifted')}
        cjs.Keys.u = cjs.Keys.up = false
    })
    $.kD('d',function(){if($.test){$l('down pressed')}
        cjs.Keys.d = cjs.Keys.down = true
    })


    $.kU('d',function(){
        if($.test){$l('down lifted')}
        cjs.Keys.d = cjs.Keys.down = false
    })}
$.joystick  =function(){
    $('#left').on('mousedown mouseover touchenter', function(e){cjs.Keys.left = true ;e.preventDefault()})
    $('#left').on('mouseup mouseout touchleave', function(){cjs.Keys.left = false})
    $('#jump').on('mousedown mouseover touchenter', function(){  cjs.Keys.up = true   })
    $('#jump').on('mouseup mouseout touchleave', function(){  cjs.Keys.up = false  })
    $('#right').on('mousedown mouseover touchenter', function(){ cjs.Keys.right = true})
    $('#right').on('mouseup mouseout touchleave', function(){cjs.Keys.right = false })}
TESTWATCHKEYS=function(){z()
    $.test=true
    cjs.watchKeys()}
TESTKEYBOARD=function(){z()

    cjs.watchKeys()

    b2.mW({debug:true})

    w.footListener()


    //  p = w.addMe().controlMe('standard')

    b=w.ba()

    b.bindSprite('guy')

    b.controlMe('basic')

}
KEYWATCH = function(){

    J=cjs
    $.test=true

    J.Keys.l = J.Keys.left = false
    J.Keys.r = J.Keys.right = false
    J.Keys.u = J.Keys.up = false
    J.Keys.d = J.Keys.down = false



    $.kU('l',function(){
        if($.test){$l('left lifted')}
        J.Keys.l = J.Keys.left = false
    })

    $.kD('l',function(){
        if($.test){$l('left pressed')}
        J.Keys.l = J.Keys.left = true
        J.Keys.dir = 'left'})





    $.kD('l',function(){
        if($.test){$l('left pressed')}
        J.Keys.l = J.Keys.left = true
        J.Keys.dir = 'left'})



    $.kD('r',function(){if($.test){$l('right pressed')}
        J.Keys.r = J.Keys.right = true
        J.Keys.dir = 'right'})

    $.kU('r',function(){if($.test){$l('right lifted')}
        J.Keys.r = J.Keys.right = false
    })



    $.kD('u',function(){if($.test){$l('up pressed')}
        J.Keys.u = J.Keys.up = true
    })
    $.kU('u',function(){if($.test){$l('up lifted')}
        J.Keys.u = J.Keys.up = false
    })

    $.kD('d',function(){if($.test){$l('down pressed')}
        J.Keys.d = J.Keys.down = true})

    $.kU('d',function(){if($.test){$l('down lifted')}
        J.Keys.d = J.Keys.down = false
    })


}
