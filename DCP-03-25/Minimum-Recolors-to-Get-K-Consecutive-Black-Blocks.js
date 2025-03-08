/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
    let count = 0
    let min = Infinity
    for (let i = 0; i < blocks.length; i++) {
        if ((i - k) >= 0 && blocks[i - k] !== "B") count--
        if (blocks[i] !== "B") count++
        if ((i + 1 - k) >= 0) min = Math.min(min, count)
    }
    return min
};