const mergeSortedArrays = require("../src/mergeSortedArrays")

test('correctly merges ordered arrays', () => {
    let t1 = [1,3,4];
    let t2 = [2,5];
    expect(mergeSortedArrays(t1,t2)).toEqual([1,2,3,4,5]);
})