$l('a starting')

exports.done = false;

var b = $q('./b.js')

$l('in a, b.done = '+  b.done)

exports.done = true

$l('a done')

