/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    /**

    idea: return the number of unique elements \k\ and modify the nums array with the first \k\ elements are unique

    edge cases: if nums length equal 1 return nums length

    approach: 
        up to us

    */
    let count = 1
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[count] = nums[i + 1]
            console.log(nums)
            count++
        }
    }
    return count
};