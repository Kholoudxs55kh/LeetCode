/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function (s1, s2, s3) {
    let count = 0

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i] || s1[i] !== s3[i]) break
        
        count++
    }

    return count === 0 ? -1 : (s1.length + s2.length + s3.length) - (3 * count)

};