$set // The $set operator replaces  value of a fd with  specified value.
 
 //{ $set: { <fd1>: <value1>, ... } }
//To specify a <fd> in an embedded doc or in an array, use dot notation.
 
//If  fd does not exist,
// $set will add a new fd with  specified value, 
// provided that  new fd does not violate a type constraint. 
//  spec  dotted path for a non-existent fd -> $set will create  embedded docs as needed to fulfill  dotted path to  fd.
 

// spec mult fd-value pairs -> $set will update or create each fd.

//Consider a collection products with  following doc:

d={_id: 100,     sku: "abc123", quantity: 250, instock: true, reorder: false, details: { model: "14Q2", make: "xyz" }, tags: [ "apparel", "clothing" ],     ratings: [ { by: "ijk", rating: 4 } ]}

//Set Top-Level Fields
//For  doc matching  criteria _id equal to 100, 
//  following operation uses  $set operator to update  value of  quantity fd,
// details fd, and  tags fd.
 

db.products.u({ _id: 100 }, { $set: {quantity: 500, details: { model: "14Q3", make: "xyz" }, tags: [ "coats", "outerwear", "clothing" ]}})

//The operation replaces  value of: quantity to 500; 
//  details fd to a new embedded doc,
// and  tags fd to a new array.




//    Set Fields in Embedded Documents
//To specify a <fd> in an embedded doc or in an array, use dot notation.

//    For  doc  matching  criteria _id equal to 100,  following operation updates  make fd in  details doc:

    
db.products.u({ _id: 100 }, { $set: { "details.make": "zzz" } })

//Set Elements in Arrays
//To specify a <fd> in an embedded doc or in an array, use dot notation.
//    For  doc matching  criteria _id equal to 100, 
//  following operation update  value second element (array index of 1) in  tags fd 
// and  rating fd in  first element (array index of 0) of  ratings array.

 
db.products.u({ _id: 100 }, { $set: {"tags.1": "rain gear", "ratings.0.rating": 2}})
