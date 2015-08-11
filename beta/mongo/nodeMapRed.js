
mapReduce
//Run Map Reduce across a cl. 
  //  Be aware that the inline option for out will return an array of results not a cl.

   // Options

out// {Object}, sets the output target for the map reduce job. {inline:1} | {replace:’clName’} | {merge:’clName’} | {reduce:’clName’}

query// {Object}, query filter object.
sort //{Object}, sorts the input objects using this key. Useful for optimization, like sorting by the emit key for fewer reduces.
    limit// {Number}, number of objects to return from cl.
    keeptemp// {Boolean, default:false}, keep temporary data.
    finalize// {Function | String}, finalize function.
scope //{Object}, can pass in iables that can be access from map/reduce/finalize.
    jsMode// {Boolean, default:false}, it is possible to make the execution stay in JS. Provided in MongoDB > 2.0.X.
    verbose //{Boolean, default:false}, provide statistics on job execution time.
    readPreference// {String, only for inline results}, the preferred read preference, require(‘mongodb’).ReadPreference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).
    



mapReduce(map, reduce[ options], cb)
// Arguments:
//    map (function) – the mapping function.
// reduce (function) – the reduce function.
// [options] (objects) – options for the map reduce job.
//   cb (function) – this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the ress from the mapReduce method or null if an error occured.
 

//A simple map reduce example

 Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    BSON = require('mongodb').pure().BSON,
    assert = require('assert');


db = new Db('test', new Server('localhost', 27017));
// Establish connection to db
db.open(function(z, db) {

    // Create a test cl
    db.createCollection(

        'test_map_reduce_functions', function(z, cl) {

        // Insert some documents to perform map reduce over
        cl.insert([
            {'user_id':1}, {'user_id':2}
        ],
            {w:1},
            function(z,r){
            // Peform the map reduce
                cl.mapReduce(

                    map=function(){emit(this.user_id, 1)},

                    reduce=function(k,vals){return 1},

                    {
                        out: {replace:'tempCollection', readPreference:'secondary'}},

                    // Mapreduce >> temp cl w res
                    function(z,cl) {
                        cl.f1({'_id':1}, function(z,d) {
                            ass.eq(d.v,1)
                            cl.f1({'_id':2},function(z,d){
                                ass.eq(d.v,1);db.close()})})})})})})



db.open(function(err, db) {

    // Create a test cl
    db.createCollection('test_map_reduce_functions_inline', function(err, cl) {
        // Insert some test documents
        cl.insert([{'user_id':1}, {'user_id':2}], {w:1}, function(err, r) {
             map = function() { emit(this.user_id, 1); };
             reduce = function(k,vals) { return 1; };
            // Execute map reduce and return results inline
            cl.mapReduce(map, reduce, {out : {inline: 1}, verbose:true}, function(err, results, stats) {
                assert.equal(2, results.length);
                assert.ok(stats != null);
                cl.mapReduce(map, reduce, {out : {replace: 'mapreduce_integration_test'}, verbose:true}, function(err, results, stats) {
                    assert.ok(stats != null);
                    db.close();});});});});});

//Mapreduce different test with a provided scope containing a javascript function.


 db = new Db('test', new Server('localhost', 27017));
// Establish connection to db
db.open(function(err, db) {// Create a test cl
    db.createCollection('test_map_reduce_functions_scope', function(err, cl) {
        // Insert some test documents
        cl.insert([{'user_id':1, 'timestamp':new Date()}
            , {'user_id':2, 'timestamp':new Date()}], {w:1}, function(err, r) {
            // Map function
             map = function(){emit(fn(this.timestamp.getYear()), 1);}

            // Reduce function
             reduce = function(k, v){
                count = 0;for(i = 0; i < v.length; i++) {count += v[i];}
                return count;}

            // Javascript function available in the map reduce scope
             t = function(val){ return val+1; }

            // Execute the map reduce with the custom scope
             o = {};
            o.scope =  { fn: new Code(t.toString()) }
            o.out = { replace: 'replacethiscl' }

            cl.mapReduce(map, reduce, o, function(err, outCollection) {
                assert.equal(null, err);

                // Find all entries in the map-reduce cl
                outCollection.find().toArray(function(err, results) {
                    assert.equal(null, err);
                    assert.equal(2, results[0].value)

                    // mapReduce with scope containing plain function
                     o = {};
                    o.scope =  { fn: t }
                    o.out = { replace: 'replacethiscl' }

                    cl.mapReduce(map, reduce, o, function(err, outCollection) {
                        assert.equal(null, err);

                        // Find all entries in the map-reduce cl
                        outCollection.find().toArray(function(err, results) {
                            assert.equal(2, results[0].value)
                            db.close();
                        });
                    });
                });
            });
        });
    });
});
Mapreduce different test with a provided scope containing javascript objects with functions.


 db = new Db('test', new Server('localhost', 27017));
