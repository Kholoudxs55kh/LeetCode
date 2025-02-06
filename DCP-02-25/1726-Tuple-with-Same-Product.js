/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    let map = new Map()
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let product = nums[i] * nums[j]
            map.set(product, (map.get(product) || 0) + 1)
        }
    }

    for (let val of map.values()) {
        if (val > 1)  count += (val * (val - 1)) / 2 * 8
    }
    return count
};