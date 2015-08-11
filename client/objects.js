
preCrap=function(){


    Y = window['Y'] || {}
    Yano = {}
    STATE=function(){}
// i dont know why createjs is defined here!!!!
    cjs = createjs =  createjs||{},function(){"use strict";var a=function(a,b,c,d){this.initialize(a,b,c,d)},
        b=a.prototype=new createjs.Container;a.INDEPENDENT="independent",
        a.SINGLE_FRAME="single",a.SYNCHED="synched",b.mode,b.startPosition=0,
        b.loop=!0,b.currentFrame=0,b.timeline=null,b.paused=!1,
        b.actionsEnabled=!0,b.autoReset=!0,b.frameBounds=null,b._synchOffset=0,
        b._prevPos=-1,b._prevPosition=0,
        b._managed,b.Container_initialize=b.initialize,b.initialize=function(b,c,d,e){
        this.mode=b||a.INDEPENDENT,this.startPosition=c||0,
            this.loop=d;var f={paused:!0,position:c,useTicks:!0};this.Container_initialize(),
            this.timeline=new createjs.Timeline(null,e,f),this._managed={}},
        b.isVisible=function(){return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY)
        },b.Container_draw=b.draw,b.draw=function(a,b){
        return this.DisplayObject_draw(a,b)?!0:(this._updateTimeline(),
            this.Container_draw(a,b),!0)},b.play=function(){this.paused=!1},b.stop=function(){
        this.paused=!0},b.gotoAndPlay=function(a){this.paused=!1,this._goto(a)},
        b.gotoAndStop=function(a){this.paused=!0,this._goto(a)},b.getLabels=function(){
        return this.timeline.getLabels()},b.getCurrentLabel=function(){
        return this._updateTimeline(),this.timeline.getCurrentLabel()},
        b.clone=function(){throw"MovieClip cannot be cloned."},b.toString=function(){
        return"[MovieClip (name="+this.name+")]"},b.Container__tick=b._tick,b._tick=function(b){
        this.paused||this.mode!=a.INDEPENDENT||(this._prevPosition=this._prevPos<0?0:this._prevPosition+1,
            this._updateTimeline()),this.Container__tick(b)},b._goto=function(a){var b=this.timeline.resolve(a);
        null!=b&&(-1==this._prevPos&&(this._prevPos=0/0),this._prevPosition=b,this._updateTimeline())},
        b._reset=function(){this._prevPos=-1,this.currentFrame=0},b._updateTimeline=function(){var b=this.timeline,
        c=this.mode!=a.INDEPENDENT;if(b.loop=null==this.loop?!0:this.loop,
            c?b.setPosition(this.startPosition+(this.mode==a.SINGLE_FRAME?0:this._synchOffset),
                createjs.Tween.NONE):b.setPosition(this._prevPos<0?0:this._prevPosition,
                this.actionsEnabled?null:createjs.Tween.NONE),this._prevPosition=b._prevPosition,
        this._prevPos!=b._prevPos){this.currentFrame=this._prevPos=b._prevPos;for(var d in this._managed)this._managed[d]=1;
        for(var e=b._tweens,f=0,g=e.length;g>f;f++){var h=e[f],i=h._target;if(i!=this&&!h.passive){var j=h._stepPosition;
            i instanceof createjs.DisplayObject?this._addManagedChild(i,j):this._setState(i.state,j)}}var k=this.children;
        for(f=k.length-1;f>=0;f--){var l=k[f].id;1==this._managed[l]&&(this.removeChildAt(f),delete this._managed[l])}}},
        b._setState=function(a,b){if(a)for(var c=a.length-1;c>=0;c--){var d=a[c],e=d.t,f=d.p;for(var g in f)e[g]=f[g];
            this._addManagedChild(e,b)}},b._addManagedChild=function(b,c){b._off||(this.addChildAt(b,0),
    b instanceof a&&(b._synchOffset=c,b.mode==a.INDEPENDENT&&b.autoReset&&!this._managed[b.id]&&b._reset()),
        this._managed[b.id]=2)},b.Container__getBounds=b._getBounds,b._getBounds=function(a,b){
        var c=this.DisplayObject_getBounds();return c||(this._updateTimeline(),this.frameBounds&&(c=this._rectangle.copy(this.frameBounds[this.currentFrame]))),c?this._transformBounds(c,a,b):this.Container__getBounds(a,b)},createjs.MovieClip=a;var c=function(){throw"MovieClipPlugin cannot be instantiated."};c.priority=100,c.install=function(){createjs.Tween.installPlugin(c,["startPosition"])},c.init=function(a,b,c){return c},c.step=function(){},c.tween=function(b,c,d,e,f,g){return b.target instanceof a?1==g?f[c]:e[c]:d},c.install()}();
    b2d = Box2D


};preCrap()
COLOR={

    b:"Blue", cB:"CadetBlue", wb:"AliceBlue" ,rB:"RoyalBlue", stB:"SteelBlue",
    slB:"SlateBlue", dB:"DodgerBlue", mB:"MediumBlue",
    cB:"CornflowerBlue", mSB:"MediumSlateBlue", bA:"BlanchedAlmond",
    sB:"SkyBlue", _b:"LightBlue", dSB:"DeepSkyBlue", mB:"MidnightBlue",
    nv:"Navy", B:"DarkBlue", pB:"PowderBlue",
    _sB:"LightSteelBlue",
    _sB:"LightSkyBlue",
    g:'green', sG:"SeaGreen",  hD:"HoneyDew",  lC:"LightCyan",spG:"SpringGreen",lm:"Lime",  G:"DarkGreen", fG:"ForestGreen", mSG:"MediumSpringGreen", pG:"PaleGreen",_g:"LightGreen", yG:"YellowGreen", lG:"LawnGreen", lG:"LimeGreen", gY: "GreenYellow",mSG:"MediumSeaGreen", _sG:"LightSeaGreen", mAM:"MediumAquaMarine", aM:"Aquamarine", SG:"DarkSeaGreen", ol:"Olive", oD:"OliveDrab", OG:"DarkOliveGreen",
    sv:"Silver", gr:"gray", Gr:"DarkGray", _gr:"LightGray", dSB:"DarkSlateBlue", dSG:"DarkSlateGray", _SG:"LightSlateGray", sG:"SlateGray", dG:"DimGray",
    az:"Azure", c:"Coral", _c:"LightCoral",
    cy:"Cyan", Cy: "DarkCyan", tq:"Turquoise",
    mT:"MediumTurquoise", pT:"PaleTurquoise ", Tq:"DarkTurquoise",
    aq:"Aqua", gb:"Gainsboro", tl:"Teal", go:"Gold",
    X:"transparent", z:"Black", w:"White",
    k:"Khaki", K:"DarkKhaki", tn:"Tan",br:"Brown",

    mc:"Moccasin", ct:"Chartreuse",
    bW:"BurlyWood",
    o:"Orange", O:"DarkOrange",
    y:"Yellow",_y:"LightYellow", yC:"LemonChiffon",
    gR:"GoldenRod", GR:"DarkGoldenRod",
    pGR:"PaleGoldenRod", _GRY:"LightGoldenRodYellow",

    nW:"NavajoWhite ",bq:"Bisque", bg:"Beige",
    wh:"Wheat",
    pp:"PeachPuff", u:"Purple",ui:"Indigo",
    pl:"Plum",mP:"MediumPurple",
    v:"Violet", bV:"BlueViolet",
    dV:"DarkViolet",
    vr:"MediumVioletRed", vrl:"PaleVioletRed",
    wS:"WhiteSmoke",
    fW:"FloralWhite", gW:"GhostWhite",
    wa: "Cornsilk", iv:"Ivory", ln:"Linen",
    mC:"MintCream", pW:"PapayaWhip", oL:"OldLace",
    aW:"AntiqueWhite", ss:"SeaShell",

    sn:"Snow",
    ch:"Chocolate",
    si:"Sienna",

    pe:"Peru",
    rBr:"RosyBrown",
    saBr:"SandyBrown",
    sBr:"SaddleBrown",

    l:'Lavender', lB:"LavenderBlush", m:"Magenta",M:"DarkMagenta",
    or:"Orchid", mO:"MediumOrchid",
    fu:"Fuchsia",OR:"DarkOrchid",
    p:"Pink", _p:"LightPink", hP:"HotPink", mR:"MistyRose ",

    th:"Thistle",

    x:"DeepPink",

    r:"Red", mrn:"Maroon",
    rcr:"Crimson", R:"DarkRed", oR:"OrangeRed",
    ri:"IndianRed",
    rt:"Tomato",
    rfb:"FireBrick", s:"Salmon",
    _s:"LightSalmon",  S:"DarkSalmon"


}

