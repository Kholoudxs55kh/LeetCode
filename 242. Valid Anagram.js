/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    let s_ = Array.from(s).sort().join("")
    let t_ = Array.from(t).sort().join("")
    // console.log(s_, t_)
        if (s_ === t_) return true
        
        return false
};

// console.log(isAnagram("khol", "lokh"))
