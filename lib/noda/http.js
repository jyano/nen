getPort=function(){return   process.argv[2] || 8888}

modules.exports=function($h){

 $h = $h || $q("http")

 $h.io= function(fn){return $io(this, fn)}

 $h.ls=$h.listen

 $h.s =  $h.Srv=function($a, port, fn){var $h=this
  if(U($a)){return $h.createServer()}
  var srv=  ht.createServer($a)
  if(port){
   fn = fn ||  function(){$l('listening port '+ port)}
   srv.listen(port, fn)
  }
  return srv}

}




// http.createServer(app).listen(app.get('port'),
// function(){
//   console.log("Express server listening on port " + app.get('port'));
// })





//$s.ls= $s.listen
//$s = $h.Server($a)

edu=function(){
    cache=function(){
        /*
         /// best youtube video over on http caching   https://www.youtube.com/watch?v=dHXuGMHF7gI



         ///
         A Beginner's Guide to HTTP Cache Headers
         http://www.mobify.com/blog/beginners-guide-to-http-cache-headers/

         exploration into HTTP caching headers and associated CDN behaviour
         caching allows you to store your web assets on remote points along the way to your visitors’ browsers.
         Of course the browser itself also maintains an aggressive cache,
         which keeps clients from having to continually ask your server for a resource
         each time it comes up.



         cache-control      you will see a string of settings for this header along the lines of:

         cache-control: private, max-age=0, no-cache
         These settings are called cache response directives, and are as follows:

         private | public
         Essentially they let intermediary caches know that a given response is specific to the end user and should not be cached.
         Do not make the mistake of assuming that this in any way provides you with some kind of security or privacy:
         Keep using SSL for that.

         no-cache
         When used alone,
         this guy lets you specify that
         caches should revalidate this resource every time,
         typically using the "etag" header outlined below.
         The fun bit comes when you specify a field name
         after the no-cache directive,
         which lets caches know that you can cache the response,
         provided that the named fields are stripped out;
         cookies would be a good example
         of why you might want to do this.
         I should note that older User Agents
         won't respect this trick,
         so you shouldn't depend on it too much.




         no-store
         This guy lets you specify that caches should not store this response.
         I know that may be surprising given the name, but there it is.
         Actually, if the cache in question is following the rules,
         it will also ensure that no part of the request is stored either.
         "no-store" was designed with sensitive information requirements in mind, and so is kind of like the G-Man of cache headers.





         max-age  (secs)    overrides 'expires'




         s-maxage   "shared cache", as in CDN.   directives explicitly for CDNs and other intermediary caches.

         overrides both the max-age and expires header,   most   CDNs  obey it.




         //nah
         must-revalidate N/A.. wont use it.. but fun :)
         intended to override  any cf where the cache o/w configd  to serve stale content.
         client is required to send the request headers back
         and receive confirmation that the asset hasn’t changed.
         (  tells cache to revalidate cached asset on  subsequent reqs,  NEVER  serve stale content )
         (which is sometimes a desired behaviour).
         If your users under "severe connectivity constraints", then their user agents may serve stale content
         -directive exists because  some protocols require it,  typically involving transactions.

         proxy-revalidate:   same as   "must-revalidate" directive, but for shared caches. "s-mustrevalidate"?
         like "s-maxage", designed for intermediary proxies, not user agents.
         -vd each end-user only once  btwn   proxy and their agent,    but  new users re-vd back to the server. u'd know if u need it!

         Some proxies will convert  docs (img formats), to improve performance.
         no-transform : stops (opts you out from) CDN from guessing how to encode/format content



         //end nah











         expires  basic date-time stamp    -used to be standard way to spec  when an asset expired,  useful for older agents
         today, "cache-control" headers "max-age" and "s-maxage"   take precedence,   //set a matching value here for compatibility, but format date correctly, or will be evaluated as expired

         Thu, 01 Dec 1983 20:00:00 GMT

         Try to avoid setting the value to more than one year
         out as that breaks the spec









         ***etag "entity-tag",  a unique identifier for requested resource
         typically comprised of the hash of that resource or its timestamp
         lets client ask smarter questions of the CDNs,
         like "give me X if it has diff etag than my X
         etags can be made into weak validators, ( signifying 'functional equiv'  ( but support only optl :(  )




         ***vary  - extremely powerful,
         but can trip up what would otherwise be a simple caching scheme.
         lets   caches know which   headers to use     to figure out
         if they have a valid cache for a request;
         ( if a cache were a giant key-value store,
         adding "vary" fields appends those values to the key,
         thus changing which requests are considered valid matches
         for what exists in the cache )
         common setting: "Accept-Encoding"  -> makes sure your gzip'ed assets get served where appropriate  ( saves bandwidth)
         setting: vary: User-Agent  -> helps CEO if you  serve diff versions  of  HTML/CSS depending on req User-Agent
         Goog notes the header,  Googlebot crawls   mobile content , too





         *** pragma    (old)   does many things, but we just care about:    pragma: no-cache
         ( newly interpreted by :  cache-control: no-cache )
         - don't need to worry about it  bc it is a request header








         Cache-Control HTTP Headers

         Although the Expires header is useful,
         it's still somewhat limited;

         there are many situations where content is cacheable,
         but the HTTP/1.0 protocol lacks methods of telling caches what it is, or how to work with it. HTTP/1.1 introduces a new class of headers, the Cache-Control response headers, which allow web publishers to define how pages should be handled by caches. They can be broken down into the following general categories:

         Restrictions on what are cacheable;
         these may only be imposed by the origin server.
         Restrictions on what may be stored by a cache; these may be imposed by either the origin server or the user agent.
         Modifications of the basic expiration mechanism; these may be imposed by either the origin server or the user agent.
         Controls over cache revalidation and reload; these may only be imposed by a user agent.
         Control over transformation of entities.
         Extensions to the caching system.
         What is Cacheable?

         By default, a response is cacheable if the requirements of the request method, request header fields, and the response status indicate that it is cacheable. The following Cache-Control directives allow an origin server to override the default cacheability of a response:

         public
         Indicates that the response may be cached by any cache, even if it would normally be non-cacheable or cacheable only within a non-shared cache. For instance, if your pages are authenticated, this directive makes them cacheable.
         private
         Indicates that all or part of the response message is intended for a single user and must not be cached by a shared cache. This allows an origin server to state that the specified parts of the response are intended for only one user and are not a valid response for requests by other users. A private (non-shared) cache may cache the response.
         no-cache
         In general, this directive forces caches (both proxy and browser) to submit the request to the origin server for validation before releasing a cached copy, every time. This is useful to assure that authentication is respected (in combination with public), or to maintain rigid object freshness, without sacrificing all the benefits of caching. Technically speaking, if the no-cache directive does not specify a field-name, then a cache can not use the response to satisfy a subsequent request without successful revalidation with the origin server. This allows an origin server to prevent caching even by caches that have been configured to return stale responses to client requests. If the no-cache directive does specify one or more field-names, then a cache may use a response to satisfy a subsequent request, subject to any other restrictions on caching. However, the specified field-names must not be sent in the response to a subsequent request without revalidation with the origin server. This allows an origin server to prevent the re-use of certain header fields in a response, while still allowing caching of the rest of the response. Note: Most HTTP/1.0 caches does not recognize or obey this directive.
         What May be Stored by Caches?


         no-store
         The purpose of this directive is to prevent the inadvertent release or retention of sensitive information. This directive applies to the entire message, and may be sent either in a response or in a request. If sent in a request, a cache must not store any part of either this response or the request that elicited it. "Must not store" in this context means that the cache must not intentionally store the information in non-volatile storage, and must make a best-effort attempt to remove the information from volatile storage as promptly as possible after forwarding it. In general, the purpose of this directive is to meet the stated requirements of certain users and service authors who are concerned about accidental releases of information via unanticipated accesses to cache data structures.
         Modifications of the Basic Expiration Mechanism

         The expiration time of an entity may be specified by the origin server using the Expires header field. Alternatively, it may be specified using the max-age directive in a response. When the max-age cache-control directive is present in a cached response, the response is stale if its current age is greater than the age value given at the time of a new request for that resource. The max-age directive on a response implies that the response is cacheable (i.e. "public") unless some other, more restrictive cache directive is also present. If a response includes both an Expires and a max-age directive, the latter overrides the former header, even if the Expires header is more restrictive. This rule allows an origin server to provide, for a given response, a longer expiration time to an HTTP/1.1 cache than to an HTTP/1.0 cache. This might be useful if certain HTTP/1.0 caches improperly calculate ages or expiration times, perhaps due to desynchronized clocks.

         max-age = [seconds]
         Specifies the maximum amount of time that an object will be considered fresh. Similar to Expires, this directive allows more flexibility. [seconds] is the number of seconds from the time of the request you wish the object to be fresh for.
         s-maxage = [seconds]
         Similar to max-age, except that it only applies to proxy (shared) caches.
         Cache Revalidation and Reload Controls

         Sometimes a user agent might want or need to insist that a cache revalidate its cache entry with the origin server (and not just with the next cache along the path to the origin server), or to reload its cache entry from the origin server. End-to-end revalidation might be necessary if either the cache or the origin server has overestimated the expiration time of the cached response. End-to-end reload may be necessary if the cache entry has become corrupted for some reason.

         must-revalidate
         Tells caches that they must obey any freshness information you give them about an object. The HTTP allows caches to take liberties with the freshness of objects; by specifying this header, you 're telling the cache that you want it to strictly follow your rules.
         proxy-revalidate
         Similar to must-revalidate, except that it only applies to proxy caches.
         ex:  Cache-Control: max-age=3600, must-revalidate


         ///////



         Historically,
         cache settings were all about the client's browser,
         so we shouldn't forget the benefits of properly considering the client
         and the way it keeps assets around during a session and on return visits.
         However, these days, with the advent of Content Delivery Networks (CDNs),
         a bigger concern is how caching is handled on the intermediary points of web traffic.


         Essentially, CDNs are servers, (note the plural),
         that sit between your end user and your server.
         Each of these servers are designed to cache your content according to the cache rules
         you set in the various HTTP headers outlined below.

         When configured properly,
         CDNs will deliver content to your end user from the fastest, (and typically closest) server available.
         Additionally, CDNs act as a buffer between you and your users.
         The number we are most concerned with is the cache hit ratio,
         which describes the percentage of requests the CDN was able to answer out of its own cache
         without having to bother our servers.
         Depending on your traffic and architecture,
         this number can get well into the high nineties, although even at lower figures you'll experience a gain.
         (Keep in mind that a low frequency of requests will mean a larger percentage of requests go back to your server,
         so the ratio is only meaningful when understood together with your cache times and the general load of your site.)

         A word of warning though; if you just setup your cache and fail to configure your caching headers correctly,
         it's quite possible to end up paying twice for every request.


         A basic flow of data through a CDN. Your webservers provide content to the CDN intermediary servers,
         which have Points of Presence in various geographic regions. Lazy network diagram makers will usually just draw a cloud here.


         Beyond their intended use for caching, CDNs also have a pleasant side-effect;
         provided you're dealing with a website, or a particularly well-crafted web application,
         in the event that your servers experience a momentary outage, your CDN may be able to buffer the experience for your end users,
         ensuring they never even notice.

         //////////////////////////////////
         see part httpChache (part 1)
         //////////////////////////////////
         Some Caveats

         Now that we've gotten some of the standard and expected behaviours out of the way, we should probably mention that
         not every CDN or User Agent will behave according to the specification, which I'm sure is not news to anyone familiar with
         browser compatibility issues. For this reason, it is a good idea to test your services before launching a live resource to
         make sure the behaviour you get is what you expected; it will save you money.

         Also, you may have noted that a lot of the headers seem to be either duplicated or overlapping. Some of this is because there are
         subtle differences between the different methods, and also because the web is shifting over from HTTP/1.0 to HTTP/1.1,
         which uses the "cache-control" much more heavily. Generally it is safe to set both and let the CDNs and User Agents figure out
         which one they care to listen to.

         1. Compression

         Remember that "Accept-Encoding" example for the "vary" header we talked about? That's your new best friend if you intend to
         serve compressed content, which I hope you do to increase performance and save on bandwidth. CDN providers that
         get a request with "gzip" as an accepted encoding are expected to request the compressed asset from the origin server,
         or to serve a cached version of that compressed asset. Historically, this has been a sticking point for some CDNs,
         and for people wishing to use something like S3 to serve their files,
         although modern CDNs are able to perform the compression operation
         themselves if need be.

         Things to watch out for when the CDN serves compressed assets is that they'll often ensure that both uncompressed (AKA identity)
         and gzip'ed version are in their cache, regardless of which was requested. There is a time delay as they perform that operation,
         so any testing you do will have to take that delay into account.

         2. SSL

         A CDN is basically a Man-In-The-Middle, meaning you need to think about your HTTPS traffic and how it gets back to your server.
         Many CDNs will pipe a request for https://somesite.com/asset to your servers as http://somesite.com/asset,
         so if your server logic depended on that being SSL,
         either reconsider your logic or ask your CDN to redirect to an HTTPS origin URL.
         Most CDNs are capable of doing so, with varying degrees of flexibility.


         But What about Dynamic Content?

         Generally the rule of thumb for dynamic content,
         like the HTML files of a WordPress blog,
         is to set “cache-control: no-cache” and prevent the CDNs or User Agents from storing the asset.
         For most applications,
         serving your own dynamic content is probably fine,
         however if you need to boost performance, read on.

         Typical Dynamic Content

         HTTP/1.1 200 OK
         Server: Apache
         X-Rack-Cache: miss
         ETag: "e6811cdbcedf972c5e8105a89f637d39-gzip"
         Status: 200
         Content-Type: text/html; charset=utf-8
         Expires: Mon, 29 Apr 2013 21:44:55 GMT
         Cache-Control: max-age=0, no-cache, no-store
         Pragma: no-cache
         Date: Mon, 29 Apr 2013 21:44:55 GMT


         An example of a section of a header for dynamic content.
         Note the missed cache status, and the cache-control directives all set to 0 seconds.


         Most dynamic content has a shelf-life and is not nearly as volatile as we assume.
         Things like "Active Users" are probably valid for 10 or 20 seconds, depending on your site.
         Dashboards that report daily figures could certainly stand to be cached for a few minutes.
         News feeds could certainly stand to be cached for a while, especially if you remember to set an "etag".
         If your site is seeing lots of load, it may be worth trying out a short cache on your dynamic assets.

         An Analysis of Cache Time

         So what types of cache times should you consider setting? Again, this will require you to consider things like
         the rate of traffic to your site,
         how sizeable your assets are,
         and how large your cache is, (yes, there are space allocations, so don't go over them).

         Additionally,
         you should consider the main tradeoff:
         speed and performance vs. control.
         If you want to update an asset and need the new version to be live immediately,
         you may run into trouble if you thought a one-year cache time was a good idea,
         especially if you set that for Users (max-age) and not just CDNs (s-maxage).

         The longest you can set your headers and still be following the specification is one year,
         or 31536000 seconds, but this is not a very good idea. That's like getting a face tattoo;
         it stays around forever, barring expensive or painful removal surgery,
         which accurately describes the annoyances of having to trick caches into refetching an asset through name changes
         or hoping you remembered to correctly set your etag and that your users and CDNs implemented them correctly.
         If your servers can't stand to have your CDNs ask once a day if your
         profile picture has changed you should upgrade your servers.

         Sane Static Content Headers
         HTTP/1.1 200 OK
         Cache-Control: no-transform,public,max-age=300,s-maxage=900
         Content-Type: text/html; charset=UTF-8
         Date: Mon, 29 Apr 2013 16:38:15 GMT
         ETag: "bbea5db7e1785119a7f94fdd504c546e"
         Last-Modified: Sat, 27 Apr 2013 00:44:54 GMT
         Server: AmazonS3
         Vary: Accept-Encoding
         X-Cache: HIT
         A sample of cache settings for a static asset served from S3.
         Here we see that the cache has been asked to store the asset for 900 seconds rather than the 300 seconds
         set for User Agents. Also note the "x-cache: HIT" header,
         indicating the CDN served the request.


         There is one exception to the “thou-shalt-not-set-one-year-headers” commandment,
         or more accurately, there’s a bit of a hack to get around their pitfalls:
         if you’ve configured your site to generate resource names, you can rename your assets
         each time you publish a new version.
         Typically, this will involve an incrementing version number,
         a date-time stamp, or a hash of the contents, much like an “etag”, being appended to the file name,
         so that you end up with things like “core.E89A123FFDB...432D687B.css” and the like. It’s not pretty,
         but really, who cares? Also, this lets you set one-year-headers without worrying about updating your resources.

         A handy table best explains the cache time trade-off. Assuming a web asset get 500 requests per minute,
         then the following Hit Ratios are possible for each cache time:

         Cache time (minutes)	Hit Ratio	Request to Origin / Hr
         1	99.8%	60
         5	99.96%	12
         20	99.99%	3
         60	99.997%	1
         86400	99.9998%	<1


         There. It's spelt out. What kind of Hit Ratio do you need? Typically 60 seconds to an hour is an ideal trade-off.
         For pseudo-dynamic content, you can still use CDNs, just start working in the under-60-seconds range,
         as appropriate for the request.





         Testing Your CDN       Always check that the headers are coming through CDNs the way you expect when setting up new services.
         Typically a CDN will insert some kind of "x-" header to indicate that it hit, missed,
         or served expired content. What we're looking for is a convenient way to look at this and other headers,
         and to set them on our requests for testing.

         1. Web Inspector

         Probably the most accessible method, simply right-click on a webpage in Chrome, click Inspect Element,
         navigate to the Network tab, hit refresh, and click on the HTML asset at the top. If it's not selected by default,
         checkout the Headers tab to see all your request and response headers.
         Chrome also lets you set the user agent you request with,
         and gives you the option to not use your local cache, which is handy when you're testing.

         2. Charles Proxy et al.

         Tools like Charles Proxy will let you route traffic through them and manipulate DNS lookups,
         record headers, and see performance statistics, all in a clean, easy-to-use GUI.
         These tools are generally more task-specific than the Web Inspector and other browser tools,
         and generally worth the small licensing fee if you work with web requests in any significant way.

         3. cURL

         Quick, easy, and highly flexible,
         lets you make web requests directly from the command line
         and check out the responding headers. Helpful flags include:
         -A for user agents, -b for cookies, -F for form data, -H for setting headers, and -I to request the header only.
         Very handy for sanity checks, and extremely powerful.

         4. hurl.it

         hurl.it is essentially cURL with a prettier interface, and in a webbrowser.
         You’re able to set the headers you pass in to the request, as well as view the full header and body response.
         Although you don’t quite get the robustness of the command line, it’s still very useful for a quick header examination,
         and is probably the fastest way to get access to headers if you’re in a hurry.





         Most web servers, like Apache and Nginx, will do a lot of this work for you.
         Really, the “cache-control” header is the only one you’re going to have to work with.
         Web browsers are typically set up to cache aggressively to improve user experience,
         so often you’ll be fighting to prevent caching rather than ensuring it.

         Generally this means that you set a “/static” path and configure its caching headers
         to allow caching up to some reasonable interval like 300 seconds. Next, you would ensure that
         your root path “/” has “cache-control: no-cache” enabled, or better yet route dynamic content straight to
         your servers and only have “/static” use your CDN. This is a healthy starting point for most purposes.
         If your hosting bill is astronomical, or you get to use operations cost savings as beer money,
         then consider tweaking your settings.

         CDNs will often give you the option of breaking protocol and will cache for
         whatever period you like, regardless of the headers. They also take liberties with
         the protocols depending on their interpretation of expected behaviour,
         which is why it’s important to test the headers you get out of your CDN and compare them to your servers.
         Consider the expected behaviour outlined here to be a baseline and keep an eye out for variance.

         */
    }
}