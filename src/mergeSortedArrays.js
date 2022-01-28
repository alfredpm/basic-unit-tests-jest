function mergeSortedArrays(t1,t2){
    let i=0;
    let id1=0;
    let id2=0;
    let tres=[];
    while (i<(t1.length+t2.length)){
        if (t1[id1]<t2[id2]){
            tres.push(t1[id1]);
            id1+=1;
        } else {
            tres.push(t2[id2]);
            id2+=1;
        }
        i=+1;
    }
    return tres;
}

module.exports = mergeSortedArrays