autoIndexScOp = function(){
 //At application startup,
// indexes are created in the background by df
// mg sends an ensureIndex command for each  index declared in your Sc
 //  disable auto-creation, manually handle when indexes are created?
 // Scs autoIndex=false, use the ensureIndexes yourself met  on md
 Sc = $Sc({}, {autoIndex: false});
 Clock = $M('Clock', Sc);
 Clock.ensureIndexes(callback);
}





 MONGDBINTRO=function(){
     /*
      Index Introduction

      Indexes support the efficient execution of queries in MongoDB. Without indexes, MongoDB must perform a collection scan, i.e. scan every document in a collection, to select those documents that match the query statement. If an appropriate index exists for a query, MongoDB can use the index to limit the number of documents it must inspect.

      Indexes are special data structures [1] that store a small portion of the collection’s data set in an easy to traverse form. The index stores the value of a specific field or set of fields, ordered by the value of the field. The ordering of the index entries supports efficient equality matches and range-based query operations. In addition, MongoDB can return sorted results by using the ordering in the index.

      The following diagram illustrates a query that selects and orders the matching documents using an index:

      Diagram of a query that uses an index to select and return sorted results. The index stores ``score`` values in ascending order. MongoDB can traverse the index in either ascending or descending order to return sorted results.
      Fundamentally, indexes in MongoDB are similar to indexes in other database systems. MongoDB defines indexes at the collection level and supports indexes on any field or sub-field of the documents in a MongoDB collection.

      [1]	MongoDB indexes use a B-tree data structure.
      Index Types

      MongoDB provides a number of different index types to support specific types of data and queries.

      Default _id
      All MongoDB collections have an index on the _id field that exists by default. If applications do not specify a value for _id the driver or the mongod will create an _id field with an ObjectId value.

      The _id index is unique and prevents clients from inserting two documents with the same value for the _id field.

      Single Field
      In addition to the MongoDB-defined _id index, MongoDB supports the creation of user-defined ascending/descending indexes on a single field of a document.

      Diagram of an index on the ``score`` field (ascending).
      For a single-field index and sort operations, the sort order (i.e. ascending or descending) of the index key does not matter because MongoDB can traverse the index in either direction.

      See Single Field Indexes and Sort with a Single Field Index for more information on single-field indexes.

      Compound Index
      MongoDB also supports user-defined indexes on multiple fields, i.e. compound indexes.

      The order of fields listed in a compound index has significance. For instance, if a compound index consists of { userid: 1, score: -1 }, the index sorts first by userid and then, within each userid value, sorts by score.

      Diagram of a compound index on the ``userid`` field (ascending) and the ``score`` field (descending). The index sorts first by the ``userid`` field and then by the ``score`` field.
      For compound indexes and sort operations, the sort order (i.e. ascending or descending) of the index keys can determine whether the index can support a sort operation. See Sort Order for more information on the impact of index order on results in compound indexes.

      See Compound Indexes and Sort on Multiple Fields for more information on compound indexes.

      Multikey Index
      MongoDB uses multikey indexes to index the content stored in arrays. If you index a field that holds an array value, MongoDB creates separate index entries for every element of the array. These multikey indexes allow queries to select documents that contain arrays by matching on element or elements of the arrays. MongoDB automatically determines whether to create a multikey index if the indexed field contains an array value; you do not need to explicitly specify the multikey type.

      Diagram of a multikey index on the ``addr.zip`` field. The ``addr`` field contains an array of address documents. The address documents contain the ``zip`` field.
      See Multikey Indexes and Multikey Index Bounds for more information on multikey indexes.

      Geospatial Index
      To support efficient queries of geospatial coordinate data, MongoDB provides two special indexes: 2d indexes that uses planar geometry when returning results and 2sphere indexes that use spherical geometry to return results.

      See 2d Index Internals for a high level introduction to geospatial indexes.

      Text Indexes
      MongoDB provides a text index type that supports searching for string content in a collection. These text indexes do not store language-specific stop words (e.g. “the”, “a”, “or”) and stem the words in a collection to only store root words.

      See Text Indexes for more information on text indexes and search.

      Hashed Indexes
      To support hash based sharding, MongoDB provides a hashed index type, which indexes the hash of the value of a field. These indexes have a more random distribution of values along their range, but only support equality matches and cannot support range-based queries.

      Index Properties

      Unique Indexes
      The unique property for an index causes MongoDB to reject duplicate values for the indexed field. Other than the unique constraint, unique indexes are functionally interchangeable with other MongoDB indexes.

      Sparse Indexes
      The sparse property of an index ensures that the index only contain entries for documents that have the indexed field. The index skips documents that do not have the indexed field.

      You can combine the sparse index option with the unique index option to reject documents that have duplicate values for a field but ignore documents that do not have the indexed key.

      TTL Indexes
      TTL indexes are special indexes that MongoDB can use to automatically remove documents from a collection after a certain amount of time. This is ideal for certain types of information like machine generated event data, logs, and session information that only need to persist in a database for a finite amount of time.

      See: Expire Data from Collections by Setting TTL for implementation instructions.

      Index Use

      Indexes can improve the efficiency of read operations. The Analyze Query Performance tutorial provides an example of the execution statistics of a query with and without an index.

      For information on how MongoDB chooses an index to use, see query optimizer.

      Covered Queries

      When the query criteria and the projection of a query include only the indexed fields, MongoDB will return results directly from the index without scanning any documents or bringing documents into memory. These covered queries can be very efficient.

      Diagram of a query that uses only the index to match the query criteria and return the results. MongoDB does not need to inspect data outside of the index to fulfill the query.
      For more information on covered queries, see Covered Query.

      Index Intersection

      New in version 2.6.

      MongoDB can use the intersection of indexes to fulfill queries. For queries that specify compound query conditions, if one index can fulfill a part of a query condition, and another index can fulfill another part of the query condition, then MongoDB can use the intersection of the two indexes to fulfill the query. Whether the use of a compound index or the use of an index intersection is more efficient depends on the particular query and the system.

      For details on index intersection, see Index Intersection.

      Restrictions

      Certain restrictions apply to indexes, such as the length of the index keys or the number of indexes per collection. See Index Limitations for details.


      */
 }

