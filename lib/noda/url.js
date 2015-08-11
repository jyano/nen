module.exports=function($u){ $u=$u|| $q("url")
 //  url.parse(urlStr[, parseQueryString][, slashesDenoteHost])#
 //  URL string -> ob
 //second pam: = false;  true ->  alsos parse qu str w mu.querystring  ( qu prop be  ob, search prop    be  str  )
 //third pam:=false; true ->  treats  f/b   as  {h:'f', pn:'/b' },   !{ pn:'//f/b' }
 $u.p = function(str){var p=this.parse(str)

  //  MOCK URL:
//  'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'



  // host is hostname plus port
  p.po= p.port// port:        '8080'
  p.hn =  p.hostname //   lwC hostname port  of  host    host.com
  p.h= p.host// host: hostname +  port info     host.com:8080


  // path is pathname plus search
  p.s = p.search// search:   'qu str' port of URL      ?query=string
  p.pn= p.pathname //  // pt sect of URL, comes af host,
  // bf qu, includg initial slash if present. '/p/a/t/h'
  p.p = p.path // path:   pathname + search    '/p/a/t/h?query=string'


  p.pc=  p.protocol //   req pc lwC  http:
  p.sl = p.slashes //   does prc requires slashes af : ?

  p.q = p.query//    pams port of qu str    query=string     OR      qu$S-parsed ob     {'query':'string'}
  p.ha = p.hash //fragment port  of   URL     #hash
 p.a = p.auth// auth:    'user:pass'

  p.hr= p.href  // 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'

  return p}
 $u.pPN= $u.pN=function(a){return this.p(a).pn}
 //  url.format(urlObj)#   parsed URL ob -> formatted URL str
 $u.f = function(){var g=G(arguments)

// -href will be ignored.
//- pc   treated t  same w|w/o  trailing  :
// pcs:  http, https, ftp, gopher, file : postfixed w    ://
  // All other pcs mailto, xmpp, aim, sftp, foo..  postfixed w     :
// slashes set  true if  pc requires ://
// Only needs to be set for pcs not previously listed
// as requiring slashes (  mongodb://localhost:8000/ )
// auth   used if present.
//hostname,port  only used if !host
//host   used in place of hostname, port
//pathname  treated   same w|w/o  the leading  /
//search   used in place of query, treated  same w |w/o leading ?
//query (object; see querystring)  only   used if !search
//hash is treated the same w|w/o leading   #


  return $u.format.apply($u,g )
 }
 //url.resolve(from, to)#   base URL, href URL ->  resolve as bw would for  anchor tag.
 $u.r = function(){var g=G(arguments)

// $u.r('/one/two/three', 'four')         // '/one/two/four'
// $u.r('http://example.com/', '/one')    // 'http://example.com/one'
// $u.r('http://example.com/one', '/two') // 'http://example.com/two'

  return $u.resolve.apply($u,g )

 }
}




