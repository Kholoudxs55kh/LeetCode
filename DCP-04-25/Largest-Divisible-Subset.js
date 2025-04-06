/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
    /**
    Idea --> 
        larget list that every pair dividable by the other one

    Edge Cases --> 
        if set contain one number return the same set

    Solution -->
        initiate maxlen = 0
        outlloop hold first number
            second loop --> loop and calc the reminder with the first number appedn reminders eq = 0
            append pair that achieves the statement to list
            update maxlen with list and return answer maxlen
     */

    nums.sort((a, b) => a - b)
    let lengths = new Array(nums.length).fill(1)
    let parents = new Array(nums.length).fill(-1)
    let res = []
    let maxIndex = 0

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && lengths[i] < lengths[j] + 1) {
                lengths[i] = lengths[j] + 1
                parents[i] = j
            }
        }
        if (lengths[i] > lengths[maxIndex]) maxIndex = i

    }

    for (let i = maxIndex; i !== -1; i = parents[i]) res.push(nums[i])

    return res
};