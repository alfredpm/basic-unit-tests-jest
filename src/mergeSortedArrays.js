function mergeSortedArrays(orderedArray1, orderedArray2){
    //Copy content of parameters in new arrays (arrays pass by reference)
    let t1=orderedArray1.slice();
    let t2=orderedArray2.slice();

    //Check parameters are ordered arrays
    if (!Array.isArray(t1)){
        throw new Error('t1 is not an array')
    }
    if (!Array.isArray(t2)){
        throw new Error('t2 is not an array')
    }
    if (!isOrdered(t1)){
        throw new Error('t1 is not ordered')
    }
    if (!isOrdered(t2)){
        throw new Error('t2 is not ordered')
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