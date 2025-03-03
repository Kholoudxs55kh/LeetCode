/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    let lessCount = 0
    let equalCount = 0
    for (let num of nums) {
        if (num < pivot) lessCount++
        else if (num === pivot) equalCount++
    }

    let temp = nums.slice()

    let left = 0
    let equal = lessCount
    let right = lessCount + equalCount

    for (let num of temp) {
        if (num < pivot) nums[left++] = num
        else if (num === pivot) nums[equal++] = num
        else nums[right++] = num
    }

    return nums
};