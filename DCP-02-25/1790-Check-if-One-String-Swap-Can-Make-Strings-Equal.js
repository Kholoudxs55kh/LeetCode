/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    if (s1.length != s2.length) return false


    // return Array.from(s1).sort().join("") === Array.from(s2).sort().join("")
    let idx = 0
    let times = 2
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] != s2[i] && times == 2) {
            times = 1
            idx = i
        } else if (s1[i] != s2[i] && times == 1) {
            if (s1[idx] != s2[i] || s1[i] != s2[idx]) return false
            times = 0
        } else if (s1[i] != s2[i] && times == 0) return false
    }

    return times !== 1
};