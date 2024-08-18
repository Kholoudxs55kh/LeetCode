/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // nums[0]
    if (nums.length < 2) return 0

    let count = 0
    let spotJumpedTo = 0
    let maxSpotYouCanJump = 0

    for (let i = 0; i < nums.length; i++) {
        maxSpotYouCanJump = Math.max(maxSpotYouCanJump, i + nums[i]) // compare between where iam and the value i have (the value is my index + its value)

        if (i === spotJumpedTo) {
            count++
            spotJumpedTo = maxSpotYouCanJump

            if (spotJumpedTo >= nums.length -1 ) break 
        }
    }

    return count
};