CSS={

    flD: 'flex-direction',


    flW: 'flex-wrap' ,

    flJC: 'justify-content' ,


    f:'font', ff:'font-family', fc:'@font-face', // for font files
    fz:'font-size',//xx-small,x-small,small,medium,large,x-large,xx-large//smaller,larger
    fs:'font-style', //normal,oblique,italic
    fv:'font-variant', //normal,smallcaps
    fw:'font-weight',//normal,bold,100-900
    fh:'font-stretch',
    lh:'line-height',  //minimum distance between the baselines of adjacent lines of text
    ta:'text-align',         //left, right, center and justify
    td:'text-decoration',     // underline, overline, line-through, blink
    ti:'text-indent',    // indent for the first line of a block level element
    ttf:'text-transform',   //none,uppercase,lowercase,capitalize
    tl:'text-outline',  to:'text-overflow',   tsh:'text-shadow', lts:'letter-spacing',   ws:'word-spacing',
    va:'vertical-align', //baseline,superscript,subscript,middle,text-top,text-bottom,top,bottom
    wsp:'white-space', //normal,nowrap,pre,pre-wrap,pre-line,inherit
    wb:'word-break', // normal|break-all|keep-all
    ww:'word-wrap',  //normal,break-word
    of:'overflow',   ofx:"overflow-x",  ofy:"overflow-y", //visible | hidden | scroll | auto | inherit
    bg:'background',  C:'background-color',   bi:"background-image", bga:"background-attachment",  bp:"background-position", bgr:"background-repeat", bgl:"background-clip", bgo:"background-origin",   bgz:"background-size",


    d:"border",
    bor:"border",
    B:"border",
    dc:"border-color",
    //ds:"border-style",
    dw:"border-width",
    co:'border-collapse',
    sp:'border-spacing',

    bT:"border-top",
    dtc:"border-top-color",dts:"border-top-style",
    dtw:"border-top-width",   bt:"border-top-width",


    bB:"border-bottom",dbc:"border-bottom-color",
    dbs:"border-bottom-style",bb:"border-bottom-width",


    dbw:"border-bottom-width",dr:"border-right",drc:"border-right-color",drs:"border-right-style",

    drw:"border-right-width",    br:"border-right-width",


    borR:'border-radius',

    rd:'border-radius',

    bL:"border-left",
    dlc:"border-left-color",
    dls:"border-left-style",

    bLW:"border-left-width",





    di:"border-image",dis:"border-image-source", dio:"border-image-outset",dir:"border-image-repeat", disl:"border-image-slice", diw:"border-image-width",






    $:'flex', _:'order',
    $f:'flex-flow',

    $d:'flex-direction',
    $w:'flex-wrap',

    g:"padding",
    pad:"padding",P:'padding',
    gt:"padding-top",
    gr:"padding-right",gb:"padding-bottom",gl:"padding-left",

    m:"margin",
    mar:"margin",
    M:"margin",

    mT:"margin-top",mR:"margin-right",mB:"margin-bottom", mL:'margin-left',



    o:"outline",oc:"outline-color",os:"outline-style",ow:'outline-width',   oo:'outline-offset',
    li:"list-style-image",
    lp:"list-style-position",
    ct:'content',      //pseudoelements
    a:'opacity',xs:"box-shadow", //s.s('xs','10px 10px 5px #888888').res

    h:'height',mh:'max-height',nh:'min-height',
    w:'width',Mw:'max-width',mw:'min-width',
    r:'right',t:'top',p:'position',v:'visibility',z:'z-index',
    crp:"crop",ps:"perspective",po:"perspective-origin",
    tr:"transition",ty:"transition-property",tu:"transition-duration",tt:"transition-timing-function",te:"transition-delay",tf:"transform", tfo:"transform-origin", ts:"transform-style",bv:"backface-visibility",
    ft:'fit',//replaced elements
    s:"size", b:"bottom",
    cl:"clear",
    clp:'clip',u:'cursor',
    ds:'display',
    fl:'float',l:'left',
    cs:'caption-side', //table caption
    ec:'empty-cells',  //table
    ly:'table-layout',
    c:'color',
    rs:'resize'  //resizable by user






}

