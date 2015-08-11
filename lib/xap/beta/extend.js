
Express itself adds it's utility methods to http.IncomingMessage.prototype, using this pattern in 2.*:

var http = require('http'),
    req = http.IncomingMessage.prototype;

req.foo = function(bar) {
    // Do cool stuff
};
And this pattern in 3.*:

var http = require('http');

var req = exports = module.exports = {
    __proto__: http.IncomingMessage.prototype
};
It's wise to be careful with monkey patching though, as Vadim Baryshev warns in his answer.

