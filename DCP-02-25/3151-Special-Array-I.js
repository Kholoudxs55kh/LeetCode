/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
    /**
    Idea:
        even odd even odd => true
        even even => false
        odd odd  => false
    
    Edge Cases:
        N/A

    Approach:
        iterate over the array and check the elemet and what's next or prev, if both even or odd return false, else return true
    */

    for (let i = 1; i < nums.length; i++) if (nums[i] % 2 === nums[i - 1] % 2) return false

    return true
}