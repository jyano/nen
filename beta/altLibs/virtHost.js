
// How to manage multiple domains with Express 4.x
 

// It’s very common to use different platforms to serve different subdomains
// but sometimes you want multiple subdomains to be handled by the same application.
   
   

// As Express applications are themselves request handlers,
  //  they can be nested and an Express app can dispatch the
//request to another Express app based for example on the subdomain associated with the request.

  //  This is exactly what the the vhost middleware does

  //  Ideally all the resources that will be shared by our several apps
//(which are the reasons why we’re building a single Node.js application in the first place)
//are singletons as this is the case with Mongoose for example.

                                                                                                                                                                                                                          These resources need to be instantiated and configured in the parent app.

   // Following the same logic, all the middlewares that are common to all of your subdomain apps,
   /// like logging, maybe authentication,
   // static files serving..
    
    should be configured on the parent app to avoid duplication of code.

    In our example,
        our Node.js application will use 
            2 Express apps to manage api.getmycoolapp.com
and 
admin.getmycoolapp.com.

    
    
  //  Here is the code for the parent app :

     ht = $q('http')
 e  = $q('express')
 vhost = $q('vhost')
 socketio = $q('socket.io'); // Websockets, as I want to push updates to users connected to admin.getmycoolapp.com when some API calls are performed
 morgan = $q('morgan'); // Logging
 ckP = $q('cookie-parser');
zHandler = $q('errorhandler'); // The catch-all middleware that will be added as the very last middleware

// We create the Express app
 a = e();
 server = ht.Server(a)

// And we couple it with Socket.io
 io = socketio.listen(server);

// This is an example of a shared resource between my subdomain apps
 mongoDbURI = process.env.MONGODB_URI;
mg.connect(mongoDbURI);

// And here is a shared middleware (if we want to log in the same place logs from admin.getmycoolapp.com and api.getmycoolapp.com...)
a.u(morgan())
 hostname = process.env.HOSTNAME; // The hostname (here "getmycoolapp.com" isn't hard-coded :-)

 adminApp = $q('./apps/admin');  a.u(vhost('admin.' + hostname, adminApp));

 apiApp = $q('./apps/api');
a.u(vhost('api.' + hostname, apiApp));

// Last middleware, handling uncaught errors, it is reached only if the request has a different subdomain than "admin" and "api"
// or if the route doesn't match any route registered by our subdomain apps
// or if some of our routes calls "next(err)" of course.
app.use(errorHandler());

// Starting the application
 appPort = process.env.PORT;
server.listen(appPort);
 // Code for the subdomain Express apps is very similar to what we would write
 // with a single domain app. Except that we can omit middlewares and
 // configuration performed on the parent app.
 // For example, the code for the admin.getmycoolapp.com :

 e = $q('express');
 ss = $q('express-session');
 ckP = $q('cookie-parser');
 userbin = $q('userbin'); // A great startup providing Identity as a Service. You should check them out at http://userbin.com.
 RedisStore = $q('connect-redis')(session);
 User = $q('./../model/User');


 a = e()
a.u(e.static(__dirname + '/../public'));
a.u(ckP());
userbin.config({
    appId: userbinAppId,
    apiSecret: userbinApiSecret
});

a.u(userbin.authenticate());
userbin.config({
    findUser: User.findUserByUserbinId,
    createUser: User.createUserFromUserbinProfile
})
a.u(ss())

a.s('views', __dirname + '/../views');a.s('view engine', 'jade');

 mainRouter = $q('./../routers/admin/main')
a.u('/', mainRouter)


 usersRouter = $q('./../routers/admin/users')
a.u('/users', usersRouter);

// ... more routers

//module.exports = app;
//And the code for the api.getmycoolapp.com could look completely different, even use another Express-compatible microframework (but that would lead us to some crazy unknown territories). We could use OAuth as the authorization mechanism on this subdomain :-).

//Summary

// Managing multiple subdomains with the same Node.js application has a lot of advantages. We can share resources like websockets instead of sharing a common other low-level storage like Redis. We can use different authentication mechanisms on each domain without writing some bypass logic or anything. We can be more efficient by only going through the middlewares that are $qd for the subdomain we’re trying to access.


