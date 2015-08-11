 // ck.maxAge df=null (! expr set)
// so ck becomes a bw-ss ck (bw closes -> ck,ss rmd)

//Alt, q.ss.ck.maxAge will return the time remaining in ms,
// which we may also re-assign a new value to adjust expiration
 hour = 3600000

q.ss.ck.expr = new $D($D.n() + hour)

 // These are ~
 q.ss.ck.maxAge = hour



q.ss.ck.maxAge // => 30000




$a.u(function (q, p, n) {


    if (!q.ss.vws) {
                q.ss.vws = 1
                p.e('welcome to the ss demo. refresh!')

    }


    else {

        q.ss.vws++
                p.hd('Content-Type', 'text/html')
                p.wr('<p>vws: ' + q.ss.vws + '</p>')
                p.wr('<p>expr in: ' +
                    q.ss.ck.maxAge / 1000
                    + 's</p>')

     p.e()

    }

})




/*

 MongoDB’s “time to live” or TTL cl feature.
 TTL cls make it possible to store data in MG
 and have the mongod auto rm data after a specd number of secs or at a spec clock time.
 special TTL ix prop sups impl of TTL cls.
 The TTL feature relies on a bg thread in mongod that reads the date-typed vals
 in the ix and rms expired docs from the cl.
 To create a TTL ix, use the db.cl.createix() w op:expireAfterSeconds
 on a field whose val is either a date or [date]
 NOTE:TTL ix is a 1field ix. Compound ixes do not support the TTL prop.

 To expire data after a specd number of seconds has passed since the ixed field,
 create a TTL ix on a field that holds vals of
 BSON date type or  [BSON date-typed ob]
 and spec a pos non-zero val in the expireAfterSeconds field.
 A doc  will expire when the num   secs in the expireAfterSeconds field has passed
 since the time specd in its ixed field. [1]
 ex:, the following op creates an ix on the log_events cl’s
 createdAt field and specifies the expireAfterSeconds val of 3600 to set the
 expiration time to be one hour after the time specd by createdAt.
 db.log_events.createix( { "createdAt": 1 }, { expireAfterSeconds: 3600 } )
 When adding docs to the log_events cl, set the createdAt field to the current time:
 db.log_events.insert( {   "createdAt": new $D(),  "logEvent": 2,    "logMessage": "Success!" } )
 MG   auto-dels docs from log_events cl when the doc’s createdAt val[1] older than num secs specd in expireAfterSeconds.
 [1]	(1, 2) If the field contains an array of BSON date-typed objects,
 data expires if at least one of BSON date-typed object is older than the number of seconds specd in expireAfterSeconds.

 Expire docs at a Specific Clock Time
 To expire docs at a spec  clock time, begin by creating a TTL ix on a field that
 holds vals of BSON date type or an array of BSON date-typed obs and spec an
 expireAfterSeconds val of 0. For each doc  in cl, set the ixed date field
 to a val  correspg to  time   doc should expire.
 If  ixed date field contains  old date, Mg considers the doc  expired
 ex:  create ix on  log_events cl’s expireAt field, set expireAfterSeconds = 0
 db.log_events.createix( { "expireAt": 1 }, { expireAfterSeconds: 0 } )
 For each doc, set the val of expireAt to correspond to the time doc  should expire.
 ex:  add a doc  expiring July 22, 2013 14:00:00.
 db.log_events.insert( {   "expireAt": new $D('July 22, 2013 14:00:00'), "logEvent": 2, "logMessage": "Success!"} )
 MG  aut-dels docs from log_events cl when docs’ expireAt val older than num secs specd in expireAfterSeconds, ( 0 seconds older in this case )
 so, the data expires at specd expireAt val

 /// second site

 MongoDB Time To Live (TTL) collections
 at Thursday, September 27, 2012 | 4 Comments
 A new feature was introduced in MongoDB 2.2: Time To Live collections. TTL collection is a collection, where documents automatically will be removed after specific period of time. The common use-case for TTL collections is to store some session information, or use it as a cache for your system.


 If you want to make your collection TTL, you should use expireAfterSeconds index option:

 db.ttl.ensureIndex({"Date": 1}, {expireAfterSeconds: 300})


 Restrictions

 There are some restrictions on choosing TTL Index:
 you can't create TTL index if indexed field is already used in another index
 index can't have multiple fields
 indexed field should be a Date bson type
 If you violate one of these rules, documents wouldn't be removed after expiration time.


 How are they removed?

 mongod background process keeps track on expired documents and removes them.

 Lets check this out:
 At first, we should create an index and set expire after 10 seconds.
 db.ttl_collection.ensureIndex( { "Date": 1 }, { expireAfterSeconds: 10 } )
 Now lets insert a document.
 db.ttl_collection.insert({"Date" : new Date()})
 So we think this document should be removed after 10 seconds.
 I've checked this on my computer a few times and results were very different. Sometimes mongod removes my document after 18 seconds, sometimes after 40 seconds. Why? We told MongoDB that we want to remove them after 10 seconds, but MongoDB does this at different time.

 For example, in this case it takes about 45 seconds:



 This happens because mongod background task checks expired document once a minute. So there always will be a little difference in expiration time that you set and a real time elapsed before they are removed. But it will be not more than about 1 minute. It can depend on workload of your MongoDB instance.

 Can we set TTL index to existing collection?

 Yes, you can. Documents which were added to this collection before setting TTL index will be removed according to their Date field:




 Can we prevent some documents from removing?

 Yes, you can do it in 2 ways:
 always update documents TTL field date before it will be removed
 set a non-date value to TTL field
 For example, if I set Date field to null, it never will be removed:


 */


 //ex: when maxAge   set to 60000 (1min),
 // and 30 seconds has elapsed it will return 30000
 // until curr req complete,
 // at which time req.ss.touch()
 // resets q.ss.maxAge (to  orig  val)


 //session id !!   q.ssID
//To get the ID of the loaded ss,
// access the req prop  q.ssID.
//   read-only val  set when a ss is loaded/created.

