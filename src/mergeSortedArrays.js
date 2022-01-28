function mergeSortedArrays(t1,t2){
    let i=0;
    let id1=0;
    let id2=0;
    let tres=[];
    while (i<(t1.length+t2.length)){
        //if t1 or t2 entirely treated, add other
        if (id1>=t1.length){
            tres.push(t2[id2])
            id2+=1;
        } else if (id2>=t2.length) {
            tres.push(t1[id1])
            id1+=1;
        } else {
        //if value t2 < value t1 add value t2 at the end, else add value t1
            if (t2[id2]<t1[id1]){
                tres.push(t2[id2]);
                id2+=1;
            } else {
                tres.push(t1[id1]);
                id1+=1;
            }
        }
        i+=1;
    }
    return tres;
}

module.exports = mergeSortedArrays