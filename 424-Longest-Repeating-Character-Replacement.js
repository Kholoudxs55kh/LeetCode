/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let output = 0

    for (let i = 65; i < 91; i++) {
        let count = 0
        let x = 0
        for (let j = 0; j < s.length; j++) {
            if (s[j] !== String.fromCharCode(i)) count++

            while (k < count ) {
                if (s[x] !== String.fromCharCode(i)) count--
                x++
            }

            output = Math.max(output, j - x + 1)
        }
    }

    return output
};