css=function(){

    FLOAT={  r:'right',  l:'left',  n:'none',  '#':'inherit'}

    OLSTYLE={ n:'none',  h:'hidden',  '.':'dotted',  '-':'dashed',  s:'solid',   d:'double',  g:'groove',  r:'ridge',  i:'inset',     o:'outset',   "#":'inherit' }

    OLWIDTH={'|':'thin', '||':'medium', '|||':'thick',   's':'thin',   'm':'medium',  'b':'thick'  }

    DISPLAY={

        i:"inline",b:"block",ib:"inline-block",t:"table",n:"none",'#':"inherit",it:"inline-table",
        l:"list-item",c:"table-column",r:"table-row",cg:"table-column-group",rg:"table-row-group",
        p:"table-caption",
        h:"table-header-group",f:"table-footer-group",e:"table-cell",
        $:'flex'

    }

    POSITION={s:'static',a:'absolute',r:'relative',f:'fixed','#':'inherit'}
    OVERFLOW={v:'visible',h:'hidden',s:'scroll',a:'auto','#':'inherit'}
    CURSOR={
        d:'default',p:'pointer',m:'move',w:'wait', h:'help',t:'text',
        N:'n-resize',E:'e-resize',S:'s-resize', W:'w-resize',
        NE:'ne-resize',NW:'nw-resize',SE:'se-resize',SW:'sw-resize'}
    ROLE={n:'navigation',d:'dialog'}



};css()




html=function(){
    INPUT={
        b:"button",c:"checkbox", f:"file",g:'range',e:'email',h:"hidden",i:"image",p:"password",r:"radio",R:"reset",s:"submit",t:"text"}

    PROPERTY={t:'type',c:'checked',i:'id',v:'value',n:'name'}
    ATTRIBUTE={
        a:'action',
        d:'disabled',
        R:'rows',C:'cols',

        dd:'data-dismiss',dt:'data-toggle',dg:'data-target',

        b:'data-bind',
        f:'for',
        w:'width',h:'height',

        i:'id',
        k:'class',
        m:'method',n:'name',  ph:'placeholder',r:'role',
        s:'src',
        t:'type', T:'title',
        ti:'tabindex',
        u:'href',v:'value'}
    TAG={

        a:'a',
        A:'article',
        b:'button',
        B:'b',
        br:'br',
        c:'canvas',
        d:'div',
        dl:'dl',
        dt:'dt',
        f:'form',
        F:'footer',
        fs:'fieldset',
        g:'img',
        hr:'hr',
        i:'input',
        I:'iframe',
        H:'header',
        I:'iframe',
        sl:'select',
        li:'li',
        lb:'label',
        N:'nav',
        o:'ol',
        op:'option',
        p:'p',
        s:'span',
        ta:'textarea',
        th:'th',
        td:'td',

        t:'table',
        u:'ul',
        v:'video',
        y:'style',

        '1':'h1',
        '2':'h2',
        '3':'h3',
        '4':'h4',
        '5':'h5',
        '6':'h6'



    }

};html()

