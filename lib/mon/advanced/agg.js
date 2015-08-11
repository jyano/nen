//Aggregations  // good for generating reports, summaries and other uses.
//  operations that process data records and return computed ress.”
//These are operations like sum, count, average, group etc where we need to generated grouped ress out of collection.
  //  MongoDB exposes a pipeline based framework for aggregations, which looks something like below.


db.collection.aggregrate([
        //pipe1_operator : {}, pipe2_operator : {}, pipe3_operator : {}
])


//Mongo   pipe ops:
// $match, $group, $project,
// $limit, $skip, $sort..

//  cl schema for examples:

Isd = $M('isds',
    isd_schema= mg.Sc({},
        { strict: false,  collection: 'isds' }))

//$group
// ops which can be used with $group:  count, $push, $$ROOT


isd.aggregate(
// -Count the number of Users Belonging To A Particular Region
//$region is the column name in collection
    [ { $group: { _id: '$region', count: {$sum: 1}  } } ],
    cbFn
)



    //$match- acts as a where condition to filter out documents.

 time = new Date().getTime() - 30 * 24 * 60 * 60 * 1000;
isd.aggregate([{  //  Number of users who joined last month
        $match: {  created: {$gt: new Date(time)}   }
    },
    {$group: {_id: null, count: {$sum: 1} }}
], cbFn)


// $project- is used to add columns dynamically to the collection 
// and use it for further aggregation.
   // Number of User Registering Per Month

isd.aggregate([
    {$project: {month: {$month: "$created"} } },
    {$group: {_id: "$month", users: {$sum: 1} }}
], cbFn)
 
//Count- Number of User who belong to a certain region
isd.count({region: 'North'}, cbFn)
//Distinct -Find all distinct regions

isd.distinct("region",cbFn)

function cbFn(z, res) {p.j(res) }

// http://docs.mongodb.org/manual/reference/operator/aggregation/#aggregation-expression-operators