/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let res = []

    for (let i = 0, j = n ; i < n, j < nums.length; i++, j++ ) {
        res.push(nums[i])
        res.push(nums[j])
    }

    return res
};

// Runtime 58ms Beats 71.60%
