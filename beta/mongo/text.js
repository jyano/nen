////$text op

// performs text search
// on the content of the fields
// indexed with a text index.



 o={ // A $text expression has the following syntax:
     $text: {

         $search: 'str',
         //$search	string	A string of terms that MongoDB parses
// and uses to query the text index. MongoDB performs a logical OR search of the terms unless specified as a phrase. See Behavior for more information on the field.

         $language: 'str'//    $language	  Optional.
// The language that determines the list of stop words for the search
// and the rules for the stemmer and tokenizer.
// If not specified,
// the search uses the default language of the index.
// For supported languages, see Text Search Languages.
//    If you specify a language value of "none",
// then the text search uses simple tokenization with no list
// of stop words and no stemming.
//


 } }
//    The $text operator, by default,  does not return results sorted in terms of the results’ score.





//Restrictions
//A query can specify, at most, one $text expression.
//    The $text query can not appear in $nor expressions.
//    To use a $text query in an $or expression, all clauses in the $or array must be indexed.
//    You cannot use hint() if the query includes a $text query expression.
//    You cannot specify $natural sort order if the query includes a $text expression.
//    You cannot combine the $text expression, which requires a special text index, with a query operator that requires a different type of special index. For example you cannot combine $text expression with the $near operator.
//    $search Field
//In the $search field, specify a string of words that the text operator parses and uses to query the text index. The text operator treats most punctuation in the string as delimiters, except a hyphen - that negates term or an escaped double quotes \" that specifies a phrase.
//
//Phrases
//To match on a phrase, as opposed to individual terms,
// enclose the phrase in escaped double quotes (\"), as in:
//
//"\"ssl certificate\""
//If the $search string includes a phrase and individual terms,
// text search will only match the documents that include the phrase.
// More specifically,
// the search performs a logical AND of the phrase with the individual terms
// in the search string.
//
//    For example, passed a $search string:
//
//    "\"ssl certificate\" authority key"
//The $text operator searches for the phrase "ssl certificate" and ("authority" or "key" or "ssl" or "certificate" ).
//
//Negations
//Prefixing a word with a hyphen sign (-) negates a word:
//
//    The negated word excludes documents that contain the negated word
// from the result set.
//    When passed a search string that only contains negated words,
// text search will not match any documents.
//    A hyphenated word, such as pre-market, is not a negation.
// The $text operator treats the hyphen as a delimiter.
//    The $text operator adds all negations to the query with the logical AND operator.
//
//    Match Operation
//The $text operator ignores language-specific stop words,
// such as the and and in English.
//    The $text operator matches on the complete stemmed word.
// So if a document field contains the word blueberry,
// a search on the term blue will not match.
// However, blueberry or blueberries will match.
//    For the Latin alphabet,
// text search is case insensitive for non-diacritics;
// i.e. case insensitive for [A-z].
//
//                                                                                                              Text Score
//The $text operator assigns a score
// to each document that contains the search term in the indexed fields.
// The score represents the relevance of a document
// to a given text search query.
// The score can be part of a sort() method specification
// as well as part of the projection expression.
// The { $meta: "textScore" } expression provides information
// on the processing of the $text operation.

//
//The following examples assume a collection articles
// that has a text index on the field subject:
//
    db.articles.createIndex( { subject: "text" } )
//Search for a Single Word
//The following query searches for the term coffee:
//
  db.articles.find( { $text: { $search: "coffee" } } )
//This query returns documents that contain the term coffee in the indexed subject field.
//
//    Match Any of the Search Terms
//If the search string is a space-delimited string, $text operator performs a logical OR search on each term and returns documents that contains any of the terms.
//
//    The following query searches specifies a $search string of three terms delimited by space, "bake coffee cake":
//
 db.articles.find( { $text: { $search: "bake coffee cake" } } )
//This query returns documents that contain either bake or coffee or cake in the indexed subject field.
//
//    Search for a Phrase
//To match the exact phrase as a single term, escape the quotes.
//
//    The following query searches for the phrase coffee cake:
//
//    db.articles.find( { $text: { $search: "\"coffee cake\"" } } )
//This query returns documents that contain the phrase coffee cake.
//
//    SEE ALSO
//Phrases
//Exclude Documents That Contain a Term
//A negated term is a term that is prefixed by a minus sign -. If you negate a term, the $text operator will exclude the documents that contain those terms from the results.
//
//    The following example searches for documents
// that contain the words bake or coffee
// but do not contain the term cake:
//
    db.articles.f({$text: {
        $search: "bake coffee -cake"
    }})

//SEE ALSO
//Negations
//Return the Text Search Score
//The following query searches for the term cake and returns the score assigned to each matching document:
//
   db.articles.find(
       { $text: { $search: "cake" } },
        { score: { $meta: "textScore" } }
    )

//In the result set,
// the returned documents includes an additional field score
// that contains the document’s score associated with the text search. [1]
//
//SEE ALSO
//Text Score
//Sort by Text Search Score
//To sort by the text score, include the same $meta expression
// in both the projection document and the sort expression.
// [1] The following query searches for the term cake and
// sorts the results by the descending score:
//
    db.articles.f(
        { $text: { $search: "cake" } },
         { score: { $meta: "textScore" } }
     ).sort( { score: { $meta: "textScore" } } )


//In the result set, the returned documents includes an additional field score
// that contains the document’s score associated with the text search.
//
//    SEE ALSO
//Text Score
//Return Top 3 Matching Documents
//Use the limit() method in conjunction with a sort()
// to return the top three matching documents.
// The following query searches for the term cake
// and sorts the results by the descending score:
//
    db.articles.f(
        { $text: { $search: "cake" } },
       { score: { $meta: "textScore" } }
    ).sort( { score: { $meta: "textScore" } } ).limit(3)


//SEE ALSO
//Text Score
//Text Search with Additional Query and Sort Expressions
//The following query searches for documents with status equal to "A" that contain the terms coffee or cake in the indexed field subject and specifies a sort order of ascending date, descending text score:
//
     db.articles.f(

         {
             status: "A",
             $text:{$search:"coffee cake"}
         },

         {score: {$meta:"textScore"}}

     ).sort({
             date: 1,
             score: { $meta: "textScore" }
         })




//Search a Different Language
//Use the optional $language field in the $text expression to specify a language that determines the list of stop words and the rules for the stemmer and tokenizer for the search string.
//
//    If you specify a language value of "none",
// then the text search uses simple tokenization
// with no list of stop words and no stemming.
//
//    The following query specifies es for Spanish as the language
// that determines the tokenization, stemming, and stop words:

     db.articles.f({
         $text: {
             $search: "leche",
             $language: "es"
         }
     })
//The $text expression can also accept the language by name,  spanish

