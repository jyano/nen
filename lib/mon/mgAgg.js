//Abstract Collection constructor
//  base class that drivers inherit from and implement.
// {String} name name of the collection
//{Connection} conn A MongooseConnection instance
//{Object} opts optional collection options








orders = function () {
    Or = Order = function (id, custId, sts, amnt) {
        return {
            _id: id,
            cust_id: custId || 'a1',
            sts: sts || 'A',
            amnt: amnt || 2
        }
    }
    ors = [
        Or(1, 'a1', 'A', 5), Or(2, 'x1', 'A', 1),
        Or(3, 'x1', 'D'), Or(4, 'x1', 'D', 1), Or(5)
    ]

    ors.ag = function (opers, ops) {
        return this.aggregate(
            opers, $ag.op(ops))
    }


//Groupby and Calc Sum
// sel   dcs w sts = 'A',
// group  mat dcs by  cust_id
// calc  tot  for each cust_id field from  sum of   amnt field,
// sort res by tot field dscng order:

    ors.ag(
        [
            $ag.p({
                _id: 0,
                cusip: 1, dt: 1, $$: 1
            }),
            $ag.m('sts', 'A'),
            $ag.g({
                _id: '$cust_id',
                tot: $ag.g.s('$amnt')
            }),
            $ag.s({
                tot: -1,
                cusip: 1,
                dt: 1
            }),
            $ag.l(2)
        ],

        {d: 1, e: 1, c: {b: 0}}
    )


    res = [{_id: 'x1', tot: 1}, {_id: 'a1', tot: 7}]


}

zips = function () {

    cl = [{
        _id: ObjectId,
        userid: 1    // firstName  lastName  zip
    }]

    Faker = function () {
        MongoClient = require('mongodb')
        Faker = require('Faker')
        MongoHQURL = '<Your MongoHQ URL>'
        MongoClient.connect(MongoHQURL, function (z, db) {
            db.cl('zips', function (z, cl) {
                cl.rm(function (z) {
                    bulkop = cl.initializeOrderedBulkOp()
                    _.t(1000, function (i) {
                        bulkop.insert({
                            userid: i,
                            firstName: Faker.Name.firstName(),
                            lastName: Faker.Name.lastName(),
                            zip: Faker.Address.zipCode()
                        })
                    })
                    bulkop.execute(function (z, d) {
                        $l(J.s(d))
                    })
                })


            })
        })

    };
    Faker()//npm -g install Faker

    // * how many
    // of those records
    // belong to the same zip code.

//Now we want to use the aggregate's $group operator
// as the first element of the pipeline.

// This is the core operators of the aggregation framework
// as it groups documents
// so that the aggregate values can be calculated.
//For our needs, we want to group on the zip code
//so we want to create new documents with an _id
//field mapped to the zip field.

//Now we want a count of how many times each zip code appears
// which we want to put in a field called usersInZip.
// There's a whole set of
// group accumulators –
// $max, $min, $avg, $first, $last, $addToSet, $push
// and the one we're interested in, $sum
// which, for each document matched,
// adds a value to the field.
// This value can be derived from the document
// so you can create totals or it can be an absolute value like 1,
// which effectively counts the number of documents

//If we put that together and call it from Mongo shell
// we quickly get the first selection of aggregated values.
// But we're only really interested in places
// where more than 10 people cite the same zip code.
// For this, we use the $match operator
// which can take as its parameters MongoDB query syntax.
// For our needs,
// we just want usersInZip to be over ten

//  But ideally we'd like these in descending order
// so we can add another element,
// $sort, to the pipeline array

    zips.ag([

        $ag.g({_id: '$zip', ursInZp: $ag.g.s(1)}),

        $ag.m({ursInZp: $ag.m.gt(10)}),

        $ag.s({ursInZp: -1})

    ]);
    r = [{_id: '53082', ursInZp: 17}, {_id: '49904', ursInZp: 12}]


}




    /*
     Other pipeline ops:

     $project which allows fields to be
     added, renamed, computed from values or removed
     as they pass through the pipeline,

     $skip to hop over a number of pipelined documents
     $limit to limit the pipeline.
     $unwind to expand arrays into the pipeline

     $out allows the results of an aggregation pipeline to be written
     to a new collection.
     It has to be the last stage in the pipeline and takes a collection name as a parameter.
     If there's no collection of that name, the collection will be created.
     If there is an existing collection, the new results will completely replace it.
     The new collection only becomes available when the aggregation
     has successfully completed and the results don't violate any index constraints,
     including the _id field. This also means there's no need to worry
     about the new collection having an incomplete result set.
     $redact strips the document stream of content
     based on values within the document and its sub-documents.
     Depending on the result of a boolean expression, a document can be pruned
     from the stream, be included in the stream
     after its sub-documents have also been checked,
     or just passed complete into the stream.
     The idea behind $redact is to make the removal of sensitive information
     from the stream easy.

     aggregate method   returns cursors
     rather than an array of documents,
     which means it can return any number of results.


     Variables and Explaining

     Variables are now supported in aggregation pipelines and
     can be assigned values using $let or take a value from one
     of the system variables available. There's also a $map operator
     which can apply a function to all the elements of an array or set.
     There's also a fix to stop things that include a '$' being evaluated
     as an expression ($literal) and a way to get the size of arrays ($size).

     Keeping the best till last, you can now get an aggregation explained
     by passing the option 'explain: true' to the aggregate() call which
     then returns information. This addition stops aggregation being
     a black box and opens the door to pipeline analysis for better performance.

     Conclusion and resources

     If you aren't using (or haven't looked at) aggregation in MongoDB,
     hopefully we've whetted your appetite and set you on a path to
     exploit the framework's potential. You'll find MongoDB's
     documentation has a section which introduces the features
     and a quick reference page for the pipeline stages and operators.
     If you are coming from an SQL background,
     check out the SQL to aggregation chart too.

     */

