/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function (nums) {
    /**
    Idea:
        [9,2,5,4]

        index j = 0

        i = 1 count = 1
        i = 2
        i = 3  count = 2

        j = 2
        
        i = 1  count = 3

        j = 3
        i = 1  count = 4

    Edge Cases:
        N/A

    Approach:
        sort the array then use binary search
        initialize a counter to count all possible pairs
    */

    nums.sort((a, b) => a - b)

    let count = 0
    let left = 0
    let right = Math.floor(nums.length / 2)

    while (left < Math.floor(nums.length / 2) && right < nums.length) {
        if (2 * nums[left] <= nums[right]) {
            count += 2
            left++
            right++
        }
        else right++
    }

    return count
};