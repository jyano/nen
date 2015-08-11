$L=function(a){
    a=a?a+': ':''
    return function(b){$l(a+b)}
}

pc=process

_pc=function(){

    $pc=require('child_process')

    $pc.f=$pc.fork

    $pc.oCl=function(fn){
        this.on('close',fn)
        return this}
    $pc.e=function(cmm,op,fn){var $pc=this,g=G(arguments)


        var pc = $pc.exec(cmm,op,fn)
//runs command in shell, bfrs OP

        pc.oEx=function(fn){this.on('exit',fn);return this}
        return pc
    }

    $pc.n=function(a){return this.s('node',a)}

    $pc.s=function(a,b){var $pc=this,ls
        ls=$pc.spawn(a,b)
        ls.ou=ls.stdout
        ls.er=ls.sterr
        return ls
    }
};_pc()

cs=function() {
    $cs = require('cluster');
    $cs.f = $cs.fork
    $cs.iM = function () {
        return this.isMaster
    }
    $cs.oO = function (fn) {
        this.on('online', fn);
        return this
    }
}
wr=function() {
    //wr worker
    $pid = function (wr) {
        return wr.process.pid
    }
}

//  parallel processes in a single thread program (node)? can!
//  need  pc to run as workr
//  -could be many insts running of this pc simultan
  // can make node (and OTHER) pcs


$l('pc: '+pc.argv[2]+' wrkg')

_.t(10,function(i){var ls


    ls=$pc.e(
        'nWr.js '+i,

  // "nWr.js i"  command execd  where i is pam passed to pc
//passed cb  called at pc terminatn
// and allows to read/process OP from it.


        function(z,ou,er){
        if(z){
            $l(z.stack+'Er code: '+z.code+'Signal receivd: '+z.signal)}
        $l('ou: '+ou+', er: '+er)})


    ls.oEx($L('chpc exitd'))



// ex(ea crd pc) >>  stdout: Process 0 at work stderr:  Child process exited with exit code 0



})

//The spawn method of the child_process module
// launches a new process with a given command,
// it has the following signature:
  $cs.spawn(command, [args], op)





_.t(10,function(i){

    var ls = $pc.n(['wr.js', i])

    ls.ou.on('data', function(d){$l('out: ' +d)})
    ls.er.on('data', function(d){$l('z: '+d)})

    ls.on('close', function(js){$l('chpc exitd: '+js)})


})


//view rawgistfile1.js hosted with ❤ by GitHub
//
//After running the example the following should be printed in console for each process created.
//
//    stdout: Process 0 at work
//
//child process exited with code 0
//
//Exec() and spawn() both create processes, but they differ in what they return, spawn returns streams (stdout & stderr), while exec returns a buffer with a max size. Spawn() should be used when the process returns large amount of data.
//
//    Another difference is that spawn() starts receiving the response as soon as the process starts executing, and exec() otherwise waits for the process to end and tries to return all the buffered data at once
//
//The fork method is a special case of the spawn() functionality, it only creates Node processes. Its signature is the following:
//
//
//    child_process.fork(modulePath, [args], [options])
//
//


_.t(10, function(i){
    $pc.f("worker.js",[i]).oCl(function(code){
        $l('ch pc extd: '+code)})})




//view rawgistfile1.txt hosted with ❤ by GitHub
//After running the example the following should be printed in console for each process created.
//
//    Process 0 at work
//child process exited with code 0
//
//Node.js also has the cluster module and also allows to create processes, the definition of the cluster module says: "A single instance of Node runs in a single thread. To take advantage of multi-core systems the user will sometimes want to launch a cluster of Node processes to handle the load".
//




if($cs.iM()){$l('Mastr Frkg!!!!');_.t(5,function(){$cs.f()})}
else {$l('Ch  pc rung!!!')}

$cs.oO(function(wr) {

    $l('wr: '+$pid(wr)+' onln')

})



//From the example you can
// notice that the $cs module is imported,
// once imported you can call fork() method
// to create a new child process,
// after calling fork() the same process
// will run but as a child,
// to distinguish if the process is running as a
// Master or child the
// $cs has the isMaster() and isWorker() methods.


// ex >> Master Forking!!!! Worker 4984 is online. .... Child process running!!!....

//            node can take advantage of mult processors
//
