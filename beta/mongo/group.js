//$group  


$grp=function(id,ob,v){var o={}

    if(D(v)){
        o[ob]=v
        ob=o
    }

    return {$group:_.x({_id:id},ob)}
}


$GRP=function(id,ob){return [$grp(id,ob)]}


$sum=function(a){return {$sum: a}}
$mlt=function(a){return {$multiply: a}}
$avg=function(a){return {$avg: a}}
$lst=function(ob){
    return {$last: ob}
}

$fst=function(ob){
    return {$first: ob}
}

$gte=function(o){return {$gte:o}}
$mat=function(o){return {$match:o}}
$psh=function(a){
    return {$push:a}
}
$mnt=function(a){
    return {$month:a}
}
$dOM=function(a){
    return {$dayOfMonth:a}
}
$yr=function(a){
    return {$year:a}
}
//Groups dcs by  spec  expression, outputs to   next st, a dc
// for each distinct grouping.

grp={
    $group: {

        //The _id field is mandatory; 
//however,  you can specify an _id value of null  to calculate accumulated values  
// for all the input dcs as a whole.
//  The output dcs contain an 
//  _id field which contains the distinct group by key.



        _id: expression$,

//The remaining computed fields are optional and computed using the <accumulator> operators.

        //   The output dcs can also contain computed fields
//    that hold the values of some accumulator expression 
//    grouped by the $group‘s _id field. 

        field1$: { accumulator1$ : v1$ } //etc
    }
}

 

opers=function() {
//$sum	Returns a sum for each group. Ignores non-numeric values.
//$avg	Returns an average for each group. Ignores non-numeric values.
//$first	Returns a value from the first dc for each group. // Order is only defined if the dcs are in a defined order.
//$last	Returns a value from the last dc for each group. // Order is only defined if the dcs are in a defined order.
//$max	Returns the highest expression value for each group.
//$min	Returns the lowest expression value for each group.
//$push	Returns an array of expression values for each group.
//$addToSet	Returns an array of unique expression values for each group//             Order of the array elements is undefined.
}
 


 
 
cl=[
    {//Calculate Count, Sum, and Average 
     _id: 1,
         item: 'abc',
         prc: 10,
         amt:2, 
         date: ISODate('2014-03-01T08:00:00Z')
     },
     { id : 2, item : 'jkl', prc : 20, amt : 1, dt : ISODate('2014-03-01T09:00:00Z') },
     { id : 3, item : 'xyz', prc : 5, amt : 10, dt : ISODate('2014-03-15T09:00:00Z') },
     { id : 4, item : 'xyz', prc : 5, amt : 20, dt : ISODate('2014-04-04T11:21:39.736Z') },
     { id : 5, item : 'abc', prc : 10, amt : 10, dt : ISODate('2014-04-04T21:23:13.331Z') }]


 

id={mnt: $mnt('$date'), day:  $dOM('$date'), yr: $yr('$date') }} //   group  docs by M/d/Y,

opers= {totPrc: $sum($mlt(['$prc','$amt'])),//  calcs tot  prc
    avgAmt: $avg('$amt'),//and the average amt
    sum: $sum(1)}//   counts the dcs per each group


sales.ag($GRP(id,opers))// oper >>
r=[{_id:{mnt:3, day:15, yr: 2014 }, totPrc : 50, avgAmt:10, sum: 1},
    {_id:{mnt:4, day:4, yr: 2014 }, totPrc:200, avgAmt:15, sum: 2 },
    {_id:{mnt:3, day:1, yr: 2014 }, totPrc: 40, avgAmt:1.5, sum: 2 }]


grpByNull=function() { 
    sales.ag($GRP(null, opers))
//  oper >>
    r = {id: null, 'totPrc': 290, 'avgAmt': 8.6, sum: 5}
}

