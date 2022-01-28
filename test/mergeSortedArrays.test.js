const mergeSortedArrays = require("../src/mergeSortedArrays")

test('correctly merges ordered arrays', () => {
    let t1 = [1,3,4];
    let t2 = [2,5];
    let res;
    try {
        res=mergeSortedArrays(t1,t2);
    } catch (e) {
        res=e;
    }
    expect(res).toEqual([1,2,3,4,5]);
})

test('handles empty array as param', () => {
    let t1 = [1,3,4];
    let t2 = [];
    let res;
    try {
        res=mergeSortedArrays(t1,t2);
    } catch (e) {
        res=e;
    }
    expect(res).toEqual(t1);
})

test('error if not ordered', () => {
    let t1 = [1,2];
    let t2 = [4,3];
    const T = () => mergeSortedArrays(t1,t2);
    expect(T).toThrow(new Error('t2 is not ordered'));
})

test('error if not array', () => {
    let t1 = "alfred";
    let t2 = [3,4];
    const T = () => mergeSortedArrays(t1,t2);
    expect(T).toThrow(new Error('t1 is not an array'));
})