CSSTextFont=function(){
    FONTFAMILY={u:"cursive",f:"fantasy",m:'monospace',ss:'sans-serif',s:'serif',//generic
        t:'times',c:'courier',a:'arial' }//nongeneric
    FONTVARIANT={ s:"small-caps"}
    FONTSTYLE={"#":"inherit",n:"normal",i:"italic",o:"oblique"}
    FONTWIDTH={n:"normal", "+":"bold", "++":"bolder","-":"lighter", "*1":100,"*2":200, "*3":300,"*4":400, "*5":500, "*6":600, "*7":700,"*8":800, "*9":900}
    TEXTTRANSFORM={c:"capitalize",u:"uppercase",l:"lowercase"}
    FONTSTRETCH={n:"normal",sc:"semi-condensed",c:"condensed",ec:"extra-condensed",uc:"ultra-condensed",se:"semi-expanded",e:"expanded",  ee:"extra-expanded",ue:"ultra-expanded"}
    TEXTDECORATION={u:"underline",o:"overline",l:"line-through",b:"blink"}
    TEXTALIGNMENT={l:"left",r:"right",c:"center",j:"justify"}
    TEXTBASELINE={s:'sub',S:'super',t:'top',tt:'text-top',m:'middle',b:'bottom',tb:'text-bottom'}
};CSSTextFont()


