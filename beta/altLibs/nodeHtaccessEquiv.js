
nodejs equivalent of this .htaccess


up vote
5
down vote
favorite
4
Is it possible to build a code like this in node.js?

<IfModule mod_rewrite.c>
RewriteEngine on

RewriteCond% {REQUEST_URI}! / (View) / [NC]
RewriteCond% {REQUEST_FILENAME}!-F
RewriteRule ^ (. *) $ Index.html [L, QSA]

</IfModule>
url display a route is not "view" and also the file does not exist then write index.html.

    using something like express or connect

UPDATE: I need a regular expression for !/(view)/ in route for express in node.js.

    node.js .htaccess
    shareimprove this question
edited Jun 21 '13 at 18:09

icedwater
2,15721236
asked Jun 19 '13 at 18:54

Glats
14128

How does htaccess know that a route is a view? Does it check if it ends with .html? –  verybadalloc Jun 19 '13 at 19:13
1
I understand that "view" is the directory name, uri request applies regular expression string in the url –  Glats Jun 20 '13 at 14:38
add a comment
2 Answers
activeoldestvotes
up vote
8
down vote
accepted
Have you tried:

    Serve statics
Catch /view URL
Catch everything else

app.configure(function(){
    app.use(express.static(__dirname+'/public')); // Catch static files
    app.use(app.routes);
});

// Catch /view and do whatever you like
app.all('/view', function(req, res) {

});

// Catch everything else and redirect to /index.html
// Of course you could send the file's content with fs.readFile to avoid
// using redirects
app.all('*', function(req, res) {
    res.redirect('/index.html');
});
OR

Serve statics
Check if URL is /view

app.configure(function(){
    app.use(express.static(__dirname+'/public')); // Catch static files
    app.use(function(req, res, next) {
        if (req.url == '/view') {
            next();
        } else {
            res.redirect('/index.html');
        }
    });
});
OR

Catch statics as usual
Catch NOT /view

app.configure(function(){
    app.use(express.static(__dirname+'/public')); // Catch static files
    app.use(app.routes);
});

app.get(/^(?!\/view$).*$/, function(req, res) {
    res.redirect('/index.html');
});
shareimprove this answer
answered Jun 21 '13 at 18:53

sbstjn
52238

Thanks for offering up multiple solutions. The second solution is just the one I was looking for! –  Levi Roberts Jul 15 '13 at 19:45
add a comment

up vote
0
down vote
The finally structure is :

    var express = require('express'), url = require('url');

var app = express();
app.use(function(req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
});
app.configure(function() {
    var pub_dir = __dirname + '/public';
    app.set('port', process.env.PORT || 8080);
    app.engine('.html', require('ejs').__express);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'html');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.static(pub_dir));
    app.use(app.router);
});
app.get('/*', function(req, res) {
    if (req.xhr) {
        var pathname = url.parse(req.url).pathname;
        res.sendfile('index.html', {root: __dirname + '/public' + pathname});
    } else {
        res.render('index');
    }
});

app.listen(app.get('port'));
thanks everyone. PD: render html with module ejs

shareimprove this answer
answered Jun 28 '13 at 17:43

Glats
14128

Thank you, thank you so much! ... after some tinkering, it works for me too, DIDN'T EVEN cross my mind to search for a package that parses html2js templates but I knew something had to be done about that! –  Arthur Kovacs Jan 18 '14 at 23:16