// Establish connection to db
db.open(function(err, db) {

    // Create a test cl
    db.createCollection('test_map_reduce_functions_scope_objects', function(err, cl) {

        // Insert some test documents
        cl.insert([{'user_id':1, 'timestamp':new Date()}
            , {'user_id':2, 'timestamp':new Date()}], {w:1}, function(err, r) {

            // Map function
             map = function(){
                emit(obj.fn(this.timestamp.getYear()), 1);
            }

            // Reduce function
             reduce = function(k, v){
                count = 0;
                for(i = 0; i < v.length; i++) {
                    count += v[i];
                }
                return count;
            }

            // Javascript function available in the map reduce scope
             t = function(val){ return val+1; }

            // Execute the map reduce with the custom scope containing objects
             o = {};
            o.scope =  { obj: {fn: new Code(t.toString())} }
            o.out = { replace: 'replacethiscl' }

            cl.mapReduce(map, reduce, o, function(err, outCollection) {
                assert.equal(null, err);

                // Find all entries in the map-reduce cl
                outCollection.find().toArray(function(err, results) {
                    assert.equal(null, err);
                    assert.equal(2, results[0].value)

                    // mapReduce with scope containing plain function
                     o = {};
                    o.scope =  { obj: {fn: t} }
                    o.out = { replace: 'replacethiscl' }

                    cl.mapReduce(map, reduce, o, function(err, outCollection) {
                        assert.equal(null, err);

                        // Find all entries in the map-reduce cl
                        outCollection.find().toArray(function(err, results) {
                            assert.equal(2, results[0].value)
                            db.close();
                        });
                    });
                });
            });
        });
    });
});
group
Run a group command across a cl

Options
readPreference {String}, the preferred read preference, require(‘mongodb’).ReadPreference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).
    group(keys, condition, initial, reduce, finalize, command[, options], cb)
Arguments:
    keys (object) – an object, array or function expressing the keys to group by.
    condition (object) – an optional condition that must be true for a row to be considered.
    initial (object) – initial value of the aggregation counter object.
    reduce (function) – the reduce function aggregates (reduces) the objects iterated
finalize (function) – an optional function to be run on each item in the result set just before the item is returned.
    command (boolean) – specify if you wish to run using the internal group command or using eval, default is true.
    [options] (object) – additional options during update.
    cb (function) – this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the group method or null if an error occured.
    Returns:
null
Examples

A whole lot of different wayt to execute the group command


 db = new Db('test', new Server('localhost', 27017));
