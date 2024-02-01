/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    nums.sort((a, b) => a - b);
    let output = [];
    for (let i = 2; i < nums.length; i += 3) {
        if (nums[i] - nums[i - 2] > k) return [];
        output.push([nums[i - 2], nums[i - 1], nums[i]]);
    }
    return output;
};
