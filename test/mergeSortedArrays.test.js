const mergeSortedArrays = require("../src/mergeSortedArrays")

test('correctly merges ordered arrays', () => {
    let t1 = [1,3,4];
    let t2 = [2,5];
    let tres = mergeSortedArrays(t1,t2);
    let texp = [1,2,3,4,5];
    expect(tres).toEqual([1,2,3,4,5]);
})