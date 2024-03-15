/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let main = 1;
    let endP = 1;
    let output = [];

    for (let i = 0; i < nums.length; i++) {
        output[i] = main;
        main *= nums[i];
    }

    let j = nums.length - 1
    
    for (; j >= 0; j--) {
        output[j] *= endP;
        endP *= nums[j];
    }

    return output;
};