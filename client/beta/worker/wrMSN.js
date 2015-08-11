
//    The URI passed as parameter of the Worker constructor
// must obey the same-origin policy .
//                                                                                                                                                                                                                                       Note: Notice that onmessage and postMessage() need to be hung off the Worker object when used in the main script thread, but not when used in the worker. This is because inside the worker, the worker is effectively the global scope.
//  When  ms passed between main thread and worker,
// it is copied or "transferred" (moved), not shared.

// nums   sent to  dedicated worker,
// mult  together,  and the result is returned
// to the page and displayed.



w = $wr("wr.js").m(function(e){
    $l('Ms from wr:' +e.d)
})
//can send anything in ms
ip.oChng(function(){
     w.pM([ip1.v(),ip2.v()])
    $l('ms->wr')
})


//  (wr.js):
m(function(e){var wrRes
    $l('from main')
    wrRes = 'Res: '+(e.d[0]*e.d[1])
    $l('Posting ms back to main script');
    pM(wrRes)
})


//Here we grab the message event data
// and set it as the textContent of the result paragraph,
// so the user can see the result of the calculation.


