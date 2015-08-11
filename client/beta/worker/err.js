
//Handling errors
//
//When a runtime error occurs in worker,
// its onerror event handler is called.
// It receives an event named error which implements
// the ErrorEvent interface.
//
//    The event doesn't bubble and is cancelable;
// to prevent the default action from taking place,
// the worker can call the error event's preventDefault() method.
//
//    The error event has the following three fields
// that are of interest:
//
//    message
//A human-readable error message.
//    filename
//The name of the script file in which the error occurred.
//    lineno
//The line number of the script file on which the error occurred.
//    Spawning subworkers
//



//    Handling Errors
//
//    As with any JavaScript logic,
// you'll want to handle any errors that are thrown in your web workers.
// If an error occurs while a worker is executing,
// the an ErrorEvent is fired. The interface contains three useful properties
// for figuring out what went wrong: filename -
// the name of the worker script that caused the error, lineno
// - the line number where the error occurred, and message
// - a meaningful description of the error. Here is an example of
// setting up an onerror event handler to print the properties of the error:
//
//    <output id="error" style="color: red;"></output>
//        <output id="result"></output>
//




wr = $wr('workerWithError.js')
wr.oM(function onMsg(e) {
    document.getElementById('result').textContent = e.data;
} )
wr.oZ( function onError(e){$dc.txCnt('error', [
    'ERROR: Line ', e.lineno,
    ' in ', e.filename, ': ', e.message
].join(''))})
wr.pM() // Start worker without a message.

//  ex: wr.js tries to perform 1/x, where x is undefined.
self.on('message', function(e){postMessage(1/x); // Intentional error.}
