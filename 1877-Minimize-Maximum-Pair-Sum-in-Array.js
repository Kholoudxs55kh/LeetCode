/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
    /**
    Idea:
        -- To get the max between each min and max in the array

    Edge Cases:
        -- N/A

    Approach:
        -- Sort the array
            sum every first and last then remove them
            get the max sum between them
     */

    nums.sort((a, b) => a - b)
    let max = 0
    for (let i = 0, j = nums.length - 1; i < nums.length, j >= 0; i++, j--) {
       max = Math.max(max, nums[i] + nums[j])
    }

    return max
};