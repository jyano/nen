part1=function(){

    //Implement Field Level Redaction
//
//The $redact pipeline operator
// restricts the contents of the documents
// based on information stored in the documents themselves.
//
//    Diagram of security architecture
// with middleware and redaction.
//    To store the access criteria data, add a field to the documents and embedded documents. To allow for multiple combinations of access levels for the same data, consider setting the access field to an array of arrays. Each array element contains a required set that allows a user with that set to access the data.
//
//    Then, include the $redact stage in the db.collection.aggregate() operation
// to restrict contents of the result set based on the access required to view the data.
//
//    For more information on the $redact pipeline operator,
// including its syntax and associated system variables
// as well as additional examples, see $redact.
//
//    Procedure
//
//For example, a forecasts collection contains documents of the following form where the tags field determines the access levels required to view the data:

    o={
        _id: 1,
        title: "123 Department Report",
        tags: [ [ "G" ], [ "FDW" ] ],
        year: 2014,
        subsections: [
            {
                subtitle: "Section 1: Overview",
                tags: [ [ "SI", "G" ], [ "FDW" ] ],
                content:  "Section 1: This is the content of section 1."
            },
            {
                subtitle: "Section 2: Analysis",
                tags: [ [ "STLW" ] ],
                content: "Section 2: This is the content of section 2."
            },
            {
                subtitle: "Section 3: Budgeting",
                tags: [ [ "TK" ], [ "FDW", "TGE" ] ],
                content: {
                    text: "Section 3: This is the content of section3.",
                    tags: [ [ "HCS"], [ "FDW", "TGE", "BX" ] ]
                }
            }
        ]
    }
//For each document, the tags field contains various access groupings necessary to view the data. For example, the value [ [ "G" ], [ "FDW", "TGE" ] ] can specify that a user requires either access level ["G"] or both [ "FDW", "TGE" ] to view the data.

    //  Consider a user who only has access to view information tagged with either "FDW" or "TGE". To run a query on all documents with year 2014 for this user, include a $redact stage as in the following:

    userAccess = [ "FDW", "TGE" ];
    forecasts.ag([
            {$m: { year: 2014 } },
            {$r:{$cond:{
                if:{$anyElementTrue:{
                    $map: {
                        input:"$tags",
                        as:"fieldTag",
                        in:{$setIsSubset:["$$fieldTag", userAccess]}}

                }},
                then:"$$DESCEND",
                else:"$$PRUNE"
            }}}

        ]
    )
//The aggregation operation
// returns the following “redacted” document for the user:

    b={ "_id" : 1,
        "title" : "123 Department Report",
        "tags" : [ [ "G" ], [ "FDW" ] ],
        "year" : 2014,
        "subsections" :
            [
                {
                    "subtitle" : "Section 1: Overview",
                    "tags" : [ [ "SI", "G" ], [ "FDW" ] ],
                    "content" : "Section 1: This is the content of section 1."
                },
                {
                    "subtitle" : "Section 3: Budgeting",
                    "tags" : [ [ "TK" ], [ "FDW", "TGE" ] ]
                }
            ]
    }





}
redact=function(){
   // http://stackoverflow.com/questions/28131069/mongodb-redact-to-replace-subdocuments-with-access-denied


// $redact changed docs' forms
// by restricting  content for each doc
// based on info stored in
// docs themselves

  //Syntax :{ $redact: <exsn> }
//  exp  can be the sys  vars

//$$DESCEND
// 	$redact rets fies at   cur dc  lvl,
// excluding embd dcs
//   embd dcs and embd docs  w/i arrs
// can also be included  by applying  exsn: $cond  to embd dcs
//
//
// $$PRUNE
      //  excludes all fields  in  cur dc/embd dc lvl,
//  (stops inspecting fields at this level)
//  excluded field contains embedded dcs
// which may have dif  access lvls can also be applied
// without further any inspection.

//    $$KEEP
// $redact keeps intact all fields  in  cur dc/embd dc lvl,
//  (stops inspecting fields at this level)


// The included fie  contains embd dcs
// which may have dif  access lvls
// can also be applied w/o further any inspection.

//    Sample  cl testdate contains
// docs  where:
// 'tags'
// lists  dif  access vals (peep allowed data access)  for that doc/embd doc lvl

    o={
        _id : ObjectId("55432b302a8be1f2a41b9464"),
        title : "Department Report of 456",
        tags : ["MM", "KKLT"],
        year : 2013,
        subsections : [
            {subtitle : "Overview : Section 1", tags : ["PJ", "MM"],
                content : "Sec1Content"},
            {subtitle : "S2Placement", tags : ["KKLT"],
                content : "S2:  section 2."},
            {subtitle : "Projection", tags : ["FS"],
                content : {
                    text : "Sec3: content",
                    tags : ["LTS"]}}]
    }

//Ex  : $redact user has access to view info w
// either   tag "KKLT" or "MM" to run a qu
// on all docs w  year 2013 for this user.


    userAccess = [ "MM", "KKLT" ]

    db.testdate.aggregate(
        [
            { $match: { year: 2013 } },
            { $redact: {

                $cond: {
                    if: {
                        $gt:[{$size: {$setIntersection: [ "$tags", userAccess ]}},
                            0]
                    },
                    then: "$$DESCEND", else: "$$PRUNE"
                }
            }
            }
        ]
    )


    OP={
        "_id" : ObjectId("55432b302a8be1f2a41b9464"),
        "title" : "Department Report of 456",
        "tags" : [
            "MM",
            "KKLT"
        ],
        "year" : 2013,
        "subsections" : [
            {
                "subtitle" : "Overview : Section 1",
                "tags" : [
                    "PJ",
                    "MM"
                ],
                "content" : "Section 1: This is the content of section 1."
            },
            {
                "subtitle" : "Section 2: Placement",
                "tags" : [
                    "KKLT"
                ],
                "content" : "Section 2: This is the content of section 2."
            }
        ]
    }



}
unwind=function(){




// $unwind (aggregation)
//Deconstructs  arr fie  from IPdcs to output a doc for each el
//  Each OPdc is IPdc w  val of arr fie  replaced by el
//Consider inv w doc:
    dc = {
        _id: 1,
        item: "ABC1",
        sizes: ["S", "M", "L"]
    }
    db.inv.aggregate([{
        // { $unwind: <fie pt> } prefix fie name w '$'
        $unwind: "$sizes"
        //specify which field will hold an array
        //    If val in fie specd by fie pt !arr,  db.cl.aggr() gens z
//    specd fie pt not in IPdc?   IPdc !incld
//    IPdc has empty []? IPdc !incld
    }])

//  aggr  uses the $unwind stage   to OP a dc for ea  el in sizes arr ??
    a = {_id: 1, item: "ABC1", sizes: "S"}
    b = {_id: 1, item: "ABC1", sizes: "M"}
    c = {_id: 1, item: "ABC1", sizes: "L"}
//Each doc ~  IPdc  except 'sizes'  now holds  val from orig sizes arr
}
