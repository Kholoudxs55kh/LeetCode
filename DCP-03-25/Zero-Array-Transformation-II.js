/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function (nums, queries) {
    let curr = new Array(nums.length)
    let left = 0
    let right = queries.length - 1
    let mid, i, min = -1, sum = 0

    for (const num of nums) sum += num
    if (sum === 0) return 0

    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        curr.fill(0)

        for (let j = 0; j <= mid; ++j) {
            curr[queries[j][0]] -= queries[j][2]
            curr[queries[j][1] + 1] += queries[j][2]
        }
        
        let diff = 0
        for (i = 0; i < nums.length; ++i) {
            diff -= curr[i]
            if (nums[i] > diff) break
        }

        if (i === nums.length) {
            min = mid + 1
            right = mid - 1
        }
        else left = mid + 1

    }

    return min
};