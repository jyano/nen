pc.eP=function(){
   return this.execPath()
    // abs ptN exb that started pc    /usr/local/bin/node
}
pc.cwd=function(){
    //  cur  working dir  of the pc.
    return this.cwd()
}
pc.eC=function(){
        //get/set?
    return this.exitCode
    //   pc exit code num
// when the pc  exs gracefully,
//  or  via pc.ex() w/o specg a code.
//    Specg  code to pc.ex(code)
// -overrides   prev   pc.exitCode settings.

}
pc.ggid=function(){
    //    Gets pc (num) grp id ;
// if(pc.ggid){$l('Current gid: '+pc.ggid());
}
pc.chdir=function(dir){
    //Changes the current working directory of the pc or throws an exception if that fails.
    $l('Starting directory: ' + pc.cwd());
    try {pc.chdir('/tmp');$l('New directory: ' + pc.cwd())}
    catch (z) {$l('chdir:'+z)}

}
pc.G=function(){

    return this.argv()
// arr of command line arguments.
// 1:   'node'
// 2:  js file name
// 3,4..:  any additional command line args
//// print pc.argv
//pc.argv.forEach(function(v,ix,arr){$l(ix+':'+v)})
// gens:  $ nd pc-2.js one two=three four
//    0: nd  1: /Ur/mjr/work/nd/pc-2.js  2:one 3:two=three 4:four

}
pc.en=function(){

    pc.env={//# //ob w  ur environm
        TERM: 'xterm-256color',
        SHELL: '/usr/local/bin/bash',
        USER: 'maciej',
        PATH: '~/.bin/:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin',
        PWD: '/Users/maciej', EDITOR: 'vim',
        SHLVL: '1', HOME: '/Users/maciej',
        LOGNAME: 'maciej',
        _: '/usr/local/bin/node'}

//     can write to  ob , but changes !reflected outside   pc.
// won't work: node -e 'pc.env.foo = "bar"' && echo $foo   But this will:

    pc.env.foo = 'bar'; $l(pc.env.foo); pc.ex(js)

//Ends the pc w  spec code (z= suc code 0 )

    pc.ex(1); //exit w  'failure' code: //
//  The shell that executed node
// should see the exit code as 1.


}
pc.eA=function(){
    return this.execArgv()


    //: set of node-specific
// command line options from the executable
// that started the pc.

// These options do not show up in pc.argv,
// and do not include the node executable,
// the name of the script,
// or any options following the script name.

// These options are useful in order to spawn child
// pces with the same execution
// environment as the parent.

//    $ node --harmony script.js --version      results in pc.execArgv:    ['--harmony']    and pc.argv:
//    ['/usr/local/bin/node', 'script.js', '--version']
//    pc.abort()#  //This causes node to emit an abort.   // This will cause node to exit and generate a core file.

}