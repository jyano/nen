//  use vm for making a scriptable (scripting a)  (write independent JS scripts for)
 // Node.js apps and execute them on the fly (eval and vm both run js, but eval exceutes globally,vm locally (own ctx))
 //   vm exes in own ctx,   
 // cant access node obs (require, module, global..) (safer)
 //  vm execs  code in   sandboxed ctx 
 ////   ob  will be passed to the vm ctx,
// the keys will become available as global variables in the ctx
//// create a script out of the loaded string
// - the script is compiled//
//// exec  the script in the ctx of `sandbox`,
// which becomes its global object
//Exec   app and see the script in action://$ node app
//Captain Sparrow has 3 pets: Kiddo - the cat,
// Kaka - the crow, Evul - the monkey.

//     pass in   sandbox ob  to script.runInNewContext() (becomes the global object for the script)
// prop sandbox:( send in obs from  parent app ) (sandbox prop names converted to live obs  in   vm ctx) 
// prop r: where   scrip writes   ret val  to 


lib=function(){
$vm=require('vm')
$vm.S=$vm.cS= function(s,r){

    var s = $vm.createScript(s)
    s.r = function(x){this.runInNewContext(x); return this}
    if(r){s.r(r)}
    return s
}
$Vm=function(script,sandbox){
    var scr = $vm.S($f.rFS(script))
      return scr.r(sandbox)}


}
pets= [ {n:'A',k:'cat'}, {n:'K',k:'crow'}, {n:'E',k:'monkey'} ]
$Vm('./scr.js', {name: 'A', pets: pets,result: false})
function listPets(name, pets){
    var result = 'Capt ' +name+' has '+ _.sz(pets)+' pet'+
        (_.sz(pets)?'s':'') //pluarizes!
        + ': '
    _.e(pets, function(p){
        result += p.n + ' the ' + p.k + ', '
    })
    return result.replace( /,$/ , '.' )
}


