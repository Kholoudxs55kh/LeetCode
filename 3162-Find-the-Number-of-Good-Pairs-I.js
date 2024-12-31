/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
    let counter = 0

    for (let i of nums1) {
        for (let j of nums2) {
            if (i % (j * k) === 0) counter++
        }
    }

    return counter
};