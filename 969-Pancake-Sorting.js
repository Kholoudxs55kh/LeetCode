/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {

    // return [2,6,5,2,3]
    /**
    Idea:
        -- implement pancake algorithm 

    Edge Cases:
        -- if the arr is sorted return [] or [len, len]

    Approach:
        -- to get the max ot min and start operating from it.

        [2,6,3,1,4,5]

        k = 2 [6,2,3,1,4,5]
        k = 6 [5,4,1,3,2,6]
        k = 5 [2,3,1,4,5,6]
        k = 2 [3,2,1,4,5,6]
        k = 3 [1,2,3,4,5,6]
---------
        k = 4 [1,3,6,2,4,5]
        k = 6 [5,4,2,6,3,1]
        k = 3 [2,4,5,6,3,1]
        k = 5 [3,6,5,4,2,1]
        k = 4 [4,5,6,3,2,1]
        k = 3 [6,5,4,3,2,1]
        k = 6 [1,2,3,4,5,6]
    */

    let res = [];

    for (let i = arr.length; i > 0; i--) {
        const max = arr.indexOf(i)

        if (max === i - 1) continue

        if (max > 0) {
            res.push(max + 1)
            let left = 0, right = max
            while (left < right) {
                [arr[left], arr[right]] = [arr[right], arr[left]]
                left++
                right--
            }
        }

        res.push(i)
        let left = 0, right = i - 1
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
    }

    return res

};