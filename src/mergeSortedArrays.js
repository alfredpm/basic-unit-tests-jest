function mergeSortedArrays(t1,t2){
    //Check parameters are ordered arrays
    if (!Array.isArray(t1)){
        throw 't1 is not an array'
    }
    if (!Array.isArray(t2)){
        throw 't1 is not an array'
    }
    if (!isOrdered(t1)){
        throw 't1 is not ordered'
    }
    if (!isOrdered(t2)){
        throw 't2 is not ordered'
    }

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

function isOrdered(table){
    let array = table.slice();
    while (array.length>0){
        let curr=array.shift();
        if (curr>array[0]){
            return false;
        }
    }
    return true;
}
module.exports = mergeSortedArrays