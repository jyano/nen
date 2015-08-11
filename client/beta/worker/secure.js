
security=function() {
//
//    Restrictions with Local Access
//
//    Due to Google Chrome's security restrictions,
// workers will not run locally
// (e.g. from file://) in the latest versions of the browser.
// Instead, they fail silently! To run your app from
// the file:// scheme, run Chrome with the
// --allow-file-access-from-files flag set.
// NOTE: It is not recommended to run your primary
// browser with this flag set. It should only be
// used for testing purposes and not regular browsing.
//
//    Other browsers do not impose the same restriction.
//
//        Same Origin Considerations

//    Worker scripts must be external files
// with the same scheme as their calling page.
// Thus, you cannot load a script from a data: URL
// or javascript: URL, and an https: page cannot start
// worker scripts that begin with http: URLs.
}


