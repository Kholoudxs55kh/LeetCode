/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort();

    let missingNum = nums.filter((num, index) => return num !== index );

    if (missingNum.length > 0) return missingNum[0] - 1;

    return nums.length;
};

// working <===

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    nums = nums.map(num => Number(num)).sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) return nums[i] - 1
    }

    return nums.length
};
