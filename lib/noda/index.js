$h1 = function(a){return '<h1>' + a + '</h1>'}
$h2 = function(a){return '<h2>' + a + '</h2>'}
$br = function(n){var str = ''; _.t(n || 1, function () {str += '<br>' }); return str}
$div = function(a){return '<div>' + a + '</div>'}
$sp = function(a){return '<span>' + a + '</span>'}


//node utils
$p =  require('./pt')
$f = require('./file')
$y=require('async')

