/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max = 0, sum = 0;

    for (let g of gain) {
        sum += g;
        max = Math.max(max, sum)
    }

    return max
};