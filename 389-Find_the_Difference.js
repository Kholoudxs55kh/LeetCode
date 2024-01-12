/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    // const t_ = Array.from(t)

    // if (t.length > s.length) return t[t.length - 1]

    // for (let i in t_) {
    //     if (!Array.from(s).includes(t_[i])) return t_[i]

    // }

    // return ""

    // will be back => the random spot => to track the idxes

    // now as in python 
    if (t.length > s.length) {
        for (let i of t) {
            if (t.split(i).length > s.split(i).length) {
                return i;
            }
        }
    }
    return "";
}
