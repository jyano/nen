code=function(){
    // the app
    a.put('/users/:id', function(q,p,n) {  }) // edit your user here
    //Client logic:  client side must be..  <form> <input type="hidden" name="_method" value="put" / </form>
}


//method-override  Lets you use HTTP verbs( PUT, DELETE ) in places where the client doesn't support it.

//  module MUST be used
// BEFORE
// any module that needs to know the method of the request
// (for example, it must be used prior to the csurf module).


methodOverride(getter, options)

// Create a new mw fn to override the req.method prop  with new val ( pulled from the provided getter )

  //  getter - The getter to use to look up the overridden request method for the request.
  // (default: X-HTTP-Method-Override)
//options.mets
// - The allowed methods the original request must be in to check for a method override value.
// (default: ['POST'])

//If the found met is supported by node.js core, then req.met will be set to this val,
// as if it has orig  been that val // The previous req.met val will be stored in req.originalMethod.

//    getter  This is the method of getting the override value from the request.
// If a function is provided, 
// the req is passed as the first arg,
// the res as the second argument and the method is expected to be returned.
// If a string is provided, 
// the string is used to look up the method with the following rules:

//    If the string starts with X-, then it is treated as the name of a header 
// and that header is used for the met  override. If the req  contains the same header mult times,
// the first occurrence is used.
 //   All other strings are treated as a key in the URL query string.

options.methods

//This allows the spec of what met(s)
// the req  MUST be in in order
// to check for the method override value.
// This defaults to only POST methods,
// which is the only method the override should arrive in.

// More mets may be spec  here, but it may introduce security issues and
// cause weird behavior when reqs travel through caches.
// This val  is an arr  of mets in upper-case. null can be specd to allow all mets.

  Examples=function(){

//override using a header
//To use a header to override the method, specify the header name as a string argument
// to the methodOverride function. To then make the call, send a POST request to a URL
// with the overridden method as the value of that header. This method of using a header
// would typically be used in conjunction with XMLHttpRequest on implementations that do not
// support the method you are trying to use.

      conct  = $q('connect')
      metOv = $q('method-override')

// override with the X-HTTP-Method-Override header in the request
      a.u(metOv('X-HTTP-Method-Override'))
//Example call with header override using XMLHttpRequest:
      xhr = new XMLHttpRequest()
      xhr.onload = onload
      xhr.open('post', '/resource', true)
      xhr.setRequestHeader('X-HTTP-Method-Override', 'DELETE')
      xhr.send()

// function onload() { alert('got response: ' + this.responseText) }

//override using a query value

//To use a query string value to override the method, specify the query string key as a string argument to the methodOverride function. To then make the call, send a POST request to a URL with the overridden method as the value of that query string key. This method of using a query value would typically be used in conjunction with plain HTML <form> elements when trying to support legacy browsers but still use newer methods.

      connect        = $q('connect')

      metOv = $q('method-override')

// override with POST having ?_method=DELETE
      a.u(metOv('_method'))

//Example call with query override using HTML <form>:

      /*
       <form method="POST" action="/resource?_method=DELETE">
       <button type="submit">Delete resource</button>
       </form>


       */

//multiple format support

       conct  = $q('connect')
       metOv = $q('method-override')

// override with different headers; last one takes precedence
      a.u(metOv('X-HTTP-Method'))          // Microsoft
      a.u(metOv('X-HTTP-Method-Override')) // Google/GData
      a.u(metOv('X-Method-Override'))      // IBM

//custom logic  //You can implement any kind of custom logic with a function for the getter. The following implements the logic for looking in req.body that was in method-override@1:

      bP = $q('body-parser')


// NOTE: when using req.body, you must fully parse the request body
//       before you call methodOverride() in your mw stack,
//       otherwise req.body will not be populated.
      a.u(bP.urlencoded())


      a.u(metOv(function(q, p){
          if(q.body && typeof q.body === 'object' && '_method' in q.body){
              // look in urlencoded POST bodies and delete it
              var met = q.body._method
              delete q.body._method
              return met }
      }))

//Example call with query override using HTML <form>:

      /*
       <!-- enctype must be set to the type you will parse before methodOverride() -->
       <form method="POST" action="/resource" enctype="application/x-www-form-urlencoded">
       <input type="hidden" name="_method" value="DELETE">
       <button type="submit">Delete resource</button>
       </form>
       */

  }
