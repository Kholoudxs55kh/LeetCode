/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors, k) {
    let count = 0, valid = 1

    for (let i = 1; i < colors.length + k - 1; i++) {
        
        if (colors[i % colors.length] !== colors[(i - 1) % colors.length]) valid++
        
        else valid = 1

        if (valid >= k) count++
    }

    return count
};