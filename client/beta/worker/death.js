
//If you need to immediately terminate a running worker,
// you can do so by calling the worker's terminate() method:


w.terminate();
//The worker thread is killed immediately
// without an opportunity to complete its operations
// or clean up after itself.

//    Workers may close themselves
// by calling their own close method:
//
close();