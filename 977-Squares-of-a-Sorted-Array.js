/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const arr = []

    for (let i = 0 ; i < nums.length; i++) {
        arr.push(nums[i]**2)
    }

    return arr.sort((a, b) => a - b);

};