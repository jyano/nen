
//        Embedded workers
//    There is not an "official" way to embed the code of a worker within a web page,
// like <script> elements do for normal scripts.
// But a <script> element that does not have a src attribute
// and has a type attribute that does not identify an executable mime-type
// can be considered a data block element that JavaScript could use.
// "Data blocks" is a more general feature of HTML5 that can carry
// almost any textual data. So, a worker could be embedded in this way:
//
//        <!DOCTYPE html>
//    <html>
//    <head>
//    <meta charset="UTF-8" />
//        <title>MDN Example - Embedded worker</title>
//    <script type="text/js-worker">
//    // This script WON'T be parsed by JS engines because its mime-type is text/js-worker.

myVar = "Hello World!";

//    // Rest of your worker code goes here.
//</script>
//    <script type="text/javascript">
//            // This script WILL be parsed by JS engines because its mime-type is text/javascript.


function pageLog(sMsg) {
    dc = document
    // Use a fragment: browser will only render/reflow once.
    oFragm = dc.createDocumentFragment()
        .A(dc.crTxNode(sMsg),
        dc.crEl("br"))
    $("#logDisplay").A(oFragm)
}



//        <script type="text/js-worker">
//        // This script WON'T be parsed
// by JS engines because its mime-type is text/js-worker.


onmessage = function (oEvent) {
    postMessage(myVar)
}

//    // Rest of your worker code goes here.
//</script>
//    <script type="text/javascript">
//    // This script WILL be parsed by JS engines
// because its mime-type is text/javascript.
//
//    // In the past...:
//    // blob builder existed
//    // ...but now we use Blob...:


blob = new Blob($A.prototype.map.call(
        dc.querySelectorAll(
            "script[type=\"text\/js-worker\"]"), function (oScr) {
            return oScr.textContent
        }),
    {type: "text/javascript"})
}


//
//    // Creating a new document.worker
// property containing all our "text/js-worker" scripts.

dc.worker = new Worker(window.URL.createObjectURL(blob));
dc.worker.onmessage = function(oEv){
    pageLog("Received: "+oEv.data)}


//    // Start the worker.
//    window.onload = function() { document.worker.postMessage(""); };
//</script>
//    </head>
//    <body><div id="logDisplay"></div></body>
//    </html>
//    The embedded worker is now nested into a
// new custom document.worker property.
//