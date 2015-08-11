$l('main starting')

a = $q('./a.js')

b = $q('./b.js')

$l(

    'in main,'+
    'a.done = '+ a.done+',' +
    'b.done = '+ b.done
)





//When  circ  $q() calls, retd mu might stil be executing
//When main.js loads a.js,
// then a.js in turn loads b.js.
// At that point, b.js tries to load a.js.
// In order to prevent an infinite loop,
// an unfinished copy of  a.js exports ob is returned to  b.js mu. b.js
// then finishes loading,
// and its exports ob is provided to  a.js mu.


//   when main.js  loaded both mus, they're both finished.


//  output:

//$ node main.js
//main starting
//a starting
//b starting
//in b, a.done = false
//b done
//in a, b.done = true
//a done
//in main, a.done=true, b.done=true



//If you have cyclic mu deps in your program,
// make sure to plan accordingly.
