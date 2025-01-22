/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    /**
    Idea:
        -- Return an array with common numbers between the 2 arrays

    Edge Cases:
        -- N/A

    Approach:
        -- get the freq of the both arrays.
        -- check the same keys, take the min val
        -- return the [key * minVal] for every key 


        nums1 = [4,9,5], nums2 = [9,4,9,8,4]
                [4,4,5,9]             [4,4,8,9,9]
    */

    let freq1 = new Map()
    let freq2 = new Map()

    for (let num of nums1) freq1.set(num, freq1.get(num) + 1 || 1)

    for (let num of nums2) freq2.set(num, freq2.get(num) + 1 || 1)

    let res = []

    for (let key of freq1.keys()) {
        if (freq2.has(key)) {
            let minFreq = Math.min(freq1.get(key), freq2.get(key));
            for (let i = 0; i < minFreq; i++) res.push(key)
        }
    }

    return res
};