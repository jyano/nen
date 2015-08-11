$nK=function(op){
    var k = new $n.Socket(sK(op))

    k.w= w.write //(d[enc][fn])

    k._cn= k.connect

    k.cn= function(){
        var g=G(arguments),cn
        if(g.N_){
            //k.cn(port[host][connectListener])
            cn= this._cn(g.f, g.s, g.t)

        }

        else { cn= this._cn(g.f, g.s) } //    (path, [connectListener])


        return cn
    } //k.c?


    k.E= k.end //([d][enc])

    k.ds= k.destroy//() //k.d?

    k.ps= k.pause
    k.rs = k.resume

    //k.bytesRead
//k.bytesWritten
//k.ref()//k.unref()
//k.bufferSize
//k.setEncoding([encoding])
//k.setTimeout(timeout[, fn])
//k.setNoDelay([noDelay])
//k.setKeepAlive([enable][, initialDelay])
//k.address()
//k.localAddress//k.remoteAddress
//k.localPort//k.remotePort
//k.remoteFamily
    return k


    function sK(op){op=op||{}
       return op
   }
}



//Evs:
// shared: connect  data  close   end   error
// new: lookup  drain timeout

    