ex1=function() {
//Retrieve Distinct Values
//Given a cl sales with the following dcs:
//
    a = [
        {id: 1, item: 'abc', prc: 10, amt: 2, dt: ISODate('2014-03-01T08:00:00Z')},
        {id: 2, item: 'jkl', prc: 20, amt: 1, dt: ISODate('2014-03-01T09:00:00Z')},
        {id: 3, item: 'xyz', prc: 5, amt: 10, dt: ISODate('2014-03-15T09:00:00Z')},
        {id: 4, item: 'xyz', prc: 5, amt: 20, dt: ISODate('2014-04-04T11:21:39.736Z')},
        {id: 5, item: 'abc', prc: 10, amt: 10, dt: ISODate('2014-04-04T21:23:13.331Z')}
    ]

    sales.ag($GRP('$item')) //>>
    r = [{id: 'xyz'}, {id: 'jkl'}, {id: 'abc'}]


//Pivot Data
    bks = [
        {id: 8751, tt: 'The Banquet', aut: 'Dante', copies: 2},
        {id: 8752, tt: 'Divine Comedy', aut: 'Dante', copies: 1},
        {id: 8645, tt: 'Eclogues', aut: 'Dante', copies: 2},
        {id: 7000, tt: 'The Odyssey', aut: 'Homer', copies: 10},
        {id: 7020, tt: 'Iliad', aut: 'Homer', copies: 10}]


//The following aggr  oper  pivots 
//   data in  books   cl to have titles grouped by authors.

    bks.ag($GRP(
        '$author', {
            bks: $push('$title')
        })) // oper >>
    r = [
        {id: 'Homer', bks: ['The Odyssey', 'Iliad']},
        {id: 'Dante', bks: ['The Banquet', 'Divine Comedy', 'Eclogues']}
    ]

}
ex2=function() {
//Group Documents by author
//The following aggregation operation uses
// the $$ROOT system variable to group the dcs by authors.
// The resulting dcs must not exceed 
// the BSON Document Size limit.

    bks.ag($GRP('$author', {bks: $psh('$$ROOT')})) // >>
    r = [
        {
            id: 'Homer', bks: [
            {id: 7000, tt: 'The Odyssey', aut: 'Homer', copies: 10},
            {id: 7020, tt: 'Iliad', aut: 'Homer', copies: 10}
        ]
        },

        {
            id: 'Dante', bks: [
            {id: 8751, tt: 'The Banquet', aut: 'Dante', copies: 2},
            {id: 8752, tt: 'Divine Comedy', aut: 'Dante', copies: 1},
            {id: 8645, tt: 'Eclogues', aut: 'Dante', copies: 2}]
        }
    ]


}
zipcodeEx=function(){

    zipcodeDocSc={
        id: '10280',
        city: 'NEW YORK',
        state: 'NY',
        pop: 5574, //loc: [-74.016323, 40.710537]
    }

    //The _id field holds the zip code as a string.
    //    The city field holds the city name. A city can have more than one zip code associated with it as different sections of the city can each have a different zip code.
    //    The state field holds the two letter state abbreviation.
    //    The pop field holds the population.
    //    The loc field holds the location as a latitude longitude pair.
     //Aggregation with the Zip Code Data Set



//     Return States with Populations above 10 Million
    // The following aggregation operation
    // returns all states with
    // total population greater than 10 million:

     zipcodes.ag([
         $grp('$state', {totPop: $sum('$pop')}),
         $mat({
             totPop: $gte(10*1000*1000)
         })
     ])





     //Return Average City Population by State
     //The following aggregation operation
     // returns the average populations
     // for cities in each state:

    zipcodes.ag([
        $grp(
            {state: '$state', city: '$city' },
            'pop',
            $sum('$pop')),

        $grp('$_id.state', 'avgCityPop', $avg('$pop'))
    ])


     //The first $group stage groups the dcs 
     // by the combination of city and state, 
     // uses the $sum expression to calculate 
     // the population for each combination, 
     // and outputs a dc for each city and state combination.
    
     //After this stage in the pipeline, 
     // the dcs resemble the following:
     
   d= {id : {state : 'CO', city : 'EDGEWATER'},pop : 13154}
     //A second $group stage groups the dcs in the pipeline
     // by the _id.state field
     // (i.e. the state field inside the _id dc),
     // uses the $avg expression to calculate the average city
     // population (avgCityPop) for each state,
     // and outputs a dc for each state.
     //The dcs that result from this aggregation operation
     // resembles the following:

 d=    {id : 'MN', avgCityPop : 5335}


    ex3=function() {

        //Return Largest and Smallest Cities by State
        zipcodes.ag([
            $grp({state: '$state', city: '$city'}, 'pop', $sum('$pop')),
            $sor('pop', 1),
            $grp('$_id.state', {
                bigCity: $lst('$_id.city'), bigPop: $lst('$pop'),
                smlCity: $fst('$_id.city'), smlPop: $fst('$pop')
            }),
            // the following $project is optional, and
            // modifies the output format.
            $prj({
                    _id: 0, state: '$_id',
                    bigCity: {n: '$bigCity', pop: '$bigPop'},
                    smlCity: {n: '$smlCity', pop: '$smlPop'}
                }
            )
        ])
        // In this example, the aggregation pipeline consists of a $group stage,
        // a $sort stage, another $group stage, and a $project stage:
        // The first $group stage groups the dcs by the combination of the city and state, calculates the sum of the pop values for each combination, and outputs a dc for each city and state combination.
        //  At this stage in the pipeline, the dcs resemble the following:
        d = {id: {state: 'CO', city: 'EDGEWATER'}, pop: 13154}
        //The $sort stage orders the dcs in the pipeline by the pop field value, from smallest to largest; i.e. by increasing order. This operation does not alter the dcs.
        //The next $group stage groups the now-sorted dcs by the _id.state field (i.e. the state field inside the _id dc) and outputs a dc for each state.
        //The stage also calculates the following four fields for each state. Using the $last expression, the $group operator creates the biggestCity and biggestPop fields that store the city with the largest population and that population. Using the $first expression, the $group operator creates the smallestCity and smallestPop fields that store the city with the smallest population and that population.
        //The dcs, at this stage in the pipeline, resemble the following:
        o = {id: 'WA', bigCit: 'SEATTLE', bigPop: 520096, smlCit: 'BENGE', smlPop: 2}
        //The final $project stage renames the _id field to state and moves the biggestCity, biggestPop, smallestCity, and smallestPop into biggestCity and smallestCity embedded dcs.
        //The output dcs of this aggregation operation resemble the following:
        d = {state: 'RI', bigCit: {n: 'CRANSTON', pop: 176404}, smlCit: {n: 'CLAYVILLE', pop: 45}}
    }
     
}