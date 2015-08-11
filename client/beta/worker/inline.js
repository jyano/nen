//    create your worker script on the fly,
// or create a self-contained page
// without having to create separate worker files?

// With Blob(), you can "inline" your worker
// in the same HTML file as your main
// logic by creating a
// URL handle to the worker code as a string:

//// Obtain a blob URL
// ref to our worker 'file'.

w=$Wr($BlObU($Bl(["m(function(e){pM('from wr')})"])))
    .m(function(e){e.d=='from wr'}).pM()


//    Taking this one step further,
// we can get clever with how the worker's JS code is inlined in our page.
// This technique uses a <script> tag to define the worker:

//<div id="log"></div>
//<script id="wr1" type="javascript/worker">
//        // This script won't be parsed by JS engines
//        // because its type is javascript/worker.

m(function(e){
    pM('msg from worker')
})


function log(msg) {// Use a fragment: browser will only render/reflow once.
    var frag  = dc.createDocFrag();
    frag .A(dc.crTxNd(msg));
    frag .A(dc.cr('br'));
    dc.qSelector("#log").appendChild(frag);
}

bl = $Bl([
    $dc.qS('#wr1').textContent
])

wr=$wr($wd.oU(bl)).m(function(e){
    log("Received: "+e.data)
}).pM() // Start the worker.
//    </script>
//    </body>
//    </html>
//    In my opinion, this new approach is a bit cleaner and more legible.
// It defines a script tag with id="worker1"
// and type='javascript/worker' (so the browser doesn't parse the JS).
// That code is extracted as a string using
// dc.querySelector('#worker1').textContent and passed to Blob()
// to create the file.

