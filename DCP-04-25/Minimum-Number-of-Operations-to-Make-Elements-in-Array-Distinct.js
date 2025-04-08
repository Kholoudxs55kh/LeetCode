/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    /**
    Idea:
        - we need to have an array that has all unique values by repeating an operation that delete the first 3 items.

    Edge Cases:
        - make sure the list doesn't contain unique elements

    Approach:
        - brute force approach 
    1 - iterate over array every 3 steps till reaching for unique elements by iterating over the remaining part

    *** another sol
    iterate backward over array and check if the element we are over is distinct then if we found the element is not unique then will use its index to get the needed steps to do the operation 
    */

    if (new Set(nums).size === nums.length) return 0

    const set = new Set()

    for (let i = nums.length - 1; i >= 0; i--) {
        if (set.has(nums[i])) return Math.ceil((i + 1) / 3)

        set.add(nums[i])
    }

    return 0
};