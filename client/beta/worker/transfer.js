//    Structured cloning is great,
// but a copy can take hundreds of milliseconds.
// To combat the perf hit,
// you can use Transferable Objects.
//
//    With Transferable Objects,
// data is transferred from one context to another.
// It is zero-copy,
// which vastly improves the performance
// of sending data to a Worker.
// Think of it as pass-by-reference
// if you're from the C/C++ world.
// However, unlike pass-by-reference,
// the 'version' from the calling context
// is no longer available once transferred
// to the new context.
// For example, when transferring
// an ArrayBuffer from your main app to Worker,
// the original ArrayBuffer is cleared and no longer usable.
// Its contents are (quiet literally)
// transferred to the Worker context.
//
//To use transferrable objects,
// use a slightly different signature of postMessage():
//
wr.pM(arrayBuffer, [arrayBuffer]);
window.postMessage(arrayBuffer, targetOrigin, [arrayBuffer]);
//The wr case,
// the first argument is the data
// and the second is the list of items
// that should be transferred.
// The first argument doesn't have to be an ArrayBuffer
// by the way. For example, it can be a JSON object:
//
wr.pM(
    {
        data: int8View, moreData: anotherBuffer
    },

    [int8View.buffer, anotherBuffer]);

//The important point being:
// the second argument must be an array
// of ArrayBuffers. This is your list of transferrable items.
