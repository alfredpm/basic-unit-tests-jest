function mergeSortedArrays(t1,t2){
    let tres=[];
    while (t1.length+t2.length>0){
        //if t1 empty, add t2
        if (t1.length==0) {
            tres.push(t2.shift());
        } else if (t2.length==0){
            tres.push(t1.shift());
        } else {
            if (t2[0]<t1[0]){
                tres.push(t2.shift());
            } else {
                tres.push(t1.shift())
            }
        }
    }
    return tres;
}

module.exports = mergeSortedArrays