Events={$:'click', $$:'dblclick', d:'mousedown', o:'mouseout',v:'mouseover',
    ro:'rollout',rv:'rollover', m:'pressmove', u:'pressup', e:"mouseenter", l:"mouseleave",
    sd:"stagemousedown", sm:"stagemousemove",su:"stagemouseup",
    de:"drawend",ds:"drawstart", t:'tick',te:"tickend", ts:"tickstart"
}
EVENT={

    '1':'one',
    '/':'change',
    b:'blur',
    kd:'keydown',
    ku:'keyup',
    kp:'keypress',


    '$':'click', '$$':'dblclick',

    o:'mouseout',
    v:'mouseover',
    ro:'rollout',
    rv:'rollover',
    a:'animationend',

    d:'mousedown',
    pm:'pressmove',
    pu:'pressup',

    D:"stagemousedown",  M:"stagemousemove",  U:"stagemouseup",


    m:'mousemove',
    u:'mouseup',


    e:'mouseenter',
    l:'mouseleave',

    f:'focus',
    fi:'focusin',
    fo:'focusout',

    de:"drawend",ds:"drawstart",
    t:'tick',te:"tickend",ts:"tickstart",

    h:'hover',
    sm:'submit',
    s:'submit','@':'load',
    r:'ready',R:'Rotation',S:'scroll',
    y:'select',

    z:'resize'
}
ctx=function(){
    XMET={
        a:'arc',
        a2:'arcTo',
        b:'beginPath',
        c:'closePath',
        d:'drawImage',
        f:'fill',fr:'fillRect',ft:'fillText',
        j:'clip',
        l:'lineTo',
        m:'moveTo',
        mt:"measureText",
        s:'stroke',
        sr:'strokeRect',
        st:'strokeText',
        g:'createLinearGradient',
        rg:'createRadialGradient',
        r:'rect',
        S:'save',
        R:'restore',
        sc:'scale',
        tr:'translate',
        rt:'rotate',
        p:'createPattern',
        P:'putImageData',
        G:'getImageData',
        C:'createImageData',
        ip:'isPointInPath',
        is:'isPointInStroke',
        t:'transform',
        st:'setTransform',
        q:'quadraticCurveTo',
        z:'bezierCurveTo',
        x:'clearRect'
    }
    XPOP={
        a:'globalAlpha',b:'textBaseline',
        f:'fillStyle',s:'strokeStyle',w:'lineWidth',
        p:'lineCap',
        j:'lineJoin',
        m:'miterLimit',
        g:'globalCompositeOperation',
        c:'shadowColor',b:'shadowBlur',x:'shadowOffsetX',y:'shadowOffsetY',
        t:'textAlign',fo:'font'
    }
    GCO={
        s:'source-over',a:'source-atop',o:'source-out',i:'source-in',
        d:'destination-over',da:'destination-atop',do:'destination-out',di:'destination-in',
        l:'lighter',x:'xor',c:'copy'
    }

    LINEJOIN={r:'round',b:'bevel',m:'miter'}
    LINECAP={r:'round',b:'butt',s:'square'}
    PATTERN={r:'repeat',x:'repeat-x',y:'repeat-y',z:'no-repeat'}


};ctx()
BINDINGS={t:'text', h:'html', s:'css', y:'style', a:'attr',
    E:'foreach', fe:'foreach', i:'if', I:'ifnot', w:'with', $:'click', e:'event',
    S:'submit', ea:'enable', da:'disable', v:'value', V:'value', vu:'valueUpdate',
    vs:'visible', hf:'hasFocus',
    ch:'checked', c:'checked',
    o:'options', so:'selectedOptions', ot:'optionsText',
    un:'uniqueName',
    T:'template'
}
easel=function(){

    JMET={

        tb:'getTransformedBounds',

        iv:'isVisible',

        gs:'getStage',

        cdu:'getCacheDataURL',

        gm:'getMatrix',

        gcm:'getConcatenatedMatrix',

        lg:'localToGlobal',ll:'localToLocal',gl:'globalToLocal',

        cc:'cacheCanvas',

        cd:'suppressCrossDomainErrors',

        me:'mouseEnabled',
        fi:'filters',
        ha:'hitArea',

        ci:'cacheID',

        al:'alpha',

        ma:'mask',
        n:'name',
        co:'compositeOperation',
        pa:'parent',
        rt:'rotation',
        tl:'translate',

        sx:'scaleX',sy:'scaleY',kx:'skewX',ky:'skewY',rx:'regX',ry:'regY',

        ot:'onTick',

        cu:'cursor',

        vs:'visible',

        sd:'shadow',



        cl:'clone',

        ht:'hitTest',

        st:'setTransform',

        ca:'cache',uc:'updateCache',C:'uncache',

        md:'onMouseDown',

        sb:'setBounds',gb:'getBounds',

        w:'width',
        h:'height'

    }
    EASE={l:'linear',n:'none',

        bI: 'backIn', bO:'backOut', bIO:'backInOut',
        bnI:'bounceIn',bnO:'bounceOut',bnIO:'bounceInOut',

        cI:'circIn',cO:'circOut',cIO:'circInOut',
        cbI:'cubicIn',cbO:'cubicOut',cbIO:'cubicInOut',


        // gBI:'getBackIn',gBO:'getBackOut',gBIO:'getBackInOut',
        // gEI:'getElasticIn', gEO:'getElasticOut', gEIO:'getElasticInOut',
        //gPI:'getPowIn', gPO:'getPowOut',  gPIO:'getPowInOut',

        qI:'quartIn', qO:'quartOut',  qIO:'quartInOut',
        qdI:'quadIn', qdIO:'quadInOut',  qdO:'quadOut',
        qnI:'quintIn', qnO:'quintOut', qnIO:'quintInOut',



        eI:'elasticIn', eO:'elasticOut', eIO:'elasticInOut',

        sI:'sineIn', sO:'sineOut',  sIO:'sineInOut'}


    CREATE={

        tb:'getTransformedBounds', iv:'isVisible', gs:'getStage',
        cdu:'getCacheDataURL', gm:'getMatrix',
        cm:'getConcatenatedMatrix',
        lg:'localToGlobal', ll:'localToLocal', gl:'globalToLocal',
        cc:'cacheCanvas',
        cd:'suppressCrossDomainErrors',
        me:'mouseEnabled',
        fi:'filters',
        ha:'hitArea',
        ci:'cacheID',
        al:'alpha',
        ma:'mask',
        n:'name',
        co:'compositeOperation',
        pa:'parent',
        rx:'regX',ry:'regY',rt:'rotation',
        sx:'scaleX',sy:'scaleY',
        kx:'skewX',
        ky:'skewY',
        ot:'onTick',
        cu:'cursor',
        vs:'visible',
        sd:'shadow',
        ca:'cache',
        cl:'clone',
        ht:'hitTest',
        st:'setTransform',
        upc:'updateCache',uc:'uncache',
        tl:'translate',
        omd:'onMouseDown',
        sb:'setBounds',
        gb:'getBounds',
        w:'width',
        h:'height',
        a:'addChild', ac:'autoClear', aca:'addChildAt',
        ch:'children', gcn:'getChildByName',gci:'getChildIndex',
        cl:'clear',ct:'contains',
        du:'toDataURL',
        ede:'enableDOMEvents',emo:'enableMouseOver',
        gca:'getChildAt', gnc:'getNumChildren',he:'handleEvent',
        mc:'mouseChildren',mx:'mouseX',my:'mouseY', mmo:'mouseMoveOutside',mib:'mouseInBounds',
        ns:'nextStage',
        sci:'setChildIndex',
        sc:'sortChildren',
        sw:'swapChildren',
        swa:'swapChildrenAt',
        tou:'tickOnUpdate',
        oup:'getObjectsUnderPoint',
        rc:'removeChild',rca:'removeChildAt',rac:'removeAllChildren',
        u:'update',
        vs:'visible'
    }

};easel()
bootStrap=function(){
    CLASS={

        ar:'arrow',af:'affix',A:'active',
        a:'alert',al:'alert-link',ad:'alert-dismissable',as:'alert-success',ai:'alert-info',aw:'alert-warning',ad:'alert-danger',
        ba:'badge',bc:'breadcrumb',B:'bottom',
        b:'btn',bd:'btn-default',bp:'btn-primary', bw:'btn-warning',  bd:'btn-danger', bs:'btn-success',  bi:'btn-info', ba:'btn-link',
        bl:'btn-lg', bx:'btn-xs', bb:'btn-block', bg:'btn-group',bgj:'btn-group-justified',bgv:'btn-group-vertical',
        bt:'button', bdf:'button-default', btp:'button-primary',
        C:'caret', bm:'btn-mini',


        c:'c',

        ct:'container',cl:'close',ctl:'control-label',ca:'caption',co:'collapse',coi:'collapsing',


        cb:'checkbox',cbi:'checkbox-inline',
        cs:'carousel',csi:'carousel-inner',csi:'carousel-indicators',csc:'carousel-caption',csc:'carousel-control',
        D:'divider',dt:'data-toggle',dg:'data-target',
        dd:'dropdown',ddm:'dropdown-menu',ddh:'dropdown-header',ddb:'dropdown-backdrop',ddt:'dropdown-toggle',

        f:'form',fa:'fade', F:'footer', mk:'marketing',

        fg:'form-group',fc:'form-control',fcs:'form-control-static',





        g:'glyphicon',




        h:'hide', hd:'hidden',hdx:'hidden-xs',hds:'hidden-sm',
        hdm:'hidden-md',hdl:'hidden-lg',hdp:'hidden-print',
        hb:'help-block',h6:'h6',h1:'h1',h2:'h2',h3:'h3',h4:'h4',h5:'h5',

        H:'header',
        I:'item',ib:'icon-bar',in:'icon-next',i:'in',iv:'invisible',it:'initialism',
        iR:'img-responsive',ir:'img-rounded',ith:'img-thumbnail',ic:'img-circle',
        is:'input-sm',il:'input-lg',ig:'input-group', igb:'input-group-btn',iga:'input-group-addon',
        j:'jumbotron',     np:'nav-pills',
        L:'left',le:'lead',
        l:'label',ld:'label-default',lp:'label-primary',ls:'label-success',li:'label-info',lw:'label-warning',ld:'label-danger',
        lu:'list-unstyled',li:'list-inline',lg:'list-group',lgi:'list-group-item',lgih:'list-group-item-heading',lgit:'list-group-item-text',
        me:'media',meb:'media-body',meo:'media-object',meh:'media-heading',mel:'media-list',
        m:'modal', mo:'modal-open',md:'modal-dialog',mc:'modal-content',
        mbd:'modal-backdrop',mh:'modal-header',mt:'modal-title',
        mb:'modal-body',mf:'modal-footer',
        N:'next',n:'nav',nd:'nav-divider',nt:'nav-tabs',nj:'nav-justified',ntj:'nav-tabs-justified',
        nb:'navbar',nbn:'navbar-nav',nbr:'navbar-right',nbl:'navbar-left',nbfb:'navbar-fixed-bottom',nbft:'navbar-fixed-top',  nbst:'navbar-static-top',
        nbB:'navbar-brand', nbb:'navbar-btn',nbh:'navbar-header',nbc:'navbar-collapse',
        nbg:'navbar-toggle',nbf:'navbar-form', nbt:'navbar-text', nbd:'navbar-default', nbl:'navbar-link', nbi:'navbar-inverse',
        P:'prev',p:'progress',pi:'pill-pane',pr:'pull-right',pl:'pull-left',
        pn:'panel',pnb:'panel-body',pnd:'panel-default',pnD:'panel-danger',pnf:'panel-footer',
        pnh:'panel-heading',pni:'panel-info',pnp:'panel-primary',pns:'panel-success',pnt:'panel-title',pnw:'panel-warning',
        po:'popover',pot:'popover-title',poc:'popover-content',
        pb:'progress-bar',pbs:'progress-bar-success',pbi:'progress-bar-info',pbw:'progress-bar-warning',pbd:'progress-bar-danger',
        pp:'prettyprint',ps:'pre-scrollable',pg:'pager',pgn:'pagination',pgh:'page-header',
        r:'row',R:'right',
        s:'submit',
        sr:'sr-only',s:'show',
        T:'top', tn:'thumbnail',
        tm:'text-muted', tp:'text-primary', tw:'text-warning', td:'text-danger',th:'text-hide', ts:'text-success', ti:'text-info', tl:'text-left', tr:'text-right', tc:'text-center',
        t:'table',tb:'table-bordered',tr:'table-responsive',
        tt:'tooltip',tti:'tooltip-inner',tta:'tooltip-arrow',
        vx:'visible-xs',vs:'visible-sm',vm:'visible-md',vl:'visible-lg',vp:'visible-print',
        w:'well',wl:'well-lg',ws:'well-sm',   btb:'btn-toolbar',bm:'btn-mini',fi:'form-inline',

        x1:'col-xs-1',x2:'col-xs-2',x3:'col-xs-3',x4:'col-xs-4',x5:'col-xs-5',x6:'col-xs-6',x7:'col-xs-7',x8:'col-xs-8',x9:'col-xs-9',x10:'col-xs-10',x11:'col-xs-11',x12:'col-xs-12',
        s1:'col-sm-1',s2:'col-sm-2',s3:'col-sm-3',s4:'col-sm-4',s5:'col-sm-5',s6:'col-sm-6',s7:'col-sm-7',s8:'col-sm-8',s9:'col-sm-9',s10:'col-sm-10',s11:'col-sm-11',s12:'col-sm-12',
        sP0:'col-sm-push-0',sP1:'col-sm-push-1',sP2:'col-sm-push-2',sP3:'col-sm-push-3',sP4:'col-sm-push-4',sP5:'col-sm-push-5',sP6:'col-sm-push-6',sP7:'col-sm-push-7',sP8:'col-sm-push-8',sP9:'col-sm-push-9',sP10:'col-sm-push-10',sP11:'col-sm-push-11',
        sp0:'col-sm-pull-0',sp1:'col-sm-pull-1',sp2:'col-sm-pull-2',sp3:'col-sm-pull-3',sp4:'col-sm-pull-4',sp5:'col-sm-pull-5',sp6:'col-sm-pull-6',sp7:'col-sm-pull-7',sp8:'col-sm-pull-8',sp9:'col-sm-pull-9',sp10:'col-sm-pull-10',sp11:'col-sm-pull-11',
        so0:'col-sm-offset-0',so1:'col-sm-offset-1',so2:'col-sm-offset-2',so3:'col-sm-offset-3',so4:'col-sm-offset-4',so5:'col-sm-offset-5',so6:'col-sm-offset-6',so7:'col-sm-offset-7',so8:'col-sm-offset-8',so9:'col-sm-offset-9',so10:'col-sm-offset-10',so11:'col-sm-offset-11',
        m1:'col-md-1',m2:'col-md-2',m3:'col-md-3',m4:'col-md-4',m5:'col-md-5',m6:'col-md-6',m7:'col-md-7',m8:'col-md-8',m9:'col-md-9',m10:'col-md-10',m11:'col-md-11',m12:'col-md-12',
        mP0:'col-md-push-0',mP1:'col-md-push-1',mP2:'col-md-push-2',mP3:'col-md-push-3',mP4:'col-md-push-4',mP5:'col-md-push-5',mP6:'col-md-push-6',mP7:'col-md-push-7',mP8:'col-md-push-8',mP9:'col-md-push-9',mP10:'col-md-push-10',mP11:'col-md-push-11',
        mp0:'col-md-pull-0',mp1:'col-md-pull-1',mp2:'col-md-pull-2',mp3:'col-md-pull-3',mp4:'col-md-pull-4',mp5:'col-md-pull-5',mp6:'col-md-pull-6',mp7:'col-md-pull-7',mp8:'col-md-pull-8',mp9:'col-md-pull-9',mp10:'col-md-pull-10',mp11:'col-md-pull-11',
        mo0:'col-md-offset-0',mo1:'col-md-offset-1',mo2:'col-md-offset-2',mo3:'col-md-offset-3',mo4:'col-md-offset-4',mo5:'col-md-offset-5',mo6:'col-md-offset-6',mo7:'col-md-offset-7',mo8:'col-md-offset-8',mo9:'col-md-offset-9',mo10:'col-md-offset-10',mo11:'col-md-offset-11',
        l1:'col-lg-1',l2:'col-lg-2',l3:'col-lg-3',l4:'col-lg-4',l5:'col-lg-5',l6:'col-lg-6',l7:'col-lg-7',l8:'col-lg-8',l9:'col-lg-9',l10:'col-lg-10',l11:'col-lg-11',l12:'col-lg-12',
        lP0:'col-lg-push-0',lP1:'col-lg-push-1',lP2:'col-lg-push-2',lP3:'col-lg-push-3',lP4:'col-lg-push-4',lP5:'col-lg-push-5',lP6:'col-lg-push-6',lP7:'col-lg-push-7',lP8:'col-lg-push-8',lP9:'col-lg-push-9',lP10:'col-lg-push-10',lP11:'col-lg-push-11',
        lp0:'col-lg-pull-0',lp1:'col-lg-pull-1',lp2:'col-lg-pull-2',lp3:'col-lg-pull-3',lp4:'col-lg-pull-4',lp5:'col-lg-pull-5',lp6:'col-lg-pull-6',lp7:'col-lg-pull-7',lp8:'col-lg-pull-8',lp9:'col-lg-pull-9',lp10:'col-lg-pull-10',lp11:'col-lg-pull-11',
        lo0:'col-lg-offset-0',lo1:'col-lg-offset-1',lo2:'col-lg-offset-2',lo3:'col-lg-offset-3',lo4:'col-lg-offset-4',lo5:'col-lg-offset-5',lo6:'col-lg-offset-6',lo7:'col-lg-offset-7',lo8:'col-lg-offset-8',lo9:'col-lg-offset-9',lo10:'col-lg-offset-10',lo11:'col-lg-offset-11',}
    GLYPH={


        a:'asterisk',aj :'adjust',
        alc:'align-center', alj:'align-justify', all:'align-left', alr:'align-right',
        ad:'arrow-down', al:'arrow-left', ar:'arrow-right', au:'arrow-up',




        b:'backward',
        bn:'ban-circle', bc:'barcode', be:'bell',

        bo:'bold',
        bk:'book',

        bm:'bookmark', bf:'briefcase', bh:'bullhorn',


        c:'comment',
        ct:'certificate',

        chd:'chevron-down', chl:'chevron-left', chr:'chevron-right', chu:'chevron-up',


        ca:'calendar', cm:'camera',  ch:'check',


        cad:'circle-arrow-down', cal:'circle-arrow-left', car:'circle-arrow-right', cau:'circle-arrow-up',

        cl:'cloud', cdl:'cloud-download',

        cul:'cloud-upload', cg:'cog',

        cld:'collapse-down', clu:'collapse-up',

        cmp:'compressed',

        cpr:'copyright-mark', cc:'credit-card', ct:'cutlery',





        db:'dashboard', d:'download',


        d2:'download-alt',


        e:'envelope',
        ep:'earphone', ed:'edit', ej:'eject', eu:'euro',

        es:'exclamation-sign', ep:'expand',
        ex:'export', ec:'eye-close', eo:'eye-open',


        f:'forward',
        ftv:'facetime-video',


        fbw:'fast-backward', ffw:'fast-forward',

        fi:'file', fm:'film',
        flt:'filter', fr:'fire', fg:'flag', fl:'flash',




        ft:'font',fc:'folder-close',fo:'folder-open',


        fs:'fullscreen',

        fd:'floppy-disk',fdo:'floppy-open', fdr:'floppy-remove', fds:'floppy-save', fdv:'floppy-saved',





        g:'globe', gb:'gbp', gi:'gift', gl:'glass',

        h:'home',
        hd:'hand-down', hl:'hand-left', hr:'hand-right', hu:'hand-up',
        hdv:'hd-video', hdd:'hdd',
        hdr:'header', hph:'headphones', he:'heart', hee:'heart-empty',



        i:'info-sign', ip:'import', ib:'inbox', il:'indent-left', ir:'indent-right',

        it:'italic',



        lf:'leaf', lk:'link',
        l:'list', l2:'list-alt', lc:'lock', li:'log-in', lo:'log-out',

        m:'move',
        mm:'map-marker', mg:'magnet',  mi:'minus', mis:'minus-sign',  mu:'music',



        n:'new-window',


        o:'ok',
        of:'off',
        oc:'ok-circle',
        os:'ok-sign',
        op:'open',

        p:'picture',P:'pause',

        pc:'paperclip',

        pn:'pencil',
        ph:'phone',ph2:'phone-alt',
        pl:'plane',

        pl:'play', pci:'play-circle',
        ps:'plus', pss:'plus-sign',
        pr:'print',

        pp:'pushpin',





        qr:'qrcode', qs:'question-sign',


        rn:'random', rc:'record', rf:'refresh', rgm:'registration-mark',
        rm:'remove', rc:'remove-circle',

        rms:'remove-sign',

        rp:'repeat',

        rsf:'resize-full', rsh:'resize-horizontal', rss:'resize-small', rsv:'resize-vertical',

        rtw:'retweet',
        rd:'road',


        s:'search',


        sv:'save', svd:'saved',

        scs:'screenshot',sdv :'sd-video',



        se:'send',

        sh:'share',sh2:'share-alt',

        sc:'shopping-cart',

        sg:'signal',

        so:'sort',
        sba:'sort-by-alphabet', sba2:'sort-by-alphabet-alt',

        sbat:'sort-by-attributes', sbat2:'sort-by-attributes-alt',

        sbo:'sort-by-order', sbo2:'sort-by-order-alt',

        s5:'sound-5-1',s6:'sound-6-1', s7:'sound-7-1',

        sd:'sound-dolby',ss:'sound-stereo',

        st:'star', ste:'star-empty', sta:'stats',


        stb:'step-backward',
        stf:'step-forward',
        S:'stop', su:'subtitles',



        t:'trash',

        tg:'tag', tgs:'tags',

        ts:'tasks',
        th:'text-height',
        tw:'text-width',

        th:'th',

        tH:'th-large', thl:'th-list',

        thd:'thumbs-down',
        thu:'thumbs-up',

        ti:'time', tn:'tint', tw:'tower',

        tf:'transfer',

        trc:'tree-conifer',
        trd:'tree-deciduous',




        u:'user',uc:'unchecked',ul:'upload',


        v:'volume-up', vd:'volume-down',vo:'volume-off',

        w:'warning-sign', wr:'wrench',

        z:'zoom-in', zo:'zoom-out',


        $:'usd',}
};bootStrap()




