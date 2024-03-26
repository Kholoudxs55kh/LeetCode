/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums.sort((a, b) => a - b);
    let pNum = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == pNum) pNum++;
    }
    return pNum;
};