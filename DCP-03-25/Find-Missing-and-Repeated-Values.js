/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    let repeated, missing
    let flatGrid = grid.flat()
    let count = new Map()

    for (let num of flatGrid) {
        count.set(num, (count.get(num) || 0) + 1)
    }

    for (let num = 1; num <= grid.length * grid.length; num++) {
        if (count.get(num) === 2) repeated = num
        else if (!count.has(num)) missing = num
    }
    return [repeated, missing]
};