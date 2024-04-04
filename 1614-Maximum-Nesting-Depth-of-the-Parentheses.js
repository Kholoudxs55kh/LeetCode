/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let count = 0;
    let max = 0;
    for (let c of s) {
        if (c === '(') {
            count++;
            if (max < count)
                max = count;
        } else if (c === ')') {
            count--;
        }
    }
    return max;
};