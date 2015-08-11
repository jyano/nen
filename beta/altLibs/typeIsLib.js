// type-is:  Infer the content-type of a request.
is   = $q('type-is')

ht=  http = $q('http')
 ht.Srv=ht.createServer

$Z=function(z){return new Error(z)}

////////////////////////


ht.Srv(function (q,p) {

    istext = is(q, ['text/*'])
    p.e( 'you ' +
        (istext ? 'sent' : 'did not send')
        + ' me text'
    )

})



type = is(q, types)  //    array of types.
// q.headers.content-type = 'application/json'
is(q, ['json'])             // 'json'
is(q, ['html', 'json'])     // 'json' 
is(q, ['application/*'])    // 'application/json' 
is(q, ['application/json']) // 'application/json'
is(q, ['html']) // false 
type = is.is(medTy, types)
 // mediaType is the media type string. types is an array of types.
medTy = 'application/json'
is.is(medTy, ['json'])             // 'json'
is.is(medTy, ['html', 'json'])     // 'json'
is.is(medTy, ['application/*'])    // 'application/json'
is.is(medTy, ['application/json']) // 'application/json'
is.is(medTy, ['html']) // false
// Each type can be:
  //  An extension name such as json. This name will be returned if matched.
  //  A mime type such as application/json.
  //  A mime type with a wildcard such as */* or */json or application/*. The full mime type will be returned if matched.
// A suffix such as +json. This can be combined with a wildcard such as */vnd+json or application/*+json. The full mime type will be returned if matched.
// false will be returned if no type matches or the content type is invalid.
 //null will be returned if the request does not have a body.






 function bP(q, p, n) {


     if (!is.hasBody(q)) {return n()}
     switch (is(q, ['urlencoded', 'json', 'multipart'])) {
 case 'urlencoded':// parse urlencoded body
 throw $Z('implement urlencoded body parsing')
 break
 case 'json':// parse json body
 throw $Z('implement json body parsing')
 break
 case 'multipart': // parse multipart body
 throw $Z('implement multipart body parsing')
 break
 default:p.statusCode = 415; p.e(); return
 }

}


