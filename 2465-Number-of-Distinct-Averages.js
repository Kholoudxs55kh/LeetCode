/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    /**
    idea: 
         1. get the avg between (max/min) numbers
         2. remove them
         3. iterate to find next (max/min) return 1
         4. when array length equal zero, return the distinct averages, 

    edge cases: 
         return 1 when array length equal 2
         return 1 when all elements in the array are equal

    approach: 
         1. sort the array
         2. iterate on the array
         3. find the avg of (start/last) item, and save it in set
         4. repeat 3 until reaching the middle
         5. return set length
    */

    if (nums.length === 2) return 1

    let set = new Set()

    nums.sort((a,b) => a - b)

    for (let start = 0, end = nums.length - 1; start < end; start++, end--) {
        set.add((nums[start] + nums[end]) / 2)
    }

    return set.size
};