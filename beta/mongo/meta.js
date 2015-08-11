//
//$meta
//

//
//    The $meta proj oper rets for each matg doc   the metadata
// (e.g. "textScore")
// associated with the query.


//    A $meta expression has the following syntax:
//
//{ $meta: <metaDataKeyword> }
//The $meta expression can specify the following keyword as the <metaDataKeyword>:
//
//Keyword	Description	Sort Order
//"textScore"	Returns the score associated with the corresponding $text query for each matching document. The text score signifies how well the document matched the stemmed term or terms. If not used in conjunction with a $text query, returns a score of 0.	Descending
//Behaviors
//
//The $meta expression can be a part of the projection document
// as well as a sort() expression as:
//
//{ <projectedFieldName>: { $meta: "textScore" } }
//Projected Field Name
//The <projectedFieldName> cannot include a dot (.) in the name.
//
//    If the specified <projectedFieldName> already exists in the matching documents, in the result set, the existing fields will return with the $meta values instead of with the stored values.
//
//    Projection
//The $meta expression can be used in the projection document, as in:


 db.collection.find(
//<query>,
 { score: { $meta: "textScore" } }
 )

//The $meta expression specifies the inclusion of the field to the result set and does not specify the exclusion of the other fields.
//
//    The $meta expression can be a part of a projection document that specifies exclusions of other fields or that specifies inclusions of other fields.
//
//    The metadata returns information on the processing of the <query> operation. As such, the returned metadata, assigned to the <projectedFieldName>, has no meaning inside a <query> expression; i.e. specifying a condition on the <projectedFieldName> as part of the <query> is similar to specifying a condition on a non-existing field if no field exists in the documents with the <projectedFieldName>.
//
//Sort
//The $meta expression can be part of a sort() expression, as in:
//
 db.collection.find(
// <query>,
 { score: { $meta: "textScore" } }
 ).sort( { score: { $meta: "textScore" } } )

//To include a $meta expression in a sort() expression, the same $meta expression, including the <projectedFieldName>, must appear in the projection document. The specified metadata determines the sort order. For example, the "textScore" metadata sorts in descending order.
//

//    For additional examples, see Text Search with Additional Query and Sort Expressions.
//
//    Examples
//
//For examples of "textScore" projections and sorts, see $text.