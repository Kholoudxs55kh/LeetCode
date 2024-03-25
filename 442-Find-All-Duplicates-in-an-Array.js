/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const map = new Map()
    let arr = []
    for (let i = 0; i < nums.length; i++){
        if (map.has(nums[i])) {
            const num = map.get(nums[i])
            if (num === 1) arr.push(nums[i])
            map.set(nums[i], num)
        } else map.set(nums[i], 1)
    }
    return arr
};