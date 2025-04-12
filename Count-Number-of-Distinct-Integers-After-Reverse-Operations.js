/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
    /**
    idea:
        revese each element in array and push it to array
        return number of distinct values in array
    approach:
        loop on each element on array and reverse it using any method(a-cast to string and revesre b-using devision)
        count distinct eletment and return the count
        complexity 
        loop-->n
        reverse-->m
    
     */
    
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 10) arr.push(nums[i])

        else {
            let char = nums[i].toString().split('').reverse().join('')
            arr.push(parseInt(char))
        }
    }

    for (let i = 0; i < arr.length; i++) nums.push(arr[i])

    return new Set(nums).size
};