// querystring parsing/stringifying lib, wsecurity, supports nesting and arrs, w depth lm
lib=function(){
    Qs=require('qs')
    Qs.p=Qs.parse
    Qs.s=Qs.stringify

}
qsOp=function(ob){
o={}
    o.d= ob.depth
    o.pL=ob.parameterLimit
    o.dl= ob.delimiter
    o.sNH= ob.strictNullHandling
}

ob=Qs.p('a=c', op)   // { a: 'c' }
str=Qs.s(ob)  // 'a=c'

nesting=function(){

// qs allows you to create nested obs
// within your query strs,
// by surrounding name of sub-keys
// w square brackets [],
// or prefixing the sub-key w a dot


    /* 'foo[bar]=baz' ->  */  {foo:{bar:'baz' }}


// You can also nest your obs // like 'foo[bar][baz]=foobarbaz':

    o = {foo: {bar: {baz: 'foobarbaz'}}}

//By df, when nesting obs qs will only
// parse up to 5 children deep.

// This means if you attempt to parse
// string like
// 'a[b][c][d][e][f][g][h][i]=j'
// your resulting ob will be:
        o = {a: {b: {c: {d: {e: {f: {'[g][h][i]': 'j'}}}}}}}

    // depth can be overridden by // passing a depth op to  // Qs.p(str, op)

    Qs.p('a[b][c][d][e][f][g][h][i]=j', {d:1}) // { a: { b: { '[c][d][e][f][g][h][i]': 'j' } } }

// depth lm helps mitigate abuse
// when qs is used to parse user input,
// and it is recommended to keep it
// reasonably small number.


//  For sim reasons, by df
// qs will only parse up to 1000 pams
// This can be overridden by passing
// a pamLimit op

        Qs.p('a=b&c=d', {pL: 1})

}
plainObjects=function(){

//  op: plainObjects:
//   parsed value returned as plain ob,
// created via Object.create(null)
// and as such you should be aware
// that prototype mets
// will not exist on it and user may
// set those names
// to whatever val they like:



//By default parameters that would overwrite
// props on the ob prototype are ignored,
// if you wish to keep
// data from those fields  use plainObjects
    Qs.p('a.hasOwnProperty=b',
        {plainObjects: true});// { a: { hasOwnProperty: 'b' } }


}
URIenc=function(){
// URI encoded strs work too:
    Qs.p('a%5Bb%5D=c')//{a:{b:'c'}}
}
delim=function(){
// { a: 'b' } // An optional delimiter
// can also be passed:
    Qs.p('a=b;c=d', {delimiter: ';'}) // { a: 'b', c: 'd' }
    // Delimiters can be a regular expression too:
    Qs.p('a=b;c=d,e=f', {delimiter: /[;,]/}) // { a: 'b', c: 'd', e: 'f' }
}
dots=function(){
//Option allowDots can be used to disable
// dot notation:

    Qs.p('a.b=c', {allowDots: false}) // { 'a.b': 'c' } }

// Parsing Arrays
// qs can also parse arrays using a
// similar [] notation:

    Qs.p('a[]=b&a[]=c') // { a: ['b', 'c'] }

//You may specify an index as well:
        Qs.p('a[1]=c&a[0]=b')

// { a: ['b', 'c'] }
// Note that the only dif bwn
// an ix in an arr and a key in an ob
// is that val bwn the brackets
// must be num to create an arr


// When creating arrs with spec indices,
// qs will compact a sparse arr
// to only existing vals preserving
// their order:

        Qs.p('a[1]=b&a[15]=c');

// { a: ['b', 'c'] }
// Note that empty str also a val,
// will be preserved:

        Qs.p('a[]=&a[]=b') // { a:['','b'] }
        Qs.p('a[0]=b&a[1]=&a[2]=c')

// { a: ['b', '', 'c'] }
//qs will also lm specifying indices
// in an arr  to a maximum index of 20.
// Any arr  members with  ix of
// greater than 20 will instead be converted
// to an ob with the ix as  key:

        Qs.p('a[100]=b') // { a: { '100': 'b' } }
//This limit can be overridden by passing
// an arrayLimit option:

        Qs.p('a[1]=b', {arrayLimit: 0});
// { a: { '1': 'b' } }

// To disable arr parsing entirely,
// set parseArrs to false.

    Qs.p('a[]=b', {parseArrays: false});

// { a: { '0': 'b' } }
//If you mix notations, qs will merge the two items into an object:

        Qs.p('a[0]=b&a[b]=c') // { a: { '0': 'b', b: 'c' } }
//You can also create arrays of objects:


        Qs.p('a[][b]=c') // { a: [{ b: 'c' }] }

        //Stringifying

        Qs.s(ob, op)

    //When stringifying, qs always URI encodes
        // output.
// Obs stringified as you would expect:

        Qs.s({a: 'b'}) // 'a=b'
        Qs.s({a: {b: 'c'}}) // 'a%5Bb%5D=c'

//Examples beyond this point will be shown
// as though the output is not URI encoded
// for clarity.
// Please note that the return values
// in these cases will be URI encoded during
// real usage.
//    When arrs are stringified,
// by df they are given explicit indices:

    Qs.s({a: ['b', 'c', 'd']}) // 'a[0]=b&a[1]=c&a[2]=d'  //You may override this by setting the indices option to false:
    Qs.s({a: ['b', 'c', 'd']}, {indices: false});
// 'a=b&a=c&a=d'
//You may use the arrayFormat op
// to specify the format of the output array
    Qs.s({a: ['b', 'c']}, {arrayFormat: 'indices'}) // 'a[0]=b&a[1]=c'
    Qs.s({a: ['b', 'c']}, {arrayFormat: 'brackets'}) // 'a[]=b&a[]=c'
    Qs.s({a: ['b', 'c']}, {arrayFormat: 'repeat'}) // 'a=b&a=c'
//Empty strings and null values will omit the value, but the equals sign (=) remains in place:
    Qs.s({a: ''}) // 'a='
//Properties that are set to undefined will be omitted entirely:
    Qs.s({a: null, b: undefined}) // 'a='
//The delimiter may be overridden with stringify as well:
    Qs.s({a: 'b', c: 'd'}, {delimiter: ';'});
// 'a=b;c=d'

    filter=function(){

        //Finally, you can use the filter option
        // to restrict which keys will be included
//in the stringified output.
// If you pass a function, it will be called for each key
//to obtain the replacement value.


    Qs.s({a: 'b', c: 'd', e: {f: new Date(123), g: [2]}},
        {filter:  function(prefix,v){
            if(prefix=='b'){return}
            // Return an `undefined` value to omit a property.
            if(prefix=='e[f]'){return v.getTime()}
            if(prefix=='e[g][0]'){return v*2}
            return v}}) // 'a=b&c=d&e[f]=123&e[g][0]=4'

        // Otherwise, if you pass an array,
//    it will be used to select properties and array indices
// for stringification:
        Qs.s({a: 'b', c: 'd', e: 'f'}, {filter: ['a', 'e']}) // 'a=b&e=f'
    Qs.s({a: ['b', 'c', 'd'], e: 'f'}, {filter: ['a', 0, 2]}) // 'a[0]=b&a[2]=d'

}

nll=function(){
//Handling of null values
//By default,
// null values are treated like empty strings:
        Qs.s({a: null, b: ''}) // 'a=&b='
//Parsing does not distinguish between pams
// with and without equal signs.
// Both are converted to empty strings.
        Qs.p('a&b=') // { a: '', b: '' }
//To distinguish bwn null vals
// and empty strings use the
// strictNullHandling flag
// In the result string the null values
// have no = sign:
    Qs.s({a:null,b:''},{sNH:1})//'a&b='
// To parse vals without = back to null use
// strictNullHandling flag:
    Qs.p('a&b=', {sNH:1}); // { a: null, b: '' }
}