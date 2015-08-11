//$eq $ne  $gt..
//$in/ $nin		Matches any of the values specified in an arr.
//$or	Joins qu clauses with a logical OR returns all docs that match the conditions of either clause.
//$and	Joins qu clauses with a logical AND returns all docs that match the conditions of both clauses.
//$not	Inverts the effect of a qu expression and returns docs that do not match the qu expression.
//$nor	Joins qu clauses with a logical NOR returns all docs that fail to match both clauses.
//$exists	Matches docs that have the specified fd.
//$type	Selects docs if a fd is of the specified type.
//$mod	Performs a modulo operation on the value of a fd and selects docs with a specified result.
//$regex	Selects docs where values match a specified regular expression.
//$text	Performs text search.
//$where	Matches docs that satisfy a JavaScript expression.
//$all	Matches arrs that contain all els
//specified in the qu.
//$elemMatch	Selects docs if el in the arr fd 
//matches all the specified $elemMatch conditions.
//$size	Selects docs if the arr fd is a specified size.
//$	Projects the first el in an  arr that matches the qu condition.
//$elemMatch	Projects the first el in an arr that matches the specified $elemMatch condition.
//$meta	Projects the doc’s score assigned during $text operation.
//$slice	Limits the number of els projected from an arr. Supports skip and lm slices.

// “meta” opers  let you modify the output or behavior of a qu.
// On the server, MG treats the qu and the ops as 1 ob.
// The mg shell and driver interfaces may provide cu mets that
// wrap these ops
//db.cl.f( { <qu> } )._addSpecial( <op> )
//db.cl.f( { $qu: { <qu> }, <op> } )

//$comment	Adds a comment to the qu to identify qus in the db profiler output.
//$explain	Forces MG to report on qu execution plans. See explain().
//$hint	Forces MG to use a specific ix. See hint()
//$maxScan: lm num docs scanned.
//$maxTimeMS: spec cumul ms lm  for processing opers on  cu. See maxTimeMS().
//$max:	spec exclusive upper lm for the ix to use in qu. See max().
//$min:	spec inclusive lower lm for the ix to use in qu. See min().
//$orderby:	ret cu w dcs sorted according to   sort spec. See sort().
//$returnKey:	Forces the cu to only  return fds included in the ix.
//$showDiskLoc: mod  retd docs to include refs to   each doc's on-disk cl
//$snapshot:	Forces   qu to use ix  on  _id fd 
//$qu:	wrap  qu doc
//$natural	A special sort order that orders docs using the order of docs on disk