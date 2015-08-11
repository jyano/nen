//    Loading External Scripts
//
//    When using these techniques to inline your worker code,
// importScripts() will only work if you supply an absolute URI.
// If you attempt to pass a relative URI,
// the browser will complain with a security error.
// The reason being: the worker (now created from a blob URL)
// will be resolved with a blob: prefix,
// while your app will be running from a different
// (presumably http://) scheme.
//
// Hence, the failure will be due to cross origin restrictions.
//
//        One way to utilize importScripts() in an inline worker
// is to "inject" the current url of your main script is running
// from by passing it to the inline worker and constructing
// the absolute URL manually.
// This will insure the external script is imported from the same origin.
// Assuming your main app is running
// from http://example.com/index.html:

//    <script id="worker2" type="javascript/worker">
self.m(function(e) {var d= e.d,url,ix
    if(d.url){
        url=d.url.href
        ix=url.ixOf('index.html');
        if(ix != -1){url=url.substr(0,ix)}
        ipS(url+'eng.js')
    }
})
wr= $wr(window.URL.createObjectURL(bb.getBlob()))
    .pM({url: dc.location});


