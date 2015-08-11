$sDg=function(k){
    k.s = function(){

        k.send // (bf, offset, len, port, addr, [fn])



//    socket.send(buf, offset, length, port, address[, fn])#

//buf Buffer object or string. Message to be sent

//offset Integer. Offset in the buffer where the message starts.

//    length Integer. Number of bytes in the message.

//    port Integer. Destination port.
//
//
// address String. Destination hostname or IP address.
//    fn Function. Called when the message has been sent. Optional.
//    For UDP sockets, the destination port and address must be specified.

// A string may be supplied for the address parameter, and it will be resolved with DNS.
//
//    If the address is omitted or is an empty string, '0.0.0.0' or '::0'
// is used instead. Depending on the network configuration, those defaults
// may or may not work; it's best to be explicit about the destination address.
//
//If the socket has not been previously bound with a call to bind,
// it gets assigned a random port number and is bound to
// the "all interfaces" address ('0.0.0.0' for udp4 sockets, '::0' for udp6 sockets.)
//
//An optional fn may be specified to detect DNS errors or for
// determining when it's safe to reuse the buf object.
// Note that DNS lookups delay the time to send for at least one tick.
//
// The only way to know for sure   datagram   sent is by using a fn.
//
//With consideration for multi-byte characters,
// offset and length will be calculated with respect to byte length
// and not the character position.
//
//    Example of sending a UDP packet to a random port on localhost;


        ms = $Bf("Some bytes")
        cl = $dg.K("udp4")
        cl.s(ms,0,_.sz(ms),41234,"localhost",function(z){cl.cl()})

    }


    k.b   =function(){//(options[, fn])#
        $bOp=function(o){

            o.port = o.p //    port Number - Required.
            o.address  = o.a
            o.exclusive = o.e //=F
            o.callback = o.fn


//    The port and address properties of options,
// as well as the optional fn function,
// behave as they do on a
// call to socket.bind(port, [address], [fn]) .
//



//    If exclusive is false (default),
// then cluster workers
// will use the same underlying handle,
// allowing connection handling duties to be shared.
// When exclusive is true,
// the handle is not shared,
// and attempted port sharing results in an error.
// An example which listens
// on an exclusive port is shown below.

//k.b({ a: 'localhost', p: 8000, e: 1})

        }

        return this.bind()


//socket.bind(port[, address][, fn])#
//port Integer
//address String, Optional
//fn Function with no parameters, Optional. Callback when binding is done.
//    For UDP sockets, listen for datagrams on a named port
// and optional address. If address is not specified,
// the OS will try to listen on all addresses.
//
// After binding is done, a "listening" event is emitted
// and the fn(if specified) is called.
//
// Specifying both a "listening" event listener and fn is not harmful
// but not very useful.
//
//    A bound datagram socket keeps the node process running to receive
// datagrams.
//
//    If binding fails, an "error" event is generated.
// In rare case (e.g. binding a closed socket),
// an Error may be thrown by this method.
//
//    Example of a UDP server listening on port 41234:
//



        sv = $dg.K("udp4").o({
            z: function(z){$l("sv z:\n" + z.stack);sv.close()},
            m: function (m,rinfo){$l("sv got: "+m+" from "+ rinfo.a+":"+rinfo.p)},

            l: function(){var ad  = sv.ad();   $l("sv lsng " + ad.a  + ":" + ad.p)}
        }).b(41234);// server listening 0.0.0.0:41234








//  v0.10:  bind now ALWAYS  asynch
        s.b(1234, function() {
            s.addMembership('224.0.0.114');
        })
    }

    //(port, [addr] [fn])  or (op, [fn])  //  send daGrams  to  "all interfaces"  addr  (on random port)
    k.cl= k.close

    k.ad = function(){
        var ad= this.address()
        ad.a = ad.address
        ad.p = ad.port

    }
    //socket.setBroadcast(flag)
//socket.setTTL(ttl)
//socket.setMulticastTTL(ttl)
//socket.setMulticastLoopback(flag)
//socket.addMembership(multicastAddress[, multicastInterface])
//socket.dropMembership(multicastAddress[, multicastInterface])
//socket.unref()
//socket.ref()


    k.close//()#
//Close the underlying socket and stop listening for data on it.
//
//    socket.address()#
//Returns an object containing the address information for a socket. For UDP sockets, this object will contain address , family and port.
//
    k.setBroadcast//(flag)#
//flag Boolean
//Sets or clears the SO_BROADCAST socket option. When this option is set, UDP packets may be sent to a local interface's broadcast address.
//
    k.setTTL//(ttl)#
//ttl Integer
//Sets the IP_TTL socket option. TTL stands for "Time to Live," but in this context it specifies the number of IP hops that a packet is allowed to go through. Each router or gateway that forwards a packet decrements the TTL. If the TTL is decremented to 0 by a router, it will not be forwarded. Changing TTL values is typically done for network probes or when multicasting.
//
//    The argument to setTTL() is a number of hops between 1 and 255. The default on most systems is 64.
//
    k.setMulticastTTL//(ttl)#
//ttl Integer
//Sets the IP_MULTICAST_TTL socket option. TTL stands for "Time to Live," but in this context it specifies the number of IP hops that a packet is allowed to go through, specifically for multicast traffic. Each router or gateway that forwards a packet decrements the TTL. If the TTL is decremented to 0 by a router, it will not be forwarded.
//
//    The argument to setMulticastTTL() is a number of hops between 0 and 255. The default on most systems is 1.
//
    k.setMulticastLoopback//(flag)#
//flag Boolean
//Sets or clears the IP_MULTICAST_LOOP socket option. When this option is set, multicast packets will also be received on the local interface.
//
    k.addMembership//(multicastAddress[, multicastInterface])#
//multicastAddress String
//multicastInterface String, Optional
//Tells the kernel to join a multicast group with IP_ADD_MEMBERSHIP socket option.
//
//    If multicastInterface is not specified,
// the OS will try to add membership to all valid interfaces.
//
    k.dropMembership//(multicastAddress[, multicastInterface])#
//multicastAddress String
//multicastInterface String, Optional
//Opposite of addMembership - tells the kernel to leave a multicast group with IP_DROP_MEMBERSHIP socket option. This is automatically called by the kernel when the socket is closed or process terminates, so most apps will never need to call this.
//
//    If multicastInterface is not specified, the OS will try to drop membership to all valid interfaces.
//
    k.unref//()#
//Calling unref on a socket will allow the program to exit if this is the only active socket in the event system. If the socket is already unrefd calling unref again will have no effect.
    k.ref//()#
//Opposite of unref, calling ref on a previously
// unrefd socket will not let the program exit if it's the
// only socket left (the default behavior). If the socket is refd calling ref again will have no effect.
    return k
}
$Dg=function(op){
    op=op||{}
    //cr udp4 or udp6 datagram k

    if(D(op.t)){op.type=op.t}// udp4 or udp6
    if(D(op.r)){op.reuseAddr=op.t}//=F    k.b will reuse   addr (even if another pc  already bound a k on it)!!!
    var dg= $dg.K(op)
    return $sDg(dg)
}
$dg= require('dgram')
$dg.K= function(opOrTy,fn){//>> kOb


//type: $S 'udp4 'udp6'

  //fn :  msEvLsr
    //Class: dgram.Socket#
//The dgram Socket class encapsulates the datagram functionality.
// It should be created via dgram.createSocket(...)
//Event: 'message'#
//msg Buffer object. The message
//rinfo Object. Remote address information
//Emitted when a new datagram is available on a socket.
// msg is a Buffer and rinfo is an ob
// with the sender's address information:


//Event: 'listening  'close'#  'error'#
    var k = $dg.createSocket(opOrTy,fn)
    $sK(k)
    return k
}
k.oM( function(m,rinfo){ $l('Received %d bytes from %s:%d\n', m.length, rinfo.a, rinfo.p)})
size=function(){
    //A Note about UDP datagram size
//
//The maximum size of an IPv4/v6 datagram
// depends on the MTU (Maximum Transmission Unit)
// and on the Payload Length field size.
//
//    The Payload Length field is 16 bits wide,
// which means that a normal payload
// cannot be larger than 64K octets
// including internet header and data
// (65,507 bytes = 65,535 − 8 bytes UDP header − 20 bytes IP header);
//
// this is generally true for loopback interfaces,
// but such long datagrams are impractical for most hosts and networks.
//
//    The MTU is the largest size a given link layer technology
// can support for datagrams.
// For any link,
// IPv4 mandates a minimum MTU of 68 octets,
// while the recommended MTU for IPv4 is 576
// (typically recommended as the MTU for dial-up type applications),
// whether they arrive whole or in fragments.
//
//    For IPv6, the minimum MTU is 1280 octets, however,
// the mandatory minimum fragment reassembly buffer size is 1500 octets.
// The value of 68 octets is very small,
// since most current link layer technologies
// have a minimum MTU of 1500 (like Ethernet).
//
//Note that it's impossible to know in advance
// the MTU of each link through which a packet might travel,
// and that generally sending a datagram greater than the
// (receiver) MTU won't work (the packet gets silently dropped,
// without informing the source that the data did not reach
// its intended recipient).

}


