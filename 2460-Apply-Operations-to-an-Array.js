/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) { 
        if (nums[i] == nums[i + 1]) {
            nums[i] = nums[i] * 2
            nums[i + 1] = 0
        }
    }
    let res = [];
    for (let num of nums) {
        if (num !== 0) {
            res.push(num);
        }
    }
    
    while (res.length < nums.length) {
        res.push(0);
    }

    return res;
};