ooo={

    t:TAG, i:INPUT, s:CSS,a: ATTRIBUTE, o: PROPERTY,

    c:COLOR, k:CLASS, gl:GLYPH,

    os:OLSTYLE,  ow:OLWIDTH,r:ROLE,
    of:OVERFLOW, fl:FLOAT,  u:CURSOR,w:OLWIDTH,p:POSITION, ds:DISPLAY,

    e:EVENT, b: BINDINGS,

    ff:FONTFAMILY,  fs:FONTSTYLE,
    fh:FONTSTRETCH, fw:FONTWIDTH,  fv:FONTVARIANT,

    tt:TEXTTRANSFORM, td:TEXTDECORATION, ta:TEXTALIGNMENT, tb:TEXTBASELINE,

    x:XMET,X:XPOP, z:PATTERN, lj:LINEJOIN, lc:LINECAP,g:GCO,
    j: CREATE,   E:EASE,

    R: {
        C:'c',
        f:'c',
        s:'c',
        dc:'c',
        t:'i', //type->input
        borS:'os' } //border-style->outline-style

    // q: QMET,
}





old=function(){



    QMET={a:"after",A:'add',ab:'addBack',
        at:"appendTo",ap:"append",ac:"addClass",
        ar:"removeAttr",b:"before",
        cr:"removeClass",C:'contents',cl:"clone",
        d:"detach",e:"empty",F:'first',
        hc:"hasClass",h:"height",H:'hide',
        ia:"insertAfter",ib:"insertBefore",
        ih:"innerHeight",iw:"innerWidth",
        l:"html",L:'last',n:'next',na:'nextAll',po:"position",
        o:"offset",op:"offsetParent",oh:"outerHeight",
        ow:"outerWidth",pp:"prepend",P:"parent",ps:"parents",
        pu:"parentsUntil",
        p:"prop", pt:"prependTo", pr:"removeProperty",
        q:"eq", r:"remove", ra:"replaceAll", rw:"replaceWith",
        s:"css", S:'show', sl:"scrollLeft",sb:"siblings",
        st:"scrollTop", tt:"attr",
        tc:"toggleClass", t:"text",u:"unwrap", v:"val",w:"width",wr:"wrap",
        wa:"wrapAll", wi:"wrapInner", z:"size"}


    codes={
        backspace:8 ,
        regDigsQwerty:{from96to105:[0,1,2,3,4,5,6,7,8,9]} ,
        digsNumPad:{from48to57:[0,1,2,3,4,5,6,7,8,9]}
    }

}


