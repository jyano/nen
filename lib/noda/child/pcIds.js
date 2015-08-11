
pc.gi=function(id){//  accs either numID|groupnameStr
    if(U(id)){return this.getgid()}
    this.setgid(id)
    return this
}




//    pc.getuid()#
//   numerical userid, not the username.


//    pc.setuid(id)#

//   pc's user identity; accs numID or  un str


if (pc.getuid && pc.setuid) {
    $l('Current uid: ' + pc.getuid());
    try {
        pc.setuid(501);
        $l('New uid: ' + pc.getuid());
    }
    catch (err) {
        $l('Failed to set uid: ' + err);
    }
}
//    pc.getgroups()#
//Note: this function is only available on POSIX platforms (i.e. not Windows, Android)
//
//    Returns an array with the supplementary group IDs. POSIX leaves it unspecified if the effective group ID is included but node.js ensures it always is.

pc.setgroups//(groups)#
// -is only available on POSIX platforms (i.e. not Windows, Android)
//
//    Sets the supplementary group IDs.
// This is a privileged operation,
// meaning you need to be root
// or have the CAP_SETGID capability.
//
//        The list can contain group IDs, group names or both.
//



pc.initgrps//(user, extra_group)#
//  only avail  on POSIX pfs  ( ! Windows, Android)
//    Reads /etc/grp, inits the grp acc ls,
// using all grps of which ur is memb.
// -privileged oper (must be root or be CAP_SETGID capable).
//        user is a urN|urID.   extra_group is a grpN|group ID.     -care when dropping privileges.

$l(pc.ggrps());// [ 0 ]
pc.initgrps('bnoordhuis', 1000);   // switch user
$l(pc.ggrps());         // [ 27, 30, 46, 1000, 0 ]
pc.sgid(1000);                     // drop root gid
$l(pc.ggrps());
// [ 27, 30, 46, 1000 ]

}

pc.pid //The PID of the pc.