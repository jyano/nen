
/*





 In this map-reduce operation, MongoDB applies the map phase to each input document
 (i.e. the documents in the collection that match the query condition).
  The map function emits key-value pairs. For those keys that have multiple values,
  MongoDB applies the reduce phase, which collects and condenses the aggregated data.
   MongoDB then stores the results in a collection.
    Optionally, the output of the reduce function may pass through a finalize function
     to further condense or process the results of the aggregation.


 Map-reduce operations take the documents of a single collection as the input and can
 perform any arbitrary sorting and limiting before beginning the map stage. mapReduce
  can return the results of a map-reduce operation as a document, or may write the
  results to collections.

 NOTE
 For most aggregation operations, the Aggregation Pipeline provides
 better performance and more coherent interface. However, map-reduce
  operations provide some flexibility that
  is not presently available in the aggregation pipeline.
 Map-Reduce JavaScript Functions

 In MongoDB, map-reduce operations use custom JavaScript functions
  to map, or associate, values to a key. If a key has multiple values
   mapped to it, the operation reduces the values for the key to a single object.

 The use of custom JavaScript functions provide flexibility
 to map-reduce operations. For instance, when processing a document,
 the map function can create more than one key and value mapping or
  no mapping. Map-reduce operations can also use a custom JavaScript
   function to make final modifications to the results at the end of the
    map and reduce operation, such as perform additional calculations.

 Map-Reduce Behavior

 In MongoDB, the map-reduce operation can write results to a collection
 or return the results inline. If you write map-reduce output to a collection,
  you can perform subsequent map-reduce operations on the same input
  collection that merge replace, merge, or reduce new results with previous results.
   See mapReduce and Perform Incremental Map-Reduce for details and examples.

 When returning the results of a map reduce operation inline,
 the result documents must be within the BSON Document Size limit,
 which is currently 16 megabytes. For additional information on limits
 and restrictions on map-reduce operations, see the mapReduce reference page.

 MongoDB supports map-reduce operations on sharded collections.
  Map-reduce operations can also output the results to a sharded collection.
   See Map-Reduce and Sharded Collections.


 */