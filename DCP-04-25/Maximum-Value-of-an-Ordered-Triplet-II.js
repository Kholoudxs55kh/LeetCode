/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
    if (nums.length < 3) return 0

    let prefMax = new Array(nums.length).fill(0);
    let suffMax = new Array(nums.length).fill(0);
    let max = -Infinity;


    prefMax[0] = nums[0]
    suffMax[nums.length - 1] = nums[nums.length - 1]

    for (let i = 1; i < nums.length; i++) prefMax[i] = Math.max(prefMax[i - 1], nums[i])

    for (let i = nums.length - 2; i >= 0; i--) suffMax[i] = Math.max(suffMax[i + 1], nums[i])

    for (let j = 1; j < nums.length - 1; j++) {
        let curr = (prefMax[j - 1] - nums[j]) * suffMax[j + 1]
        max = Math.max(max, curr)
    }

    return Math.max(max, 0)
};