/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function (nums, k) {
    let freq = new Map(), left = 0, pairCount = 0, res = 0

    for (let right = 0; right < nums.length; right++) {
        let val = nums[right]
        let count = freq.get(val) || 0
        pairCount += count
        freq.set(val, count + 1)


        while (pairCount >= k) {
            res += nums.length - right

            let leftVal = nums[left]
            freq.set(leftVal, freq.get(leftVal) - 1)
            pairCount -= freq.get(leftVal)
            left++
        }
    }

    return res
};