//Indexes are defined through 
// ensureIndex 
// every time a model is compiled
// for a certain connection / database.
// This means that indexes will only be ensured once during the lifetime of your app.


    Ur = $Sc({ n: { t: $S, index: 1 } }) //regular


     $Sc({ n: { t: $S, sparse: 1 } }) //sparse

     $Sc({n: { t: $S, u: 1 }})//unique
  $Sc({n: { t: $S, index: { u: 1 } } })// uniq alt


 $Sc({n: { t: $S, u: 1, sparse: 1 }}) //uniq, sparse




    
Ur.index({ first: 1, last: -1 }, { u: 1 }) //Compound indexes are defined on the Schema itself.


 ix=function(){

  // Sc Indexes// Mongodb also supports many indexes which we can apply using Scs


  userSc = mg.Sc({f: $S, l: $S, cr_at: $D, is_actv: $B, email : {t:$S,q:1,index:{unique:1}}, //field level
   meta: {friends: $N, likes: {t: $N, df: -1}, votes: $N, dislikes: $N}, cms: [{body: $S, date: $D}],
   updated_at: {t: $D, df: $D.now}, a: {t: $N, min: 5, max: 40}, t: {t: $S, enum: allowedTypes},
   un: {t: $S, lC: 1, q: 1, trim: 1}, int_n: {t: $S, match: /int_/},
   last_payment_date: {t: $D, df: $D.now, expires: 60 * 60 * 31}});
  userSc.index({f:-1,l:-1}); //Sc level

//If for some reason indexes are not getting created, restart mongodb server and check if index constraints are
// not failing already. Which means for index unique on email field, if you db already has duplicate emails
// indexes won’t work.
// You can view indexes in rockmongo from DB -> Collection > More -> Indexes
// mg also tries to create indexes on each t application start, which causes overheads. To stop this do

  userSc.set('autoIndex',0);
// There are few other Sc options which can be seen here http://mgjs.com/docs/guide.html#autoIndex

 }

 index=function(){
  //Indexes

//MongoDB supports secondary indexes.
// With $mg, we define these indexes within our Schema at the path level
// or the schema level.

// Defining indexes at the schema level is necessary when
// creating compound indexes.

  anSc = $Sc({
   n: $S,  type: $S,  tags: { type: [$S], index: true } // field level
  })

  anSc.index({ n: 1, type: -1 }); // schema level
//When your application starts up, $mg automatically calls ensureIndex for each defined index in your schema. While nice for development, it is recommended this behavior be disabled in production since index creation can cause a significant performance impact. Disable the behavior by setting the autoIndex option of your schema to false.

  anSc.set('autoIndex', false);
// or
  $Sc({}, { autoIndex: false });
//See also the Model#ensureIndexes method.

 }
 ixx=function(){

  Per = $Sc({ n: { t: $S, index: true }}) //*index: {Boolean|Object} - //  ensure an index is created for this path (can also pass ob) //Note: if the index already exists on the db, it will not be replaced.
  Per = $Sc({ n: { t: $S, unique: true } })// *  unique: {Boolean} -  ensure  unique index is created for this path. //Note: if the index already exists on the db, it will not be replaced.
  Per = $Sc({ n: { t: $S, sparse: true }})// *sparse: {Boolean} - //  Tells mg to ensure a sparse index is created for this path. // Note: if the index already exists on the db, it will not be replaced.

 }
