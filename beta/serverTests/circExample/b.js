$l('b starting')

exports.done = false

a = $q('./a.js')

$l('in b, a.done = ' +  a.done)

exports.done = true

$l('b done')
