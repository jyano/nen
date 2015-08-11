

// sig 0 can be used to test pc exists

pc.oHUP(function(){
    $l('Got HUP sig')
})//send  yourself  sig

_.sT(function(){
    $l('Exg');pc.ex(0)},100)
pc.kHUP(pc.pid)
//Nd receives SIGUSR1 -> it starts  debugger



//exit codes:
//Nd  df ExstsCd:    0  (when no async opers  pending)
// 1 UcFatalEx-  ucEx, and unhandled by domain or  unEx ev hlr
//3 Intl JsParseZ  -  Js srcCd   internl in Nd's BSing pc caused  parse  z. can only happen during dev  of Nd itself.
//4 Intl Js Eval Fail   -  Js srcCd internl in Nd's BSg pc failed to ret  fn val  when evald. rare,
//5 FatalZ: fatal unrecoverable v8 z
//6 Non-fn Intl ExHlr   -  ucEx,  but intl fatal exHlr set to non-fn, could not be called.
//7 IntlExHl RT Fail- ucEx, intl ftlExHlr // fn (itself) thrwZ whl hlg it (  pc.on('ucEx') or domain.oZ  hlr throws z)
//9 - Inval  Arg  -  unknown op   or  op requiring  val    provided w/o val .
//10 Intl Js Run-Time Fail   -   Js srcCd internal in Node's BSing fn pc threw z; rare,  (only   during  dev  of Node!)
//12 Inval  Debug Arg  -debug and/or --debug-brk ops  set, but port num   invalid
//  > 128 Sig  Exs - nd  receives fatalSig(KILL,HUP)? -> exCd will   be 128 plus  sicCd val (bc exCds defined to be 7-bit ints, sig  exits set  high-order bit, contain  igCd val)

