/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let set = new Set()
    let res = new Set()

    for (let i = 0; i < s.length - 9; i++) {
        if (s[i + 9] != undefined) {
            const substr = s.substring(i, i + 10)
            if (!set.has(substr)) set.add(substr)
            else res.add(substr)
        }
    }
    return [...res]
};