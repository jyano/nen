//Workers may spawn more workers if they wish.
// So-called sub-workers
// must be hosted within the same origin as the parent page.
// Also, the URIs for subworkers are resolved
// relative to the parent worker's location
// rather than that of the owning page.
// This makes it easier for workers to keep track
// of where their dependencies are.


//    Subworkers
//
//    Workers have the ability to spawn child workers.
// This is great for further breaking up large tasks at runtime.
// However, subworkers come with a few caveats:
//
//        Subworkers must be hosted within the same origin as the parent page.
//        URIs within subworkers are resolved relative to their parent worker's location
// (as opposed to the main page).
//    Keep in mind most browsers spawn separate processes for each worker.
// Before you go spawning a worker farm, be cautious about hogging too
// many of the user's system resources. One reason for this is that messages
// passed between main pages and workers are copied, not shared.
// See Communicating with a Worker via Message Passing.
//
//    For an sample of how to spawn a subworker, see the example in the specification.
//