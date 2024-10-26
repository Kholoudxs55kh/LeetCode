/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    const sortedS = Array.from(s).sort().join("")
    const sortedT = Array.from(t).sort().join("")

    for (let i = 0;i < s.length; i++) {
        if (sortedS[i] !== sortedT[i]) return false
    }

    return true
};