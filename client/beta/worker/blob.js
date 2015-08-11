
$Bl=function(a){
    return new Blob(a)}

$ObU=function(bl){
    return window.URL.createObjectURL(bl)
}

$BlObU=function(a){
    return $ObU($Bl(a))
}



//    Blob URLs

//    The magic comes with the call to window.URL.createObjectURL().
// This method creates a simple URL string which
// can be used to reference data stored in a DOM File or Blob object.
// blob:http://localhost/c745ef73-ece9-46da-8f66-ebes574789b1
//            Blob URLs are unique
// and last for the lifetime of your application
// (e.g. until the document is unloaded).
// If you're creating many Blob URLs,
// it's a good idea to release references
// that are no longer needed.
// You can explicitly release a Blob URLs by passing
// it to window.URL.revokeObjectURL():
//
//    window.URL.revokeObjectURL(blobURL);
