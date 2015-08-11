// update op!!  (u,fAndModify


//Fields
//$inc:val+= ?
//$mul:val*= ?
//$set:	set fd val
//$rename  (fd)
//$unset: rm dc fd
//$setOnInsert:  if up res in insert op, set fd   (Has no effect on up  ops that modify existing docs)
//(sets a field only if it is NOT an update, but an actual new insertion (INSERT!))
//$min/max:	up fd IF val </> existing fd val
//$currentDate:	fd = curDate (Date|Timestamp)

//Array
//$::	Acts as ph to up 1st el  matg qu cond in up
//$addToSet::	add nondup els (to arr (if !in set))
//$pop::	rm _f/_l(arr)
//$pullAll::	Rm  matg vals from arr
//$pull::	rm els matg a qu (from arr)
//$push:: add el to arr

//Modifiers (opers) mfr
        //$each: $push/$addToSet:: oArrUp: app mult items
        //$slice:  Mods $push opr to lm sz upd arrs
        //$sort:  Mods $push opr to reorder dcs stored in an arr
        //$position:  Mods $push opr to where in arr to add els?
        //$bit:	 bitwise AND/OR/XOR intVal up
        //$isolated:  increases  isolation of  write oper