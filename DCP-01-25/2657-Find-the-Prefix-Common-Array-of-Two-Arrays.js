/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    /**
    Idea:
        --  return an array holding in every index the count of common numbers present in the index in both arrays ot before that index

    Edge Cases:
            -- N/A

    Approach: 
        A = [1,3,2,4], B = [3,1,2,4]

        hash {"0": 0, "1":2 }
        then loop over the 2arrs and check the vals of both if they have a val of 2
        check the past eles of the index too

     */

    let res = [];
    let count = 0;
    let mapC = new Map();

    for (let i = 0; i < A.length; i++) {
        if (mapC.has(A[i])) {
            mapC.set(A[i], mapC.get(A[i]) + 1);
            if (mapC.get(A[i]) === 2) {
                count++;
            }
        } else {
            mapC.set(A[i], 1);
        }

        if (mapC.has(B[i])) {
            mapC.set(B[i], mapC.get(B[i]) + 1);
            if (mapC.get(B[i]) === 2) {
                count++;
            }
        } else {
            mapC.set(B[i], 1);
        }

        res.push(count);
    }

    return res;
};