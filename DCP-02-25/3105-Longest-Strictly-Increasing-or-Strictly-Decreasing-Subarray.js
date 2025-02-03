/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
    /**
    Idea:
        -- return the length of the subArr that has a seq whether ir's increasing or decreasing

    Edge Cases:
        -- length 1 return 1, array contains same ele return 1 

    Approach:
        -- initialize var to hold the maxLength, iterate over the array and check if there's a seq that is ele(i) +1 or -1 the ele(i+1), and store the length in a countLength variable, then compare and store into maxLength var.. return maxLength 
    */
    if (nums.length === 1 || new Set(nums).size === 1) return 1

    let maxLength = 1
    let incLen = 1, decLen = 1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            incLen += 1
            decLen = 1
        } else if (nums[i] < nums[i - 1]) {
            decLen += 1
            incLen = 1
        } else {
            incLen = 1
            decLen = 1
        }

        maxLength = Math.max(maxLength, incLen, decLen)
    }

    return maxLength
};