cl.ag(pip, ops)  //pip	arr : seqnce of data aggr  ops/stgs

tidbits = function () {
// Calcs  cl data aggr vals >>  cu to dcs resg final agPipOp stg (no  set max sz)
//  if includes  $out, >> empt cu
//    if  cu retd from  cl.ag()  !assigned to var using  var kw, shell autoits cu upto 20 times.
        // Cus retd from aggr only supports cu mets  op on evald cus (whose 1st batch retrieved),
// such as:// cu.hasNext .next .toArray  .forEach  .map  .objsLeftInBatch  .itcount  .pretty
    }

explain = function () {
        //  set explain=true to ret info about the aggr op
//  explain $B   >>   pip  processing info

    }

allowDiskUse = function () {//    allowDiskUse $B allows agOpsto write data (tmp files) to  _tmp subdir  in  dbPath dir

        //The op rets  cu w doc w aggr proccsing info  (may show ix)
//  If  orders cl sharded,
// dc shows division of labor bwn  shards and merge op.
// for targeted qus,targeted shards
        // mg shell autoits retd cu to print res
//    Perform Large Sort Ope  w External Sort
// Aggr  pip stgs have max  mem  use lm
// To handle large datasets, set allowDiskUse=TT  to enable writing data to temp  files,

    }



//    cu dc    init  batch size for the cu.val  of  cu fd  is  dc w  fd btchSize.
        //Spec Init  Batch Size: cu op  syntax: cu: { batchSize: <int> }
//ex: following aggr  op specs  initial batch size of 0 for the cu:

// batchSize=0 means emp 1st batch,
// (useful for  quick/easy retg  cu or fail  ms   w/o   signif  srv work)
// Specify subseq  batch sizes to OP_GET_MORE ops as w other MG cus.
//      mg shell autoiters  retd cu   to print the results.
//  Index Filters can affect the choice of index used.








// $sort  $project  $limit   $match $skip   $group

// $out (final pip stg) write resg docs aggrPpip -> cl

// $redact restricts content for each doc based on info stored in ITSELF // -use $project, $match -usecase? field level redaction-can filter stream (if some docs removed completely)?

// $unwind


// Expression Ops are avail  to construct expss for use in the aggr pip.
// Op expss are ~ to fns that take args
// these expss take   [args]  : {<op>:[<g1>,<g2>..]}
// If op accs 1 arg,
// can omit  outer $A designating the arg list: { <op>: <arg> }
// To avoid parsing ambiguity if the arg is a literal $A,
// you must wrap the lit  $A in  $literal exps  or KEEP outer $A


// $B Ops  $and	  $or  $not



// Comparison Ops  $cmp(>>N)  $lte   $lt $eq $gt	 $gte  $ne





// Arithmetic Ops $add	  $subtract $multiply	  $divide	 $mod



// $S Ops  (w/o  $concat)  $concat    $substr  $toLower/$toUpper	 $strcasecmp



//Text Search Ops //$meta	Access text search metadata.

//    Array Ops   $size	1>>   $A len

//Variable Ops
//$map Accs named pams
//$let
//Defines vars for use w/i scope of  subexps and >>  res of the subexps. Accs named pams


//$literal	Return a val without parsing. Use for vals that the aggr pip may interpret as an exps.
//  ex:  use a $literal exps to a $S that starts with a $ to avoid parsing as a field path.



//$dayOfYear	>>  day of y    1-366 (leap year)
//$dayOfMonth	>>  day of M     1-31
//$dayOfWeek	>>   day of w   1(Sun)-7(Sat)
//$year	>>   y   as $N ( 2014)
//$month	>>   M  1-12
//$week	>>   w   0(partl week bf 1st SunD of y)-53(leap year)
//$hour	>>   h   0-23
//$minute	>>   m   0-59
//$second	>>   s   0-60 (leap seconds)
//$milli2nd	>>   ms   0-999
//$dateToString	>>   dt->formatted str

//Conditional Expressions
//$cond ternary op  : pass 3 expss in ordd ls or 3 named pams
//$ifNull
//>> either the non-null res  of  1st exps or  res  of  2nd exps
//if  1st exps  null
//Null result encompasses insts
//of $U vals or missing fields.

//Accumulators ($group) :
// $sum /$avg  $first/last  $max/$min	   $push   $addToSet


// Set Ops (on $As)(ignores dups,order!)((set op >> set)->dups rmvd (>> uniq $A))
// OP $A el ord !spec, only evals  $A  top-level (!nest-delve)

// $setEquals  $setIntersection   $setUnion	  $setDifference $setIsSubset	  $anyElementTrue