vhost=function(){

    vh = $q('vhost')
    vh(hostname, server)
   // Create a new middleware function to hand off request to server when the incoming host for the request matches hostname.

     //   hostname can be a string or a RegExp object. When hostname is a string it can contain * to match 1 or more characters in that section of the hostname. When hostname is a RegExp, it will be forced to case-insensitive (since hostnames are) and will be forced to match based on the start and end of the hostname.

      //  When host is matched and the request is sent down to a vhost handler, the req.vhost property will be populated with an object. This object will have numeric properties corresponding to each wildcard (or capture group if RegExp object provided) and the hostname that was matched.

// for match of "foo.bar.example.com:8080" against "*.*.example.com": 
        q.vhost.host === 'foo.bar.example.com:8080'
    q.vhost.hostname === 'foo.bar.example.com'
    q.vhost.length === 2
    q.vhost[0] === 'foo'
    q.vhost[1] === 'bar'
    
    //Examples
    using with connect for static serving
     connect = $q('connect')
     serveStatic = $q('serve-static')
     vhost = $q('vhost')

     mailapp = connect()

// add middlewares to mailapp for mail.example.com 

// create app to serve static files on subdomain 
     staticapp = connect()
    staticapp.use(serveStatic('public'))

// create main app 
     app = connect()

// add vhost routing to main app for mail 
    app.use(vhost('mail.example.com', mailapp))

// route static assets for "assets-*" subdomain to get 
// around max host connections limit on browsers 
    app.use(vhost('assets-*.example.com', staticapp))

// add middlewares and main usage to app 

    app.listen(3000)
    using with connect for user subdomains
     connect = $q('connect')
     serveStatic = $q('serve-static')
     vhost = $q('vhost')

     mainapp = connect()

// add middlewares to mainapp for the main web site 

// create app that will server user content from public/{username}/ 
     userapp = connect()

    userapp.use(function(req, res, next){
         username = req.vhost[0] // username is the "*" 

        // pretend request was for /{username}/* for file serving 
        req.originalUrl = req.url
        req.url = '/' + username + req.url

        next()
    })
    userapp.use(serveStatic('public'))

// create main app 
     app = connect()

// add vhost routing for main app 
    app.use(vhost('userpages.local', mainapp))
    app.use(vhost('www.userpages.local', mainapp))

// listen on all subdomains for user pages 
    app.use(vhost('*.userpages.local', userapp))

    app.listen(3000)
}

proxy=function(){
    /*

     When running an Express app behind a proxy,

     set (using app.set()) the app
     var trust proxy
     to one of the values
     listed in the following table.

     While the app will not fail to run
     if the application variable trust proxy is not set,
     it will incorrectly register
     the proxy’s IP address as the client IP address
     unless trust proxy is configured.

     Type	Value
     Boolean
     If true, the client’s IP address is understood as the
     left-most entry in the X-Forwarded-* header.

     If false, the app is understood as directly facing the
     Internet and the client’s IP address is derived from req.connection.remoteAddress. This is the default setting.

     IP addresses
     An IP address, subnet, or an array of IP addresses, and subnets to trust.
     The following is the list of pre-configured subnet names.

     loopback - 127.0.0.1/8, ::1/128
     linklocal - 169.254.0.0/16, fe80::/10
     uniquelocal - 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, fc00::/7
     Set IP addresses in any of the following ways:

     app.set('trust proxy', 'loopback') // specify a single subnet
     app.set('trust proxy', 'loopback, 123.123.123.123') // specify a subnet and an address
     app.set('trust proxy', 'loopback, linklocal, uniquelocal') // specify multiple subnets as CSV
     app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']) // specify multiple subnets as an array
     When specified, the IP addresses or the subnets are excluded from the address determination
     process, and the untrusted IP address nearest to the application server is determined as the client’s IP address.

     Number
     Trust the nth hop from the front-facing proxy server as the client.

     Function
     Custom trust implementation. Use this only if you know what you are doing.

     app.set('trust proxy', function (ip) {
     if (ip === '127.0.0.1' || ip === '123.123.123.123') return true; // trusted IPs
     else return false;
     })
     Setting a non-false trust proxy value results in two important changes:

     X-Forwarded-Proto may be set
     by the reverse proxy
     to tell the app whether it is https or simply http.
     This value is reflected by req.protocol.

     The req.ip and req.ips values will be
     populated with X-Forwarded-For’s list of addresses.

     The trust proxy setting is implemented using the proxy-addr package.
     For more information, see its documentation.



     */
}