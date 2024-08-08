/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
    // length is even
    // num, empty arr
    // one move per line
    // Alice => removes min => then bob 
    // Bob appends his own, then alice

    // [5, 4, 3, 2]
    // Alice => 2
    // Bob => 3
    // Bob [3]
    // Alice [3, 4]

    // [2,7,9,6,4,6]
    let arr = []
    nums.sort((a, b) => b - a) // [9, 7, 6, 6, 4, 2]
    while (nums.length > 0) {
        const Alice = nums.pop() // 1 => 2 // 2 => 6 // 3 => 7
        const Bob = nums.pop() // 1 => 4 // 2 => 6 // 3 => 9
        arr.push(Bob) // 1 => [4] // [4, 2, 6] // [4, 2, 6, 6, 9]
        arr.push(Alice) // 1 => [4, 2] // [4, 2, 6, 6] // [4, 2, 6, 6, 9, 7]
        // [9, 7]
    }

    return arr
};