/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let res = 0
    nums.forEach(num => {
        let isEven = num.toString().split("").length % 2 == 0
        isEven ? res += 1 : 0

    })
    return res
};