// Establish connection to db
db.open(function(err, db) {

    // Create a test cl
    db.createCollection('test_group', function(err, cl) {

        // Peform a simple group by on an empty cl
        cl.group([], {}, {"count":0}, "function (obj, prev) { prev.count++; }", function(err, results) {
            assert.deepEqual([], results);

            // Trigger some inserts on the cl
            cl.insert([{'a':2}, {'b':5}, {'a':1}], {w:1}, function(err, ids) {

                // Perform a group count
                cl.group([], {}, {"count":0}, "function (obj, prev) { prev.count++; }", function(err, results) {
                    assert.equal(3, results[0].count);

                    // Pefrom a group count using the eval method
                    cl.group([], {}, {"count":0}, "function (obj, prev) { prev.count++; }", false, function(err, results) {
                        assert.equal(3, results[0].count);
                        // Group with a conditional
                        cl.group([], {'a':{'$gt':1}}, {"count":0}, "function (obj, prev) { prev.count++; }", function(err, results) {
                            // Results
                            assert.equal(1, results[0].count);

                            // Group with a conditional using the EVAL method
                            cl.group([], {'a':{'$gt':1}}, {"count":0}, "function (obj, prev) { prev.count++; }" , false, function(err, results) {
                                // Results
                                assert.equal(1, results[0].count);

                                // Insert some more test data
                                cl.insert([{'a':2}, {'b':3}], {w:1}, function(err, ids) {

                                    // Do a Group by field a
                                    cl.group(['a'], {}, {"count":0}, "function (obj, prev) { prev.count++; }", function(err, results) {
                                        // Results
                                        assert.equal(2, results[0].a);
                                        assert.equal(2, results[0].count);
                                        assert.equal(null, results[1].a);
                                        assert.equal(2, results[1].count);
                                        assert.equal(1, results[2].a);
                                        assert.equal(1, results[2].count);

                                        // Do a Group by field a
                                        cl.group({'a':true}, {}, {"count":0}, function (obj, prev) { prev.count++; }, true, function(err, results) {
                                            // Results
                                            assert.equal(2, results[0].a);
                                            assert.equal(2, results[0].count);
                                            assert.equal(null, results[1].a);
                                            assert.equal(2, results[1].count);
                                            assert.equal(1, results[2].a);
                                            assert.equal(1, results[2].count);

                                            // Correctly handle illegal function
                                            cl.group([], {}, {}, "5 ++ 5", function(err, results) {
                                                assert.ok(err.message != null);

                                                // Use a function to select the keys used to group by
                                                 keyf = function(doc) { return {a: doc.a}; };
                                                cl.group(keyf, {a: {$gt: 0}}, {"count": 0, "value": 0}, function(obj, prev) { prev.count++; prev.value += obj.a; }, true, function(err, results) {
                                                    // Results
                                                    results.sort(function(a, b) { return b.count - a.count; });
                                                    assert.equal(2, results[0].count);
                                                    assert.equal(2, results[0].a);
                                                    assert.equal(4, results[0].value);
                                                    assert.equal(1, results[1].count);
                                                    assert.equal(1, results[1].a);
                                                    assert.equal(1, results[1].value);

                                                    // Use a Code object to select the keys used to group by
                                                     keyf = new Code(function(doc) { return {a: doc.a}; });
                                                    cl.group(keyf, {a: {$gt: 0}}, {"count": 0, "value": 0}, function(obj, prev) { prev.count++; prev.value += obj.a; }, true, function(err, results) {
                                                        // Results
                                                        results.sort(function(a, b) { return b.count - a.count; });
                                                        assert.equal(2, results[0].count);
                                                        assert.equal(2, results[0].a);
                                                        assert.equal(4, results[0].value);
                                                        assert.equal(1, results[1].count);
                                                        assert.equal(1, results[1].a);
                                                        assert.equal(1, results[1].value);

                                                        // Correctly handle illegal function when using the EVAL method
                                                        cl.group([], {}, {}, "5 ++ 5", false, function(err, results) {
                                                            assert.ok(err.message != null);

                                                            db.close();
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
options
Returns the options of the cl.

    options(cb)
Arguments:
    cb (function) – this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the options method or null if an error occured.
    Returns:
null
Examples

An example returning the options for a cl.

     Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    BSON = require('mongodb').pure().BSON,
    assert = require('assert');

 db = new Db('test', new Server('localhost', 27017));
// Establish connection to db
db.open(function(err, db) {

    // Create a test cl that we are getting the options back from
    db.createCollection('test_cl_options', {'capped':true, 'size':1024}, function(err, cl) {
        assert.ok(cl instanceof Collection);
        assert.equal('test_cl_options', cl.clName);

        // Let's fetch the cl options
        cl.options(function(err, options) {
            assert.equal(true, options.capped);
            assert.ok(options.size >= 1024);

            db.close();
        });
    });
});
isCapped
Returns if the cl is a capped cl

isCapped(cb)
Arguments:
    cb (function) – this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the isCapped method or null if an error occured.
    Returns:
null
Examples

An example showing how to establish if it’s a capped cl

 Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    BSON = require('mongodb').pure().BSON,
    assert = require('assert');

 db = new Db('test', new Server('localhost', 27017));
// Establish connection to db
db.open(function(err, db) {

    // Create a test cl that we are getting the options back from
    db.createCollection('test_cl_is_capped', {'capped':true, 'size':1024}, function(err, cl) {
        assert.ok(cl instanceof Collection);
        assert.equal('test_cl_is_capped', cl.clName);

        // Let's fetch the cl options
        cl.isCapped(function(err, capped) {
            assert.equal(true, capped);

            db.close();
        });
    });
});
indexExists
Checks if one or more indexes exist on the cl

indexExists(indexNames, cb)
Arguments:
    indexNames (string) – check if one or more indexes exist on the cl.
    cb (function) – this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the indexExists method or null if an error occured.
    Returns:
null
Examples

An example showing the use of the indexExists function for a single index name and a list of index names.

     Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    BSON = require('mongodb').pure().BSON,
    assert = require('assert');

 db = new Db('test', new Server('localhost', 27017));
// Establish connection to db
db.open(function(err, db) {

    // Create a test cl that we are getting the options back from
    db.createCollection('test_cl_index_exists', {w: 1}, function(err, cl) {
        assert.equal(null, err);

        // Create an index on the cl
        cl.createIndex('a', {w: 1}, function(err, indexName) {

            // Let's test to check if a single index exists
            cl.indexExists("a_1", function(err, result) {
                assert.equal(true, result);

                // Let's test to check if multiple indexes are available
                cl.indexExists(["a_1", "_id_"], function(err, result) {
                    assert.equal(true, result);

                    // Check if a non existing index exists
                    cl.indexExists("c_1", function(err, result) {
                        assert.equal(false, result);

                        db.close();
                    });
                });
            });
        });
    });
});
geoNear
Execute the geoNear command to search for items in the cl

Options
num {Number}, max number of results to return.
minDistance {Number}, include results starting at minDistance from a point (2.6 or higher)
maxDistance {Number}, include results up to maxDistance from the point.
    distanceMultiplier {Number}, include a value to multiply the distances with allowing for range conversions.
    query {Object}, filter the results by a query.
    spherical {Boolean, default:false}, perform query using a spherical model.
    uniqueDocs {Boolean, default:false}, the closest location in a document to the center of the search region will always be returned MongoDB > 2.X.
    includeLocs {Boolean, default:false}, include the location data fields in the top level of the results MongoDB > 2.X.
    readPreference {String}, the preferred read preference, require(‘mongodb’).ReadPreference ((ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).
    geoNear(x, y[, options], cb)
Arguments:
    x (number) – point to search on the x axis, ensure the indexes are ordered in the same order.
    y (number) – point to search on the y axis, ensure the indexes are ordered in the same order.
    [options] (objects) – options for the map reduce job.
    cb (function) – this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the geoNear method or null if an error occured.
    Returns:
null
Examples

Example of a simple geoNear query across some documents


 db = configuration.newDbInstance({w:0}, {poolSize:1});

// Establish connection to db
db.open(function(err, db) {

    // Fetch the cl
     cl = db.cl("simple_geo_near_command");

    // Add a location based index
    cl.ensureIndex({loc:"2d"}, function(err, result) {
        // Save a new location tagged document
        cl.insert([{a:1, loc:[50, 30]}, {a:1, loc:[30, 50]}], {w:1}, function(err, result) {
            // Use geoNear command to find document
            cl.geoNear(50, 50, {query:{a:1}, num:1}, function(err, docs) {
                assert.equal(1, docs.results.length);
                db.close();
            });
        });
    });
});
geoHaystackSearch
Execute a geo search using a geo haystack index on a cl.

    Options
maxDistance {Number}, include results up to maxDistance from the point.
    search {Object}, filter the results by a query.
    limit {Number}, max number of results to return.
readPreference {String}, the preferred read preference, require(‘mongodb’).ReadPreference ((ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).
    geoHaystackSearch(x, y[, options], cb)
Arguments:
    x (number) – point to search on the x axis, ensure the indexes are ordered in the same order.
    y (number) – point to search on the y axis, ensure the indexes are ordered in the same order.
    [options] (objects) – options for the map reduce job.
    cb (function) – this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the geoHaystackSearch method or null if an error occured.
    Returns:
null
Examples

Example of a simple geoHaystackSearch query across some documents


 db = new Db('test', new Server('localhost', 27017));
// Establish connection to db
db.open(function(err, db) {

    // Fetch the cl
     cl = db.cl("simple_geo_haystack_command");

    // Add a location based index
    cl.ensureIndex({loc: "geoHaystack", type: 1}, {bucketSize: 1}, function(err, result) {

        // Save a new location tagged document
        cl.insert([{a:1, loc:[50, 30]}, {a:1, loc:[30, 50]}], {w:1}, function(err, result) {

            // Use geoNear command to find document
            cl.geoHaystackSearch(50, 50, {search:{a:1}, limit:1, maxDistance:100}, function(err, docs) {
                assert.equal(1, docs.results.length);
                db.close();
            });
        });
    });
});
indexes
Retrieve all the indexes on the cl.

    indexes(cb)
Arguments:
    cb (function) – this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the indexes method or null if an error occured.
    Returns:
null
Examples

Example of retrieving a cls indexes


 db = new Db('test', new Server('localhost', 27017));// Establish connection to db
db.open(function(err, db) {// Crete the cl for the distinct example
    db.createCollection('simple_key_based_distinct', function(err, cl) {// Create a geo 2d index
        cl.ensureIndex({loc:"2d"}, {w: 1}, function(err, result) {assert.equal(null, err);
            // Create a simple single field index
            cl.ensureIndex({a:1}, {w: 1}, function(err, result) {assert.equal(null, err);
                // List all of the indexes on the cl
                cl.indexes(function(err, indexes) {assert.equal(3, indexes.length);db.close()})})})})});

aggregate
//Execute an aggregation framework pipeline against the cl, needs MongoDB >= 2.2

Options
readPreference {String}, the preferred read preference, require(‘mongodb’).ReadPreference ((ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).
    cu {Object}, return the query as cu, on 2.6 > it returns as a real cu on pre 2.6 it returns as an emulated cu.
    cu.batchSize {Number}, the batchSize for the cu
out {String}, the cl name to where to write the results from the aggregation (MongoDB 2.6 or higher). Warning any existing cl will be overwritten.
    explain {Boolean, default:false}, explain returns the aggregation execution plan (requires mongodb 2.6 >).
allowDiskUse {Boolean, default:false}, allowDiskUse lets the server know if it can use disk to store temporary results for the aggregation (requires mongodb 2.6 >).
aggregate(array[, options], cb)
Arguments:
    array (array) – containing all the aggregation framework commands for the execution.
    [options] (object) – additional options during update.
    cb (function) – this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the aggregate method or null if an error occured.
    Returns:
null
Examples

// Correctly call the aggregation framework using a pipeline in an Array.


 db = new Db('test', new Server('localhost', 27017));
// Establish connection to db
db.open(function(err, db) {
    // Some docs for insertion
     docs = [{
        title : "this is my title", author : "bob", posted : new Date() ,
        pageViews : 5, tags : [ "fun" , "good" , "fun" ], other : { foo : 5 },
        comments : [
            { author :"joe", text : "this is cool" }, { author :"sam", text : "this is bad" }
        ]}];

    // Create a cl


    cl = db.cl('shouldCorrectlyExecuteSimpleAggregationPipelineUsingArray');
    // Insert the docs


    cl.insert(docs, {w: 1}, function(err, result) {


        // Execute aggregate, notice the pipeline is expressed as an Array
        cl.aggregate([

                { $project : {author : 1, tags : 1}},
                { $unwind : "$tags" },
                { $group : {_id : {tags : "$tags"}, authors : { $addToSet : "$author" }}}
            ],

            function(err, result) {
                assert.equal(null, err);
                assert.equal('good', result[0]._id.tags);
                assert.deepEqual(['bob'], result[0].authors);
                assert.equal('fun', result[1]._id.tags);
                assert.deepEqual(['bob'], result[1].authors);
                db.close()})})})



// Correctly call the aggregation framework using a pipeline expressed as an argument list.

 db = new Db('test', new Server('localhost', 27017));
// Establish connection to db
db.open(function(err, db) {
    // Some docs for insertion
     docs = [{
        title : "this is my title", author : "bob", posted : new Date() ,
        pageViews : 5, tags : [ "fun" , "good" , "fun" ], other : { foo : 5 },
        comments : [
            { author :"joe", text : "this is cool" }, { author :"sam", text : "this is bad" }
        ]}];

    // Create a cl
     cl = db.cl('shouldCorrectlyExecuteSimpleAggregationPipelineUsingArguments');
    // Insert the docs
    cl.insert(docs, {w: 1}, function(err, result) {
        // Execute aggregate, notice the pipeline is expressed as function call parameters
        // instead of an Array.
        cl.aggregate(
            { $project : {
                author : 1,
                tags : 1
            }},
            { $unwind : "$tags" },
            { $group : {
                _id : {tags : "$tags"},
                authors : { $addToSet : "$author" }
            }}
            , function(err, result) {
                assert.equal(null, err);
                assert.equal('good', result[0]._id.tags);
                assert.deepEqual(['bob'], result[0].authors);
                assert.equal('fun', result[1]._id.tags);
                assert.deepEqual(['bob'], result[1].authors);

                db.close();
            });
    });
});
Correctly call the aggregation framework using a pipeline expressed as an argument list.


 db = new Db('test', new Server('localhost', 27017));
// Establish connection to db
db.open(function(err, db) {
    // Some docs for insertion
     docs = [{
        title : "this is my title", author : "bob", posted : new Date() ,
        pageViews : 5, tags : [ "fun" , "good" , "fun" ], other : { foo : 5 },
        comments : [
            { author :"joe", text : "this is cool" }, { author :"sam", text : "this is bad" }
        ]}];

    // Create a cl
     cl = db.cl('shouldCorrectlyExecuteSimpleAggregationPipelineUsingArguments');
    // Insert the docs
    cl.insert(docs, {w: 1}, function(err, result) {
        // Execute aggregate, notice the pipeline is expressed as function call parameters
        // instead of an Array.
        cl.aggregate(
            { $project : {
                author : 1,
                tags : 1
            }},
            { $unwind : "$tags" },
            { $group : {
                _id : {tags : "$tags"},
                authors : { $addToSet : "$author" }
            }}
            , function(err, result) {
                assert.equal(null, err);
                assert.equal('good', result[0]._id.tags);
                assert.deepEqual(['bob'], result[0].authors);
                assert.equal('fun', result[1]._id.tags);
                assert.deepEqual(['bob'], result[1].authors);

                db.close();
            });
    });
});
Correctly call the aggregation framework to return a cu

 
 db = new Db('test', new Server('localhost', 27017));
// Establish connection to db
db.open(function(err, db) {
    // Some docs for insertion
     docs = [{
        title : "this is my title", author : "bob", posted : new Date() ,
        pageViews : 5, tags : [ "fun" , "good" , "fun" ], other : { foo : 5 },
        comments : [
            { author :"joe", text : "this is cool" }, { author :"sam", text : "this is bad" }
        ]}];

    // Create a cl
     cl = db.cl('shouldCorrectlyDoAggWithCursorGet');
    // Insert the docs
    cl.insert(docs, {w: 1}, function(err, result) {

        // Execute aggregate, notice the pipeline is expressed as an Array
         cu = cl.aggregate([
            { $project : {author : 1, tags : 1}},
            { $unwind : "$tags" },
            { $group : {_id : {tags : "$tags"}, authors : { $addToSet : "$author" }}}
        ], {cu: {batchSize:100}});

        // Iterate over all the items in the cu
        cu.get(function(err, results) {
            assert.equal(null, err);
            assert.equal('good', results[0]._id.tags);
            assert.deepEqual(['bob'], results[0].authors);
            assert.equal('fun', results[1]._id.tags);
            assert.deepEqual(['bob'], results[1].authors);db.close()})})})

// Correctly call the aggregation framework to return a cu and call explain
 db = new Db('test', new Server('localhost', 27017));
// Establish connection to db
db.open(function(err, db) {
    // Some docs for insertion
     docs = [{
        title : "this is my title", author : "bob", posted : new Date() ,
        pageViews : 5, tags : [ "fun" , "good" , "fun" ], other : { foo : 5 },
        comments : [
            { author :"joe", text : "this is cool" }, { author :"sam", text : "this is bad" }
        ]}];

    // Create a cl
     cl = db.cl('shouldCorrectlyDoAggWithCursorGet');
    // Insert the docs
    cl.insert(docs, {w: 1}, function(err, result) {
        // Execute aggregate, notice the pipeline is expressed as an Array
         cu = cl.aggregate([
            { $project : {author : 1, tags : 1}},
            { $unwind : "$tags" },
            { $group : {_id : {tags : "$tags"}, authors : { $addToSet : "$author" }}}], {
            cu: {batchSize:100}
        })

        // Iterate over all the items in the cu
        cu.explain(function(err, results) {
            assert.equal(null, err);
            assert.equal(4, results.length);

            db.close();
        });
    });
});
Correctly call the aggregation framework to return a cu with batchSize 1 and get the first result using next

 
 db = new Db('test', new Server('localhost', 27017));
// Establish connection to db
db.open(function(err, db) {
    // Some docs for insertion
     docs = [{
        title : "this is my title", author : "bob", posted : new Date() ,
        pageViews : 5, tags : [ "fun" , "good" , "fun" ], other : { foo : 5 },
        comments : [
            { author :"joe", text : "this is cool" }, { author :"sam", text : "this is bad" }
        ]}];

    // Create a cl
     cl = db.cl('shouldCorrectlyDoAggWithCursorGet');
    // Insert the docs
    cl.insert(docs, {w: 1}, function(err, result) {

        // Execute aggregate, notice the pipeline is expressed as an Array
         cu = cl.aggregate([
            { $project : {author : 1, tags : 1}},
            { $unwind : "$tags" },
            { $group : {_id : {tags : "$tags"},
                authors : { $addToSet : "$author" }}}
        ], {cu: {batchSize:1}
        });

        // Iterate over all the items in the cu
        cu.next(function(err, result) {
            assert.equal(null, err);
            assert.equal('good', result._id.tags);
            assert.deepEqual(['bob'], result.authors);
            db.close()})});
});
Correctly call the aggregation framework and write the results to a new cl

 
 db = new Db('test', new Server('localhost', 27017));
// Establish connection to db
db.open(function(err, db) {
    // Some docs for insertion
     docs = [{
        title : "this is my title", author : "bob", posted : new Date() ,
        pageViews : 5, tags : [ "fun" , "good" , "fun" ], other : { foo : 5 },
        comments : [
            { author :"joe", text : "this is cool" }, { author :"sam", text : "this is bad" }
        ]}];

    // Create a cl
     cl = db.cl('shouldCorrectlyDoAggWithCursorGet');
    // Insert the docs
    cl.insert(docs, {w: 1}, function(err, result) {

        // Execute aggregate, notice the pipeline is expressed as an Array
        cl.aggregate([
            { $project : {
                author : 1,
                tags : 1
            }},
            { $unwind : "$tags" },
            { $group : {
                _id : {tags : "$tags"},
                authors : { $addToSet : "$author" }
            }}
        ], {
            out: "testingOutCollectionForAggregation"
        }, function(err, results) {
            assert.equal(null, err);
            assert.equal(0, results.length);

            db.close();
        });
    });
});
Correctly use allowDiskUse when performing an aggregation
 e().BSON,
    assert = require('assert');

 db = new Db('test', new Server('localhost', 27017));
// Establish connection to db
db.open(function(err, db) {
    // Some docs for insertion
     docs = [{
        title : "this is my title", author : "bob", posted : new Date() ,
        pageViews : 5, tags : [ "fun" , "good" , "fun" ], other : { foo : 5 },
        comments : [
            { author :"joe", text : "this is cool" }, { author :"sam", text : "this is bad" }
        ]}];

    // Create a cl
     cl = db.cl('shouldCorrectlyDoAggWithCursorGet');
    // Insert the docs
    cl.insert(docs, {w: 1}, function(err, result) {

        // Execute aggregate, notice the pipeline is expressed as an Array
        cl.aggregate([
            { $project : {
                author : 1,
                tags : 1
            }},
            { $unwind : "$tags" },
            { $group : {
                _id : {tags : "$tags"},
                authors : { $addToSet : "$author" }
            }}
        ], {
            allowDiskUse: true
        }, function(err, results) {
            assert.equal(null, err);
            assert.equal('good', results[0]._id.tags);
            assert.deepEqual(['bob'], results[0].authors);
            assert.equal('fun', results[1]._id.tags);
            assert.deepEqual(['bob'], results[1].authors);

            db.close();
        });
    });
});
stats
Get all the cl statistics.

    Options
scale {Number}, divide the returned sizes by scale value.
    readPreference {String}, the preferred read preference, require(‘mongodb’).ReadPreference ((ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).
    stats([options], cb)
Arguments:
    [options] (objects) – options for the stats command.
    cb (function) – this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the stats method or null if an error occured.
    Returns:
null
Examples

Example of retrieving a cls stats


 db = new Db('test', new Server('localhost', 27017));
// Establish connection to db
db.open(function(err, db) {// Crete the cl for the distinct example
    db.createCollection('cl_stats_test', function(err, cl) {
        // Insert some documents
        cl.insert([{a:1}, {hello:'world'}], {w: 1}, function(err, result) {
            // Retrieve the statistics for the cl
            cl.stats(function(err, stats) {assert.equal(2, stats.count);
                db.close()})})})})
initializeUnorderedBulkOp
Initiate a Out of order batch write operation. All operations will be buffered into insert/update/remove commands executed out of order.

    Options
w, {Number/String, > -1 || ‘majority’ || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = ‘majority’ or tag acknowledges the write
wtimeout, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)
fsync, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal
    j, (Boolean, default:false) write waits for journal sync before returning
initializeUnorderedBulkOp([options], cb)
Arguments:
    [options] (objects) – options for the initializeUnorderedBatch
cb (function) – this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. The second argument will be a UnorderedBulkOperation object.
    Returns:
unorderedbulkoperation
initializeOrderedBulkOp
Initiate an In order bulk write operation, operations will be serially executed in the order they are added, creating a new operation for each switch in types.

    Options
    w, {Number/String, > -1 || ‘majority’ || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = ‘majority’ or tag acknowledges the write
wtimeout, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)
fsync, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal
    j, (Boolean, default:false) write waits for journal sync before returning
initializeOrderedBulkOp([options], cb)
Arguments:
    [options] (objects) – options for the initializeOrderedBulkOp
cb (function) – this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. The second argument will be a OrderedBulkOperation object.
    Returns:
orderedbulkoperation
parallelCollectionScan
Return N number of parallel cus for a cl allowing parallel reading of entire cl. There are no ordering guarantees for returned results.

    Options
readPreference {String}, the prefered read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).
    batchSize {Number, default:0}, set the batchSize for the getMoreCommand when iterating over the query results.
    numCursors, {Number, 1} the maximum number of parallel command cus to return (the number of returned cus will be in the range 1:numCursors)
parallelCollectionScan([options], cb)
Arguments:
    [options] (objects) – options for the initializeOrderedBulkOp
cb (function) – this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. The second argument will be an array of CommandCursor instances.
    Returns:
orderedbulkoperation
Examples

A parallelCollectionScan example


 db = new Db('test', new Server('localhost', 27017));
// Establish connection to db
db.open(function(err, db) { docs = [];
    // Insert some documents
    for( i = 0; i < 2000; i++) {docs.push({a:i})}

    // Get the cl
     cl = db.cl('parallelCollectionScan');
    // Insert 1000 documents in a batch
    cl.insert(docs, function(err, result) { results = []; numCursors = 3;
        // Execute parallelCollectionScan command
        cl.parallelCollectionScan({numCursors:numCursors}, function(err, cus) {
            assert.equal(null, err);assert.ok(cus != null);assert.ok(cus.length > 0);
            for( i = 0; i < cus.length; i++) {
                cus[i].get(function(err, items) {assert.equal(err, null);
                    // Add docs to results array
                    results = results.concat(items);
                    numCursors = numCursors - 1;
                    // No more cus let's ensure we got all results
                    if(numCursors == 0) {assert.equal(docs.length, results.length);db.close()}})}});

    })
});